/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/mean
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes the arithmetic mean of a numeric array.
*
* @param {Array} arr - input array
* @returns {(number|null)} arithmetic mean or null
*/
function mean( arr ) {
	const len = arr.length;
	if ( !len ) {
		return null;
	}
	let mu = 0;
	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		let delta = arr[ i ] - mu;
		mu += delta / (i+1);
	}
	return mu;
}


// EXPORTS //

export default mean;
