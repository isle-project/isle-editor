// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import isArray from '@stdlib/assert/is-array';
import ztest from '@stdlib/stats/ztest';
import sqrt from '@stdlib/math/base/special/sqrt';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import unique from 'uniq';
import mean from 'utils/statistic/mean';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test for the proportion of a selected category of a qualitative variable.';
const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[\d.]+,Infinity\]/;


// MAIN //

class PropTest extends Component {
	constructor( props ) {
		super( props );

		let categories;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			categories = props.data[ props.categorical[ 0 ] ].slice();
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
			let printout = result.print({
				decision: this.props.showDecision
			});
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			const output = {
				variable: `One-Sample Proportion Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label>
					<p>
						Let p be the population probability of <code>{variable}</code> being <code>{success}</code>.
					</p>
					<span>
						We test
					</span>
					<TeX displayMode raw={`H_0: p = ${p0} \\; vs. \\; H_1: p ${arrow} ${p0}`} tag="" />
					<label>Sample proportion: {roundn( mean( binary ), -3 )}</label>
					<pre>
						{printout}
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
				title={
					<span>
						One-Sample Proportion Test
						<QuestionButton title="One-Sample Proportion Test" content={DESCRIPTION} />
					</span>
				}
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculatePropTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
					onChange={( val ) => {
						let categories = this.props.data[ val ].slice();
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
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

PropTest.defaultProps = {
	categorical: null,
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default PropTest;
