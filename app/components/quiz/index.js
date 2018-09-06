// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Radio from 'react-bootstrap/lib/Radio';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import sample from '@stdlib/random/sample';
import isObject from '@stdlib/assert/is-plain-object';
import incrspace from '@stdlib/math/utils/incrspace';
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

const debug = logger( 'isle-editor:quiz' );


// FUNCTIONS //

function isHTMLConfig( elem ) {
	return (
		isObject( elem ) &&
		elem.component
	);
}


// MAIN //

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
			checked: 1
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
		newState.checked = 'Somewhat sure';
		newState.counter = counter;
		this.setState( newState);
	}

	handleSubmission = ( val ) => {
		const elem = this.props.questions[ this.state.current ];
		const answers = this.state.answers.slice();

		let answer;
		let solution;
		if ( elem.type === 'MultipleChoiceQuestion' ) {
			answer = elem.answers[ val ].content;
			solution = elem.answers[ elem.solution ].content;
		} else {
			answer = val;
			solution = elem.solution;
		}

		const session = this.context.session;
		if ( elem.props.id ) {
			session.log({
				id: elem.props.id,
				type: 'QUESTION_CONFIDENCE',
				value: this.state.checked
			});
		}

		answers[ this.state.current ] = {
			question: elem.question,
			answer,
			solution
		};
		this.setState({
			answered: true,
			answers: answers
		});
	}

	renderScoreboard() {
		debug( 'Rendering scoreboard...' );
		return ( <div>
			<p>You have answered all questions. Here is a summary of your answers:</p>
			<table className="table table-bordered" >
				<thead>
					<tr>
						<th>Question</th>
						<th>Your answer</th>
						<th>Solution</th>
						{ this.props.confidence ? <th>Confidence</th> : null }
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
						return ( <tr className={className} key={idx}>
							<td>{elem.question}</td>
							<td>{elem.answer}</td>
							<td>{elem.solution}</td>
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
		const props = config.props;
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
			<FormGroup className="center" >
				<ControlLabel>Please indicate how confident you are in your answer:</ControlLabel>
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
		);
	}

	render() {
		let showButton;
		if ( this.state.finished ) {
			showButton = false;
		} else {
			showButton = this.state.answered || this.props.skippable;
		}
		return ( <Panel>
			<Panel.Heading>
				<Panel.Title>Questions</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				{ this.state.finished ?
					this.renderScoreboard() :
					this.renderCurrentQuestion()
				}
				{ showButton ? <Button className="quiz-button" onClick={this.handleNextClick}>
					{this.state.last ? 'Finish Quiz' : 'Next Question' }
				</Button> : null }
				{ !this.state.finished ? this.renderConfidenceSurvey() : null }
			</Panel.Body>
		</Panel> );
	}
}


// TYPES //

Quiz.propDescriptions = {
	confidence: 'whether to display a Likert scale asking for the confidence of the user\'s answer',
	count: 'number of questions to include in the quiz',
	questions: 'array of questions from which questions will be randomly selected',
	skippable: 'controls whether questions in  the quiz are skippable'
};

Quiz.propTypes = {
	confidence: PropTypes.bool,
	count: PropTypes.number.isRequired,
	questions: PropTypes.array.isRequired,
	skippable: PropTypes.bool
};

Quiz.defaultProps = {
	confidence: false,
	skippable: true
};

Quiz.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Quiz;
