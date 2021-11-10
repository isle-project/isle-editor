// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isArray from '@stdlib/assert/is-array';
import memoize from '@stdlib/utils/memoize';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import { DATA_EXPLORER_LOGISTIC_REGRESSION } from '@isle-project/constants/actions.js';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import LogisticRegression from '@isle-project/components/models/logistic-regression';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Predict a categorical response variable using one or more explanatory variables.';
const extractCategories = memoize( extractCategoriesFromValues, ( args ) => {
	return args[ 1 ];
});


// MAIN //

class LogisticRegressionMenu extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			categories: [],
			y: null,
			success: null,
			x: props.quantitative[ 0 ],
			intercept: true,
			omitMissing: false
		};
	}

	componentDidMount() {
		let categories;
		let success;
		let y;
		const { categorical, data } = this.props;
		if ( isArray( categorical ) && categorical.length > 0 ) {
			y = categorical[ 0 ];
			categories = extractCategories( data[ y ], y );
			success = categories[ categories.length-1 ];
		} else {
			categories = [];
			success = null;
		}

		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			y,
			success,
			categories
		});
	}

	compute = () => {
		const { y, success, x, intercept, omitMissing } = this.state;
		const output = <LogisticRegression
			data={this.props.data}
			x={x} y={y}
			success={success}
			intercept={intercept}
			omitMissing={omitMissing}
			quantitative={this.props.quantitative}
			onPredict={this.props.onPredict}
		/>;
		this.props.logAction( DATA_EXPLORER_LOGISTIC_REGRESSION, {
			y, x, intercept
		});
		this.props.onCreated( output );
	};

	render() {
		const { categorical, quantitative, data, t } = this.props;
		const { x, y, categories, success, intercept } = this.state;
		return (
			<Card
				style={{ fontSize: '14px', maxWidth: 500 }}
			>
				<Card.Header as="h4">
					{t('Logistic Regression')}
					<QuestionButton title={t('Logistic Regression')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col md={6}>
							<SelectInput
								legend={t('outcome-y')}
								options={categorical}
								defaultValue={y}
								onChange={( y ) => {
									const categories = extractCategoriesFromValues( data[ y ], y );
									this.setState({
										categories,
										success: categories[ categories.length-1 ],
										y
									});
								}}
							/>
						</Col>
						<Col md={6}>
							<SelectInput
								legend={`${t('success')} (Y = 1):`}
								defaultValue={success}
								options={categories}
								onChange={( value ) => {
									this.setState({
										success: value
									});
								}}
							/>
						</Col>
					</Row>
					<SelectInput
						legend={t('predictors-x')} multi
						options={uniq( quantitative.concat( categorical ) )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
						closeMenuOnSelect={false}
						selectAllOption
					/>
					<CheckboxInput
						legend={t('include-intercept')}
						defaultValue={intercept}
						onChange={( intercept ) => this.setState({ intercept })}
					/>
					<CheckboxInput
						legend={t('omit-missing')}
						defaultValue={false}
						onChange={( omitMissing ) => this.setState({ omitMissing })}
					/>
					<div className="d-grid" >
						<Button disabled={!x || x.length === 0} variant="primary" onClick={this.compute}>
							{t('calculate')}
						</Button>
					</div>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LogisticRegressionMenu.defaultProps = {
	logAction() {}
};

LogisticRegressionMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default LogisticRegressionMenu;
