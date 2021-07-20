// MODULES //

import endsWith from '@stdlib/string/ends-with';


// MAIN //

/**
 * Returns a formatted string of the author's name.
 *
 * @private
 * @param {string} author - author(s)
 * @returns {string} formatted string of the author(s)
 */
 function generateAuthorString( author ) {
	if ( !author ) {
		return '';
	}
	return endsWith( author, '.' ) ? author : `${author}.`;
}


// EXPORTS //

export default generateAuthorString;
