// MODULES //

import { isPrimitive as isString } from '@stdlib/assert/is-string';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const RE_HEADING = /<h([0-5])([^>]*)>(.*?)<\/h[0-5]>/g;
const RE_PARAGRAPH = /<p([^>]*)>([\s\S]*?)<\/p>/g;
const RE_TABLE = /<table([^>]*)>([\s\S]*?)<\/table>/g;
const RE_OPEN_LIST = /<ul([^>]*)>/g;
const RE_CLOSE_LIST = /<\/ul>/g;
const RE_OPEN_LIST_ITEM = /<li([^>]*)>/g;
const RE_CLOSE_LIST_ITEM = /<\/li>/g;
const RE_THEAD = /<thead([^>]*)>([\s\S]*?)<\/thead>/g;
const RE_TBODY = /<tbody([^>]*)>([\s\S]*?)<\/tbody>/g;
const RE_TABLE_ROW = /<tr([^>]*)>([\s\S]*?)<\/tr>/g;
const RE_TABLE_HEADER_ITEM = /<th([^>]*)>([\s\S]*?)<\/th>/g;
const RE_TABLE_ITEM = /<td([^>]*)>([\s\S]*?)<\/td>/g;


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
	pres = pres.replace( RE_HEADING, '<Heading size={$1}$2>$3</Heading>' );
	pres = pres.replace( RE_PARAGRAPH, '<SText$1>$2</SText>' );
	pres = pres.replace( RE_OPEN_LIST, '<List$1>' );
	pres = pres.replace( RE_OPEN_LIST_ITEM, '<ListItem$1>' );
	pres = pres.replace( RE_CLOSE_LIST, '</List>' );
	pres = pres.replace( RE_CLOSE_LIST_ITEM, '</ListItem>' );
	pres = pres.replace( RE_TABLE, '<Table$1>$2</Table>' );
	pres = pres.replace( RE_THEAD, '<TableHeader$1>$2</TableHeader>' );
	pres = pres.replace( RE_TBODY, '<TableBody$1>$2</TableBody>' );
	pres = pres.replace( RE_TABLE_ROW, '<TableRow$1>$2</TableRow>' );
	pres = pres.replace( RE_TABLE_HEADER_ITEM, '<TableHeaderItem$1>$2</TableHeaderItem>' );
	pres = pres.replace( RE_TABLE_ITEM, '<TableItem$1>$2</TableItem>' );

	// Add opening <Deck> tag in front of first slide:
	pres = pres.replace( '<Slide', `<Deck
		globalStyles={false}
		controls={true}
		transition={[]}
		theme={SPECTACLE_THEME}
		progress="number"
		${configString}
	><Slide` );

	// Append closing </Deck> after last slide:
	const lastPos = pres.lastIndexOf( '</Slide>' );
	const replacement = '</Slide></Deck>';
	pres = pres.substring( 0, lastPos ) + replacement + pres.substring( lastPos+'</Slide>'.length );
	return pres;
}


// EXPORTS //

export default transformToPresentation;
