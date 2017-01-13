// MODULES //

const Tokenizer = require( './tokenizer.js' );
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// MAIN //

function toMarkdown( str ) {
	const tokenizer = new Tokenizer();
	const arr = tokenizer.parse( str );

	str = arr.join( '' );
	str = md.render( str );

	for ( let key in tokenizer.divHash ) {
		str = str.replace( key, tokenizer.divHash[ key ]);
	}
	return str;
} // end FUNCTION toMarkdown()


// EXPORTS //

module.exports = toMarkdown;
