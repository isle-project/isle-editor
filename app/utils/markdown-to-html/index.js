// MODULES //

import markdownit from 'markdown-it';
import hasOwnProp from '@stdlib/assert/has-own-property';
import replace from '@stdlib/string/replace';
import Tokenizer from './tokenizer.js';
import replaceEquations from './replace_equations.js';


// VARIABLES //

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false,
	linkify: true
});
const RE_RAW_ATTRIBUTE = /raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_BACKSLASH = /(^|[^\\])\\($|[^\\])/g;

// Escape backslashes in raw attributes tags:
const escaper = ( match, p1 ) => {
	return 'raw='+replace( p1, RE_BACKSLASH, '$1\\\\$2' );
};


// MAIN //

function toMarkdown( str, { escapeBackslash = false, addEmptySpans = true } ) {
	const tokenizer = new Tokenizer();

	if ( escapeBackslash ) {
		str = replace( str, RE_RAW_ATTRIBUTE, escaper );
	}
	console.log( str );
	const arr = tokenizer.parse( str );
	for ( let i = 0; i < arr.length; i++ ) {
		console.log( arr[ i ] );
		arr[ i ] = md.renderInline( arr[ i ] );
	}
	str = arr.join( '' );
	str = replaceEquations( str );
	str = replace( str, '<br />', addEmptySpans ? '<span />\n' : '\n' );
	console.log( str );
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
