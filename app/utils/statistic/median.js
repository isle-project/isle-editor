/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/median
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';
import floor from '@stdlib/math/base/special/floor';


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a
* @param {number} b
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Computes the median of an array.
*
* @param {Array} arr - input array
* @returns {(number|null)} median value or null
*/
function median( arr ) {
	const len = arr.length;
	if ( !len ) {
		return null;
	}
	const d = [];
	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		d.push( arr[ i ] );
	}

	// Sort data in ascending order:
	d.sort( ascending );

	// Get the middle index:
	const id = floor( len / 2 );

	if ( len % 2 ) {
		// The number of elements is not evenly divisible by two, hence we have a middle index:
		return d[ id ];
	}
	// Even number of elements, so must take the mean of the two middle values:
	return ( d[ id-1 ] + d[ id ] ) / 2.0;
}


// EXPORTS //

export default median;
