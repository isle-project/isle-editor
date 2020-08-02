// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from 'components/input/select';
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


// VARIABLES //

const DESCRIPTION = <span>Compute various statistics of interest, i.e. summary measures of the <i>quantitative</i> variables in the data set.</span>;
const customStyles = {
	control: ( base, state ) => {
		if ( state.isDisabled ) {
			return {
				...base,
				background: 'none',
				color: '#aaa',
				opacity: 0.5
			};
		}
		return {
			...base,
			background: 'rgba(186, 204, 234, 0.15)',
			boxShadow: 'none',
			cursor: 'pointer'
		};
	},
	placeholder: ( base, state ) => {
		return {
			...base,
			color: 'rgb(112, 112, 112)'
		};
	},
	option: ( base, state ) => {
		let backgroundColor = '#fff';
		let color = '#666666';
		if ( state.isFocused ) {
			backgroundColor = 'rgba(204,88,0, 0.16)';
			color = '#333';
		}
		else if ( state.isSelected ) {
			backgroundColor = '#f5faff';
			color = '#333';
		}
		return {
			...base,
			boxSizing: 'border-box',
			backgroundColor: backgroundColor,
			color: color,
			cursor: 'pointer',
			display: 'block',
			padding: '8px 10px'
		};
	},
	menuPortal: base => ({ ...base, zIndex: 1010 })
};
const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};
const QUANTILE_OPTIONS = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ].map( x => createOption( x ) );


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}

function byWithCount( arr, factor, funs, groups ) {
	let table = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( table[ factor[ i ] ]) ) {
			table[ factor[ i ] ] = [];
		}
		table[ factor[ i ] ].push( arr[ i ]);
	}
	let keys;
	if ( groups ) {
		keys = groups;
	} else {
		keys = objectKeys( table );
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

function by2WithCount( arr1, arr2, factor, funs, groups ) {
	let out = {};
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
	if ( groups ) {
		keys = groups;
	} else {
		keys = objectKeys( ret1 );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: funs.map( f => f( ret1[ key ], ret2[ key ]) ),
			size: ret1[ key ].length
		};
	}
	return out;
}


// MAIN //

class SummaryStatistics extends Component {
	constructor( props ) {
		super( props );

		const selectedStat = props.defaultStatistic || props.statistics[ 0 ];
		this.state = {
			selectedStats: [{
				value: statistic( selectedStat ),
				label: selectedStat
			}],
			variables: [ props.defaultX || props.variables[ 0 ] ],
			secondVariable: props.defaultY || props.variables[ 1 ],
			group: null,
			showSecondVarSelect: false,
			showQuantiles: false,
			quantiles: [],
			omit: false
		};

		this.statistics = props.statistics.map( e => ( { 'label': e, 'value': statistic( e ) } ));
	}

	generateStatistics = () => {
		const { data } = this.props;
		let { selectedStats, variables, secondVariable, group, omit } = this.state;
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
								groupData.push( data[ group ][ i ] );
							}
						}
					} else {
						let first = data[ variable ];
						for ( let i = 0; i < first.length; i++ ) {
							if ( isNumber( first[ i ] ) && !isnan( first[ i ] ) ) {
								x.push( first[ i ] );
								groupData.push( data[ group ][ i ] );
							}
						}
					}
				} else {
					// Case: grouping variable selected, do not omit missing values
					x = data[ variable ];
					y = data[ secondVariable ];
					groupData = data[ group ];
				}
				if ( statLabels[ 0 ] === 'Correlation' ) {
					const groups = group.categories;
					res = by2WithCount( x, y, groupData, funs, groups );
					const keys = groups || objectKeys( res );
					for ( let i = 0; i < keys.length; i++ ) {
						const key = keys[ i ];

						// Extract correlation coefficient from correlation matrix:
						res[ key ].value = res[ key ].value[ 0 ][ 1 ];
					}
					variable = `${variable} vs. ${secondVariable}`;
				} else {
					const groups = group.categories;
					res = byWithCount( x, groupData, funs, groups );
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
							styles={customStyles}
							menuPortalTarget={document.body}
						/>
					</FormGroup>
					<SelectInput
						legend="Variable(s):"
						defaultValue={this.state.variables}
						multi
						options={variables}
						onChange={( value ) => {
							this.setState({
								variables: value
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
								styles={customStyles}
								menuPortalTarget={document.body}
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
						<SelectInput
							legend="Group By:"
							options={groupingVariables}
							clearable={true}
							defaultValue={this.state.group}
							menuPlacement="top"
							onChange={( value ) => {
								this.setState({
									group: value
								});
							}}
							tooltip="Calculate the statistic(s) separately for observations from each category of a chosen grouping variable"
						/> : null
					}
					<CheckboxInput
						legend="Omit missing values"
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
						disabled={!selectedStats}
					>Calculate</Button>
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
	defaultStatistic: 'Mean',
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
