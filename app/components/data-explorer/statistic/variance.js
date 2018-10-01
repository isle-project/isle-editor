/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/variance
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes the variance of an array.
*
* @param {Array} arr - input array
* @param {boolean} [bias=false] - boolean indicating whether to calculate a biased or unbiased estimate of the variance
* @returns {(number|null)} variance or null
*/
function variance( arr, bias ) {
	const len = arr.length;
	let delta = 0;
	let mean = 0;
	let M2 = 0;
	let N = 0;

	if ( !len ) {
		return null;
	}
	if ( len < 2 ) {
		return 0;
	}
	for ( let i = 0; i < len; i++ ) {
		let x = arr[ i ];
		if ( !isNumber( x ) ) {
			return NaN;
		}
		N += 1;
		delta = x - mean;
		mean += delta / N;
		M2 += delta * ( x - mean );
	}
	if ( bias ) {
		return M2 / ( N );
	}
	return M2 / ( N - 1 );
}


// EXPORTS //

export default variance;
