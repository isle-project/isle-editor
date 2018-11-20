// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Card from 'react-bootstrap/lib/Card';
import logger from 'debug';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import roundn from '@stdlib/math/base/special/roundn';
import ChatButton from 'components/chat-button';
import ResponseVisualizer from 'components/response-visualizer';
import NumberInput from 'components/input/number';
import HintButton from 'components/hint-button';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import './number-question.css';


// VARIABLES //

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
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after the value of the number field changes; receives the current value as its sole argument
* @property {Function} onSubmit - callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly anwered (if applicable, `null` otherwise) and the supplied answer as the second parameter
*/
class NumberQuestion extends Component {
	/**
	* Create a number question with a number input field.
	*
	* @param {Object} props
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: void 0,
			submitted: false,
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

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes `onChange` callback with the new value as its first argument
	*/
	handleChange = ( newValue ) => {
		this.setState({ value: newValue });
		this.props.onChange( newValue );
	}

	sendSubmitNotification = () => {
		const session = this.context;
		const { digits, solution } = this.props;
		if ( solution ) {
			const val = parseFloat( this.state.value );
			let correct;
			if ( digits === null ) {
				correct = val === solution;
			} else {
				correct = roundn( val, -digits ) === roundn( solution, -digits );
			}
			this.props.onSubmit( this.state.value, correct );
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
			this.props.onSubmit( this.state.value );
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'info',
				position: 'tr'
			});
		}
	}

	submitHandler = ( event ) => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'NUMBER_QUESTION_SUBMISSION',
				value: this.state.value
			});
		}
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'NUMBER_QUESTION_OPEN_HINT',
				value: idx
			});
		}
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		const solutionPresent = this.props.solution !== null;
		return (
			<Card id={this.props.id} className="number-question" style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
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
							min={this.props.min}
							max={this.props.max}
							numbersOnly={false}
						/>
						{ this.state.submitted && this.props.solution && this.props.provideFeedback ?
							<span>
								<span> | </span>
								<NumberInput
									legend="Solution"
									disabled
									defaultValue={this.props.solution}
									inline
									width={90}
								/>
							</span>:
							null
						}
					</div>
					<Button
						className="submit-button"
						variant="primary"
						size="sm"
						disabled={this.state.submitted && solutionPresent}
						onClick={this.submitHandler}
					>
						{ ( this.state.submitted && !this.props.solution ) ? 'Resubmit' : 'Submit' }
					</Button>
					<ButtonToolbar className="number-question-toolbar">
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.props.chat && this.props.id ?
								<div style={{ display: 'inline-block', marginLeft: '4px' }}>
									<ChatButton for={this.props.id} />
								</div> : null
						}
					</ButtonToolbar>
					<ResponseVisualizer buttonLabel="Answers" id={this.props.id} data={{ type: 'number' }} info="NUMBER_QUESTION_SUBMISSION" />
				</Card.Body>
				{ this.props.id && this.props.feedback ? <FeedbackButtons
					vertical
					id={this.props.id+'_feedback'}
				/> : null }
			</Card>
		);
	}
}


// PROPERTIES //

NumberQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'top',
	feedback: false,
	solution: null,
	digits: 3,
	max: PINF,
	min: NINF,
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
	hints: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
	solution: PropTypes.number,
	digits: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
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
