// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
import indexOf from '@stdlib/utils/index-of';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import TimedButton from '@isle-project/components/timed-button';
import HintButton from '@isle-project/components/hint-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import ChatButton from '@isle-project/components/internal/chat-button';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import './select_question.css';


// MAIN //

/**
* A select question component.
*
* @property {(string|node)} question - question for which the student has to select one of the available answer options
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
* @property {number} points - maximum number of points awarded in grading
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after the submit action
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter
 */
class SelectQuestion extends Component {
	/**
	* Create a select question.
	*
	* @param {Object} props - component properties
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: props.options[ props.preselected ],
			answerState: 'secondary'
		};
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value,
			answerState: 'secondary'
		}, () => {
			this.props.onChange( value );
		});
	};

	handleSubmit = () => {
		const session = this.context;
		let correct;
		let answerState;
		if ( !isUndefinedOrNull( this.props.solution ) && this.props.provideFeedback ) {
			const value = this.state.value;
			correct = this.props.solution === indexOf( this.props.options.map( String ), value );
			answerState = correct ? 'success' : 'danger';
			if ( correct ) {
				session.addNotification({
					title: this.props.t('correct'),
					message: this.props.successMsg,
					level: 'success'
				});
			} else {
				session.addNotification({
					title: this.props.t('incorrect'),
					message: this.props.failureMsg,
					level: 'error'
				});
			}
		} else {
			answerState = 'info';
			session.addNotification({
				title: this.state.submitted ? this.props.t('answer-resubmitted') : this.props.t('answer-submitted'),
				message: this.state.submitted ?
					this.props.t('resubmit-message') :
					this.props.t('submit-message'),
				level: 'info'
			});
		}
		this.props.logAction( SUBMISSION, this.state.value );
		this.props.onSubmit( this.state.value, correct );
		this.setState({
			answerState,
			submitted: true
		});
	};

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		const isValid = this.state.answerState === 'success';
		const isInvalid = this.state.answerState === 'danger';
		const responseVisualizer = <ResponseVisualizer
			id={this.props.id}
			info="SELECT_QUESTION_SUBMISSION"
			data={{
				type: 'factor',
				levels: this.props.options,
				question: this.props.question,
				solution: this.props.solution
			}}
			inline={this.props.inline}
			points={this.props.points}
		/>;
		if ( this.props.inline ) {
			return (
				<span
					id={this.props.id}
					style={{
						...this.props.style
					}}
				>
					<span style={{ display: 'inherit' }}>
						<FormControl
							value={this.state.value}
							as="select"
							placeholder="select"
							onChange={this.handleChange}
							style={{ display: 'inline', width: 'max-content' }}
							isInvalid={isInvalid}
							isValid={isValid}
							disabled={isValid}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
						<Button aria-label={this.props.t('submit')} size="small" variant={`outline-${this.state.answerState}`} disabled={isValid} style={{ display: 'inline', marginTop: -3 }} onClick={this.handleSubmit} >
							<i className="fa fa-check-square"></i>
						</Button>
					</span>
					{responseVisualizer}
				</span>
			);
		}
		return (
			<Card id={this.props.id} className="select-question" style={this.props.style} body >
				<Form>
					<FormGroup controlId={`${this.props.id}-form`}>
						{ this.props.question ?
							<label>{this.props.question}</label> :
							null
						}
						<FormControl
							value={this.state.value}
							as="select"
							placeholder="select"
							onChange={this.handleChange}
							isInvalid={this.state.answerState === 'danger'}
							isValid={isValid}
							disabled={isValid}
						>
							{this.props.options.map( ( e, idx ) => {
								return <option className="select-question-option" key={idx} value={e}>{e}</option>;
							})}
						</FormControl>
					</FormGroup>
				</Form>
				<div className="select-question-toolbar">
					<TimedButton className="submit-button" variant="primary" disabled={isValid} size="sm" onClick={this.handleSubmit}>
						{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
					</TimedButton>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ? <ChatButton for={this.props.id} /> : null
					}
				</div>
				{responseVisualizer}
				{ this.props.feedback ? <FeedbackButtons
					id={this.props.id+'_feedback'}
				/> : null }
				<GradeFeedbackRenderer for={this.props.id} points={this.props.points} />
			</Card>
		);
	}
}


// PROPERTIES //

SelectQuestion.defaultProps = {
	question: '',
	solution: null,
	preselected: 0,
	inline: false,
	hints: [],
	hintPlacement: 'top',
	feedback: true,
	chat: false,
	provideFeedback: true,
	failureMsg: 'Not quite, try again!',
	successMsg: 'That\'s the correct answer!',
	points: 10,
	style: {},
	onChange() {},
	onSubmit() {}
};

SelectQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	options: PropTypes.array.isRequired,
	solution: PropTypes.number,
	preselected: PropTypes.number,
	inline: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	provideFeedback: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	points: PropTypes.number,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

SelectQuestion.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'SELECT_QUESTION' )( withTranslation( 'questions/select' )( withPropCheck( SelectQuestion ) ) );
