// MODULES //

const { dirname } = require( 'path' );
const logger = require( 'debug' );
const Tokenizer = require( './tokenizer.js' );


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );


// MAIN //

function toMarkdown( str, { filePath, addEmptySpans = false, lineNumber = 1, addLineWrappers = false } = {}) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({
		addEmptySpans,
		lineNumber: lineNumber + 1,
		addLineWrappers: addLineWrappers,
		outer: true,
		fileDirectory: filePath ? dirname( filePath ) : null
	});
	return tokenizer.parse( str );
}


// EXPORTS //

module.exports = toMarkdown;
