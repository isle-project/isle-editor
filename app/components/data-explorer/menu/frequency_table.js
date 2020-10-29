// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import FrequencyTable from 'components/tables/frequency-table';
import { DATA_EXPLORER_FREQUENCY_TABLE } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A frequency table is a tabular display for either the raw absolute or relative frequencies of a categorical variable\'s values.';


// MAIN //

class FrequencyTableMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			calculateRelative: false,
			calculateCounts: true,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3
		};
	}

	generateFrequencyTable() {
		const { variable, group, calculateCounts, calculateRelative, nDecimalPlaces } = this.state;
		const output = <FrequencyTable
			variable={variable}
			group={group}
			calculateCounts={calculateCounts}
			calculateRelative={calculateRelative}
			nDecimalPlaces={nDecimalPlaces}
			data={this.props.data}
		/>;
		this.props.logAction( DATA_EXPLORER_FREQUENCY_TABLE, {
			variable, group, calculateRelative, calculateCounts, nDecimalPlaces
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables, t } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					{t('Frequency Table')}
					<QuestionButton title={t('Frequency Table')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend={`${t('variable')}:`}
						defaultValue={this.state.variable}
						options={variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					<SelectInput
						legend={t('group-by')}
						options={groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								group: value // eslint-disable-line react/no-unused-state
							});
						}}
						tooltip="Generate a frequency table for each category of a chosen grouping variable"
					/>
					<Row>
						<Col>
							<CheckboxInput
								legend="Counts"
								defaultValue={this.state.calculateCounts}
								onChange={() => {
									this.setState({
										calculateCounts: !this.state.calculateCounts
									});
								}}
							/>
						</Col>
						<Col>
							<CheckboxInput
								legend={t('relative-frequency')}
								defaultValue={this.state.calculateRelative}
								onChange={() => {
									this.setState({
										calculateRelative: !this.state.calculateRelative
									});
								}}
							/>
						</Col>
					</Row>
					{ this.state.relativeFreqs ? <p>Report relative frequencies to
						<NumberInput
							inline
							width={50}
							max={16}
							min={0}
							defaultValue={this.state.nDecimalPlaces}
							onChange={( value ) => {
								this.setState({
									nDecimalPlaces: value
								});
							}}
						/>
						decimal place(s).
					</p> : null }
					<Button
						variant="primary"
						block
						onClick={this.generateFrequencyTable.bind( this )}
						disabled={!this.state.calculateCounts && !this.state.calculateRelative}
					>
						{t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

FrequencyTableMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {}
};

FrequencyTableMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default FrequencyTableMenu;
