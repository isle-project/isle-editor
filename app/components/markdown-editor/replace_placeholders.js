// MODULES //

import logger from 'debug';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';


// VARIABLES //

const debug = logger( 'isle:markdown-editor:replace-placeholders' );


// MAIN //

function replacePlaceholders( plainText, hash, skipComments ) {
	let replacementHash;
	for ( let key in hash ) {
		if ( hasOwnProp( hash, key ) ) {
			const matchInPipeRegExp = new RegExp( '\\|\\s*' + key + '\\s*\\|' );
			let id = replace( key, '<!--', '' );
			id = replace( id, '-->', '' );
			if ( !skipComments || matchInPipeRegExp.test( plainText ) ) {
				// Will have an issue if we insert one figure in table and same figure outside of table...
				replacementHash = `<!-- START:${id} -->${hash[ key ]}<!-- END -->`;
			} else {
				replacementHash = `\n\n${hash[ key ]}\n\n`;
			}
			const re = new RegExp( '\\s*'+key+'\\s*', 'g' );
			plainText = plainText.replace( re, replacementHash );
		}
	}
	debug( 'Plain text: ' + plainText );
	return plainText;
}


// EXPORTS //

export default replacePlaceholders;
