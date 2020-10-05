// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const RE_SPECIAL_CHARS = /([$#&%_{}])/;


// MAIN //

function escapeLaTeX( str ) {
	str = replace( str, RE_SPECIAL_CHARS, '\\$1' );
	str = replace( str, '~', '\\texttt{\\~{}}' );
	str = replace( str, '^', '\\^{}' );
	return str;
}


// EXPORTS //

export default escapeLaTeX;
