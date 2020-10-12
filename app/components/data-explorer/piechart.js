// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import sum from 'utils/statistic/sum';
import { DATA_EXPLORER_SHARE_PIECHART, DATA_EXPLORER_PIECHART } from 'constants/actions.js';
import extractUsedCategories from './extract_used_categories.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'Statistical display for categorical data. The arc length of each slice in the pie is proportional to the quantity of the respective category. An alternative display for categorical data is a bar chart.';
const MODES = [
	'Counts of unique values',
	'Values from a second variable'
];


// FUNCTIONS //

export function generatePiechartConfig({ data, variable, group, mode, summaryVariable }) {
	let annotations;
	let traces;
	if ( !group ) {
		let freqs;
		if ( mode === MODES[ 1 ] ) {
			freqs = by( data[ summaryVariable ], data[ variable ], sum );
		} else {
			freqs = countBy( data[ variable ], identity );
		}
		const categories = extractUsedCategories( freqs, variable );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		traces = [ {
			values: counts,
			labels: categories,
			type: 'pie'
		} ];
	} else {
		const freqs = by( data[ variable ], data[ group ], arr => {
			return countBy( arr, identity );
		});
		const keys = extractUsedCategories( freqs, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = [];

		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = freqs[ key ];
			const categories = extractUsedCategories( val, variable.categories );
			const counts = new Array( categories.length );
			for ( let i = 0; i < categories.length; i++ ) {
				counts[ i ] = val[ categories[ i ] ];
			}
			traces.push({
				values: counts,
				labels: categories,
				type: 'pie',
				name: key,
				domain: {
					x: [ ( col ) / nCols, ( col+1 ) / nCols ],
					y: [ ( row ) / nRows, ( row+0.8 ) / nRows ]
				}
			});
			annotations.push({
				text: key,
				x: ( col % 2 ? col+0.8 : col+0.2 ) / nCols,
				y: ( row+0.9 ) / nRows,
				font: {
					size: 18
				},
				showarrow: false
			});
		}
	}
	const layout = {
		annotations,
		title: group ? `${variable} given ${group}` : variable
	};
	return {
		layout,
		data: traces
	};
}

export function PieChart({ variable, group, data, mode, summaryVariable, id, action, onShare }) {
	const config = generatePiechartConfig({
		data,
		variable,
		group,
		mode,
		summaryVariable
	});
	return ( <Plotly
		editable
		draggable
		id={id}
		fit
		meta={action}
		data={config.data}
		layout={config.layout}
		onShare={onShare}
	/> );
}


// MAIN //

class PieChartMenu extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultValue, quantitative } = props;
		this.state = {
			variable: defaultValue || variables[ 0 ],
			summaryVariable: quantitative[ 0 ],
			group: null,
			mode: MODES[ 0 ]
		};
	}

	handleGenerate = () => {
		const { variable, group, mode, summaryVariable } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			variable, group, plotId
		};
		if ( mode === MODES[ 1 ] ) {
			action.summaryVariable = summaryVariable;
		}
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_PIECHART, action );
		};
		const output= <PieChart
			id={plotId}
			{...this.state}
			{...this.props}
			action={action}
			onShare={onShare}
		/>;
		this.props.logAction( DATA_EXPLORER_PIECHART, action );
		this.props.onCreated( output );
	}

	render() {
		return (
			<Card>
				<Card.Header as="h4">
					Pie Chart
					<QuestionButton title="Pie Chart" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Pie sizes represent:"
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
						<SelectInput
							legend="Set slice sizes to sum of summary variable:"
							defaultValue={this.state.summaryVariable}
							options={this.props.quantitative}
							onChange={( summaryVariable ) => {
								this.setState({ summaryVariable });
							}}
						/> : null }
					<SelectInput
						legend="Group By:"
						defaultValue={this.state.group}
						options={this.props.groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								group: value
							});
						}}
					/>
					<Button
						variant="primary" block
						onClick={this.handleGenerate}
					>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

PieChartMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {}
};

PieChartMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	quantitative: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default PieChartMenu;
