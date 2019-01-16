// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Container from 'react-bootstrap/lib/Container';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Card from 'react-bootstrap/lib/Card';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import Gate from 'components/gate';
import ResponseVisualizer from 'components/response-visualizer';
import RealtimeMetrics from 'components/metrics/realtime';
import SessionContext from 'session/context.js';
import AnswerOption from './answer_option';
import './multiple-choice-survey.css';


// VARIABLES //

const debug = logger( 'isle:multiple-choice-survey' );


// MAIN //

/**
* A survey component in which the instructor may collect multiple-choice survey data from students in real-time.
*
* @property {string} id - component identifier
* @property {string} question - string indicating the question to ask the students
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymized
* @property {Array} answers - array indicating answer choices for the students
* @property {boolean} multipleAnswers - indicates whether students may select more than one answer. Note that this differs from allowMultipleAnswers in that allow makes students able to submit the question multiple times
* @property {string} title - panel title
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - function to be called when an answer is submitted
*/
class MultipleChoiceSurvey extends Component {
	constructor( props ) {
		super( props );

		let active = props.multipleAnswers ?
			new Array( props.answers.length ) :
			null;
		this.state = {
			data: [],
			submitted: false,
			active,
			answerSelected: false
		};
	}

	submitQuestion = () => {
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'MULTIPLE_CHOICE_SURVEY_SUBMISSION',
			value: this.state.active,
			anonymous: this.props.anonymous
		}, 'members' );
		if ( !this.props.allowMultipleAnswers ) {
			this.setState({
				submitted: true
			});
		}
		session.addNotification({
			title: 'Submitted',
			message: 'Your answer has been submitted.',
			level: 'success',
			position: 'tr'
		});
		this.props.onSubmit( this.state.active );
	}

	onData = ( data ) => {
		debug( 'MultipleChoiceSurvey is receiving data: ' + JSON.stringify( data ) );
		let tabulated = tabulate( data );
		let freqTable;
		let counts = tabulated.map( d => {
			return {
				x: this.props.answers[ d[ 0 ] ],
				y: d[ 1 ]
			};
		});
		freqTable = <table className="table table-bordered">
			<tr>
				<th>Category</th>
				<th>Count</th>
				<th>Relative Frequency</th>
			</tr>
			{tabulated.map( ( elem, row ) => {
				return ( <tr key={row}>
					{elem.map( ( x, col ) => {
						if ( col === 0 ) {
							x = this.props.answers[ x ];
						}
						else if ( col === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={`${row}:${col}`}>{x}</td>;
					})}
				</tr> );
			})}
		</table>;
		this.setState({
			data: counts,
			freqTable
		});
	}

	renderChart() {
		if ( isEmptyArray( this.state.data ) ) {
			return <h3>No responses yet</h3>;
		}
		return ( <VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
			<VictoryAxis
				tickLabelComponent={
					<VictoryLabel angle={45} />
				}
			/>
			<VictoryAxis dependentAxis />
			<VictoryBar
				categories={{
					x: this.props.answers
				}}
				data={this.state.data}
				x="x"
				y="y"
			/>
		</VictoryChart> );
	}

	renderAnswerOptionsSingle = ( key, id ) => {
		return (
			<AnswerOption
				key={id}
				no={id}
				answerContent={key}
				active={this.state.active === id}
				submitted={this.state.submitted}
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
	}

	renderAnswerOptionsMultiple = ( key, id ) => {
		return (
			<AnswerOption
				key={key}
				no={id}
				answerContent={key}
				active={this.state.active[ id ]}
				submitted={this.state.submitted}
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
	}

	render() {
		const { answers, id, title, multipleAnswers, question } = this.props;
		let disabled;
		if ( multipleAnswers ) {
			disabled = this.state.submitted;
		} else {
			disabled = this.state.submitted || !this.state.answerSelected;
		}
		return (
			<Gate user banner={<h2>Please sign in...</h2>} >
				<Card id={this.props.id} style={this.props.style} >
					<Card.Header as="h3">
						{title}
					</Card.Header>
					<Card.Body>
						<Container>
							<Row>
								<Col md={6}>
									<Card body className="multiple-choice-survey">
										<p><label>{question}</label></p>
										{ multipleAnswers ? <span>You may select multiple answers</span> : null }
										<ListGroup fill >
											{ multipleAnswers ?
												answers.map( this.renderAnswerOptionsMultiple ) :
												answers.map( this.renderAnswerOptionsSingle )
											}
										</ListGroup>
										<Button
											size="small"
											variant="success"
											block fill
											onClick={this.submitQuestion}
											disabled={disabled}
										>{ this.state.submitted ? 'Submitted' : 'Submit'}</Button>
									</Card>
								</Col>
								<Col md={6}>
									<RealtimeMetrics for={id} onData={this.onData} />
									{this.renderChart()}
									<p>
										{this.state.freqTable}
									</p>
								</Col>
							</Row>
						</Container>
						<ResponseVisualizer
							buttonLabel="Responses" id={id}
							data={{
								type: 'factor',
								levels: this.props.answers
							}}
						/>
					</Card.Body>
				</Card>
			</Gate>
		);
	}
}


// PROPERTIES //

MultipleChoiceSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	answers: [],
	multipleAnswers: false,
	title: 'Survey',
	style: {},
	onSubmit() {}
};

MultipleChoiceSurvey.propTypes = {
	id: PropTypes.string.isRequired,
	question: PropTypes.string,
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	answers: PropTypes.array,
	multipleAnswers: PropTypes.bool,
	title: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

MultipleChoiceSurvey.contextType = SessionContext;


// EXPORTS //

export default MultipleChoiceSurvey;
