// MODULES //

var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var FLOAT64_MIN_SAFE_INTEGER = require( '@stdlib/constants/math/float64-min-safe-integer' );

/**
* Safe subtraction function for use in the parser.
*
* @param {number} x - first value from which second value is to be subtracted
* @param {number} y - value to be subtracted from first value
* @throws {Error} X must not exceed int max
* @throws {Error} X must not be below int min
* @throws {Error} Y must not exceed int max
* @throws {Error} Y must not be below int min
* @throws {Error} Sum must not exceed int max
* @throws {Error} Difference must not be exceeded by int min
* @returns {number} the difference of X and Y
*/
function subtract(x, y) {
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

	if ( (y > 0) && (x > FLOAT64_MAX - y) ) {
		throw new Error('Sum must not exceed int max');
	}

	if ( (y < 0) && (x < FLOAT64_MIN_SAFE_INTEGER + y) ) {
		throw new Error('Difference must not exceed int max');
	}

	return x - y;
}

// export default subtract;
