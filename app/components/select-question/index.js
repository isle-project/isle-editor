// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/response-visualizer';
import ChatButton from 'components/chat-button';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import './select-question.css';


// MAIN //

/**
* A select question component.
*
* @property {string} question - question for which the student has to select one of the available answer options
* @property {Array} options - available answer options from which the student can select
* @property {string} solution - question solution (must be equal to one of the answer options)
* @property {string} defaultValue - preselected answer option
* @property {boolean} inline - controls whether the component is rendered inline or not
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {string} failureMsg - message to be displayed when student selects a wrong answer
* @property {string} successMsg - message to be displayed when student selects the correct answer
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after the submit action
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly anwered (if applicable, `null` otherwise) and the supplied answer as the second parameter
 */
class SelectQuestion extends Component {
	/**
	* Create a select question.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: props.defaultValue,
			answerState: null
		};
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value,
			answerState: null
		}, () => {
			this.props.onChange( value );
		});
	}

	handleSubmit = () => {
		const session = this.context;
		let correct = this.props.solution === this.state.value;
		if ( this.props.provideFeedback ) {
			if ( correct ) {
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
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'info',
				position: 'tr'
			});
		}
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'SELECT_QUESTION_SUBMISSION',
				value: this.state.value
			});
		}
		this.props.onSubmit( this.state.value, correct );
		this.setState({
			answerState: correct ? 'success' : 'error',
			submitted: true
		});
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		if ( this.props.inline ) {
			return (
				<FormGroup
					controlId="select-question-form-group"
					validationState={this.state.answerState}
					style={{
						width: 'min-content',
						display: 'inline',
						...this.props.style
					}}
				>
					<InputGroup>
						<FormControl
							value={this.state.value}
							defaultValue={this.props.defaultValue}
							as="select"
							placeholder="select"
							onChange={this.handleChange}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
						<InputGroup.Button>
							<Button>Submit</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			);
		}
		return (
			<Card className="select-question" style={this.props.style} body >
				<Form>
					<FormGroup controlId="formControlsSelect" validationState={this.state.answerState}>
						{ this.props.question ?
							<label>{this.props.question}</label> :
							null
						}
						<FormControl
							value={this.state.value}
							defaultValue={this.props.defaultValue}
							as="select"
							placeholder="select"
							onChange={this.handleChange}

						>
							{this.props.options.map( ( e, idx ) => {
								return <option className="select-question-option" key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
					</FormGroup>
				</Form>
				<div className="select-question-toolbar">
					<Button className="submit-button" variant="primary" size="sm" onClick={this.handleSubmit}>
						{ this.state.submitted ? 'Resubmit' : 'Submit' }
					</Button>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat && this.props.id ?
							<ChatButton for={this.props.id} /> : null
					}
				</div>
				<ResponseVisualizer
					id={this.props.id}
					data={{
						type: 'text'
					}}
					info="SELECT_QUESTION_SUBMISSION"
				/>
				{ this.props.id && this.props.feedback ? <FeedbackButtons
					id={this.props.id+'_feedback'}
				/> : null }
			</Card>
		);
	}
}


// PROPERTIES //

SelectQuestion.defaultProps = {
	question: '',
	defaultValue: '',
	inline: false,
	hints: [],
	hintPlacement: 'bottom',
	feedback: false,
	chat: false,
	provideFeedback: true,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct answer!',
	style: {},
	onChange() {},
	onSubmit() {}
};

SelectQuestion.propTypes = {
	question: PropTypes.string,
	options: PropTypes.array.isRequired,
	solution: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	provideFeedback: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

SelectQuestion.contextType = SessionContext;


// EXPORTS //

export default SelectQuestion;
