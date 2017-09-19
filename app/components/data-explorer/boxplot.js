// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
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
} // end FUNCTION by()

export function generateBoxplotConfig({ data, variable, group }) {
	let traces;
	if ( !group ) {
		let values = data[ variable ];
		traces = [ {
			y: values,
			type: 'box',
			name: variable
		} ];
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		for ( let key in freqs ) {
			let val = freqs[ key ];
			traces.push({
				y: val,
				name: key,
				type: 'box'
			});
		}
	}
	return {
		data: traces,
		layout: {}
	};
} // end FUNCTION generateBoxplotConfig()


// MAIN //

class Boxplot extends Component {

	constructor( props ) {
		super( props );
	}

	generateBoxplot( variable, group ) {
		const config = generateBoxplotConfig({ data: this.props.data, variable, group});
		const output = {
			variable: variable,
			type: 'Chart',
			value: <div>
				<label>{variable}: </label>
				<Plotly data={config.data} layout={config.layout} />
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:BOXPLOT', {
			variable,
			group
		});
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
					options={groupingVariables}
					clearable={true}
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
