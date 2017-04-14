// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import statistic from 'components/data-explorer/statistic.js';
import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		ret[ key ] = fun( ret[ key ]);
	}
	return ret;
}

function by2( arr1, arr2, factor, fun ) {
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
		out[ key ] = fun( ret1[ key ], ret2[ key ]);
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

	generateStatistics = ( statName, variable, secondVariable, group ) => {
		let { data } = this.props;
		let fun;
		let res;

		fun = statistic( statName );

		if ( statName === 'Correlation' ) {
			if ( group === 'None' ) {
				res = fun( data[ variable ], data[ secondVariable ]);
				// Extract correlation coefficient from correlation matrix:
				res = res[ 0 ][ 1 ];
			} else {
				res = by2( data[ variable ], data[ secondVariable ], data[ group ], fun );
				for ( let key in res ) {
					// Extract correlation coefficient from correlation matrix:
					res[ key ] = res[ key ][ 0 ][ 1 ];
				}
			}
			variable = `${variable} vs. ${secondVariable}`;
		}
		else {
			if ( group === 'None' ) {
				res = fun( data[ variable ]);
			} else {
				res = by( data[ variable ], data[ group ], fun );
			}
		}
		const output = {
			variable: variable,
			type: statName,
			value: res,
			group
		};
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
				title="Summary Statistics"
				label="Calculate"
				onGenerate={this.generateStatistics.bind( this )}
			>
				<SelectInput
					legend="Statistic:"
					defaultValue={defaultStatistic || statistics[ 0 ]}
					options={statistics}
					onChange={ ( value ) => {
						this.setState({
							currentStatistic: value
						});
					}}
				/>
				<SelectInput
					legend="Variable:"
					defaultValue={ defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Second Variable:"
					defaultValue={ defaultY || variables[ 1 ]}
					options={variables}
					style={{
						display: this.state.currentStatistic === 'Correlation' ?
							'inline' : 'none'
					}}
				/>
				<SelectInput
					legend="Group By:"
					defaultValue="None"
					options={groupingVariables}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

SummaryStatistics.defaultProps = {
	defaultX: null,
	defaultY: null,
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


// PROPERTY TYPES //

SummaryStatistics.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired,
	statistics: PropTypes.array
};


// EXPORTS //

export default SummaryStatistics;
