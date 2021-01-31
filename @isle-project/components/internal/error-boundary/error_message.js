// MODULES //

import React from 'react';
import Ansi from 'ansi-to-react';
import Card from 'react-bootstrap/Card';
import formatError from '@isle-project/utils/format-error';
import './error_message.css';


// VARIABLES //

const ENCOUNTERED_AN_ERROR = 'Encountered an Error:';


// MAIN //

const ErrorMessage = ( props ) => {
	return ( <Card className="error-message">
		<Card.Body>
			<h3>{ENCOUNTERED_AN_ERROR}</h3>
			<pre>
				<Ansi>{formatError( props.msg )}</Ansi>
			</pre>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
