// MODULES //

import { Matrix, solve } from 'ml-matrix';
import ctor from '@stdlib/ndarray/ctor';
import abs from '@stdlib/math/base/special/abs';
import ln from '@stdlib/math/base/special/ln';
import pow from '@stdlib/math/base/special/pow';
import exp from '@stdlib/math/base/special/exp';
import xlogy from '@stdlib/math/base/special/xlogy';
import EPS from '@stdlib/constants/math/float64-eps';
import mmult from 'utils/mmult';
import multiplyMatrices from './multiply_matrices.js';
import colMult from './col_mult.js';
import multiply from './multiply.js';


// VARIABLES //

const matrix = ctor( 'float64', 2 );
const MAX_IT = 25;


// FUNCTIONS //

const transpose = ( X ) => {
	const shape = [ X.shape[ 1 ], X.shape[ 0 ] ];
	const strides = [ X.strides[ 1 ], X.strides[ 0 ] ];
	const offset = X.offset;
	const order = X.order;
	return matrix( X._buffer, shape, strides, offset, order );
};

const sum = ( arr ) => {
	let res = 0;
	for ( let i = 0; i < arr.length; i++ ) {
		res += arr[ i ];
	}
	return res;
};

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

/*
const aic = ( y, n, mu, wt, dev ) => {
	m <- if(any(n > 1)) n else wt
-2*sum(ifelse(m > 0, (wt/m), 0)*
	return dbinom(round(m*y), round(m), mu, ln=TRUE);
}
*/

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


// MAIN //

/**
* Iteratively re-weighted least squares algorithm.
*/
function irls( X, y, nObs ) {
	const Xt = transpose( X );
	const weights = new Array( nObs ).fill( 1 );

	const mustart = new Float64Array( weights.length );
	for ( let i = 0; i < nObs; i++ ) {
		mustart[ i ] = ( weights[ i ] * y[ i ] + 0.5) / ( weights[ i ] + 1 );
	}

	let eta = logitLink( mustart );
	let dev = sum( devResids( y, logitLinkInv( eta ), weights ) );
	let devOld = 0.0;

	let beta;
	let j;
	for ( j = 0; j < MAX_IT; j++ ) {
		const mu = logitLinkInv( eta );
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
		dev = sum( devResids( y, mu, weights ) );
		if ( abs( dev - devOld ) / ( 0.1 + abs( dev ) ) < EPS ) {
			break;
		}
		devOld = dev;
	}
	return {
		coefficients: beta.to1DArray(),
		iterations: j
	};
}


// EXPORTS //

export default irls;
