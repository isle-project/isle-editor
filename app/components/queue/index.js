// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import logger from 'debug';
import TextInput from 'components/input/text';
import Panel from 'components/panel';
import SessionContext from 'session/context.js';


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
					// we need to check who the user is
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
						var tmpSize = this.state.queueSize + 1;
						if ( this.state.isOwner ) {
							this.state.arr.push({
								user: action.name,
								question: action.value,
								spot: tmpSize
							});
							this.setState({
								arr: this.state.arr,
								queueSize: tmpSize
							});
						} else {
							this.setState({
								queueSize: tmpSize
							});
						}
					}
					else if ( action.type === 'LEFT_QUEUE' && this.state.spot ) {
						debug( 'Someone has been removed from the queue' );
						const val = Number( action.value );
						const newSize = this.state.queueSize - 1;
						if ( val < this.state.spot ) {
							this.setState({
								spot: this.state.spot - 1,
								queueSize: newSize
							});
						} else if ( val === this.state.spot ) {
							this.setState({
								spot: null,
								inQueue: false,
								questionText: '',
								queueSize: newSize
							});
						} else {
							this.setState({
								queueSize: newSize
							});
						}
					}
					else if ( action.type === 'SEND_QUEUE_SIZE' ) {
						const queueNum = Number( action.value );
						// console.log('Updated queue size to ' + queueNum);
						this.setState({
							queueSize: queueNum
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

	handleText = ( value ) => {
		this.setState({
			questionText: value
		});
	}

	enterQueue = () => {
		debug( 'Send the signal to enter the queue...' );
		this.setState({
			inQueue: true,
			spot: this.state.queueSize + 1 // increment at add
		}, () => {
			const session = this.context;
			if ( session ) {
				session.log({
					id: this.props.id,
					type: 'ENTER_QUEUE',
					value: this.state.questionText,
					noSave: false
				}, 'members' );
			}
		});
	}

	renderButtonRemovable = ( cellInfo ) => {
		return (
			<Button onClick={() => {
				this.state.arr.splice(cellInfo.index, 1);
				this.setState({
					arr: this.state.arr
				}, () => {
					const session = this.context;
					if ( session ) {
						session.log({
							id: this.props.id,
							type: 'LEFT_QUEUE',
							value: cellInfo.index + 1,
						}, 'members' );
					}
				});
			}}block>
			Remove from queue</Button>
		);
	}
	/*
	* React component render method.
	*/
	render() {
		if ( this.state.isOwner ) {
			debug( 'I am an owner' );
			return ( <div>
				{ this.state.arr.length === 0 ? <h3 className="center">There are no users in the queue</h3> :
				<ReactTable
					data={this.state.arr}
					columns={[
						{
							'Header': 'Place on Queue',
							'id': 'queueSpot',
							'accessor': 'spot'
						},
						{
							'Header': 'Name',
							'id': 'nameCol',
							'accessor': 'user'
						},
						{
							'Header': 'Question',
							'id': 'qCol',
							'accessor': 'question'
						},
						{
							Header: 'Remove',
							accessor: 'remove',
							Cell: this.renderButtonRemovable,
							filterable: false
						}
					]}
				/> } </div> );
		}
		// Case: We are not an owner
		if ( this.state.inQueue ) {
			return (
				<h3 className="center">You are currently {this.state.spot} on the queue. There are {this.state.queueSize} individual(s) in the queue.</h3>
			);
		}
		return (
				<Panel>
					<h3 className="center">There are {this.state.queueSize} individual(s) in the queue. Add yourself below!</h3>
					<div>
						<TextInput
							onChange={this.handleText}
							legend='What is your question?'
							inline={false}
							width={500}
							>
						</TextInput>
						<Button onClick={this.enterQueue}>
							Add to Queue
						</Button>
					</div>
				</Panel>
		);
	}
}


// PROPERTIES //

Queue.defaultProps = {
	message: 'Queue is currently closed.'
};

Queue.propTypes = {
	message: PropTypes.string
};

Queue.contextType = SessionContext;


// EXPORTS //

export default Queue;
