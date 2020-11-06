// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import generateUID from 'utils/uid';
import DraggableList from 'components/draggable-list';
import TimedButton from 'components/timed-button';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/internal/response-visualizer';
import ChatButton from 'components/chat-button';
import FeedbackButtons from 'components/feedback';
import GradeFeedbackRenderer from 'components/internal/grade-feedback-renderer';
import SessionContext from 'session/context.js';
import permute from 'utils/permute';
import { ORDER_QUESTION_SUBMISSION, ORDER_QUESTION_OPEN_HINT } from 'constants/actions.js';
import './load_translations.js';
import './order-question.css';


// VARIABLES //

const uid = generateUID( 'order-question' );
const debug = logger( 'isle:order-question' );


// MAIN //

/**
* An order question component that asks student to bring a collection of elements into the correct order.
*
* @property {(string|node)} question - question for which the student has to bring the available `options` into the correct order
* @property {Array} options - an array of texts which the student has to bring into the correct ordering (assumed to be the supplied order)
* @property {boolean} provideFeedback - controls whether to show a notification displaying whether the submitted answer is correct or not
* @property {Array} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {string} failureMsg - message to be displayed when student submits a wrong answer
* @property {string} successMsg - message to be displayed when student submits the correct answer
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback  which is triggered after dragging an element; has two parameters: a `boolean` indicating whether the elements were placed in the correct order and and `array` with the current ordering
* @property {Function} onSubmit - callback invoked when answer is submitted; has as a sole parameter a `boolean` indicating whether the elements were placed in the correct order
*/
class OrderQuestion extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		// Initialize state variables...
		this.state = {
			cards: null,
			correct: false,
			submitted: false,
			options: props.options.map( ( val, idx ) => {
				return {
					id: idx,
					text: val
				};
			}),
			permutations: permute( props.options )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.options.length !== prevState.options.length ) {
			return {
				options: nextProps.options.map( ( val, idx ) => {
					return {
						id: idx,
						text: val
					};
				}),
				permutations: permute( nextProps.options )
			};
		}
		return null;
	}

	handleChange = ( cards ) => {
		let correct = true;
		for ( let i = 0; i < cards.length; i++ ) {
			if ( cards[ i ].id !== i ) {
				correct = false;
				break;
			}
		}
		this.props.onChange( cards, correct );
		this.setState({
			cards,
			correct,
			submitted: false
		});
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		session.log({
			id: this.id,
			type: ORDER_QUESTION_OPEN_HINT,
			value: idx
		});
	}

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.props.provideFeedback ) {
			if ( this.state.correct ) {
				session.addNotification({
					title: this.props.t('correct'),
					message: this.props.successMsg || this.props.t('submission-correct'),
					level: 'success'
				});
			} else {
				session.addNotification({
					title: this.props.t('incorrect'),
					message: this.props.failureMsg || this.props.t('submission-incorrect'),
					level: 'error'
				});
			}
		} else {
			session.addNotification({
				title: this.props.t('submitted'),
				message: this.props.t('submission-message'),
				level: 'info'
			});
		}
	}

	handleSubmit = () => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		this.props.onSubmit( this.state.cards, this.state.correct );
		this.setState({
			submitted: true
		});
		session.log({
			id: this.id,
			type: ORDER_QUESTION_SUBMISSION,
			value: this.state.cards.map( x => x.text ).join( ' -> ' )
		});
	}

	renderSubmitButton() {
		const session = this.context;
		if ( this.props.until && session.startTime > this.props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{this.props.t('question-closed')}</span>;
		}
		return (
			<TimedButton
				className="submit-button" variant="primary" size="sm"
				onClick={this.handleSubmit}
				disabled={this.state.submitted && this.state.correct}
			>
				{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
			</TimedButton>
		);
	}

	render() {
		const nHints = this.props.hints.length;
		return (
			<Card id={this.id} className="order-question" style={this.props.style} >
				<Card.Body style={{ width: this.props.feedback ? 'calc(100%-60px)' : '100%', display: 'inline-block' }} >
					<label>{this.props.question}</label>
					<DraggableList
						shuffle data={this.state.options}
						onChange={this.handleChange}
						onInit={this.handleChange}
						disabled={this.state.submitted && this.state.correct}
					/>
					<div className="order-question-toolbar">
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{this.renderSubmitButton()}
						{
							this.props.chat ?
								<ChatButton for={this.id} /> : null
						}
					</div>
					<ResponseVisualizer
						id={this.id}
						data={{
							type: 'factor',
							levels: this.state.permutations.map( x => x.join( ' -> ' ) ),
							question: this.props.question,
							solution: this.props.options
						}}
						info="ORDER_QUESTION_SUBMISSION"
						points={this.props.points}
					/>
					{ this.props.feedback ? <FeedbackButtons
						id={this.id+'_feedback'}
					/> : null }
					<GradeFeedbackRenderer for={this.id} points={this.props.points} />
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

OrderQuestion.defaultProps = {
	question: '',
	provideFeedback: true,
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	chat: false,
	failureMsg: null,
	successMsg: null,
	disableSubmitNotification: false,
	until: null,
	points: 10,
	style: {},
	onChange() {},
	onSubmit() {}
};

OrderQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	options: PropTypes.array.isRequired,
	provideFeedback: PropTypes.bool,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	chat: PropTypes.bool,
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	disableSubmitNotification: PropTypes.bool,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

OrderQuestion.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'order-question' )( OrderQuestion );
