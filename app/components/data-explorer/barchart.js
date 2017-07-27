// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import entries from '@stdlib/utils/entries';
import countBy from 'lodash.countby';
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

class Barchart extends Component {

	constructor( props ) {
		super( props );
	}

	generateBarchart( variable, group ) {
		let output = null;
		if ( !group ) {
			let freqs = entries( countBy( this.props.data[ variable ]) );
			let categories = freqs.map( e => e[ 0 ]);
			freqs = freqs.map( e => e[ 1 ]);

			const data = [ {
				y: freqs,
				x: categories,
				type: 'bar'
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
				return entries( countBy( arr ) );
			});
			const data = [];
			for ( let key in freqs ) {
				let val = freqs[ key ];
				let categories = val.map( e => e[ 0 ]);
				let counts = val.map( e => e[ 1 ]);
				data.push({
					y: counts,
					x: categories,
					type: 'bar',
					name: key
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
		this.props.logAction( 'DATA_EXPLORER:BARCHART', {
			variable,
			group
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				title="Bar Chart"
				autoStart={false}
				onGenerate={this.generateBarchart.bind( this )}
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

Barchart.defaultProps = {
	defaultValue: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

Barchart.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default Barchart;
