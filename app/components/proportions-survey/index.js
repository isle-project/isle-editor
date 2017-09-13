
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Grid, Col } from 'react-bootstrap';
import { VictoryBar, VictoryChart } from 'victory';
import { tabulate } from '@stdlib/utils';
import isNumber from '@stdlib/assert/is-number';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import NumberInput from 'components/input/number';

import ProportionsInput from 'components/input/proportions';

import Gate from 'components/gate';
import InstructorBar from 'components/instructor-bar';
import RealtimeMetrics from 'components/metrics/realtime';
const debug = require( 'debug' )( 'isle-editor' );

var colorList = ["tomato", "orange", "gold", "darkcyan", "salmon", "lightgreen", "gainsboro", "lightpurple", "darkkhaki", "darkseagreen" ];

import isString from '@stdlib/assert/is-string';
import isArrayArray from '@stdlib/assert/is-array-array';
import isArray from '@stdlib/assert/is-array';
import isJSON from '@stdlib/assert/is-json';


// MAIN //

class ProportionsSurvey extends Component {

	constructor( props ) {
		super( props );

		this.results = [];

		this.state = {
			data: [],
			submitted: false,
			value: null,
			resultValues: null,
			nResults: 0
		};

		this.submitQuestion = () => {
			console.log( "schicke die Daten ab" + this.state.value );



			const { session } = this.context;
			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'PROPORTIONS_SURVEY_SUBMISSION',
					value: JSON.stringify( this.state.value ),
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
		console.log ( "OnData" );

		debug( 'ProportionsSurvey is receiving data: ' + JSON.stringify( data ) );
		data = data[ this.props.id ];
		console.log( "Hier kommen die Daten: " + data );
		this.getAverage( data );
	}


	/*
	schicke die Daten ab 33.333333333333336,55,11.5
	bundle.min.js:1 OnData
	bundle.min.js:1 Hier kommen die Daten: [33.333333333333336,55,11.5]
	bundle.min.js:1 Array der Arrays?
	bundle.min.js:1 [Array(1)]
	bundle.min.js:1 SUM 0,0,0
	bundle.min.js:1 MEAN 0,0,0

	*/

	/*
	schicke die Daten ab21,6.5,72.5
	bundle.min.js:1 OnData
	bundle.min.js:1 Hier kommen die Daten: [21,6.5,72.5]
	bundle.min.js:1 data ist kein String
	bundle.min.js:1 Daten sind in die Resultate gepusht
	bundle.min.js:1 [Array(1)]
	bundle.min.js:1 SUM 0,0,0
	bundle.min.js:1 MEAN 0,0,0
	*/

	/*
	schicke die Daten ab17.75,68,14.25
	bundle.min.js:1 OnData
	bundle.min.js:1 Hier kommen die Daten: [17.75,68,14.25]
	bundle.min.js:1 data ist kein String
	bundle.min.js:1 data ist ein Array
	bundle.min.js:1 data ist kein Array von Arrays
	bundle.min.js:1 data ist kein JSON String
	bundle.min.js:1 Daten sind in die Resultate gepusht
	bundle.min.js:1 [Array(3)]
	bundle.min.js:1 SUM 0,0,0
	bundle.min.js:1 MEAN 0,0,0
	*/



	getAverage( data ) {
		var list = new Array( data.length );

		for ( var i = 0; i < data.length; i++ ) {
			var temp = JSON.parse( data[ i ]);
			list[ i ] = temp;
		}


		console.log( "Länge des Arrays " + list.length );

		var sum = new Array( this.props.nElements ).fill( 0 );
		var mean = new Array( this.props.nElements ).fill( 0 );

		// console.log ( "SUM " + sum );
		// console.log ( "MEAN " + mean );


		for ( var i = 0; i < list.length; i++ ) {                // reflects arrays of arrays = results
			console.log( "i" + i );
			
			for ( var j = 0; j < list[ i ].length; j++ ) {       // relects
				sum[ j ] += list[ i ][ j ];
				// mean[ j ] = sum[ j ] / ( j+1 );

				console.log( "j" + j );
			}

		}

		console.log ( sum );

		var no = this.props.nElements;
		for ( var j = 0; j < no; j++ ) {
			mean[ j ] = sum[ j ] / list.length;
		}

		console.log ( "Mean steht bei " + mean );

		this.setState({
			resultValues: mean,
			nResults: list.length
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
						<Panel className="ProportionsSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<h3>{props.question}</h3>

							<ProportionsInput 
								legends = { this.props.legends }
								precision = { 2 }
								step = { 0.25 }    
								height = { this.props.personalHeight }
								innerRadius = { this.props.personalInnerRadius }
								colors = { this.props.colors }
								margin = { this.props.margin }
								nElements = { this.props.nElements } 
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
						<Panel className="ProportionsSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px',
						}}>
							
							<h3>{ this.props.group }</h3>
							<RealtimeMetrics for={[ this.props.id ]} onData={this.onData} />
							<h4>Number of votes: { this.state.nResults } </h4>								

							<ProportionsInput 
								legends = { this.props.legends }
								precision = { 2 }
								step = { 0.25 }    
								height = { this.props.groupsHeight }
								innerRadius = { this.props.groupInnerRadius }
								colors = { this.props.colors }
								disabled = { true }
								margin = { this.props.margin }
								values = { this.state.resultValues }
								nElements = { this.props.nElements } />
								
								
						</Panel>
					</Col>
				</Grid>
				<InstructorBar id={props.id} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

ProportionsSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	disabled: false,

	// for the Proportion
	nElements: 6,
	legends: "Legend",
	group: "group results",
	precision: 1,
	step: 0.1,
	colors: colorList,
	personalHeight: 200,
	personalInnerRadius: 60,
	groupHeight: 100,
	groupInnerRadius: 40,
	margin: "40px"
};


// PROPERTY TYPES //

ProportionsSurvey.propTypes = {
	onSubmit: PropTypes.func,
	allowMultipleAnswers: PropTypes.bool,
	question: PropTypes.string,
	anonymous: PropTypes.bool,
	disabled: PropTypes.bool,

	margin: PropTypes.string,


	// for the proprtion
	nElements: PropTypes.number,
	precision: PropTypes.number,
	step: PropTypes.number,

	legends: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),


};

ProportionsSurvey.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default ProportionsSurvey;