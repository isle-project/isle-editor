
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Grid, Col } from 'react-bootstrap';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import { tabulate } from '@stdlib/utils';
import isNumber from '@stdlib/assert/is-number';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import NumberInput from 'components/input/number';
import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';
import RealtimeMetrics from 'components/metrics/realtime';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class NumberSurvey extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			data: [],
			submitted: false,
			value: null
		};

		this.submitQuestion = () => {
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
		};
	}

	onData = ( data ) => {
		debug( 'NumberSurvey is receiving data: ' + JSON.stringify( data ) );
		let tabulated = tabulate( data );
		let avg;
		let sd;
		let counts = tabulated.map( d => {
			return {
				x: d[ 0 ],
				y: d[ 1 ]
			};
		});
		avg = mean( data );
		sd = stdev( data );

		this.setState({
			data: counts,
			avg,
			sd
		});
	}

	componentDidMount() {
	}

	render() {
		const props = this.props;
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
							>{ disabled ? "Submitted" : "Submit"}</Button>
						</Panel>
					</Col>
					<Col md={6}>
						<RealtimeMetrics for={this.props.id} onData={this.onData} />
						<VictoryChart width={350} height={200} domainPadding={20} domain={{ y: [ 0, 20 ]}} >
							<VictoryBar
								data={this.state.data}
								x="x"
								y="y"
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
	anonymous: false
};


// PROPERTY TYPES //

NumberSurvey.propTypes = {
	onSubmit: PropTypes.func,
	allowMultipleAnswers: PropTypes.bool,
	question: PropTypes.string,
	anonymous: PropTypes.bool
};

NumberSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberSurvey;
