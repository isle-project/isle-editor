// MODULES //

import React from 'react';
import { useTranslation } from 'react-i18next';
import Ansi from 'ansi-to-react';
import Card from 'react-bootstrap/Card';
import formatError from '@isle-project/utils/format-error';
import './error_message.css';


// MAIN //

const ErrorMessage = ( props ) => {
	const { t } = useTranslation( 'Lesson' );
	return ( <Card className="error-message">
		<Card.Body>
			<h3>{t('encountered-error')}</h3>
			<pre>
				<Ansi>{formatError( props.msg )}</Ansi>
			</pre>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
