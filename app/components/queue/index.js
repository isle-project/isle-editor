// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Draggable from 'react-draggable';
import ReactTable from 'react-table';
import contains from '@stdlib/assert/contains';
import noop from '@stdlib/utils/noop';
import Tooltip from 'components/tooltip';
import ChatButton from 'components/chat-button';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';
import 'react-table/react-table.css';
import './queue.css';


// VARIABLES //

const debug = logger( 'isle:queue' );


// MAIN //

class Queue extends Component {
	constructor( props ) {
		super( props );
		debug( 'Invoking constructor...' );

		this.state = {
			arr: [],
			inQueue: false, // if a user is already in the queue
			spot: null,
			questionText: '',
			isOwner: false,
			queueSize: 0
		};
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			debug( 'We have a session, subscribe the component...' );
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'RECEIVED_USER_RIGHTS' ) {
					// We need to check whether the user is an owner:
					this.checkAuthorization();
				} else if ( type === 'user_joined' && this.state.isOwner ) {
					session.log({
						id: this.props.id,
						type: 'SEND_QUEUE_SIZE',
						value: this.state.queueSize,
						noSave: true
					}, 'members' );
				}
				if ( action && action.id === this.props.id ) {
					if ( action.type === 'ENTER_QUEUE' ) {
						debug( 'Someone is entering the queue' );
						const newSize = this.state.queueSize + 1;
						if ( this.state.isOwner ) {
							this.state.arr.push({
								name: action.name,
								email: action.email,
								question: action.value,
								spot: newSize
							});
							this.setState({
								arr: this.state.arr,
								queueSize: newSize
							}, () => {
								session.log({
									id: this.props.id,
									type: 'SEND_QUEUE_SIZE',
									value: this.state.queueSize,
									noSave: true
								}, 'members' );
								this.props.onNewQuestion();
							});
						}
					}
					else if ( action.type === 'LEFT_QUEUE' ) {
						debug( 'Someone has been removed from the queue' );
						const val = Number( action.value );
						const newSize = this.state.queueSize - 1;
						if ( this.state.spot ) {
							if ( val < this.state.spot ) {
								this.setState({
									spot: this.state.spot - 1
								});
							} else if ( val === this.state.spot ) {
								this.setState({
									spot: null,
									inQueue: false,
									questionText: ''
								});
							}
						} else if ( this.state.isOwner ) {
							const newArr = this.state.arr.slice();
							newArr.splice( val - 1, 1 );
							this.setState({
								arr: newArr,
								queueSize: newSize
							}, () => {
								session.log({
									id: this.props.id,
									type: 'SEND_QUEUE_SIZE',
									value: newSize,
									noSave: true
								}, 'members' );
							});
						}
					}
					else if ( action.type === 'SEND_QUEUE_SIZE' ) {
						// Update the internal queue size state for each user:
						const queueSize = Number( action.value );
						this.props.onQueueSize( queueSize );
						this.setState({
							queueSize
						});
					}
				}
			});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	checkAuthorization = () => {
		const session = this.context;
		let newState = {
			isOwner: session.isOwner()
		};
		if ( newState.isOwner !== this.state.isOwner ) {
			this.setState( newState );
		}
	}

	handleText = ( event ) => {
		this.setState({
			questionText: event.target.value
		});
	}

	enterQueue = () => {
		debug( 'Send the signal to enter the queue...' );
		this.setState({
			inQueue: true,
			spot: this.state.queueSize + 1 // increment at add
		}, () => {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: 'ENTER_QUEUE',
				value: this.state.questionText,
				noSave: false
			}, 'members' );
		});
	}

	leaveQueue = () => {
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'LEFT_QUEUE',
			value: this.state.spot
		}, 'members' );
	}

	renderButtonRemovable = ( cellInfo ) => {
		return (
			<Tooltip placement="left" tooltip="Mark question as answered and remove">
				<Button variant="secondary" size="sm" onClick={() => {
					const session = this.context;
					session.log({
						id: this.props.id,
						type: 'LEFT_QUEUE',
						value: cellInfo.index + 1
					}, 'members' );
				}}>
					<i className="fas fa-check" />
				</Button>
			</Tooltip>
		);
	}

	renderHeader() {
		return (
			<span>
				Question Queue
				{ this.props.onHide ?
					<span className="queue-hide-button fa fa-times" onClick={this.props.onHide} /> :
					null
				}
			</span>
		);
	}

	/*
	* React component render method.
	*/
	render() {
		const session = this.context;
		let out;
		if ( this.props.show ) {
			if ( this.state.isOwner ) {
				debug( 'User is an owner...' );
				out = <Panel className="queue-panel" header={this.renderHeader()}>
					{ this.state.arr.length === 0 ? <p>There are currently no questions in the queue.</p> :
					<ReactTable
						className="queue-table"
						showPageSizeOptions={false}
						data={this.state.arr}
						resizable={false}
						sortable={false}
						columns={[
							{
								Header: ' # ',
								id: 'queueSpot',
								accessor: 'spot',
								width: 36
							},
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
									return <img className="queue-table-pic" src={`${session.server}/thumbnail/${row.value}`} />;
								},
								maxWidth: 46,
								minWidth: 46,
								style: { color: 'darkslategrey' }
							},
							{
								Header: 'Name',
								id: 'nameCol',
								accessor: 'name',
								width: 150,
								Cell: ( row ) => {
									return ( <Tooltip tooltip={`${row.value} (${row.original.email})`} >
										<span>{row.value}</span>
									</Tooltip> );
								}
							},
							{
								Header: 'Cohort',
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
								Header: 'Question',
								id: 'qCol',
								accessor: 'question',
								width: 350,
								style: { 'white-space': 'unset' }
							},
							{
								Header: 'Chat',
								Cell: ( row ) => {
									const chatID = 'Queue_'+row.original.name+'_'+row.original.spot;
									return ( <Tooltip placement="left" tooltip="Start chat with student" >
										<div>
											<ChatButton showTooltip={false} for={chatID} />
										</div>
									</Tooltip> );
								}
							},
							{
								Header: '',
								accessor: 'remove',
								Cell: this.renderButtonRemovable,
								filterable: false,
								width: 45
							}
						]}
						pageSize={8}
					/> }
				</Panel>;
				if ( this.props.draggable ) {
					out = <Draggable bounds="#Lesson" cancel=".queue-table" enableUserSelectHack={false} >
						<div className="outer-queue">{out}</div>
					</Draggable>;
				}
				return out;
			}
			// Case: We are not an owner
			if ( this.state.inQueue ) {
				const chatID = 'Queue_'+session.user.name+'_'+this.state.spot;
				out = <Panel className="queue-panel" header={this.renderHeader()}>
					<p>Your question: <i>{this.state.questionText}</i></p>
					<p>You are currently at position <b>{this.state.spot}</b> on the queue.</p>
					<p>There are {this.state.queueSize} individual(s) in the queue.</p>
					<ChatButton for={chatID} showTooltip={false} />
					<Button style={{ marginLeft: 10 }} size="sm" onClick={this.leaveQueue}>
						Remove me from queue
					</Button>
				</Panel>;
				if ( this.props.draggable ) {
					out = <Draggable bounds="#Lesson" enableUserSelectHack={false} >
						<div className="outer-queue">{out}</div>
					</Draggable>;
				}
				return out;
			}
			out = <Panel className="queue-panel" header={this.renderHeader()}>
				<p>You can submit a question below and someone will be with you shortly!</p>
				<FormGroup>
					<FormLabel>Question</FormLabel>
					<FormControl type="text" id="queue_form"
						value={this.state.questionText}
						onChange={this.handleText}
						inline={false}
						width={500}
					/>
				</FormGroup>
				<Button
					disabled={this.state.questionText.length === 0}
					onClick={this.enterQueue}
				>
					Submit question
				</Button>
				<span style={{ marginLeft: 8 }}>(there are currently {this.state.queueSize} individual(s) in the queue)</span>
			</Panel>;
			if ( this.props.draggable ) {
				out = <Draggable bounds="#Lesson" cancel="#queue_form" enableUserSelectHack={false} >
					<div className="outer-queue">{out}</div>
				</Draggable>;
			}
			return out;
		}
		return null;
	}
}


// PROPERTIES //

Queue.defaultProps = {
	draggable: true,
	show: true,
	onHide: null,
	onQueueSize: noop,
	onNewQuestion: noop
};

Queue.propTypes = {
	draggable: PropTypes.bool,
	show: PropTypes.bool,
	onHide: PropTypes.func,
	onQueueSize: PropTypes.func,
	onNewQuestion: PropTypes.func
};

Queue.contextType = SessionContext;


// EXPORTS //

export default Queue;
