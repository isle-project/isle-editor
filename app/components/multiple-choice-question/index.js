// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import InstructorBar from 'components/instructor-bar';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import FeedbackButtons from 'components/feedback';
import AnswerOption from './answer_option.js';
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
* @property {boolean} provideFeedback - indicates whether feedback including the correct answer should be displayed after learners submit their answers
* @property {boolean} displaySolution - controls whether the solution is displayed upfront
* @property {Object} style - CSS inline styles
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
		const { session } = this.context;
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
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'MULTIPLE_CHOICE_OPEN_HINT',
				value: idx
			});
		}
	}

	submitQuestion = () => {
		let sol = this.props.solution;
		let newCorrect = new Array( this.props.answers.length );
		if ( this.props.id ) {
			const { session } = this.context;
			session.log({
				id: this.props.id,
				type: 'MULTIPLE_CHOICE_SUBMISSION',
				value: this.state.active
			});
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

	render() {
		const { answers, hints, chat, hintPlacement, id, question } = this.props;
		const allowMultipleAnswers = isArray( this.props.solution ) && isArray( this.state.active );
		const nHints = hints.length;
		const renderAnswerOptionsMultiple = ( key, id ) => {
			let isSolution = contains( this.props.solution, id );
			return (
				<AnswerOption
					key={key.content}
					no={id}
					answerContent={key.content}
					answerExplanation={key.explanation}
					active={this.state.active[ id ]}
					correct={this.state.correct[ id ]}
					disabled={this.props.disabled}
					provideFeedback={this.props.provideFeedback}
					submitted={this.state.submitted}
					solution={isSolution}
					onAnswerSelected={() => {
						if ( !this.state.submitted ) {
							let newActive = this.state.active.slice();
							newActive[ id ] = !newActive[ id ];
							this.setState({
								active: newActive
							});
						}
					}}
				/>
			);
		};

		const renderAnswerOptionsSingle = ( key, id ) => {
			let isSolution = this.props.solution === id;
			return (
				<AnswerOption
					key={id}
					no={id}
					answerContent={key.content}
					answerExplanation={key.explanation}
					active={this.state.active === id}
					correct={this.state.correct[ id ]}
					disabled={this.props.disabled}
					provideFeedback={this.props.provideFeedback}
					submitted={this.state.submitted}
					solution={isSolution}
					onAnswerSelected={() => {
						if ( !this.state.submitted ) {
							this.setState({
								active: id,
								answerSelected: true
							});
						}
					}}
				/>
			);
		};

		let disabled;
		if ( allowMultipleAnswers ) {
			disabled = this.props.disabled || this.state.submitted;
		} else {
			disabled = this.props.disabled || this.state.submitted || !this.state.answerSelected;
		}
		let bodyStyle = {};
		if ( this.props.feedback ) {
			bodyStyle.width = 'calc(100%-60px)';
			bodyStyle.display = 'inline-block';
		} else {
			bodyStyle.width = '100%';
		}

		return (
			<Panel className="multiple-choice-question-container" style={{ ...this.props.style }} >
				<Panel.Body style={bodyStyle} >
					<Question
						content={question}
						task={allowMultipleAnswers ? 'Choose all that apply' : 'Select an answer'}
					/>
					<ListGroup>
						{ allowMultipleAnswers ?
							answers.map( renderAnswerOptionsMultiple ) :
							answers.map( renderAnswerOptionsSingle )
						}
					</ListGroup>
					<div className="multiple-choice-question-toolbar">
						<Button
							bsSize="small"
							bsStyle="success"
							onClick={this.submitQuestion}
							disabled={disabled}
							block
						>{ this.state.submitted ? 'Submitted' : 'Submit'}</Button>
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
					</div>
					{id ? <InstructorBar buttonLabel="Answers" id={id} dataType="factor" /> : null }
				</Panel.Body>
				{ this.props.id && this.props.feedback ? <FeedbackButtons
					vertical
					id={this.props.id+'_feedback'}
				/> : null }
			</Panel>
		);
	}
}


// PROPERTIES //

MultipleChoiceQuestion.defaultProps = {
	question: '',
	hints: [],
	hintPlacement: 'bottom',
	feedback: false,
	disabled: false,
	displaySolution: false,
	chat: false,
	provideFeedback: true,
	style: {},
	onSubmit(){}
};

MultipleChoiceQuestion.propTypes = {
	question: PropTypes.string,
	solution: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.array
	]).isRequired,
	answers: PropTypes.array.isRequired,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	feedback: PropTypes.bool,
	disabled: PropTypes.bool,
	chat: PropTypes.bool,
	provideFeedback: PropTypes.bool,
	displaySolution: PropTypes.bool,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

MultipleChoiceQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MultipleChoiceQuestion;
