// MODULES //

import React from 'react';
import Ansi from 'ansi-to-react';
import Card from 'react-bootstrap/lib/Card';


// VARIABLES //

const RE_EMPTY_LINES = /\r?\n(?=\r?\n)/g;
const RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g; // eslint-disable-line no-control-regex
const RE_OFFENDING_LINE = /> \d+ \| ([^\n{]*)/;
const RE_PREAMBLE = /---([\S\s]*)---/;
const RE_DIGIT_COLON = /\((\d+):/;
const RE_LINE_DIGIT = /(\d+) \|/g;


// MAIN //

const ErrorMessage = ( props ) => {
	let msg = props.msg;
	const bare = msg.replace( RE_ANSI, '' );
	const match = bare.match( RE_OFFENDING_LINE );
	if ( match ) {
		let code = props.code;
		code = code.replace( RE_PREAMBLE, '' );
		code = code.substring( 0, code.indexOf( match[ 1 ] ) );
		const lineAdjustment = ( code.match( RE_EMPTY_LINES ) || '').length - 1;
		msg = msg.replace( RE_DIGIT_COLON, ( match, p1 ) => {
			return '('+String( parseInt( p1, 10 )+lineAdjustment ) + ':';
		});
		msg = msg.replace( RE_LINE_DIGIT, ( match, p1 ) => {
			return String( parseInt( p1, 10 )+lineAdjustment ) + ' |';
		});
	}
	return ( <Card className="error-message">
		<Card.Body>
			<h3>Encountered an error:</h3>
			<pre>
				<Ansi>{msg}</Ansi>
			</pre>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
