/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/stdev
*/

// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import sqrt from '@stdlib/math/base/special/sqrt';


// MAIN //

/**
* Computes the sample standard deviation over an array of values.
*
* @param {Array} arr - array of values
* @returns {number} sample standard deviation
*/
function stdev( arr ) {
	const len = arr.length;
	let N = 0;
	let mean = 0;
	let M2 = 0;
	let delta = 0;

	if ( len < 2 ) {
		return 0;
	}
	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[i] ) ) {
			return NaN;
		}
		N += 1;
		delta = arr[ i ] - mean;
		mean += delta / N;
		M2 += delta * ( arr[i] - mean );
	}
	return sqrt( M2 / ( N-1 ) );
}


// EXPORTS //

export default stdev;
