// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const DEFAULT_INLINE_MATH_DELIMITERS = [
	/\\\((.*?)\\\)/g,
	/\$([\s\S]*?)\$/g
];
const DEFAULT_DISP_MATH_DELIMITERS = [
	/\$\$([\s\S]*?)\$\$/g,
	/\\\[([\s\S]*?)\\\]/g
];


// MAIN //

function replaceEquations( str ) {
	// Replace math delimiters by ISLE component
	DEFAULT_DISP_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, '<TeX raw="$1" displayMode />' );
	});
	DEFAULT_INLINE_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, '<TeX raw="$1" />' );
	});
	return str;
}


// EXPORTS //

export default replaceEquations;
