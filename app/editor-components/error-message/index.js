// MODULES //

import React from 'react';
import Ansi from 'ansi-to-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tooltip from '@isle-project/components/tooltip';
import formatError from '@isle-project/utils/format-error';


// MAIN //

const ErrorMessage = ( props ) => {
	return ( <Card className="error-message">
		<Card.Body>
			<h3>Encountered an Error...</h3>
			<pre>
				<Ansi>{formatError( props.msg )}</Ansi>
			</pre>
			<Tooltip tooltip="Retry">
				<Button size="sm" variant="light-outline" onClick={() => {
					props.resetError();
				}} style={{ position: 'absolute', top: 22, right: 22 }}>
					<i className="fas fa-redo"></i>
				</Button>
			</Tooltip>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
