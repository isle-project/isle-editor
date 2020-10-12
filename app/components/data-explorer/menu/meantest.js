// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import MeanTest from 'components/tests/meantest';
import { DATA_EXPLORER_TESTS_MEAN } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A test for the mean of a quantitative variable.';


// MAIN //

class MeanTestMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			type: 'T Test',
			variable: null,
			mu0: 0,
			direction: 'two-sided',
			alpha: 0.05,
			xstdev: null
		};
	}

	calculateMeanTest = () => {
		const { data, showDecision } = this.props;
		const { variable, type, mu0, direction, alpha, xstdev } = this.state;
		const output = <MeanTest
			data={data}
			variable={variable}
			showDecision={showDecision}
			mu0={mu0}
			direction={direction}
			xstdev={xstdev}
			type={type}
			alpha={alpha}
		/>;
		this.props.logAction( DATA_EXPLORER_TESTS_MEAN, {
			variable, mu0, direction, alpha, type, showDecision
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
						this.setState({
							variable
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

// PROPERTIES //

MeanTestMenu.defaultProps = {
	logAction() {},
	showDecision: true
};

MeanTestMenu.propTypes = {
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTestMenu;
