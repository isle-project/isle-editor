// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A box plot (full name: box and whisker plot, coined by famous statistician John Tukey) is a display for quantitative data. For any variable, the boxplot displays its 25% quantile (a value that is greater than 25% of the data), its median, and its 75% quantile as a box. Whiskers extend from this box up to +-1.5*IQR or the minimum/maximum.';


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
		const keys = group.categories || objectKeys( freqs );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const val = freqs[ key ];
			traces.push({
				y: val,
				name: key,
				type: 'box'
			});
		}
	}
	return {
		data: traces,
		layout: {
			title: group ? `${variable} given ${group}` : variable,
			xaxis: {
				type: 'category'
			}
		}
	};
}


// MAIN //

class Boxplot extends Component {
	constructor( props ) {
		super( props );
	}

	generateBoxplot( variable, group ) {
		const config = generateBoxplotConfig({ data: this.props.data, variable, group });
		const plotId = randomstring( 6 );
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
				this.props.logAction( 'DATA_EXPLORER_SHARE:BOXPLOT', {
					variable, group, plotId
				});
			}} />
		};
		this.props.logAction( 'DATA_EXPLORER:BOXPLOT', {
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
				autoStart={false}
				title={<span>Box Plot<QuestionButton title="Box Plot" content={DESCRIPTION} /></span>}
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
					menuPlacement="top"
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
