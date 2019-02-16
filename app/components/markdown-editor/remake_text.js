// MODULES //

import trim from '@stdlib/string/trim';


// VARIABLES //

const START_TAG = '<!-- START:';
const START_TAG_LEN = START_TAG.length;
const CLOSING_TAG = '-->';
const CLOSING_TAG_LEN = CLOSING_TAG.length;
const END_TAG = '<!-- END -->';


// MAIN //

function remakeText( text ) {
	const hash = {};
	let startIndex;
	let newText;
	let section;
	let startS;
	let endE;
	let bigE;
	let data;
	let key;

	newText = text;
	startIndex = 0;
	while ( text.indexOf( START_TAG, startIndex ) !== -1 ) {
		// We start on the first match:
		startS = text.indexOf( START_TAG, startIndex );
		endE = text.indexOf( CLOSING_TAG, startS );
		bigE = text.indexOf( END_TAG, startS );

		key = text.substr( startS + START_TAG_LEN, endE - startS - (START_TAG_LEN+1) );
		data = text.substr( endE + CLOSING_TAG_LEN, bigE - endE - CLOSING_TAG_LEN );
		section = text.substr( startS, bigE + (START_TAG_LEN+1) - startS );
		hash[ `<!--${key}-->` ] = trim( data );
		newText = newText.replace( section, `<!--${key}-->` );

		// Update the startIndex:
		startIndex = bigE + CLOSING_TAG_LEN;
	}
	return { 'text': newText, 'hash': hash };
}


// EXPORTS //

export default remakeText;
