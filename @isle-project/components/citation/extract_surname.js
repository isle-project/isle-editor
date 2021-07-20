// MODULES //

import trim from '@stdlib/string/trim';
import contains from '@stdlib/assert/contains';


// MAIN //

/**
 * Extracts a surname from a given string.
 *
 * @private
 * @param {string} name - name to parse
 * @returns {string} surname
 */
 function extractSurname( name ) {
	name = trim( name );
	if ( contains( name, ',' ) ) {
		return name.substring( 0, name.indexOf( ',' ) );
	}
	return name.substring( name.lastIndexOf( ' ' ) + 1 );
}


// EXPORTS //

export default extractSurname;
