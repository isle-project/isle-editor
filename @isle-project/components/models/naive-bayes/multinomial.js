// MODULES //

import uniq from 'uniq';
import ndarray from '@stdlib/ndarray/array';
import max from '@isle-project/utils/statistic/max';
import subtract from '@isle-project/utils/subtract';
import exp from '@stdlib/math/base/special/exp';
import isArrayArray from '@stdlib/assert/is-array-array';
import isMatrixLike from '@stdlib/assert/is-matrix-like';
import ln from '@stdlib/math/base/special/ln';
import sum from '@isle-project/utils/statistic/sum';


// MAIN //

/**
* Naive Bayes fitting object constructor for multinomial distribution.
*
* @constructor
* @param {Matrix} x - design matrix
* @param {Array} y - vector of class memberships
* @param {number} alpha - Laplace smoothing parameter
* @returns {MultinomialFit} MultinomialFit instance
*/
function MultinomialFit( x, y, alpha ) {
	this.n = x.shape[ 0 ];
	this.p = x.shape[ 1 ];

	this.classes = uniq( y.slice() );
	this.nclass = this.classes.length;
	this.alpha = alpha;

	this.fitMultinomial( x, y );
}

MultinomialFit.prototype.score = require( './score.js' );


/**
* Fit the data under the assumption that p(x_i|c) follows a multinomial distribution.
*
* ## Notes
*
* -   Assigns prior and conditional probabilities of BayesFit instance.
*
* @param {Matrix} x - design matrix
* @param {Array} y - vector of class memberships
* @returns {Void}
*/
MultinomialFit.prototype.fitMultinomial = function fitMultinomial( x, y ) {
	const prior = {};
	const shape = [ this.p, this.nclass ];
	const cprob = ndarray( new Float64Array( shape[0]*shape[1] ), { 'shape': shape } );
	for ( let i = 0; i < this.nclass; i++ ) {
		const ids = [];
		const counts = new Int32Array( this.p );
		const c = this.classes[ i ];
		for ( let j = 0; j < this.n; j++ ) {
			if ( y[ j ] === c ) {
				ids.push( j );
			}
		}
		const nc = ids.length;
		prior[ c ] = ln( nc / this.n );
		let totalCount = 0;
		for ( let j = 0; j < this.p; j++ ) {
			const vals = ids.map( i => x.get( i, j ) );
			counts[ j ] = sum( vals );
			totalCount += counts[ j ];
		}
		for ( let j = 0; j < this.p; j++ ) {
			const val = ln( counts[ j ] + this.alpha ) - ln( totalCount + this.p * this.alpha );
			cprob.set( j, i, val );
		}
	}
	this.prior = prior;
	this.cprob = cprob;
};

/**
* Calculates multinomial probability.
*
* @param {Array} x - new observation
* @param {number} i - class indicator
* @param {number} j - variable indicator
* @returns {number} probability
*/
MultinomialFit.prototype.calcMultinomProb = function calcMultinomProb( x, i, j ) {
	const c = this.classes[ i ];
	let res = this.prior[ c ];
	for ( j = 0; j < this.p; j++ ) {
		const val = x[ j ] ? x[ j ] * this.cprob.get( j, i ) : 0;
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
MultinomialFit.prototype.predictOne = function predictOne( x ) {
	const nClasses = this.classes.length;
	const logLik = new Array( nClasses );
	for ( let i = 0; i < nClasses; i++ ) {
		const c = this.classes[ i ];
		logLik[ i ] = this.prior[ c ];
		for ( let j = 0; j < this.p; j++ ) {
			const val = x[ j ] ? x[ j ] * this.cprob.get( j, i ) : 0;
			logLik[ i ] += val;
		}
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
MultinomialFit.prototype.predict = function predict( x ) {
	const nClasses = this.classes.length;
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	}
	// Case A: Predictions for multiple observations:
	if ( isMatrixLike( x ) ) {
		const ret = [];
		const nrow = x.shape[ 0 ];
		for ( let i = 0; i < nrow; i++ ) {
			const logLik = new Array( nClasses );
			for ( let j = 0; j < nClasses; j++ ) {
				const c = this.classes[ j ];
				logLik[ j ] = this.prior[ c ];
				for ( let k = 0; k < this.p; k++ ) {
					const val = x.get( i, k ) ? x.get( i, k ) * this.cprob.get( k, j ) : 0;
					logLik[ j ] += val;
				}
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
MultinomialFit.prototype.predictProbs = function predictProbs( x ) {
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	}
	// Case A: Predictions for multiple observations:
	if ( isMatrixLike( x ) ) {
		const nrow = x.shape[ 0 ];
		const ret = new Array( nrow );
		for ( let i = 0; i < nrow; i++ ) {
			let logLik = new Array( this.nclass );
			for ( let j = 0; j < this.nclass; j++ ) {
				const c = this.classes[ j ];
				logLik[ j ] = this.prior[ c ];
				for ( let k = 0; k < this.p; k++ ) {
					const val = x.get( i, k ) ? x.get( i, k ) * this.cprob.get( k, j ) : 0;
					logLik[ j ] += val;
				}
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
	let logLik = new Array( this.nclass );
	for ( let j = 0; j < this.nclass; j++ ) {
		const c = this.classes[ j ];
		logLik[ j ] = this.prior[ c ];
		for ( let k = 0; k < this.p; k++ ) {
			const val = x[ k ] * this.cprob.get( k, j );
			logLik[ j ] += val;
		}
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

export default MultinomialFit;
