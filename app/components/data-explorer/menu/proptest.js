// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import PropTest from 'components/tests/proptest';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';
import { DATA_EXPLORER_TESTS_PROPTEST } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test for the proportion of a selected category of a qualitative variable.';


// MAIN //

class PropTestMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			variable: null,
			success: null,
			p0: 0.5,
			direction: 'two-sided',
			alpha: 0.05,
			categories: null
		};
	}

	calculatePropTest = () => {
		const { variable, success, p0, direction, alpha } = this.state;
		const { data, showDecision } = this.props;
		const output = <PropTest data={data} variable={variable} success={success} p0={p0} direction={direction} alpha={alpha} showDecision={showDecision} />;
		this.props.logAction( DATA_EXPLORER_TESTS_PROPTEST, {
			variable, success, p0, direction, alpha, showDecision
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical } = this.props;
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					One-Sample Proportion Test
					<QuestionButton title="One-Sample Proportion Test" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={categorical}
						onChange={( variable ) => {
							const values = this.props.data[ variable ];
							const categories = extractCategoriesFromValues( values, variable );
							this.setState({
								categories,
								variable,
								success: categories[ 0 ]
							});
						}}
					/>
					{ this.state.categories ? <SelectInput
						legend="Success:"
						defaultValue={this.state.success}
						options={this.state.categories}
						onChange={( value ) => {
							this.setState({
								success: value
							});
						}}
					/> : null }
					<NumberInput
						legend={<TeX raw="p_0" />}
						defaultValue={this.state.p0}
						min={0.001}
						max={0.999}
						step="any"
						onChange={( value ) => {
							this.setState({
								p0: value
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
						onClick={this.calculatePropTest}
						disabled={!this.state.variable}
					>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

PropTestMenu.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

PropTestMenu.defaultProps = {
	categorical: null,
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default PropTestMenu;
