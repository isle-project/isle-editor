// MODULES //

import IS_WINDOWS from '@stdlib/assert/is-windows';
import isWhitespace from './is_whitespace.js';


// FUNCTIONS //

function isEmptyLineWin32( buffer, pos ) {
	if ( buffer[ pos ] !== '\r' || buffer[ pos+1] !== '\n' ) {
		return false;
	}
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

/**
* Tests whether an empty line starts at the specified position.
*
* @param {Array} buffer - text buffer
* @param {number} pos - start position
* @returns {boolean} boolean indicating whether character is whitespace
*/
function isEmptyLinePosix( buffer, pos ) {
	if (
		buffer[ pos ] !== '\n' ||
		( buffer[ pos ] !== '\r' && buffer[ pos+1 ] !== '\n' )
	) {
		return false;
	}
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


// MAIN //

const main = IS_WINDOWS ? isEmptyLineWin32 : isEmptyLinePosix;


// EXPORTS //

export default main;
