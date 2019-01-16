
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import { VictoryAxis, VictoryArea, VictoryChart } from 'victory';
import logger from 'debug';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isNumber from '@stdlib/assert/is-number';
import inmap from '@stdlib/utils/inmap';
import abs from '@stdlib/math/base/special/abs';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import iqr from 'utils/statistic/iqr';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import NumberInput from 'components/input/number';
import Gate from 'components/gate';
import ResponseVisualizer from 'components/response-visualizer';
import RealtimeMetrics from 'components/metrics/realtime';
import SessionContext from 'session/context.js';
import './number-survey.css';


// VARIABLES //

const debug = logger( 'isle:number-survey' );


// FUNCTIONS //

function bidx( bmin, h, v ) {
	return round( abs( bmin - v ) / h );
}

function getBins( data ) {
	var h = 2 * iqr( data ) * pow( data.length, -1/3 );
	var bmax = max( data );
	var bmin = min( data );
	var nBins = round( ( bmax - bmin ) / h ) + 1;
	var out = new Array( nBins );
	inmap( out, x => {
		return { 'y': 0, 'y0': 0 };
	});
	for ( let i = 0; i < data.length; i++ ) {
		let idx = bidx( bmin, h, data[ i ]);
		out[ idx ][ 'y' ] += 1;
	}
	for ( let i = 0; i < nBins; i++ ) {
		let bc = bmin + ( h*i );
		out[ i ][ 'x' ] = bc;
	}
	return out;
}


// MAIN //

/**
* A survey component in which the instructor may collect numeric survey data from students in real-time.
*
* @property {string} id - component identifier
* @property {string} question - the question to be displayed
* @property {boolean} allowMultipleAnswers - controls whether the same user (or session if anonymous) may submit multiple answers)
* @property {boolean} anonymous - Allows for the students to submit data anonymously. Note that if this option is set to "true", then the instructors will be unable to see the ID of the submitting student
* @property {(number|string)} step - A `string` or `numeric` value indicating the step of the arrows seen when hovering the cursor above the input box. If `'any'`, the step will be set to `1`
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
class NumberSurvey extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: [],
			submitted: false,
			value: null
		};
	}

	submitQuestion = () => {
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'NUMBER_SURVEY_SUBMISSION',
			value: this.state.value,
			anonymous: this.props.anonymous
		}, 'members' );
		this.setState({
			submitted: true
		});
		session.addNotification({
			title: 'Submitted',
			message: 'Your answer has been submitted.',
			level: 'success',
			position: 'tr'
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
		const { data } = this.state;
		if ( isEmptyArray( data ) ) {
			return <h3>No responses yet</h3>;
		}
		return ( <VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
			<VictoryArea
				data={data.length > 2 ? getBins( data ) : []}
				interpolation="step"
			/>
			<VictoryAxis
				label="Answer"
			/>
			<VictoryAxis
				dependentAxis
				label="Count"
			/>
		</VictoryChart> );
	}

	render() {
		const props = this.props;
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate user banner={<h2>Please sign in...</h2>} >
				<Card id={this.props.id} style={this.props.style} >
					<Card.Header as="h3">
						Survey
					</Card.Header>
					<Card.Body>
						<Container>
							<Row>
								<Col md={6}>
									<Card className="number-survey" body>
										<Card.Title as="h5">{props.question}</Card.Title>
										<label>Your answer:</label>
										<NumberInput
											{...props}
											inline
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
									<RealtimeMetrics for={this.props.id} onData={this.onData} />
									{this.renderChart()}
									{ isNumber( this.state.avg ) && isNumber( this.state.sd ) ?
										<p>The average is {this.state.avg.toFixed( 3 )} (SD: {this.state.sd.toFixed( 3 )}).
										</p> : null
									}
								</Col>
							</Row>
						</Container>
						<ResponseVisualizer buttonLabel="Responses" id={props.id} />
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
	id: PropTypes.string.isRequired,
	question: PropTypes.string,
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
