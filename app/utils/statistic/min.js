/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/min
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes the minimum value of an array.
*
* @param {Array} arr - array of values
* @returns {number} min value
*/
function min( arr ) {
	let val = arr[ 0 ];
	for ( let i = 1; i < arr.length; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		if ( arr[ i ] < val ) {
			val = arr[ i ];
		}
	}
	return val;
}


// EXPORTS //

export default min;
