// MAIN //

/**
* Tests whether character is whitespace.
*
* @param {string} c - input character
* @returns {boolean} boolean indicating whether character is whitespace
*/
function isWhitespace( c ) {
	return (
		c === ' ' ||
		c === '\n' ||
		c === '\t' ||
		c === '\f' ||
		c === '\r'
	);
}


// EXPORTS //

export default isWhitespace;
