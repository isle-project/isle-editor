// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import Dashboard from '@isle-project/components/dashboard';
import TukeyHSD from '@isle-project/components/tests/tukey-hsd';
import { TESTS_TUKEY_HSD } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const TukeyHSDMenu = ({ quantitative, categorical, t, data, logAction, onCreated }) => {
	return (
		<Dashboard
			autoStart={false}
			title={<span>
				{t('Tukey HSD Test')}
				<QuestionButton title={t('Tukey HSD Test')} content={t('Tukey HSD Test-description')} />
			</span>}
			label={t('calculate')}
			onGenerate={( variable, group, confidenceLevel ) => {
				logAction( TESTS_TUKEY_HSD, {
					variable, group
				});
				const output = <TukeyHSD data={data} variable={variable} group={group} confidenceLevel={confidenceLevel} />;
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
			<NumberInput
				legend={t('confidence-level')}
				defaultValue={0.95}
				min={0.0}
				max={1.0}
				step="any"
				tooltipPlacement="bottom"
			/>
		</Dashboard>
	);
};


// PROPERTIES //

TukeyHSDMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
};

TukeyHSDMenu.defaultProps = {
	logAction() {}
};


// EXPORTS //

export default TukeyHSDMenu;
