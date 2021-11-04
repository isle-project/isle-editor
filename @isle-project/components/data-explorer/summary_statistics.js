// MODULES //

import React, { Component } from 'react';
import { i18n } from '@isle-project/locales';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import SelectInput from '@isle-project/components/input/select';
import selectStyles from '@isle-project/components/input/select/styles';
import Tooltip from '@isle-project/components/tooltip';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import SummaryStatistics from '@isle-project/components/summary-statistics';
import CheckboxInput from '@isle-project/components/input/checkbox';
import CreatableSelect from 'react-select/creatable';
import QuestionButton from './question_button.js';
import { DATA_EXPLORER_SUMMARY_STATISTICS } from '@isle-project/constants/actions.js';
import STAT_DESCRIPTIONS from './statistics_descriptions.json';


// VARIABLES //

const DESCRIPTION = <span>Compute various statistics of interest, i.e. summary measures of the <i>quantitative</i> variables in the data set.</span>;
const QUANTILE_OPTIONS = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ].map( x => createOption( x ) );
const Option = props => {
	const popover = <Popover id={`${props.data.label}-popover`}>
		<PopoverContent>{STAT_DESCRIPTIONS[ i18n.language ][ props.data.label]}</PopoverContent>
	</Popover>;
	return ( <components.Option key={props.data.label} {...props} >
		<span style={{
			opacity: props.isSelected ? 0.5 : 1
		}}>{i18n.t( 'data-explorer:'+props.data.label )}</span>
		<OverlayTrigger
			trigger={['hover', 'click']}
			placement="right" rootClose overlay={popover}
		>
			<Button
				aria-label={i18n.t( 'data-explorer:'+props.data.label )}
				size="sm"
				variant="outline-secondary"
				className="question-button"
				style={{ float: 'right', fontSize: 14 }}
				onClick={( event ) => event.stopPropagation()}
			>
				<span className="fa fa-question" />
			</Button>
		</OverlayTrigger>
	</components.Option> );
};
const GroupHeading = props => {
	props = { ...props };
	props.children = i18n.t( 'data-explorer:'+props.children );
	return <components.GroupHeading {...props} />;
};


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}


// MAIN //

class SummaryStatisticsMenu extends Component {
	constructor( props ) {
		super( props );

		const selectedStat = props.defaultStatistic;
		this.state = {
			selectedStats: selectedStat ? [{
				value: selectedStat,
				label: selectedStat
			}] : null,
			variables: props.defaultX ? [ props.defaultX ] : [],
			secondVariable: props.defaultY,
			group: null,
			showSecondVarSelect: false,
			showQuantiles: false,
			quantiles: [],
			omit: false
		};
		this.createStatisticsOptions();
	}

	createStatisticsOptions = () => {
		const central = [];
		const location = [];
		const variation = [];
		const relationship = [];
		const shape = [];
		for ( let i = 0; i < this.props.statistics.length; i++ ) {
			const e = this.props.statistics[ i ];
			switch ( e ) {
				case 'Mean':
				case 'Median':
					central.push({ 'label': e, 'value': e });
					break;
				case 'First Quartile':
				case 'Third Quartile':
				case 'Quantile':
				case 'Min':
				case 'Max':
					location.push({ 'label': e, 'value': e });
					break;
				case 'Five-Number Summary':
					location.push({ 'label': e, value: null });
					break;
				case 'Range':
				case 'Interquartile Range':
				case 'Standard Deviation':
				case 'Variance':
					variation.push({ 'label': e, 'value': e });
					break;
				case 'Correlation':
				case 'Correlation Matrix':
					relationship.push({ 'label': e, 'value': e });
					break;
				case 'Skewness':
				case 'Excess Kurtosis':
					shape.push({ 'label': e, 'value': e });
					break;
			}
		}
		this.statistics = [
			{
				label: 'central-tendency-measures',
				options: central
			},
			{
				label: 'variation-measures',
				options: variation
			},
			{
				label: 'other-location-measures',
				options: location
			},
			{
				label: 'relationship-measures',
				options: relationship
			},
			{
				label: 'shape-measures',
				options: shape
			}
		];
	};

	generateStatistics = () => {
		const statistics = this.state.selectedStats.map( x => x.value );
		const quantiles = this.state.quantiles.map( x => x.value );
		const group = this.state.group ? this.state.group.map( x => x.value ) : null;
		if ( statistics[ 0 ] === 'Correlation Matrix' ) {
			const action = {
				statistics: statistics,
				variables: this.state.variables,
				group,
				omit: this.state.omit
			};
			this.props.logAction( DATA_EXPLORER_SUMMARY_STATISTICS, action );
		} else {
			const action = {
				statistics: statistics,
				variables: this.state.variables,
				secondVariable: statistics[ 0 ] === 'Correlation' ? this.state.secondVariable : null,
				group,
				omit: this.state.omit
			};
			if ( contains( statistics, 'Quantile' ) ) {
				action.quantiles = quantiles;
			}
			this.props.logAction( DATA_EXPLORER_SUMMARY_STATISTICS, action );
		}
		const elem = <SummaryStatistics
			data={this.props.data}
			statistics={statistics}
			variables={this.state.variables}
			secondVariable={this.state.showSecondVarSelect ? this.state.secondVariable : null}
			group={group}
			omit={this.state.omit}
			quantiles={quantiles}
		/>;
		this.props.onCreated( elem );
	};

	render() {
		let {
			variables,
			groupingVariables,
			t
		} = this.props;
		const selectedStats = this.state.selectedStats;
		return (
			<Card>
				<Card.Header as="h4">
					{t('summary-statistics')}
					<QuestionButton title={t('summary-statistics')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<FormGroup controlId="statistics-form-select">
						<Tooltip
							tooltip={t('statistics-tooltip')}
							placement="right"
						>
							<FormLabel>{t('statistics')}:</FormLabel>
						</Tooltip>
						<Select
							value={selectedStats}
							options={this.statistics}
							isMulti
							components={{ Option, GroupHeading }}
							hideSelectedOptions={false}
							onChange={( value ) => {
								let fiveNumberSummary = -1;
								let labels;
								if ( isArray( value ) && value.length > 0 ) {
									labels = value.map( ( x, idx ) => {
										if ( x.label === 'Five-Number Summary' ) {
											fiveNumberSummary = idx;
										}
										return x.label;
									});
									const lastLabel = labels[ labels.length-1 ];
									if (
										lastLabel === 'Correlation' ||
										lastLabel === 'Correlation Matrix'
									) {
										return this.setState({
											selectedStats: [{
												label: lastLabel,
												value: lastLabel
											}],
											showSecondVarSelect: lastLabel === 'Correlation'
										});
									}
									else if (
										labels[ 0 ] === 'Correlation' ||
										labels[ 0 ] === 'Correlation Matrix'
									) {
										value.shift();
									}
									if ( fiveNumberSummary > -1 ) {
										value = value.slice();
										const additions = [];
										if ( !contains( labels, 'Min' ) ) {
											additions.push({
												label: 'Min',
												value: 'Min'
											});
										}
										if ( !contains( labels, 'First Quartile' ) ) {
											additions.push({
												label: 'First Quartile',
												value: 'First Quartile'
											});
										}
										if ( !contains( labels, 'Median' ) ) {
											additions.push({
												label: 'Median',
												value: 'Median'
											});
										}
										if ( !contains( labels, 'Third Quartile' ) ) {
											additions.push({
												label: 'Third Quartile',
												value: 'Third Quartile'
											});
										}
										if ( !contains( labels, 'Max' ) ) {
											additions.push({
												label: 'Max',
												value: 'Max'
											});
										}
										value.splice( fiveNumberSummary, 1, ...additions);
									}
								}
								this.setState({
									selectedStats: value,
									showSecondVarSelect: false,
									showQuantiles: labels && labels.includes( 'Quantile' )
								});
							}}
							styles={selectStyles}
							menuPlacement="auto"
							menuPortalTarget={document.body}
							menuShouldScrollIntoView={false}
						/>
					</FormGroup>
					<SelectInput
						legend={t('variable-s')}
						defaultValue={this.state.variables}
						multi
						options={variables}
						onChange={( value ) => {
							this.setState({
								variables: value || []
							});
						}}
						tooltip={t('variables-statistics-tooltip')}
						menuPortalTarget={document.body}
						menuPlacement="auto"
						menuShouldScrollIntoView={false}
					/>
					{ this.state.showQuantiles ?
						<FormGroup controlId="quantiles-form-group" >
							<Tooltip
								tooltip={t('quantiles-tooltip')}
								placement="right"
							>
								<FormLabel>{t('quantiles')}</FormLabel>
							</Tooltip>
							<CreatableSelect
								defaultValue={[]}
								options={QUANTILE_OPTIONS}
								isClearable
								isMulti
								placeholder={t('quantiles-placeholder')}
								onChange={( value ) => {
									this.setState({
										quantiles: value
									});
								}}
								styles={selectStyles}
								menuPortalTarget={document.body}
								menuPlacement="auto"
								menuShouldScrollIntoView={false}
							/>
						</FormGroup>:
						null
					}
					<SelectInput
						legend={t('second-variable')}
						defaultValue={this.state.secondVariable}
						options={variables}
						style={{
							display: this.state.showSecondVarSelect ?
								'inline' : 'none'
						}}
						onChange={( value ) => {
							this.setState({
								secondVariable: value
							});
						}}
						tooltip={t('second-variable-statistic-tooltip')}
					/>
					{ groupingVariables.length > 0 ?
						<FormGroup controlId="stats-form-group">
							<Tooltip tooltip={t('group-by-statistics-tooltip')}>
								<FormLabel>{t('group-by')}</FormLabel>
							</Tooltip>
							<Select
								value={this.state.group}
								options={groupingVariables.map( e => ( { 'label': e, 'value': e } ))}
								isClearable
								isMulti
								onChange={( value ) => {
									if ( !value || value.length === 0 ) {
										this.setState({
											group: null
										});
									} else if ( value.length <= 2 ) {
										this.setState({
											group: value
										});
									}
								}}
								styles={selectStyles}
								menuPortalTarget={document.body}
								menuPlacement="auto"
								menuShouldScrollIntoView={false}
							/>
						</FormGroup> : null
					}
					<CheckboxInput
						legend={t('omit-missing')}
						tooltip={t('omit-missing-tooltip')}
						defaultValue={this.state.omit}
						onChange={( value ) => {
							this.setState({
								omit: value
							});
						}}
					/>
					<Button
						variant="primary" block
						onClick={this.generateStatistics}
						disabled={!selectedStats || this.state.variables.length === 0}
					>{t('calculate')}</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

SummaryStatisticsMenu.defaultProps = {
	groupingVariables: [],
	defaultX: null,
	defaultY: null,
	defaultStatistic: null,
	logAction() {},
	statistics: [
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation',
		'Correlation Matrix',
		'Skewness',
		'Excess Kurtosis',
		'First Quartile',
		'Third Quartile',
		'Quantile',
		'Five-Number Summary'
	]
};

SummaryStatisticsMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultStatistic: PropTypes.string,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	statistics: PropTypes.array,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default SummaryStatisticsMenu;
