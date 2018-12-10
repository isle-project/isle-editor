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
var FLOAT64_MAX = require( '@stdlib/constants/math/float64-max' );


var add = require('./add.js');
var subtract = require('./subtract.js');
var divide = require('./divide.js');
var multiply = require('./multiply.js');


const opsRegexp = new RegExp('[+*\-/]');

function hasParen(element) {
	return /\(/.test(element);
}

var b = '3+6*(5+4)/3-7';

// console.log(full);

// console.log(full.findIndex(hasParen));

// finds the smallest index that is one of the characters
function closestInd(ops) {
	var smallest = 1000000;
}

const FUNS = {
	'+': add,
	'-': subtract,
	'/': divide,
	'*': multiply
};

// returns an object with the function needed and 
function getClosestOp(ops) {
	// ops is a list
	return function(arr) {
		console.log(ops);
		var spots = ops.map(function(element) {
			let i = arr.indexOf(element);
			return i === -1 ? FLOAT64_MAX : i;
		});
		var minSpot = spots.indexOf(Math.min(...spots));
		return {
			'function': FUNS[ops[minSot]],
			'index': minSpot
		};
	};
}


function eval(exp) {
	if ( isDigitString(exp) ) {
		return exp;
	}

	// TO-DO: HANDLE CASE OF MALFORMED STRUCTURE

	var full = [];
	var tmpStart = 0;
	var openParen = 0;
	var closeParen = 0;
	var inParen = false;
	for ( var j = 0; j < exp.length; j++ ) {
		let tmp = exp.slice(j, j + 1);
		// console.log('Iteration ' + j + ' ' + tmp);
		if ( tmp === '(' ) {
			// set the start of the chunk at the start of the paren
			if ( openParen === 0 ) {
				tmpStart = j;
			}
			openParen += 1;
		} else if ( tmp === ')' ) {
			closeParen += 1;
		}
		// console.log(openParen, closeParen);
		// console.log(b.slice(tmpStart, j + 1));

		if ( openParen === 0 && closeParen === 0 && opsRegexp.test(exp.slice(j, j + 1)) ) {
			if ( exp.slice(tmpStart, j) !== '' ) {
				full.push(exp.slice(tmpStart, j));
			}
			full.push(exp.slice(j, j + 1));
			tmpStart = j + 1;
		}
		
		if ( openParen !== 0 && openParen === closeParen ) {
			full.push(exp.slice(tmpStart, j + 1));
			tmpStart = j + 1;
			openParen = 0;
			closeParen = 0;
		}
	}
	full.push(exp.slice(tmpStart, exp.length));

	// now we fix the groups with parens
	var fixInd = full.findIndex(hasParen);
	while ( fixInd !== -1 ) {
		// console.log(full[fixInd].slice(1, full[fixInd].length - 1));
		// console.log(/\((.*?)\)/.exec(full[fixInd])[1]);
		full[fixInd] = eval(/\((.*?)\)/.exec(full[fixInd])[1]);
		fixInd = full.findIndex(hasParen);
	}
	
	// now we loop through the operations
	var hasOps = true;
	const ORDER = [ ['*', '/'], ['+', '-'] ];
	for (let opInd = 0; opInd < ORDER.length; opInd++ ) {
		let opFun = getClosestOp(operation);
		
		while ( opFun(full).index !== FLOAT64_MAX ) {
			let tmpOp = opFun(full);
			let tmpResult = tmpOp.function(parseFloat(full[tmpOp.index - 1], full[tmpOp.index + 1])).toString();
			// replace it
			full.splice(tmpOp.index - 1, 3, tmpResult)
		}
	}
	return full[0];

	// now we go through and see the operations

}

console.log(eval(b));

/*
var x = ['f', 'r'];
var y = ['a', 'b', 'f', 'z', 'r'];

var z = x.map(function(e) {
	return y.indexOf(e);
});

console.log(z);
console.log(x[z.indexOf(Math.min(...z))]);
*/


