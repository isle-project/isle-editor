// MODULES //

import isArrayLike from '@stdlib/assert/is-array-like';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';


// MAIN //

/**
* Computes an element-wise division.
*
* @param {NumberArray} arr - input array
* @param {(NumberArray|number)} x - either an array of equal length or a scalar
* @returns {NumberArray} output array
*/
function divide( arr, x, opts ) {
	const isArr = isArrayLike( x );
	if ( !isArrayLike( arr ) ) {
		throw new TypeError( 'invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( !isArr && !isNumber( x ) ) {
		throw new TypeError( 'invalid input argument. Second argument must either be an array or number primitive. Value: `' + x + '`.' );
	}
	const len = arr.length;
	const out = new Array( len );

	// Case 1: x is an array
	if ( isArr ) {
		if ( len !== x.length ) {
			throw new Error( 'invalid input argument. Array to be divided must have a length equal to that of the input array.' );
		}
		for ( let i = 0; i < len; i++ ) {
			out[ i ] = arr[ i ] / x[ i ];
		}
	}
	// Case 2: scalar
	else {
		for ( let i = 0; i < len; i++ ) {
			out[ i ] = arr[ i ] / x;
		}
	}
	return out;
}


// EXPORTS //

export default divide;
