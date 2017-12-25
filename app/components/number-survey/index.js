
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Grid, Col } from 'react-bootstrap';
import { VictoryAxis, VictoryArea, VictoryChart } from 'victory';
import logger from 'debug';
import isNumber from '@stdlib/assert/is-number';
import inmap from '@stdlib/utils/inmap';
import { abs, pow, round } from '@stdlib/math/base/special';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import iqr from 'compute-iqr';
import min from 'compute-min';
import max from 'compute-max';
import NumberInput from 'components/input/number';
import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';
import RealtimeMetrics from 'components/metrics/realtime';


// VARIABLES //

const debug = logger( 'isle-editor' );


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
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'NUMBER_SURVEY_SUBMISSION',
				value: this.state.value,
				anonymous: this.props.anonymous
			}, 'members' );
		}
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

	render() {
		const props = this.props;
		const { data } = this.state;
		const disabled = this.state.submitted && !props.allowMultipleAnswers;
		return (
			<Gate {...props} >
				<Grid>
					<Col md={6}>
						<Panel className="NumberSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<h3>{props.question}</h3>
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
								bsSize="small"
								bsStyle="success"
								block fill
								onClick={this.submitQuestion}
								disabled={disabled}
							>{ disabled ? 'Submitted' : 'Submit'}</Button>
						</Panel>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={this.props.id} onData={this.onData} />
						<VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
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
						</VictoryChart>
						{ isNumber( this.state.avg ) && isNumber( this.state.sd ) ?
							<p>The average is {this.state.avg.toFixed( 3 )} (SD: {this.state.sd.toFixed( 3 )}).
							</p> : null
						}
					</Col>
				</Grid>
				<InstructorBar id={props.id} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

NumberSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	step: 'any'
};


// PROPERTY TYPES //

NumberSurvey.propTypes = {
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	onSubmit: PropTypes.func,
	question: PropTypes.string,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

NumberSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberSurvey;
