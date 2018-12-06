// MODULES //

import React from 'react';
import Ansi from 'ansi-to-react';
import Card from 'react-bootstrap/lib/Card';


// VARIABLES //

const RE_DIGIT_COLON = /\((\d+):/;
const RE_LINE_DIGIT = /(\d+) \|/g;


// MAIN //

const ErrorMessage = ( props ) => {
	let msg = props.msg;
	msg = msg.replace( RE_DIGIT_COLON, ( match, p1 ) => {
		return '('+String( parseInt( p1, 10 )-1 ) + ':';
	});
	msg = msg.replace( RE_LINE_DIGIT, ( match, p1 ) => {
		return String( parseInt( p1, 10 )-1 ) + ' |';
	});
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
