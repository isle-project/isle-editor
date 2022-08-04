// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation, Trans } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import ReactTable from 'react-table';
import contains from '@stdlib/assert/contains';
import isNull from '@stdlib/assert/is-null';
import Tooltip from '@isle-project/components/tooltip';
import ChatButton from '@isle-project/components/internal/chat-button';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import SessionContext from '@isle-project/session/context.js';
import { ENTER } from '@isle-project/constants/actions.js';
import { RECEIVED_QUEUE_QUESTIONS } from '@isle-project/constants/events.js';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import 'react-table/react-table.css';
import './queue.css';


// VARIABLES //

const debug = logger( 'isle:queue' );


// FUNCTIONS //

const QueueTable = ( props ) => {
	if ( props.questions.length === 0 ) {
		return <p>{props.t( 'no-questions' )}</p>;
	}
	const session = props.session;
	return (
		<ReactTable
			className="queue-table"
			showPageSizeOptions={false}
			data={props.questions}
			resizable={false}
			sortable={false}
			columns={[
				{
					Header: 'Pic',
					id: 'pic',
					accessor: ( d ) => {
						const { userList } = session;
						for ( let i = 0; i < userList.length; i++ ) {
							if ( userList[ i ].name === d.name ) {
								return userList[ i ].picture;
							}
						}
						return '';
					},
					Cell: row => {
						return (
							<img
								className="queue-table-pic" alt="User thumbnail"
								src={`${session.server}/thumbnail/${row.value}`}
							/>
						);
					},
					maxWidth: 46,
					minWidth: 46,
					style: { color: 'darkslategrey' }
				},
				{
					Header: props.t( 'name' ),
					id: 'nameCol',
					accessor: 'name',
					width: 150,
					Cell: ( row ) => {
						return ( <Tooltip tooltip={`${row.value} (${row.original.email})`} >
							<span className="queue-table-name" >{row.value}</span>
						</Tooltip> );
					}
				},
				{
					Header: props.t( 'cohort' ),
					id: 'cohortCol',
					accessor: ( d ) => {
						const { cohorts } = session;
						for ( let i = 0; i < cohorts.length; i++ ) {
							if ( contains( cohorts[ i ].members, d.email ) ) {
								return cohorts[ i ].title;
							}
						}
						return '';
					}
				},
				{
					Header: props.t( 'question' ),
					id: 'qCol',
					accessor: 'value',
					width: 350,
					style: { 'white-space': 'unset' }
				},
				{
					Header: props.t( 'chat' ),
					Cell: ( row ) => {
						const chatID = 'Queue_'+row.original.name;
						return <ChatButton tooltip={props.t( 'queue-start-chat' )} for={chatID} />;
					}
				},
				{
					Header: '',
					accessor: 'remove',
					Cell: ( row ) => {
						return (
							<Tooltip placement="left" tooltip={props.t( 'mark-and-remove' )}>
								<Button variant="secondary" size="sm" onClick={() => {
									session.removeQuestionFromQueue( row.original );
								}}>
									<i className="fas fa-check" />
								</Button>
							</Tooltip>
						);
					},
					filterable: false,
					width: 45
				}
			]}
			pageSize={8}
		/>
	);
};


// MAIN //

const Queue = ( props ) => {
	const { id, logAction } = useActionLogger( 'QUEUE', props );
	const { draggable, show, onHide, onNewQuestion } = props;
	const session = useContext( SessionContext );
	const questions = session.questions;
	const { t } = useTranslation( 'internal/toolbar/queue' );
	const [ text, setText ] = useState( '' );
	const [ spot, setSpot ] = useState( null );

	const enter = () => {
		debug( 'Send the signal to enter the queue...' );
		logAction( ENTER, text, {}, 'members' );
		const question = {
			name: session.user.name,
			email: session.user.email,
			value: text
		};
		session.addQuestionToQueue( question );
	};
	const leave = () => {
		const question = {
			name: session.user.name,
			email: session.user.email,
			value: text
		};
		session.removeQuestionFromQueue( question );
	};
	const handleEscape = ( event ) => {
		if (
			event.target.className && event.target.className.includes( 'queue-panel' )
		) {
			onHide();
		}
	};
	useEffect(() => {
		let unsubscribe;
		if ( session ) {
			debug( 'We have a session, subscribe the component...' );
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === RECEIVED_QUEUE_QUESTIONS ) {
					const questions = action;
					let idx = null;
					for ( let i = 0; i < questions.length; i++ ) {
						if ( questions[ i ].email === session.user.email ) {
							idx = i;
							break;
						}
					}
					setSpot( idx );
				}
				if ( action && action.id === id && action.type === ENTER ) {
					if ( session.isOwner() ) {
						onNewQuestion();
					}
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [ id, onNewQuestion, session ] );

	let out;
	if ( show ) {
		if ( session.isOwner() ) {
			debug( 'User is an owner...' );
			out = <Panel className="queue-panel" tabIndex={0} role="button"
				header={t( 'queue' )} onHide={onHide} minimizable trapFocus
			>
				<QueueTable
					questions={session.questions}
					t={t}
					session={session}
					for={id}
				/>
			</Panel>;
			if ( draggable ) {
				out = <Draggable
					bounds="#Lesson" cancel=".queue-table"
					onEscape={handleEscape} resizable
					minWidth={300} minHeight={150}
				>
					{out}
				</Draggable>;
			}
			return out;
		}
		const handleHide = () => {
			setText( '' );
			onHide();
		};
		if ( !isNull( spot ) ) {
			const chatID = 'Queue_'+session.user.name;
			out = <Panel className="queue-panel" tabIndex={0} role="button"
				header={t( 'queue' )} onHide={handleHide} minimizable trapFocus >
				<p>
				<Trans i18nKey="queue-status" ns="Queue" >
					Your question: <i>{{ question: text }}</i><br />
					You are currently at position <strong>{{ spot }}</strong> on the queue.<br />
					There are <strong>{{ size: session.questions.length }}</strong> individual(s) in the queue.
				</Trans>
				</p>
				<ChatButton for={chatID} showTooltip={false} />
				<Button style={{ marginLeft: 10 }} size="sm" onClick={leave}>
					{t( 'remove-myself-from-queue' )}
				</Button>
			</Panel>;
			if ( draggable ) {
				out = <Draggable
					bounds="#Lesson"
					onEscape={handleEscape} resizable
					minWidth={300} minHeight={150}
				>
					{out}
				</Draggable>;
			}
			return out;
		}
		out = <Panel
			className="queue-panel" tabIndex={0} role="button"
			header={t( 'queue' )} onHide={handleHide} minimizable trapFocus
		>
			<p>{t( 'queue-prompt' )}</p>
			<FormGroup>
				<FormLabel>{t( 'question' )}</FormLabel>
				<FormControl type="text" id="queue_form"
					value={text}
					onChange={( event ) => {
						setText( event.target.value );
					}}
					onKeyPress={( event ) => {
						if ( event.charCode === 13 && text.length > 0 ) {
							enter();
						}
					}}
					width={500}
				/>
			</FormGroup>
			<Button
				disabled={text.length === 0}
				onClick={enter}
			>
				{t( 'submit-question' )}
			</Button>
			<span style={{ marginLeft: 8 }}>
				{t( 'queue-size', { n: questions.length })}
			</span>
		</Panel>;
		if ( draggable ) {
			out = <Draggable
				bounds="#Lesson" cancel="#queue_form"
				onEscape={handleEscape}
				resizable
				minWidth={300} minHeight={150}
			>
				{out}
			</Draggable>;
		}
		return out;
	}
	return null;
};


// PROPERTIES //

Queue.defaultProps = {
	draggable: true,
	show: true,
	onHide() {},
	onNewQuestion() {}
};

Queue.propTypes = {
	draggable: PropTypes.bool,
	show: PropTypes.bool,
	onHide: PropTypes.func,
	onNewQuestion: PropTypes.func
};


// EXPORTS //

export default Queue;
