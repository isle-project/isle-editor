// MODULES //

import React, { useCallback, useEffect, useState, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Draggable from '@isle-project/components/draggable';
import Gate from '@isle-project/components/gate';
import Panel from '@isle-project/components/panel';
import ResponsesTable from './responses_table.js';
import { SHARE } from '@isle-project/constants/actions.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';


// VARIABLES //

const ENGAGEMENT_BINARY = 'ENGAGEMENT_BINARY';
const ENGAGEMENT_BINARY_ID = 'engagement-binary';


// MAIN //

/**
* An ISLE component that displays an engagement meter with which the students can indicate how well they are following the class.
*/
const EngagementBinary = ({ session, type, t, onHide }) => {
	const [ nLeft, setNLeft ] = useState( 0 );
	const [ nRight, setNRight ] = useState( 0 );
	const [ responses, setResponses ] = useState( [] );
	const [ showResponses, setShowResponses ] = useState( false );
	const { logAction, onAction } = useActionLogger( ENGAGEMENT_BINARY, { id: ENGAGEMENT_BINARY_ID } );
	const notification = useRef( null );
	useEffect( () => {
		let leftButton;
		let rightButton;
		let message;
		switch ( type ) {
			case 'yes:no':
				leftButton = 'fas fa-times';
				rightButton = 'fas fa-check';
				message = t( 'answer-yes-no' );
			break;
			case 'too-slow:too-fast':
				leftButton = 'fas fa-backward';
				rightButton = 'fas fa-forward';
				message = t( 'answer-slow-fast' );
			break;
		}
		if ( !session.isOwner() && !notification.current ) {
			notification.current = session.addNotification({
				title: t( 'poll' ),
				message,
				level: 'info',
				position: 'tc',
				dismissible: 'none',
				autoDismiss: 0,
				children: <div style={{ marginBottom: '40px', marginTop: '10px' }}>
					<Button
						variant="secondary" style={{ float: 'left' }}
						onClick={() => {
							logAction( SHARE, -1 );
							session.removeNotification( notification.current );
							session.addNotification({
								title: t( 'answer-recorded' ),
								message: t( 'answer-recorded-message' ),
								level: 'success',
								position: 'tc'
							});
						}}
					>
						<i className={leftButton} ></i>
					</Button>
					<Button
						variant="secondary" style={{ float: 'right' }}
						onClick={() => {
							logAction( SHARE, 1 );
							session.removeNotification( notification.current );
							session.addNotification({
								title: t( 'answer-recorded' ),
								message: t( 'answer-recorded-message' ),
								level: 'success',
								position: 'tc'
							});
						}}
					>
						<i className={rightButton}></i>
					</Button>
				</div>
			});
		}
	}, [ logAction, session, t, type ] );
	useEffect( () => {
		const unsubscribe = onAction({
			[SHARE]: ( action ) => {
				const newResponses = responses.slice();
				newResponses.push({
					name: action.name,
					email: action.email,
					value: action.value
				});
				if ( action.value === 1 ) {
					setNRight( nRight + 1 );
					setResponses( newResponses );
				} else if ( action.value === -1 ){
					setNLeft( nLeft + 1 );
					setResponses( newResponses );
				}
			}
		});
		return () => {
			unsubscribe();
		};
	}, [ nLeft, nRight, onAction, responses ] );
	const toggleResponses = useCallback( () => {
		setShowResponses( !showResponses );
	}, [ showResponses ] );

	let leftButton;
	let rightButton;
	switch ( type ) {
		case 'yes:no':
			leftButton = 'fas fa-times';
			rightButton = 'fas fa-check';
		break;
		case 'too-slow:too-fast':
			leftButton = 'fas fa-backward';
			rightButton = 'fas fa-forward';
		break;
	}
	const table = <Table bordered size="sm">
		<thead>
			<tr>
				<th><i className={leftButton}></i></th>
				<th><i className={rightButton}></i></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{nLeft}</td>
				<td>{nRight}</td>
			</tr>
		</tbody>
	</Table>;
	return (
		<Fragment>
			<Draggable dragHandleClassName="card-header" >
				<Gate owner showOwnerInPresentationMode={false} banner={null} >
					<Panel header={t('poll')} hideTooltip={t('finish-poll')} onHide={onHide}
						className="engagement-meter-panel" minimizable trapFocus
					>
						{table}
						<Button
							variant="link"
							onClick={toggleResponses}
						>
							<small>{t('toggle-details')}</small>
						</Button>
					</Panel>
				</Gate>
				<Gate user notOwner header={t('poll')} banner={null} >
					<Panel
						header={t('poll')}
						className="engagement-meter-panel"
						minimizable trapFocus
					>
						{table}
					</Panel>
				</Gate>
			</Draggable>
			{showResponses ? <ResponsesTable
				responses={responses}
				session={session}
				onHide={toggleResponses}
				renderValue={( row ) => {
					return ( row.value === -1 ?
						<i className={leftButton}></i> :
						<i className={rightButton}></i>
					);
				}}
			/> : null}
		</Fragment>
	);
};


// PROPERTIES //

EngagementBinary.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/toolbar' )( EngagementBinary );
