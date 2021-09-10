// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import pdfMake from 'pdfmake/build/pdfmake';
import { withTranslation } from 'react-i18next';
import innerText from 'react-innertext';
import FormGroup from 'react-bootstrap/FormGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import sample from '@stdlib/random/sample';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-plain-object';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import incrspace from '@stdlib/array/incrspace';
import Timer from '@isle-project/components/timer';
import FreeTextQuestion from '@isle-project/components/questions/free-text';
import MultipleChoiceQuestion from '@isle-project/components/questions/multiple-choice';
import MatchListQuestion from '@isle-project/components/questions/match-list';
import NumberQuestion from '@isle-project/components/questions/number';
import OrderQuestion from '@isle-project/components/questions/order';
import RangeQuestion from '@isle-project/components/questions/range';
import SelectQuestion from '@isle-project/components/questions/select';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import convertJSONtoJSX from '@isle-project/utils/json-to-jsx';
import generateUID from '@isle-project/utils/uid';
import { QUESTION_CONFIDENCE, QUESTION_SKIPPED, QUIZ_FINISHED } from '@isle-project/constants/actions.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import isHTMLConfig from './is_html_config.js';
import FinishModal from './finish_modal.js';
import 'pdfmake/build/vfs_fonts.js';
import './quiz.css';


// VARIABLES //

const debug = logger( 'isle:quiz' );
const uid = generateUID( 'quiz' );
const DOC_STYLES = {
	header: {
		fontSize: 24,
		bold: true,
		margin: [0, 0, 0, 10]
	},
	author: {
		fontSize: 16,
		italics: true,
		margin: [0, 0, 0, 10],
		alignment: 'center'
	},
	date: {
		fontSize: 16,
		italics: true,
		alignment: 'right',
		margin: [0, 15, 0, 15]
	},
	subheader: {
		fontSize: 18,
		bold: true,
		margin: [0, 30, 0, 10]
	},
	question: {
		fontSize: 15,
		margin: [0, 10, 0, 0],
		italics: true
	},
	boldTitle: {
		fontSize: 14,
		margin: [0, 5, 0, 5],
		bold: true
	}
};


// MAIN //

/**
* A quiz component displaying a sequence of question components.
*
* @property {Array} questions - array of questions from which questions will be randomly selected
* @property {number} count - number of questions to include in the quiz
* @property {boolean} confidence - whether to display a Likert scale asking for the confidence of the user's answer
* @property {boolean} forceConfidence - controls whether a user has to supply a confidence level before moving to the next question
* @property {boolean} skippable - controls whether questions in  the quiz are skippable
* @property {Array} footerNodes - array of nodes to be displayed in the footer of each question
* @property {string} nextLabel - label of button to advance to next question
* @property {boolean} showFinishButton - controls whether to display button to finish quiz and jump directly to results page
* @property {string} finishLabel - label of button to finish quiz
* @property {boolean} provideFeedback - controls whether to show students feedback on correctness of their answers after quiz completion
* @property {boolean} active - controls whether the timer for the quiz is active
* @property {number} duration - duration of the quiz (in minutes); once time is up, the summary page will be displayed
* @property {boolean} downloadButton - controls whether to display a button for downloading the responses
* @property {Function} onFinished - callback invoked when the quiz is finished and the results page is displayed
* @property {Function} onSubmit - callback invoked when user submits an answer
*/
class Quiz extends Component {
	constructor( props ) {
		debug( 'Instantiating quiz component...' );
		super( props );

		this.id = props.id || uid( props );

		let questions = props.questions;
		if ( !props.questions ) {
			questions = [];
		}
		let current = null;
		if ( questions.length > 0 ) {
			const indices = incrspace( 0, questions.length, 1 );
			this.sample = sample.factory( indices, {
				size: 1,
				mutate: true,
				replace: false
			});
			current = this.sample()[ 0 ];
		}
		this.state = {
			answers: new Array( questions.length ),
			answered: false,
			confidences: new Array( questions.length ),
			current,
			count: props.count || questions.length,
			counter: 0,
			finished: false,
			answerSelected: false,
			last: false,
			selectedConfidence: null,
			showInstructorView: false,
			showFinishModal: false,
			questions: [],
			questionIDs: []
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.questions &&
			nextProps.questions.length !== prevState.questions.length
		) {
			const len = nextProps.questions.length;
			const questionIDs = new Array( len );
			for ( let i = 0; i < len; i++ ) {
				const question = nextProps.questions[ i ];
				if ( question.props && question.props.id ) {
					questionIDs[ i ] = question.props.id;
				} else {
					questionIDs[ i ] = `${prevState.id}-${i}`;
				}
			}
			const newState = {
				questions: nextProps.questions,
				questionIDs
			};
			return newState;
		}
		return null;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Component did update...' );
		if (
			this.props.count !== prevProps.count ||
			( this.props.questions && this.props.questions.length !== prevProps.questions.length )
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

	toggleFinishModal = () => {
		this.setState({
			showFinishModal: !this.state.showFinishModal
		});
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
		const elem = this.state.questions[ this.state.current ];

		const session = this.context;
		if ( !this.state.answered ) {
			session.log({
				id: elem.props.id,
				type: QUESTION_SKIPPED,
				value: true
			});
		}

		// Save chosen confidence level:
		if ( elem.props && elem.props.id && this.state.selectedConfidence ) {
			session.log({
				id: elem.props.id+'_confidence',
				type: QUESTION_CONFIDENCE,
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
			session.log({
				id: this.id,
				type: QUIZ_FINISHED,
				value: true
			});
			this.props.onFinished();
		} else {
			if ( counter === this.state.count-1 ) {
				newState.last = true;
			}
			newState.current = this.sample()[ 0 ];
			debug( 'Selected question at index '+newState.current );
		}
		newState.answered = false;
		newState.selectedConfidence = null;
		newState.answerSelected = false;
		newState.counter = counter;
		this.setState( newState);
	}

	markSelected = () => {
		debug( 'Mark answer as selected...' );
		this.setState({
			answerSelected: true
		});
	}

	handleSubmission = ( val ) => {
		const elem = this.state.questions[ this.state.current ];
		const answers = this.state.answers.slice();
		let answer;
		let solution;
		if ( elem.props ) {
			if (
				// Case: 'MultipleChoiceQuestion'
				isArray( elem.props.answers ) && ( elem.props.solution !== void 0 )
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
				// Case: 'MatchListQuestion'
				isArray( elem.props.elements )
			) {
				debug( 'Create answer and solution string for <MatchListQuestion />' );
				answer = '';
				solution = '';
				for ( let i = 0; i < elem.props.elements.length; i++ ) {
					const e = elem.props.elements[ i ];
					for ( let j = 0; j < val.length; j++ ) {
						const userElem = val[ j ];
						if ( userElem.a === e.a ) {
							answer += `${userElem.a}:${userElem.b}; `;
							break;
						}
					}
					solution += `${e.a}:${e.b}; `;
				}
			}
			else if (
				// Case: 'OrderQuestion'
				isArray( elem.props.options )
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
				// Case: Other question types...
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

	downloadResponsesFactory( answers ) {
		return () => {
			const doc = {
				content: [
					{
						text: this.props.t('answer-for', { id: this.id }),
						style: 'header',
						alignment: 'center'
					}
				],
				styles: DOC_STYLES
			};
			const session = this.context;
			if ( !isEmptyObject( session.user ) ) {
				doc.content.push({
					text: `${this.props.t('by')} ${session.user.name} (${session.user.email})`,
					style: 'author'
				});
			}
			const date = new Date();
			doc.content.push({
				text: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
				style: 'date'
			});
			for ( let i = 0; i < answers.length; i++ ) {
				let { question, answer, solution, confidence } = answers[ i ];
				question = isString( question ) ? question : innerText( question );
				answer = isString( answer ) ? answer : innerText( answer );
				solution = isString( solution ) ? solution : innerText( solution );
				doc.content.push({
					text: question,
					style: 'question'
				});
				doc.content.push({
					text: `${this.props.t('answer')}:`,
					style: 'boldTitle'
				});
				doc.content.push({
					text: answer,
					style: {
						color: answer === solution ? '#3c763d' : '#d9534f',
						margin: [0, 0, 0, 10]
					}
				});
				if ( confidence ) {
					doc.content.push({
						text: `${this.props.t('your-confidence')}:`,
						style: 'boldTitle'
					});
					doc.content.push({
						text: confidence
					});
				}
				doc.content.push({
					text: `${this.props.t('solution')}:`,
					style: 'boldTitle'
				});
				doc.content.push({
					text: isString( solution ) ? solution : innerText( solution )
				});
			}
			pdfMake.createPdf( doc ).download( 'responses.pdf' );
		};
	}

	renderScoreboard() {
		debug( 'Rendering scoreboard...' );
		if ( !this.props.provideFeedback ) {
			return <h3>{this.props.t('quiz-finished')}</h3>;
		}
		let answers = this.state.answers.slice();
		for ( let i = 0; i < answers.length; i++ ) {
			if ( answers[ i ] ) {
				answers[ i ].confidence = this.state.confidences[ i ];
			}
		}
		answers.sort( ( a, b ) => a.counter > b.counter );
		answers = answers.filter( x => isObject( x ) );
		return ( <div>
			<p>{ this.props.duration ? this.props.t('time-up') : this.props.t('quiz-finished') }{this.props.t('summary-label')}:</p>
			<table className="table table-bordered" >
				<thead>
					<tr>
						<th>{this.props.t('question')}</th>
						<th>{this.props.t('your-answer')}</th>
						<th>{this.props.t('solution')}</th>
						{ this.props.confidence ? <th>{this.props.t('your-confidence')}</th> : null }
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
			{this.props.downloadButton ? <Button onClick={this.downloadResponsesFactory( answers )} >
				{this.props.t('download-pdf')}
			</Button> : null}
		</div> );
	}

	renderQuestion( config, id ) {
		if ( !config ) {
			return null;
		}
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
				return <FreeTextQuestion disableSubmitNotification feedback={false} provideFeedback={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'MultipleChoiceQuestion':
				return <MultipleChoiceQuestion disableSubmitNotification feedback={false} provideFeedback="none" {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'MatchListQuestion':
				return <MatchListQuestion disableSubmitNotification feedback={false} showSolution={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'NumberQuestion':
				return <NumberQuestion disableSubmitNotification feedback={false} provideFeedback={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'OrderQuestion':
				return <OrderQuestion disableSubmitNotification feedback={false} provideFeedback={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'RangeQuestion':
				return <RangeQuestion disableSubmitNotification feedback={false} provideFeedback={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			case 'SelectQuestion':
				return <SelectQuestion disableSubmitNotification feedback={false} provideFeedback={false} {...props} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
			default:
				// Case: `config` already is a React component, clone it to pass in submit handler:
				return <config.type {...config.props} {...props} disableSubmitNotification feedback={false} provideFeedback={false} onChange={this.markSelected} onSubmit={this.handleSubmission} id={id} />;
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
					<Form.Label>
						{this.props.t('confidence-prompt')}
					</Form.Label>
					<br />
					<Form.Check
						type="radio"
						label={this.props.t('guessed')}
						checked={this.state.selectedConfidence === 'Guessed'}
						value="Guessed"
						inline
						onClick={this.handleConfidenceChange}
					/>
					{' '}
					<Form.Check
						type="radio"
						label={this.props.t('somewhat-sure')}
						checked={this.state.selectedConfidence === 'Somewhat sure'}
						value="Somewhat sure"
						inline
						onClick={this.handleConfidenceChange}
					/>
					{' '}
					<Form.Check
						type="radio"
						label={this.props.t('confident')}
						checked={this.state.selectedConfidence === 'Confident'}
						value="Confident"
						inline
						onClick={this.handleConfidenceChange}
					/>
				</FormGroup>
			</Card>
		);
	}

	renderFooterNodes( elem, idx ) {
		let id;
		if ( elem.props ) {
			id = elem.props.id;
		}
		if ( !id ) {
			id = `${this.id}-${idx}`;
		}
		return React.Children.map( this.props.footerNodes, ( child, idx ) => {
			return React.cloneElement( child, {
				id: `${child.props.id}-footer-${id}`, // eslint-disable-line i18next/no-literal-string
				key: `${this.state.current}-${idx}`
			});
		});
	}

	render() {
		debug( 'Rendering component...' );
		let showButton;
		if ( this.state.finished ) {
			showButton = false;
		} else {
			showButton = this.state.answered || this.state.answerSelected || this.props.skippable;
		}
		if ( this.state.showInstructorView ) {
			return ( <Card className="quiz">
				<Card.Header>
					<span>
						<h3 style={{ display: 'inline-block' }}>{this.props.t('instructor-view')}</h3>
						<Button
							variant="secondary"
							style={{ float: 'right' }}
							onClick={this.toggleInstructorView}
						>
							{this.props.t('close-instructor-view')}
						</Button>
					</span>
				</Card.Header>
				<Card.Body>
					{this.state.questions.map( ( elem, idx ) => {
						const id = this.state.questionIDs[ idx ];
						return ( <div key={idx}>
							<h3>{this.props.t('question')} {idx+1}:</h3>
							{this.renderQuestion( elem, id )}
							{this.renderFooterNodes( elem, idx )}
						</div> );
					})}
				</Card.Body>
				<Button
					className="quiz-button"
					variant="secondary"
					onClick={this.toggleInstructorView}
				>
					{this.props.t('close-instructor-view')}
				</Button>
			</Card> );
		}
		const currentConfig = this.state.questions[ this.state.current ];
		const currentID = this.state.questionIDs[ this.state.current ];
		return (
			<Fragment>
				{this.props.duration ?
					<Timer
						invisible
						id={this.id}
						active={this.props.active}
						duration={this.props.duration}
						onTimeUp={() => {
							debug( 'Time is up...' );
							const session = this.context;
							session.log({
								id: this.id,
								type: QUIZ_FINISHED,
								value: true
							});
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
							<h3>{this.props.t('answer-summary')}</h3> :
							<h3>{this.props.t('question')} {this.state.counter+1}/{this.state.count}</h3>
						}
					</Card.Header>
					<Card.Body>
						<div ref={( card ) => {
							this.quizBody = card;
						}} >
							{ this.state.finished ?
								this.renderScoreboard() :
								<span key={this.state.current}>{this.renderQuestion( currentConfig, currentID )}</span>
							}
							{ !this.state.finished ? this.renderConfidenceSurvey() : null }
							{currentConfig ? this.renderFooterNodes( currentConfig ) : null}
							<ButtonGroup style={{ float: 'right' }}>
								<Gate owner banner={null} >
										<Button
											className="quiz-button"
											variant="secondary"
											onClick={this.toggleInstructorView}
											style={{ marginRight: 10 }}
										>
											{this.props.t('open-instructor-view')}
										</Button>
								</Gate>
								{
								( this.props.showFinishButton || this.state.last ) &&
								!this.state.finished ?
									<Button
										style={{ marginRight: 10 }}
										className="quiz-button"
										variant="secondary"
										onClick={this.state.last ? this.handleFinishClick : this.toggleFinishModal}
									>
										{this.props.finishLabel || this.props.t('finish-label')}
									</Button> : null
								}
								{ showButton && !this.state.last ?
									<Button
										className="quiz-button"
										variant="primary"
										onClick={this.handleNextClick}
										disabled={this.props.forceConfidence && !this.state.selectedConfidence && this.state.answerSelected}
									>
										{this.props.nextLabel || this.props.t('next-question')}
									</Button> :
									null
								}
							</ButtonGroup>
						</div>
					</Card.Body>
				</Card>
				<FinishModal
					show={this.state.showFinishModal}
					onSubmit={this.handleFinishClick}
					onHide={this.toggleFinishModal}
					t={this.props.t}
				/>
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
	provideFeedback: PropTypes.bool,
	showFinishButton: PropTypes.bool,
	finishLabel: PropTypes.string,
	downloadButton: PropTypes.bool,
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
	nextLabel: null,
	provideFeedback: true,
	showFinishButton: false,
	finishLabel: null,
	downloadButton: true,
	onFinished() {},
	onSubmit() {}
};

Quiz.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'questions/quiz' )( withPropCheck( Quiz ) );
