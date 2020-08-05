// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import CheckboxInput from 'components/input/checkbox';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import randomstring from 'utils/randomstring/alphanumeric';
import { DATA_EXPLORER_SHARE_BARCHART, DATA_EXPLORER_BARCHART } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import statistic from 'utils/statistic';
import by2 from './by2.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A bar chart is a graph that displays categorical data as rectangular bars with the bar heights being proportional to the frequency of each category. When grouping by a second variable, the bar chart becomes a grouped bar chart, in which multiple bars are shown for each category. An alternative would be to stack the bars on top of each other; in this case, the chart is called a stacked bar chart.';
const STATS = [
	'Mean',
	'Median',
	'Min',
	'Max',
	'Sum'
];
const MODES = [
	'Counts of distinct values',
	'Function evaluated for a variable'
];


// FUNCTIONS //


export function generateBarchartConfig({ data, variable, yvar, summary, group, horiz, mode, stackBars, relative, totalPercent, xOrder }) {
	let traces;
	let transforms;
	if ( xOrder ) {
		let order;
		if ( xOrder === 'in ascending order' ) {
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
	const allCats = new Set();
	if ( !group ) {
		let freqs;
		if ( mode === MODES[ 1 ] ) {
			freqs = by( data[ yvar ], data[ variable ], statistic( summary ) );
		} else {
			freqs = countBy( data[ variable ], identity );
		}
		const categories = variable.categories || objectKeys( freqs );
		categories.forEach( allCats.add, allCats );

		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		if ( totalPercent ) {
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
		let freqs;
		if ( mode === MODES[ 1 ] ) {
			freqs = by2( data[ group ], data[ yvar ], data[ variable ], ( labels, vals ) => {
				return by( vals, labels, statistic( summary ) );
			});
		} else {
			freqs = by( data[ group ], data[ variable ], arr => {
				return countBy( arr, identity );
			});
		}
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		if ( relative ) {
			const catCounts = countBy( data[ group ], identity );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				categories.forEach( allCats.add, allCats );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ] / catCounts[ categories[ i ] ];
				}
				if ( totalPercent ) {
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
						orientation: 'h',
						transforms: transforms
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key,
						transforms: transforms
					});
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				categories.forEach( allCats.add, allCats );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ];
				}
				if ( totalPercent ) {
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
						orientation: 'h',
						transforms: transforms
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key,
						transforms: transforms
					});
				}
			}
		}
	}
	let xaxis;
	let yaxis;
	if ( horiz ) {
		xaxis = {
			title: totalPercent ? 'Percentage' : 'Count'
		};
		yaxis = {
			title: group ? group : variable,
			tickmode: 'array',
			tickvals: Array.from( allCats ),
			ticktext: Array.from( allCats )
		};
	} else {
		xaxis = {
			title: group ? group : variable,
			tickmode: 'array',
			tickvals: Array.from( allCats ),
			ticktext: Array.from( allCats )
		};
		yaxis = {
			title: totalPercent ? 'Percentage' : 'Count'
		};
	}
	return {
		data: traces,
		layout: {
			barmode: stackBars ? 'stack' : null,
			xaxis,
			yaxis,
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


// MAIN //

class Barchart extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultValue, quantitative } = props;
		this.state = {
			variable: defaultValue || variables[ 0 ],
			yvar: quantitative[ 0 ],
			summary: STATS[ 0 ],
			groupVar: null,
			horiz: false,
			stackBars: false,
			relative: false,
			totalPercent: false,
			xOrder: null,
			mode: MODES[ 0 ]
		};
	}

	generateBarchart() {
		const { variable, groupVar } = this.state;
		const config = generateBarchartConfig(
			{
				data: this.props.data,
				variable,
				group: groupVar,
				...this.state
			});
		const plotId = randomstring( 6 );
		const action = {
			variable, groupVar, plotId
		};
		const output = {
			variable,
			type: 'Chart',
			value: <Plotly
				editable draggable id={plotId} fit data={config.data}
				layout={config.layout}
				meta={action}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( DATA_EXPLORER_SHARE_BARCHART, action );
				}}
				onSelected={( selected ) => {
					this.props.onSelected( variable, selected );
				}}
			/>
		};
		this.props.logAction( DATA_EXPLORER_BARCHART, action );
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
						legend="Bars represent:"
						defaultValue={this.state.mode}
						options={MODES}
						onChange={( value )=>{
							this.setState({
								mode: value
							});
						}}
					/>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={this.props.variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					{ this.state.mode === MODES[ 1 ] ?
						<Row>
							<Col>
								<SelectInput
									legend="y-axis:"
									defaultValue={this.state.yvar}
									options={this.props.quantitative}
									onChange={( yvar ) => {
										this.setState({ yvar });
									}}
								/>
							</Col>
							<Col>
								<SelectInput
									legend="Summary function:"
									defaultValue={this.state.summary}
									options={STATS}
									onChange={( summary ) => {
										this.setState({ summary });
									}}
								/>
							</Col>
						</Row> : null }
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
						legend="Order bars by frequency (optional)"
						defaultValue={this.state.xOrder}
						options={[ 'in ascending order', 'in descending order']}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								xOrder: value
							});
						}}
					/>
					<Row>
						<Col>
							{ this.state.mode === MODES[ 0 ] ? <CheckboxInput
								legend="Total Percentages"
								defaultValue={this.state.totalPercent}
								onChange={( value )=>{
									this.setState({
										totalPercent: value
									});
								}}
								disabled={this.state.relative}
								style={{
									opacity: this.state.relative ? 0.2 : 1
								}}
							/> : null }
						</Col>
						<Col>
							<CheckboxInput
								legend="Flip Coordinates"
								defaultValue={this.state.horiz}
								onChange={( value )=>{
									this.setState({
										horiz: value
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
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
						</Col>
						<Col>
							<CheckboxInput
								legend="Relative frequencies inside each group"
								defaultValue={this.state.relative}
								disabled={!this.state.groupVar || this.state.totalPercent}
								onChange={( value )=>{
									this.setState({
										relative: value
									});
								}}
								style={{
									opacity: (!this.state.groupVar || this.state.totalPercent) ? 0.2 : 1
								}}
							/>
						</Col>
					</Row>
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
