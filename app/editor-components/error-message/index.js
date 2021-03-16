// MODULES //

import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Ansi from 'ansi-to-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tooltip from '@isle-project/components/tooltip';
import formatError from '@isle-project/utils/format-error';
import './error_message.css';


// MAIN //

const ErrorMessage = ({ msg, resetError }) => {
	const { t } = useTranslation( 'Editor' );
	const handleReset = useCallback( () => {
		resetError();
	}, [ resetError ] );
	return ( <Card className="error-message" >
		<Card.Body>
			<h3>{t('encountered-error')}</h3>
			<pre>
				<Ansi>{formatError( msg )}</Ansi>
			</pre>
			<Tooltip tooltip={t('retry')}>
				<Button
					size="sm" variant="light-outline" onClick={handleReset}
				>
					<i className="fas fa-redo"></i>
				</Button>
			</Tooltip>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
