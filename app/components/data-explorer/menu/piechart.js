// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectInput from 'components/input/select';
import randomstring from 'utils/randomstring/alphanumeric';
import PieChart from 'components/plots/piechart';
import { DATA_EXPLORER_SHARE_PIECHART, DATA_EXPLORER_PIECHART } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Statistical display for categorical data. The arc length of each slice in the pie is proportional to the quantity of the respective category. An alternative display for categorical data is a bar chart.';
const MODES = [
	'Counts of unique values',
	'Values from a second variable'
];


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
			{...this.props}
			variable={variable}
			group={group}
			summaryVariable={mode === MODES[ 1 ] ? summaryVariable : null}
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
						legend={`${this.props.t('variable')}:`}
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
						legend={`${this.props.t('group-by')}:`}
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
					>{this.props.t('generate')}</Button>
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
