// MODULES //

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ansi from 'ansi-to-react';
import formatError from '@isle-project/utils/format-error';
import Tooltip from '@isle-project/components/tooltip';
import './error_message.css';


// MAIN //

const ErrorMessage = ( props ) => {
	const { t } = useTranslation( 'General' );
	const [ showStack, setShowStack ] = useState( false );
	const toggleStack = useCallback( () => {
		setShowStack( !showStack );
	}, [ showStack ] );
	let title = t('error-encountered');
	if ( props.componentName ) {
		title += ` ${t('in')} <${props.componentName} />`;
	}
	return ( <Card className="error-boundary-message">
		<Card.Body>
			<h3>{title}</h3>
			<pre>
				<Ansi>{formatError( showStack ? props.error.stack : props.error.message )}</Ansi>
			</pre>
			<ButtonGroup style={{ position: 'absolute', top: 12, right: 22 }} >
				<Tooltip tooltip={t('toggle-error-stack-trace')} placement="left" >
					<Button variant="outline-secondary" onClick={toggleStack} >
						<i className="fas fa-layer-group"></i>
					</Button>
				</Tooltip>
				<Tooltip tooltip={t('retry')}>
					<Button variant="outline-secondary" onClick={props.resetError} >
						<i className="fas fa-redo"></i>
					</Button>
				</Tooltip>
			</ButtonGroup>
		</Card.Body>
	</Card> );
};


// EXPORTS //

export default ErrorMessage;
