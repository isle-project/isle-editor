// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Panel from 'react-bootstrap/lib/Panel';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import InstructorBar from 'components/instructor-bar';
import AnswerOption from './answer_option.js';
import Question from './question.js';


// MAIN //

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

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
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
		const props = this.props;
		const allowMultipleAnswers = isArray( this.props.solution );

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

		return (
			<Panel className="multiple-choice-question-container">
				<Panel.Body>
					<Question
						content={props.question}
						task={allowMultipleAnswers ? 'Choose all that apply' : 'Pick the correct answer'}
					/>
					<ListGroup>
						{ allowMultipleAnswers ?
							props.answers.map( renderAnswerOptionsMultiple ) :
							props.answers.map( renderAnswerOptionsSingle )
						}
					</ListGroup>
					<Button
						bsSize="small"
						bsStyle="success"
						block
						onClick={this.submitQuestion}
						disabled={disabled}
					>{ this.state.submitted ? 'Submitted' : 'Submit'}</Button>
					{props.id ? <InstructorBar id={props.id} dataType="factor" /> : null }
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

MultipleChoiceQuestion.defaultProps = {
	disabled: false,
	displaySolution: false,
	provideFeedback: true,
	onSubmit(){},
	question: ''
};


// PROPERTY TYPES //

MultipleChoiceQuestion.propDescriptions = {
	'question': 'the question displayed at the top of the multiple choice component',
	'solution': 'number denoting which answer is correct or an `array` of the correct answer numbers in case the learner should be able to select multiple answers',
	'answers': 'an `array` of answer objects. Each answer should be an object with `content` and `explanation` fields, which denote the displayed answer option and an explanation visible after the question has been submitted to explain why the answer is correct or incorrect',
	'disabled': 'controls whether the question is disabled',
	'provideFeedback': 'indicates whether feedback including the correct answer should be displayed after learners submit their answers',
	'displaySolution': 'controls whether the solution is displayed upfront',
	'onSubmit': 'callback invoked after an answer is submitted'
};

MultipleChoiceQuestion.propTypes = {
	question: PropTypes.string,
	solution: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.array
	]).isRequired,
	answers: PropTypes.array.isRequired,
	disabled: PropTypes.bool,
	provideFeedback: PropTypes.bool,
	displaySolution: PropTypes.bool,
	onSubmit: PropTypes.func
};

MultipleChoiceQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MultipleChoiceQuestion;
