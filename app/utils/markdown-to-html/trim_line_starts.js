// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const RE_LINE_BEGINNING = /(^|\r\n|\n)[ \t]+(?=[^-\d ][\s\S]+(\r?\n|$))/g;


// MAIN //

/**
* Strips all whitespace from the beginning of each line of an input string.
*
* @param {string} str - input string
* @returns {string} string without leading whitespace in each line
*/
function trimLineStarts( str ) {
	return replace( str, RE_LINE_BEGINNING, '$1' );
}


// EXPORTS //

export default trimLineStarts;
