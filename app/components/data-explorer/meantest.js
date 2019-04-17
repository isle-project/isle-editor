// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ztest from '@stdlib/stats/ztest';
import ttest from '@stdlib/stats/ttest';
import replace from '@stdlib/string/replace';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import stdev from 'utils/statistic/stdev';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import { DATA_EXPLORER_TESTS_ZTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[\d.]+,Infinity\]/;
const DESCRIPTION = 'A test for the mean of a quantitative variable.';


// MAIN //

class MeanTest extends Component {
	constructor( props ) {
		super( props );

		this.calculateMeanTest = ( type, variable, mu0, direction, alpha ) => {
			const { data, showDecision } = this.props;
			let result;
			const x = data[ variable ];
			const xFiltered = [];
			for ( let i = 0; i < x.length; i++ ) {
				if ( isNumber( x[i] ) && !isnan( x[i] ) ) {
					xFiltered.push( x[i] );
				}
			}
			if ( type === 'Z Test' ) {
				result = ztest( xFiltered, stdev( xFiltered ), {
					'alpha': alpha,
					'alternative': direction,
					'mu': mu0
				});
			} else {
				result = ttest( xFiltered, {
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
			let printout = result.print({
				decision: showDecision
			});
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			const output = {
				variable: `Test for ${variable}`,
				type: 'Test',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>Hypothesis test for {variable}:</label>
					<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
					<pre>
						{printout}
					</pre>
				</div>
			};
			this.props.logAction( DATA_EXPLORER_TESTS_ZTEST, {
				variable, mu0, direction, alpha
			});
			this.props.onCreated( output );
		};
	}

	render() {
		const { continuous } = this.props;
		return (
			<Dashboard
				title={
					<span>
						One-Sample Mean Test
						<QuestionButton title="One-Sample Mean Test" content={DESCRIPTION} />
					</span>
				}
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
	logAction() {},
	showDecision: true
};


// PROPERTY TYPES //

MeanTest.propTypes = {
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest;
