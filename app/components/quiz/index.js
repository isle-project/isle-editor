// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Card from 'react-bootstrap/lib/Card';
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
import Gate from 'components/gate';
import SessionContext from 'session/context.js';
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
* @property {boolean} active - controls whether the timer for the quiz is active
* @property {number} duration - duration of the quiz; once time is up, the summary page will be displayed
* @property {Function} onFinished - callback invoked when the quiz is finished and the results page is displayed
* @property {Function} onSubmit - callback invoked when user submits an answer
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
			count: props.count || props.questions.length,
			counter: 0,
			finished: false,
			last: false,
			selectedConfidence: null,
			showInstructorView: false
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
			this.setState({
				count: this.props.count || this.prop.questions.length
			});
		}
	}

	handleFinishClick = () => {
		this.setState({
			counter: this.state.count
		}, () => {
			this.handleNextClick();
		});
	}

	handleNextClick = () => {
		// Submit all questions on the current page:
		const elems = this.quizBody.getElementsByClassName( 'submit-button' );
		for ( let i = 0; i < elems.length; i++ ) {
			elems[ i ].click();
		}
		debug( 'Display next question...' );
		const elem = this.props.questions[ this.state.current ];

		// Save chosen confidence level:
		if ( elem.props && elem.props.id && this.state.selectedConfidence ) {
			const session = this.context;
			session.log({
				id: elem.props.id+'_confidence',
				type: 'QUESTION_CONFIDENCE',
				value: this.state.selectedConfidence
			});
		}
		this.props.onSubmit();
		const newState = {};
		let counter = this.state.counter;
		counter += 1;
		if ( counter >= this.state.count ) {
			debug( 'No further questions should be shown...' );
			newState.finished = true;
			this.props.onFinished();
		} else {
			if ( counter === this.state.count-1 ) {
				newState.last = true;
			}
			newState.current = this.sample()[ 0 ];
			debug( 'Selected question at index '+newState.current );
		}
		if ( !this.state.answered ) {
			const answers = this.state.answers.slice();
			if ( elem.props ) {
				let solution;
				if (
					elem.component === 'MultipleChoiceQuestion' ||
					elem.type === MultipleChoiceQuestion ||
					( elem.type && elem.type.name === 'MultipleChoiceQuestion' )
				) {
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
				else if (
					elem.component === 'MatchListQuestion' ||
					elem.type === MatchListQuestion ||
					( elem.type && elem.type.name === 'MatchListQuestion' )
				) {
					solution = '';
					for ( let i = 0; i < elem.props.elements.length; i++ ) {
						const val = elem.props.elements[ i ];
						solution += `${val.a}:${val.b}; `;
					}
				}
				else if (
					elem.component === 'OrderQuestion' ||
					elem.type === OrderQuestion ||
					( elem.type && elem.type.name === 'OrderQuestion' )
				) {
					solution = '';
					for ( let i = 0; i < elem.props.options.length; i++ ) {
						const val = elem.props.options[ i ];
						solution += `${val.text}; `;
					}
				}
				else {
					solution = elem.props.solution;
					if ( isArray( solution ) ) {
						solution = solution.join( ', ' );
					}
				}
				answers[ this.state.current ] = {
					question: elem.props ? elem.props.question : null,
					answer: null,
					counter,
					solution
				};
				newState.answers = answers;
			}
		}
		newState.answered = false;
		newState.selectedConfidence = null;
		newState.counter = counter;
		this.setState( newState);
	}

	handleSubmission = ( val ) => {
		const elem = this.props.questions[ this.state.current ];
		const answers = this.state.answers.slice();

		let answer;
		let solution;
		if ( elem.props ) {
			if (
				elem.component === 'MultipleChoiceQuestion' ||
				elem.type === MultipleChoiceQuestion ||
				( elem.type && elem.type.name === 'MultipleChoiceQuestion' )
			) {
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
			else if (
				elem.component === 'MatchListQuestion' ||
				elem.type === MatchListQuestion ||
				( elem.type && elem.type.name === 'MatchListQuestion' )
			) {
				answer = '';
				solution = '';
				for ( let i = 0; i < elem.props.elements.length; i++ ) {
					const e = elem.props.elements[ i ];
					const userElem = val[ i ];
					solution += `${e.a}:${e.b}; `;
					answer += `${userElem.a}:${userElem.b}; `;
				}
			}
			else if (
				elem.component === 'OrderQuestion' ||
				elem.type === OrderQuestion ||
				( elem.type && elem.type.name === 'OrderQuestion' )
			) {
				answer = '';
				solution = '';
				for ( let i = 0; i < elem.props.options.length; i++ ) {
					const e = elem.props.options[ i ];
					const userElem = val[ i ];
					solution += `${e.text}; `;
					answer += `${userElem.text}; `;
				}
			}
			else {
				answer = val;
				solution = elem.props.solution;
				if ( isArray( solution ) ) {
					answer = answer.join( ', ' );
					solution = solution.join( ', ' );
				}
			}
			answers[ this.state.current ] = {
				question: elem.props ? elem.props.question : null,
				answer,
				solution,
				counter: this.state.counter
			};
		}
		this.setState({
			answered: true,
			answers: answers
		});
	}

	renderScoreboard() {
		debug( 'Rendering scoreboard...' );
		const answers = this.state.answers.slice();
		for ( let i = 0; i < this.state.answers.length; i++ ) {
			if ( answers[ i ] ) {
				answers[ i ].confidence = this.state.confidences[ i ];
			}
		}
		answers.sort( ( a, b ) => a.counter > b.counter );
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
					{answers.map( ( elem, idx ) => {
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
								<td>{elem.confidence}</td> :
								null
							}
						</tr> );
					})}
				</tbody>
			</table>
		</div> );
	}

	renderQuestion( config ) {
		const props = config.props || {};
		if ( isHTMLConfig( props.question ) ) {
			debug( 'Question property is an object, convert to JSX...' );
			props.question = convertJSONtoJSX( props.question );
		}
		switch ( config.component ) {
			case 'Fragment':
			case 'div':
				return convertJSONtoJSX( config );
			case 'FreeTextQuestion':
				return <FreeTextQuestion disableSubmitNotification provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'MultipleChoiceQuestion':
				return <MultipleChoiceQuestion disableSubmitNotification provideFeedback="none" {...props} onSubmit={this.handleSubmission} />;
			case 'MatchListQuestion':
				return <MatchListQuestion disableSubmitNotification showSolution={false} {...props} onSubmit={this.handleSubmission} />;
			case 'NumberQuestion':
				return <NumberQuestion disableSubmitNotification provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'OrderQuestion':
				return <OrderQuestion disableSubmitNotification provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'RangeQuestion':
				return <RangeQuestion disableSubmitNotification provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			case 'SelectQuestion':
				return <SelectQuestion disableSubmitNotification provideFeedback={false} {...props} onSubmit={this.handleSubmission} />;
			default:
				// Case: `config` already is a React component, clone it to pass in submit handler:
				return <config.type {...config.props} {...props} disableSubmitNotification provideFeedback={false} onSubmit={this.handleSubmission} />;
		}
	}

	handleConfidenceChange = ( event ) => {
		const confidence = event.target.value;
		debug( 'Choosing confidence: '+confidence );
		const confidences = this.state.confidences.slice();
		confidences[ this.state.current ] = confidence;
		this.setState({
			selectedConfidence: confidence,
			confidences: confidences
		});
	}

	toggleInstructorView =() => {
		this.setState({
			showInstructorView: !this.state.showInstructorView
		});
	}

	renderConfidenceSurvey() {
		if ( !this.props.confidence ) {
			return null;
		}
		return (
			<Card className="center" style={{ width: '75%' }}>
				<FormGroup className="center" >
					<label>Please indicate how confident you are in your answer(s):</label>
					<br />
					<Form.Check
						type="radio"
						label="Guessed"
						checked={this.state.selectedConfidence === 'Guessed'}
						value="Guessed"
						inline
						onClick={this.handleConfidenceChange}
					/>
					{' '}
					<Form.Check
						type="radio"
						label="Somewhat sure"
						checked={this.state.selectedConfidence === 'Somewhat sure'}
						value="Somewhat sure"
						inline
						onClick={this.handleConfidenceChange}
					/>
					{' '}
					<Form.Check
						type="radio"
						label="Confident"
						checked={this.state.selectedConfidence === 'Confident'}
						value="Confident"
						inline
						onClick={this.handleConfidenceChange}
					/>
				</FormGroup>
			</Card>
		);
	}

	renderFooterNodes( elem ) {
		const id = elem.props.id;
		return React.Children.map( this.props.footerNodes, ( child, idx ) => {
			return React.cloneElement( child, {
				id: `${child.props.id}-${id}`,
				key: `${this.state.current}-${idx}`
			});
		});
	}

	render() {
		let showButton;
		if ( this.state.finished ) {
			showButton = false;
		} else {
			showButton = this.state.answered || this.props.skippable;
		}
		if ( this.state.showInstructorView ) {
			return ( <Card className="quiz">
				<Card.Header>
					<span>
						Instructor View
						<Button
							variant="secondary"
							style={{ float: 'right' }}
							onClick={this.toggleInstructorView}
						>
							Close Instructor View
						</Button>
					</span>
				</Card.Header>
				<Card.Body>
					{this.props.questions.map( ( elem, idx ) => {
						return ( <div key={idx}>
							<h3>Question {idx+1}:</h3>
							{this.renderQuestion( elem )}
							{this.renderFooterNodes( elem )}
						</div> );
					})}
				</Card.Body>
				<Button
					className="quiz-button"
					variant="secondary"
					onClick={this.toggleInstructorView}
				>
					Close Instructor View
				</Button>
			</Card> );
		}
		const currentConfig = this.props.questions[ this.state.current ];
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
							}, () => {
								this.props.onFinished();
							});
						}}
					/> :
					null
				}
				<Card className="quiz" >
					<Card.Header>
						{ this.state.finished ?
							<span>Answer Summary</span> :
							<span>Question {this.state.counter+1}/{this.state.count}</span>
						}
					</Card.Header>
					<Card.Body>
						<div ref={( card ) => {
							this.quizBody = card;
						}} >
							{ this.state.finished ?
								this.renderScoreboard() :
								<span key={this.state.current}>{this.renderQuestion( currentConfig )}</span>
							}
							{ !this.state.finished ? this.renderConfidenceSurvey() : null }
							{this.renderFooterNodes( currentConfig )}
							<ButtonGroup style={{ float: 'right' }}>
								<Gate owner>
										<Button
											className="quiz-button"
											variant="secondary"
											onClick={this.toggleInstructorView}
											style={{ marginRight: 10 }}
										>
											Open Instructor View
										</Button>
								</Gate>
							{
									this.props.showFinishButton || this.state.last ?
										<Button
											style={{ marginRight: 10 }}
											className="quiz-button"
											variant="secondary"
											onClick={this.handleFinishClick}
										>
											{this.props.finishLabel}
										</Button> : null
								}
								{ showButton && !this.state.last ?
									<Button
										className="quiz-button"
										variant="primary"
										onClick={this.handleNextClick}
										disabled={this.props.forceConfidence && this.state.answered && !this.state.selectedConfidence}
									>
										{this.props.nextLabel}
									</Button> :
									null
								}
							</ButtonGroup>
						</div>
					</Card.Body>
				</Card>
			</Fragment>
		);
	}
}


// TYPES //

Quiz.propTypes = {
	confidence: PropTypes.bool,
	forceConfidence: PropTypes.bool,
	count: PropTypes.number,
	questions: PropTypes.array.isRequired,
	active: PropTypes.bool,
	duration: PropTypes.number,
	skippable: PropTypes.bool,
	footerNodes: PropTypes.array,
	nextLabel: PropTypes.string,
	showFinishButton: PropTypes.bool,
	finishLabel: PropTypes.string,
	onFinished: PropTypes.func,
	onSubmit: PropTypes.func
};

Quiz.defaultProps = {
	confidence: false,
	forceConfidence: false,
	count: null,
	active: true,
	duration: null,
	skippable: true,
	footerNodes: [],
	nextLabel: 'Next Question',
	showFinishButton: false,
	finishLabel: 'Finish Quiz',
	onFinished() {},
	onSubmit() {}
};

Quiz.contextType = SessionContext;


// EXPORTS //

export default Quiz;
