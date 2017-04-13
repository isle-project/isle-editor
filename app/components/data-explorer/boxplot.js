// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import range from 'compute-range';
import isArray from '@stdlib/utils/is-array';


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

class Boxplot extends Component {

	constructor( props ) {
		super( props );
	}

	generateBoxplot( variable, group, commonAxis ) {
		let yranges;
		let output = null;
		if ( group === 'None' ) {
			let data = this.props.data[ variable ];
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<RPlot
						code={`boxplot( c( ${data} ),
							cex.lab=2.0, cex.axis=1.5 )`}
						onDone={this.props.onPlotDone}
					/>
				</div>
			};
		} else {
			yranges = range( this.props.data[ variable ]);
			let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
				return arr;
			});
			let nPlots = Object.keys( freqs ).length;
			let code = `par(mfrow=c(ceiling(${nPlots}/2),2))`;

			for ( let key in freqs ) {
				let val = freqs[ key ];
				code += '\n';
				code += commonAxis ?
					`boxplot(c(${val}),main="${group}: ${key}",
					cex.lab=2.0, cex.main=2.0, cex.axis=1.5,ylim=c(${yranges}))` :
					`boxplot(c(${val}),main="${group}: ${key}",
					cex.lab=2.0, cex.main=2.0, cex.axis=1.5)`;
			}
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<RPlot code={code} onDone={this.props.onPlotDone} />
				</div>
			};
		}
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Box Plot"
				onGenerate={this.generateBoxplot.bind( this )}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Group By:"
					defaultValue={groupingVariables[ 0 ]}
					options={groupingVariables}
				/>
				<CheckboxInput
					legend="Use common y-axis (when grouped)"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Boxplot.defaultProps = {
	defaultValue: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

Boxplot.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default Boxplot;
