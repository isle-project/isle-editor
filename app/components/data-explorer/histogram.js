// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import linspace from '@stdlib/math/utils/linspace';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import isnan from '@stdlib/assert/is-nan';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import ceil from '@stdlib/math/base/special/ceil';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/stats/base/dists/normal/pdf';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import iqr from 'utils/statistic/iqr';
import { DATA_EXPLORER_SHARE_HISTOGRAM, DATA_EXPLORER_HISTOGRAM } from 'constants/actions.js';
import kernelSmoothDensity from './kernel_smooth_density.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:histogram' );
const DESCRIPTION = 'A histogram allows one to visualize the distribution of a quantitative variable. In order to create a histogram, the observed range of values is divided into different, non-overlapping intervals called "bins"; the height of each bin corresponds to how many observations are in that bin range.';
const SETTINGS = {
	yaxis: {
		tickformat: '-,.4r'
	},
	selectdirection: 'h'
};


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function setBins( config, vals, binStrategy, nBins, xbins ) {
	const maxVal = isNumber( xbins.end ) ? xbins.end : max( vals );
	const minVal = isNumber( xbins.start ) ? xbins.start : min( vals );
	if ( binStrategy === 'Select # of bins' ) {
		const sizeVal = ( maxVal - minVal ) / nBins;
		config.autobinx = false;
		config.xbins = {
			size: sizeVal,
			start: minVal,
			end: maxVal
		};
	}
	else if ( binStrategy === 'Set bin width' ) {
		config.autobinx = false;
		config.xbins = {
			size: ( maxVal - minVal ) / xbins.size <= 1e4 ? xbins.size : null,
			start: minVal,
			end: maxVal
		};
	}
	return config;
}

/**
* Calculates either a kernel density estimator or the MLE of a chosen parametric distribution.
*/
function calculateDensityValues( vals, densityType ) {
	/* eslint-disable no-case-declarations */
	const minVal = min( vals );
	const maxVal = max( vals );
	const x = linspace( minVal, maxVal, 512 );
	let y;
	switch ( densityType ) {
	case 'Data-driven':
		// Chose appropriate bandwidth via rule-of-thumb:
		const h = 2.0 * iqr( vals ) * pow( vals.length, -1/3 ) || 0.1;
		const phi = gaussian.factory( 0.0, 1.0 );
		const kde = kernelSmoothDensity( vals, phi, h );
		y = x.map( x => kde( x ) );
		break;
	case 'Uniform':
		y = x.map( x => dunif( x, minVal, maxVal ) );
		break;
	case 'Exponential':
		const lambda = 1.0 / mean( vals );
		y = x.map( x => dexp( x, lambda ) );
		break;
	case 'Normal':
		const avg = mean( vals );
		const sd = stdev( vals );
		y = x.map( x => gaussian( x, avg, sd ) );
		break;
	}
	return [ x, y ];
}

export function generateHistogramConfig({ data, variable, group, groupMode, nCols, overlayDensity, densityType, binStrategy, nBins, xbins = {}}) {
	let traces;
	let layout;

	if ( !group ) {
		let vals = data[ variable ];
		let nonmissing = [];
		for ( let i = 0; i < vals.length; i++ ) {
			let x = vals[ i ];
			if ( isNonMissingNumber( x ) ) {
				nonmissing.push( x );
			}
		}
		vals = nonmissing;
		traces = [ {
			x: vals,
			type: 'histogram',
			name: 'histogram'
		} ];
		traces[ 0 ] = setBins( traces[ 0 ], vals, binStrategy, nBins, xbins );
		if ( overlayDensity ) {
			const [ x, y ] = calculateDensityValues( vals, densityType );
			traces.push({
				x: x,
				y: y,
				type: 'lines',
				name: densityType+' density'
			});
			traces[ 0 ][ 'histnorm' ] = 'probability density';
		}
		layout = {
			xaxis: { title: variable },
			yaxis: {
				title: overlayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			reversescale: true,
			title: variable,
			...SETTINGS
		};
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			let nonmissing = [];
			for ( let i = 0; i < arr.length; i++ ) {
				let x = arr[ i ];
				if ( isNonMissingNumber( x ) ) {
					nonmissing.push( x );
				}
			}
			return nonmissing;
		});
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / nCols );
		if ( groupMode === 'Facets' ) {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				let vals = freqs[ key ];
				if ( overlayDensity ) {
					const config = {
						x: vals,
						type: 'histogram',
						histnorm: 'probability density',
						name: key+':histogram'
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
					const [ x, y ] = calculateDensityValues( vals, densityType );
					traces.push({
						x: x,
						y: y,
						type: 'lines',
						name: key+':density',
						xaxis: 'x'+(i+1),
						yaxis: 'y'+(i+1)
					});
				} else {
					const config = {
						x: vals,
						type: 'histogram',
						name: key,
						xaxis: 'x'+(i+1),
						yaxis: 'y'+(i+1)
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				let vals = freqs[ key ];
				if ( overlayDensity ) {
					const config = {
						x: vals,
						type: 'histogram',
						histnorm: 'probability density',
						name: key+':histogram',
						opacity: 0.5
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
					const [ x, y ] = calculateDensityValues( vals, densityType );
					traces.push({
						x: x,
						y: y,
						type: 'lines',
						name: key+':density'
					});
				} else {
					const config = {
						x: vals,
						type: 'histogram',
						name: key,
						opacity: 0.5
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
				}
			}
		}
		layout = {
			yaxis: {
				title: overlayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			title: `${variable} given ${group}`,
			...SETTINGS
		};
		if ( groupMode === 'Facets' ) {
			layout.grid = { rows: nRows, columns: nCols, pattern: 'independent' };
		} else {
			layout.barmode = 'overlay';
			layout.xaxis = { title: variable };
		}
	}
	return {
		data: traces,
		layout: layout
	};
}


// MAIN //

class Histogram extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			chooseBins: false,
			overlayDensity: false,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			groupMode: 'Overlay',
			nCols: 2,
			nBins: 10,
			densityType: 'Data-driven',
			xbins: {
				start: null,
				size: 100,
				end: null
			},
			binStrategy: 'Automatic'
		};
	}

	generateHistogram() {
		const config = generateHistogramConfig({
			data: this.props.data, ...this.state
		});
		debug( `Generate a histogram with ${this.state.nBins} bins` );
		const plotId = randomstring( 6 );
		const stateNew = { ...this.state };
		stateNew.plotId = plotId;
		const output = {
			variable: this.state.variable,
			type: 'Chart',
			value: <Plotly editable draggable id={plotId} fit meta={stateNew} data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( DATA_EXPLORER_SHARE_HISTOGRAM, stateNew );
			}} onSelected={( selected ) => {
				this.props.onSelected( this.state.variable, selected );
			}} />
		};
		this.props.logAction( DATA_EXPLORER_HISTOGRAM, stateNew );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Histogram
					<QuestionButton title="Histogram" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					<Row>
						<Col md={5} >
							<SelectInput
								legend="Group By:"
								options={groupingVariables}
								clearable={true}
								onChange={( value )=>{
									this.setState({
										group: value // eslint-disable-line react/no-unused-state
									});
								}}
							/>
						</Col>
						<Col md={4} >
							{ this.state.group ? <SelectInput
								legend="Mode:"
								defaultValue={this.state.groupMode}
								options={[ 'Overlay', 'Facets' ]}
								onChange={( value )=>{
									this.setState({
										groupMode: value // eslint-disable-line react/no-unused-state
									});
								}}
							/> : null }
						</Col>
						<Col md={3} >
							{ this.state.group && this.state.groupMode === 'Facets' ? <NumberInput
								legend="Columns"
								defaultValue={2}
								min={1}
								onChange={( value )=>{
									this.setState({
										nCols: value
									});
								}}
								style={{
									marginTop: 0
								}}
								inputStyle={{
									width: 70,
									marginLeft: 0,
									marginTop: 2
								}}
							/> : null }
						</Col>
					</Row>
					<div>
						<SelectInput
							legend="Binning Strategy:"
							options={[
								'Automatic',
								'Select # of bins',
								'Set bin width'
							]}
							defaultValue={this.state.binStrategy}
							inline
							onChange={( binStrategy )=>{
								this.setState({
									binStrategy
								});
							}}
						/>
						{ this.state.binStrategy !== 'Automatic' ?
							<div>
								<NumberInput
									legend="Start"
									inline
									defaultValue={this.state.xbins.start}
									onChange={( val ) => {
										const xbins = { ...this.state.xbins };
										xbins.start = val;
										this.setState({
											xbins
										});
									}}
									step="any"
									inputStyle={{
										width: 70
									}}
								/>
								{ this.state.binStrategy === 'Select # of bins' ?
									<NumberInput
										legend="Bins"
										defaultValue={this.state.nBins}
										min={1}
										step={1}
										onChange={( value )=>{
											this.setState({
												nBins: value
											});
										}}
										inline
										inputStyle={{
											width: 70
										}}
									/> : null
								}
								{ this.state.binStrategy === 'Set bin width' ?
									<NumberInput
										legend="Size"
										inline
										defaultValue={this.state.xbins.size}
										onChange={( val ) => {
											const xbins = { ...this.state.xbins };
											xbins.size = val;
											this.setState({
												xbins
											});
										}}
										step="any"
										inputStyle={{
											width: 70
										}}
									/> : null
								}
								<NumberInput
									legend="End"
									inline
									defaultValue={this.state.xbins.end}
									onChange={( val ) => {
										const xbins = { ...this.state.xbins };
										xbins.end = val;
										this.setState({
											xbins
										});
									}}
									step="any"
									inputStyle={{
										width: 70
									}}
								/>
							</div> : null }
					</div>
					{ this.props.showDensityOption ?
						<div>
							<CheckboxInput
								legend="Overlay Density"
								defaultValue={this.state.overlayDensity}
								onChange={()=>{
									this.setState({
										overlayDensity: !this.state.overlayDensity
									});
								}}
							/>
							<SelectInput
								legend="Type:"
								options={[ 'Data-driven', 'Normal', 'Uniform', 'Exponential' ]}
								disabled={!this.state.overlayDensity}
								defaultValue={this.state.densityType}
								menuPlacement="top"
								onChange={( value )=>{
									this.setState({
										densityType: value
									});
								}}
							/>
						</div> : null }
					<Button variant="primary" block onClick={this.generateHistogram.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

Histogram.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showDensityOption: true,
	onSelected() {}
};

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDensityOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Histogram;
