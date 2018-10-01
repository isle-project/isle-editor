// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import statistic from 'utils/statistic';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isArray from '@stdlib/assert/is-array';
import CheckboxInput from 'components/input/checkbox';
import QuestionButton from './question_button.js';
import isNumber from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// FUNCTIONS //

function byWithCount( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		if ( hasOwnProp( ret, key ) ) {
			ret[ key ] = {
				value: fun( ret[ key ] ),
				size: ret[ key ].length
			};
		}
	}
	return ret;
}

function by2WithCount( arr1, arr2, factor, fun ) {
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
	for ( let key in ret1 ) {
		if ( hasOwnProp( ret1, key ) ) {
			out[ key ] = {
				value: fun( ret1[ key ], ret2[ key ]),
				size: ret1[ key ].length
			};
		}
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
		let fun;
		let res;
		let x;
		let y;

		if ( omit ) {
			x = [];
			y = [];
			if ( variable && secondVariable ) {
				let first = data[ variable ];
				let second = data[ secondVariable ];
				for ( let i = 0; i < first.length; i++ ) {
					if ( isNumber( first[ i ] ) && isNumber( second[ i ] ) ) {
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
			if ( !group ) {
				res = fun( x, y );
				// Extract correlation coefficient from correlation matrix:
				res = {
					value: res[ 0 ][ 1 ],
					size: x.length
				};
			} else {
				res = by2WithCount( x, y, data[ group ], fun );
				for ( let key in res ) {
					if ( hasOwnProp( res, key ) ){
						// Extract correlation coefficient from correlation matrix:
						res[ key ].value = res[ key ].value[ 0 ][ 1 ];
					}
				}
			}
			variable = `${variable} vs. ${secondVariable}`;
		}
		else if ( !group ) {
			res = {
				value: fun( x ),
				size: x.length
			};
		} else {
			res = byWithCount( x, data[ group ], fun );
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
		const description = 'Compute various statistics of interest, i.e. summary measures of the variables in the data set.';
		return (
			<Dashboard
				autoStart={false}
				title={<span>Summary Statistics<QuestionButton title="Summary Statistics" content={description} /></span>}
				label="Calculate"
				onGenerate={this.generateStatistics.bind( this )}
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
