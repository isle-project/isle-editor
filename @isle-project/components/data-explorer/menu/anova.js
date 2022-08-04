// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import Dashboard from '@isle-project/components/dashboard';
import Anova from '@isle-project/components/tests/anova';
import { TESTS_ANOVA } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const AnovaMenu = ({ quantitative, categorical, t, data, showDecision, logAction, onCreated }) => {
	return (
		<Dashboard
			autoStart={false}
			title={<span>
				{t('One-Way ANOVA')}
				<QuestionButton title={t('One-Way ANOVA')} content={t('One-Way ANOVA-description')} />
			</span>}
			label={t('calculate')}
			onGenerate={( variable, group ) => {
				logAction( TESTS_ANOVA, {
					variable, group, showDecision
				});
				const output = <Anova data={data} variable={variable} group={group} showDecision={showDecision} />;
				onCreated( output );
			}}
			bodyClassName="d-grid gap-3"
		>
			<SelectInput
				legend={t('variable')}
				defaultValue={quantitative[ 0 ]}
				options={quantitative}
			/>
			<SelectInput
				legend={t('grouping-variable')}
				defaultValue={categorical[ 0 ]}
				options={categorical}
			/>
		</Dashboard>
	);
};


// PROPERTIES //

AnovaMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

AnovaMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default AnovaMenu;
