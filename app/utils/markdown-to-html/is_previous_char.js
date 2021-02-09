// MODULES //

const isWhitespace = require( './is_whitespace.js' );


// MAIN //

/**
* Checks whether the character at the specified position of a string matches a comparison character.
*
* @param {string} str - input string
* @param {integer} pos - position
* @param {string} char - character to compare to
* @returns {boolean} boolean indicating whether character at specified position matches comparison character
*/
function isPreviousChar( str, pos, char ) {
	pos -= 1;
	while ( isWhitespace( str[ pos ] ) ) {
		pos -= 1;
	}
	return str.charAt( pos ) === char;
}


// EXPORTS //

module.exports = isPreviousChar;
