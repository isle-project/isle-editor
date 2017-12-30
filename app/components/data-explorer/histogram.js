// MODULES //

import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Plotly from 'components/plotly';
import hasOwnProp from '@stdlib/assert/has-own-property';
import kernelSmooth from 'kernel-smooth';
import linspace from '@stdlib/math/utils/linspace';
import min from 'compute-min';
import max from 'compute-max';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/math/base/dists/normal/pdf';
import dexp from '@stdlib/math/base/dists/exponential/pdf';
import dunif from '@stdlib/math/base/dists/uniform/pdf';
import iqr from 'compute-iqr';
import by from './by.js';


// FUNCTIONS //

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
		const kde = kernelSmooth.density( vals, phi, h );
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

export function generateHistogramConfig({ data, variable, group, overlayDensity, densityType, chooseBins, nBins }) {
	let traces;
	let layout;

	if ( !group ) {
		const vals = data[ variable ];
		traces = [ {
			x: vals,
			type: 'histogram',
			name: 'histogram'
		} ];
		if ( chooseBins ) {
			traces[ 0 ].nbinsx = nBins;
		}
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
			yaxis: { title: overlayDensity ? 'Density' : 'Count' },
			reversescale: true,
			title: variable
		};
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		for ( let key in freqs ) {
			if ( hasOwnProp( freqs, key ) ) {
				let vals = freqs[ key ];
				if ( overlayDensity ) {
					const config = {
						x: vals,
						type: 'histogram',
						histnorm: 'probability density',
						name: key+':histogram',
						opacity: 0.5
					};
					if ( chooseBins ) {
						config.nbinsx = nBins;
					}
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
					if ( chooseBins ) {
						config.nbinsx = nBins;
					}
					traces.push( config );
				}
			}
		}
		layout = {
			xaxis: { title: variable },
			yaxis: { title: overlayDensity ? 'Density' : 'Count' },
			title: `${variable} given ${group}`
		};
		layout.barmode = 'overlay';
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
			nBins: 10,
			densityType: 'Data-driven'
		};
	}

	generateHistogram() {
		const config = generateHistogramConfig({
			data: this.props.data, ...this.state
		});
		const output = {
			variable: this.state.variable,
			type: 'Chart',
			value: <Plotly fit data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( 'DATA_EXPLORER_SHARE:HISTOGRAM', this.state );
			}} />
		};
		this.props.logAction( 'DATA_EXPLORER:HISTOGRAM', this.state );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Panel header="Histogram">
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
				<div>
					<CheckboxInput
						legend="Choose # of bins"
						defaultValue={this.state.chooseBins}
						inline
						onChange={()=>{
							this.setState({
								chooseBins: !this.state.chooseBins
							});
						}}
					/>
					<SliderInput
						defaultValue={this.state.nBins}
						min={1}
						step={1}
						disabled={!this.state.chooseBins}
						onChange={( value )=>{
							this.setState({
								nBins: value
							});
						}}
						inline
					/>
				</div>
				<div style={{
					opacity: this.props.showDensityOption ? 1.0 : 0.0
				}}>
					<CheckboxInput
						legend="Overlay Density"
						defaultValue={this.state.overlayDensity}
						onChange={( value )=>{
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
						onChange={( value )=>{
							this.setState({
								densityType: value
							});
						}}
					/>
				</div>
				<Button bsStyle="primary" block onClick={this.generateHistogram.bind( this )}>Generate</Button>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

Histogram.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showDensityOption: true
};


// PROPERTY TYPES //

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDensityOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Histogram;
