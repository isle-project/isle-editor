// MODULES //

import fromCodePoint from '@stdlib/string/from-code-point';
import discreteUniform from '@stdlib/random/base/discrete-uniform';


// VARIABLES //

// PRNG for code points of subset from ASCII character set:
const rand = discreteUniform.factory( 48, 126 );


// MAIN //

/**
* Generates a random string with the specified length.
*
* @param {integer} [len=32] - length of string
* @returns {string} random string with `len` characters
*/
function randomstring( len ) {
	if ( !len ) {
		len = 32;
	}
	const codePoints = new Array( len );
	for ( let i = 0; i < len; i++ ) {
		codePoints[ i ] = rand();
	}
	return fromCodePoint.apply( null, codePoints );
}


// EXPORTS //

export default randomstring;
