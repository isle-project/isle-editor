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
import unique from 'uniq';
import PropTest2 from 'components/tests/proptest2';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';
import { DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST } from 'constants/actions.js';
import QuestionButton from './../question_button.js';
import getBinaryVars from './../get_binary_vars.js';


// VARIABLES //

const DESCRIPTION = 'A test for equality of proportions for a selected category of a qualitative variable across two groups.';


// MAIN //

class PropTest2Menu extends Component {
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
			group: null,
			var2: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05
		};
	}

	calculateTwoSamplePropTest = () => {
		const { var1, success, group, var2, diff, direction, alpha } = this.state;
		const { data, showDecision } = this.props;
		if ( var1 === group || var1 === var2 ) {
			return this.props.session.addNotification({
				title: 'Action required',
				message: 'Please make sure that the group variable or second variable is not equal to your variable of interest.',
				level: 'warning',
				position: 'tr'
			});
		}
		if ( !group && !var2 ) {
			this.props.session.addNotification({
				title: 'Action required',
				message: `Please select either a grouping variable or a second variable to compare ${var1} against.`,
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <PropTest2
			data={data} showDecision={showDecision}
			var1={var1} var2={var2} group={group}
			diff={diff} direction={direction} alpha={alpha} success={success}
		/>;
		this.props.logAction( DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST, {
			var1, group, var2, success, diff, direction, alpha, showDecision
		});
		this.props.onCreated( output );
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
										group: value,
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
										group: null,
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
						disabled={!this.state.var2 && !this.state.group}
					>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

PropTest2Menu.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDecision: PropTypes.bool
};

PropTest2Menu.defaultProps = {
	categorical: null,
	logAction() {},
	session: {},
	showDecision: true
};


// EXPORTS //

export default PropTest2Menu;
