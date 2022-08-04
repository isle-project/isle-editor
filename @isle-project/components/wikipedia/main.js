// MODULES //

import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import VoiceInput from '@isle-project/components/input/voice';
import { i18n } from '@isle-project/locales';
import { SEARCH } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import './wikipedia.css';


// FUNCTIONS //

function extractTopic( value ) {
	const marker = i18n.t('wikipedia:about' );
	const x = value.search( marker );
	if ( x !== -1 ){
		x += ( marker.length +1 );
		return value.substring( x, value.length );
	}
	return value;
}


// MAIN //

/**
* The **Wikipedia** component scans the **Wikipedia** and returns an entry if anything valid is found under the entered search term.
*
* @property {string} defaultEntry - default entry to display
* @property {Object} style - CSS inline styles
*/
const Wikipedia = ( props ) => {
	const [ text, setText ] = useState( '' );
	const { defaultEntry, style } = props;
	const [ response, setResponse ] = useState( '' );
	const { logAction } = useActionLogger( 'WIKIPEDIA', props );
	const { t } = useTranslation( 'wikipedia' );

	const getResult = useCallback( ( text ) => {
		logAction( SEARCH, text );
		text = extractTopic( text );
		text = text.replace( ' ', '_' );
		text = 'https://' + i18n.language + '.wikipedia.org/wiki/' + text;
		setResponse( text );
	}, [ logAction ] );

	useEffect(() => {
		if ( isString( defaultEntry ) ) {
			getResult( defaultEntry );
		}
	}, [ defaultEntry, getResult ] );
	return (
		<Card className="wikipedia" style={style} >
			<Card.Header>
				<Card.Title as="h3">
					{t('browse-wikipedia')}
				</Card.Title>
				{ isString( defaultEntry ) ? <Button
					className="wikipedia-reset-button"
					variant="secondary"
					onClick={() => {
						getResult( defaultEntry );
					}}
				>{t('reset')}</Button> : null }
			</Card.Header>
			<Card.Body>
				<VoiceInput
					className="wikipedia-voice-input"
					language={i18n.language}
					onChange={setText}
					onSubmit={getResult}
					onFinalText={getResult}
					placeholder={t('enter-text-and-click-globe')}
				/>
				<button
					aria-label={t('search')}
					onClick={() => {
						getResult( text );
					}}
					className="wikipedia-logo"
				>
				</button>
				<div className="wikipedia-separator"></div>
				{ response ? <div className="wikipedia-result" >
					<iframe
						title={t('wikipedia-page')}
						src={response}
						width="100%"
						height={600}
					/>
				</div> : null }
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

Wikipedia.defaultProps = {
	defaultEntry: null,
	style: {}
};

Wikipedia.propTypes = {
	defaultEntry: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default withPropCheck( Wikipedia );
