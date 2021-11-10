// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import unique from 'uniq';
import TeX from '@isle-project/components/tex';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SliderInput from '@isle-project/components/input/slider';
import Dashboard from '@isle-project/components/dashboard';
import LassoRegression from '@isle-project/components/models/lasso-regression';
import { DATA_EXPLORER_LASSO_REGRESSION } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const LassoRegressionMenu = ( props ) => {
	const { categorical, quantitative, t, logAction, onCreated, onPredict } = props;
	const compute = ( y, x, lambda, intercept ) => {
		const output = <LassoRegression
			x={x} y={y}
			lambda={lambda} intercept={intercept}
			data={props.data}
			quantitative={quantitative}
			onPredict={onPredict}
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
			bodyClassName="d-grid gap-3"
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
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default LassoRegressionMenu;
