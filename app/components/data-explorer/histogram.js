// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import isArray from '@stdlib/assert/is-array';


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
}


// MAIN //

class Histogram extends Component {

	constructor( props ) {
		super( props );
	}

	generateHistogram(
		variable, group, overlayDensity, chooseBins, nBins, xRange, xMin, xMax
	) {
		var output;
		if ( group === 'None' ) {
			let data = this.props.data[ variable ];
			let code;
			if ( chooseBins ) {
				code = `${variable} = c(${data})
					truehist( ${variable}, nbins = ${nBins},
						prob=${overlayDensity ? 'TRUE' : 'FALSE'},
						cex.lab=2.0, cex.main=2.0, cex.axis=2.0
						${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
					)\n`;
			} else {
				code = `${variable} = c(${data})
					truehist( ${variable}, prob=${overlayDensity ? 'TRUE' : 'FALSE'},
						cex.lab=2.0, cex.main=2.0, cex.axis=2.0,
						${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
					)\n`;
			}
			if ( overlayDensity ) {
				code += `lines( density( ${variable} ) )`;
			}
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<RPlot
						code={code}
						libraries={[ 'MASS' ]}
						onDone={this.props.onPlotDone}
					/>
				</div>
			};
		} else {
			let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
				return arr;
			});
			let nPlots = Object.keys( freqs ).length;
			let code = `par(mfrow=c(ceiling(${nPlots}/2),2))\n`;
			for ( let key in freqs ) {
				let val = freqs[ key ];
				if ( chooseBins ) {
					code += `${variable} = c(${val})
						truehist( ${variable}, nbins = ${nBins},
							main="${group}: ${key}",
							prob=${overlayDensity ? 'TRUE' : 'FALSE'},
							cex.lab=2.0, cex.main=2.0, cex.axis=1.5,
							${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
							)\n`;
				} else {
					code += `${variable} = c(${val})
						truehist( ${variable}, main="${group}: ${key}",
							prob=${overlayDensity ? 'TRUE' : 'FALSE'},
							cex.lab=2.0, cex.main=2.0, cex.axis=1.5
							${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
						)\n`;
				}
				if ( overlayDensity ) {
					code += `lines( density( ${variable} ) )`;
				}
				code += '\n';
			}
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<RPlot
						code={code}
						libraries={[ 'MASS' ]}
						onDone={this.props.onPlotDone}
					/>
				</div>
			};
		}
		this.props.logAction( 'DATA_EXPLORER:HISTOGRAM', {
			variable, group, overlayDensity, chooseBins, nBins, xRange, xMin, xMax
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
					defaultValue="None"
					options={groupingVariables}
				/>
				<CheckboxInput
					inline
					legend="Overlay density"
					defaultValue={false}
				/>
				<CheckboxInput
					inline
					legend="Choose bins"
					defaultValue={false}
				/>
				<SliderInput
					legend="Number of Bins"
					defaultValue={10}
					min={1}
					max={30}
					step={1}
				/>
				<CheckboxInput
					inline
					legend="Set x-axis range"
					defaultValue={false}
				/>
				<NumberInput
					legend="Lower Bound"
					defaultValue={0}
					step={1}
					style={{
						width: 120
					}}
				/>
				<NumberInput
					legend="Upper Bound"
					defaultValue={0}
					step={1}
					style={{
						width: 120
					}}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Histogram.defaultProps = {
	defaultValue: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default Histogram;
