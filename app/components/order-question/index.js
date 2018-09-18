// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import DraggableList from 'components/draggable-list';
import HintButton from 'components/hint-button';
import InstructorBar from 'components/instructor-bar';
import ChatButton from 'components/chat-button';
import FeedbackButtons from 'components/feedback';
import './order-question.css';


// VARIABLES //

const debug = logger( 'isle:order-question' );


// MAIN //

/**
* An order question component that asks student to bring a collection of elements into the correct order.
*
* @property {string} question - question for which the student has to bring the available `options` into the correct order
* @property {Array} options - an array of objects with `id` and `text` keys which the student has to bring into the correct ordering, which is assumed to be the supplied order
* @property {boolean} provideFeedback - controls whether to show a notification displaying whether the submitted answer is correct or not
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {string} failureMsg - message to be displayed when student submits a wrong answer
* @property {string} successMsg - message to be displayed when student submits the correct answer
* @property {Function} onChange - callback  which is triggered after dragging an element; has two parameters: a `boolean` indicating whether the elements were placed in the correct order and and `array` with the current ordering
* @property {Function} onSubmit - callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order
*/
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

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'ORDER_QUESTION_OPEN_HINT',
				value: idx
			});
		}
	}

	handleSubmit = () => {
		const { session } = this.context;
		if ( this.props.provideFeedback ) {
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
		} else {
			session.addNotification({
				title: 'Submitted',
				message: 'You have successfully submitted your answer',
				level: 'info',
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
				<Panel.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
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
				{ this.props.id && this.props.feedback ? <FeedbackButtons
					vertical
					id={this.props.id+'_feedback'}
				/> : null }
			</Panel>
		);
	}
}


// PROPERTIES //

OrderQuestion.defaultProps = {
	question: '',
	provideFeedback: true,
	hints: [],
	hintPlacement: 'bottom',
	feedback: false,
	chat: false,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct ordering!',
	onChange() {},
	onSubmit() {}
};

OrderQuestion.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array.isRequired,
	provideFeedback: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
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
