// MODULES //

import React, { useCallback, useContext, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import KeyControls from '@isle-project/components/key-controls';
import SessionContext from '@isle-project/session/context.js';
import Tooltip from '@isle-project/components/tooltip';
import { ENGAGEMENT_SURVEY_START } from '@isle-project/constants/actions.js';


// VARIABLES //

const L = '(L)';
const F = '(F)';
const Y = '(Y)';
const P = '(P)';


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
		<Fragment>
			<ButtonGroup vertical className="toolbar-engagement-buttons" {...props} >
				<Tooltip tooltip={`${t( 'yes-no' )} ${Y}`} placement="right" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={startYesNoSurvey}
						aria-label={`${t( 'yes-no' )} ${t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-check toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={`${t( 'slow-fast' )} ${F}`} placement="right" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={startSpeedSurvey}
						aria-label={`${t( 'slow-fast' )} ${t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-tachometer-alt toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={`${t( 'like-dislike' )} ${L}`} placement="right" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={startLikeDislikeSurvey}
						aria-label={`${t( 'like-dislike' )} ${t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-thumbs-up toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={`${t( 'survey' )} ${P}`} placement="right" >
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
					'l': startLikeDislikeSurvey,
					'f': startSpeedSurvey,
					'y': startYesNoSurvey,
					'p': startSurvey
				}}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default EngagementButtons;
