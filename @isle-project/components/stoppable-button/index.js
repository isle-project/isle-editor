// MODULES //

import React, { useCallback, useContext, useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import { BUTTON_PAUSE, BUTTON_RESUME } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import './stoppable_button.css';


// MAIN //

const StoppableButton = ({ children, disabled, id, size, variant, onClick, onPaused }) => {
	const [ paused, setPaused ] = useState( false );
	const { t } = useTranslation( 'general' );
	const session = useContext( SessionContext );

	useEffect( () => {
		let unsubscribe;
		if ( session ) {
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === MEMBER_ACTION && action.id === id+'-stoppable-button' ) {
					if ( action.type === BUTTON_PAUSE ) {
						setPaused( true );
						onPaused( true );
					} else if ( action.type === BUTTON_RESUME ) {
						setPaused( false );
						onPaused( false );
					}
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [ id, session, onPaused ] );

	const togglePaused = useCallback( () => {
		session.log({
			id: id+'-stoppable-button',
			type: paused ? BUTTON_RESUME : BUTTON_PAUSE,
			value: true
		}, 'members' );
		setPaused( !paused );
		if ( onPaused ) {
			onPaused( !paused );
		}
	}, [ id, paused, session, onPaused ] );

	if ( !id ) {
		return <Alert variant="danger">{t('supply-component-id')}</Alert>;
	}
	return (
		<div className="d-grid gap-2" >
			<Button
				className="stoppable-button"
				size={size}
				variant={variant}
				onClick={onClick}
				disabled={disabled || paused}
			>{children}</Button>
			<Gate owner banner={null} >
				<Button
					size={size}
					variant={paused ? 'warning' : 'secondary'}
					onClick={togglePaused}
				>
					{paused ?
						<span>
							{t('resume')}
						</span> :
						<span>
							{t('pause')}
						</span>
					}
				</Button>
			</Gate>
		</div>
	);
};


// PROPERTIES //

StoppableButton.defaultProps = {
	size: 'small',
	variant: 'success'
};

StoppableButton.propTypes = {
	size: PropTypes.oneOf([
		'small',
		'sm',
		'large',
		'lg'
	]),
	variant: PropTypes.string
};


// EXPORTS //

export default StoppableButton;
