// MODULES //

import logger from 'debug';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const debug = logger( 'isle:transform-to-presentation' );


// MAIN

/**
* Transforms the ISLE lesson code to a spectacle presentation.
*
* @param {string} code - lesson code to transform
* @param {Object} preamble - lesson preamble
* @returns {string} transformed lesson code
*/
function transformToPresentation( code, preamble ) {
	let configString = '';
	if ( preamble.presentation ) {
		const keys = objectKeys( preamble.presentation );
		for ( let i = 0; i < keys.length; i++ ) {
			const attr = keys[ i ];
			let val = preamble.presentation[ attr ];
			if ( isString( val ) ) {
				val = `"${val}"`;
			}
			configString += `${attr}={${val}}`;
		}
	}
	let pres = code;

	// Automatically insert <Slide> tags if not manually set...
	if ( !contains( code, '<Slide' ) || !contains( code, '</Slide>' ) ) {
		pres = '<Slide>';
		let arr = code.split( '<p>===</p>' );
		pres += arr.join( '</Slide><Slide>' );
		pres += '</Slide>';
	}

	// Add opening <Deck> tag in front of first slide:
	pres = pres.replace( '<Slide', `<Deck
		controls={true}
		transition={[]}
		progress="number"
		${configString}
	><Slide` );

	// Append closing </Deck> after last slide:
	const lastPos = pres.lastIndexOf( '</Slide>' );
	const replacement = '</Slide></Deck>';
	pres = pres.substring( 0, lastPos ) + replacement + pres.substring( lastPos+'</Slide>'.length );
	debug( 'Transformed lesson code: ' );
	debug( '------------------' );
	debug( pres );
	debug( '------------------' );
	return pres;
}


// EXPORTS //

export default transformToPresentation;
