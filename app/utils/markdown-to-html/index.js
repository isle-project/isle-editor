// MODULES //

import logger from 'debug';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );


// MAIN //

function toMarkdown( str, addEmptySpans = false ) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({ addEmptySpans });
	return tokenizer.parse( str );
}


// EXPORTS //

export default toMarkdown;
