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
}


// MAIN //

class Boxplot extends Component {

	constructor( props ) {
		super( props );
	}

	generateBoxplot( variable, group ) {
		let output = null;
		if ( !group ) {
			let data = this.props.data[ variable ];
			data = [ {
				y: data,
				type: 'box',
				name: variable
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
				return arr;
			});
			let data = [];
			for ( let key in freqs ) {
				let val = freqs[ key ];
				data.push({
					y: val,
					name: key,
					type: 'box'
				});
			}
			output = {
				variable: variable,
				type: 'Chart',
				value: <div>
					<label>{variable}: </label>
					<Plotly data={data} />
				</div>
			};
		}
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
