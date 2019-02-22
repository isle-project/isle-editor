// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = '';


// FUNCTIONS //

export function generateViolinplotConfig({ data, variable, group, showBox }) {
	let traces;
	if ( !group ) {
		let values = data[ variable ];
		traces = [ {
			y: values,
			type: 'violin',
			name: variable,
			box: {
				visible: showBox
			}
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
				type: 'violin',
				box: {
					visible: showBox
				}
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

class Violinplot extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showBox: false
		};
	}

	generateViolinplot( variable, group ) {
		const config = generateViolinplotConfig({ data: this.props.data, variable, group, showBox: this.state.showBox });
		const plotId = randomstring( 6 );
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly editable id={plotId} fit draggable data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( 'DATA_EXPLORER_SHARE:VIOLINPLOT', {
					variable, group, plotId
				});
			}} />
		};
		this.props.logAction( 'DATA_EXPLORER:VIOLINPLOT', {
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
				title={<span>Violin Plot<QuestionButton title="Violin Plot" content={DESCRIPTION} /></span>}
				onGenerate={this.generateViolinplot.bind( this )}
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
				<CheckboxInput
					legend="Show Boxplot"
					defaultValue={this.state.showBox}
					onChange={()=>{
						this.setState({
							showBox: !this.state.showBox
						});
					}}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Violinplot.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};


// PROPERTY TYPES //

Violinplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Violinplot;
