// MODULES //

import React from 'react';
import Ansi from 'ansi-to-react';
import repeat from '@stdlib/string/repeat';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// VARIABLES //

const RE_DIGIT_COLON = /\((\d+):/;
const RE_LINE_DIGIT = /( *)(\d*) \|/g;
const RE_EMPTY_SPANS = /<span \/>/g;
const RE_FRAGMENT = /<\/?React.Fragment>/g;
const RE_STATUSBAR = /<StatusBar[^\n]+\n/;
const NUM_WRAPPER_LINES = 9;


// MAIN //

const ErrorMessage = ( props ) => {
	let msg = props.msg;
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
	msg = msg.replace( RE_EMPTY_SPANS, '' );
	msg = msg.replace( RE_FRAGMENT, '' );
	msg = msg.replace( '&lt;', '<' );
	msg = msg.replace( '&gt;', '>' );
	return ( <Card className="error-message">
		<Card.Body>
			<h3>Encountered an Error...</h3>
			<pre>
				<Ansi>{msg}</Ansi>
			</pre>
			<Button size="sm" variant="light-outline" onClick={() => {
				props.resetError();
			}} style={{ position: 'absolute', top: 22, right: 22 }}>
				<i className="fas fa-redo"></i>
			</Button>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
