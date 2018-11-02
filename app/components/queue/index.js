// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ReactTable from 'react-table';
import logger from 'debug';
import TextInput from 'components/input/text';
import Panel from 'components/panel';
import Revealer from 'components/revealer';
import SessionContext from 'session/context.js';

import DataTable from 'components/data-table';


// VARIABLES //

const debug = logger( 'isle:queue' );


// MAIN //

class Queue extends Component {
	constructor( props, context ) {
		super( props );
		debug( 'Invoking constructor of Queue...' );

		// hide the actual seeing of things in the revealer component
		this.state = {
			queueSize: 0,
			arr: [],
			inQueue: false, // if a user is already in the queue
			spot: 0,
			active: false,
			questionText: '',
			isOwner: false
		};
		// type can be Homework, Conceptual, Exam, Other 
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			debug('we have a session');
			this.unsubscribe = session.subscribe( ( type, action ) => {
				debug( type );

				if ( type === 'RECEIVED_USER_RIGHTS' ) {
					// we need to check who the user is
					this.checkAuthorization();
				}
				if ( action && action.id === this.props.id ) {
					if ( action.type === 'ENTER_QUEUE' ) {
						debug('we have someone entering the queue');
						this.state.arr.push({
							user: action.name,
							question: action.value
						});
						this.setState({
							arr: this.state.arr,
							queueSize: this.state.queueSize + 1
						});
					} else if ( type === 'user_joined' ) {
						debug('user joined!');
						// when new user joins make sure they have everything
						if ( this.state.active ) {
							this.setState({
								queueSize: this.state.queueSize,
								arr: this.state.arr,
								inQueue: false
							});
						}
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
		debug( 'Entering queue' );
		// send the signal to enter the queue
		this.setState({
			inQueue: true,
			spot: this.state.arr.length + 1 // increment at add
		}, () => {
			if ( this.context.session ) {
				this.context.session.log({
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
				}); // todo: callback
			}} block />
		);
	}
	/*
	* React component render method.
	*/
	render() {
		// first render by owner or not
		if ( this.state.isOwner ) {
			debug( 'I am an owner' );
			return ( <Revealer id="queue_revealer">
				{ this.state.arr.length === 0 ? <h3 className="center">There are no users in the queue</h3> :
				<ReactTable
					data={this.state.arr}
					columns={[
						{
							'Header': 'Place on Queue',
							'id': 'queueSpot',
							'accessor': ( d, index ) => {
								console.log(d);
								console.log(index);
								return 'frank';
							}
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
				/> }
			</Revealer> );
		}
		// we are not an owner
		if ( this.state.inQueue ) {
			debug('inQueue ')
			return (
				<h3 className="center">You are currently {this.state.spot} on the queue. There are {this.state.queueSize} individuals in the queue.</h3>
			);
		}
		return (
				<Revealer id=`${his.props.id} +`\_REVEALE`);
			<Panel>
				<h3 className="center">There are {this.state.queueSize} individuals in the queue. Add yourself below!</h3>
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
			</Panel>);
	}
}

// DEFAULT PROPERTIES //

Queue.defaultProps = {
	
};


// PROPERTY TYPES //

Queue.propDescriptions = {
	
};

Queue.propTypes = {
	
};

Queue.contextTypes = {
	session: PropTypes.object,
	currentRole: PropTypes.string
};

Queue.contextType = SessionContext;


// EXPORTS //

export default Queue;
