// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, ListGroup, ListGroupItem, Modal, Panel, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Gate from 'components/gate';
import TextArea from 'components/text-area';


// MAIN //

class InstructorBar extends Component {

	constructor() {
		super();

		this.state = {
			actions: [],
			receivedFeedbacks: [],
			actionsAreOpen: false,
			feedbackIsOpen: false,
			feedback: ''
		};
	}

	onFeedback = ( text ) => {
		this.setState({
			feedback: text
		});
	}

	toggleFeedback = () => {
		this.setState({
			feedbackIsOpen: !this.state.feedbackIsOpen
		});
	}

	sendFeedback = () => {
		const { session } = this.context;
		session.log({
			id: this.props.id,
			type: 'COMPONENT_FEEDBACK',
			value: this.state.feedback
		}, 'members' );
	}

	toggleActions = () => {
		if ( !this.state.showActions ) {
			this.addSessionActions();
		}
		this.setState({
			showActions: !this.state.showActions,
		});
	}

	addSessionActions = () => {
		const { session } = this.context;
		const actions = session.socketActions;
		const filtered = [];
		for ( let i = 0; i < actions.length; i++ ) {
			if ( actions[ i ].id === this.props.id ) {
				filtered.push( actions[ i ]);
			}
		}
		this.setState({
			actions: filtered
		});
	}

	componentDidMount() {
		const { session } = this.context;

		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === 'member_action' ) {
				if ( action.type === 'COMPONENT_FEEDBACK' ) {
					if ( this.props.id === action.id  ) {
						const receivedFeedbacks = this.state.receivedFeedbacks.slice();
						console.log( action );
						receivedFeedbacks.push( action.value );
						this.setState({
							receivedFeedbacks
						});
					}
				}
				this.forceUpdate();
			}
			else if ( type === 'retrieved_user_actions' ) {
				this.addSessionActions();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div>
				<Gate user>
					{ this.state.receivedFeedbacks.length > 0 ? <Panel header="Feedback">
						<ListGroup fill style={{ marginLeft: 0 }}>
							{this.state.receivedFeedbacks.map( elem =>
								<ListGroupItem style={{ padding: '2px 5px' }}>
									<p>{elem}</p>
								</ListGroupItem>
							)}
						</ListGroup>
					</Panel> : null }
				</Gate>
				<Gate owner>
					<div>
						<label>Component ID:</label>
						<span style={{ marginLeft: '5px' }}>{this.props.id}</span>
						<Modal
							show={this.state.showActions}
							onHide={this.toggleActions}
							dialogClassName="fullscreen-modal"
						>
							<Modal.Header closeButton>
								<Modal.Title>Actions</Modal.Title>
							</Modal.Header>
							<Modal.Body style={{ height: 0.80 * window.innerHeight, overflowY: 'scroll' }}>
								{ this.state.actions.length > 0 ?
									<ListGroup fill style={{ marginLeft: 0 }}>
										{this.state.actions.map( elem =>
											<ListGroupItem>
												<span style={{ textAlign: 'left' }}>
													<b>{elem.name}:</b> {elem.value}
												</span>
											</ListGroupItem>
										)}
									</ListGroup>
									:
									<Well>
										<h2>The data set is empty.</h2>
									</Well>
								}
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.toggleActions}>Close</Button>
							</Modal.Footer>
						</Modal>
					</div>
					<ButtonGroup bsSize="small" >
						<Button onClick={this.toggleFeedback} >Feedback</Button>
						<Button onClick={this.toggleActions} >Actions</Button>
					</ButtonGroup>
					<Collapse in={this.state.feedbackIsOpen}>
						<div>
							<TextArea onChange={this.onFeedback} />
							<Button bsSize="small" onClick={this.sendFeedback} >Send Feedback to all</Button>
						</div>
					</Collapse>
				</Gate>
			</div>
		);
	}
}


// PROPERTY TYPES //

InstructorBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorBar;
