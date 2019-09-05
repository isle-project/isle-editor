// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import min from '@stdlib/math/base/special/min';
import max from '@stdlib/math/base/special/max';
import roundn from '@stdlib/math/base/special/roundn';
import isnan from '@stdlib/assert/is-nan';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import generateUID from 'utils/uid';
import ChatButton from 'components/chat-button';
import TimedButton from 'components/timed-button';
import ResponseVisualizer from 'components/response-visualizer';
import NumberInput from 'components/input/number';
import HintButton from 'components/hint-button';
import FeedbackButtons from 'components/feedback';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import { RANGE_QUESTION_SUBMIT_ANSWER, RANGE_QUESTION_OPEN_HINT } from 'constants/actions.js';
import VOICE_COMMANDS from './voice_commands.json';
import './range-question.css';


// VARIABLES //

const debug = logger( 'isle:range-question' );
const uid = generateUID( 'range-question' );


// MAIN //

/**
* A range question component that asks students to supply a lower and upper end point.
*
* @property {string} question - displayed question
* @property {Array<number>} solution - two-element array containing the endpoints of the correct range
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {number} digits - number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality
* @property {number} max - maximum input value
* @property {number} min - minimum input value
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {boolean} allowMultipleAnswers - controls whether one can submit multiple answers
* @property {strings} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChangeUpper - callback triggered after the upper bound is changed by the user
* @property {Function} onChangeLower - callback triggered after the lower bound is changed by the user
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter
 */
class RangeQuestion extends Component {
	/**
	* Create a number question with a number input field.
	*
	* @param {Object} props
	*/
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		// Initialize state variables...
		this.state = {
			lower: props.min,
			upper: props.max,
			submitted: false
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.question !== prevProps.question ||
			(
				this.props.solution && prevProps.solution &&
				(
					!isnan( this.props.solution[ 1 ] ) &&
					!isnan( this.props.solution[ 0 ] ) &&
					( this.props.solution[ 1 ] !== prevProps.solution[ 1 ] ||
					this.props.solution[ 0 ] !== prevProps.solution[ 0 ] )
				)
			)
		) {
			this.setState({
				lower: void 0,
				upper: void 0,
				submitted: false
			});
		}
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes `onChange` callback with the new value as its first argument
	*/
	handleChangeUpper = ( newValue ) => {
		this.setState({ upper: newValue });
		this.props.onChangeUpper( max(newValue, this.state.lower) );
	}

	handleChangeLower = ( newValue ) => {
		this.setState({ lower: newValue });
		this.props.onChangeLower( min(newValue, this.state.upper) );
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

	setValue = ( type, value ) => {
		if ( type === 'lower' || type === 'minimum' ) {
			this.handleChangeLower( parseFloat( value ) );
		} else if ( type === 'upper' || type === 'maximum' ) {
			this.handleChangeUpper( parseFloat( value ) );
		}
	}

	submitHandler = () => {
		const { digits, solution } = this.props;
		const session = this.context;
		if ( !isUndefinedOrNull( solution ) ) {
			const lowerVal = parseFloat( this.state.lower );
			const upperVal = parseFloat( this.state.upper );
			const upperSol = solution[1];
			const lowerSol = solution[0];
			let correct;
			if ( digits === null ) {
				correct = (lowerVal === lowerSol && upperVal === upperSol);
			} else {
				correct = (roundn( lowerVal, -digits ) === roundn( lowerVal, -digits ) &&
					(roundn(upperVal, -digits) === roundn(upperSol, -digits)));
			}
			this.props.onSubmit( [ lowerVal, upperVal ], correct );
			if ( this.props.provideFeedback ) {
				session.addNotification({
					title: 'Answer submitted.',
					message: correct ? 'Congratulations, that is correct!' : 'Not quite. Compare your answer with the solution.',
					level: correct ? 'success' : 'error',
					position: 'tr'
				});
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
		} else {
			const lowerVal = parseFloat( this.state.lower );
			const upperVal = parseFloat( this.state.upper );
			this.props.onSubmit( [ lowerVal, upperVal ] );
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'success',
				position: 'tr'
			});
		}
		this.setState({
			submitted: true
		});
		session.log({
			id: this.id,
			type: RANGE_QUESTION_SUBMIT_ANSWER,
			value: JSON.stringify( [ this.state.lower, this.state.upper ] )
		});
	}

	onNoClickUpper = (val) => {
		if ( val <= this.state.lower ) {
			this.setState({ upper: this.state.lower });
		}
	}

	onNoClickLower = (val) => {
		if ( val >= this.state.upper ) {
			this.setState({ lower: this.state.upper });
		}
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: RANGE_QUESTION_OPEN_HINT,
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
			<Card className="range-question" style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }}>
					{ this.props.question ? <label>{this.props.question}</label> : null }
					<div className="range-question-input-wrapper" >
						<NumberInput
							step="any"
							legend="Lower"
							onChange={this.handleChangeLower}
							defaultValue={this.state.lower}
							disabled={this.state.submitted && !this.props.allowMultipleAnswers}
							inline
							width={90}
							min={this.props.min}
							max={this.props.max}
							numbersOnly={false}
							onBlur={this.onNoClickLower}
							onKeyPress={this.handleKeyPress}
						/>
						<NumberInput
							step="any"
							legend="Upper"
							onChange={this.handleChangeUpper}
							defaultValue={this.state.upper}
							disabled={this.state.submitted && !this.props.allowMultipleAnswers}
							inline
							width={90}
							min={this.props.min}
							max={this.props.max}
							numbersOnly={false}
							onBlur={this.onNoClickUpper}
							onKeyPress={this.handleKeyPress}
						/>
						{ this.state.submitted && solutionPresent && this.props.provideFeedback ?
							<span>
								<br />
								<span className="title">Solution:</span>
								<span> {this.props.solution[0]}, {this.props.solution[1]} </span>
							</span>:
							null
						}
					</div>
					<ButtonToolbar className="range-question-toolbar" >
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
						<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					</ButtonToolbar>
					<TimedButton
						className="submit-button"
						variant="primary"
						size="sm"
						disabled={this.state.submitted && !this.props.allowMultipleAnswers}
						onClick={this.submitHandler}
					>
						{ this.state.submitted && this.props.allowMultipleAnswers ? 'Resubmit' : 'Submit' }
					</TimedButton>
					<ResponseVisualizer
						buttonLabel="Answers"
						id={this.id}
						data={{
							type: 'range'
						}}
						info={RANGE_QUESTION_SUBMIT_ANSWER}
						style={{ marginLeft: '6px' }}
					/>
					{ this.props.feedback ? <FeedbackButtons
						id={this.id+'_feedback'}
						style={{ marginRight: 5, marginTop: -5 }}
					/> : null }
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

RangeQuestion.defaultProps = {
	question: '',
	solution: null,
	hints: [],
	hintPlacement: 'top',
	feedback: true,
	chat: false,
	digits: 3,
	max: PINF,
	min: NINF,
	provideFeedback: true,
	allowMultipleAnswers: false,
	voiceID: null,
	style: {},
	onChangeUpper() {},
	onChangeLower() {},
	onSubmit() {}
};

RangeQuestion.propTypes = {
	question: PropTypes.string,
	solution: PropTypes.arrayOf( PropTypes.number ),
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]) ),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	digits: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	provideFeedback: PropTypes.bool,
	allowMultipleAnswers: PropTypes.bool,
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onChangeLower: PropTypes.func,
	onChangeUpper: PropTypes.func,
	onSubmit: PropTypes.func
};

RangeQuestion.contextType = SessionContext;


// EXPORTS //

export default RangeQuestion;
