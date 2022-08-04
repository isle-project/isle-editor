// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Badge from 'react-bootstrap/Badge';
import logger from 'debug';
import PINF from '@stdlib/constants/float64/pinf';
import NINF from '@stdlib/constants/float64/ninf';
import roundn from '@stdlib/math/base/special/roundn';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isNumber from '@stdlib/assert/is-number';
import isArray from '@stdlib/assert/is-array';
import Panel from '@isle-project/components/panel';
import TimedButton from '@isle-project/components/timed-button';
import ChatButton from '@isle-project/components/internal/chat-button';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import NumberInput, { createTooltip } from '@isle-project/components/input/number';
import HintButton from '@isle-project/components/hint-button';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { SUBMISSION, OPEN_HINT } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './number_question.css';


// VARIABLES //

const debug = logger( 'isle:number-question' );


// FUNCTIONS //

function isCorrect( answer, solution ) {
	if ( isArray( solution ) ) {
		for ( let i = 0; i < solution.length; i++ ) {
			if ( answer === solution[ i ] ) {
				return true;
			}
		}
		return false;
	}
	return answer === solution;
}

function isApproximatelyCorrect( answer, solution, digits ) {
	answer = roundn( answer, -digits );
	if ( isArray( solution ) ) {
		for ( let i = 0; i < solution.length; i++ ) {
			if ( answer === roundn( solution[ i ], -digits ) ) {
				return true;
			}
		}
		return false;
	}
	return answer === roundn( solution, -digits );
}

function formatArraySolution( solution, t ) {
	let out = t( 'one-of' );
	out += solution[ 0 ];
	for ( let i = 1; i < solution.length - 1; i++ ) {
		out += ', ';
		out += solution[ i ];
	}
	out += ' '+t('or')+' ';
	out += solution[ solution.length-1 ];
	return out;
}


// MAIN //

/**
* A number question component.
*
* @property {(string|node)} question - number question
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {(number|Array<number>)} solution - a numeric answer to the problem (or multiple correct answers if an array is supplied)
* @property {number} digits - number of digits for which the answer supplied by the student must match the solution to be considered correct. Set to 0 to match as an integer. If set to null it will search for an exact match
* @property {number} max - maximum allowed input value
* @property {number} min - minimum allowed input value
* @property {number} defaultValue - pre-selected value of number input
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {boolean} submitAfterFeedback - controls whether one should be able to resubmit even after the solution has been revealed
* @property {number} nTries - after how many tries feedback should be supplied (if `provideFeedback` is `true`)
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
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

		const value = props.retrieveLastAction( SUBMISSION );

		// Initialize state variables...
		this.state = {
			value: isNumber( value ) ? value : props.defaultValue,
			submitted: value && isUndefinedOrNull( props.solution ),
			numSubmissions: 0,
			correct: props.digits ?
				isApproximatelyCorrect( value, props.solution, props.digits ) :
				isCorrect( value, props.solution ),
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
			this.unsubscribe = session.subscribe( ( type ) => {
				if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
					const lastAction = this.props.retrieveLastAction( SUBMISSION );
					if ( lastAction ) {
						this.setState({
							value: lastAction,
							submitted: isUndefinedOrNull( this.props.solution )
						});
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
	};

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			// Manually trigger blur event since not happening when pressing ENTER:
			if ( document && document.activeElement ) {
				debug( 'Trigger blur event...' );
				document.activeElement.blur();
			}
			setTimeout( this.submitHandler, 50 );
		}
	};

	sendSubmitNotification = ( correct ) => {
		const session = this.context;
		if ( !isUndefinedOrNull( this.props.solution ) ) {
			if ( this.props.provideFeedback ) {
				let message;
				let level;
				if ( correct ) {
					message = this.props.t('submission-correct');
					level = 'success';
				} else {
					const numSubmissions = this.state.numSubmissions + 1;
					message = numSubmissions < this.props.nTries ?
						this.props.t('submission-try-again') + ' (' +
							this.props.t('tries', { count:
								this.props.nTries - numSubmissions
							}) + ').' : this.props.t('submission-incorrect');
					level = 'error';
				}
				session.addNotification({
					title: this.props.t( 'answer-submitted' ),
					message,
					level
				});
			} else {
				session.addNotification({
					title: this.state.submitted ? this.props.t( 'answer-resubmitted' ) : this.props.t( 'answer-submitted' ),
					message: this.state.submitted ?
						this.props.t('resubmission-message') :
						this.props.t('submission-message'),
					level: 'info'
				});
			}
		} else {
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					this.props.t('resubmission-message') :
					this.props.t('submission-message'),
				level: 'info'
			});
		}
	};

	submitHandler = () => {
		const session = this.context;
		const val = parseFloat( this.state.value );
		if ( val < this.props.min || val > this.props.max ) {
			return session.addNotification({
				title: this.props.t('invalid-answer'),
				message: this.props.t( 'invalid-range', { min: this.props.min, max: this.props.max }),
				level: 'error'
			});
		}
		const { digits, solution } = this.props;
		let correct;
		if ( !isUndefinedOrNull( solution ) ) {
			const val = parseFloat( this.state.value );
			if ( digits === null ) {
				correct = isCorrect( val, solution );
			} else {
				correct = isApproximatelyCorrect( val, solution, digits );
			}
		}
		this.props.onSubmit( val, correct );
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification( correct );
		}
		this.setState({
			submitted: true,
			correct,
			numSubmissions: this.state.numSubmissions + 1
		});
		this.props.logAction( SUBMISSION, this.state.value );
	};

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		this.props.logAction( OPEN_HINT, idx );
	};

	renderSubmitButton() {
		const session = this.context;
		const { until, nTries, solution, submitAfterFeedback, t } = this.props;
		if ( until && session.startTime > until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{t('question-closed')}</span>;
		}
		const solutionPresent = solution !== null;
		const isDisabled = !isNumber( this.state.value ) ||
			( this.state.submitted && solutionPresent && (
				( this.state.numSubmissions >= nTries && !submitAfterFeedback ) ||
				this.state.correct
			) );
		return (
			<TimedButton
				className="submit-button"
				variant="primary"
				size="sm"
				disabled={isDisabled}
				onClick={this.submitHandler}
				style={{
					marginLeft: 3
				}}
			>
				{ ( this.state.submitted && !solution ) ? t('resubmit') : t('submit') }
			</TimedButton>
		);
	}

	/*
	* React component render method.
	*/
	render() {
		const { chat, feedback, hints, hintPlacement, question, points,
			provideFeedback, nTries, solution, submitAfterFeedback,
			style, t } = this.props;
		const nHints = hints.length;
		const solutionPresent = solution !== null;
		const isDisabled = this.state.submitted && solutionPresent && (
			( this.state.numSubmissions >= nTries && !submitAfterFeedback ) ||
			this.state.correct );
		return (
			<Panel
				id={this.props.id} className="number-question" style={style} fullscreen
				bodyStyle={{ display: 'inline-block', marginBottom: 6 }}
			>
				{ question ? <p><label>{question}</label></p> : null }
				<div className="number-question-input-wrapper">
					<NumberInput
						step="any"
						legend={t('your-answer')}
						onChange={this.handleChange}
						defaultValue={this.state.value}
						disabled={isDisabled}
						inline
						width={90}
						numbersOnly={false}
						onKeyPress={this.handleKeyPress}
						tooltip={createTooltip( this.props )}
					/>
					{
						this.state.submitted &&
						solutionPresent &&
						provideFeedback &&
						( this.state.correct || this.state.numSubmissions >= nTries ) ?
						<Badge bg={this.state.correct ? 'success' : 'danger'} style={{ fontSize: 18 }}>
							{`${t('solution')}:   `}
							{isArray( solution ) ?
								formatArraySolution( solution, t ) :
								String( solution )
							}
						</Badge>:
						null
					}
				</div>
				<ButtonToolbar className="number-question-toolbar">
					<ResponseVisualizer
						buttonLabel={t('answers')} id={this.props.id}
						data={{
							type: 'number',
							question: question,
							solution: solution
						}} info="NUMBER_QUESTION_SUBMISSION"
						style={{ marginLeft: 3, marginRight: 3 }}
						points={points}
					/>
					{ nHints > 0 ?
						<HintButton
							onClick={this.logHint}
							hints={hints}
							placement={hintPlacement}
							style={{
								marginLeft: 3
							}}
						/> :
						null
					}
					{
						chat ?
							<div style={{ display: 'inline-block', marginLeft: 3 }}>
								<ChatButton for={this.props.id} />
							</div> : null
					}
					{this.renderSubmitButton()}
				</ButtonToolbar>
				{ feedback ? <FeedbackButtons
					id={this.props.id+'_feedback'}
					style={{ marginRight: 5, marginTop: -5 }}
				/> : null }
				<GradeFeedbackRenderer for={this.props.id} points={points} />
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
	defaultValue: null,
	provideFeedback: true,
	submitAfterFeedback: false,
	nTries: 1,
	disableSubmitNotification: false,
	chat: false,
	until: null,
	points: 10,
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
	solution: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf( PropTypes.number )
	]),
	digits: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	defaultValue: PropTypes.number,
	provideFeedback: PropTypes.bool,
	submitAfterFeedback: PropTypes.bool,
	nTries: PropTypes.number,
	disableSubmitNotification: PropTypes.bool,
	chat: PropTypes.bool,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

NumberQuestion.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'NUMBER_QUESTION' )( withTranslation( 'questions/number' )( withPropCheck( NumberQuestion ) ) );
