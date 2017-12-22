// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import isArray from '@stdlib/assert/is-array';
import ztest from '@stdlib/math/stats/ztest';
import sqrt from '@stdlib/math/base/special/sqrt';
import copy from '@stdlib/utils/copy';
import roundn from '@stdlib/math/base/special/roundn';
import unique from 'uniq';
import mean from 'compute-mean';


// MAIN //

class PropTest extends Component {
	constructor( props ) {
		super( props );

		let categories;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			categories = copy( props.data[ props.categorical[ 0 ] ]);
			unique( categories );
		} else {
			categories = [];
		}
		this.state = {
			categories: categories
		};

		this.calculatePropTest = ( variable, success, p0, direction, alpha ) => {
			const { data } = this.props;
			const x = data[ variable ];
			const binary = x.map( x => x === success ? 1 : 0 );
			const result = ztest( binary, sqrt( p0 * ( 1.0 - p0 ) ), {
				'alpha': alpha,
				'alternative': direction,
				'mu': p0
			});
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			const output = {
				variable: `One-Sample Proportion Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label><br />
					<span>
						Let p be the population probability of <code>{variable}</code> being <code>{success}</code>. We test
					</span>
					<TeX displayMode raw={`H_0: p = ${p0} \\; vs. \\; H_1: p ${arrow} ${p0}`} tag="" />
					<label>Sample proportion: {roundn( mean( binary ), -3 )}</label>
					<pre style={{ fontSize: '11px' }}>
						{result.print()}
					</pre>
				</div>
			};
			this.props.logAction( 'DATA_EXPLORER:TESTS:PROPTEST', {
				variable, success, p0, direction, alpha
			});
			this.props.onCreated( output );
		};
	}

	render() {
		const { categorical } = this.props;
		return (
			<Dashboard
				title="One-Sample Proportion Test"
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculatePropTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
					onChange={( val ) => {
						let categories = copy( this.props.data[ val ]);
						unique( categories );
						this.setState({
							categories
						});
					}}
				/>
				<SelectInput
					legend="Success:"
					defaultValue={this.state.categories[ 0 ]}
					options={this.state.categories}
				/>
				<NumberInput
					legend={<TeX raw="p_0" />}
					defaultValue={0.5}
					min={0.001}
					max={0.999}
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


// PROPERTY TYPES //

PropTest.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};

PropTest.defaultProps = {
	categorical: null,
	logAction() {}
};


// EXPORTS //

export default PropTest;
