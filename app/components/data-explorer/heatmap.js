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
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/math/utils/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import maxScalar from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import kde2d from '@stdlib/stats/kde2d';
import max from 'utils/statistic/max';
import min from 'utils/statistic/min';
import { DATA_EXPLORER_SHARE_HEATMAP, DATA_EXPLORER_HEATMAP } from 'constants/actions.js';
import extractUsedCategories from './extract_used_categories.js';
import calculateCoefficients from './linear-regression/calculate_coefficients.js';
import QuestionButton from './question_button.js';
import by2 from './by2.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A data display for quantitative variables in which data values are represented as colors. Regions with many observations are colored red, whereas regions without observations are colored in dark blue.';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return maxScalar( 0.05, 0.6 - floor( nobs / 500 ) );
}

function toArrayArray( arr ) {
	const nRows = arr.shape[ 0 ];
	const nCols = arr.shape[ 1 ];
	const out = new Array( nRows );
	for ( let i = 0; i < nRows; i++ ) {
		const row = Array( nCols );
		for ( let j = 0; j < nCols; j++ ) {
			row[ j ] = arr.get( i, j );
		}
		out[ i ] = row;
	}
	return out;
}

export function generateHeatmapConfig({ data, xval, yval, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan }) {
	let annotations;
	let traces;
	let layout;
	const x = data[ xval ];
	const y = data[ yval ];
	if ( !group ) {
		const out = kde2d( x, y );
		traces = [
			{
				x: out.x,
				y: out.y,
				z: toArrayArray( out.z ),
				type: 'heatmap',
				showscale: false,
				transpose: true,
				colorscale: alternateColor ? 'YIGnBu' : 'RdBu'
			}
		];
		if ( overlayPoints ) {
			const points = {
				x,
				y,
				mode: 'markers',
				name: 'points',
				marker: {
					color: 'white',
					opacity: calculateOpacity( x.length )
				},
				type: x.length > 2000 ? 'scattergl' : 'scatter'
			};
			traces.push( points );
		}
		if ( regressionMethod && regressionMethod.length > 0 ) {
			let xc = [];
			let yc = [];
			for ( let j = 0; j < x.length; j++ ) {
				let xval = x[ j ];
				let yval = y[ j ];
				if (
					isNumber( xval ) && isNumber( yval ) &&
					!isnan( xval ) && !isnan( yval )
				) {
					xc.push( xval );
					yc.push( yval );
				}
			}
			let predictedLinear;
			let predictedSmooth;
			let values;
			if ( contains( regressionMethod, 'linear' ) ) {
				values = linspace( min( xc ), max( xc ), 100 );
				const coefs = calculateCoefficients( xc, yc );
				predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				traces.push({
					x: values,
					y: predictedLinear,
					text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
					mode: 'lines',
					name: 'Linear Fit',
					type: 'line'
				});
			}
			if ( contains( regressionMethod, 'smooth' ) ) {
				const out = lowess( xc, yc, { 'f': smoothSpan } );
				values = out.x;
				predictedSmooth = out.y;
				traces.push({
					x: values,
					y: predictedSmooth,
					mode: 'lines',
					name: 'Smoothed Fit',
					type: 'line'
				});
			}
		}
		layout = {
			title: `${xval} vs. ${yval}`,
			xaxis: {
				showgrid: true,
				zeroline: true,
				title: xval
			},
			yaxis: {
				showgrid: true,
				zeroline: true,
				title: yval
			}
		};
	} else {
		let xgrouped;
		let ygrouped;
		const densities = by2( x, y, data[ group ], kde2d );
		const keys = extractUsedCategories( densities, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = new Array(nPlots);
		let subplots = new Array(nRows);
		for ( let j = 0; j < nRows; j++ ) {
			subplots[j] = new Array(nCols);
		}

		if ( regressionMethod && regressionMethod.length > 0 ) {
			xgrouped= by( x, data[ group ], arr => {
				return arr;
			});
			ygrouped = by( y, data[ group ], arr => {
				return arr;
			});
		}
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = densities[ key ];
			let xAxisID;
			let yAxisID;
			if ( commonXAxis ) {
				xAxisID = `x${col === 0 ? '' : col+1}`;
			} else {
				xAxisID = `x${i === 0 ? '' : i+1}`;
			}

			if ( commonYAxis ) {
				yAxisID = `y${row === 0 ? '' : row+1}`;
			} else {
				yAxisID = `y${i === 0 ? '' : i+1}`;
			}
			traces.push(
				{
					x: val.x,
					y: val.y,
					z: toArrayArray( val.z ),
					type: 'heatmap',
					showscale: false,
					transpose: true,
					xaxis: xAxisID,
					yaxis: yAxisID,
					colorscale: alternateColor ? 'YIGnBu' : 'RdBu'
				}
			);
			subplots[ row ][ col ] = xAxisID + yAxisID;
			if ( regressionMethod && regressionMethod.length > 0 ) {
				let xvals = xgrouped[ key ];
				let yvals = ygrouped[ key ];
				let xc = [];
				let yc = [];
				for ( let j = 0; j < xvals.length; j++ ) {
					let x = xvals[ j ];
					let y = yvals[ j ];
					if (
						isNumber( x ) && isNumber( y ) &&
						!isnan( x ) && !isnan( y )
					) {
						xc.push( x );
						yc.push( y );
					}
				}
				let predictedLinear;
				let predictedSmooth;
				let values;
				if ( contains( regressionMethod, 'linear' ) ) {
					values = linspace( min( xc ), max( xc ), 100 );
					const coefs = calculateCoefficients( xc, yc );
					predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
					traces.push({
						x: values,
						y: predictedLinear,
						text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
						mode: 'lines',
						name: 'Linear Fit',
						type: 'line',
						xaxis: xAxisID,
						yaxis: yAxisID
					});
				}
				if ( contains( regressionMethod, 'smooth' ) ) {
					const out = lowess( xc, yc, { 'f': smoothSpan } );
					values = out.x;
					predictedSmooth = out.y;
					traces.push({
						x: values,
						y: predictedSmooth,
						mode: 'lines',
						name: 'Smoothed Fit',
						type: 'line',
						xaxis: xAxisID,
						yaxis: yAxisID
					});
				}
			}

			annotations[ i ] = {
				xref: 'paper',
				yref: 'paper',
				x: ( 1 + ( 2*col) ) / ( 2*nCols ),
				y: 1 - ( (row*1.12) / nRows ),
				text: key,
				xanchor: 'center',
				yanchor: 'bottom',
				showarrow: false,
				font: {
					size: 14
				}
			};
		}
		layout = {
			grid: {
				subplots: subplots
			},
			annotations: annotations,
			title: `${xval} vs. ${yval} given ${group}`
		};
	}
	// traces.push( { colorscale: 'YIGnBu' } );
	return {
		layout,
		data: traces
	};
}


// MAIN //

class HeatMap extends Component {
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
		const config = generateHeatmapConfig({
			data: this.props.data,
			...this.state
		});
		const plotId = randomstring( 6 );
		const action = {
			xval, yval, overlayPoints, regressionMethod, plotId
		};
		const output ={
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <Plotly
				editable
				draggable
				fit
				id={plotId}
				data={config.data}
				layout={config.layout}
				meta={action}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( DATA_EXPLORER_SHARE_HEATMAP, action );
				}}
				onSelected={( selected ) => {
					this.props.onSelected({ x: xval, y: yval }, selected );
				}}
			/>
		};
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


// DEFAULT PROPERTIES //

HeatMap.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	session: {}
};


// PROPERTIES //

HeatMap.propTypes = {
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

export default HeatMap;
