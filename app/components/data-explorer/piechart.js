// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import isArray from '@stdlib/assert/is-array';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';


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

export function generatePiechartConfig({ data, variable, group }) {
	let annotations;
	let traces;
	if ( !group ) {
		let freqs = entries( countBy( data[ variable ], identity ) );
		let categories = freqs.map( e => e[ 0 ]);
		freqs = freqs.map( e => e[ 1 ]);

		traces = [ {
			values: freqs,
			labels: categories,
			type: 'pie'
		} ];
	} else {
		const freqs = by( data[ variable ], data[ group ], arr => {
			return entries( countBy( arr, identity ) );
		});
		const nPlots = Object.keys( freqs ).length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = [];

		let i = 0;
		for ( let key in freqs ) {
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = freqs[ key ];
			const categories = val.map( e => e[ 0 ]);
			const counts = val.map( e => e[ 1 ]);
			traces.push({
				values: counts,
				labels: categories,
				type: 'pie',
				name: key,
				domain: {
					x: [ ( col ) / nCols, ( col+1 ) / nCols ],
					y: [ ( row ) / nRows, ( row+0.8 ) / nRows ]
				}
			});
			annotations.push({
				text: key,
				x: ( col % 2 ? col+0.8 : col+0.2 ) / nCols ,
				y: ( row+0.9 ) / nRows,
				font: {
					size: 18
				},
				showarrow: false
			});
			i += 1;
		}
	}
	const layout = {
		annotations,
		title: group ? `${variable} by ${group}` : variable
	};
	return {
		layout,
		data: traces
	};
} // end FUNCTION generatePiechartConfig()


// MAIN //

class PieChart extends Component {

	constructor( props ) {
		super( props );
	}

	generatePiechart( variable, group ) {
		const config = generatePiechartConfig({ data: this.props.data, variable, group });
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:PIECHART', {
						variable, group
					});
				}}
			/>
		};
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
