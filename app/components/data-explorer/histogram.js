// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import isArray from '@stdlib/assert/is-array';
import kernelSmooth from 'kernel-smooth';
import linspace from '@stdlib/math/utils/linspace';
import min from 'compute-min';
import max from 'compute-max';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/math/base/dist/normal/pdf';
import iqr from 'compute-iqr';


// FUNCTIONS //

function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		ret[ key ] = fun( ret[ key ]);
	}
	return ret;
} // end FUNCTION by()

export function generateHistogramConfig({ data, variable, group, overlayDensity, chooseBins, nBins }) {
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
			// Chose appropriate bandwidth via rule-of-thumb:
			const h = 2.0 * iqr( vals ) * pow( vals.length, -1/3 );
			const phi = gaussian.factory( 0.0, 1.0 );
			const kde = kernelSmooth.density( vals, phi, h );
			const x = linspace( min( vals ), max( vals ), 512 );
			let y = x.map( x => kde( x ) );
			traces.push({
				x: x,
				y: y,
				type: 'lines',
				name: 'density'
			});
			traces[ 0 ][ 'histnorm' ] = 'probability density';
		}
		layout = {
			xaxis: {title: 'Value' },
			yaxis: {title: overlayDensity ? 'Density' : 'Count' },
			reversescale: true
		};
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		for ( let key in freqs ) {
			let vals = freqs[ key ];
			if ( overlayDensity ) {
				// Chose appropriate bandwidth via rule-of-thumb:
				const h = 2.0 * iqr( vals ) * pow( vals.length, -1/3 );
				const phi = gaussian.factory( 0.0, 1.0 );
				const kde = kernelSmooth.density( vals, phi, h );
				const x = linspace( min( vals ), max( vals ), 512 );
				const y = x.map( x => kde( x ) );
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
				traces.push({
					x: x,
					y: y,
					type: 'lines',
					name: key+':density',
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
		layout = {
			xaxis: {title: 'Value' },
			yaxis: {title: overlayDensity ? 'Density' : 'Count' }
		};
		layout.barmode = 'overlay';
	}
	return {
		data: traces,
		layout: layout
	};
} // end FUNCTION generateHistogramConfig()


// MAIN //

class Histogram extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			chooseBins: false
		};
	}

	generateHistogram(
		variable, group, overlayDensity, chooseBins, nBins
	) {
		const config = generateHistogramConfig({
			data: this.props.data, variable, group, overlayDensity, chooseBins, nBins
		});
		const output = {
			variable: variable,
			type: 'Chart',
			value: <div>
				<label>{variable}: </label>
				<Plotly data={config.data} layout={config.layout} />
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:HISTOGRAM', {
			variable, group, overlayDensity, chooseBins, nBins
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				title="Histogram"
				autoStart={false}
				onGenerate={this.generateHistogram.bind( this )}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Group By:"
					options={groupingVariables}
					clearable={true}
				/>
				<CheckboxInput
					legend="Overlay Density"
					defaultValue={false}
					style={{
						opacity: this.props.showDensityOption ? 1.0 : 0.0
					}}
				/>
				<div>
					<CheckboxInput
						legend="Choose # of bins"
						defaultValue={false}
						inline
						onChange={()=>{
							this.setState({
								chooseBins: !this.state.chooseBins
							});
						}}
					/>
					<SliderInput
						defaultValue={10}
						min={1}
						step={1}
						disabled={!this.state.chooseBins}
						inline
					/>
				</div>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Histogram.defaultProps = {
	defaultValue: null,
	onPlotDone() {},
	showDensityOption: false
};


// PROPERTY TYPES //

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired,
	showDensityOption: PropTypes.bool
};


// EXPORTS //

export default Histogram;
