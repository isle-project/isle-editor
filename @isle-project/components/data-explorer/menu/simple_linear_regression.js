// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import Dashboard from '@isle-project/components/dashboard';
import SimpleLinearRegression from '@isle-project/components/models/simple-linear-regression';
import { LINEAR_REGRESSION } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Statistical model which estimates a best-fit line for a response variable of interest (Y) given exactly one predictor variable (X). The line is determined by its intercept (Y-value at X = 0) and slope (the increase in Y associated with a unit increase of X).';


// MAIN //

const SimpleLinearRegressionMenu = ( props ) => {
	const fitRegression = ( y, x, group, omitMissing ) => {
		const output = <SimpleLinearRegression
			y={y} x={x}
			group={group} omitMissing={omitMissing}
			data={props.data}
			onPredict={props.onPredict}
			onDiagnostics={props.onCreated}
		/>;
		props.logAction( LINEAR_REGRESSION, {
			y, x, group, omitMissing
		});
		props.onCreated( output );
	};
	const { quantitative, categorical, t } = props;
	return (
		<Dashboard
			title={<span>
				{props.t('Simple Linear Regression')}
				<QuestionButton title={props.t('Simple Linear Regression')} content={DESCRIPTION} />
			</span>}
			autoStart={false}
			onGenerate={fitRegression}
		>
			<SelectInput
				legend={t('outcome-y')}
				defaultValue={quantitative[ 0 ]}
				options={quantitative}
			/>
			<SelectInput
				legend={t('explanatory-variable')}
				defaultValue={quantitative[ 1 ]}
				options={quantitative}
			/>
			<SelectInput
				legend={t('group-by')}
				options={categorical}
				clearable={true}
				menuPlacement="top"
			/>
			<CheckboxInput
				legend={t('omit-missing')}
				defaultValue={false}
			/>
		</Dashboard>
	);
};


// PROPERTIES //

SimpleLinearRegressionMenu.defaultProps = {
	categorical: [],
	logAction() {}
};

SimpleLinearRegressionMenu.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default SimpleLinearRegressionMenu;
