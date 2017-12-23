// MODULES //

const markdownIT = require( 'markdown-it' );
const hasOwnProp = require( '@stdlib/assert/has-own-property' );
const Tokenizer = require( './tokenizer.js' );


// VARIABLES //

const md = markdownIT({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const mdInline = markdownIT({
	html: true,
	xhtmlOut: true,
	breaks: false,
	typographer: false
});
const DEFAULT_INLINE_MATH_DELIMITERS = [
	/\\\((.*?)\\\)/g
];
const DEFAULT_DISPLAY_MATH_DELIMITERS = [
	/\$\$([\s\S]*?)\$\$/g,
	/\\\[([\s\S]*?)\\\]/g
];


// MAIN //

function toMarkdown( str ) {
	const tokenizer = new Tokenizer();

	// Replace math delimiters by ISLE component
	DEFAULT_INLINE_MATH_DELIMITERS.forEach( regexp => {
		str = str.replace( regexp, '<TeX raw="$1" />' );
	});
	DEFAULT_DISPLAY_MATH_DELIMITERS.forEach( regexp => {
		str = str.replace( regexp, '<TeX raw="$1" displayMode />' );
	});

	const arr = tokenizer.parse( str );
	for ( let i = 0; i < arr.length; i++ ) {
		arr[ i ] = mdInline.renderInline( arr[ i ]);
	}
	str = arr.join( '' );
	str = md.render( str );

	for ( let key in tokenizer.divHash ) {
		if ( hasOwnProp( tokenizer.divHash, key ) ) {
			str = str.replace( key, tokenizer.divHash[ key ]);
		}
	}

	return str;
}


// EXPORTS //

module.exports = toMarkdown;
