/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/range
*/

// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';


// MAIN //

/**
*Computes the sample excess kurtosis of an array of values.
*
* @param {Array} arr - array of values
* @returns {number} sample excess kurtosis
*/
function kurtosis( arr ) {
	const len = arr.length;
	let delta = 0;
	let deltaN = 0;
	let deltaN2 = 0;
	let term1 = 0;
	let N = 0;
	let mean = 0;
	let M2 = 0;
	let M3 = 0;
	let M4 = 0;

	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		N += 1;
		delta = arr[ i ] - mean;
		deltaN = delta / N;
		deltaN2 = deltaN * deltaN;

		term1 = delta * deltaN * (N-1);

		M4 += term1*deltaN2*(N*N - 3*N + 3) + 6*deltaN2*M2 - 4*deltaN*M3;
		M3 += term1*deltaN*(N-2) - 3*deltaN*M2;
		M2 += term1;
		mean += deltaN;
	}
	// Calculate the population excess kurtosis:
	const g = N*M4 / ( M2*M2 ) - 3;
	// Return the corrected sample excess kurtosis:
	return (N-1) / ( (N-2)*(N-3) ) * ( (N+1)*g + 6 );
}


// EXPORTS //

export default kurtosis;
