// MODULES //

import React, { Component } from 'react';
import i18next from 'i18next';
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
import extractUsedCategories from 'utils/extract-used-categories';
import STAT_DESCRIPTIONS from './statistics_descriptions.json';


// VARIABLES //

const DESCRIPTION = <span>Compute various statistics of interest, i.e. summary measures of the <i>quantitative</i> variables in the data set.</span>;
const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};
const QUANTILE_OPTIONS = [ 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ].map( x => createOption( x ) );
const Option = props => {
	const popover = <Popover id={`${props.data.label}-popover`}>
		<PopoverContent>{STAT_DESCRIPTIONS[ i18next.language ][ props.data.label]}</PopoverContent>
	</Popover>;
	return ( <components.Option {...props} >
		<span style={{
			opacity: props.isSelected ? 0.5 : 1
		}}>{i18next.t( 'data-explorer:'+props.data.label )}</span>
		<OverlayTrigger
			trigger={['hover', 'click']}
			placement="right" rootClose overlay={popover}
		>
			<Button
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
	props.children = i18next.t( 'data-explorer:'+props.children );
	return <components.GroupHeading {...props} />;
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

function groupedCompleteCases( arrs, groupData ) {
	const indices = [];
	const len = arrs[ 0 ].length;
	for ( let j = 0; j < len; j++ ) {
		let complete = true;
		for ( let i = 0; i < arrs.length; i++ ) {
			const x = arrs[ i ][ j ];
			if ( !isNumber( x ) || isnan( x ) ) {
				complete = false;
				break;
			}
		}
		if ( complete ) {
			indices.push( j );
		}
	}
	const out = {};
	for ( let i = 0; i < arrs.length; i++ ) {
		for ( let j = 0; j < indices.length; j++ ) {
			const group = groupData[ indices[ j ] ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arrs.length );
				for ( let k = 0; k < arrs.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			const idx = indices[ j ];
			out[ group ][ i ].push( arrs[ i ][ idx ] );
		}
	}
	return out;
}

function groupedCases( arrs, groupData ) {
	const out = {};
	const len = arrs[ 0 ].length;
	for ( let i = 0; i < arrs.length; i++ ) {
		for ( let j = 0; j < len; j++ ) {
			const group = groupData[ j ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arrs.length );
				for ( let k = 0; k < arrs.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			out[ group ][ i ].push( arrs[ i ][ j ] );
		}
	}
	return out;
}

function completeCases( arrs ) {
	const indices = [];
	const len = arrs[ 0 ].length;
	for ( let j = 0; j < len; j++ ) {
		let complete = true;
		for ( let i = 0; i < arrs.length; i++ ) {
			const x = arrs[ i ][ j ];
			if ( !isNumber( x ) || isnan( x ) ) {
				complete = false;
				break;
			}
		}
		if ( complete ) {
			indices.push( j );
		}
	}
	const out = new Array( arrs.length );
	for ( let i = 0; i < arrs.length; i++ ) {
		const arr = new Array( indices.length );
		for ( let j = 0; j < indices.length; j++ ) {
			const idx = indices[ j ];
			arr[ j ] = arrs[ i ][ idx ];
		}
		out[ i ] = arr;
	}
	return out;
}


// MAIN //

class SummaryStatisticsMenu extends Component {
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
					central.push({ 'label': e, 'value': statistic( e ) });
					break;
				case 'First Quartile':
				case 'Third Quartile':
				case 'Quantile':
				case 'Min':
				case 'Max':
					location.push({ 'label': e, 'value': statistic( e ) });
					break;
				case 'Range':
				case 'Interquartile Range':
				case 'Standard Deviation':
				case 'Variance':
					variation.push({ 'label': e, 'value': statistic( e ) });
					break;
				case 'Correlation':
				case 'Correlation Matrix':
					relationship.push({ 'label': e, 'value': statistic( e ) });
					break;
				case 'Skewness':
				case 'Excess Kurtosis':
					shape.push({ 'label': e, 'value': statistic( e ) });
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

		if ( statLabels[ 0 ] === 'Correlation Matrix' ) {
			let arrs = variables.map( x => data[ x ] );
			if ( group ) {
				let groupData;
				if ( group.length === 2 ) {
					groupData = [];
					for ( let i = 0; i < arrs[ 0 ].length; i++ ) {
						const groupLabel = group.map( g => {
							return data[ g ][ i ];
						}).join( ':' );
						groupData.push( groupLabel );
					}
				} else {
					groupData = data[ group[ 0 ] ];
				}
				if ( omit ) {
					arrs = groupedCompleteCases( arrs, groupData );
				} else {
					arrs = groupedCases( arrs, groupData );
				}
			} else if ( omit ) {
				arrs = completeCases( arrs );
			}
			let result;
			if ( group ) {
				result = {};
				const keys = objectKeys( arrs );
				for ( let i = 0; i < keys.length; i++ ) {
					result[ keys[ i ] ] = {
						value: funs.map( f => f.apply( null, arrs[ keys[ i ] ] ) )[ 0 ],
						size: arrs[ keys[ i ] ][ 0 ].length
					};
				}
			} else {
				const value = funs.map( f => f.apply( null, arrs ) );
				result = {
					value: value[ 0 ],
					size: arrs[ 0 ].length
				};
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
				group
			});
			return this.props.onCreated( output );
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
						res[ key ].value = res[ key ].value.map( mat => mat[ 0 ][ 1 ] );
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
					const value = funs.map( f => {
						const r = f( x, y );
						return r[ 0 ][ 1 ];
					});

					// Extract correlation coefficient from correlation matrix:
					res = {
						value,
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
			groupingVariables,
			t
		} = this.props;
		const selectedStats = this.state.selectedStats;
		return (
			<Card>
				<Card.Header as="h4">
					{t('Summary Statistics')}
					<QuestionButton title={t('Summary Statistics')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<FormGroup controlId="statistics-form-select">
						<Tooltip
							tooltip="One or more statistics to compute for the variable of interest"
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
								let labels;
								if ( isArray( value ) && value.length > 0 ) {
									labels = value.map( x => x.label );
									const lastLabel = labels[ labels.length-1 ];
									if (
										lastLabel === 'Correlation' ||
										lastLabel === 'Correlation Matrix'
									) {
										return this.setState({
											selectedStats: [{
												label: lastLabel,
												value: statistic( lastLabel )
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
						tooltip="Second variable for computing bivariate statistic"
					/>
					{ groupingVariables.length > 0 ?
						<FormGroup controlId="stats-form-group">
							<Tooltip tooltip="Calculate the statistic(s) separately for observations from each category of either one or two grouping variable(s)">
								<FormLabel>{t('group-by')}</FormLabel>
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
						legend={t('omit-missing')}
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
		'Quantile'
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
