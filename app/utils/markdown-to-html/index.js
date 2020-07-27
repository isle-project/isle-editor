// MODULES //

import logger from 'debug';
import { dirname, join } from 'path';
import replace from '@stdlib/string/replace';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );
const RE_SRC = /(src|url)=['"]\.([^'"]+)['"]/g;


// MAIN //

function toMarkdown( str, { filePath, addEmptySpans = false, lineNumber = 1, addLineWrappers = false } = {}) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({
		addEmptySpans,
		lineNumber: lineNumber + 1,
		addLineWrappers: addLineWrappers,
		outer: true
	});

	// Make all relative file paths in code absolute to path of source file:
	if ( filePath ) {
		const dir = dirname( filePath );
		if ( process.platform === 'win32' ) {
			str = replace( str, RE_SRC, ( match, p1, p2 ) => {
				let fpath = join( dir, p2 );
				fpath = replace( fpath, '\\', '\\\\' );
				return `${p1}="${fpath}"`;
			});
		} else {
			str = replace( str, RE_SRC, ( match, p1, p2 ) => {
				const fpath = join( dir, p2 );
				return `${p1}="${fpath}"`;
			});
		}
	}
	return tokenizer.parse( str );
}


// EXPORTS //

export default toMarkdown;
