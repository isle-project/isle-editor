// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, ListGroup, ListGroupItem, Modal, Panel, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';
import isArray from '@stdlib/assert/is-array';
import Gate from 'components/gate';
import DataTable from 'components/data-table';
import TextArea from 'components/text-area';
import DatabaseMetrics from 'components/metrics/db';


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
		this.setState({
			showActions: !this.state.showActions,
		});
	}

	onData = ( data ) => {
		if ( data ) {
			data = JSON.parse( data );
			if ( isArray( data ) ) {
				data = data.map( x => x.data );
				this.setState({
					actions: data
				});
			}
		}
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
								<ListGroupItem>
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

							<Modal.Footer>
								<DatabaseMetrics
									id={this.props.id}
									onData={this.onData}
								/>
								{ this.state.actions.length > 0 ?
									<DataTable data={this.state.actions} /> :
									<Well>
										<h2>The data set is empty.</h2>
									</Well>
								}
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
