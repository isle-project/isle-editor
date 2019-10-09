// MODULES //

import ndarray from '@stdlib/ndarray/array';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import isArrayArray from '@stdlib/assert/is-array-array';
import isArrayLike from '@stdlib/assert/is-array-like';
import isMatrixLike from '@stdlib/assert/is-matrix-like';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import GaussianFit from './gaussian.js';
import MultinomialFit from './multinomial.js';


// MAIN //

/**
* Fits a multinomial naive Bayes model.
*
* @param {(Matrix|Array)} x - design matrix
* @param {Array} y - vector of class memberships
* @param {Object} [opts] - function options
* @param {number} [opts.alpha] - Laplace smoothing parameter
* @returns {MultinomialFit} MultinomialFit instance
*/
function multinomNB( x, y, opts ) {
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	} else if ( !isMatrixLike( x ) ) {
		const msg = 'invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `' + x + '`';
		throw new TypeError( msg );
	}
	if ( !isArrayLike( y ) ) {
		throw new TypeError( 'invalid input argument. The second argument must be array-like. Value: `' + y + '`' );
	}
	if ( arguments > 2 ) {
		if ( hasOwnProperty( opts, 'alpha' ) ) {
			if ( !isNumber( opts.alpha ) ) {
				throw new TypeError( 'invalid option. Laplace smoothing option must be a number primitive. Option: `' + opts.alpha + '`.' );
			}
		}
	}
	const alpha = opts.alpha || 1;
	const fit = new MultinomialFit( x, y, alpha );
	return fit;
}

/**
* Fits a Gaussian naive Bayes model.
*
* @param {(Matrix|Array)} x - design matrix
* @param {Array} y - vector of class memberships
* @returns {GaussianFit} model fit
*/
function gaussianNB( x, y ) {
	if ( isArrayArray( x ) ) {
		x = ndarray( x );
	} else if ( !isMatrixLike( x ) ) {
		const msg = 'invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `' + x + '`';
		throw new TypeError( msg );
	}
	if ( !isArrayLike( y ) ) {
		throw new TypeError( 'invalid input argument. The second argument must be array-like. Value: `' + y + '`' );
	}
	const fit = new GaussianFit( x, y );
	return fit;
}


// EXPORTS //

export { multinomNB as multinomial, gaussianNB as gaussian };
