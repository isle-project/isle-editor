// MODULES //

import fromCodePoint from '@stdlib/string/from-code-point';
import discreteUniform from '@stdlib/random/base/discrete-uniform';


// MAIN //

/**
* Generates a random string with the specified length.
*
* @param {integer} [len=32] - length of string
* @param {integer} [lower=48] - lower ASCII char point
* @param {integer} [upper=126] - upper ASCII char point
* @returns {string} random string with `len` characters
*/
function randomstring( len = 32, lower = 48, upper = 126 ) {
	const codePoints = new Array( len );
	for ( let i = 0; i < len; i++ ) {
		codePoints[ i ] = discreteUniform(lower, upper);
	}
	return fromCodePoint.apply( null, codePoints );
}


// EXPORTS //

export default randomstring;

