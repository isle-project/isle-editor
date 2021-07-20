// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes the sum of elements of a numeric array.
*
* @param {Array} arr - input array
* @returns {(number|null)} sum or null
*/
function sum( arr ) {
	if ( !arr ) {
		return null;
	}
	const len = arr.length;
	if ( !len ) {
		return null;
	}
	let out = 0;
	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		out += arr[ i ];
	}
	return out;
}


// EXPORTS //

export default sum;
