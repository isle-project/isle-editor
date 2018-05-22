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
var log2 = require( '@stdlib/math/base/special/log2' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var log10 = require( '@stdlib/math/base/special/log10' );
var choose = require( '@stdlib/math/base/special/binomcoef' );
var factorial = require( '@stdlib/math/base/special/factorial' );
var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );
var FLOAT64_MIN_SAFE_INTEGER = require( '@stdlib/constants/math/float64-min-safe-integer' );
var isDigitString = require( '@stdlib/assert/is-digit-string' );
var isEmptyString = require( '@stdlib/assert/is-empty-string' );
var isAlphaNumeric = require( '@stdlib/assert/is-alphanumeric' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// VARIABLES //

var order = {
	'/': 1,
	'*': 1.5,
	'+': 2,
	'-': 2.5
};

var funs = {
	'sin(': sin,
	'cos(': cos,
	'tan(': tan,
	'ln(': ln,
	'sqrt(': sqrt,
	'square(': function square(x) { return multiply(x, x); },
	'choose(': choose,
	'factorial(': factorial,
	'log10(': log10,
	'log2(': log2,
	'pow(': pow,
	'abs(': abs,
	'log(': log,
	'exp(': exp,
	'inv(': inv
};

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

// MAIN //

function evaluateStr(expression) {
	var splitArr;
	var reLetter; // use re_letter.test()
	var xEval;
	var yEval;
	var ans;
	var fun;
	var op;
	var i;
	var j;
	var k;
	var x;
	var y;

	// REGEXP for letter, the i ignores casing considerations
	reLetter = /[a-z]/i;
	if ( isDigitString(expression) ) {
		return parseFloat(expression);
	}

	i = 0;
	while ( (expression[i] === '.') || (isDigitString(expression[i])) || (expression[i] === ' ') ) {
		i++;
	}
	console.log(expression[i]);
	// We stop on our first operation
	if ( !reLetter.test(expression[i]) ) {
		// We know it is not a letter

		op = expression[i];
		x = expression.substring(0, i);
		y = expression.substring(i + 1, expression.length);


		if ( order[op] >= 2 ) {
			// We know that we have a primitive operation --> case on operation
			if ( isEmptyString(x.trim()) ) {
				xEval = 0;
			} else {
				xEval = evaluateStr(x.trim());
			}
			yEval = evaluateStr(y.trim());

			if ( op === '+' ) {
				ans = add(xEval, yEval);
			} else {
				ans = subtract(xEval, yEval);
			}
		} else {
			xEval = evaluateStr(x.trim());
			yEval = evaluateStr(y.trim());

			if ( op === '*' ) {
				ans = multiply(xEval, yEval);
			} else {
				ans = divide(xEval, yEval);
			}
		}
	} else {
		// handle pi case before
		console.log('we made it into the letters');
		// we know it is a letter
		// loop until we have the open paren
		j = i;
		while ( isAlphaNumeric(expression[j]) ) {
			j++;
		}
		console.log(i, j);
		console.log(expression.substring(i, j));

		// Check if we have an open par
		if ( expression[j] === '(' ) {
			console.log('open paren');
			// We know that it is a function --> evaluate it
			// Loop through k to get to the end
			k = j + 1;
			while ( k < expression.length && expression[k] !== ')' ) {
				k++;
			}

			if ( k === expression.length ) {
				throw new Error('Parenthesis not closed!');
			}

			fun = expression.substring(i, j + 2);
			console.log(fun);

			if ( hasOwnProp(funs, fun) ) {
				// We know it is a function
				if ( fun.length === 1 ) {
					// We know it takes one argument look for the )
					// Check to make sure that we can go to j + 2

					xEval = evaluateStr(expression.substring(j + 2, k));
					ans = fun(xEval);
				}
				// We get the x and y
				splitArr = expression.substring(j + 2, k).split(',');
				xEval = evaluateStr(splitArr[0].trim());
				yEval = evaluateStr(splitArr[1].trim());
				ans = fun(xEval, yEval);
			}
		}
	}
	return ans;
}

var a = 'sin(5)';
console.log(evaluateStr(a));
