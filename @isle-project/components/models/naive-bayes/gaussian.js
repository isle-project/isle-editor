// MODULES //

import uniq from 'uniq';
import ndarray from '@stdlib/ndarray/array';
import isArrayArray from '@stdlib/assert/is-array-array';
import isMatrixLike from '@stdlib/assert/is-matrix-like';
import exp from '@stdlib/math/base/special/exp';
import ln from '@stdlib/math/base/special/ln';
import pow from '@stdlib/math/base/special/pow';
import PI from '@stdlib/constants/math/float64-pi';
import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import max from '@isle-project/utils/statistic/max';
import subtract from '@isle-project/utils/subtract';


// MAIN //

/**
* Naive Bayes fitting object constructor for normal distribution.
*
* @constructor
* @param {Matrix} x - design matrix
* @param {Array} y - vector of class memberships
* @returns {GaussianFit} GaussianFit instance
*/
function GaussianFit( x, y ) {
	this.n = x.shape[ 0 ];
	this.p = x.shape[ 1 ];

	this.classes = uniq( y.slice() );
	this.nclass = this.classes.length;

	this.fitGaussian( x, y );
}

GaussianFit.prototype.score = require( './score.js' );


/**
* Fit the data under the assumption that p(x_i|c) follows a normal distribution.
*
* ## Notes
*
* -   Assigns prior and conditional probabilities of BayesFit instance.
*
* @param {Matrix} x - design matrix
* @param {Array} y - vector of class memberships
* @returns {void}
*/
GaussianFit.prototype.fitGaussian = function fitGaussian( x, y ) {
	this.prior = {};
	const shape = [ this.p, this.nclass ];
	this.mu = ndarray( new Float64Array( shape[0]*shape[1] ), { 'shape': shape } );
	this.sigma = ndarray( new Float64Array( shape[0]*shape[1] ), { 'shape': shape } );
	for ( let i = 0; i < this.nclass; i++ ) {
		const ids = [];
		const c = this.classes[ i ];
		for ( let j = 0; j < this.n; j++ ) {
			if ( y[ j ] === c ) {
				ids.push( j );
			}
		}
		const nc = ids.length;
		this.prior[ c ] = ln( nc / this.n );
		for ( let j = 0; j < this.p; j++ ) {
			const vals = ids.map( i => x.get( i, j ) );
			const mu = mean( vals );
			const sigma = stdev( vals );
			this.mu.set( j, i, mu );
			this.sigma.set( j, i, sigma );
		}
	}
};

/**
* Calculate p(X=x,C=i), i.e. the joint probability of observation x and class i.
*
* @param {Array} x - new observation
* @param {number} i - class indicator
* @returns {number} log probability
*/
GaussianFit.prototype.calcGaussianProb = function calcGaussianProb( x, i ) {
	const c = this.classes[ i ];
	let res = this.prior[ c ];

	for ( let j = 0; j < this.p; j++ ) {
		const sigma = this.sigma.get( j, i );
		const s2 = sigma*sigma;
		const mu = this.mu.get( j, i );
		const val = ( -0.5 * ln( 2 * PI * s2 ) ) - ( pow( x[ j ] - mu, 2 ) / s2 );
		res += val;
	}
	return res;
};

/**
* Predict class membership for one new observation.
*
* @param {Array} x - new observation
* @returns {(number|string)} predicted class membership
*/
GaussianFit.prototype.predictOne = function predictOne( x ) {
	const nClasses = this.classes.length;
	const logLik = new Array( nClasses );
	for ( let i = 0; i < nClasses; i++ ) {
		logLik[ i ] = this.calcGaussianProb( x, i );
	}
	let max = logLik[ 0 ];
	let argmax = this.classes[ 0 ];
	for ( let i = 0; i < nClasses; i++ ) {
		const val = logLik[ i ];
		if ( val > max ) {
			max = val;
			argmax = this.classes[ i ];
		}
	}
	return argmax;
};

/**
* Predict class membership for new observation(s).
*
* @param {(Matrix|Array)} x - new observation(s)
* @returns {Array} array of predicted class memberships
*/
GaussianFit.prototype.predict = function predict( x ) {
	const nClasses = this.classes.length;
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	}
	// Case A: Predictions for multiple observations:
	if ( isMatrixLike( x ) ) {
		const [ nrow, ncol ] = x.shape;
		const ret = new Array( nrow );
		for ( let i = 0; i < nrow; i++ ) {
			const logLik = new Array( nClasses );
			for ( let j = 0; j < nClasses; j++ ) {
				const arr = new Array( ncol );
				for ( let k = 0; k < ncol; k++ ) {
					arr[ k ] = x.get( i, k );
				}
				logLik[ j ] = this.calcGaussianProb( arr, j );
			}
			let max = logLik[ 0 ];
			let argmax = this.classes[ 0 ];
			for ( let j = 0; j < nClasses; j++ ) {
				const val = logLik[ j ];
				if ( val > max ) {
					max = val;
					argmax = this.classes[ j ];
				}
			}
			ret[ i ] = argmax;
		}
		return ret;
	}
	// Case B: Only one new observation:
	return this.predictOne( x );
};

/**
* Calculates class membership probabilities.
*
* @param {(Matrix|Array)} x - design matrix
* @returns {Array} class probabilities
*/
GaussianFit.prototype.predictProbs = function predictProbs( x ) {
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	}
	// Case A: Predictions for multiple observations:
	if ( isMatrixLike( x ) ) {
		const [ nrow, ncol ] = x.shape;
		const ret = new Array( nrow );
		for ( let i = 0; i < nrow; i++ ) {
			let logLik = new Array( this.nclass );
			for ( let j = 0; j < this.nclass; j++ ) {
				const arr = new Array( ncol );
				for ( let k = 0; k < ncol; k++ ) {
					arr[ k ] = x.get( i, k );
				}
				logLik[ j ] = this.calcGaussianProb( arr, j );
			}
			const a = max( logLik );
			let summand = 0;
			for ( let j = 0; j < logLik.length; j++ ) {
				summand += exp( logLik[ j ] - a );
			}
			const denom = a + ln( summand );
			logLik = subtract( logLik, denom );
			ret[ i ] = logLik.map( x => exp( x ) );
		}
		return ret;
	}
	// Case B: Create prediction for a single observation:
	const logLik = new Array( this.nclass );
	for ( let j = 0; j < this.nclass; j++ ) {
		logLik[ j ] = this.calcGaussianProb( x, j );
	}
	const a = max( logLik );
	let summand = 0;
	for ( let j = 0; j < logLik.length; j++ ) {
		summand += exp( logLik[ j ] - a );
	}
	const denom = a + ln( summand );
	logLik = subtract( logLik, denom );
	return logLik.map( x => exp( x ) );
};


// EXPORTS //

export default GaussianFit;
