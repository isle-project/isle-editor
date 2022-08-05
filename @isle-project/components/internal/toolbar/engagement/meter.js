// MODULES //

import React, { useCallback, useEffect, useRef, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import incrmmean from '@stdlib/stats/incr/mmean';
import incrmrange from '@stdlib/stats/incr/mrange';
import roundn from '@stdlib/math/base/special/roundn';
import Draggable from '@isle-project/components/draggable';
import Gate from '@isle-project/components/gate';
import Panel from '@isle-project/components/panel';
import ResponsesTable from './responses_table.js';
import { SHARE } from '@isle-project/constants/actions.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import ScoreSetter from './score_setter.js';


// VARIABLES //

const ENGAGEMENT_METER = 'engagement-meter';


// MAIN //

/**
* An ISLE component that displays an engagement meter with which the students can indicate how well they are following the class.
*/
const EngagementMeter = ({ session, t, onHide }) => {
	const [ mean, setMean ] = useState( null );
	const [ range, setRange ] = useState( null );
	const [ responses, setResponses ] = useState( [] );
	const [ showResponses, setShowResponses ] = useState( false );

	const { logAction, onAction } = useActionLogger( ENGAGEMENT_METER, { id: ENGAGEMENT_METER } );

	const toggleResponses = useCallback( () => {
		setShowResponses( !showResponses );
	}, [ showResponses ] );

	const meanAcc = useRef( incrmmean( 6 ) );
	const rangeAcc = useRef( incrmrange( 6 ) );

	useEffect( () => {
		const unsubscribe = onAction({
			[SHARE]: ( action ) => {
				const newMean = meanAcc.current( action.value );
				const newRange = rangeAcc.current( action.value );
				const newResponses = responses.slice();
				newResponses.push({
					name: action.name,
					email: action.email,
					value: action.value
				});
				setMean( newMean );
				setRange( newRange );
				setResponses( newResponses );
			}
		});
		if ( !session.isOwner() ) {
			const notification = session.addNotification({
				title: t( 'poll' ),
				message: t( 'meter-prompt' ),
				level: 'info',
				position: 'tc',
				dismissible: 'none',
				autoDismiss: 0,
				children: <ScoreSetter t={t} onSubmit={( progress ) => {
					logAction( SHARE, progress );
					session.removeNotification( notification );
					session.addNotification({
						title: t( 'answer-recorded' ),
						message: t( 'answer-recorded-message' ),
						level: 'success',
						position: 'tc'
					});
				}} />
			});
		}
		return () => {
			unsubscribe();
		};
	}, [ logAction, responses, session, t, onAction ] );
	return (
		<Fragment>
			<Draggable dragHandleClassName="card-header" >
				<Gate owner showOwnerInPresentationMode={false} banner={null} >
					<Panel header={t( 'poll' )} hideTooltip={t( 'finish-poll' )} onHide={onHide}
						className="engagement-meter-panel" minimizable trapFocus
					>
						<div className="score-bottom" >
							{mean ?
								<Fragment>
									<ProgressBar style={{ marginTop: 23 }}>
										<ProgressBar animated variant="success" now={mean} />
										<ProgressBar animated variant="danger" now={100-mean} />
									</ProgressBar>
								</Fragment> : null }
						</div>
						{mean ?
							<p>{t( 'mean' )}: {roundn( mean, -2 )} (n: {responses.length})</p> : null
						}
						{range ?
							<p>{t( 'range' )}: {roundn( range, -2 )}</p> : null
						}
						<Button
							variant="link"
							onClick={toggleResponses}
						>
							<small>{t( 'toggle-details' )}</small>
						</Button>
					</Panel>
				</Gate>
			</Draggable>
			{showResponses ? <ResponsesTable
				responses={responses}
				session={session}
				onHide={toggleResponses}
				renderValue={( row ) => {
					return row.value;
				}}
			/> : null}
		</Fragment>
	);
};

// PROPERTIES //

EngagementMeter.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/toolbar' )( EngagementMeter );
