// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import pcorrtest from '@stdlib/stats/pcorrtest';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import { DATA_EXPLORER_TESTS_CORRTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test used to evaluate the Pearson correlation between two variables, which measures the linear association between them.';


// MAIN //

class CorrTest extends Component {
	constructor( props ) {
		super( props );

		this.calculateCorrTest = ( var1, var2, rho0, direction, alpha ) => {
			const { data, showDecision } = this.props;
			const x = data[ var1 ];
			const y = data[ var2 ];
			const xFiltered = [];
			const yFiltered = [];
			for ( let i = 0; i < x.length; i++ ) {
				if (
					( isNumber( x[i] ) && !isnan( x[i] ) ) &&
					( isNumber( y[i] ) && !isnan( y[i] ) )
				) {
					xFiltered.push( x[i] );
					yFiltered.push( y[i] );
				}
			}
			const result = pcorrtest( xFiltered, yFiltered, {
				'alpha': alpha,
				'alternative': direction,
				'rho': rho0
			});
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			const output = {
				variable: `Test for correlation between ${var1} and ${var2}`,
				type: 'Test',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>Correlation test between {var1} and {var2}:</label>
					<TeX displayMode raw={`H_0: \\rho = ${rho0} \\; vs. \\; H_1: \\rho ${arrow} ${rho0}`} tag="" />
					<pre>
						{result.print({
							decision: showDecision
						})}
					</pre>
				</div>
			};
			this.props.logAction( DATA_EXPLORER_TESTS_CORRTEST, {
				var1, var2, rho0, direction, alpha
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
						Correlation Test
						<QuestionButton title="Correlation Test" content={DESCRIPTION} />
					</span>
				}
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculateCorrTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<SelectInput
					legend="Variable:"
					defaultValue={continuous[ 1 ]}
					options={continuous}
				/>
				<NumberInput
					legend={<TeX raw="\rho_0" />}
					defaultValue={0.0}
					step="any"
					min={-1.0}
					max={1.0}
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


// PROPERTY TYPES //

CorrTest.propTypes = {
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

CorrTest.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default CorrTest;
