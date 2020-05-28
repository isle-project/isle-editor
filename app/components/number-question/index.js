// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Badge from 'react-bootstrap/Badge';
import logger from 'debug';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import roundn from '@stdlib/math/base/special/roundn';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isNumber from '@stdlib/assert/is-number';
import isArray from '@stdlib/assert/is-array';
import generateUID from 'utils/uid';
import Panel from 'components/panel';
import TimedButton from 'components/timed-button';
import ChatButton from 'components/chat-button';
import ResponseVisualizer from 'components/response-visualizer';
import NumberInput, { createTooltip } from 'components/input/number';
import HintButton from 'components/hint-button';
import FeedbackButtons from 'components/feedback';
import { SessionContext } from '@isle-project/session';
import getLastAction from 'utils/get-last-action';
import { RETRIEVED_CURRENT_USER_ACTIONS } from 'constants/events.js';
import { NUMBER_QUESTION_SUBMISSION, NUMBER_QUESTION_OPEN_HINT } from 'constants/actions.js';
import './number-question.css';


// VARIABLES //

const uid = generateUID( 'number-question' );
const debug = logger( 'isle:number-question' );


// MAIN //

/**
* A number question component.
*
* @property {string} question - number question
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {number} solution - a numeric answer to the problem
* @property {number} digits - number of digits for which the answer supplied by the student must match the solution to be considered correct. Set to 0 to match as an integer. If set to null it will search for an exact match.
* @property {number} max - maximum allowed input value
* @property {number} min - minimum allowed input value
* @property {number} defaultValue - pre-selected value of number input
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after the value of the number field changes; receives the current value as its sole argument
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter
*/
class NumberQuestion extends Component {
	/**
	* Create a number question with a number input field.
	*
	* @param {Object} props
	*/
	constructor( props, context ) {
		super( props );

		this.id = props.id || uid( props );
		const currentUserActions = context.currentUserActions;
		const value = getLastAction( currentUserActions, this.id, NUMBER_QUESTION_SUBMISSION );

		// Initialize state variables...
		this.state = {
			value: isNumber( value ) ? value : props.defaultValue,
			submitted: value && isUndefinedOrNull( props.solution ),
			correct: value === props.solution,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.question !== prevState.question ||
			nextProps.solution !== prevState.solution
		) {
			return {
				value: void 0,
				submitted: false,
				question: nextProps.question,
				solution: nextProps.solution
			};
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, val ) => {
				if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
					let actions = val[ this.id ];
					if ( isArray( actions ) ) {
						actions = actions.filter( action => {
							return action.type === NUMBER_QUESTION_SUBMISSION;
						});
						if ( actions.length > 0 ) {
							const lastAction = actions[ 0 ].value;
							this.setState({
								value: lastAction,
								submitted: isUndefinedOrNull( this.props.solution )
							});
						}
					}
				}
			});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	/*
	* Event handler invoked when input field value changes. Updates `value` and invokes `onChange` callback with the new value as its first argument
	*/
	handleChange = ( newValue ) => {
		debug( 'Handle change of input field...' );
		this.setState({ value: newValue });
		this.props.onChange( newValue );
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			// Manually trigger blur event since not happening when pressing ENTER:
			if ( document && document.activeElement ) {
				debug( 'Trigger blur event...' );
				document.activeElement.blur();
			}
			setTimeout( this.submitHandler, 50 );
		}
	}

	sendSubmitNotification = ( correct ) => {
		const session = this.context;
		if ( !isUndefinedOrNull( this.props.solution ) ) {
			if ( this.props.provideFeedback ) {
				session.addNotification({
					title: 'Answer submitted.',
					message: correct ? 'Congratulations, that is correct!' : 'Not quite. Compare your answer with the solution.',
					level: correct ? 'success' : 'error'
				});
			} else {
				session.addNotification({
					title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
					message: this.state.submitted ?
						'You have successfully re-submitted your answer.' :
						'Your answer has been submitted.',
					level: 'info'
				});
			}
		} else {
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'info'
			});
		}
	}

	submitHandler = () => {
		const session = this.context;
		const val = parseFloat( this.state.value );
		if ( val < this.props.min || val > this.props.max ) {
			return session.addNotification({
				title: 'Invalid answer',
				message: `Your response should be a number between ${this.props.min} and ${this.props.max}`,
				level: 'error'
			});
		}
		const { digits, solution } = this.props;
		let correct;
		if ( !isUndefinedOrNull( solution ) ) {
			const val = parseFloat( this.state.value );
			if ( digits === null ) {
				correct = val === solution;
			} else {
				correct = roundn( val, -digits ) === roundn( solution, -digits );
			}
		}
		this.props.onSubmit( val, correct );
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification( correct );
		}
		this.setState({
			submitted: true,
			correct
		});
		session.log({
			id: this.id,
			type: NUMBER_QUESTION_SUBMISSION,
			value: this.state.value
		});
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: NUMBER_QUESTION_OPEN_HINT,
			value: idx
		});
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		const solutionPresent = this.props.solution !== null;
		return (
			<Panel
				id={this.id} className="number-question" style={this.props.style} fullscreen
				bodyStyle={{ width: this.props.feedback ? 'calc(100% - 60px)' : '100%', display: 'inline-block', marginBottom: 6 }}
			>
				{ this.props.question ? <p><label>{this.props.question}</label></p> : null }
				<div className="number-question-input-wrapper">
					<NumberInput
						step="any"
						legend="Your answer"
						onChange={this.handleChange}
						defaultValue={this.state.value}
						disabled={this.state.submitted && solutionPresent}
						inline
						width={90}
						numbersOnly={false}
						onKeyPress={this.handleKeyPress}
						tooltip={createTooltip( this.props )}
					/>
					{ this.state.submitted && solutionPresent && this.props.provideFeedback ?
						<Badge variant={this.state.correct ? 'success' : 'danger'} style={{ fontSize: 18 }}>
							{'Solution:   '}
							{this.props.solution}
						</Badge>:
						null
					}
				</div>
				<ButtonToolbar className="number-question-toolbar">
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ?
							<div style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.id} />
							</div> : null
					}
				</ButtonToolbar>
				<TimedButton
					className="submit-button"
					variant="primary"
					size="sm"
					disabled={this.state.submitted && solutionPresent}
					onClick={this.submitHandler}
				>
					{ ( this.state.submitted && !this.props.solution ) ? 'Resubmit' : 'Submit' }
				</TimedButton>
				<ResponseVisualizer
					buttonLabel="Answers" id={this.id}
					data={{ type: 'number', question: this.props.question }} info="NUMBER_QUESTION_SUBMISSION"
					style={{ marginLeft: '6px' }}
				/>
				{ this.props.feedback ? <FeedbackButtons
					vertical
					id={this.id+'_feedback'}
					style={{
						position: 'absolute',
						right: '4px',
						bottom: '4px'
					}}
				/> : null }
			</Panel>
		);
	}
}


// PROPERTIES //

NumberQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'top',
	feedback: true,
	solution: null,
	digits: 3,
	max: PINF,
	min: NINF,
	defaultValue: 0,
	provideFeedback: true,
	disableSubmitNotification: false,
	chat: false,
	style: {},
	onChange() {},
	onSubmit() {}
};

NumberQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	solution: PropTypes.number,
	digits: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	defaultValue: PropTypes.number,
	provideFeedback: PropTypes.bool,
	disableSubmitNotification: PropTypes.bool,
	chat: PropTypes.bool,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

NumberQuestion.contextType = SessionContext;


// EXPORTS //

export default NumberQuestion;
