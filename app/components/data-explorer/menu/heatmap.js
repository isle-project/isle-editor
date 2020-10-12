// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import randomstring from 'utils/randomstring/alphanumeric';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import HeatMap from 'components/plots/heatmap';
import { DATA_EXPLORER_SHARE_HEATMAP, DATA_EXPLORER_HEATMAP } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A data display for quantitative variables in which data values are represented as colors. Regions with many observations are colored red, whereas regions without observations are colored in dark blue.';


// MAIN //

class HeatMapMenu extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultX, defaultY } = props;
		this.state = {
			xval: defaultX || variables[ 0 ],
			yval: defaultY || variables[ 1 ],
			group: null,
			overlayPoints: false,
			commonXAxis: false,
			commonYAxis: false,
			alternateColor: false,
			regressionMethod: [],
			smoothSpan: 0.66
		};
	}

	generateHeatmap() {
		const { xval, yval, overlayPoints, regressionMethod } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			xval, yval, overlayPoints, regressionMethod, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_HEATMAP, action );
		};
		const output = <HeatMap id={plotId} data={this.props.data} {...this.state} action={action} onShare={onShare} />;
		this.props.logAction( DATA_EXPLORER_HEATMAP, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Heat Map
					<QuestionButton title="Heat Map" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col><SelectInput
							legend="Variable on x-axis:"
							defaultValue={this.state.xval}
							options={variables}
							onChange={( value )=>{
								this.setState({
									xval: value
								});
							}}
						/>
						</Col>
						<Col><SelectInput
							legend="Variable on y-axis:"
							defaultValue={this.state.yval}
							options={variables}
							onChange={( value )=>{
								this.setState({
									yval: value
								});
							}}
						/></Col>
					</Row>
					<Row>
						<Col>
							<SelectInput
								legend="Group By:"
								options={groupingVariables}
								clearable={true}
								onChange={( value )=>{
									this.setState({
										group: value
									});
								}}
								menuPlacement="top"
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<CheckboxInput
								legend="Common x-axis?"
								defaultValue={this.state.commonXAxis}
								onChange={( value )=>{
									this.setState({
										commonXAxis: value
									});
								}}
								disabled={!this.state.group}
								style={{
									opacity: this.state.group ? 1.0 : 0.0,
									float: 'left'
								}}
							/>
						</Col>
						<Col>
							<CheckboxInput
								legend="Common y-axis?"
								defaultValue={this.state.commonYAxis}
								onChange={( value )=>{
									this.setState({
										commonYAxis: value
									});
								}}
								disabled={!this.state.group}
								style={{
									opacity: this.state.group ? 1.0 : 0.0,
									float: 'left'
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<CheckboxInput
								legend="Overlay observations"
								defaultValue={this.state.overlayPoints}
								onChange={( value )=>{
									this.setState({
										overlayPoints: value
									});
								}}
							/>
						</Col>
						<Col>
							<CheckboxInput
								legend="Alternate Color Scheme"
								defaultValue={this.state.alternateColor}
								onChange={( value )=>{
									this.setState({
										alternateColor: value
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<SelectInput
								legend="Overlay regression line?"
								defaultValue={this.state.regressionMethod}
								multi={true}
								options={[ 'linear', 'smooth' ]}
								onChange={( value ) => {
									if ( !isArray( value ) ) {
										value = [ value ];
									}
									this.setState({
										regressionMethod: value
									});
								}}
							/>
						</Col>
						<Col>
							<SliderInput
								legend="Smoothing Parameter"
								disabled={!contains(this.state.regressionMethod, 'smooth')}
								min={0.01}
								max={1}
								step={0.01}
								defaultValue={this.state.smoothSpan}
								onChange={( value ) => {
									this.setState({
										smoothSpan: value
									});
								}}
							/>
						</Col>
					</Row>
					<Button variant="primary" block onClick={this.generateHeatmap.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

HeatMapMenu.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	session: {}
};

HeatMapMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onSelected: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default HeatMapMenu;
