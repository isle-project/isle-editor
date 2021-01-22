// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const RE_SPECIAL_CHARS = /([$#&%_{}])/g;


// MAIN //

/**
* Escapes special characters in a string to be included in a LaTeX equation.
*
* @param {any} str - input value (non-string values will be cast to a string)
* @param {string} escaped string
*/
function escapeLaTeX( str ) {
	str = String( str );
	str = replace( str, RE_SPECIAL_CHARS, '\\$1' );
	str = replace( str, '~', '\\texttt{\\~{}}' );
	str = replace( str, '^', '\\^{}' );
	return str;
}


// EXPORTS //

export default escapeLaTeX;
