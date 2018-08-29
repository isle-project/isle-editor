// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import DraggableList from 'components/draggable-list';
import HintButton from 'components/hint-button';
import InstructorBar from 'components/instructor-bar';
import ChatButton from 'components/chat-button';
import './order-question.css';


// MAIN //

class OrderQuestion extends Component {
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			correct: false,
			submitted: false
		};
	}

	handleChange = ( cards ) => {
		let correct = true;
		for ( let i = 0; i < cards.length; i++ ) {
			if ( cards[ i ].id !== i ) {
				correct = false;
				break;
			}
		}
		this.props.onChange( correct, cards );
		this.setState({
			correct
		});
	}

	handleSubmit = () => {
		const { session } = this.context;
		if ( this.state.correct ) {
			session.addNotification({
				title: 'Correct',
				message: this.props.successMsg,
				level: 'success',
				position: 'tr'
			});
		} else {
			session.addNotification({
				title: 'Incorrect',
				message: this.props.failureMsg,
				level: 'error',
				position: 'tr'
			});
		}
		this.props.onSubmit( this.state.correct );
		this.setState({
			submitted: true
		});
	}

	render() {
		const nHints = this.props.hints.length;
		return (
			<Panel className="order-question">
				<Panel.Body>
					<label>{this.props.question}</label>
					<DraggableList shuffle data={this.props.options} onChange={this.handleChange} />
					<div className="order-question-toolbar">
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						<Button bsStyle="primary" bsSize="sm" onClick={this.handleSubmit}>
							{ this.state.submitted ? 'Resubmit' : 'Submit' }
						</Button>
						{
							this.props.chat && this.props.id ?
								<ChatButton for={this.props.id} /> : null
						}
					</div>
					<InstructorBar id={this.props.id} dataType="text" />
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

OrderQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'bottom',
	chat: false,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct ordering!',
	onChange() {},
	onSubmit() {}
};


// PROPERTY TYPES //

OrderQuestion.propDescriptions = {
	question: 'question for which the student has to bring the available `options` into the correct order',
	options: 'an array of objects with `id` and `text` keys which the student has to bring into the correct ordering, which is assumed to be the supplied order',
	hints: 'hints providing guidance on how to answer the question',
	hintPlacement: 'placement of the hints (either `top`, `left`, `right`, or `bottom`)',
	chat: 'controls whether the element should have an integrated chat',
	failureMsg: 'message to be displayed when student submits a wrong answer',
	successMsg: 'message to be displayed when student submits the correct answer',
	onChange: 'callback  which is triggered after dragging an element; has two parameters: a `boolean` indicating whether the elements were placed in the correct order and and `array` with the current ordering',
	onSubmit: 'callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order'
};

OrderQuestion.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array.isRequired,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	chat: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

OrderQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default OrderQuestion;
