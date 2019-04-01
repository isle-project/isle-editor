// MODULES //

import markdownit from 'markdown-it';
import hasOwnProp from '@stdlib/assert/has-own-property';
import replace from '@stdlib/string/replace';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const DEFAULT_INLINE_MATH_DELIMITERS = [
	/\\\((.*?)\\\)/g
];
const DEFAULT_DISP_MATH_DELIMITERS = [
	/\$\$([\s\S]*?)\$\$/g,
	/\\\[([\s\S]*?)\\\]/g
];
const RE_RAW_ATTRIBUTE = /raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_BACKSLASH = /(^|[^\\])\\($|[^\\])/g;
const RE_TEXT_TAG = /<Text([^>]*)>([\s\S]*)<\/Text>/g;

// Escape backslashes in raw attributes tags:
const escaper = ( match, p1 ) => {
	return 'raw='+replace( p1, RE_BACKSLASH, '$1\\\\$2' );
};


// MAIN //

function toMarkdown( str, { escapeBackslash = false, addEmptySpans = true } ) {
	const tokenizer = new Tokenizer();

	// Replace math delimiters by ISLE component
	DEFAULT_INLINE_MATH_DELIMITERS.forEach( regexp => {
		str = str.replace( regexp, '<TeX raw="$1" />' );
	});
	DEFAULT_DISP_MATH_DELIMITERS.forEach( regexp => {
		str = replace( str, regexp, '<TeX raw="$1" displayMode />' );
	});
	if ( escapeBackslash ) {
		str = replace( str, RE_RAW_ATTRIBUTE, escaper );
	}
	// Replace <Text> component children, see related issue: https://github.com/babel/babel/issues/2219
	str = replace( str, RE_TEXT_TAG, ( match, p1, p2 ) => {
		const escaped = replace( p2, '`', '\\`' );
		return `<Text ${p1} raw={\`
			${escaped}\`}
		/>`;
	});
	const arr = tokenizer.parse( str );
	for ( let i = 0; i < arr.length; i++ ) {
		arr[ i ] = md.renderInline( arr[ i ] );
	}
	str = arr.join( '' );
	str = replace( str, '<br />', addEmptySpans ? '<span />\n' : '\n' );
	str = md.render( str );

	str = replace( str, '{', 'OPEN_CURLY_BRACE' );
	str = replace( str, '}', 'CLOSE_CURLY_BRACE' );
	str = replace( str, 'OPEN_CURLY_BRACE', '{\'{\'}' );
	str = replace( str, 'CLOSE_CURLY_BRACE', '{\'}\'}' );

	for ( let key in tokenizer.divHash ) {
		if ( hasOwnProp( tokenizer.divHash, key ) ) {
			str = str.replace( key, tokenizer.divHash[ key ]);
		}
	}

	return str;
}


// EXPORTS //

export default toMarkdown;
