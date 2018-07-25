// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import sample from '@stdlib/random/sample';
import incrspace from '@stdlib/math/utils/incrspace';
import FreeTextQuestion from 'components/free-text-question';
import MultipleChoiceQuestion from 'components/multiple-choice-question';
import MatchListQuestion from 'components/match-list-question';
import NumberQuestion from 'components/number-question';
import RangeQuestion from 'components/range-question';
import SelectQuestion from 'components/select-question';


// VARIABLES //

const debug = logger( 'isle-editor:quiz' );


// MAIN //

class Quiz extends Component {
	constructor( props ) {
		super( props );

		const indices = incrspace( 0, props.questions.length, 1 );
		this.sample = sample.factory( indices, {
			size: 1,
			mutate: true
		});
		this.state = {
			answers: new Array( props.questions.length ),
			answered: false,
			current: this.sample()[ 0 ],
			counter: 0,
			finished: false,
			last: false
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
		newState.counter = counter;
		this.setState( newState);
	}

	handleSubmission = ( val ) => {
		const elem = this.props.questions[ this.state.current ];
		const answers = this.state.answers.slice();
		answers[ this.state.current ] = {
			question: elem.question,
			answer: val,
			solution: elem.solution
		};
		this.setState({
			answered: true,
			answers: answers
		});
	}

	renderScoreboard() {
		return ( <div>
			<p>You have answered all questions. Here is a summary of your answers:</p>
			<table className="table table-bordered" >
				<thead>
					<tr>
						<th>Question</th>
						<th>Your answer</th>
						<th>Solution</th>
					</tr>
				</thead>
				<tbody>
					{this.state.answers.map( ( elem, idx ) => {
						return ( <tr key={idx}>
							<td>{elem.question}</td>
							<td>{elem.answer}</td>
							<td>{elem.solution}</td>
						</tr> );
					})}
				</tbody>
			</table>
		</div> );
	}

	renderCurrentQuestion() {
		const question = this.props.questions[ this.state.current ];
		switch ( question.type ) {
			case 'FreeTextQuestion':
				return <FreeTextQuestion {...question} onSubmit={this.handleSubmission} />;
			case 'MultipleChoiceQuestion':
				return <MultipleChoiceQuestion {...question} onSubmit={this.handleSubmission} />;
			case 'MatchListQuestion':
				return <MatchListQuestion {...question} onSubmit={this.handleSubmission} />;
			case 'NumberQuestion':
				return <NumberQuestion {...question} onSubmit={this.handleSubmission} />;
			case 'RangeQuestion':
				return <RangeQuestion {...question} onSubmit={this.handleSubmission} />;
			case 'SelectQuestion':
				return <SelectQuestion {...question} onSubmit={this.handleSubmission} />;
		}
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
				{ showButton ? <Button onClick={this.handleNextClick}>
					{this.state.last ? 'Finish Quiz' : 'Next Question' }
				</Button> : null }
			</Panel.Body>
		</Panel> );
	}
}


// TYPES //

Quiz.propDescriptions = {
	count: 'number of questions to include in the quiz',
	questions: 'array of questions from which questions will be randomly selected',
	skippable: 'controls whether questions in  the quiz are skippable'
};

Quiz.propTypes = {
	count: PropTypes.number.isRequired,
	questions: PropTypes.array.isRequired,
	skippable: PropTypes.bool
};

Quiz.defaultProps = {
	skippable: true
};


// EXPORTS //

export default Quiz;
