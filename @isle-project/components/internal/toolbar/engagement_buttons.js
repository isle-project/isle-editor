// MODULES //

import React, { useCallback, useContext, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import KeyControls from '@isle-project/components/key-controls';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import Tooltip from '@isle-project/components/tooltip';
import { ENGAGEMENT_SURVEY_START } from '@isle-project/constants/actions.js';


// MAIN //

const EngagementButtons = ( props ) => {
	const session = useContext( SessionContext );
	const { t } = useTranslation( 'internal/toolbar' );
	const startYesNoSurvey = useCallback( () => {
		const action = {
			id: 'engagement',
			type: ENGAGEMENT_SURVEY_START,
			value: 'yes:no'
		};
		session.log( action, 'members' );
	}, [ session ] );
	const startSpeedSurvey = useCallback( () => {
		const action = {
			id: 'engagement',
			type: ENGAGEMENT_SURVEY_START,
			value: 'too-slow:too-fast'
		};
		session.log( action, 'members' );
	}, [ session ] );
	const startLikeDislikeSurvey = useCallback( () => {
		const action = {
			id: 'engagement',
			type: ENGAGEMENT_SURVEY_START,
			value: 'like:dislike'
		};
		session.log( action, 'members' );
	}, [ session ] );
	const startSurvey = useCallback( () => {
		const action = {
			id: 'engagement',
			type: ENGAGEMENT_SURVEY_START,
			value: 'survey'
		};
		session.log( action, 'members' );
	}, [ session ] );
	return (
		<Gate owner banner={null} >
			<ButtonGroup vertical className="toolbar-engagement-buttons" {...props} >
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
					'1': startLikeDislikeSurvey,
					'2': startSpeedSurvey,
					'3': startYesNoSurvey,
					'4': startSurvey
				}}
			/>
		</Gate>
	);
};


// EXPORTS //

export default EngagementButtons;
