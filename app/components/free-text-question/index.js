// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Panel from 'react-bootstrap/lib/Panel';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isString from '@stdlib/assert/is-string';
import ChatButton from 'components/chat-button';
import InstructorBar from 'components/instructor-bar';
import HintButton from 'components/hint-button';
import './free-text-question.css';


// VARIABLES //

const debug = logger( 'isle:free-text-question' );


// MAIN //

class FreeTextQuestion extends Component {
	/**
	* Create a free-form question with a text input field.
	*
	* @param {Object} props
	*/
	constructor( props, context ) {
		super( props );
		debug( 'Invoking constructor of FreeTextQuestion...' );

		const actions = context.session.currentUserActions;
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
		const { session } = this.context;
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

	submitHandler = ( event ) => {
		const { session } = this.context;
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
				submissionMsg = this.props.solution ?
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

		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'FREE_TEXT_QUESTION_SUBMIT_ANSWER',
				value: this.state.value
			});
		}
	};

	handleSolutionClick = () => {
		const { session } = this.context;
		if ( this.state.solutionDisplayed ) {
			this.setState({
				solutionDisplayed: false,
				value: this.state.studentAnswer
			});
		} else {
			session.log({
				id: this.props.id,
				type: 'FREE_TEXT_QUESTION_DISPLAY_SOLUTION',
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
		const { session } = this.context;
		const actions = session.currentUserActions;
		const value = this.getLastAction( actions, this.props.id );
		if ( isString( value ) && value !== this.state.value ) {
			this.setState({
				value: value,
				submitted: true
			});
		}
	}

	renderSolutionButton() {
		if ( !this.props.solution ) {
			return null;
		}
		const tooltip = (
			<Tooltip
				id="tooltip"
			>
				Solution becomes available after answer is submitted and all hints have been required.
			</Tooltip>
		);
		if ( this.state.submitted && this.state.exhaustedHints ) {
			return ( <Button
				bsStyle="warning"
				bsSize="sm"
				onClick={this.handleSolutionClick}
			>{ !this.state.solutionDisplayed ? 'Show Solution' : 'Hide Solution' }</Button> );
		}
		return ( <OverlayTrigger
			placement="top"
			positionLeft={100}
			overlay={tooltip}
			rootClose={true}
		>
			<div style={{ display: 'inline-block', marginLeft: '4px' }}>
				<Button
					bsStyle="warning"
					bsSize="sm"
					disabled
					style={{
						pointerEvents: 'none'
					}}
				>{ !this.state.solutionDisplayed ? 'Show Solution' : 'Hide Solution' }</Button>
			</div>
		</OverlayTrigger> );
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		return (
			<Panel className="free-text-question">
				<Panel.Body>
					{ this.props.question ? <label>{this.props.question}</label> : null }
					<FormGroup>
						<ControlLabel>{this.state.solutionDisplayed ? 'Solution:' : 'Your answer:' }</ControlLabel>
						<FormControl
							id={`${this.props.id}_textarea`}
							componentClass="textarea"
							placeholder={this.props.placeholder}
							onChange={this.handleChange}
							style={{
								resize: this.props.resizable ? 'both' : 'none'
							}}
							maxlength={this.props.maxlength}
							rows={this.props.rows}
							value={this.state.value}
							disabled={this.state.solutionDisplayed}
						/>
					</FormGroup>
					{
						this.state.value.length >= 1 ?
							<Button
								bsStyle="primary"
								bsSize="sm"
								style={{
									marginTop: '8px',
									marginBottom: '8px'
								}}
								onClick={this.submitHandler}
							>{ !this.state.submitted ? 'Submit' : 'Resubmit' }</Button> :
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
										bsStyle="primary"
										bsSize="sm"
										style={{
											marginTop: '8px',
											marginBottom: '8px',
											pointerEvents: 'none'
										}}
										disabled
									>Submit</Button>
								</div>
							</OverlayTrigger>
					}

					<ButtonToolbar className="free-text-question-toolbar" >
						{ nHints > 0 ?
							<HintButton
								onClick={this.logHint}
								hints={this.props.hints}
								onFinished={() => {
									this.setState({ exhaustedHints: true });
								}}
								placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.renderSolutionButton()
						}
						{
							this.props.chat && this.props.id ?
								<div style={{ display: 'inline-block', marginLeft: '4px' }}>
									<ChatButton for={this.props.id} />
								</div> : null
						}
					</ButtonToolbar>
					<InstructorBar id={this.props.id} />
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

FreeTextQuestion.defaultProps = {
	chat: false,
	hintPlacement: 'bottom',
	hints: [],
	maxlength: 2500,
	onChange() {},
	placeholder: 'Enter your answer here...',
	question: '',
	resizable: false,
	resubmissionMsg: 'You have successfully re-submitted your answer.',
	rows: 5,
	solution: null,
	submissionMsg: ''
};


// PROPERTY TYPES //

FreeTextQuestion.propTypes = {
	chat: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	maxlength: PropTypes.number,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	resizable: PropTypes.bool,
	resubmissionMsg: PropTypes.string,
	rows: PropTypes.number,
	solution: PropTypes.string,
	submissionMsg: PropTypes.string
};

FreeTextQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default FreeTextQuestion;
