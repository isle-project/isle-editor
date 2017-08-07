// MODULES //

import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import ztest2 from '@stdlib/math/statistics/ztest2';
import copy from '@stdlib/utils/copy';
import roundn from '@stdlib/math/base/special/roundn';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import unique from 'uniq';
import mean from 'compute-mean';
import stdev from 'compute-stdev';


// MAIN //

class PropTest2 extends Component {

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

		this.calculateTwoSamplePropTest = ( var1, success, grouping, var2, diff, direction, alpha ) => {
			const { data } = this.props;
			let firstCategory;
			let secondCategory;
			let value;
			let x;
			let y;

			if ( grouping ) {
				x = data[ var1 ];
				let binary = x.map( x => x == success ? 1 : 0 );
				let categories = data[ grouping ];
				firstCategory = categories[ 0 ];
				for ( let i = 1; i < categories.length; i++ ) {
					if ( categories[ i ] !== firstCategory ) {
						secondCategory = categories[ i ];
					}
				}
				const splitted = bifurcateBy( binary, function( x, idx ) {
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
				const title = `Hypothesis test for equality of mean ${var1} by ${grouping}`;
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
			} else if ( var2 ) {
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
				const title = `Hypothesis test for equality of mean ${var1} against mean ${var2}`;
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
				this.props.session.addNotification({
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
				this.props.logAction( 'DATA_EXPLORER:TESTS:TWO_SAMPLE_PROPTEST', {
					var1, grouping, var2, success, diff, direction, alpha
				});
				this.props.onCreated( output );
			}
		};

	}

	getBinaryVars( vars ) {
		const out = [];
		for ( let i = 0; i < vars.length; i++ ) {
			let data = copy( this.props.data[ vars[ i ] ]);
			unique( data );
			if ( data.length === 2 ) {
				out.push( vars[ i ]);
			}
		}
		return out;
	}

	render() {
		let { categorical } = this.props;
		let binary = this.getBinaryVars( categorical );

		return (
			<Dashboard
				title="Two-Sample Proportion Test"
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
				<SelectInput
					legend="Success:"
					defaultValue={this.state.categories[ 0 ]}
					options={this.state.categories}
				/>
				<Form>
					<label>Groups: </label>
					<SelectInput
						options={binary}
						clearable
						ref={ input => this.propTestgroupSelect = input }
						onChange={ () => {
							this.propTestvarSelect.setState({
								value: null
							});
						}}
					/>
					{` OR `}
					<label>Second Variable: </label>
					<SelectInput
						options={categorical.filter( elem =>
							contains( this.state.categories, elem )
						)}
						clearable
						ref={ input => this.propTestvarSelect = input }
						onChange={ () => {
							this.propTestgroupSelect.setState({
								value: null
							});
						}}
					/>
				</Form>
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
			</Dashboard>
		);
	}
}


// PROPERTY TYPES //

PropTest2.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default PropTest2;
