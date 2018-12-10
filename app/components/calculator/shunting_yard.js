// MODULES //

import keys from '@stdlib/utils/keys';
import ln from '@stdlib/math/base/special/ln';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import pow from '@stdlib/math/base/special/pow';
import tan from '@stdlib/math/base/special/tan';
import abs from '@stdlib/math/base/special/abs';
import inv from '@stdlib/math/base/special/inv';
import exp from '@stdlib/math/base/special/exp';
import log from '@stdlib/math/base/special/log';
import log2 from '@stdlib/math/base/special/log2';
import sqrt from '@stdlib/math/base/special/sqrt';
import log10 from '@stdlib/math/base/special/log10';
import choose from '@stdlib/math/base/special/binomcoef';
import factorial from '@stdlib/math/base/special/factorial';
import isString from '@stdlib/assert/is-string';
import stack from '@stdlib/utils/stack';


// VARIABLES //

const RE_DIGIT = /\d/;
const operator = ( name, precedence, associativity, numParams, method ) => {
	return {
		name: name,
		precedence: precedence,
		params: numParams,
		method: method,
		associativity: associativity
	};
};
const OPERATORS = {
	'+': operator('+', 1, 'left', 2, ( a, b ) => { return a + b; }),
	'-': operator('-', 1, 'left', 2, ( a, b ) => { return a - b; }),
	'*': operator('*', 2, 'left', 2, ( a, b ) => { return a * b; }),
	'/': operator('/', 2, 'left', 2, ( a, b ) => { return a / b; }),
	'^': operator('^', 3, 'right', 2, pow ),
	'!': operator('!', 4, 'right', 1, factorial )
};
const FUNCTIONS = {
	'sqrt': { params: 1, method: sqrt },
	'ln': { params: 1, method: ln },
	'abs': { params: 1, method: abs },
	'inv': { params: 1, method: inv },
	'sin': { params: 1, method: sin },
	'cos': { params: 1, method: cos },
	'tan': { params: 1, method: tan },
	'exp': { params: 1, method: exp },
	'log10': { params: 1, method: log10 },
	'log2': { params: 1, method: log2 },
	'choose': { params: 2, method: choose },
	'log': { params: 2, method: log }
};


// FUNCTIONS //

function isOperator( token ) {
	return keys( OPERATORS ).indexOf( token ) !== -1;
}

function isFunction( token ) {
	return keys( FUNCTIONS ).indexOf( token ) !== -1;
}

function toRPN( arr ) {
	let output = [];
	let s = stack();

	for ( let i = 0; i < arr.length; i++ ) {
		let token = arr[ i ];
		if ( RE_DIGIT.test( token ) ) {
			output.push( token );
		}
		else if ( isFunction( token ) ) {
			s.push( token );
		}
		else if ( isOperator( token ) ) {
			let o1 = token;
			let o2 = s.first();
			while (
				isFunction( o2 ) ||
				( isOperator( o1 ) &&
				( o1.associativity === 'left' && o1.precedence <= o2.precedence ) ||
				( o1.associativity === 'right' && o1.precedence < o2.precedence ) )
			) {
				output.push( o2 );
				s.pop();
				o2 = s.first();
			}
			s.push( o1 );
		}
		else if ( token === '(' ) {
			s.push( token );
		}
		else if ( token === ')' ) {
			while ( s.first() !== '(' ) {
				if ( s.first() === void 0 ) {
					return 'Too many closing parentheses';
				}
				output.push( s.pop() );
			}
			s.pop();
		}
	}
	while ( s.length ) {
		let token = s.pop();
		if ( token === '(' ) {
			return 'Too many opening parentheses';
		}
		output.push( token );
	}
	return output;
}


// MAIN //

function evaluate( arr ) {
	arr = toRPN( arr );
	if ( isString( arr ) ) {
		return arr;
	}
	let s = [];
	for ( let i = 0, l = arr.length; i < l; i++ ) {
		const op = OPERATORS[ arr[i] ] || FUNCTIONS[ arr[i] ];
		if ( op ) {
			s.push( op.method.apply( this, s.splice( -op.params ) ) );
		} else {
			s.push( parseFloat( arr[ i ] ) );
		}
	}
	return s[ 0 ];
}


// EXPORTS //

export default evaluate;
