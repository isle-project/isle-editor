// MODULES //

import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import ztest from '@stdlib/math/statistics/ztest';
import ztest2 from '@stdlib/math/statistics/ztest2';
import pcorrtest from '@stdlib/math/statistics/pcorrtest';
import sqrt from '@stdlib/math/base/special/sqrt';
import copy from '@stdlib/utils/copy';
import roundn from '@stdlib/math/base/special/roundn';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import unique from 'uniq';
import mean from 'compute-mean';
import stdev from 'compute-stdev';


// MAIN //

class HypothesisTests extends Component {

	constructor( props ) {

		super( props );

		let categories = copy( props.data[ props.categorical[ 0 ] ]);
		unique( categories );

		this.state = {
			categories: categories,
			currentTest: props.tests[ 0 ]
		};

		this.calculateZTest = ( variable, mu0, direction, alpha ) => {
			let { data } = this.props;
			let x = data[ variable ];

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

			let output = {
				variable: `Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label>
					<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
					<pre>
						{result.print()}
					</pre>
				</div>
			};
			this.props.onCreated( output );
		};

		this.calculateCorrTest = ( var1, var2, rho0, direction, alpha ) => {
			let { data } = this.props;
			let x = data[ var1 ];
			let y = data[ var2 ];

			const result = pcorrtest( x, y, {
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

			let output = {
				variable: `Test for correlation between ${var1} and ${var2}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for correlation between {var1} and {var2}:</label>
					<TeX displayMode raw={`H_0: \\rho = ${rho0} \\; vs. \\; H_1: \\rho ${arrow} ${rho0}`} tag="" />
					<pre>
						{result.print()}
					</pre>
				</div>
			};
			this.props.onCreated( output );
		};

		this.calculateTwoSampleZTest = ( var1, grouping, var2, diff, direction, alpha ) => {
			let { data } = this.props;
			let secondCategory;
			let firstCategory;
			let value;
			let x;
			let y;

			if ( grouping !== 'None' ) {
				let categories = data[ grouping ];
				firstCategory = categories[ 0 ];
				secondCategory;
				for ( let i = 1; i < categories.length; i++ ) {
					if ( categories[ i ] !== firstCategory ) {
						secondCategory = categories[ i ];
					}
				}
				let splitted = bifurcateBy( data[ var1 ], function( x, idx ) {
					return categories[ idx ] === firstCategory;
				});
				x = splitted[ 0 ];
				y = splitted[ 1 ];

				const result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});

				let arrow = '\\ne';
				if ( direction === 'less' ) {
					arrow = '<';
				} else if ( direction === 'greater' ){
					arrow = '>';
				}
				value = <div>
					<label>Hypothesis test for {var1} between {grouping}:</label>
					<TeX
						displayMode
						raw={`H_0: \\mu_{\\text{${grouping}:${firstCategory}}} - \\mu_{\\text{${grouping}:${secondCategory}}} = ${diff}`}
						tag=""
					/>
					<span> vs. </span>
					<TeX
						displayMode
						raw={`H_1: \\mu_{\\text{${grouping}:${firstCategory}}} - \\mu_{\\text{${grouping}:${secondCategory}}} ${arrow} ${diff}`}
						tag="" />
					<pre>
						{result.print()}
					</pre>
				</div>;
			} else if ( var2 !== 'None' ) {
				x = data[ var1 ];
				y = data[ var2 ];
				const result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});

				let arrow = '\\ne';
				if ( direction === 'less' ) {
					arrow = '<';
				} else if ( direction === 'greater' ){
					arrow = '>';
				}
				value = <div>
					<label>Hypothesis test for {var1} against {var2}:</label>
					<TeX
						displayMode
						raw={`H_0: \\mu_{${var1}} - \\mu_{${var2}} = ${diff}`}
						tag=""
					/>
					<span>vs.</span>
					<TeX
						displayMode
						raw={`\\; H_1: \\mu_{${var1}} - \\mu_{${var2}} ${arrow} ${diff}`}
						tag=""
					/>
					<pre>
						{result.print()}
					</pre>
				</div>;
			} else {
				global.lesson.addNotification({
					title: 'Action required',
					message: `Please select either a grouping variable or a second variable to compare ${var1} against.`,
					level: 'warning',
					position: 'tr'
				});
			}

			if ( value ) {
				let output = {
					variable: `Test-Sample Z-Test`,
					type: 'Test',
					value: value
				};
				this.props.onCreated( output );
			}
		};

		this.calculatePropTest = ( variable, success, p0, direction, alpha ) => {
			let { data } = this.props;
			let x = data[ variable ];
			let binary = x.map( x => x == success ? 1 : 0 );
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
			let output = {
				variable: `One-Sample Proportion Test for ${variable}`,
				type: 'Test',
				value: <div>
					<label>Hypothesis test for {variable}:</label><br />
					<span>
						Let p be the population probability of <code>{variable}</code> being <code>{success}</code>. We test
					</span>
					<TeX displayMode raw={`H_0: p = ${p0} \\; vs. \\; H_1: p ${arrow} ${p0}`} tag="" />
					<label>Sample proportion: {roundn( mean( binary ), -3 )}</label>
					<pre>
						{result.print()}
					</pre>
				</div>
			};

			this.props.onCreated( output );
		};

		this.calculateTwoSamplePropTest = ( var1, grouping, var2, success, diff, direction, alpha ) => {
			let { data } = this.props;
			let firstCategory;
			let secondCategory;
			let value;
			let x;
			let y;

			if ( grouping !== 'None' ) {
				x = data[ var1 ];
				let binary = x.map( x => x == success ? 1 : 0 );
				let categories = data[ grouping ];
				firstCategory = categories[ 0 ];
				for ( let i = 1; i < categories.length; i++ ) {
					if ( categories[ i ] !== firstCategory ) {
						secondCategory = categories[ i ];
					}
				}
				let splitted = bifurcateBy( binary, function( x, idx ) {
					return categories[ idx ] === firstCategory;
				});
				x = splitted[ 0 ];
				y = splitted[ 1 ];

				const result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});

				let arrow = '\\ne';
				if ( direction === 'less' ) {
					arrow = '<';
				} else if ( direction === 'greater' ){
					arrow = '>';
				}

				let title = `Hypothesis test for equality of mean ${var1} by ${grouping}`;
				value = <div>
					<label>{title}</label><br />
					<span>
						Let <TeX raw={`p_{${firstCategory}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code> in the first group, and <TeX raw={`p_{${secondCategory}}`} /> the probability in the second group, respectively. We test
					</span>
					<TeX
						displayMode
						raw={`H_0: p_{\\text{${grouping}:${firstCategory}}} - p_{\\text{${grouping}:${secondCategory}}} = ${diff}`}
						tag="" />
					<span> vs. </span>
					<TeX
						displayMode
						raw={`H_1: p_{\\text{${grouping}:${firstCategory}}} - p_{\\text{${grouping}:${secondCategory}}} ${arrow} ${diff}`}
						tag=""
					/>
					<label>Sample proportion in group {firstCategory}: {roundn( mean( x ), -3 )}</label>
					<label>Sample proportion in group {secondCategory}: {roundn( mean( y ), -3 )}</label>
					<pre>
						{result.print()}
					</pre>
				</div>;
			} else if ( var2 !== 'None' ) {
				x = data[ var1 ];
				x = x.map( x => x == success ? 1 : 0 );
				y = data[ var2 ];
				y = y.map( y => y == success ? 1 : 0 );

				const result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});

				let arrow = '\\ne';
				if ( direction === 'less' ) {
					arrow = '<';
				} else if ( direction === 'greater' ){
					arrow = '>';
				}
				let title = `Hypothesis test for equality of mean ${var1} against mean ${var2}`;
				value = <div>
					<label>{title}</label><br />
					<span>
						Let <TeX raw={`p_{${var1}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code>, and <TeX raw={`p_{${var2}}`} /> the probability <code>{var2}</code> being <code>{success}</code>, respectively. We test
					</span>
					<TeX displayMode raw={`H_0: p_{${var1}} - p_{${var2}} = ${diff}`} tag="" />
					<span> vs. </span>
					<TeX displayMode raw={`H_1: p_{${var1}} - p_{${var2}} ${arrow} ${diff}`} tag="" />
					<label>Sample proportion in group {var1}: {roundn( mean( x ), -3 )}</label>
					<label>Sample proportion in group {var2}: {roundn( mean( y ), -3 )}</label>
					<pre>
						{result.print()}
					</pre>
				</div>;
			} else {
				global.lesson.addNotification({
					title: 'Action required',
					message: `Please select either a grouping variable or a second variable to compare ${var1} against.`,
					level: 'warning',
					position: 'tr'
				});
			}

			if ( value ) {
				let output = {
					variable: `Two-Sample Proportion Test`,
					type: 'Test',
					value: value
				};
				this.props.onCreated( output );
			}
		};

	}

	getBinaryVars( vars ) {
		const out = [];
		for ( let i = 0; i < vars.length; i++ ) {
			let data = copy( this.props.data[ vars[ i ] ] );
			unique( data );
			if ( data.length === 2 ) {
				out.push( vars[ i ]);
			}
		}
		return out;
	}

	render() {
		let {
			tests,
			continuous,
			categorical
		} = this.props;
		let binary = this.getBinaryVars( categorical );

		let testPage;
		switch ( this.state.currentTest ) {
		case 'One-Sample Z-Test':
			testPage = <Dashboard
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
			</Dashboard>;
			break;
		case 'One-Sample Proportion Test':
			testPage = <Dashboard
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculatePropTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
					onChange={ ( val ) => {
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
			</Dashboard>;
			break;
		case 'Two-Sample Z-Test':
			testPage = <Dashboard
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculateTwoSampleZTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<Form>
					<label>Groups: </label>
					<SelectInput
						inline
						defaultValue="None"
						options={[ 'None',...binary ]}
					/>
					{` OR `}
					<label>Second Variable: </label>
					<SelectInput
						inline
						defaultValue="None"
						options={[ 'None', ...continuous ]}
					/>
				</Form>
				<NumberInput
					legend="Difference under H0"
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
			</Dashboard>;
			break;
		case 'Two-Sample Proportion Test':
			testPage = <Dashboard
				label="Calculate"
				autoStart={false}
				onGenerate={this.calculateTwoSamplePropTest}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={categorical[ 0 ]}
					options={categorical}
					onChange={ ( val ) => {
						let categories = copy( this.props.data[ val ]);
						unique( categories );
						this.setState({
							categories
						});
					}}
				/>
				<Form>
					<label>Groups: </label>
					<SelectInput
						inline
						defaultValue="None"
						options={[ 'None',...binary ]}
					/>
					{` OR `}
					<label>Second Variable: </label>
					<SelectInput
						inline
						defaultValue="None"
						options={[ 'None', ...categorical ]}
					/>
				</Form>
				<SelectInput
					legend="Success:"
					defaultValue={this.state.categories[ 0 ]}
					options={this.state.categories}
				/>
				<NumberInput
					legend="Difference under H0"
					defaultValue={0.0}
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
			</Dashboard>;
			break;
		case 'Correlation Test':
			testPage = <Dashboard
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
			</Dashboard>;
			break;
		}

		return (
			<div>
				<SelectInput
					legend="Test:"
					defaultValue={tests[ 0 ]}
					options={tests}
					onChange={ ( value ) => {
						this.setState({
							currentTest: value
						});
					}}
				/>
				{testPage}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

HypothesisTests.defaultProps = {
	tests: [
		'One-Sample Z-Test',
		'One-Sample Proportion Test',
		'Two-Sample Z-Test',
		'Two-Sample Proportion Test',
		'Correlation Test'
	]
};


// PROPERTY TYPES //

HypothesisTests.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired,
	tests: PropTypes.array
};


// EXPORTS //

export default HypothesisTests;
