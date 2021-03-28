
// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import generateUID from '@isle-project/utils/uid';
import ProportionsInput from '@isle-project/components/input/proportions';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import RealtimeMetrics from '@isle-project/components/metrics/realtime';
import SessionContext from '@isle-project/session/context.js';
import { PROPORTIONS_SURVEY_SUBMISSION } from '@isle-project/constants/actions.js';
import { addResources } from '@isle-project/locales';
import './proportions_survey.css';


// VARIABLES //

addResources( 'Survey' );
const debug = logger( 'isle:proportions-survey' );
const uid = generateUID( 'proportions-survey' );


// FUNCTIONS //

function sum( arr ) {
	let out = 0.0;
	if ( !arr ) {
		return out;
	}
	for ( let n = 0; n < arr.length; n++ ) {
		out += arr[ n ];
	}
	return out;
}


// MAIN //

/**
* Component that allows a group of people to vote on the weights and importance of given options.
*
* @property {number} question - the question to be displayed
* @property {Array} legends - legend labels that describe the options to be weighed
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymized
* @property {boolean} disabled - controls whether the survey is deactivated
* @property {number} group - group display heading
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {number} colors - array of colors for the pie chart components. If not defined, a pre-defined color scale will be used
* @property {number} personalHeight - proportions input height for individual student (in px)
* @property {number} groupHeight - proportions input height for group display (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
class ProportionsSurvey extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );
		this.results = [];
		this.state = {
			submitted: false,
			value: null,
			resultValues: null,
			nResults: 0
		};
	}

	submitQuestion = () => {
		debug( 'Sending the data: ' + this.state.value );
		const session = this.context;
		session.log({
			id: this.id,
			type: PROPORTIONS_SURVEY_SUBMISSION,
			value: JSON.stringify( this.state.value ),
			anonymous: this.props.anonymous
		}, 'members' );
		this.setState({
			submitted: true
		});
		session.addNotification({
			title: this.props.t( 'submitted' ),
			message: this.props.t( 'answer-submitted' ),
			level: 'success'
		});
		this.props.onSubmit( this.state.value );
	}

	onData = ( data ) => {
		debug( 'ProportionsSurvey is receiving data: ' + JSON.stringify( data ) );
		data = data[ this.id ];
		this.getAverage( data );
	}

	getAverage( data ) {
		const list = new Array( data.length );
		for ( let i = 0; i < data.length; i++ ) {
			list[ i ] = JSON.parse( data[ i ] );
		}
		const nElements = this.props.legends.length;
		const sum = new Array( nElements ).fill( 0 );
		const mean = new Array( nElements ).fill( 0 );
		for ( let i = 0; i < list.length; i++ ) {
			// Reflects arrays of arrays = results
			for ( let j = 0; j < list[ i ].length; j++ ) {
				sum[ j ] += list[ i ][ j ];
			}
		}
		debug( 'The sum is '+ sum );
		for ( let j = 0; j < nElements; j++ ) {
			mean[ j ] = sum[ j ] / list.length;
		}
		debug( 'The mean is ' + mean );
		this.setState({
			resultValues: mean,
			nResults: list.length
		});
	}

	render() {
		const disabled = (
			( this.state.submitted && !this.props.allowMultipleAnswers ) ||
			this.props.disabled ||
			absdiff( sum( this.state.value ), 100 ) > 0.1
		);
		return (
			<Fragment>
				<Container>
					<Row>
						<Col md={6}>
							<Card body className="proportions-survey" >
								<h3>{this.props.question}</h3>
								<ProportionsInput
									legends={this.props.legends}
									precision={this.props.precision}
									step={this.props.step}
									height={this.props.personalHeight}
									colors={this.props.colors}
									margin={this.props.margin}
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
								>
									{this.props.t( disabled ? 'submitted' : 'submit' )}
								</Button>
							</Card>
						</Col>
						<Col md={6}>
							<Card body className="proportions-survey" >
								<h3>{ this.props.group}</h3>
								<RealtimeMetrics for={[ this.id ]} onData={this.onData} />
								<h4>{this.props.t('number-of-votes')}: { this.state.nResults } </h4>
								<ProportionsInput
									legends={this.props.legends}
									precision={this.props.precision}
									step={this.props.step}
									height={this.props.groupHeight}
									colors={this.props.colors}
									disabled={true}
									margin={this.props.margin}
									values={this.state.resultValues}
								/>
							</Card>
						</Col>
					</Row>
				</Container>
				<ResponseVisualizer buttonLabel={this.props.t('responses')} id={this.id} />
			</Fragment>
		);
	}
}


// PROPERTIES //

ProportionsSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	disabled: false,
	legends: [],
	group: 'group results',
	precision: 2,
	step: 0.25,
	colors: null,
	personalHeight: 200,
	groupHeight: 100,
	margin: '40px'
};

ProportionsSurvey.propTypes = {
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	colors: PropTypes.array,
	disabled: PropTypes.bool,
	group: PropTypes.string,
	groupHeight: PropTypes.number,
	legends: PropTypes.array,
	margin: PropTypes.string,
	onSubmit: PropTypes.func,
	personalHeight: PropTypes.number,
	precision: PropTypes.number,
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	step: PropTypes.number
};

ProportionsSurvey.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'Survey' )( ProportionsSurvey );
