// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ztest from '@stdlib/stats/ztest';
import ttest from '@stdlib/stats/ttest';
import roundn from '@stdlib/math/base/special/roundn';
import replace from '@stdlib/string/replace';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import stdev from 'utils/statistic/stdev';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import { DATA_EXPLORER_TESTS_ZTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,-?[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[-?[\d.]+,Infinity\]/;
const DESCRIPTION = 'A test for the mean of a quantitative variable.';


// FUNCTIONS //

function extractValues( data, variable ) {
	const x = data[ variable ];
	const arr = [];
	if ( !x ) {
		return arr;
	}
	for ( let i = 0; i < x.length; i++ ) {
		if ( isNumber( x[ i ] ) && !isnan( x[ i ] ) ) {
			arr.push( x[ i ] );
		}
	}
	return arr;
}


// MAIN //

class MeanTest extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			type: 'T Test',
			variable: null,
			mu0: 0,
			direction: 'two-sided',
			alpha: 0.05,
			xstdev: null,
			xvalues: null
		};
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.data !== prevProps.data && this.state.variable ) {
			const xvalues = extractValues( this.props.data, this.state.variable );
			const xstdev = roundn( stdev( xvalues ), -6 );
			this.setState({
				xstdev,
				xvalues
			});
		}
	}

	calculateMeanTest = () => {
		const { showDecision } = this.props;
		const { variable, type, mu0, direction, alpha, xvalues, xstdev } = this.state;
		let result;
		if ( type === 'Z Test' ) {
			result = ztest( xvalues, xstdev, {
				'alpha': alpha,
				'alternative': direction,
				'mu': mu0
			});
		} else {
			result = ttest( xvalues, {
				'alpha': alpha,
				'alternative': direction,
				'mu': mu0
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
		const output = {
			variable: `Test for ${variable}`,
			type: 'Test',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>Hypothesis test for {variable}:</label>
				<TeX displayMode raw={`H_0: \\mu = ${mu0} \\; vs. \\; H_1: \\mu ${arrow} ${mu0}`} tag="" />
				<pre>
					{printout}
				</pre>
			</div>
		};
		this.props.logAction( DATA_EXPLORER_TESTS_ZTEST, {
			variable, mu0, direction, alpha
		});
		this.props.onCreated( output );
	}

	renderInputs() {
		const { quantitative } = this.props;
		return (
			<Fragment>
				<SelectInput
					legend="Type of Test:"
					defaultValue={this.state.type}
					options={[ 'T Test', 'Z Test' ]}
					onChange={( value ) => {
						this.setState({
							type: value
						});
					}}
				/>
				<SelectInput
					legend="Variable:"
					defaultValue={null}
					options={quantitative}
					onChange={( variable ) => {
						const xvalues = extractValues( this.props.data, variable );
						this.setState({
							variable,
							xvalues,
							xstdev: roundn( stdev( xvalues ), -6 )
						});
					}}
				/>
				{ this.state.type === 'Z Test' ?
					<NumberInput
						legend="Standard Deviation"
						defaultValue={this.state.xstdev}
						step="any"
						min={0}
						onChange={( value ) => {
							this.setState({
								xstdev: value
							});
						}}
						inputStyle={{
							width: 140
						}}
					/> : null
				}
				<Row>
					<Col>
						<NumberInput
							legend={<span><TeX raw="H_0" /> mean value (<TeX raw="\mu_0" />)</span>}
							defaultValue={this.state.mu0}
							step="any"
							onChange={( value ) => {
								this.setState({
									mu0: value
								});
							}}
						/>
					</Col>
					<Col>
						<NumberInput
							legend={<span>Significance level <TeX raw="\alpha" /></span>}
							defaultValue={this.state.alpha}
							min={0.0}
							max={1.0}
							tooltipPlacement="left"
							step="any"
							onChange={( value ) => {
								this.setState({
									alpha: value
								});
							}}
						/>
					</Col>
				</Row>
				<SelectInput
					legend="Direction:"
					defaultValue={this.state.direction}
					options={[ 'less', 'greater', 'two-sided' ]}
					onChange={( value ) => {
						this.setState({
							direction: value
						});
					}}
					menuPlacement="top"
				/>
			</Fragment>
		);
	}

	render() {
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					One-Sample Mean Test
					<QuestionButton title="One-Sample Mean Test" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<Button
						variant="primary" block onClick={this.calculateMeanTest}
						disabled={!this.state.variable}
					>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}

// DEFAULT PROPERTIES //

MeanTest.defaultProps = {
	logAction() {},
	showDecision: true
};


// PROPERTIES //

MeanTest.propTypes = {
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest;
