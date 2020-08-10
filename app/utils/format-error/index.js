// MODULES //

import repeat from '@stdlib/string/repeat';
import max from '@stdlib/math/base/special/max';


// VARIABLES //

const RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g; // eslint-disable-line no-control-regex
const RE_DIGIT_COLON = /\((\d+):/;
const RE_LINE_DIGIT = /(\n *)(\d*) \|/g;
const RE_LINE_WRAPPER_OPENING = /<LineWrapper tagName="[a-zA-Z0-9]+" startLineNumber=\{\d+\} endLineNumber=\{\d+\} >/g;
const RE_LINE_WRAPPER_CLOSING = /<\/LineWrapper>/g;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const RE_STATUSBAR = /<StatusBar[^\n]+\n/;
const NUM_WRAPPER_LINES = 9;


// MAIN //

const formatError = ( msg ) => {
	msg = msg.replace( RE_ANSI, '\n' );
	msg = msg.replace( RE_STATUSBAR, '\n' );
	msg = msg.replace( '</Lesson>', '' );
	msg = msg.replace( RE_DIGIT_COLON, ( match, p1 ) => {
		const line = String( parseInt( p1, 10 )-NUM_WRAPPER_LINES );
		return '(' + line + ':';
	});
	msg = msg.replace( RE_LINE_DIGIT, ( match, p1, p2 ) => {
		const line = p2 ? String( parseInt( p2, 10 )-NUM_WRAPPER_LINES ) : '';
		const spaces = repeat( ' ', max( p2.length - line.length, 0 ) );
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
