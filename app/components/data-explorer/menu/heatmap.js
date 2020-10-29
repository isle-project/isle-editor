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
			x: defaultX || variables[ 0 ],
			y: defaultY || variables[ 1 ],
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
		const { x, y, overlayPoints, regressionMethod } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			x, y, overlayPoints, regressionMethod, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: this.props.t('plot-shared'),
				message: this.props.t('plot-shared-message'),
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
		const { variables, groupingVariables, t } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					{t('Heat Map')}
					<QuestionButton title={t('Heat Map')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col><SelectInput
							legend={t('x-axis-variable')}
							defaultValue={this.state.x}
							options={variables}
							onChange={( value )=>{
								this.setState({
									x: value
								});
							}}
						/>
						</Col>
						<Col><SelectInput
							legend={t('y-axis-variable')}
							defaultValue={this.state.y}
							options={variables}
							onChange={( value )=>{
								this.setState({
									y: value
								});
							}}
						/></Col>
					</Row>
					<Row>
						<Col>
							<SelectInput
								legend={`${t('group-by')}:`}
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
								legend={t('overlay-observations')}
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
								legend={t('alternate-color-scheme')}
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
								legend={t('overlay-regression-line')}
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
								legend={t('smoothing-parameter')}
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
					<Button variant="primary" block onClick={this.generateHeatmap.bind( this )}>
						{t('generate')}
					</Button>
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
