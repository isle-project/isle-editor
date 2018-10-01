/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/max
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes the maximum value of a numeric array.
*
* @param {Array} arr - array of values
* @returns {number} max value
*/
function max( arr ) {
	let val = arr[ 0 ];
	for ( let i = 1; i < arr.length; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		if ( arr[ i ] > val ) {
			val = arr[ i ];
		}
	}
	return val;
}


// EXPORTS //

export default max;
