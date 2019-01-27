// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/Button';
import ReactTable from 'react-table';
import Draggable from 'react-draggable';
import FormControl from 'react-bootstrap/FormControl';
import 'react-table/react-table.css';
import logger from 'debug';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';
import './queue.css';


// VARIABLES //

// localStorage.setItem("debug", "isle:queue");
const debug = logger( 'isle:queue' );


// MAIN //

class Queue extends Component {
	constructor( props, context ) {
		super( props );
		debug( 'Invoking constructor...' );

		// hide the actual seeing of things in the revealer component
		this.state = {
			arr: [],
			inQueue: false, // if a user is already in the queue
			spot: null,
			questionText: '',
			isOwner: false,
			queueSize: 0
		};
		// type can be Homework, Conceptual, Exam, Other
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			debug( 'We have a session, subscribe the component...' );
			this.unsubscribe = session.subscribe( ( type, action ) => {
				debug( type );

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
								user: action.name,
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
							const newArr = copy( this.state.arr );
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
		if (
			newState.isOwner !== this.state.isOwner
		) {
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
			<Button onClick={() => {
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'LEFT_QUEUE',
					value: cellInfo.index + 1
				}, 'members' );
			}}>
			X</Button>
		);
	}

	renderHeader() {
		return (
			<span>
				Queue
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
		if ( this.props.show ) {
			if ( this.state.isOwner ) {
				debug( 'User is an owner...' );
				return ( <Draggable>
					<div className="outer-queue">
						<Panel header={this.renderHeader()}>
						{ this.state.arr.length === 0 ? <h3 className="center">There are no users in the queue</h3> :
						<ReactTable
							showPageSizeOptions={false}
							data={this.state.arr}
							resizable={false}
							sortable={false}
							columns={[
								{
									'Header': ' # ',
									'id': 'queueSpot',
									'accessor': 'spot',
									'width': 36
								},
								{
									'Header': 'Name',
									'id': 'nameCol',
									'accessor': 'user',
									'width': 100
								},
								{
									'Header': 'Question',
									'id': 'qCol',
									'accessor': 'question',
									width: 350,
									style: { 'white-space': 'unset' }
								},
								{
									Header: ' X ',
									accessor: 'remove',
									Cell: this.renderButtonRemovable,
									filterable: false,
									width: 45
								}
							]}
							pageSize={8}
						/> }
						</Panel>
					</div>
				</Draggable> );
			}
			// Case: We are not an owner
			if ( this.state.inQueue ) {
				return (
					<Draggable>
						<div className="outer-queue">
							<Panel header={this.renderHeader()}>
								<h3>Your question: {this.state.questionText}</h3>
								<h3>You are currently {this.state.spot} on the queue.</h3>
								<h3>There are {this.state.queueSize} individual(s) in the queue.</h3>
								<Button onClick={this.leaveQueue}>
									Remove yourself from queue
								</Button>
							</Panel>
						</div>
					</Draggable>
				);
			}
			return (
				<Draggable cancel="#queue_form">
					<div className="outer-queue">
						<Panel header={this.renderHeader()}>
							<h3 className="center">There are {this.state.queueSize} individual(s) in the queue. Add yourself below!</h3>
							<div>
								<FormControl type="text" id="queue_form"
									value={this.state.questionText}
									onChange={this.handleText}
									inline={false}
									width={500}
								/>
								<Button onClick={this.enterQueue}>
									Add to Queue
								</Button>
							</div>
						</Panel>
					</div>
				</Draggable>
			);
		}
		return null;
	}
}


// PROPERTIES //

Queue.defaultProps = {
	show: true,
	onHide: noop
};

Queue.propTypes = {
	show: PropTypes.bool,
	onHide: PropTypes.func
};

Queue.contextType = SessionContext;


// EXPORTS //

export default Queue;
