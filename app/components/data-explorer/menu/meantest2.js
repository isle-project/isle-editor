// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import MeanTest2 from 'components/tests/meantest2';
import { DATA_EXPLORER_TESTS_TWO_SAMPLE_MEAN } from 'constants/actions.js';
import QuestionButton from './../question_button.js';
import getBinaryVars from './../get_binary_vars.js';


// VARIABLES //

const DESCRIPTION = 'A test for equality of means across two groups.';


// MAIN //

class MeanTest2Menu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			x: null,
			group: null,
			y: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05,
			type: 'T Test',
			xstdev: null,
			ystdev: null
		};
	}

	calculateTwoSampleZTest = () => {
		let { x, group, y, diff, direction, alpha, type, xstdev, ystdev } = this.state;
		const { data, showDecision } = this.props;
		if ( !y && !group ) {
			return this.props.session.addNotification({
				title: 'Action required',
				message: `Please select either a grouping variable or a second variable to compare ${x} against.`,
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <MeanTest2
			x={x} group={group} y={y} diff={diff} direction={direction}
			alpha={alpha} type={type} xstdev={xstdev} ystdev={ystdev}
			data={data} showDecision={showDecision}
		/>;
		this.props.logAction( DATA_EXPLORER_TESTS_TWO_SAMPLE_MEAN, {
			x, group, y, diff, direction, alpha, showDecision
		});
		this.props.onCreated( output );
	}

	renderInputs() {
		const { quantitative, categorical, data, t } = this.props;
		const binary = getBinaryVars( categorical, data );
		return ( <Fragment>
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
				legend={`${t('variable')}:`}
				defaultValue={this.state.x}
				options={quantitative}
				onChange={( x ) => {
					this.setState({
						x
					});
				}}
			/>
			<Row>
				<Col md={5}>
					<SelectInput
						legend="Groups:"
						options={binary}
						defaultValue={this.state.group}
						clearable
						onChange={( group ) => {
							return this.setState({
								y: null,
								group
							});
						}}
					/>
				</Col>
				<Col md={2}>
					<p>OR</p>
				</Col>
				<Col md={5}>
					<SelectInput
						legend={`${t('second-variable')}:`}
						options={quantitative}
						defaultValue={this.state.y}
						clearable
						onChange={( y ) => {
							return this.setState({
								y,
								group: null
							});
						}}
					/>
				</Col>
			</Row>
			{ this.state.type === 'Z Test' ?
				<Row>
					<Col>
						<NumberInput
							legend="1st Standard Deviation"
							defaultValue={this.state.xstdev || 1}
							step="any"
							min={0}
							onChange={( value ) => {
								this.setState({
									xstdev: value
								});
							}}
						/>
					</Col>
					<Col>
						<NumberInput
							legend="2nd Standard Deviation"
							defaultValue={this.state.ystdev || 1}
							step="any"
							min={0}
							onChange={( value ) => {
								this.setState({
									ystdev: value
								});
							}}
							tooltipPlacement="top"
						/>
					</Col>
				</Row>: null
			}
			<Row>
				<Col>
					<NumberInput
						legend={t('difference-h0')}
						defaultValue={this.state.diff}
						step="any"
						onChange={( value ) => {
							this.setState({
								diff: value
							});
						}}
					/>
				</Col>
				<Col>
					<NumberInput
						legend={<span>{t('significance-level')}<TeX raw="\alpha" /></span>}
						defaultValue={this.state.alpha}
						min={0.0}
						max={1.0}
						step="any"
						onChange={( value ) => {
							this.setState({
								alpha: value
							});
						}}
						tooltipPlacement="bottom"
					/>
				</Col>
			</Row>
			<SelectInput
				legend={t('direction')}
				defaultValue={this.state.direction}
				options={[ 'less', 'greater', 'two-sided' ]}
				onChange={( value ) => {
					this.setState({
						direction: value
					});
				}}
				menuPlacement="top"
			/>
		</Fragment> );
	}

	render() {
		const { t } = this.props;
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					{t('Two-Sample Mean Test')}
					<QuestionButton title={t('Two-Sample Mean Test')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<Button
						variant="primary" block
						onClick={this.calculateTwoSampleZTest}
						disabled={(!this.state.group && !this.state.y) || !this.state.x}
					>
						{t('calculate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

MeanTest2Menu.defaultProps = {
	categorical: null,
	logAction() {},
	session: {},
	showDecision: true
};

MeanTest2Menu.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest2Menu;
