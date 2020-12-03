
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import profanities from 'profanities';
import Plotly from '@isle-project/components/plotly';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import tabulate from '@stdlib/utils/tabulate';
import lowercase from '@stdlib/string/lowercase';
import tokenize from '@stdlib/nlp/tokenize';
import generateUID from '@isle-project/utils/uid';
import TextArea from '@isle-project/components/input/text-area';
import Gate from '@isle-project/components/gate';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import SessionContext from '@isle-project/session/context.js';
import { TEXT_SURVEY_SUBMISSION } from '@isle-project/constants/actions.js';
import './free-text-survey.css';


// VARIABLES //

const debug = logger( 'isle:free-text-survey' );
const uid = generateUID( 'free-text-survey' );


// FUNCTIONS //

function containsProfanity( text ) {
	text = lowercase( text );
	const tokens = tokenize( text );
	for ( let i = 0; i < profanities.length; i++ ) {
		for ( let j = 0; j < tokens.length; j++ ) {
			if ( tokens[ j ] === profanities[ i ]) {
				return profanities[ i ];
			}
		}
	}
	return null;
}


// MAIN //

/**
* An ISLE component for questions where the answers by the students should be supplied in the form of free text. What differentiates this component from the **FreeTextQuestion** is the fact that the aggregated group data is displayed to everyone in real-time.
*
* @property {(string|node)} question - the question to ask the students
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymously collected
* @property {boolean} multipleAnswers - controls whether students may select more than one answer. Note that this differs from `allowMultipleAnswers`, which allows students able to submit an answer multiple times
* @property {number} rows - number of text rows in the input field
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function called when an answer is submitted
*/
class FreeTextSurvey extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );
		this.state = {
			data: [],
			submitted: false,
			value: null
		};
	}

	submitQuestion = () => {
		const session = this.context;
		const val = containsProfanity( this.state.value );
		if ( val ) {
			session.addNotification({
				title: 'Action required',
				message: `Your answer contains an offensive word: ${val}. Please remove.`,
				level: 'warning'
			});
		} else {
			session.log({
				id: this.id,
				type: TEXT_SURVEY_SUBMISSION,
				value: this.state.value,
				anonymous: this.props.anonymous
			}, 'members' );
			this.setState({
				submitted: true
			});
			session.addNotification({
				title: 'Submitted',
				message: 'Your answer has been submitted.',
				level: 'success'
			});
			this.props.onSubmit( this.state.value );
		}
	}

	onData = ( data ) => {
		debug( 'FreeTextQuestion is receiving data: ' + JSON.stringify( data ) );
		let tabulated = tabulate( data );
		let freqTable;
		let counts = tabulated.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		freqTable = <table className="table table-bordered">
			<tr>
				<th>Category</th>
				<th>Count</th>
				<th>Relative Frequency</th>
			</tr>
			{tabulated.map( ( elem, id ) => {
				return ( <tr key={id}>
					{elem.map( ( x, idx ) => {
						if ( idx === 2 ) {
							x = x.toFixed( 3 );
						}
						return <td key={idx}>{x}</td>;
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
			return (
				<h3>No responses yet</h3>
			);
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

	render() {
		const props = this.props;
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate user banner={<h2>Please sign in...</h2>} >
				<Card id={this.id} className={this.props.className} style={this.props.style} >
					<Card.Body style={{ overflowY: 'auto' }}>
						<Container>
							<Row>
								<Col md={6}>
									<Card className="free-text-survey" body>
										<label>{props.question}</label>
										<TextArea
											value={this.state.value}
											inline
											disabled={disabled}
											onChange={( value ) => {
												this.setState({
													value
												});
											}}
											rows={this.props.rows}
										/>
										<Button
											size="small"
											variant="success"
											block fill
											onClick={this.submitQuestion}
											disabled={disabled}
										>{ disabled ? 'Submitted' : 'Submit'}</Button>
									</Card>
								</Col>
								<Col md={6}>
									<RealtimeMetrics for={[ this.id ]} onData={this.onData} />
									{this.renderChart()}
									{this.state.freqTable}
								</Col>
							</Row>
						</Container>
						<ResponseVisualizer
							buttonLabel="Responses" id={this.id}
							info={TEXT_SURVEY_SUBMISSION}
						/>
					</Card.Body>
				</Card>
			</Gate>
		);
	}
}


// PROPERTIES //

FreeTextSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	rows: 4,
	className: '',
	style: {},
	onSubmit() {}
};

FreeTextSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	rows: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

FreeTextSurvey.contextType = SessionContext;


// EXPORTS //

export default FreeTextSurvey;
