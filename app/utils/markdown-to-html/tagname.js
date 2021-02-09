// VARIABLES //

const RE_ALPHANUMERIC = /[A-Z0-9.]/i;


// MAIN //

/**
* Extracts a tag name from a string starting at the specified position.
*
* @param {string} str - input string
* @param {integer} pos - starting position
* @returns {string} tag name
*/
function tagName( str, pos ) {
	let out = '';
	let char = str.charAt( pos );
	if ( char === '/' ) {
		pos += 1;
		char = str.charAt( pos );
	}
	while ( RE_ALPHANUMERIC.test( char ) ) {
		out += char;
		pos += 1;
		char = str.charAt( pos );
	}
	return out;
}


// EXPORTS //

module.exports = tagName;
