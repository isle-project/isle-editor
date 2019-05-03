// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import max from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import kde2d from '@stdlib/stats/kde2d';
import objectKeys from '@stdlib/utils/keys';
import { DATA_EXPLORER_SHARE_HEATMAP, DATA_EXPLORER_HEATMAP } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by2 from './by2.js';


// VARIABLES //

const DESCRIPTION = 'A data display for quantitative variables in which data values are represented as colors. Regions with many observations are colored red, whereas regions without observations are colored in dark blue.';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return max( 0.05, 0.6 - floor( nobs / 500 ) );
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

export function generateHeatmapConfig({ data, xval, yval, overlayPoints, alternateColor, group, commonXAxis, commonYAxis }) {
	let annotations;
	let traces;
	let layout;
	var x = data[ xval ];
	var y = data[ yval ];
	if ( !group ) {
		var out = kde2d( x, y );
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
				x: x,
				y: y,
				mode: 'markers',
				name: 'points',
				marker: {
					color: 'white',
					opacity: calculateOpacity(x.length)
				},
				type: 'scatter'
			};
			traces.push( points );
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
		const densities = by2( x, y, data[ group ], kde2d );
		const keys = group.categories || objectKeys( densities );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = new Array(nPlots);
		let subplots = new Array(nRows);
		for ( let j = 0; j < nRows; j++ ) {
			subplots[j] = new Array(nCols);
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
			alternateColor: false
		};
	}

	generateHeatmap() {
		const { xval, yval, overlayPoints } = this.state;
		const config = generateHeatmapConfig({
			data: this.props.data,
			...this.state
		});
		const plotId = randomstring( 6 );
		const action = {
			xval, yval, overlayPoints, plotId
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
					<SelectInput
						legend="Variable on x-axis:"
						defaultValue={this.state.xval}
						options={variables}
						onChange={( value )=>{
							this.setState({
								xval: value
							});
						}}
					/>
					<SelectInput
						legend="Variable on y-axis:"
						defaultValue={this.state.yval}
						options={variables}
						onChange={( value )=>{
							this.setState({
								yval: value
							});
						}}
					/>
					<CheckboxInput
						legend="Overlay observations"
						defaultValue={this.state.overlayPoints}
						onChange={( value )=>{
							this.setState({
								overlayPoints: value
							});
						}}
					/>
					<CheckboxInput
						legend="Alternate Color Scheme"
						defaultValue={this.state.alternateColor}
						onChange={( value )=>{
							this.setState({
								alternateColor: value
							});
						}}
					/>
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
					<CheckboxInput
						legend="Use common x-axis"
						defaultValue={this.state.commonXAxis}
						onChange={( value )=>{
							this.setState({
								commonXAxis: value
							});
						}}
						disabled={!this.state.group}
						style={{
							opacity: this.state.group ? 1.0 : 0.0
						}}
					/>
					<CheckboxInput
						legend="Use common y-axis"
						defaultValue={this.state.commonYAxis}
						onChange={( value )=>{
							this.setState({
								commonYAxis: value
							});
						}}
						disabled={!this.state.group}
						style={{
							opacity: this.state.group ? 1.0 : 0.0
						}}
					/>
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


// PROPERTY TYPES //

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
