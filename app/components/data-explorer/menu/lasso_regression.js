// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unique from 'uniq';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import TeX from 'components/tex';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import LassoRegression from 'components/models/lasso-regression';
import { DATA_EXPLORER_LASSO_REGRESSION } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = <span>Fit a regression model in which non-zero regression coefficients are penalized using the <TeX raw="\lambda" /> regularization parameter. The LASSO performs automatic model selection as it will shrink the regression coefficients of some variables to zero.</span>;


// MAIN //

class LassoRegressionMenu extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( y, x, lambda, intercept ) => {
		const output = <LassoRegression
			x={x} y={y}
			lambda={lambda} intercept={intercept}
			data={this.props.data}
			quantitative={this.props.quantitative}
			onPredict={( fitted, residuals, counter ) => {
				const newData = copy( this.props.data, 1 );
				const newQuantitative = this.props.quantitative.slice();
				let name = 'pred_lasso' + counter;
				newData[ name ] = fitted;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				name = 'resid_lasso' + counter;
				newData[ name ] = residuals;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				this.props.onGenerate( newQuantitative, newData );
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_LASSO_REGRESSION, {
			y, x, intercept, lambda
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative, t } = this.props;
		return (
			<Dashboard
				title={<span>
					{t('LASSO Regression')}
					<QuestionButton title={t('LASSO Regression')} content={DESCRIPTION} />
				</span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend={t('outcome-y')}
					options={quantitative}
					defaultValue={quantitative[ 0 ]}
				/>
				<SelectInput
					legend={t('predictors-x')} multi
					options={unique( quantitative.concat( categorical ) )}
					defaultValue={quantitative[ 1 ]}
					closeMenuOnSelect={false}
				/>
				<SliderInput
					legend={<span>L1 Penalty Term <TeX raw="\lambda" /></span>}
					defaultValue={1e-3}
					min={1e-12}
					max={1}
					step="any"
					rangeInputStyle={{ width: 260 }}
					numberInputStyle={{ width: 120 }}
				/>
				<CheckboxInput
					legend={t('include-intercept')}
					defaultValue={true}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

LassoRegressionMenu.defaultProps = {
	logAction() {}
};

LassoRegressionMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default LassoRegressionMenu;
