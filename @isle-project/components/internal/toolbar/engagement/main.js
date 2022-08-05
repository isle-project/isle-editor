// MODULES //

import React, { useCallback, useEffect, useRef, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import KeyControls from '@isle-project/components/key-controls';
import Gate from '@isle-project/components/gate';
import Tooltip from '@isle-project/components/tooltip';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import { START, END } from '@isle-project/constants/actions.js';
import SurveyGenerator from './survey_generator.js';
import Binary from './binary.js';
import Meter from './meter.js';
import './engagement.css';


// VARIABLES //

const P = '(P)';


// MAIN //

const EngagementButtons = ({ session }) => {
	const { t } = useTranslation( 'internal/toolbar' );
	const { logAction, onAction } = useActionLogger( 'ENGAGEMENT_SURVEY', { id: 'engagement' } );
	const [ inProgress, setInProgress ] = useState( false );
	const [ showMenu, setShowMenu ] = useState( false );
	const engagementButtonRef = useRef( null );
	const startYesNoSurvey = useCallback( () => {
		logAction( START, 'yes:no', {}, 'members' );
	}, [ logAction ] );
	const startSpeedSurvey = useCallback( () => {
		logAction( START, 'too-slow:too-fast', {}, 'members' );
	}, [ logAction ] );
	const startLikeDislikeSurvey = useCallback( () => {
		logAction( START, 'like:dislike', {}, 'members' );
	}, [ logAction ] );
	const startSurvey = useCallback( () => {
		logAction( START, 'survey', {}, 'members' );
	}, [ logAction ] );

	useEffect( () => {
		console.log( 'Engagement component mounted.' );
		const unsubscribe = onAction({
			[START]: ( action ) => {
				console.log( 'Engagement poll started.' );
				setInProgress( action.value );
				setShowMenu( false );
			},
			[END]: ( action ) => {
				console.log( 'Engagement poll ended.' );
				setInProgress( action.value );
				setShowMenu( false );
			}
		});
		return () => {
			console.log( 'Unsubscribe from action logger for engagement buttons...' );
			unsubscribe();
		};
	}, [ onAction ] );
	const handleToggle = useCallback( () => {
		if ( inProgress ) {
			logAction( END, null, {}, 'members' );
		} else {
			setShowMenu( !showMenu );
		}
	}, [ logAction, inProgress, showMenu ] );

	let engagement;
	switch ( inProgress ) {
		case 'yes:no':
		case 'too-slow:too-fast':
			engagement = <Binary type={inProgress} session={session} onHide={handleToggle} />;
			break;
		case 'like:dislike':
			engagement = <Meter session={session} onHide={handleToggle} />;
			break;
		case 'survey':
			engagement = <SurveyGenerator session={session} onHide={handleToggle} />;
			break;
		default:
			engagement = null;
			break;
	}
	const engagementButtons = <Gate owner banner={null} >
		<ButtonGroup vertical className="toolbar-engagement-buttons" >
			<Tooltip tooltip={`${t( 'yes-no' )} (1)`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={startYesNoSurvey}
					aria-label={`${t( 'yes-no' )} ${t( 'poll' )}`}
				>
					<span className="fa fa-lg fa-check toolbar-icon" />
				</Button>
			</Tooltip>
			<Tooltip tooltip={`${t( 'slow-fast' )} (2)`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={startSpeedSurvey}
					aria-label={`${t( 'slow-fast' )} ${t( 'poll' )}`}
				>
					<span className="fa fa-lg fa-tachometer-alt toolbar-icon" />
				</Button>
			</Tooltip>
			<Tooltip tooltip={`${t( 'like-dislike' )} (3)`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={startLikeDislikeSurvey}
					aria-label={`${t( 'like-dislike' )} ${t( 'poll' )}`}
				>
					<span className="fa fa-lg fa-thumbs-up toolbar-icon" />
				</Button>
			</Tooltip>
			<Tooltip tooltip={`${t( 'survey' )} (4)`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={startSurvey}
					aria-label={t( 'survey' )}
				>
					<span className="fa fa-lg fa-poll toolbar-icon" />
				</Button>
			</Tooltip>
		</ButtonGroup>
		<KeyControls
			actions={{
				'1': startYesNoSurvey,
				'2': startSpeedSurvey,
				'3': startLikeDislikeSurvey,
				'4': startSurvey
			}}
		/>
	</Gate>;
	return (
		<Fragment>
			<Gate owner inline showOwnerInPresentationMode banner={null} >
				<Tooltip
					tooltip={`${inProgress ? t( 'finish-poll' ) : t( 'polls' )} ${P}`}
					placement="right"
				>
					<Button
						variant={inProgress ? 'warning' : ( showMenu ? 'success' : 'light' )}
						className="toolbar-button toolbar-engagement"
						onClick={handleToggle}
						ref={engagementButtonRef}
						aria-label={inProgress ? t( 'finish-poll' ) : t( 'open-poll-menu' )}
					>
						<span className="fa fa-lg fa-poll-h toolbar-icon" />
					</Button>
				</Tooltip>
			</Gate>
			<Overlay
				placement="right"
				show={showMenu}
				target={engagementButtonRef.current}
				trigger="click"
			>
				<div>
					{engagementButtons}
				</div>
			</Overlay>
			{engagement}
			<KeyControls
				actions={{
					'p': handleToggle
				}}
			/>
		</Fragment>
	);
};


// PROPERTIES //

EngagementButtons.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default EngagementButtons;
