// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import statistic from 'utils/statistic';
import objectKeys from '@stdlib/utils/keys';
import isArray from '@stdlib/assert/is-array';
import CheckboxInput from 'components/input/checkbox';
import QuestionButton from './question_button.js';
import isNumber from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// VARIABLES //

const DESCRIPTION = 'Compute various statistics of interest, i.e. summary measures of the variables in the data set.';


// FUNCTIONS //

function byWithCount( arr, factor, fun, groups ) {
	let table = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( table[ factor[ i ] ]) ) {
			table[ factor[ i ] ] = [];
		}
		table[ factor[ i ] ].push( arr[ i ]);
	}
	const keys = groups || objectKeys( table );
	const out = {};
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: fun( table[ key ] ),
			size: table[ key ].length
		};
	}
	return out;
}

function by2WithCount( arr1, arr2, factor, fun, groups ) {
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
	const keys = groups || objectKeys( ret1 );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: fun( ret1[ key ], ret2[ key ]),
			size: ret1[ key ].length
		};
	}
	return out;
}


// MAIN //

class SummaryStatistics extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentStatistic: props.statistics[ 0 ]
		};
	}

	generateStatistics = ( statName, variable, secondVariable, group, omit ) => {
		let { data } = this.props;
		let groupData;
		let fun;
		let res;
		let x;
		let y;

		if ( group ) {
			if ( omit ) {
				// Case: grouping variable selected, omit missing values
				x = [];
				y = [];
				groupData = [];
				if ( variable && secondVariable ) {
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
			fun = statistic( statName );
			if ( statName === 'Correlation' ) {
				const groups = group.categories;
				res = by2WithCount( x, y, groupData, fun, groups );
				const keys = groups || objectKeys( res );
				for ( let i = 0; i < keys.length; i++ ) {
					const key = keys[ i ];

					// Extract correlation coefficient from correlation matrix:
					res[ key ].value = res[ key ].value[ 0 ][ 1 ];
				}
				variable = `${variable} vs. ${secondVariable}`;
			} else {
				const groups = group.categories;
				res = byWithCount( x, groupData, fun, groups );
			}
		} else {
			// Case: no grouping variable selected
			if ( omit ) {
				x = [];
				y = [];
				if ( variable && secondVariable ) {
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

			fun = statistic( statName );
			if ( statName === 'Correlation' ) {
				res = fun( x, y );
				// Extract correlation coefficient from correlation matrix:
				res = {
					value: res[ 0 ][ 1 ],
					size: x.length
				};
				variable = `${variable} vs. ${secondVariable}`;
			}
			else {
				res = {
					value: fun( x ),
					size: x.length
				};
			}
		}
		const output = {
			variable: variable,
			type: statName,
			result: res,
			group
		};
		this.props.logAction( 'DATA_EXPLORER:SUMMARY_STATISTICS', {
			statistic: statName,
			variable,
			secondVariable: statName === 'Correlation' ? secondVariable : null,
			group
		});
		console.log( output );
		this.props.onCreated( output );
	}

	render() {
		let {
			statistics,
			variables,
			defaultX,
			defaultY,
			defaultStatistic,
			groupingVariables
		} = this.props;
		return (
			<Dashboard
				autoStart={false}
				title={<span>Summary Statistics<QuestionButton title="Summary Statistics" content={DESCRIPTION} /></span>}
				label="Calculate"
				onGenerate={this.generateStatistics}
			>
				<SelectInput
					legend="Statistic:"
					defaultValue={defaultStatistic}
					options={statistics}
					onChange={( value ) => {
						this.setState({
							currentStatistic: value
						});
					}}
				/>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Second Variable:"
					defaultValue={defaultY || variables[ 1 ]}
					options={variables}
					style={{
						display: this.state.currentStatistic === 'Correlation' ?
							'inline' : 'none'
					}}
				/>
				{ groupingVariables.length > 0 ?
					<SelectInput
						legend="Group By:"
						options={groupingVariables}
						clearable={true}
					/> : null
				}
				<CheckboxInput
					legend="Omit missing values"
				/>
			</Dashboard>
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
		'Correlation'
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
