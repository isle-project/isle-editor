// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import generateUID from '@isle-project/utils/uid';
import Plotly from '@isle-project/components/plotly';
import Gate from '@isle-project/components/gate';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import SessionContext from '@isle-project/session/context.js';
import { MULTIPLE_CHOICE_SURVEY_SUBMISSION } from '@isle-project/constants/actions.js';
import { addResources } from '@isle-project/locales';
import AnswerOption from './answer_option';
import './multiple-choice-survey.css';


// VARIABLES //

addResources( 'Survey' );
const debug = logger( 'isle:multiple-choice-survey' );
const uid = generateUID( 'multiple-choice-survey' );


// MAIN //

/**
* A survey component in which the instructor may collect multiple-choice survey data from students in real-time.
*
* @property {(string|node)} question - string indicating the question to ask the students
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
		this.id = props.id || uid( props );
		this.state = {
			data: [],
			submitted: false,
			active,
			answerSelected: false
		};
	}

	submitQuestion = () => {
		const { t } = this.props;
		const session = this.context;
		session.log({
			id: this.id,
			type: MULTIPLE_CHOICE_SURVEY_SUBMISSION,
			value: this.state.active,
			anonymous: this.props.anonymous
		}, 'members' );
		if ( !this.props.allowMultipleAnswers ) {
			this.setState({
				submitted: true
			});
		}
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'success'
		});
		this.props.onSubmit( this.state.active );
	}

	onData = ( data ) => {
		const { t } = this.props;
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
				<th>{t('category')}</th>
				<th>{t('count')}</th>
				<th>{t('relative-frequency')}</th>
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
		const { t } = this.props;
		if ( isEmptyArray( this.state.data ) ) {
			return <h3>{t('no-responses-yet')}</h3>;
		}
		return (
			<Plotly
				data={[{
					x: this.state.data.map( val => val.x ),
					y: this.state.data.map( val => val.y ),
					type: 'bar'
				}]}
				layout={{
					width: 400,
					height: 300
				}}
				removeButtons
			/>
		);
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
		const { answers, multipleAnswers, question, t } = this.props;
		let disabled;
		if ( multipleAnswers ) {
			disabled = this.state.submitted;
		} else {
			disabled = this.state.submitted || !this.state.answerSelected;
		}
		return (
			<Gate user banner={<h2>{t('sign-in')}</h2>} >
				<Card id={this.id} style={this.props.style} >
					<Card.Body style={{ overflowY: 'auto' }}>
						<Container>
							<Row>
								<Col md={6}>
									<Card body className="multiple-choice-survey">
										<p><label>{question}</label></p>
										{ multipleAnswers ? <span>{t('multiple-answers')}</span> : null }
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
									<RealtimeMetrics for={[ this.id ]} onData={this.onData} />
									{this.renderChart()}
									<p>
										{this.state.freqTable}
									</p>
								</Col>
							</Row>
						</Container>
						<ResponseVisualizer
							buttonLabel={t('responses')} id={this.id}
							data={{
								type: 'factor',
								levels: this.props.answers
							}}
							info={MULTIPLE_CHOICE_SURVEY_SUBMISSION}
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
	style: {},
	onSubmit() {}
};

MultipleChoiceSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	answers: PropTypes.array,
	multipleAnswers: PropTypes.bool,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

MultipleChoiceSurvey.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'Survey' )( MultipleChoiceSurvey );
