// MODULES //

import logger from 'debug';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );


// MAIN //

function toMarkdown( str ) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer();
	return tokenizer.parse( str );
}


// EXPORTS //

export default toMarkdown;
