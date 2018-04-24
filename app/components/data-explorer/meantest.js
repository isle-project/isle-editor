// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import ztest from '@stdlib/stats/ztest';
import ttest from '@stdlib/stats/ttest';
import replace from '@stdlib/string/replace';
import stdev from 'compute-stdev';


// VARIABLES //

var RE_ONESIDED_SMALLER = /95% confidence interval: \[-Infinity,[\d.]+\]/;
var RE_ONESIDED_GREATER = /95% confidence interval: \[[\d.]+,Infinity\]/;


// MAIN //

class MeanTest extends Component {
	constructor( props ) {
		super( props );

		this.calculateMeanTest = ( type, variable, mu0, direction, alpha ) => {
			const { data } = this.props;
			let result;
			const x = data[ variable ];
			if ( type === 'Z Test' ) {
				result = ztest( x, stdev( x ), {
					'alpha': alpha,
					'alternative': direction,
					'mu': mu0
				});
			} else {
				result = ttest( x, {
					'alpha': alpha,
					'alternative': direction,
					'mu': mu0
				});
			}
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			let printout = result.print();
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			const output = {
				variable: `Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label>
					<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
					<pre style={{ fontSize: '11px' }}>
						{printout}
					</pre>
				</div>
			};
			this.props.logAction( 'DATA_EXPLORER:TESTS:ZTEST', {
				variable, mu0, direction, alpha
			});
			this.props.onCreated( output );
		};
	}

	render() {
		const { continuous } = this.props;
		return (
			<Dashboard
				title="One-Sample Mean Test"
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculateMeanTest}
			>
				<SelectInput
					legend="Type of Test:"
					defaultValue="Z Test"
					options={[ 'Z Test', 'T Test' ]}
				/>
				<SelectInput
					legend="Variable:"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<NumberInput
					legend={<TeX raw="\mu_0" />}
					defaultValue={0.0}
					step="any"
				/>
				<SelectInput
					legend="Direction:"
					defaultValue="two-sided"
					options={[ 'less', 'greater', 'two-sided' ]}
				/>
				<NumberInput
					legend={<span>Significance level <TeX raw="\alpha" /></span>}
					defaultValue={0.05}
					min={0.0}
					max={1.0}
					step="any"
				/>
			</Dashboard>
		);
	}
}

// DEFAULT PROPERTIES //

MeanTest.defaultProps = {
	logAction() {}
};


// PROPERTY TYPES //

MeanTest.propTypes = {
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default MeanTest;
