// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import ResponseVisualizer from 'components/response-visualizer';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import FeedbackButtons from 'components/feedback';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import toNumber from 'utils/to-number';
import { MULTIPLE_CHOICE_OPEN_HINT, MULTIPLE_CHOICE_SUBMISSION, FOCUS_ELEMENT } from 'constants/actions.js';
import VOICE_COMMANDS from './voice_commands.json';
import AnswerOptionWithFeedback from './answer_option_feedback.js';
import AnswerOptionIncrFeedback from './answer_option_incr_feedback.js';
import AnswerOption from './answer_option';
import Question from './question.js';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-question' );


// MAIN //

/**
* An ISLE component that renders a multiple choice question. It supports the case where the learner has to select a single answer and when there might be multiple correct answers and all correct ones must be picked.
*
* @property {string} question - the question displayed at the top of the multiple choice component
* @property {number} solution - number denoting which answer is correct or an `array` of the correct answer numbers in case the learner should be able to select multiple answers
* @property {Array} answers - an `array` of answer objects. Each answer should be an object with `content` and `explanation` fields, which denote the displayed answer option and an explanation visible after the question has been submitted to explain why the answer is correct or incorrect
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} disabled - controls whether the question is disabled
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {string} provideFeedback - if `full`, feedback including the correct answer is displayed after learners submit their answers; if `incremental`, feedback is only displayed for the selected answer; if `none`, no feedback is returned
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {boolean} displaySolution - controls whether the solution is displayed upfront
* @property {strings} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked every time the selected answer changes; receives the index of the selected question as its sole argument (or an array in case the question is of type "Choose all that apply")
* @property {Function} onSubmit - callback invoked after an answer is submitted
*/
class MultipleChoiceQuestion extends Component {
	constructor( props ) {
		super( props );

		if ( props.displaySolution ) {
			this.state = {
				submitted: true,
				active: this.props.solution,
				correct: new Array( props.answers.length ),
				answerSelected: false
			};
		} else {
			let active = isArray( this.props.solution ) ?
				new Array( props.answers.length ) :
				null;
			this.state = {
				submitted: false,
				active,
				correct: new Array( props.answers.length ),
				answerSelected: false,
				question: props.question
			};
		}
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.question !== prevState.question ) {
			return {
				submitted: false,
				question: nextProps.question
			};
		}
		return null;
	}

	componentDidMount() {
		if ( this.props.displaySolution ) {
			this.submitQuestion();
		}
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, val ) => {
				if ( type === 'retrieved_current_user_actions' ) {
					let actions = val[ this.props.id ];
					if ( isArray( actions ) ) {
						actions = actions.filter( action => {
							return action.type === 'MULTIPLE_CHOICE_SUBMISSION';
						});
						if ( actions.length > 0 ) {
							const lastAction = actions[ 0 ].value;
							this.setState({
								active: lastAction
							});
						}
					}
				}
			});
		}
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.solution !== this.props.solution ) {
			const active = isArray( this.props.solution ) ?
				new Array( this.props.answers.length ) :
				null;
			this.setState({
				active
			});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: MULTIPLE_CHOICE_OPEN_HINT,
				value: idx
			});
		}
	}

	selectAnswer( no ) {
		debug( `Parse input: ${no}` );
		no = toNumber( no ) - 1;
		debug( `Select answer at position ${no}` );
		this.setState({
			active: no,
			answerSelected: true
		});
	}

	sendSubmitNotification = () => {
		const session = this.context;
		if ( this.state.submitted ) {
			session.addNotification({
				title: 'Answer re-submitted.',
				message: 'You have successfully re-submitted your answer.',
				level: 'success',
				position: 'tr'
			});
		} else {
			let msg = 'You have successfully submitted your answer.';
			if ( this.props.provideFeedback === 'none' ) {
				msg += ' You can change your answer and re-submit if you want to.';
			}
			session.addNotification({
				title: 'Answer submitted.',
				message: msg,
				level: 'success',
				position: 'tr'
			});
		}
	}

	submitQuestion = () => {
		const sol = this.props.solution;
		const session = this.context;
		let newCorrect = this.props.provideFeedback === 'incremental' ?
			this.state.correct.slice() :
			new Array( this.props.answers.length );
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: MULTIPLE_CHOICE_SUBMISSION,
				value: this.state.active
			});
		}
		if ( !this.props.disableSubmitNotification ) {
			this.sendSubmitNotification();
		}
		if ( isArray( sol ) ) {
			for ( let i = 0; i < this.state.active.length; i++ ) {
				if ( this.state.active[ i ] === true ) {
					if ( contains( sol, i ) ) {
						newCorrect[ i ] = true;
					} else {
						newCorrect[ i ] = false;
					}
				}
			}
			let active = new Array( this.props.answers.length );
			this.setState({
				correct: newCorrect,
				submitted: true,
				active
			});
		}
		else {
			for ( let i = 0; i < newCorrect.length; i++ ) {
				if ( this.state.active === i ) {
					if ( i === sol ) {
						newCorrect[ i ] = true;
					} else {
						newCorrect[ i ] = false;
					}
				}
			}
			let active = null;
			this.setState({
				correct: newCorrect,
				submitted: true,
				active
			});
		}
		this.props.onSubmit( this.state.active );
	}

	checkDisabledStatus = () => {
		const allowMultipleAnswers = isArray( this.props.solution ) && isArray( this.state.active );
		if ( this.props.disabled ) {
			return true;
		}
		switch ( this.props.provideFeedback ) {
			case 'full':
				if ( allowMultipleAnswers ) {
					return this.state.submitted;
				}
				return this.state.submitted || !this.state.answerSelected;
			case 'incremental':
				if ( !this.state.submitted ) {
					return false;
				}
				for ( let i = 0; i < this.state.correct.length; i++ ) {
					if ( this.state.correct[ i ] === true ) {
						return true;
					}
				}
				return false;
		}
		return false;
	}

	triggerFocusEvent = () => {
		const session = this.context;
		session.log({
			type: FOCUS_ELEMENT,
			value: session.user.email,
			id: this.props.id,
			noSave: true
		}, 'owners' );
	}

	renderAnswerOptionsMultiple = ( key, id ) => {
		if ( this.props.provideFeedback === 'none' ) {
			return (
				<AnswerOption
					key={key.content}
					answerContent={key.content}
					active={this.state.active[ id ]}
					correct={this.state.correct[ id ]}
					disabled={this.props.disabled}
					onAnswerSelected={() => {
						this.triggerFocusEvent();
						let newActive = this.state.active.slice();
						newActive[ id ] = !newActive[ id ];
						this.setState({
							active: newActive
						});
						this.props.onChange( newActive );
					}}
				/>
			);
		}
		const isSolution = contains( this.props.solution, id );
		const props = {
			key: key.content,
			no: id,
			answerContent: key.content,
			answerExplanation: key.explanation,
			active: this.state.active[ id ],
			correct: this.state.correct[ id ],
			disabled: this.props.disabled,
			submitted: this.state.submitted,
			solution: isSolution,
			onAnswerSelected: () => {
				this.triggerFocusEvent();
				if ( !this.state.submitted || this.props.provideFeedback === 'incremental' ) {
					let newActive = this.state.active.slice();
					newActive[ id ] = !newActive[ id ];
					this.setState({
						active: newActive
					});
					this.props.onChange( newActive );
				}
			}
		};
		return ( <AnswerOptionWithFeedback
			{...props}
		/> );
	}

	renderAnswerOptionsSingle = ( key, id ) => {
		if ( this.props.provideFeedback === 'none' ) {
			return ( <AnswerOption
				key={id}
				answerContent={key.content}
				active={this.state.active === id}
				correct={this.state.correct[ id ]}
				disabled={this.props.disabled}
				onAnswerSelected={() => {
					this.triggerFocusEvent();
					this.setState({
						active: id,
						answerSelected: true
					});
					this.props.onChange( id );
				}}
			/> );
		}
		const isSolution = this.props.solution === id;
		const props = {
			key: id,
			no: id,
			answerContent: key.content,
			answerExplanation: key.explanation,
			active: this.state.active === id,
			correct: this.state.correct[ id ],
			provideFeedback: this.props.provideFeedback,
			disabled: this.props.disabled,
			submitted: this.state.submitted,
			solution: isSolution,
			onAnswerSelected: () => {
				this.triggerFocusEvent();
				if ( !this.state.submitted || this.props.provideFeedback === 'incremental' ) {
					this.setState({
						active: id,
						answerSelected: true
					});
					this.props.onChange( id );
				}
			}
		};
		return this.props.provideFeedback === 'full' ?
			<AnswerOptionWithFeedback
				{...props}
			/> :
			<AnswerOptionIncrFeedback
				{...props}
			/>;
	}

	render() {
		const { answers, hints, chat, hintPlacement, id, question } = this.props;
		const allowMultipleAnswers = isArray( this.props.solution ) && isArray( this.state.active );
		const nHints = hints.length;
		let bodyStyle = {};
		if ( this.props.feedback ) {
			bodyStyle.width = 'calc(100%-60px)';
			bodyStyle.display = 'inline-block';
		} else {
			bodyStyle.width = '100%';
		}
		let submitLabel;
		if ( this.state.submitted ) {
			switch ( this.props.provideFeedback ) {
				case 'none':
					submitLabel = 'Resubmit';
					break;
				case 'full':
				default:
					submitLabel = 'Submitted';
					break;
				case 'incremental':
					submitLabel = 'Submit';
					break;
			}
		} else {
			submitLabel = 'Submit';
		}
		return (
			<Card id={this.props.id} className="multiple-choice-question-container" style={{ ...this.props.style }} >
				<Card.Body style={bodyStyle} >
					<Question
						content={question}
						task={allowMultipleAnswers ? 'Choose all that apply' : 'Select an answer'}
					/>
					<ListGroup>
						{ allowMultipleAnswers ?
							answers.map( this.renderAnswerOptionsMultiple ) :
							answers.map( this.renderAnswerOptionsSingle )
						}
					</ListGroup>
					<div className="multiple-choice-question-toolbar">
						<Button
							className="submit-button"
							size="small"
							variant="success"
							onClick={this.submitQuestion}
							disabled={this.checkDisabledStatus()}
							block
						>{submitLabel}</Button>
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={hints} placement={hintPlacement} /> :
							null
						}
						{
							chat && id ?
							<div style={{ display: 'inline-block' }}>
								<ChatButton for={id} />
							</div> : null
						}
						<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					</div>
					{ id ? <div>
						<ResponseVisualizer
							buttonLabel="Answers"
							id={id}
							data={{
								type: 'factor',
								levels: this.props.answers.map( x => x.content )
							}}
							info="MULTIPLE_CHOICE_SUBMISSION"
						/>
						{ this.props.feedback ? <FeedbackButtons
							id={this.props.id+'_feedback'}
						/> : null }
					</div> : null }
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

MultipleChoiceQuestion.defaultProps = {
	question: '',
	solution: null,
	hints: [],
	hintPlacement: 'bottom',
	feedback: false,
	disabled: false,
	displaySolution: false,
	chat: false,
	provideFeedback: 'incremental',
	disableSubmitNotification: false,
	voiceID: null,
	style: {},
	onChange(){},
	onSubmit(){}
};

MultipleChoiceQuestion.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	solution: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.array
	]),
	answers: PropTypes.array.isRequired,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
	disabled: PropTypes.bool,
	chat: PropTypes.bool,
	provideFeedback: PropTypes.oneOf([ 'none', 'incremental', 'full' ]),
	disableSubmitNotification: PropTypes.bool,
	displaySolution: PropTypes.bool,
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

MultipleChoiceQuestion.contextType = SessionContext;


// EXPORTS //

export default MultipleChoiceQuestion;
