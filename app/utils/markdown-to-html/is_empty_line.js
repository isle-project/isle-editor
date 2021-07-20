// MODULES //

const isWhitespace = require( './is_whitespace.js' );


// MAIN //

/**
 * Determines if the sub-string at the specified position is an empty line.
 *
 * @param {Buffer} buffer - buffer containing the sub-string
 * @param {number} pos - position of the sub-string
 * @returns {boolean} boolean indicating whether the sub-string is an empty line
 */
function isEmptyLine( buffer, pos ) {
	if (
		buffer[ pos ] === '\r'
	) {
		pos += 2;
		let eol = false;
		while ( !eol ) {
			const char = buffer[ pos ];
			const char2 = buffer[ pos +1 ];
			if ( char === '\r' && char2 === '\n' ) {
				eol = true;
			} else if ( !isWhitespace( char ) || !isWhitespace( char2 ) ) {
				return false;
			}
			pos += 2;
		}
		return true;
	}
	else if (
		buffer[ pos ] === '\n'
	) {
		pos += 1;
		let eol = false;
		while ( !eol ) {
			const char = buffer[ pos ];
			if ( char === '\n' || ( char === '\r' && buffer[ pos+1 ] === '\n' ) ) {
				eol = true;
			} else if ( !isWhitespace( char ) ) {
				return false;
			}
			pos += 1;
		}
		return true;
	}
	return false;
}


// EXPORTS //

module.exports = isEmptyLine;
