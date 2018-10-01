/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/iqr
*/

// MODULES //

import quantile from './quantile.js';


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Computes the interquartile range for an array.
*
* @param {Array} arr - array of values
* @returns {number} interquartile range
*/
function iqr( arr ) {
	arr = arr.slice();
	arr.sort( ascending );
	return quantile( arr, 0.75 ) - quantile( arr, 0.25 );
}


// EXPORTS //

module.exports = iqr;
