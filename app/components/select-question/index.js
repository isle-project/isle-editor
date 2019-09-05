// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import indexOf from '@stdlib/utils/index-of';
import TimedButton from 'components/timed-button';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/response-visualizer';
import ChatButton from 'components/chat-button';
import FeedbackButtons from 'components/feedback';
import generateUID from 'utils/uid';
import SessionContext from 'session/context.js';
import { SELECT_QUESTION_SUBMISSION } from 'constants/actions.js';
import './select-question.css';


// VARIABLES //

const uid = generateUID( 'select-question' );


// MAIN //

/**
* A select question component.
*
* @property {string} question - question for which the student has to select one of the available answer options
* @property {Array} options - available answer options from which the student can select
* @property {integer} solution - index of solution element in `options`
* @property {integer} preselected - index of preselected answer option
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
	* @param {Object} props - component properties
	*/
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		// Initialize state variables...
		this.state = {
			value: props.options[ props.preselected ],
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
		let correct = this.props.solution === indexOf( this.props.options, this.state.value );
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
		session.log({
			id: this.id,
			type: SELECT_QUESTION_SUBMISSION,
			value: this.state.value
		});
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
				<span
					style={{
						...this.props.style
					}}
				>
					<InputGroup style={{ display: 'inherit' }}>
						<FormControl
							value={this.state.value}
							defaultValue={this.props.options[ this.props.preselected ]}
							as="select"
							placeholder="select"
							onChange={this.handleChange}
							style={{ display: 'inline', width: 'max-content' }}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
						<Button size="small" variant="outline-secondary" style={{ display: 'inline', marginTop: -3 }} onClick={this.handleSubmit} >
							<i className="fa fa-check-square"></i>
						</Button>
					</InputGroup>
				</span>
			);
		}
		return (
			<Card className="select-question" style={this.props.style} body >
				<Form>
					<FormGroup controlId="formControlsSelect">
						{ this.props.question ?
							<label>{this.props.question}</label> :
							null
						}
						<FormControl
							value={this.state.value}
							defaultValue={this.props.options[ this.props.preselected ]}
							as="select"
							placeholder="select"
							onChange={this.handleChange}
							isInvalid={this.state.answerState === 'error'}
							isValid={this.state.answerState === 'success'}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option className="select-question-option" key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
					</FormGroup>
				</Form>
				<div className="select-question-toolbar">
					<TimedButton className="submit-button" variant="primary" size="sm" onClick={this.handleSubmit}>
						{ this.state.submitted ? 'Resubmit' : 'Submit' }
					</TimedButton>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ? <ChatButton for={this.id} /> : null
					}
				</div>
				<ResponseVisualizer
					id={this.id}
					info="SELECT_QUESTION_SUBMISSION"
					data={{
						type: 'factor',
						levels: this.props.options
					}}
				/>
				{ this.props.feedback ? <FeedbackButtons
					id={this.id+'_feedback'}
				/> : null }
			</Card>
		);
	}
}


// PROPERTIES //

SelectQuestion.defaultProps = {
	question: '',
	preselected: 0,
	inline: false,
	hints: [],
	hintPlacement: 'top',
	feedback: true,
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
	solution: PropTypes.number.isRequired,
	preselected: PropTypes.number,
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
