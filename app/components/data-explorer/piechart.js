// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import Plotly from 'components/plotly';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
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

class PieChart extends Component {

	constructor( props ) {
		super( props );
	}

	generatePiechart( variable, group ) {
		let plotCommand = 'pie';
		let label = 'labels';
		let output = null;

		if ( !group ) {
			let freqs = entries( countBy( this.props.data[ variable ], identity ) );
			let categories = freqs.map( e => e[ 0 ]);
			freqs = freqs.map( e => e[ 1 ]);

			var data = [ {
				values: freqs,
				labels: categories,
				type: 'pie'
			} ];
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<Plotly data={data} />
				</div>
			};
		} else {
			let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
				return entries( countBy( arr, identity ) );
			});

			let nPlots = Object.keys( freqs ).length;
			let code = `par(mfrow=c(ceiling(${nPlots}/2),2))`;
			for ( let key in freqs ) {
				let val = freqs[ key ];
				let categories = val.map( e => '"'+e[ 0 ]+'"' );
				let counts = val.map( e => e[ 1 ]);
				code += '\n';
				code += `${plotCommand}(c(${counts}),
					${label}=c(${categories}),
					main="${group}: ${key}",
					cex.lab=2.0, cex.main=2.0, cex.axis=2.0, cex=1.5 )`;
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
		this.props.logAction( 'DATA_EXPLORER:PIECHART', {
			variable,
			group
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				title="Pie Chart"
				autoStart={false}
				onGenerate={this.generatePiechart.bind( this )}
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
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

PieChart.defaultProps = {
	defaultValue: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

PieChart.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default PieChart;
