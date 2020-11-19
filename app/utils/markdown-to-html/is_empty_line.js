// MODULES //

import isWhitespace from './is_whitespace.js';


// MAIN //

/**
* Tests whether an empty line starts at the specified position.
*
* @param {Array} buffer - text buffer
* @param {number} pos - start position
* @returns {boolean} boolean indicating whether character is whitespace
*/
function isEmptyLine( buffer, pos ) {
	if ( buffer[ pos ] !== '\n' ) {
		return false;
	}
	pos += 1;
	let eol = false;
	while ( !eol ) {
		const char = buffer[ pos ];
		if ( char === '\n' ) {
			eol = true;
		} else if ( !isWhitespace( char ) ) {
			return false;
		}
		pos += 1;
	}
	return true;
}


// EXPORTS //

export default isEmptyLine;
