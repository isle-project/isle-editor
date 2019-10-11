// MODULES //

import logger from 'debug';
import { dirname, join } from 'path';
import replace from '@stdlib/string/replace';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );
const RE_SRC = /(src|url)=['"]\.([^'"]+)['"]/g;


// MAIN //

function toMarkdown( str, filePath, addEmptySpans = false ) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({ addEmptySpans });

	// Make all relative file paths in code absolute to path of source file:
	if ( filePath ) {
		const dir = dirname( filePath );
		str = replace( str, RE_SRC, ( match, p1, p2 ) => {
			return `${p1}="${join( dir, p2 )}"`;
		});
	}
	return tokenizer.parse( str );
}


// EXPORTS //

export default toMarkdown;
