// MODULES //

import logger from 'debug';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import marked from './marked.js';
import Tokenizer from './tokenizer.js';
import { replaceAndEscapeEquations, replaceEquations } from './replace_equations.js';


// VARIABLES //

const debug = logger( 'isle:markdown-to-html' );
const RE_RAW_ATTRIBUTE = /<(TeX|Text)([^>]*?)raw *= *("[^"]*"|{`[^`]*`})/g;
const RE_BACKSLASH = /(^|[^\\])\\($|[^\\])/g;

// Escape backslashes in raw attributes tags:
const escaper = ( match, p1, p2, p3 ) => {
	return '<'+p1+' '+p2+' raw='+replace( p3, RE_BACKSLASH, '$1\\\\$2' );
};


// MAIN //

function toMarkdown( str, { escapeBackslash = false } ) {
	debug( 'Create tokenizer...' );
	const tokenizer = new Tokenizer({ escapeBackslash });

	if ( escapeBackslash ) {
		str = replace( str, RE_RAW_ATTRIBUTE, escaper );
	}

	const arr = tokenizer.parse( str );
	str = marked( arr.join( '' ) );
	if ( escapeBackslash ) {
		str = replaceAndEscapeEquations( str );
	} else {
		str = replaceEquations( str );
	}
	for ( let key in tokenizer.divHash ) {
		if ( hasOwnProp( tokenizer.divHash, key ) ) {
			str = str.replace( key, tokenizer.divHash[ key ]);
		}
	}
	return str;
}


// EXPORTS //

export default toMarkdown;
