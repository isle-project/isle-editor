// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import hasOwnProp from '@stdlib/assert/has-own-property';
import by from './by.js';


// FUNCTIONS //

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
			if ( hasOwnProp( freqs, key ) ) {
				let val = freqs[ key ];
				traces.push({
					y: val,
					name: key,
					type: 'box'
				});
			}
		}
	}
	return {
		data: traces,
		layout: {
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


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
			value: <Plotly fit data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( 'DATA_EXPLORER_SHARE:BOXPLOT', {
					variable, group
				});
			}} />
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
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};


// PROPERTY TYPES //

Boxplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Boxplot;
