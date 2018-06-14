// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import { generate } from 'randomstring';
import entries from '@stdlib/utils/entries';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import hasOwnProp from '@stdlib/assert/has-own-property';
import by from './by.js';


// FUNCTIONS //

export function generateBarchartConfig({ data, variable, group }) {
	let traces;
	if ( !group ) {
		let freqs = entries( countBy( data[ variable ], identity ) );
		let categories = freqs.map( e => e[ 0 ]);
		freqs = freqs.map( e => e[ 1 ]);
		traces = [ {
			y: freqs,
			x: categories,
			type: 'bar'
		} ];
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return entries( countBy( arr, identity ) );
		});
		traces = [];
		for ( let key in freqs ) {
			if ( hasOwnProp( freqs, key ) ) {
				let val = freqs[ key ];
				let categories = val.map( e => e[ 0 ]);
				let counts = val.map( e => e[ 1 ]);
				traces.push({
					y: counts,
					x: categories,
					type: 'bar',
					name: key
				});
			}
		}
	}
	return {
		data: traces,
		layout: {
			xaxis: {
				title: variable
			},
			yaxis: {
				title: 'Count'
			},
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


// MAIN //

class Barchart extends Component {
	constructor( props ) {
		super( props );
	}

	generateBarchart( variable, group ) {
		const config = generateBarchartConfig({ data: this.props.data, variable, group });
		const plotId = generate( 6 );
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly editable id={plotId} fit data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( 'DATA_EXPLORER_SHARE:BARCHART', {
					variable, group, plotId
				});
			}} />
		};
		this.props.logAction( 'DATA_EXPLORER:BARCHART', {
			variable,
			group,
			plotId
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
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};


// PROPERTY TYPES //

Barchart.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Barchart;
