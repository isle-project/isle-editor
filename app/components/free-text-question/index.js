// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import ChatButton from 'components/chat-button';
import TimedButton from 'components/timed-button';
import ResponseVisualizer from 'components/response-visualizer';
import SolutionButton from 'components/solution-button';
import HintButton from 'components/hint-button';
import VoiceControl from 'components/voice-control';
import OverlayTrigger from 'components/overlay-trigger';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import { FREE_TEXT_QUESTION_SUBMIT_ANSWER, FREE_TEXT_QUESTION_DISPLAY_SOLUTION, FREE_TEXT_QUESTION_OPEN_HINT } from 'constants/actions.js';
import VOICE_COMMANDS from './voice_commands.json';
import './free-text-question.css';


// VARIABLES //

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
* @property {number} rows - number of rows of the text field for students to type their answers
* @property {boolean} chat - controls whether to enable group chat should for the question
* @property {boolean} resizable - controls whether the text area should be resizable
* @property {string} placeholder - placeholder text displayed before user has entered any text
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} submissionMsg - notification displayed when the learner first submits his answer
* @property {string} resubmissionMsg - notification displayed for all submissions after the first one
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {number} maxlength - maximum allowed number of characters
* @property {string} voiceID - voice control identifier
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
		const value = this.getLastAction( actions, props.id );

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
			if ( type === 'retrieved_current_user_actions' ) {
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
		this.props.onChange( newValue );
	};

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.state.submitted ) {
			session.addNotification({
				title: 'Answer re-submitted.',
				message: this.props.resubmissionMsg,
				level: 'success',
				position: 'tr'
			});
		} else {
			let submissionMsg = this.props.submissionMsg;
			if ( submissionMsg === '' ) {
				submissionMsg = this.props.solution && this.props.provideFeedback ?
					'Compare your answer with solution using the "Show Solution" button. You can then change your answer and re-submit if necessary.' :
					'You can change your answer and re-submit if you want to.';
			}
			session.addNotification({
				title: 'Answer submitted.',
				message: submissionMsg,
				level: 'success',
				position: 'tr'
			});
		}
	}

	submitHandler = ( event ) => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.props.onSubmit( this.state.value );
		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: FREE_TEXT_QUESTION_SUBMIT_ANSWER,
				value: this.state.value
			});
		}
	};

	handleSolutionClick = () => {
		const session = this.context;
		if ( !this.state.submitted || !this.state.exhaustedHints ) {
			return session.addNotification({
				title: 'Not allowed',
				message: 'Solution becomes available after answer is submitted and all hints have been required.',
				level: 'warning',
				position: 'tr'
			});
		}
		if ( this.state.solutionDisplayed ) {
			this.setState({
				solutionDisplayed: false,
				value: this.state.studentAnswer
			});
		} else {
			session.log({
				id: this.props.id,
				type: FREE_TEXT_QUESTION_DISPLAY_SOLUTION,
				value: null
			});
			this.setState({
				solutionDisplayed: true,
				studentAnswer: this.state.value,
				value: this.props.solution
			});
		}
	}

	getLastAction = ( val, id ) => {
		if ( isObject( val ) ) {
			let actions = val[ id ];
			if ( isArray( actions ) ) {
				actions = actions.filter( action => {
					return action.type === 'FREE_TEXT_QUESTION_SUBMIT_ANSWER';
				});
				if ( actions.length > 0 ) {
					return actions[ 0 ].value;
				}
			}
		}
		return null;
	}

	setToLastAction() {
		const session = this.context;
		const actions = session.currentUserActions;
		const value = this.getLastAction( actions, this.props.id );
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
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: FREE_TEXT_QUESTION_OPEN_HINT,
				value: idx
			});
		}
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		const solutionButton = <SolutionButton
			disabled={!this.state.submitted || !this.state.exhaustedHints}
			onClick={this.handleSolutionClick}
		/>;
		return (
			<Card id={this.props.id} className="free-text-question" style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
					<VoiceControl id={this.props.voiceID} reference={this}
						commands={VOICE_COMMANDS}
					/>
					{ this.props.question ? <label>{this.props.question}</label> : null }
					<FormGroup>
						<label>{this.state.solutionDisplayed ? 'Solution:' : 'Your answer:' }</label>
						<FormControl
							as="textarea"
							placeholder={this.props.placeholder}
							onChange={this.handleChange}
							style={{
								resize: this.props.resizable ? 'both' : 'none'
							}}
							maxLength={this.props.maxlength}
							rows={this.props.rows}
							value={this.state.value}
							disabled={this.state.solutionDisplayed}
						/>
					</FormGroup>
					<ResponseVisualizer
						buttonLabel="Answers" id={this.props.id}
						info="FREE_TEXT_QUESTION_SUBMIT_ANSWER"
					/>
					<ButtonToolbar className="free-text-question-toolbar" >
						{ nHints > 0 ?
							<HintButton
								onClick={this.logHint}
								ref={( div ) => { this.hintButton = div; }}
								hints={this.props.hints}
								onFinished={() => {
									this.setState({ exhaustedHints: true });
								}}
								placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.props.provideFeedback && this.props.solution ? solutionButton : null
						}
						{
							this.props.chat && this.props.id ?
								<div style={{ display: 'inline-block', marginLeft: '4px' }}>
									<ChatButton for={this.props.id} />
								</div> : null
						}
						{
							this.state.value.length >= 1 ?
								<TimedButton
									className="submit-button"
									variant="primary"
									size="sm"
									onClick={this.submitHandler}
									duration={5}
								>{ !this.state.submitted ? 'Submit' : 'Resubmit' }</TimedButton> :
								<OverlayTrigger
									placement="top"
									positionLeft={100}
									overlay={<Tooltip id="submitTooltip">
										Click submit after you have typed your answer.
									</Tooltip>}
									rootClose={true}
								>
									<div style={{ display: 'inline-block' }}>
										<Button
											className="submit-button"
											variant="primary"
											size="sm"
											style={{
												pointerEvents: 'none'
											}}
											disabled
										>Submit</Button>
									</div>
								</OverlayTrigger>
						}
					</ButtonToolbar>
					{ this.props.id && this.props.feedback ? <FeedbackButtons
						id={this.props.id+'_feedback'}
						style={{ marginRight: 5, marginTop: -5 }}
					/> : null }
				</Card.Body>
			</Card>
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
	rows: 5,
	chat: false,
	placeholder: 'Enter your answer here...',
	resizable: false,
	disableSubmitNotification: false,
	submissionMsg: '',
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	provideFeedback: true,
	maxlength: 2500,
	voiceID: null,
	style: {},
	onChange() {},
	onSubmit() {}
};

FreeTextQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	hints: PropTypes.arrayOf( PropTypes.string ),
	hintPlacement: PropTypes.string,
	feedback: PropTypes.bool,
	solution: PropTypes.string,
	rows: PropTypes.number,
	chat: PropTypes.bool,
	resizable: PropTypes.bool,
	placeholder: PropTypes.string,
	disableSubmitNotification: PropTypes.bool,
	submissionMsg: PropTypes.string,
	resubmissionMsg: PropTypes.string,
	provideFeedback: PropTypes.bool,
	maxlength: PropTypes.number,
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

FreeTextQuestion.contextType = SessionContext;


// EXPORTS //

export default FreeTextQuestion;
