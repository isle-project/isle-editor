// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import SelectInput from 'components/input/select';
import selectStyles from 'components/input/select/styles';
import Tooltip from 'components/tooltip';
import statistic from 'utils/statistic';
import objectKeys from '@stdlib/utils/keys';
import isArray from '@stdlib/assert/is-array';
import papplyRight from '@stdlib/utils/papply-right';
import round from '@stdlib/math/base/special/round';
import CheckboxInput from 'components/input/checkbox';
import CreatableSelect from 'react-select/creatable';
import QuestionButton from './question_button.js';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import { DATA_EXPLORER_SUMMARY_STATISTICS } from 'constants/actions.js';
import extractUsedCategories from './extract_used_categories.js';
import STAT_DESCRIPTIONS from './statistics_descriptions.json';


// VARIABLES //

const DESCRIPTION = <span>Compute various statistics of interest, i.e. summary measures of the <i>quantitative</i> variables in the data set.</span>;
const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};
const QUANTILE_OPTIONS = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ].map( x => createOption( x ) );
const Option = props => {
	const popover = <Popover id={`${props.data.label}-popover`}>
		<PopoverContent>{props.data.description}</PopoverContent>
	</Popover>;
	return ( <components.Option {...props} >
		<span style={{
			opacity: props.isSelected ? 0.5 : 1
		}}>{props.data.label}</span>
		{ props.showDefinitions ? <OverlayTrigger trigger={['hover', 'focus']} placement="right" rootClose overlay={popover} >
			<Button
				size="sm"
				variant="outline-secondary"
				className="question-button"
				style={{ float: 'right', fontSize: 14 }}
			>
				<span className="fa fa-question" />
			</Button>
		</OverlayTrigger> : null }
	</components.Option> );
};


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}

function byWithCount( arr, factor, funs, group ) {
	let table = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( table[ factor[ i ] ]) ) {
			table[ factor[ i ] ] = [];
		}
		table[ factor[ i ] ].push( arr[ i ]);
	}
	let keys = objectKeys( table );
	if ( group.length === 2 ) {
		const cat1 = group[ 0 ].categories;
		const cat2 = group[ 1 ].categories;
		if ( cat1 && cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else if ( cat1 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				return as[ 1 ].localeCompare( bs[ 1 ], void 0, SORT_OPTS );
			});
		}
		else if ( cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = as[ 0 ].localeCompare( bs[ 0 ], void 0, SORT_OPTS );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else {
			keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
		}
	} else if ( group.length === 1 && group[ 0 ].categories ) {
		keys = extractUsedCategories( table, group[ 0 ] );
	} else {
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	const out = {};
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: funs.map( f => f( table[ key ] ) ),
			size: table[ key ].length
		};
	}
	return out;
}

function by2WithCount( arr1, arr2, factor, funs, group ) {
	let result = {};
	let ret1 = {};
	let ret2 = {};
	for ( let i = 0; i < factor.length; i++ ) {
		if ( !isArray( ret1[ factor[ i ] ]) ) {
			ret1[ factor[ i ] ] = [];
			ret2[ factor[ i ] ] = [];
		}
		ret1[ factor[ i ] ].push( arr1[ i ]);
		ret2[ factor[ i ] ].push( arr2[ i ]);
	}
	let keys;
	if ( group.length === 1 ) {
		keys = extractUsedCategories( ret1, group[ 0 ] );
	} else {
		keys = objectKeys( ret1 );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		result[ key ] = {
			value: funs.map( f => f( ret1[ key ], ret2[ key ]) ),
			size: ret1[ key ].length
		};
	}
	return { keys, result };
}


// MAIN //

class SummaryStatistics extends Component {
	constructor( props ) {
		super( props );

		const selectedStat = props.defaultStatistic;
		this.state = {
			selectedStats: selectedStat ? [{
				value: statistic( selectedStat ),
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
		const central = [];
		const location = [];
		const variation = [];
		const relationship = [];
		const shape = [];
		for ( let i = 0; i < props.statistics.length; i++ ) {
			const e = props.statistics[ i ];
			switch ( e ) {
				case 'Mean':
				case 'Median':
					central.push({ 'label': props.t( e ), 'value': statistic( e ), 'description': STAT_DESCRIPTIONS[ e ] });
					break;
				case 'First Quartile':
				case 'Third Quartile':
				case 'Quantile':
				case 'Min':
				case 'Max':
					location.push({ 'label': props.t( e ), 'value': statistic( e ), 'description': STAT_DESCRIPTIONS[ e ] });
					break;
				case 'Range':
				case 'Interquartile Range':
				case 'Standard Deviation':
				case 'Variance':
					variation.push({ 'label': props.t( e ), 'value': statistic( e ), 'description': STAT_DESCRIPTIONS[ e ] });
					break;
				case 'Correlation':
					relationship.push({ 'label': props.t( e ), 'value': statistic( e ), 'description': STAT_DESCRIPTIONS[ e ] });
					break;
				case 'Skewness':
				case 'Excess Kurtosis':
					shape.push({ 'label': props.t( e ), 'value': statistic( e ), 'description': STAT_DESCRIPTIONS[ e ] });
					break;
			}
		}
		this.statistics = [
			{
				label: 'Central Tendency Measures',
				options: central
			},
			{
				label: 'Variation Measures',
				options: variation
			},
			{
				label: 'Other Location Measures',
				options: location
			},
			{
				label: 'Relationship Measures',
				options: relationship
			},
			{
				label: 'Shape Measures',
				options: shape
			}
		];
	}

	generateStatistics = () => {
		const { data } = this.props;
		let { selectedStats, variables, secondVariable, group, omit } = this.state;
		group = group ? group.map( x => x.value ) : null;
		const funs = [];
		const statLabels = [];
		for ( let i = 0; i < selectedStats.length; i++ ) {
			const stat = selectedStats[ i ];
			if ( stat.label === 'Quantile' ) {
				for ( let j = 0; j < this.state.quantiles.length; j++ ) {
					const quantile = this.state.quantiles[ j ].value;
					funs.push(
						papplyRight( stat.value, quantile, 5 )
					);
					statLabels.push(
						`${round( quantile*100 )}% Quantile`
					);
				}
			} else {
				funs.push( stat.value );
				statLabels.push( stat.label );
			}
		}
		const result = {};
		for ( let i = 0; i < variables.length; i++ ) {
			let groupData;
			let res;
			let x;
			let y;
			const variable = variables[ i ];
			if ( group ) {
				if ( omit ) {
					// Case: grouping variable selected, omit missing values
					x = [];
					y = [];
					groupData = [];
					if ( variable && this.state.showSecondVarSelect ) {
						let first = data[ variable ];
						let second = data[ secondVariable ];
						for ( let i = 0; i < first.length; i++ ) {
							if (
								( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) &&
								( isNumber( second[ i ] ) && !isnan( second[ i ] ) )
							) {
								x.push( first[ i ] );
								y.push( second[ i ] );
								const groupLabel = group.map( g => {
									return data[ g ][ i ];
								}).join( ':' );
								groupData.push( groupLabel );
							}
						}
					} else {
						let first = data[ variable ];
						for ( let i = 0; i < first.length; i++ ) {
							if ( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) {
								x.push( first[ i ] );
								const groupLabel = group.map( g => {
									return data[ g ][ i ];
								}).join( ':' );
								groupData.push( groupLabel );
							}
						}
					}
				} else {
					// Case: grouping variable(s) selected, do not omit missing values
					x = data[ variable ];
					y = data[ secondVariable ];
					if ( group.length === 2 ) {
						groupData = [];
						for ( let i = 0; i < data[ variable ].length; i++ ) {
							const groupLabel = group.map( g => {
								return data[ g ][ i ];
							}).join( ':' );
							groupData.push( groupLabel );
						}
					} else {
						groupData = data[ group[ 0 ] ];
					}
				}
				if ( statLabels[ 0 ] === 'Correlation' ) {
					const out = by2WithCount( x, y, groupData, funs, group );
					res = out.result;
					const keys = out.keys;
					for ( let i = 0; i < keys.length; i++ ) {
						const key = keys[ i ];

						// Extract correlation coefficient from correlation matrix:
						res[ key ].value = res[ key ].value[ 0 ][ 1 ];
					}
					variable = `${variable} vs. ${secondVariable}`;
				} else {
					res = byWithCount( x, groupData, funs, group );
				}
			} else {
				// Case: no grouping variable selected
				if ( omit ) {
					x = [];
					y = [];
					if ( variable && this.state.showSecondVarSelect ) {
						let first = data[ variable ];
						let second = data[ secondVariable ];
						for ( let i = 0; i < first.length; i++ ) {
							if (
								( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) &&
								( isNumber( second[ i ] ) && !isnan( second[ i ] ) )
							) {
								x.push( first[ i ] );
								y.push( second[ i ] );
							}
						}
					} else {
						let first = data[ variable ];
						for ( let i = 0; i < first.length; i++ ) {
							if ( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) {
								x.push( first[ i ] );
							}
						}
					}
				} else {
					x = data[ variable ];
					y = data[ secondVariable ];
				}
				if ( statLabels[ 0 ] === 'Correlation' ) {
					res = funs.map( f => f( x, y ) );
					// Extract correlation coefficient from correlation matrix:
					res = {
						value: res[ 0 ][ 1 ],
						size: x.length
					};
					variable = `${variable} vs. ${secondVariable}`;
				}
				else {
					res = {
						value: funs.map( f => f( x ) ),
						size: x.length
					};
				}
			}
			result[ variable ] = res;
		}
		const output = {
			variables: variables,
			statistics: statLabels,
			type: 'Statistics',
			result,
			group
		};
		this.props.logAction( DATA_EXPLORER_SUMMARY_STATISTICS, {
			statistic: statLabels,
			variables,
			secondVariable: statLabels[ 0 ] === 'Correlation' ? secondVariable : null,
			group
		});
		this.props.onCreated( output );
	}

	render() {
		let {
			variables,
			groupingVariables
		} = this.props;
		const selectedStats = this.state.selectedStats;
		return (
			<Card>
				<Card.Header as="h4">
					Summary Statistics
					<QuestionButton title="Summary Statistics" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<FormGroup controlId="statistics-form-select">
						<Tooltip
							tooltip="One or more statistics to compute for the variable of interest"
							placement="right"
						>
							<FormLabel>Statistic(s):</FormLabel>
						</Tooltip>
						<Select
							value={selectedStats}
							options={this.statistics}
							isMulti
							components={{ Option }}
							hideSelectedOptions={false}
							onChange={( value ) => {
								let labels;
								if ( isArray( value ) && value.length > 0 ) {
									labels = value.map( x => x.label );
									if ( labels[ labels.length-1 ] === 'Correlation' ) {
										return this.setState({
											selectedStats: [{
												label: 'Correlation',
												value: statistic( 'Correlation' )
											}],
											showSecondVarSelect: true
										});
									}
									else if ( labels[ 0 ] === 'Correlation' ) {
										value.shift();
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
						legend="Variable(s):"
						defaultValue={this.state.variables}
						multi
						options={variables}
						onChange={( value ) => {
							this.setState({
								variables: value || []
							});
						}}
						tooltip="Quantitative variable for which to compute statistic(s)"
					/>
					{ this.state.showQuantiles ?
						<FormGroup controlId="quantiles-form-group" >
							<Tooltip
								tooltip="Enter any numbers between zero and one"
								placement="right"
							>
								<FormLabel>Quantile(s):</FormLabel>
							</Tooltip>
							<CreatableSelect
								defaultValue={[]}
								options={QUANTILE_OPTIONS}
								isClearable
								isMulti
								placeholder="Enter quantiles to compute..."
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
						legend="Second Variable:"
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
						tooltip="Second variable for computing bivariate statistic"
					/>
					{ groupingVariables.length > 0 ?
						<FormGroup controlId="stats-form-group">
							<Tooltip tooltip="Calculate the statistic(s) separately for observations from each category of either one or two grouping variable(s)">
								<FormLabel>Group By:</FormLabel>
							</Tooltip>
							<Select
								value={this.state.group}
								options={groupingVariables.map( e => ( { 'label': e, 'value': e } ))}
								isClearable
								isMulti
								onChange={( value ) => {
									if ( !value || value.length <= 2 ) {
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
						legend={this.props.t('omit-missing')}
						tooltip="If not ticked, result will be null if variable contains missing values"
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
					>{this.props.t('calculate')}</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

SummaryStatistics.defaultProps = {
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
		'Skewness',
		'Excess Kurtosis',
		'First Quartile',
		'Third Quartile',
		'Quantile'
	]
};

SummaryStatistics.propTypes = {
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

export default SummaryStatistics;
