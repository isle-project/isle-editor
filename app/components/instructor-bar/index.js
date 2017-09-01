// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Gate from 'components/gate';
import TextArea from 'components/text-area';


// MAIN //

class InstructorBar extends Component {

	constructor() {
		super();

		this.state = {
			receivedFeedbacks: [],
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
					</div>
					<ButtonGroup bsSize="small" >
						<Button onClick={this.toggleFeedback} >Feedback</Button>
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
