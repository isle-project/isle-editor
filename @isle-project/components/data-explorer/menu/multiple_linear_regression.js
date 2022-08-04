// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import unique from 'uniq';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Dashboard from '@isle-project/components/dashboard';
import MultipleLinearRegression from '@isle-project/components/models/multiple-linear-regression';
import { MULTIPLE_REGRESSION } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const MultipleLinearRegressionMenu = ( props ) => {
	const { data, categorical, quantitative, t } = props;

	const compute = ( y, x, intercept, omitMissing ) => {
		const output = <MultipleLinearRegression
			x={x} y={y} intercept={intercept} omitMissing={omitMissing}
			data={data} quantitative={quantitative}
			onPredict={props.onPredict}
			onDiagnostics={props.onCreated}
		/>;
		const action = {
			y, x, intercept
		};
		props.logAction( MULTIPLE_REGRESSION, action );
		props.onCreated( output );
	};
	return (
		<Dashboard
			title={<span>
				{t('Multiple Linear Regression')}
				<QuestionButton title={t('Multiple Linear Regression')} content={t('Multiple Linear Regression-description')} />
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
			<CheckboxInput
				legend={t('include-intercept')}
				defaultValue={true}
			/>
			<CheckboxInput
				legend={t('omit-missing')}
				defaultValue={false}
			/>
		</Dashboard>
	);
};


// PROPERTIES //

MultipleLinearRegressionMenu.defaultProps = {
	logAction() {}
};

MultipleLinearRegressionMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default MultipleLinearRegressionMenu;
