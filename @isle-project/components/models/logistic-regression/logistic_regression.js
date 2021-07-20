// MODULES //

import { Matrix, solve } from 'ml-matrix';
import abs from '@stdlib/math/base/special/abs';
import ln from '@stdlib/math/base/special/ln';
import pow from '@stdlib/math/base/special/pow';
import exp from '@stdlib/math/base/special/exp';
import xlogy from '@stdlib/math/base/special/xlogy';
import EPS from '@stdlib/constants/float64/eps';
import dbern from '@stdlib/stats/base/dists/bernoulli/pmf';
import sqrt from '@stdlib/math/base/special/sqrt';
import mmult from '@isle-project/utils/mmult';
import transpose from '@isle-project/utils/transpose';
import sum from '@isle-project/utils/statistic/sum';
import multiplyMatrices from './multiply_matrices.js';
import colMult from './col_mult.js';
import multiply from './multiply.js';


// VARIABLES //

const MAX_IT = 25;
const EPSILON = 1e-8;


// FUNCTIONS //

const variance = ( mu ) => {
	const out = new Float64Array( mu.length );
	for ( let i = 0; i < mu.length; i++ ) {
		out[ i ] = mu[ i ] * ( 1.0 - mu[ i ] );
	}
	return out;
};

const logitLink = ( mu ) => {
	const n = mu.length;
	const out = new Float64Array( n );
	for ( let i = 0; i < n; i++ ) {
		out[ i ] = ln( mu[ i ] / ( 1 - mu[ i ] ) );
	}
	return out;
};

const logitLinkInv = ( eta ) => {
	const n = eta.length;
	const out = new Float64Array( n );
	for ( let i = 0; i < n; i++ ) {
		const etai = eta[i];
		if ( abs( etai ) > 30 ) {
			out[ i ] = EPS;
		} else {
			const x = exp( etai );
			out[ i ] = x / ( 1 + x );
		}
	}
	return out;
};

const logitMuEta = ( eta ) => {
	const n = eta.length;
	const out = new Float64Array( n );
	for ( let i = 0; i < n; i++) {
		const val = eta[i];
		if ( abs( val ) > 30 ) {
			out[ i ] = EPS;
		} else {
			out[ i ] = exp( val ) / pow( 1 + exp( val ), 2 );
		}
	}
	return out;
};

const aic = ( y, mu, numParameters ) => {
	let logLik = 0;
	for ( let i = 0; i < y.length; i++ ) {
		logLik += ln( dbern( y[ i ], mu[ i ] ) );
	}
	return -2 * logLik + 2*numParameters;
};

const devResids = ( y, mu, wt ) => {
	const n = y.length;
	const out = new Float64Array( n );
	for ( let i = 0; i < n; i++ ) {
		const mui = mu[ i ];
		const yi = y[ i ];
		out[ i ] = 2.0 * wt[ i ] *
		( xlogy( yi, yi / mui ) + xlogy( 1 - yi, ( 1 - yi ) / ( 1 - mui ) ) );
	}
	return out;
};

const calcW = ( weights, gprime, varg ) => {
	const out = new Float64Array( weights.length );
	for ( let i = 0; i < weights.length; i++ ) {
		out[ i ] = weights[ i ] * ( gprime[i]*gprime[i] / varg[ i ] );
	}
	return out;
};

const calcZ = ( eta, y, mu, gprime ) => {
	const out = new Float64Array( y.length );
	for ( let i = 0; i < y.length; i++ ) {
		out[ i ] = eta[ i ] + ( y[ i ] - mu[ i ] ) / gprime[ i ];
	}
	return out;
};

function sigmoid( x ) {
	const result = new Float64Array( x.length );
	for ( let i = 0; i < x.length; i++) {
		result[ i ]= 1 / (1 + exp(-x[i]) );
	}
	return result;
}

function stdErrors( matrix, yhat ) {
	const w = new Float64Array( yhat.length );
	for ( let i = 0; i < w.length; i++ ) {
		w[ i ] = yhat[ i ] * ( 1 - yhat[ i ] );
	}
	const [ nrow, ncol ] = matrix.shape;
	const errs = new Float64Array( ncol );
	for ( let j = 0; j < errs.length; j++ ) {
		let sum = 0;
		for ( let i = 0; i < nrow; i++ ) {
			sum += pow( matrix.get( i, j ), 2 ) * w[ i ];
		}
		errs[ j ] = sqrt( 1.0 / sum );
	}
	return errs;
}


// MAIN //

/**
* Iteratively re-weighted least squares algorithm.
*/
function irls( X, y, nObs ) {
	const Xt = transpose( X );
	const weights = new Array( nObs ).fill( 1 );

	const mustart = new Float64Array( weights.length );
	for ( let i = 0; i < nObs; i++ ) {
		mustart[ i ] = ( weights[ i ] * y[ i ] + 0.5 ) / ( weights[ i ] + 1 );
	}
	let eta = logitLink( mustart );
	let mu = logitLinkInv( eta );
	let devOld = sum( devResids( y, mu, weights ) );

	let beta;
	let j;
	let converged = false;
	for ( j = 0; j < MAX_IT; j++ ) {
		const varg = variance( mu );
		const gprime = logitMuEta( eta );
		const z = calcZ( eta, y, mu, gprime );
		const w = calcW( weights, gprime, varg );
		const wz = multiply( w, z );
		const Xw = colMult( X, w );
		const A = multiplyMatrices( Xt, Xw );
		const b = mmult( Xt, wz );
		beta = solve( A, Matrix.columnVector( b ) );
		eta = mmult( X, beta.to1DArray() );
		mu = logitLinkInv( eta );
		const dev = sum( devResids( y, mu, weights ) );
		if ( abs( dev - devOld ) / ( 0.1 + abs( dev ) ) < EPSILON ) {
			converged = true;
			break;
		}
		devOld = dev;
	}
	const coefficients = beta.to1DArray();
	const predict = ( X ) => {
		const finalData = mmult( X, coefficients );
		const predictions = sigmoid( finalData );
		return predictions;
	};
	const fitted = predict( X, coefficients );
	return {
		aic: aic( y, logitLinkInv( eta ), coefficients.length ),
		stdErrors: stdErrors( X, fitted ),
		fitted,
		coefficients,
		iterations: j,
		converged,
		predict
	};
}


// EXPORTS //

export default irls;
