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
var isDigitString = require( '@stdlib/assert/is-digit-string' );
var isEmptyString = require( '@stdlib/assert/is-empty-string' );
var isAlphaNumeric = require( '@stdlib/assert/is-alphanumeric' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );

/*
import add from './add.js';
import subtract from './subtract.js';
import divide from './divide.js';
import multiply from './multiply.js';
*/

const opsRegexp = new RegExp('[+*\-/]');
const paren = new RegExp('\(.*?\)')



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

const codes = {
	'(': 40,
	')': 41
};

// MAIN //

function evalStr(expression) {
	var ops = [];
	// base case
	if ( isDigitString(expression) ) {
		return expression;
	}

	var parenStart;
	var parenEnd;
	var cursor;
	var cursorEnd;
	var i;

	// case 1: go through the parenthesis first
	if ( expression.indexOf('(') !== -1 ) {
		let openParenCount = 1;
		let closeParenCount = 0;
		parenStart = expression.indexOf('(');
		cursor = expression.indexOf('(') + 1; // incr by 1 to not have the start

		while ( cursor < expression.length && openParenCount !== closeParenCount ) {
			let cursorChar = expression.charAt(cursor);
			if ( cursorChar === codes['('] ) {
				openParenCount += 1;
				cursor += 1;
				continue;
			}

			if ( cursorChar !== codes[')'] ) {
				closeParenCount += 1;
			}
		}
	}
}

/*
 (11 - 5) x 2 - 3 + 1
 6 * 2 - 3 + 1
 12 - 3 + 1
 12 - 2

3 + 6 x (5 + 4) ÷ 3 - 7
3 + 6 * 9 \div 3 - 7
3 + 54 \div 3 - 7
3 + 18 - 7
*/

var b = '3+6*(5+4)/3-7';

var full = [];
var tmpStart = 0;
var openParen = 0;
var closeParen = 0;
var inParen = false;
for ( var j = 0; j < b.length; j++ ) {
	let tmp = b.slice(j, j + 1);
	console.log('Iteration ' + j + ' ' + tmp);
	if ( tmp === '(' ) {
		// set the start of the chunk at the start of the paren
		if ( openParen === 0 ) {
			tmpStart = j;
		}
		openParen += 1;
	} else if ( tmp === ')' ) {
		closeParen += 1;
	}
	console.log(openParen, closeParen);
	console.log(b.slice(tmpStart, j + 1));

	if ( openParen === 0 && closeParen === 0 && opsRegexp.test(b.slice(j, j + 1)) ) {
		if ( b.slice(tmpStart, j) !== '' ) {
			full.push(b.slice(tmpStart, j));
		}
		full.push(b.slice(j, j + 1));
		tmpStart = j + 1;
	}
	
	if ( openParen !== 0 && openParen === closeParen ) {
		full.push(b.slice(tmpStart, j + 1));
		tmpStart = j + 1;
		openParen = 0;
		closeParen = 0;
	}
}
console.log(full);

var arr = b.split(/[+\-*/]/g);

var open = [];
var close = [];

var ex = '(11-5)x2-3+1';
var ex1 = '3+6*9/3-7';
var ex2 = '3+6*9+9/3-7+1';

// division moves left to right

function indsVal(op, arr) {
	var inds = [];
	var last = 0;
	var hasVal = arr.indexOf(op) !== -1;
	while ( hasVal ) {
		let valSpot = arr.indexOf(op, last);
		inds.push(valSpot);
		last = valSpot + 1;
		hasVal = arr.indexOf(op, last) !== -1;
	}
	return inds;
}

function isOrder(elem) {
	if ( elem === '*' || elem === '/' ) {
		return true;
	}
	return false;
}

// console.log(ex2.filter(isOrder));

var o = [];
/*
ex2.split('').forEach(function(element, index) {
	if ( !isDigitString(element) ) {
		if ( o.length === 0 ) {
			console.log(ex2.slice(0, index));
			o.push(index);
		} else {
			
		}
	}
});
*/

var ops = [];
ops.push(['/', '*']);
ops.push(['+', '-']);

/*
1	3	5	7	
*/

function makeNode(index, op) {
	return { 'index': index,
			'op': op };
}





// console.log(indsVal('+', ex2));

function eval(expr) {
	if ( isDigitString(expr) ) {
		return expr;
	}
	var arr = expr.split('');
	var mults = [];
	var divs = [];
	var multI = 0;
	var divI = 0;

}


var z = "5 + (3 * 2) * 6 / (3 * 21) / 6 + 7 / (4 * (5 / 1))";
var x = "2 + 5 - 3";
var y = "5 + (3 * 2) * 6";
var a = "5+(3*2)*6/(3*21)/6+7/(4*(5/1))"

// export default evalStr;
