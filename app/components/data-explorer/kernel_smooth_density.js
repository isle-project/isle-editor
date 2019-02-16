// MODULES //

import isPositiveNumber from '@stdlib/assert/is-positive-number';
import isFunction from '@stdlib/assert/is-function';
import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

/**
* Calculates a weight for the i-th observation.
*
* @param {Function} kernel - kernel function
* @param {number} bandwidth - kernel bandwidth
* @param {number} x0 - point for which to calculate density
* @param {number} xi - observation for which to calculate weight
* @returns {number} i-th weight
*/
function weight( kernel, bandwidth, x0, xi ) {
	var arg = ( xi - x0 ) / bandwidth;
	return kernel( arg );
}

/**
* Sums elements of an array.
*
* @private
* @param {Array} arr - input array
* @returns {number} array sum
*/
function sum( arr ) {
	let ret = 0;
	for ( let i = 0; i < arr.length; i++ ){
		ret += arr[ i ];
	}
	return ret;
}

/**
* Allows a function to be called with a vector instead of a single number.
*
* @private
* @param {Function} fun - input function
* @returns {Function} vectorized function
*/
function vectorize( fun ) {
	return function vectorized( x ) {
		if ( !isArray( x ) ) {
			return fun( x );
		}
		return x.map( fun );
	};
}


// MAIN //

/**
* Returns a kernel density smoothing function.
*
* @param {Array} xs - input data
* @param {Function} kernel - kernel function
* @param {number} bandwidth - kernel bandwidth
* @returns {Function} kernel smoother
*/
function kernelSmoothDensity( xs, kernel, bandwidth ) {
	if ( !isPositiveNumber( bandwidth ) ) {
		throw new RangeError( 'Bandwidth has to be a positive number.' );
	}
	if ( !isFunction( kernel ) ) {
		throw new TypeError( 'Kernel function has to be supplied.' );
	}
	const _xs = xs;
	const n = xs.length;
	const weightFun = weight.bind( null, kernel, bandwidth );

	/**
	* Kernel smoother which returns a kernel density estimate at the supplied location.
	*
	* @param {number} x - input value
	* @returns {number} density estimate
	*/
	function kernelSmoother( x ) {
		const weights = _xs.map( ( xi ) => {
			return weightFun( x, xi );
		});
		const num = sum( weights );
		const denom = n * bandwidth;
		return num / denom;
	}
	return vectorize( kernelSmoother );
}


// EXPORTS //

export default kernelSmoothDensity;
