// MODULES //

import logger from 'debug';
import replace from '@stdlib/string/replace';
import Tokenizer from './tokenizer.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );
const RE_RAW_ATTRIBUTE = /<TeX([^>]*?)raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_BACKSLASH = /(^|[^\\])\\($|[^\\])/g;

// Escape backslashes in raw attributes tags:
const escaper = ( match, p1, p2 ) => {
	return '<TeX '+p1+' raw='+replace( p2, RE_BACKSLASH, '$1\\\\$2' );
};


// MAIN //

function toMarkdown( str, { escapeBackslash = false } ) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({ escapeBackslash });

	if ( escapeBackslash ) {
		str = replace( str, RE_RAW_ATTRIBUTE, escaper );
	}
	const arr = tokenizer.parse( str );
	return arr.join( '' );
}


// EXPORTS //

export default toMarkdown;
