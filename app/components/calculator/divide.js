// MODULES //

var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var FLOAT64_MIN_SAFE_INTEGER = require( '@stdlib/constants/math/float64-min-safe-integer' );

/**
* Safe division function for use in the parser.
*
* @param {number} x - value to be divided by the second
* @param {number} y - value that will divide the first
* @throws {Error} X must not exceed int max
* @throws {Error} X must not be below int min
* @throws {Error} Y must not exceed int max
* @throws {Error} Y must not be below int min
* @throws {Error} Y must not be zero
* @throws {Error} Product must not exceed int max
* @throws {Error} Product must not be exceeded by int min
* @returns {number} the multiplication of X and Y
*/
function divide(x, y) {
	if ( x > FLOAT64_MAX ) {
		throw new Error('X must not exceed int max');
	}

	if ( x < FLOAT64_MIN_SAFE_INTEGER ) {
		throw new Error('X must not be below int min');
	}

	if ( y > FLOAT64_MAX ) {
		throw new Error('Y must not exceed int max');
	}

	if ( y < FLOAT64_MIN_SAFE_INTEGER ) {
		throw new Error('Y must not be below int min');
	}

	if ( y === 0 ) {
		throw new Error('Y must not be zero');
	}

	if ( x > FLOAT64_MAX / y ) {
		throw new Error('Product must not exceed int max');
	}

	if ( x < FLOAT64_MIN_SAFE_INTEGER / y ) {
		throw new Error('Product must not be exceeded by int min');
	}

	return x / y;
}

// export default divide;
