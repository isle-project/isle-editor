// MODULES //

import React from 'react';
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


// MAIN //

const LassoRegressionMenu = ( props ) => {
	const { data, categorical, quantitative, t, logAction, onCreated, onGenerate } = props;
	const compute = ( y, x, lambda, intercept ) => {
		const output = <LassoRegression
			x={x} y={y}
			lambda={lambda} intercept={intercept}
			data={data}
			quantitative={quantitative}
			onPredict={( fitted, residuals, counter ) => {
				const newData = copy( data, 1 );
				const newQuantitative = quantitative.slice();
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
				onGenerate( newQuantitative, newData );
			}}
		/>;
		logAction( DATA_EXPLORER_LASSO_REGRESSION, {
			y, x, intercept, lambda
		});
		onCreated( output );
	};
	return (
		<Dashboard
			title={<span>
				{t('LASSO')}
				<QuestionButton title={t('LASSO')} content={t('LASSO-description')} />
			</span>}
			autoStart={false}
			onGenerate={compute}
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
};


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
