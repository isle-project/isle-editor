// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ttest2 from '@stdlib/stats/ttest2';
import ztest2 from '@stdlib/stats/ztest2';
import replace from '@stdlib/string/replace';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import unique from 'uniq';
import stdev from 'utils/statistic/stdev';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import { DATA_EXPLORER_TESTS_TWO_SAMPLE_ZTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[\d.]+,Infinity\]/;
const DESCRIPTION = 'A test for equality of means across two groups.';


// MAIN //

class MeanTest2 extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			var1: props.continuous[ 0 ],
			grouping: null,
			var2: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05,
			type: 'Z Test'
		};
	}

	calculateTwoSampleZTest = () => {
		const { var1, grouping, var2, diff, direction, alpha, type } = this.state;
		const { data, showDecision } = this.props;
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
			const splitted = bifurcateBy( data[ var1 ], function splitter( x, idx ) {
				return categories[ idx ] === firstCategory;
			});
			x = splitted[ 0 ];
			y = splitted[ 1 ];
			let result;
			if ( type === 'Z Test' ) {
				result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			} else {
				result = ttest2( x, y, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
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
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
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
					{printout}
				</pre>
			</div>;
		} else if ( var2 ) {
			x = data[ var1 ];
			y = data[ var2 ];
			let result;
			if ( type === 'Z Test' ) {
				result = ztest2( x, y, stdev( x ), stdev( y ), {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			} else {
				result = ztest2( x, y, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
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
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
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
					{printout}
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
				variable: 'Two-Sample Z-Test',
				type: 'Test',
				value: value
			};
			this.props.logAction( DATA_EXPLORER_TESTS_TWO_SAMPLE_ZTEST, {
				var1, grouping, var2, diff, direction, alpha
			});
			this.props.onCreated( output );
		}
	}

	getBinaryVars( vars ) {
		const out = [];
		for ( let i = 0; i < vars.length; i++ ) {
			const data = this.props.data[ vars[ i ] ].filter( x => !isNull( x ) && !isnan( x ) );
			unique( data );
			if ( data.length === 2 ) {
				out.push( vars[ i ]);
			}
		}
		return out;
	}

	renderInputs() {
		const { continuous, categorical } = this.props;
		const binary = this.getBinaryVars( categorical );
		return ( <Fragment>
			<SelectInput
				legend="Type of Test:"
				defaultValue="Z Test"
				options={[ 'Z Test', 'T Test' ]}
				onChange={( value ) => {
					this.setState({
						type: value
					});
				}}
			/>
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
						onChange={( value ) => {
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
				onChange={( value ) => {
					this.setState({
						diff: value
					});
				}}
			/>
			<SelectInput
				legend="Direction:"
				defaultValue={this.state.direction}
				options={[ 'less', 'greater', 'two-sided' ]}
				onChange={( value ) => {
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
				onChange={( value ) => {
					this.setState({
						alpha: value
					});
				}}
			/>
		</Fragment> );
	}

	render() {
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Two-Sample Mean Test
					<QuestionButton title="Two-Sample Mean Test" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<Button variant="primary" block onClick={this.calculateTwoSampleZTest}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

MeanTest2.defaultProps = {
	categorical: null,
	logAction() {},
	session: {},
	showDecision: true
};


// PROPERTY TYPES //

MeanTest2.propTypes = {
	categorical: PropTypes.array,
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest2;
