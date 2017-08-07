// MODULES //

import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import isArray from '@stdlib/assert/is-array';
import ztest2 from '@stdlib/math/statistics/ztest2';
import copy from '@stdlib/utils/copy';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import unique from 'uniq';
import stdev from 'compute-stdev';


// MAIN //

class ZTest2 extends Component {

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

		this.calculateTwoSampleZTest = ( var1, grouping, var2, diff, direction, alpha ) => {
			const { data } = this.props;
			let secondCategory;
			let firstCategory;
			let value;
			let x;
			let y;

			if ( grouping ) {
				let categories = data[ grouping ];
				firstCategory = categories[ 0 ];
				for ( let i = 1; i < categories.length; i++ ) {
					if ( categories[ i ] !== firstCategory ) {
						secondCategory = categories[ i ];
						break;
					}
				}
				const splitted = bifurcateBy( data[ var1 ], function( x, idx ) {
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
			} else if ( var2 ) {
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
				this.props.session.addNotification({
					title: 'Action required',
					message: `Please select either a grouping variable or a second variable to compare ${var1} against.`,
					level: 'warning',
					position: 'tr'
				});
			}
			if ( value ) {
				const output = {
					variable: `Two-Sample Z-Test`,
					type: 'Test',
					value: value
				};
				this.props.logAction( 'DATA_EXPLORER:TESTS:TWO_SAMPLE_ZTEST', {
					var1, grouping, var2, diff, direction, alpha
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
		const { continuous, categorical } = this.props;
		const binary = this.getBinaryVars( categorical );
		return (
			<Dashboard
				title="Two-Sample Z-Test"
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
						options={binary}
						ref={ input => this.ztest2groupSelect = input }
						clearable
						onChange={ () => {
							this.ztest2varSelect.setState({
								value: null
							});
						}}
					/>
					{` OR `}
					<label>Second Variable: </label>
					<SelectInput
						options={continuous}
						ref={ input => this.ztest2varSelect = input }
						clearable
						onChange={ () => {
							this.ztest2groupSelect.setState({
								value: null
							});
						}}
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
			</Dashboard>
		);
	}
}


// PROPERTY TYPES //

ZTest2.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default ZTest2;
