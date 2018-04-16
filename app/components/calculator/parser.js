// MODULES //

var ln = require( '@stdlib/math/base/special/ln' );
var sin = require( '@stdlib/math/base/special/sin' );
var cos = require( '@stdlib/math/base/special/cos' );
var tan = require( '@stdlib/math/base/special/tan' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var inv = require( '@stdlib/math/base/special/inv' );
var exp = require( '@stdlib/math/base/special/exp' );
var log = require( '@stdlib/math/base/special/log' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var log10 = require( '@stdlib/math/base/special/log10' );
var choose = require( '@stdlib/math/base/special/binomcoef')
var factorial = require( '@stdlib/math/base/special/factorial' );
var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var FLOAT64_MIN_SAFE_INTEGER = require( '@stdlib/constants/math/float64-min-safe-integer' );
var isDigitString = require( '@stdlib/assert/is-digit-string' );


// FUNCTIONS //

/**
* Safe addition function for use in the parser.
*
* @param {number} x - first value to be added to second value
* @param {number} y - second value to be added to first value
* @throws {Error} X must not exceed int max
* @throws {Error} X must not be below int min
* @throws {Error} Y must not exceed int max
* @throws {Error} Y must not be below int min
* @throws {Error} Sum must not exceed int max
* @throws {Error} Difference must not be exceeded by int min
* @returns {number} the sum of X and Y
*/
function add(x, y) {
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

	return x + y;
}

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

/**
* Safe multiplication function for use in the parser.
*
* @param {number} x - value to be multiplied by the second value
* @param {number} y - value to be multiplied by the first value
* @throws {Error} X must not exceed int max
* @throws {Error} X must not be below int min
* @throws {Error} Y must not exceed int max
* @throws {Error} Y must not be below int min
* @throws {Error} Product must not exceed int max
* @throws {Error} Product must not be exceeded by int min
* @returns {number} the multiplication of X and Y
*/
function multiply(x, y) {
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

	if ( (y !== 0) && (x > FLOAT64_MAX / y) ) {
		throw new Error('Product must not exceed int max');
	}

	if ( (y !== 0) && (x < FLOAT64_MIN_SAFE_INTEGER / y) ) {
		throw new Error('Product must not be exceeded by int min');
	}

	return x * y;
}

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
function division(x, y) {
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

// MAIN //

function evaluateStr(expression) {
	var reLetter; // use re_letter.test()
	var xEval;
	var yEval;
	var order;
	var ops;
	var op;
	var i;
	var x;
	var y;

	order = {
		'/': 1,
		'*': 1.5,
		'+': 2,
		'-': 2.5
	};

	// REGEXP for letter, the i ignores casing considerations
	reLetter = /[a-z]/i;

	if ( isDigitString(expression) ) {
		return parseFloat(expression);
	}

	while ( (expression[i] === '.') || (isDigitString(expression[i])) || (expression[i] === ' ') ) {
		i++;
	}

	// we stop on our first operation
	if ( !reLetter.test(expression[i]) ) {
		// we know it is not a letter

		op = expression[i];
		x = expression.substring(0, i);
		y = expression.substring(i + 1, expression.length);

		if ( order[op] >= 2 ) {
			// we know that we have a primitive operation --> case on operation
			xEval = evaluateStr(x);
			yEval = evaluateStr(y);

			if ( op === '+' ) {
				return add(xEval, yEval);
			} else {
				assert( op === '-' );
				return subtract(xEval, yEval);
			}
		} else {
			// we know we have something
			xEval = evaluateStr(x);
			yEval = evaluateStr(y);

			if ( op === '*' ) {
				return multiply(xEval, yEval);
			} else {
				assert( op === '/' );
				return divide(xEval, yEval);
			}
		}

	}




}
