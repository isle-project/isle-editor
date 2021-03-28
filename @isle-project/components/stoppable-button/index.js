// MODULES //

import React, { useCallback, useContext, useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import { BUTTON_PAUSE, BUTTON_RESUME } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


// MAIN //

const StoppableButton = ({ disabled, label, id, onSubmit, onPaused }) => {
	const [ paused, setPaused ] = useState( false );
	const { t } = useTranslation( 'General' );
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
		<Fragment>
			<Button
				size="small"
				variant="success"
				block fill
				onClick={onSubmit}
				disabled={disabled || paused}
			>{label}</Button>
			<Gate owner >
				<Button
					size="small"
					variant={paused ? 'warning' : 'secondary'} block fill
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
		</Fragment>
	);
};


// EXPORTS //

export default StoppableButton;
