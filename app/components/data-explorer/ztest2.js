// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Row, Col } from 'react-bootstrap';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import isArray from '@stdlib/assert/is-array';
import ztest2 from '@stdlib/math/stats/ztest2';
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
			categories: categories,
			var1: props.continuous[ 0 ],
			grouping: null,
			var2: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05
		};
	}

	calculateTwoSampleZTest = () => {
		const { var1, grouping, var2, diff, direction, alpha } = this.state;
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
				<pre style={{ fontSize: '11px' }}>
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
				<pre style={{ fontSize: '11px' }}>
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
			<Panel
				header={<h4>Two-Sample Z-Test</h4>}
				style={{ fontSize: '14px' }}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={this.state.var1}
					options={continuous}
					onChange={( value ) => {
						this.setState({
							var1: value
						});
					}}
				/>
				<Row>
					<Col md={5}>
						<SelectInput
							legend="Groups:"
							options={binary}
							defaultValue={this.state.grouping}
							clearable
							onChange={( value ) => {
								this.setState({
									grouping: value,
									var2: null
								});
							}}
						/>
					</Col>
					<Col md={2}>
						<p>OR</p>
					</Col>
					<Col md={5}>
						<SelectInput
							legend="Second Variable:"
							options={continuous}
							defaultValue={this.state.var2}
							clearable
							onChange={ ( value ) => {
								this.setState({
									var2: value,
									grouping: null
								});
							}}
						/>
					</Col>
				</Row>
				<NumberInput
					legend="Difference under H0"
					defaultValue={this.state.diff}
					step="any"
					onChange={ ( value ) => {
						this.setState({
							diff: value
						});
					}}
				/>
				<SelectInput
					legend="Direction:"
					defaultValue={this.state.direction}
					options={[ 'less', 'greater', 'two-sided' ]}
					onChange={ ( value ) => {
						this.setState({
							direction: value
						});
					}}
				/>
				<NumberInput
					legend={<span>Significance level <TeX raw="\alpha" /></span>}
					defaultValue={this.state.alpha}
					min={0.0}
					max={1.0}
					step="any"
					onChange={ ( value ) => {
						this.setState({
							alpha: value
						});
					}}
				/>
				<Button bsStyle="primary" block onClick={this.calculateTwoSampleZTest}>Calculate</Button>
			</Panel>
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
