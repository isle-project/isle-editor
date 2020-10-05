// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import ztest2 from '@stdlib/stats/ztest2';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import unique from 'uniq';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import escapeLatex from 'utils/escape-latex';
import extractCategoriesFromValues from './extract_categories_from_values.js';
import { DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import getBinaryVars from './get_binary_vars.js';


// VARIABLES //

const DESCRIPTION = 'A test for equality of proportions for a selected category of a qualitative variable across two groups.';
const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[-?\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[-?\d.]+,Infinity\]/;


// MAIN //

class PropTest2 extends Component {
	constructor( props ) {
		super( props );

		const var1 = props.categorical[ 0 ];
		let categories;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			const vals = props.data[ var1 ];
			if ( vals ) {
				categories = extractCategoriesFromValues( vals, var1 );
			} else {
				categories = [];
			}
		} else {
			categories = [];
		}
		this.state = {
			categories,
			var1,
			success: categories[ 0 ],
			grouping: null,
			var2: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05
		};
	}

	calculateTwoSamplePropTest = () => {
		const { var1, success, grouping, var2, diff, direction, alpha } = this.state;
		const { data, showDecision } = this.props;
		let firstCategory;
		let secondCategory;
		let value;
		let x;
		let y;

		if ( var1 === grouping || var1 === var2 ) {
			return this.props.session.addNotification({
				title: 'Action required',
				message: 'Please make sure that the group variable or second variable is not equal to your variable of interest.',
				level: 'warning',
				position: 'tr'
			});
		}
		if ( grouping ) {
			x = data[ var1 ];
			const binary = [];
			const categories = [];
			for ( let i = 0; i < x.length; i++ ) {
				const v = x[ i ];
				const group = data[ grouping ][ i ];
				if (
					!isUndefinedOrNull( v ) && v !== '' &&
					!isUndefinedOrNull( group ) && group !== ''
				) {
					binary.push( v === success ? 1 : 0 );
					categories.push( group );
				}
			}
			firstCategory = categories[ 0 ];
			for ( let i = 1; i < categories.length; i++ ) {
				if ( categories[ i ] !== firstCategory ) {
					secondCategory = categories[ i ];
				}
			}
			const splitted = bifurcateBy( binary, function splitter( x, idx ) {
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
			let printout = result.print({
				decision: showDecision
			});
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			const title = `Hypothesis test for equality of ${var1} proportion by ${grouping}`;
			const c1Label = escapeLatex( firstCategory );
			const c2Label = escapeLatex( secondCategory );
			const gLabel = escapeLatex( grouping );
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>{title}</label><br />
				<span>
					Let <TeX raw={`p_{${c1Label}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code> in the first group, <br />
					and <TeX raw={`p_{${c2Label}}`} /> the probability in the second group, respectively. We test
				</span>
				<TeX
					displayMode
					raw={`H_0: p_{\\text{${gLabel}:${c1Label}}} - p_{\\text{${gLabel}:${c2Label}}} = ${diff}`}
					tag="" />
				<span> vs. </span>
				<TeX
					displayMode
					raw={`H_1: p_{\\text{${gLabel}:${c1Label}}} - p_{\\text{${gLabel}:${c2Label}}} ${arrow} ${diff}`}
					tag=""
				/>
				<pre>
					{printout}
					<br />
					Sample proportion in group &quot;{firstCategory}&quot;: {roundn( mean( x ), -3 )}
					<br />
					Sample proportion in group &quot;{secondCategory}&quot;: {roundn( mean( y ), -3 )}
				</pre>
			</div>;
		} else if ( var2 ) {
			const xvals = data[ var1 ];
			const yvals = data[ var2 ];
			const x = [];
			const y = [];
			for ( let i = 0; i < x.length; i++ ) {
				const xv = xvals[ i ];
				if ( !isUndefinedOrNull( xv ) && xv !== '' ) {
					x.push( xv === success ? 1 : 0 );
				}
			}
			for ( let i = 0; i < y.length; i++ ) {
				const yv = yvals[ i ];
				if ( !isUndefinedOrNull( yv ) && yv !== '' ) {
					y.push( yv === success ? 1 : 0 );
				}
			}
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
			const title = `Hypothesis test for equality of proportion ${var1} against proportion ${var2}`;
			const evar1 = escapeLatex( var1 );
			const evar2 = escapeLatex( var2 );
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>{title}</label><br />
				<p>
					Let <TeX raw={`p_{${evar1}}`} /> be the population probability of <code>{var1}</code> being <code>{success}</code>, <br />
					and <TeX raw={`p_{${evar2}}`} /> the probability <code>{var2}</code> being <code>{success}</code>, respectively. We test
				</p>
				<TeX displayMode raw={`H_0: p_{${evar1}} - p_{${evar2}} = ${diff}`} tag="" />
				<span> vs. </span>
				<TeX displayMode raw={`H_1: p_{${evar1}} - p_{${evar2}} ${arrow} ${diff}`} tag="" />
				<pre style={{ fontSize: '11px' }}>
					{result.print({
						decision: showDecision
					})}
					<br />
					Sample proportion in group &quot;{var1}&quot;: {roundn( mean( x ), -3 )}
					<br />
					Sample proportion in group &quot;{var2}&quot;: {roundn( mean( y ), -3 )}
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
				variable: 'Two-Sample Proportion Test',
				type: 'Test',
				value: value
			};
			this.props.logAction( DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST, {
				var1, grouping, var2, success, diff, direction, alpha
			});
			this.props.onCreated( output );
		}
	}

	render() {
		const { categorical, data } = this.props;
		const binary = getBinaryVars( categorical, data );
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Two-Sample Proportion Test
					<QuestionButton title="Two-Sample Proportion Test" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col md={6}>
							<SelectInput
								legend="Variable:"
								defaultValue={categorical[ 0 ]}
								options={categorical}
								onChange={( variable ) => {
									const values = this.props.data[ variable ];
									const categories = extractCategoriesFromValues( values, variable );
									unique( categories );
									this.setState({
										var1: variable,
										categories,
										success: categories[ 0 ]
									});
								}}
							/>
						</Col>
						<Col md={6}>
							<SelectInput
								legend="Success:"
								defaultValue={this.state.categories[ 0 ]}
								options={this.state.categories}
								onChange={( value ) => {
									this.setState({
										success: value
									});
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<SelectInput
								legend="Groups:"
								options={binary}
								clearable
								onChange={( value ) => {
									this.setState({
										grouping: value,
										var2: null
									});
								}}
							/>
						</Col>
						<Col md={2}><p>OR</p></Col>
						<Col md={5}>
							<SelectInput
								legend="Second Variable: "
								options={categorical.filter( elem =>
									contains( this.state.categories, elem )
								)}
								clearable
								onChange={( value ) => {
									this.setState({
										grouping: null,
										var2: value
									});
								}}
							/>
						</Col>
					</Row>
					<NumberInput
						legend="Difference under H0"
						defaultValue={this.state.diff}
						min={0}
						max={1}
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
					<Button
						variant="primary" block
						onClick={this.calculateTwoSamplePropTest}
						disabled={!this.state.var2 && !this.state.grouping}
					>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

PropTest2.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDecision: PropTypes.bool
};

PropTest2.defaultProps = {
	categorical: null,
	logAction() {},
	session: {},
	showDecision: true
};


// EXPORTS //

export default PropTest2;
