// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import sample from '@stdlib/random/sample';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-plain-object';
import isInteger from '@stdlib/assert/is-integer';
import incrspace from '@stdlib/math/utils/incrspace';
import Timer from 'components/timer';
import FreeTextQuestion from 'components/free-text-question';
import MultipleChoiceQuestion from 'components/multiple-choice-question';
import MatchListQuestion from 'components/match-list-question';
import NumberQuestion from 'components/number-question';
import OrderQuestion from 'components/order-question';
import RangeQuestion from 'components/range-question';
import SelectQuestion from 'components/select-question';
import convertJSONtoJSX from 'utils/json-to-jsx';
import './quiz.css';


// VARIABLES //

const debug = logger( 'isle:quiz' );


// FUNCTIONS //

function isHTMLConfig( elem ) {
	return (
		isObject( elem ) &&
		elem.component
	);
}


// MAIN //

/**
* A quiz component displaying a sequence of question components.
*
* @property {Array} questions - array of questions from which questions will be randomly selected
* @property {number} count - number of questions to include in the quiz
* @property {boolean} confidence - whether to display a Likert scale asking for the confidence of the user's answer
* @property {boolean} forceConfidence - controls whether a user has to supply a confidence level before moving to the next question
* @property {boolean} skippable - controls whether questions in  the quiz are skippable
*/
class Quiz extends Component {
	constructor( props ) {
		super( props );

		const indices = incrspace( 0, props.questions.length, 1 );
		this.sample = sample.factory( indices, {
			size: 1,
			mutate: true,
			replace: false
		});
		this.state = {
			answers: new Array( props.questions.length ),
			answered: false,
			confidences: new Array( props.questions.length ),
			current: this.sample()[ 0 ],
			counter: 0,
			finished: false,
			last: false,
			checked: null
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.count !== prevProps.count ||
			this.props.questions.length !== prevProps.questions.length
		) {
			debug( 'Resetting component...' );
			const indices = incrspace( 0, this.props.questions.length, 1 );
			this.sample = sample.factory( indices, {
				size: 1,
				mutate: true
			});
		}
	}

	handleNextClick = () => {
		debug( 'Display next question...' );
		const newState = {};
		if ( !this.state.answered ) {
			const elem = this.props.questions[ this.state.current ];
			const answers = this.state.answers.slice();
			if ( elem.props ) {
				let solution;
				if ( elem.component === 'MultipleChoiceQuestion' ) {
					const correct = elem.props.solution;
					if ( isArray( correct ) ) {
						solution = '';
						for ( let i = 0; i < correct.length; i++ ) {
							solution += elem.props.answers[ correct[ i ] ];
							solution += '; ';
						}
					} else if ( isInteger( correct ) ) {
						solution = elem.props.answers[ correct ].content;
					}
				}
				else if ( elem.component === 'MatchListQuestion' ) {
					solution = '';
					for ( let i = 0; i < elem.props.elements.length; i++ ) {
						const val = elem.props.elements[ i ];
						solution += `${val.a}:${val.b}; `;
					}
				}
				else {
					solution = elem.props.solution;
				}
				answers[ this.state.current ] = {
					question: elem.props ? elem.props.question : null,
					answer: null,
					solution
				};
				newState.answers = answers;
			}
		}
		let counter = this.state.counter;
		counter += 1;
		if ( counter >= this.props.count ) {
			debug( 'No further questions should be shown...' );
			newState.finished = true;
		} else {
			if ( counter === this.props.count-1 ) {
				newState.last = true;
			}
			newState.current = this.sample()[ 0 ];
			debug( 'Selected question at index '+newState.current );
		}
		newState.answered = false;
		newState.checked = null;
		newState.counter = counter;
		this.setState( newState);
	}

	handleSubmission = ( val ) => {
		const elem = this.props.questions[ this.state.current ];
		const answers = this.state.answers.slice();

		let answer;
		let solution;
		if ( elem.props ) {
			if ( elem.component === 'MultipleChoiceQuestion' ) {
				answer = elem.props.answers[ val ].content;
				const correct = elem.props.solution;
				if ( isArray( correct ) ) {
					solution = '';
					for ( let i = 0; i < correct.length; i++ ) {
						solution += elem.props.answers[ correct[ i ] ];
						solution += '; ';
					}
				} else {
					solution = elem.props.answers[ correct ].content;
				}
			}
			else if ( elem.component === 'MatchListQuestion' ) {
				answer = '';
				solution = '';
				for ( let i = 0; i < elem.props.elements.length; i++ ) {
					const e = elem.props.elements[ i ];
					const userElem = val[ i ];
					solution += `${e.a}:${e.b}; `;
					answer += `${userElem.a}:${userElem.b}; `;
				}
			}
			else {
				answer = val;
				solution = elem.props.solution;
			}

			const session = this.context.session;
			if ( elem.props.id ) {
				session.log({
					id: elem.props.id+'_confidence',
					type: 'QUESTION_CONFIDENCE',
					value: this.state.checked
				});
			}

			answers[ this.state.current ] = {
				question: elem.props ? elem.props.question : null,
				answer,
				solution
			};
		}
		this.setState({
			answered: true,
			answers: answers
		});
	}

	renderScoreboard() {
		debug( 'Rendering scoreboard...' );
		return ( <div>
			<p>{ this.props.duration ? 'Your time is up. ' : 'You have finished the quiz. ' } Here is a summary of your answers:</p>
			<table className="table table-bordered" >
				<thead>
					<tr>
						<th>Question</th>
						<th>Your answer</th>
						<th>Solution</th>
						{ this.props.confidence ? <th>Your Confidence</th> : null }
					</tr>
				</thead>
				<tbody>
					{this.state.answers.map( ( elem, idx ) => {
						let className;
						if ( elem.answer === elem.solution ) {
							className = 'quiz-right-answer';
						} else {
							className = 'quiz-wrong-answer';
						}
						let question = elem.question;
						if ( isHTMLConfig( question ) ) {
							question = convertJSONtoJSX( question );
						}
						let answer = elem.answer;
						if ( isHTMLConfig( answer ) ) {
							answer = convertJSONtoJSX( answer );
						}
						let solution = elem.solution;
						if ( isHTMLConfig( solution ) ) {
							solution = convertJSONtoJSX( solution );
						}
						return ( <tr className={className} key={idx}>
							<td>{question}</td>
							<td>{answer}</td>
							<td>{solution}</td>
							{ this.props.confidence ?
								<td>{this.state.confidences[ idx ]}</td> :
								null
							}
						</tr> );
					})}
				</tbody>
			</table>
		</div> );
	}

	renderCurrentQuestion() {
		const config = this.props.questions[ this.state.current ];
		let props = config.props || {};
		if ( isHTMLConfig( props.question ) ) {
			debug( 'Question property is an object, convert to JSX...' );
			props.question = convertJSONtoJSX( props.question );
		}
		switch ( config.component ) {
			case 'Fragment':
				return convertJSONtoJSX( config );
			case 'FreeTextQuestion':
				return <FreeTextQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'MultipleChoiceQuestion':
				return <MultipleChoiceQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'MatchListQuestion':
				return <MatchListQuestion showSolution={false} {...props} onSubmit={this.handleSubmission} />;
			case 'NumberQuestion':
				return <NumberQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'OrderQuestion':
				return <OrderQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'RangeQuestion':
				return <RangeQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'SelectQuestion':
				return <SelectQuestion provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
		}
	}

	handleConfidenceChange = ( event ) => {
		debug( 'Choosing confidence...' );
		const confidence = event.target.getAttribute( 'data-confidence' );
		const confidences = this.state.confidences.slice();
		confidences[ this.state.current ] = confidence;
		this.setState({
			checked: confidence,
			confidences: confidences
		});
	}

	renderConfidenceSurvey() {
		if ( !this.props.confidence ) {
			return null;
		}
		return (
			<Panel className="center" style={{ width: '75%' }}>
				<FormGroup className="center" >
					<ControlLabel>Please indicate how confident you are in your answer(s):</ControlLabel>
					<br />
					<Radio checked={this.state.checked === 'Guessed'} name="radio-group" data-confidence="Guessed" inline onClick={this.handleConfidenceChange}>
						Guessed
					</Radio>{' '}
					<Radio checked={this.state.checked === 'Somewhat sure'} name="radio-group" data-confidence="Somewhat sure" inline onClick={this.handleConfidenceChange}>
						Somewhat sure
					</Radio>{' '}
					<Radio checked={this.state.checked === 'Confident'} name="radio-group" data-confidence="Confident" inline onClick={this.handleConfidenceChange}>
					Confident
					</Radio>{' '}
				</FormGroup>
			</Panel>
		);
	}

	render() {
		let showButton;
		if ( this.state.finished ) {
			showButton = false;
		} else {
			showButton = this.state.answered || this.props.skippable;
		}
		return (
			<Fragment>
				{this.props.duration ?
					<Timer
						invisible
						id={this.props.id}
						active={this.props.active}
						duration={this.props.duration}
						onTimeUp={() => {
							debug( 'Time is up...' );
							this.setState({
								finished: true
							});
						}}
					/> :
					null
				}
				<Panel>
					<Panel.Heading>
						<Panel.Title>
							{ this.state.finished ?
								<span>Answer Summary</span> :
								<span>Question {this.state.counter+1}/{this.props.count}</span>
							}
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						{ this.state.finished ?
							this.renderScoreboard() :
							<span key={this.state.current}>{this.renderCurrentQuestion()}</span>
						}
						{ showButton ?
							<Button
								className="quiz-button"
								onClick={this.handleNextClick}
								disabled={this.props.forceConfidence && this.state.answered && !this.state.checked}
							>
								{this.state.last ? 'Finish Quiz' : 'Next Question' }
							</Button> :
							null
						}
						{ !this.state.finished ? this.renderConfidenceSurvey() : null }
					</Panel.Body>
				</Panel>
			</Fragment>
		);
	}
}


// TYPES //

Quiz.propTypes = {
	confidence: PropTypes.bool,
	forceConfidence: PropTypes.bool,
	count: PropTypes.number.isRequired,
	questions: PropTypes.array.isRequired,
	active: PropTypes.bool,
	duration: PropTypes.number,
	skippable: PropTypes.bool
};

Quiz.defaultProps = {
	confidence: false,
	forceConfidence: false,
	active: true,
	duration: null,
	skippable: true
};

Quiz.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Quiz;
