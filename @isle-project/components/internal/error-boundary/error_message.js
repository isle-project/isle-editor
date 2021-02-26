// MODULES //

import React from 'react';
import { useTranslation } from 'react-i18next';
import Ansi from 'ansi-to-react';
import Card from 'react-bootstrap/Card';
import formatError from '@isle-project/utils/format-error';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import './error_message.css';


// MAIN //

const ErrorMessage = ( props ) => {
	const { t } = useTranslation( 'General' );
	let title = t('error-encountered');
	if ( props.componentName ) {
		title += ` ${t('in')} <${props.componentName} />`;
	}
	return ( <Card className="error-boundary-message">
		<Card.Body>
			<h3>{title}</h3>
			<pre>
				<Ansi>{formatError( props.msg )}</Ansi>
			</pre>
			<Tooltip tooltip={t('retry')}>
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
