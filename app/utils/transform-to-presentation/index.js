// MODULES //

const logger = require( 'debug' );
const isString = require( '@stdlib/assert/is-string' );
const contains = require( '@stdlib/assert/contains' );
const objectKeys = require( '@stdlib/utils/keys' );


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
			if ( isString.isPrimitive( val ) ) {
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

module.exports = transformToPresentation;
