// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import isNull from '@stdlib/assert/is-null';
import contains from '@stdlib/assert/contains';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import ChatButton from '@isle-project/components/internal/chat-button';
import HintButton from '@isle-project/components/hint-button';
import FeedbackButtons from '@isle-project/components/feedback';
import GradeFeedbackRenderer from '@isle-project/components/internal/grade-feedback-renderer';
import SessionContext from '@isle-project/session/context.js';
import toNumber from '@isle-project/utils/to-number';
import { OPEN_HINT, SUBMISSION } from '@isle-project/constants/actions.js';
import { FOCUS_ELEMENT, RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import AnswerOptionWithFeedback from './answer_option_feedback.js';
import AnswerOptionIncrFeedback from './answer_option_incr_feedback.js';
import AnswerOption from './answer_option';
import Question from './question.js';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-question' );


// FUNCTIONS //

const hasExplanations = ( answers ) => {
	for ( let i = 0; i < answers.length; i++ ) {
		if ( answers[ i ].explanation ) {
			return true;
		}
	}
	return false;
};


// MAIN //

/**
* An ISLE component that renders a multiple choice question. It supports the case where the learner has to select a single answer and when there might be multiple correct answers and all correct ones must be picked.
*
* @property {(string|node)} question - the question displayed at the top of the multiple choice component
* @property {number} solution - number denoting which answer is correct or an `array` of the correct answer numbers in case the learner should be able to select multiple answers
* @property {Array} answers - an `array` of answer objects. Each answer should be an object with `content` and `explanation` fields, which denote the displayed answer option and an explanation visible after the question has been submitted to explain why the answer is correct or incorrect
* @property {Array<string>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} disabled - controls whether the question is disabled
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {string} provideFeedback - either `full`, `incremental`, or `none`. If `full`, feedback including the correct answer is displayed after learners submit their answers; if `incremental`, feedback is only displayed for the selected answer; if `none`, no feedback is returned
* @property {boolean} disableSubmitNotification - controls whether to disable submission notifications
* @property {boolean} displaySolution - controls whether the solution is displayed upfront
* @property {Date} until - time until students should be allowed to submit answers
* @property {number} points - maximum number of points awarded in grading
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked every time the selected answer changes; receives the index of the selected question as its sole argument (or an array in case the question is of type "Choose all that apply")
* @property {Function} onSubmit - callback invoked after an answer is submitted
*/
class MultipleChoiceQuestion extends Component {
	constructor( props, context ) {
		super( props );

		const value = props.retrieveLastAction( SUBMISSION );
		this.state = {
			correct: new Array( props.answers.length ),
			answerSelected: false,
			question: props.question,
			isSolved: false
		};
		if ( props.displaySolution ) {
			this.state.submitted = true;
			this.state.active = isArray( this.props.solution ) ?
				new Array( this.props.solution.length )
					.fill( false )
					.map( ( x, idx ) => contains( this.props.solution, idx ) ) :
				this.props.solution;
		}
		else if ( isArray( value ) || isNumber( value ) ) {
			this.state.active = value;
			this.state.submitted = true;
		}
		else {
			this.state.active = isArray( this.props.solution ) ?
				new Array( props.answers.length ) :
				null;
			this.state.submitted = false;
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
				if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
					const lastAction = this.props.retrieveLastAction( SUBMISSION );
					if ( lastAction ) {
						this.setState({
							active: lastAction,
							submitted: this.props.provideFeedback === 'none'
						});
					}
				}
			});
		}
	}

	componentDidUpdate( prevProps ) {
		if (
			prevProps.solution !== this.props.solution ||
			prevProps.answers.length !== this.props.answers.length
		) {
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
		this.props.logAction( OPEN_HINT, idx );
	};

	selectAnswer( no ) {
		debug( `Parse input: ${no}` );
		no = toNumber( no ) - 1;
		debug( `Select answer at position ${no}` );
		this.setState({
			active: no,
			answerSelected: true
		});
	}

	sendSubmitNotification = ( isSolved, nCorrectAnswers, nActiveAnswers ) => {
		if ( this.props.displaySolution ) {
			return;
		}
		const session = this.context;
		const { solution } = this.props;
		const hasSolution = !isNull( solution );
		const hasMultipleSolutions = hasSolution && isArray( solution );
		let msg;
		let level = 'success';
		if ( this.props.provideFeedback === 'incremental' && hasSolution ) {
			if ( isSolved ) {
				msg = this.props.t('answer-correct');
			} else {
				level = 'error';
				if ( nCorrectAnswers === 0 || !hasMultipleSolutions ) {
					msg = this.props.t('answer-incorrect-incremental');
				} else if ( nActiveAnswers < solution.length ) {
					msg = this.props.t('answer-incorrect-incremental-missing');
				} else if ( nActiveAnswers === solution.length ) {
					msg = this.props.t('answer-incorrect-incremental-equal');
				}
				else {
					msg = this.props.t('answer-incorrect-incremental-extra');
				}
			}
		}
		else if ( this.props.provideFeedback === 'full' && hasSolution ) {
			if ( isSolved ) {
				msg = this.props.t('answer-correct');
			} else {
				msg = this.props.t('answer-incorrect-full');
				if ( hasExplanations( this.props.answers ) ) {
					msg += this.props.t('answer-incorrect-explanations');
				}
				level = 'error';
			}
		}
		else {
			msg = this.props.t('answer-submitted-nofeedback');
		}
		session.addNotification({
			title: this.props.t('answer-submitted'),
			message: msg,
			level
		});
	};

	submitQuestion = () => {
		const sol = this.props.solution;
		const noSolution = isNull( sol );
		let newCorrect = ( this.props.provideFeedback === 'incremental' && !noSolution ) ?
			this.state.correct.slice() :
			new Array( this.props.answers.length );
		this.props.logAction( SUBMISSION, this.state.active );
		this.props.logScore( 100, 'completed' );
		let isSolved = false;
		if ( isArray( sol ) ) {
			// Case: multiple solutions
			for ( let i = 0; i < this.state.active.length; i++ ) {
				if ( this.state.active[ i ] === true ) {
					if ( contains( sol, i ) ) {
						newCorrect[ i ] = true;
					} else {
						newCorrect[ i ] = false;
					}
				}
			}
			let nActiveAnswers = 0;
			let nCorrectAnswers = 0;
			for ( let i = 0; i < newCorrect.length; i++ ) {
				if ( isBoolean( newCorrect[ i ] ) ) {
					nActiveAnswers += 1;
					if ( newCorrect[ i ] ) {
						nCorrectAnswers += 1;
					}
				}
			}
			if (
				nCorrectAnswers < sol.length ||
				nActiveAnswers > sol.length
			) {
				isSolved = false;
				this.props.logScore( 100 * ( nCorrectAnswers / sol.length ), 'completed' ); // TODO: use auto-grading algorithm here; could customize penalties/scores
			} else {
				isSolved = true;
				this.props.logScore( 100, 'correct' );
			}
			let active = new Array( this.props.answers.length );
			if ( !this.props.disableSubmitNotification ) {
				this.sendSubmitNotification( isSolved, nCorrectAnswers, nActiveAnswers );
			}
			this.setState({
				correct: newCorrect,
				submitted: true,
				isSolved,
				active
			});
		}
		else {
			// Case: `sol` is a number
			for ( let i = 0; i < newCorrect.length; i++ ) {
				if ( this.state.active === i ) {
					if ( i === sol || noSolution ) {
						newCorrect[ i ] = true;
						isSolved = true;
						this.props.logScore( 100, 'correct' );
					} else {
						newCorrect[ i ] = false;
						this.props.logScore( 0, 'correct' );
					}
				}
			}
			let active = null;
			if ( !this.props.disableSubmitNotification ) {
				this.sendSubmitNotification( isSolved );
			}
			this.setState({
				correct: newCorrect,
				submitted: true,
				active,
				isSolved
			});
		}
		this.props.onSubmit( this.state.active );
	};

	checkDisabledStatus = () => {
		const allowMultipleAnswers = isArray( this.props.solution ) && isArray( this.state.active );
		if ( this.props.disabled ) {
			// Case: `disabled` property of the component is set to true
			return true;
		}
		if ( !allowMultipleAnswers && !isNumber( this.state.active ) ) {
			// Case: No answer has been selected for single choice questions
			return true;
		}
		if ( isNull( this.props.solution ) ) {
			// Case: no solution set, hence no feedback is provided and changing one's answer is permitted...
			return false;
		}
		switch ( this.props.provideFeedback ) {
			case 'full':
				// Case: full feedback is provided, so disable the submit button if answer has been submitted...
				if ( allowMultipleAnswers ) {
					return this.state.submitted;
				}
				// For single-answer questions, a single answer has to be selected, so disable the submit button if no answer has been selected...
				return this.state.submitted || !this.state.answerSelected;
			case 'incremental': {
				if ( isNull( this.state.active ) ) {
					// Case: no answer selected, so disable the submit button...
					return true;
				}
				if ( !this.state.submitted ) {
					// Case: answer has not been submitted, so do not disable the submit button...
					return false;
				}
				// Case: Only disable the submit button if the user has selected the correct answer (or ran out of tries)...
				return this.state.isSolved;
			}
		}
		return false;
	};

	triggerFocusEvent = () => {
		const session = this.context;
		this.props.logAction( FOCUS_ELEMENT, session.user.email, {
			noSave: true
		}, 'owners' );
	};

	renderAnswerOptionsMultiple = ( key, id ) => {
		if ( this.props.provideFeedback === 'none' || isNull( this.props.solution ) ) {
			return (
				<AnswerOption
					key={`${key.content}-${id}`}
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
			key: `${key.content}-${id}`,
			no: id,
			answerContent: key.content,
			answerExplanation: key.explanation,
			active: this.state.active[ id ],
			correct: this.state.correct[ id ],
			disabled: this.props.disabled,
			submitted: this.state.submitted,
			solution: isSolution,
			isSolved: this.state.isSolved,
			onAnswerSelected: () => {
				this.triggerFocusEvent();
				if ( !this.state.submitted || this.props.provideFeedback === 'incremental' ) {
					const newActive = this.state.active.slice();
					const newCorrect = this.state.correct.slice();
					if ( this.state.correct[ id ] === false ) {
						newCorrect[ id ] = void 0;
					} else {
						newActive[ id ] = !newActive[ id ];
					}
					this.setState({
						correct: newCorrect,
						active: newActive
					});
					this.props.onChange( newActive );
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
	};

	renderAnswerOptionsSingle = ( key, id ) => {
		if ( this.props.provideFeedback === 'none' || isNull( this.props.solution ) ) {
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
					this.props.logScore( 100, 'interacted' );
				}}
			/> );
		}
		const isSolution = this.props.solution === id;
		const props = {
			key: `${key.content}-${id}`,
			no: id,
			answerContent: key.content,
			answerExplanation: key.explanation,
			active: this.state.active === id,
			correct: this.state.correct[ id ],
			disabled: this.props.disabled,
			submitted: this.state.submitted,
			solution: isSolution,
			isSolved: this.state.isSolved,
			onAnswerSelected: () => {
				this.triggerFocusEvent();
				if ( !this.state.submitted || this.props.provideFeedback === 'incremental' ) {
					const newCorrect = this.state.correct.slice();
					if ( this.state.correct[ id ] === false ) {
						newCorrect[ id ] = void 0;
					}
					this.setState({
						active: id,
						correct: newCorrect,
						answerSelected: true
					});
					this.props.onChange( id );
					this.props.logScore( 100, 'interacted' );
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
	};

	renderSubmitButton() {
		const session = this.context;
		if ( this.props.until && session.startTime > this.props.until ) {
			return <span className="title" style={{ marginLeft: 4 }} >{this.props.t('question-closed')}</span>;
		}
		let submitLabel;
		if ( this.state.submitted ) {
			switch ( this.props.provideFeedback ) {
				case 'none':
					submitLabel = this.props.t('resubmit');
					break;
				case 'full':
				default:
					submitLabel = this.props.t('submitted');
					break;
				case 'incremental':
					submitLabel = this.props.t('submit');
					break;
			}
		} else {
			submitLabel = this.props.t('submit');
		}
		return (
			<div className="d-grid" >
				<Button
					className="submit-button"
					size="small"
					onClick={this.submitQuestion}
					disabled={this.checkDisabledStatus()}
				>{submitLabel}</Button>
			</div>
		);
	}

	render() {
		const { answers, hints, chat, hintPlacement, question } = this.props;
		const allowMultipleAnswers = isArray( this.props.solution ) && isArray( this.state.active );
		const nHints = hints.length;
		let bodyStyle = {};
		if ( this.props.feedback ) {
			bodyStyle.width = 'calc(100%-60px)';
			bodyStyle.display = 'inline-block';
		} else {
			bodyStyle.width = '100%';
		}
		return (
			<Card id={this.props.id} className="multiple-choice-question-container" style={{ ...this.props.style }} >
				<Card.Body style={bodyStyle} >
					<Question
						content={question}
						task={allowMultipleAnswers ? this.props.t('chose-all-apply') : this.props.t('select-answer')}
					/>
					<ListGroup>
						{ allowMultipleAnswers ?
							answers.map( this.renderAnswerOptionsMultiple ) :
							answers.map( this.renderAnswerOptionsSingle )
						}
					</ListGroup>
					<div className="multiple-choice-question-toolbar">
						{this.renderSubmitButton()}
						{ nHints > 0 ?
							<HintButton size="small" onClick={this.logHint} hints={hints} placement={hintPlacement} /> :
							null
						}
						{
							chat && this.props.id ?
							<div style={{ display: 'inline-block' }}>
								<ChatButton size="small" for={this.props.id} />
							</div> : null
						}
					</div>
					{ this.props.id ? <div style={{ marginTop: '6px' }}>
						<ResponseVisualizer
							buttonLabel={this.props.t('answers')}
							id={this.props.id}
							data={{
								type: 'factor',
								levels: this.props.answers.map( x => x.content ),
								question: this.props.question,
								solution: this.props.solution
							}}
							info="MULTIPLE_CHOICE_SUBMISSION"
							points={this.props.points}
						/>
						{ this.props.feedback ? <FeedbackButtons
							id={this.props.id+'_feedback'}
						/> : null }
					</div> : null }
					<GradeFeedbackRenderer for={this.props.id} points={this.props.points} />
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
	feedback: true,
	disabled: false,
	displaySolution: false,
	chat: false,
	provideFeedback: 'incremental',
	disableSubmitNotification: false,
	until: null,
	points: 10,
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
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	feedback: PropTypes.bool,
	disabled: PropTypes.bool,
	chat: PropTypes.bool,
	provideFeedback: PropTypes.oneOf([ 'none', 'incremental', 'full' ]),
	disableSubmitNotification: PropTypes.bool,
	displaySolution: PropTypes.bool,
	until: PropTypes.instanceOf( Date ),
	points: PropTypes.number,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

MultipleChoiceQuestion.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'MULTIPLE_CHOICE_QUESTION' )( withTranslation( 'questions/multiple-choice' )( withPropCheck( MultipleChoiceQuestion ) ) );
