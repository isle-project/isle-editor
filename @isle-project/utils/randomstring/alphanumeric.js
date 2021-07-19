// MODULES //

import fromCodePoint from '@stdlib/string/from-code-point';
import sample from '@stdlib/random/sample';


// VARIABLES //

const ALPHANUMERIC = [
	48,
	49,
	50,
	51,
	52,
	53,
	54,
	55,
	56,
	57,
	65,
	66,
	67,
	68,
	69,
	70,
	71,
	72,
	73,
	74,
	75,
	76,
	77,
	78,
	79,
	80,
	81,
	82,
	83,
	84,
	85,
	86,
	87,
	88,
	89,
	90,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	104,
	105,
	106,
	107,
	108,
	109,
	110,
	111,
	112,
	113,
	114,
	115,
	116,
	117,
	118,
	119,
	120,
	121,
	122
];


// MAIN //

/**
 * Returns a random string of alphanumeric characters of the specified length.
 *
 * @param {NonNegativeInteger} [len=32] - string length
 * @returns {string} random string
 */
function alphanumeric( len = 32 ) {
	const codePoints = sample( ALPHANUMERIC, {
		size: len
	});
	return fromCodePoint.apply( null, codePoints );
}


// EXPORTS //

export default alphanumeric;
