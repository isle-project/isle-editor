// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Select, { components } from 'react-select';
import SelectInput from 'components/input/select';
import selectStyles from 'components/input/select/styles';
import CheckboxInput from 'components/input/checkbox';
import randomstring from 'utils/randomstring/alphanumeric';
import BarChart from 'components/plots/barchart';
import { DATA_EXPLORER_SHARE_BARCHART, DATA_EXPLORER_BARCHART } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


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
const Option = props => (
	<components.Option {...props} >
		{props.data.label}
		<br />
		<span style={{ fontVariant: 'small-caps' }} >{props.data.description}</span>
	</components.Option>
);
const ORDER_OPTIONS = [
	{ label: 'Total', value: 'total', description: 'by total count of each category' },
	{ label: 'Alphabetically', value: 'category', description: 'by category name' },
	{ label: 'Min', value: 'min', description: 'by minimum count inside each category' },
	{ label: 'Max', value: 'max', description: 'by maximum count inside each category' },
	{ label: 'Mean', value: 'mean', description: 'by mean count inside each category' },
	{ label: 'Median', value: 'median', description: 'by median count inside each category' }
];


// MAIN //

class BarchartMenu extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultValue, quantitative } = props;
		this.state = {
			variable: defaultValue || variables[ 0 ],
			yvar: quantitative[ 0 ],
			summary: STATS[ 0 ],
			group: null,
			horiz: false,
			stackBars: false,
			relative: false,
			totalPercent: false,
			xOrder: null,
			direction: 'ascending',
			mode: MODES[ 0 ]
		};
	}

	generateBarchart() {
		let summary;
		let yvar;
		const { variable, group, relative, totalPercent, xOrder, direction, stackBars } = this.state;
		const plotId = randomstring( 6 );
		const action = {
			variable, group, relative, totalPercent, xOrder, direction, stackBars, plotId
		};
		if ( this.state.mode === MODES[ 1 ] ) {
			action.summary = this.state.summary;
			summary = this.state.summary;
			action.yvar = this.state.yvar;
			yvar = this.state.yvar;
		}
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_BARCHART, action );
		};
		const output = <BarChart
			{...this.props}
			variable={variable}
			group={group}
			relative={relative} totalPercent={totalPercent} xOrder={xOrder}
			direction={direction} summary={summary} yvar={yvar} stackBars={stackBars}
			id={plotId}
			action={action}
			onShare={onShare}
		/>;
		this.props.logAction( DATA_EXPLORER_BARCHART, action );
		this.props.onCreated( output );
	}

	render() {
		const hideRelativeFrequencies = (
			!this.state.group || // not used without grouping
			this.state.totalPercent || // overall percent
			this.state.mode === MODES[ 1 ] // when evaluating a function
		);
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
					<Row>
						<Col>
							<FormGroup controlId="barchart-order-select">
								<FormLabel>{this.state.group ? 'Order outer groups' : 'Order x-axis'}:</FormLabel>
								<Select
									defaultValue={this.state.xOrder}
									options={ORDER_OPTIONS}
									components={{ Option }}
									isClearable={true}
									menuPlacement="top"
									onChange={( elem ) => {
										this.setState({
											xOrder: elem ? elem.value : null
										});
									}}
									styles={selectStyles}
								/>
							</FormGroup>
						</Col>
						<Col>
							<SelectInput
								legend="Order direction:"
								defaultValue={this.state.direction}
								options={[
									'ascending',
									'descending'
								]}
								menuPlacement="top"
								onChange={( value ) => {
									this.setState({
										direction: value
									});
								}}
								style={{
									display: this.state.xOrder ? 'inherit' : 'none'
								}}
							/>
						</Col>
					</Row>
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
								disabled={!this.state.group}
								style={{
									opacity: this.state.group ? 1.0 : 0.2
								}}
							/>
						</Col>
						<Col>
							<CheckboxInput
								legend="Relative frequencies inside each group"
								defaultValue={this.state.relative}
								disabled={hideRelativeFrequencies}
								onChange={( value )=>{
									this.setState({
										relative: value
									});
								}}
								style={{
									opacity: hideRelativeFrequencies ? 0.2 : 1
								}}
							/>
						</Col>
					</Row>
					<Button variant="primary" block onClick={this.generateBarchart.bind( this )}>
						{this.props.t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

BarchartMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	onSelected() {},
	session: {}
};

BarchartMenu.propTypes = {
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

export default BarchartMenu;
