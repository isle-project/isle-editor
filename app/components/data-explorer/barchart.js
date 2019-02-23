// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import CheckboxInput from 'components/input/checkbox';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import randomstring from 'utils/randomstring/alphanumeric';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A bar chart is a graph that displays categorical data as rectangular bars with the bar heights being proportional to the frequency of each category. When grouping by a second variable, the bar chart becomes a grouped bar chart, in which multiple bars are shown for each category. An alternative would be to stack the bars on top of each other; in this case, the chart is called a stacked bar chart.';


// FUNCTIONS //


export function generateBarchartConfig({ data, variable, group, horiz, stackBars, relative }) {
	let traces;
	if ( !group ) {
		let freqs = countBy( data[ variable ], identity );
		const categories = variable.categories || objectKeys( freqs );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		if ( horiz ) {
			traces = [ {
				y: categories,
				x: counts,
				type: 'bar',
				orientation: 'h'
			} ];
		} else {
			traces = [ {
				y: counts,
				x: categories,
				type: 'bar'
			} ];
		}
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return countBy( arr, identity );
		});
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		if ( relative ) {
			var catCounts = countBy( data[ variable ], identity );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ] / catCounts[ categories[ i ] ];
				}
				if ( horiz ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
					});
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ];
				}
				if ( horiz ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
					});
				}
			}
		}
	}
	return {
		data: traces,
		layout: {
			barmode: stackBars ? 'stack' : null,
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

	generateBarchart( variable, group, horiz, stackBars, relative ) {
		const config = generateBarchartConfig({ data: this.props.data, variable, group, horiz, stackBars, relative });
		const plotId = randomstring( 6 );
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly
				editable draggable id={plotId} fit data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:BARCHART', {
						variable, group, plotId
					});
				}}
				onSelected={( selected ) => {
					this.props.onSelected( variable, selected );
				}}
			/>
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
				title={<span>Bar Chart<QuestionButton title="Bar Chart" content={DESCRIPTION} /></span>}
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
					menuPlacement="top"
				/>
				<CheckboxInput
					legend="Horizontal Alignment"
					defaultValue={false}
				/>
				<CheckboxInput
					legend="Stack bars"
					defaultValue={false}
				/>
				<CheckboxInput
					legend="Relative frequencies for each bar"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

Barchart.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	onSelected() {},
	session: {}
};

Barchart.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	onSelected: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Barchart;
