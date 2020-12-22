
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import generateUID from '@isle-project/utils/uid';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import NumberInput from '@isle-project/components/input/number';
import Gate from '@isle-project/components/gate';
import Plotly from '@isle-project/components/plotly';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import SessionContext from '@isle-project/session/context.js';
import { NUMBER_SURVEY_SUBMISSION } from '@isle-project/constants/actions.js';
import './number-survey.css';


// VARIABLES //

const debug = logger( 'isle:number-survey' );
const uid = generateUID( 'number-survey' );
const SD = 'SD';


// MAIN //

/**
* A survey component in which the instructor may collect numeric survey data from students in real-time.
*
* @property {(string|node)} question - the question to be displayed
* @property {boolean} allowMultipleAnswers - controls whether the same user (or session if anonymous) may submit multiple answers)
* @property {boolean} anonymous - Allows for the students to submit data anonymously. Note that if this option is set to "true", then the instructors will be unable to see the ID of the submitting student
* @property {(number|string)} step - A `string` or `numeric` value indicating the step of the arrows seen when hovering the cursor above the input box. If `'any'`, the step will be set to `1`
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
class NumberSurvey extends Component {
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
		const { t } = this.props;
		const session = this.context;
		session.log({
			id: this.id,
			type: NUMBER_SURVEY_SUBMISSION,
			value: this.state.value,
			anonymous: this.props.anonymous
		}, 'members' );
		this.setState({
			submitted: true
		});
		session.addNotification({
			title: t('submitted'),
			message: t('answer-submitted'),
			level: 'success'
		});
		this.props.onSubmit( this.state.value );
	}

	onData = ( data ) => {
		debug( 'NumberSurvey is receiving data: ' + JSON.stringify( data ) );
		const avg = mean( data );
		const sd = stdev( data );
		this.setState({
			data: data,
			avg,
			sd
		});
	}

	renderChart() {
		const { t } = this.props;
		const { data } = this.state;
		if ( isEmptyArray( data ) ) {
			return <h3>{t('no-responses-yet')}</h3>;
		}
		return ( <Plotly
			data={[{
				x: this.state.data,
				type: 'histogram'
			}]}
			layout={{
				width: 400,
				height: 300
			}}
			removeButtons
		/> );
	}

	render() {
		const props = this.props;
		const { t } = props;
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate user banner={<h2>Please sign in...</h2>} >
				<Card id={this.id} style={this.props.style} >
					<Card.Body style={{ overflowY: 'auto' }}>
						<Container>
							<Row>
								<Col md={6}>
									<Card className="number-survey" body>
										<Card.Title as="h5">{props.question}</Card.Title>
										<label htmlFor={`number-survey-input-${this.id}`}>{t('your-answer')}:</label>
										<NumberInput
											{...props}
											inline
											id={`number-survey-input-${this.id}`}
											disabled={disabled}
											onChange={( value ) => {
												this.setState({
													value
												});
											}}
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
									{ isNumber( this.state.avg ) && isNumber( this.state.sd ) ?
										<p>{t('average-is')} {this.state.avg.toFixed( 3 )} ({SD}: {this.state.sd.toFixed( 3 )}).
										</p> : null
									}
								</Col>
							</Row>
						</Container>
						<ResponseVisualizer
							buttonLabel={t('responses')} id={this.id}
							info={NUMBER_SURVEY_SUBMISSION}
						/>
					</Card.Body>
				</Card>
			</Gate>
		);
	}
}


// PROPERTIES //

NumberSurvey.defaultProps = {
	question: '',
	allowMultipleAnswers: false,
	anonymous: false,
	step: 'any',
	style: {},
	onSubmit() {}
};

NumberSurvey.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

NumberSurvey.contextType = SessionContext;


// EXPORTS //

export default NumberSurvey;
