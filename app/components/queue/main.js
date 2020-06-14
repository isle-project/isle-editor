// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation, Trans } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import ReactTable from 'react-table';
import contains from '@stdlib/assert/contains';
import max from '@stdlib/math/base/special/max';
import generateUID from 'utils/uid/incremental';
import Tooltip from 'components/tooltip';
import ChatButton from 'components/chat-button';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';
import { SEND_QUEUE_SIZE, ENTER_QUEUE, LEFT_QUEUE } from 'constants/actions.js';
import { USER_JOINED, USER_LEFT } from 'constants/events.js';
import 'react-table/react-table.css';
import './load_translations.js';
import './queue.css';


// VARIABLES //

const debug = logger( 'isle:queue' );
const uid = generateUID( 'queue' );


// MAIN //

class Queue extends Component {
	constructor( props ) {
		super( props );
		debug( 'Invoking constructor...' );

		this.id = props.id || uid();
		this.state = {
			arr: [],
			inQueue: false, // if a user is already in the queue
			spot: null,
			questionText: '',
			queueSize: 0
		};
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			debug( 'We have a session, subscribe the component...' );
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === USER_JOINED && session.isOwner() ) {
					session.log({
						id: this.id,
						type: SEND_QUEUE_SIZE,
						value: this.state.queueSize,
						noSave: true
					}, 'members' );
				}
				else if ( type === USER_LEFT && session.isOwner() ) {
					let pos = -1;
					for ( let i = 0; i < this.state.arr.length; i++ ) {
						const val = this.state.arr[ i ];
						if ( val.email === action ) {
							pos = i;
						}
					}
					if ( pos >= 0 ) {
						const newArr = this.state.arr.slice();
						newArr.splice( pos - 1, 1 );
						const newSize = this.state.queueSize - 1;
						this.setState({
							arr: newArr,
							queueSize: newSize
						}, () => {
							session.log({
								id: this.id,
								type: SEND_QUEUE_SIZE,
								value: newSize,
								noSave: true
							}, 'members' );
						});
					}
				}
				if ( action && action.id === this.id ) {
					if ( action.type === ENTER_QUEUE ) {
						debug( 'Someone is entering the queue' );
						const newSize = this.state.queueSize + 1;
						if ( session.isOwner() ) {
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
									id: this.id,
									type: SEND_QUEUE_SIZE,
									value: this.state.queueSize,
									noSave: true
								}, 'members' );
								this.props.onNewQuestion();
							});
						}
					}
					else if ( action.type === LEFT_QUEUE ) {
						debug( 'Someone has been removed from the queue' );
						const val = Number( action.value );
						const newSize = max( this.state.queueSize - 1, 0 );
						if ( this.state.spot ) {
							if ( val < this.state.spot ) {
								this.setState({
									spot: max( this.state.spot - 1, 0 )
								});
							} else if ( val === this.state.spot ) {
								this.setState({
									spot: null,
									inQueue: false,
									questionText: ''
								});
							}
						} else if ( session.isOwner() ) {
							const newArr = this.state.arr.slice();
							newArr.splice( val - 1, 1 );
							this.setState({
								arr: newArr,
								queueSize: newSize
							}, () => {
								session.log({
									id: this.id,
									type: SEND_QUEUE_SIZE,
									value: newSize,
									noSave: true
								}, 'members' );
							});
						}
					}
					else if ( action.type === SEND_QUEUE_SIZE ) {
						// Update the internal queue size state for each user:
						const queueSize = Number( action.value );
						this.props.onQueueSize( queueSize );
						this.setState({
							queueSize
						});
					}
					else {
						this.forceUpdate();
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

	handleText = ( event ) => {
		this.setState({
			questionText: event.target.value
		});
	}

	handleEscape = ( event ) => {
		if (
			event.target.className &&
			event.target.className.includes( 'queue-panel' )
		) {
			this.props.onHide();
		}
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && this.state.questionText.length > 0 ) {
			this.enterQueue();
		}
	}

	enterQueue = () => {
		debug( 'Send the signal to enter the queue...' );
		this.setState({
			inQueue: true,
			spot: this.state.queueSize + 1 // increment at add
		}, () => {
			const session = this.context;
			session.log({
				id: this.id,
				type: ENTER_QUEUE,
				value: this.state.questionText,
				noSave: false
			}, 'members' );
		});
	}

	leaveQueue = () => {
		const session = this.context;
		session.log({
			id: this.id,
			type: LEFT_QUEUE,
			value: this.state.spot
		}, 'members' );
	}

	renderChatButton = ( row ) => {
		const session = this.context;
		const chatID = row.original.name+'-'+session.user.name;
		return <ChatButton tooltip={this.props.t( 'queue-start-chat' )} for={chatID} />;
	}

	renderButtonRemovable = ( cellInfo ) => {
		return (
			<Tooltip placement="left" tooltip={this.props.t( 'mark-and-remove' )}>
				<Button variant="secondary" size="sm" onClick={() => {
					const session = this.context;
					session.log({
						id: this.id,
						type: LEFT_QUEUE,
						value: cellInfo.index + 1
					}, 'members' );
				}}>
					<i className="fas fa-check" />
				</Button>
			</Tooltip>
		);
	}

	/*
	* React component render method.
	*/
	render() {
		const session = this.context;
		let out;
		if ( this.props.show ) {
			if ( session.isOwner() ) {
				debug( 'User is an owner...' );
				out = <Panel className="queue-panel" tabIndex={0} role="button"
					header={this.props.t( 'queue' )} onHide={this.props.onHide} minimizable
				>
					{ this.state.arr.length === 0 ? <p>{this.props.t( 'no-questions' )}</p> :
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
								Header: this.props.t( 'name' ),
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
								Header: this.props.t( 'cohort' ),
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
								Header: this.props.t( 'question' ),
								id: 'qCol',
								accessor: 'question',
								width: 350,
								style: { 'white-space': 'unset' }
							},
							{
								Header: this.props.t( 'chat' ),
								Cell: this.renderChatButton
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
					out = <Draggable
						bounds="#Lesson" cancel=".queue-table"
						onEscape={this.handleEscape} resizable
						minWidth={300} minHeight={150}
					>
						{out}
					</Draggable>;
				}
				return out;
			}
			const question = this.state.questionText;
			const spot = this.state.spot;
			const size = this.state.queueSize;

			// Case: We are not an owner
			if ( this.state.inQueue ) {
				const chatID = 'Queue_'+session.user.name+'_'+this.state.spot;
				out = <Panel className="queue-panel" tabIndex={0} role="button"
					header={this.props.t( 'queue' )} onHide={this.props.onHide} minimizable >
					<p>
					<Trans i18nKey="queue-status" >
						Your question: <i>{{ question }}</i><br />
						You are currently at position <strong>{{ spot }}</strong> on the queue.<br />
						There are <strong>{{ size }}</strong> individual(s) in the queue.
					</Trans>
					</p>
					<ChatButton for={chatID} showTooltip={false} />
					<Button style={{ marginLeft: 10 }} size="sm" onClick={this.leaveQueue}>
						{this.props.t( 'remove-myself-from-queue' )}
					</Button>
				</Panel>;
				if ( this.props.draggable ) {
					out = <Draggable
						bounds="#Lesson"
						onEscape={this.handleEscape} resizable
						minWidth={300} minHeight={150}
					>
						{out}
					</Draggable>;
				}
				return out;
			}
			out = <Panel className="queue-panel" tabIndex={0} role="button" header={this.props.t( 'queue' )} onHide={this.props.onHide} minimizable >
				<p>{this.props.t( 'queue-prompt' )}</p>
				<FormGroup>
					<FormLabel>{this.props.t( 'question' )}</FormLabel>
					<FormControl type="text" id="queue_form"
						value={this.state.questionText}
						onChange={this.handleText}
						onKeyPress={this.handleKeyPress}
						width={500}
					/>
				</FormGroup>
				<Button
					disabled={this.state.questionText.length === 0}
					onClick={this.enterQueue}
				>
					{this.props.t( 'submit-question' )}
				</Button>
				<span style={{ marginLeft: 8 }}>{this.props.t( 'queue-size', { n: this.state.queueSize })}</span>
			</Panel>;
			if ( this.props.draggable ) {
				out = <Draggable
					bounds="#Lesson" cancel="#queue_form"
					onEscape={this.handleEscape}
					resizable
					minWidth={300} minHeight={150}
				>
					{out}
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
	onHide() {},
	onQueueSize() {},
	onNewQuestion() {}
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

export default withTranslation( 'queue' )( Queue );
