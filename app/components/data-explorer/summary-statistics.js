// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import statistic from 'components/data-explorer/statistic.js';
import hasOwnProp from '@stdlib/assert/has-own-property';
import by from './by.js';
import by2 from './by2.js';

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
			if ( !group ) {
				res = fun( data[ variable ], data[ secondVariable ]);
				// Extract correlation coefficient from correlation matrix:
				res = res[ 0 ][ 1 ];
			} else {
				res = by2( data[ variable ], data[ secondVariable ], data[ group ], fun );

				for ( let key in res ) {
					if (hasOwnProp( res, key) ){
						// Extract correlation coefficient from correlation matrix:
						res[ key ] = res[ key ][ 0 ][ 1 ];
					}
				}
			}
			variable = `${variable} vs. ${secondVariable}`;
		}
		else if ( !group ) {
			res = fun( data[ variable ]);
		} else {
			res = by( data[ variable ], data[ group ], fun );
		}

		const output = {
			variable: variable,
			type: statName,
			value: res,
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

		return (
			<Dashboard
				autoStart={false}
				title="Summary Statistics"
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
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

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


// PROPERTY TYPES //

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
