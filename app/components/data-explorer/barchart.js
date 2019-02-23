// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectInput from 'components/input/select';
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


export function generateBarchartConfig({ data, variable, group, horiz, stackBars, relative, totalPercent, xOrder }) {
	let traces;
	let transforms;
	if ( xOrder ) {
		let order;
		if ( xOrder === 'Ascending Y' ) {
			order = 'ascending';
		} else {
			order = 'descending';
		}
		transforms = [{
			type: 'sort',
			target: horiz ? 'x' : 'y',
			order: order
		}];
	}
	const nObs = data[ variable ].length;
	if ( !group ) {
		let freqs = countBy( data[ variable ], identity );
		const categories = variable.categories || objectKeys( freqs );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		if ( totalPercent ) {
			// faster than map
			for ( let i = 0; i < counts.length; i++ ) {
				counts[ i ] = counts[ i ] / nObs;
			}
		}
		if ( horiz ) {
			traces = [ {
				y: categories,
				x: counts,
				type: 'bar',
				orientation: 'h',
				transforms: transforms
			} ];
		} else {
			traces = [ {
				y: counts,
				x: categories,
				type: 'bar',
				transforms: transforms
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
				if ( totalPercent ) {
					// faster than map
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
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
				if ( totalPercent ) {
					// faster than map
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
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
				title: totalPercent ? 'Percentage' : 'Count'
			},
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


// MAIN //

class Barchart extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultValue } = props;
		this.state = {
			xVar: defaultValue || variables[ 0 ],
			groupVar: null,
			horiz: false,
			stackBars: false,
			relative: false,
			totalPercent: false,
			xOrder: null
		};
	}

	generateBarchart() {
		const { xVar, groupVar } = this.state;
		const config = generateBarchartConfig(
			{
				data: this.props.data,
				variable: xVar,
				group: groupVar,
				...this.state
			});
		const plotId = randomstring( 6 );
		const output = {
			variable: xVar,
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
						xVar, groupVar, plotId
					});
				}}
				onSelected={( selected ) => {
					this.props.onSelected( xVar, selected );
				}}
			/>
		};
		this.props.logAction( 'DATA_EXPLORER:BARCHART', {
			xVar,
			groupVar,
			plotId
		});
		this.props.onCreated( output );
	}

	render() {
		return (
			<Card>
				<Card.Header as="h4">
					Bar Chart
					<QuestionButton title="Bar Chart" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.xVar}
						options={this.props.variables}
						onChange={( value )=>{
							this.setState({
								xVar: value
							});
						}}
					/>
					<SelectInput
						legend="Group By:"
						defaultValue={this.state.groupVar}
						options={this.props.groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								groupVar: value
							});
						}}
					/>
					<SelectInput
						legend="Order X Axis:"
						defaultValue={this.state.xOrder}
						disabled={this.state.groupVar}
						options={['Ascending Y', 'Descending Y']}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								xOrder: value
							});
						}}
					/>
					<CheckboxInput
						legend="Display Percentages"
						defaultValue={this.state.totalPercent}
						onChange={( value )=>{
							this.setState({
								totalPercent: value
							});
						}}
						disabled={this.state.stackBars & this.state.relative}
						style={{
							opacity: this.state.stackBars & this.state.relative ? 0.2 : 1
						}}
					/>
					<CheckboxInput
						legend="Horizontal Alignment"
						defaultValue={this.state.horiz}
						onChange={( value )=>{
							this.setState({
								horiz: value
							});
						}}
					/>
					<CheckboxInput
						legend="Stack bars"
						defaultValue={this.state.stackBars}
						onChange={( value )=>{
							this.setState({
								stackBars: value
							});
						}}
						disabled={!this.state.groupVar}
						style={{
							opacity: this.state.groupVar ? 1.0 : 0.2
						}}

					/>
					<CheckboxInput
						legend="Relative frequencies for each bar"
						defaultValue={this.state.relative}
						onChange={( value )=>{
							this.setState({
								relative: value
							});
						}}
						disabled={(!this.state.stackBars) || (this.state.stackBars & this.state.totalPercent)}
						style={{
							opacity: (!this.state.stackBars) || (this.state.stackBars & this.state.totalPercent) ? 0.2 : 1
						}}
					/>
					<Button variant="primary" block onClick={this.generateBarchart.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
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
