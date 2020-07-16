// MODULES //

import repeat from '@stdlib/string/repeat';


// VARIABLES //

const RE_DIGIT_COLON = /\((\d+):/;
const RE_LINE_DIGIT = /( *)(\d*) \|/g;
const RE_LINE_WRAPPER_OPENING = /<LineWrapper tagName="[a-zA-Z0-9]+" startLineNumber=\{\d+\} endLineNumber=\{\d+\} >/g;
const RE_LINE_WRAPPER_CLOSING = /<\/LineWrapper>/g;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const RE_STATUSBAR = /<StatusBar[^\n]+\n/;
const NUM_WRAPPER_LINES = 9;


// MAIN //

const formatError = ( msg ) => {
	msg = msg.replace( RE_STATUSBAR, '\n' );
	msg = msg.replace( '</Lesson>', '' );
	msg = msg.replace( RE_DIGIT_COLON, ( match, p1 ) => {
		const line = String( parseInt( p1, 10 )-NUM_WRAPPER_LINES );
		return '(' + line + ':';
	});
	msg = msg.replace( RE_LINE_DIGIT, ( match, p1, p2 ) => {
		const line = p2 ? String( parseInt( p2, 10 )-NUM_WRAPPER_LINES ) : '';
		const spaces = repeat( ' ', p2.length - line.length );
		return p1 + spaces + line + ' |';
	});
	msg = msg.replace( RE_LINE_WRAPPER_OPENING, '' );
	msg = msg.replace( RE_LINE_WRAPPER_CLOSING, '' );
	msg = msg.replace( RE_FRAGMENT, '' );
	msg = msg.replace( '&lt;', '<' );
	msg = msg.replace( '&gt;', '>' );
	return msg;
};


// EXPORTS //

export default formatError;
