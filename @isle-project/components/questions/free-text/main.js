// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import logger from 'debug';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import generateUID from '@isle-project/utils/uid';
import Panel from '@isle-project/components/panel';
import ChatButton from '@isle-project/components/internal/chat-button';
import TimedButton from '@isle-project/components/timed-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import SolutionButton from '@isle-project/components/solution-button';
import HintButton from '@isle-project/components/hint-button';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import getLastAction from '@isle-project/utils/get-last-action';
import beforeUnload from '@isle-project/utils/before-unload';
import { FREE_TEXT_QUESTION_SUBMIT_ANSWER, FREE_TEXT_QUESTION_DISPLAY_SOLUTION, FREE_TEXT_QUESTION_OPEN_HINT } from '@isle-project/constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './free_text_question.css';


// VARIABLES //

const uid = generateUID( 'free-text-question' );
const debug = logger( 'isle:free-text-question' );


// MAIN //

/**
* An ISLE component for questions where answers by students should be supplied in the form of free text.
*
* @property {(string|Node)} question - the question displayed at the top of the free text question component
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {string} solution - a model answer to the problem
* @property {boolean} instantSolution - whether one can toggle the display of the model answer immediately
* @property {number} rows - number of rows of the text field for students to type their answers
* @property {boolean} chat - controls whether to enable group chat should for the question
* @property {boolean} resizable - controls whether the text area should be resizable
* @property {string} placeholder - placeholder text displayed before user has entered any text
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {number} maxlength - maximum allowed number of characters
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked every time the text area value changes; receives the current text as its sole argument
* @property {Function} onSubmit - callback invoked when user submits an answer; receives the submitted text as its sole argument
*/
class FreeTextQuestion extends Component {
	/**
	* Create a free-form question with a text input field.
	*
	* @param {Object} props
	*/
	constructor( props, context ) {
		super( props );
		debug( 'Invoking constructor of FreeTextQuestion...' );

		const actions = context.currentUserActions;
		this.id = props.id || uid( props );
		const value = getLastAction( actions, this.id, FREE_TEXT_QUESTION_SUBMIT_ANSWER );

		// Initialize state variables...
		this.state = {
			exhaustedHints: props.hints.length === 0,
			value: isString( value ) ? value : '',
			solutionDisplayed: false,
			submitted: isString( value ),
			placeholder: props.placeholder,
			solution: props.solution,
			question: props.question
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.placeholder !== prevState.placeholder ||
			nextProps.solution !== prevState.solution ||
			nextProps.question !== prevState.question
		) {
			return {
				value: '',
				solutionDisplayed: false,
				submitted: false,
				placeholder: nextProps.placeholder,
				solution: nextProps.solution,
				question: nextProps.question
			};
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				this.setToLastAction();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes
	* `onChange` callback with the new text as its first argument
	*/
	handleChange = ( event ) => {
		const newValue = event.target.value;
		this.setState({
			value: newValue
		});
		if ( !this.beforeUnload ) {
			window.addEventListener( 'beforeunload', beforeUnload );
			this.beforeUnload = true;
		}
		this.props.onChange( newValue );
	};

	appendText = ( text ) => {
		this.setState({
			value: this.state.value + ' ' + text
		});
	};

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.state.submitted ) {
			session.addNotification({
				title: this.props.t('answer-resubmitted'),
				message: this.props.resubmissionMsg,
				level: 'success'
			});
		} else {
			let submissionMsg = this.props.submissionMsg;
			if ( submissionMsg === '' ) {
				submissionMsg = this.props.solution && this.props.provideFeedback ?
					this.props.t('submission-message-solution') :
					this.props.t('submission-message-no-solution');
			}
			session.addNotification({
				title: this.props.t('answer-submitted'),
				message: submissionMsg,
				level: 'success'
			});
		}
	};

	submitHandler = ( event ) => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.props.onSubmit( this.state.value );
		this.setState({
			submitted: true
		});
		window.removeEventListener( 'beforeunload', beforeUnload );
		this.beforeUnload = false;
		session.log({
			id: this.id,
			type: FREE_TEXT_QUESTION_SUBMIT_ANSWER,
			value: this.state.value
		});
	};

	handleSolutionClick = () => {
		const session = this.context;
		if ( this.state.solutionDisplayed ) {
			this.setState({
				solutionDisplayed: false,
				value: this.state.studentAnswer
			});
		} else {
			session.log({
				id: this.id,
				type: FREE_TEXT_QUESTION_DISPLAY_SOLUTION,
				value: null
			});
			this.setState({
				solutionDisplayed: true,
				studentAnswer: this.state.value,
				value: this.props.solution
			});
		}
	};

	setToLastAction() {
		const session = this.context;
		const actions = session.currentUserActions;
		const value = getLastAction( actions, this.id, FREE_TEXT_QUESTION_SUBMIT_ANSWER );
		if ( isString( value ) && value !== this.state.value ) {
			this.setState({
				value: value,
				submitted: true
			});
		}
	}

	triggerHint() {
		const node = ReactDOM.findDOMNode( this.hintButton );
		node.click();
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: FREE_TEXT_QUESTION_OPEN_HINT,
			value: idx
		});
	};

	renderSubmitButton() {
		const session = this.context;
		if ( this.props.until && session.startTime > this.props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{this.props.t('question-closed')}</span>;
		}
		if ( this.state.value.length >= 1 && !this.state.solutionDisplayed ) {
			return ( <TimedButton
				className="submit-button"
				variant="primary"
				size="sm"
				onClick={this.submitHandler}
				duration={5}
				style={{ marginLeft: '4px' }}
			>{ !this.state.submitted ? this.props.t('submit') : this.props.t('resubmit') }</TimedButton> );
		}
		return (
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={<Tooltip id="submitTooltip">
					{this.props.t('submit-tooltip')}
				</Tooltip>}
				rootClose={true}
			>
				<div style={{ display: 'inline-block' }}>
					<Button
						className="submit-button"
						variant="primary"
						size="sm"
						style={{
							pointerEvents: 'none',
							marginLeft: '4px'
						}}
						disabled
					>{this.props.t('submit')}</Button>
				</div>
			</OverlayTrigger>
		);
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		const solutionButton = <SolutionButton
			disabled={!this.props.instantSolution && (!this.state.submitted || !this.state.exhaustedHints)}
			onClick={this.handleSolutionClick}
			hasHints={this.props.hints.length > 0}
		/>;
		return (
			<Panel
				id={this.id} className={`free-text-question ${this.props.className}`}
				style={this.props.style} fullscreen
				bodyStyle={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }}
			>
				{ this.props.question ? <div className="title">{this.props.question}</div> : null }
				<FormGroup>
					<label htmlFor={`${this.id}-textarea`} >{this.state.solutionDisplayed ? this.props.t('solution') : this.props.t('your-answer') }</label>
					{!this.state.solutionDisplayed ?
						<FormControl
							id={`${this.id}-textarea`}
							as="textarea"
							placeholder={this.props.placeholder || this.props.t('enter-your-answer-here')}
							onChange={this.handleChange}
							style={{
								resize: this.props.resizable ? 'both' : 'none'
							}}
							maxLength={this.props.maxlength}
							rows={this.props.rows}
							value={this.state.value}
							disabled={this.state.solutionDisplayed}
						/> :
						<div className="free-text-question-solution-wrapper" style={{
							height: `calc(${this.props.rows*1.5}rem + 14px)`
						}}>
							{this.state.value}
						</div>
					}
					</FormGroup>
				<ResponseVisualizer
					buttonLabel={this.props.t('answers')} id={this.id}
					info={FREE_TEXT_QUESTION_SUBMIT_ANSWER}
					data={{
						question: this.props.question,
						solution: this.props.solution
					}}
					style={{ float: 'left' }}
					points={this.props.points}
				/>
				<ButtonToolbar className="free-text-question-toolbar" >
					{ nHints > 0 ?
						<HintButton
							id={`${this.id}-hints`}
							onClick={this.logHint}
							ref={( div ) => { this.hintButton = div; }}
							hints={this.props.hints}
							onFinished={() => {
								this.setState({ exhaustedHints: true });
							}}
							style={{
								marginRight: '4px'
							}}
							placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.provideFeedback && this.props.solution ? solutionButton : null
					}
					{
						this.props.chat ?
							<div style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.id} />
							</div> : null
					}
					{this.renderSubmitButton()}
				</ButtonToolbar>
				{ this.props.feedback ? <FeedbackButtons
					id={this.id+'_feedback'}
					style={{ marginRight: 5, marginTop: -5 }}
				/> : null }
				<GradeFeedbackRenderer for={this.id} points={this.props.points} />
			</Panel>
		);
	}
}


// PROPERTIES //

FreeTextQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'top',
	feedback: true,
	solution: '',
	instantSolution: false,
	rows: 5,
	chat: false,
	placeholder: '',
	resizable: false,
	disableSubmitNotification: false,
	submissionMsg: '',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	provideFeedback: true,
	maxlength: 2500,
	until: null,
	points: 10,
	className: '',
	style: {},
	onChange() {},
	onSubmit() {}
};

FreeTextQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	hintPlacement: PropTypes.string,
	feedback: PropTypes.bool,
	solution: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	instantSolution: PropTypes.bool,
	rows: PropTypes.number,
	chat: PropTypes.bool,
	resizable: PropTypes.bool,
	placeholder: PropTypes.string,
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	provideFeedback: PropTypes.bool,
	maxlength: PropTypes.number,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

FreeTextQuestion.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'questions/free-text' )( withPropCheck( FreeTextQuestion ) );
