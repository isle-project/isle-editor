// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import ztest from '@stdlib/math/stats/ztest';
import stdev from 'compute-stdev';


// MAIN //

class ZTest extends Component {
	constructor( props ) {
		super( props );

		this.calculateZTest = ( variable, mu0, direction, alpha ) => {
			const { data } = this.props;
			const x = data[ variable ];
			const result = ztest( x, stdev( x ), {
				'alpha': alpha,
				'alternative': direction,
				'mu': mu0
			});
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			const output = {
				variable: `Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label>
					<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
					<pre style={{ fontSize: '11px' }}>
						{result.print()}
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
				onGenerate={this.calculateZTest}
			>
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

ZTest.defaultProps = {
	logAction() {}
};


// PROPERTY TYPES //

ZTest.propTypes = {
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default ZTest;
