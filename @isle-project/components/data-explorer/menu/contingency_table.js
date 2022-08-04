// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import { CONTINGENCY_TABLE } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:contingency-table' );


// MAIN //

class ContingencyTableMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			relativeFreqs: false,
			rowVar: props.defaultRowVar || props.variables[ 0 ],
			colVar: props.defaultColVar || props.variables[ 1 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3,
			variables: props.variables,
			display: []
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.variables.length !== state.variables.length ) {
			debug( 'Available variables have changed...' );
			return {
				rowVar: props.defaultRowVar || props.variables[ 0 ],
				colVar: props.defaultColVar || props.variables[ 1 ],
				variables: props.variables
			};
		}
		return null;
	}

	generateContingencyTable() {
		const { rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display } = this.state;
		if ( !rowVar || !colVar ) {
			return this.props.session.addNotification({
				title: this.props.t('select-variables'),
				message: this.props.t('select-row-and-column-variable'),
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <ContingencyTable
			rowVar={rowVar}
			colVar={colVar}
			group={group}
			relativeFreqs={relativeFreqs}
			nDecimalPlaces={nDecimalPlaces}
			display={display}
			data={this.props.data}
		/>;
		this.props.logAction( CONTINGENCY_TABLE, {
			rowVar, colVar, group, relativeFreqs, display
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables, t } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					{t('Contingency Table')}
					<QuestionButton title={t('Contingency Table')} content={t('Contingency Table-description')} />
				</Card.Header>
				<Card.Body className="d-grid gap-3" >
					<SelectInput
						legend={t('row-variable')}
						defaultValue={this.state.rowVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								rowVar: value
							});
						}}
					/>
					<SelectInput
						legend={t('column-variable')}
						defaultValue={this.state.colVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								colVar: value
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
						tooltip={t('contingency-table-group-tooltip')}
					/>
					<CheckboxInput
						legend={t('relative-frequency')}
						defaultValue={false}
						onChange={() => {
							this.setState({
								relativeFreqs: !this.state.relativeFreqs
							});
						}}
					/>
					<SelectInput
						legend={t('display')}
						options={['Row Percent', 'Column Percent']}
						multi
						onChange={( display ) => {
							this.setState({
								display: display ? display : []
							});
						}}
					/>
					{ this.state.relativeFreqs || this.state.display.length > 0 ? <p>{t('report-relative-frequencies')}
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
						{t('decimal-places')}
					</p> : null }
					<Button variant="primary" onClick={this.generateContingencyTable.bind( this )}>
						{t('generate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ContingencyTableMenu.defaultProps = {
	defaultRowVar: null,
	defaultColVar: null,
	groupingVariables: null,
	logAction() {}
};

ContingencyTableMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultColVar: PropTypes.string,
	defaultRowVar: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ContingencyTableMenu;
