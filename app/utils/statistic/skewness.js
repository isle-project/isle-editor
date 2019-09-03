/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/range
*/

// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import sqrt from '@stdlib/math/base/special/sqrt';
import pow from '@stdlib/math/base/special/pow';


// MAIN //

/**
*Computes the sample skewness of an array of values.
*
* @param {Array} arr - array of values
* @returns {number} sample skewness
*/
function skewness( arr ) {
	const len = arr.length;
	let delta = 0;
	let deltaN = 0;
	let term1 = 0;
	let N = 0;
	let mean = 0;
	let M2 = 0;
	let M3 = 0;

	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		N += 1;
		delta = arr[ i ] - mean;
		deltaN = delta / N;

		term1 = delta * deltaN * (N-1);

		M3 += term1*deltaN*(N-2) - 3*deltaN*M2;
		M2 += term1;
		mean += deltaN;
	}
	// Calculate the population skewness:
	const g = sqrt( N )*M3 / pow( M2, 3/2 );

	// Return the corrected sample skewness:
	return sqrt( N*(N-1))*g / (N-2);
}


// EXPORTS //

export default skewness;
