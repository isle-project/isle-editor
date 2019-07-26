// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const DEFAULT_INLINE_MATH_DELIMITERS = [
	/\$(?:\s)*([\s\S]*?)(?:\s)*\$/g,
	/\\\((?:\s)*(.*?)(?:\s)*\\\)/g
];
const DEFAULT_DISP_MATH_DELIMITERS = [
	/\$\$(?:\s)*([\s\S]*?)(?:\s)*\$\$/g,
	/\\\[(?:\s)*([\s\S]*?)(?:\s)*\\\]/g
];


// MAIN //

export function replaceEquations( str ) {
	// Replace math delimiters by ISLE component:
	str = replace( str, DEFAULT_DISP_MATH_DELIMITERS[ 0 ], '<TeX raw={String.raw`$1`} displayMode />' );
	str = replace( str, DEFAULT_INLINE_MATH_DELIMITERS[ 0 ], '<TeX raw={String.raw`$1`} />' );
	return str;
}
