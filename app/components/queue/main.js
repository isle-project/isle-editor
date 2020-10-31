// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation, Trans } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import ReactTable from 'react-table';
import contains from '@stdlib/assert/contains';
import generateUID from 'utils/uid/incremental';
import Tooltip from 'components/tooltip';
import ChatButton from 'components/chat-button';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';
import { ENTER_QUEUE, LEFT_QUEUE } from 'constants/actions.js';
import 'react-table/react-table.css';
import './load_translations.js';
import './queue.css';


// VARIABLES //

const debug = logger( 'isle:queue' );
const uid = generateUID( 'queue' );


// FUNCTIONS //

const QueueTable = ( props ) => {
	if ( props.questions.length === 0 ) {
		return <p>{props.t( 'no-questions' )}</p>;
	}
	const session = props.session;
	const renderButtonRemovable = ( cellInfo ) => {
		return (
			<Tooltip placement="left" tooltip={props.t( 'mark-and-remove' )}>
				<Button variant="secondary" size="sm" onClick={() => {
					session.log({
						id: props.for,
						type: LEFT_QUEUE,
						value: cellInfo.index + 1
					}, 'members' );
				}}>
					<i className="fas fa-check" />
				</Button>
			</Tooltip>
		);
	};
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
					accessor: 'question',
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
					Cell: renderButtonRemovable,
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
	const id = props.id || uid();
	const session = useContext( SessionContext );
	const questions = session.questions;
	const [ text, setText ] = useState( '' );

	const enter = () => {
		debug( 'Send the signal to enter the queue...' );
		session.log({
			id: id,
			type: ENTER_QUEUE,
			value: text
		}, 'members' );
		session.addQuestionToQueue( text );
	};
	const leave = () => {
		session.removeQuestionFromQueue( text );
	};
	const handleEscape = ( event ) => {
		if (
			event.target.className && event.target.className.includes( 'queue-panel' )
		) {
			props.onHide();
		}
	};
	let unsubscribe;
	useEffect(() => {
		if ( session ) {
			debug( 'We have a session, subscribe the component...' );
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( action && action.id === id && action.type === ENTER_QUEUE ) {
					if ( session.isOwner() ) {
						props.onNewQuestion();
					}
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [] );

	let out;
	if ( props.show ) {
		if ( session.isOwner() ) {
			debug( 'User is an owner...' );
			out = <Panel className="queue-panel" tabIndex={0} role="button"
				header={props.t( 'queue' )} onHide={props.onHide} minimizable
			>
				<QueueTable
					questions={session.questions}
					t={props.t}
					session={session}
					for={id}
				/>
			</Panel>;
			if ( props.draggable ) {
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
		let spot = null;
		for ( let i = 0; i < questions.length; i++ ) {
			if ( questions[ i ].email === session.user.email ) {
				spot = i;
				break;
			}
		}
		if ( spot ) {
			const chatID = 'Queue_'+session.user.name;
			out = <Panel className="queue-panel" tabIndex={0} role="button"
				header={props.t( 'queue' )} onHide={props.onHide} minimizable >
				<p>
				<Trans i18nKey="queue-status" >
					Your question: <i>{{ question: text }}</i><br />
					You are currently at position <strong>{{ spot }}</strong> on the queue.<br />
					There are <strong>{{ size: session.questions.length }}</strong> individual(s) in the queue.
				</Trans>
				</p>
				<ChatButton for={chatID} showTooltip={false} />
				<Button style={{ marginLeft: 10 }} size="sm" onClick={leave}>
					{props.t( 'remove-myself-from-queue' )}
				</Button>
			</Panel>;
			if ( props.draggable ) {
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
			header={props.t( 'queue' )} onHide={props.onHide} minimizable
		>
			<p>{props.t( 'queue-prompt' )}</p>
			<FormGroup>
				<FormLabel>{props.t( 'question' )}</FormLabel>
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
				{props.t( 'submit-question' )}
			</Button>
			<span style={{ marginLeft: 8 }}>
				{props.t( 'queue-size', { n: questions.length })}
			</span>
		</Panel>;
		if ( props.draggable ) {
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
	onSize() {},
	onNewQuestion() {}
};

Queue.propTypes = {
	draggable: PropTypes.bool,
	show: PropTypes.bool,
	onHide: PropTypes.func,
	onSize: PropTypes.func,
	onNewQuestion: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'queue' )( Queue );
