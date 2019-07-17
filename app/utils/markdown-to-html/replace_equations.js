// MODULES //

import replace from '@stdlib/string/replace';


// VARIABLES //

const RE_BACKSLASH = /(^|[^\\])\\($|[^\\])/g;
const DEFAULT_INLINE_MATH_DELIMITERS = [
	/\\\((.*?)\\\)/g,
	/\$([\s\S]*?)\$/g
];
const DEFAULT_DISP_MATH_DELIMITERS = [
	/\$\$([\s\S]*?)\$\$/g,
	/\\\[([\s\S]*?)\\\]/g
];


// FUNCTIONS //

const displayModeReplacer = ( match, p1 ) => {
	const str = replace( p1, RE_BACKSLASH, '$1\\\\$2' );
	return `<TeX raw="${str}" displayMode />`;
};
const inlineModeReplacer = ( match, p1 ) => {
	const str = replace( p1, RE_BACKSLASH, '$1\\\\$2' );
	return `<TeX raw="${str}" />`;
};


// MAIN //

export function replaceAndEscapeEquations( str ) {
	// Replace math delimiters by ISLE component:
	DEFAULT_DISP_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, displayModeReplacer );
	});
	DEFAULT_INLINE_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, inlineModeReplacer, );
	});
	return str;
}

export function replaceEquations( str ) {
	// Replace math delimiters by ISLE component:
	DEFAULT_DISP_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, '<TeX raw="$1" displayMode />' );
	});
	DEFAULT_INLINE_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, '<TeX raw="$1" />' );
	});
	return str;
}
