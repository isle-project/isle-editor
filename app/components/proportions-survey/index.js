
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



// MAIN //

class ProportionsSurvey extends Component {

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
		data = data[ this.props.id ];
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

							<ProportionsInput 
								legends = { this.props.legends }
								precision = { 2 }
								step = { 0.25 }    
								height = { this.props.personalHeight }
								innerRadius = { this.props.personalInnerRadius }
								colors = { this.props.colors }
								nElements = { this.props.nElements } />
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
						<Panel className="NumberSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							
							<h3>{ this.props.group }</h3>

							<ProportionsInput 
								legends = { this.props.legends }
								precision = { 2 }
								step = { 0.25 }    
								height = { this.props.groupsHeight }
								innerRadius = { this.props.groupInnerRadius }
								colors = { this.props.colors }
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
	groupInnerRadius: 40

};


// PROPERTY TYPES //

ProportionsSurvey.propTypes = {
	onSubmit: PropTypes.func,
	allowMultipleAnswers: PropTypes.bool,
	question: PropTypes.string,
	anonymous: PropTypes.bool,
	disabled: PropTypes.bool,

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
