// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import CorrTest from 'components/tests/corrtest';
import { DATA_EXPLORER_TESTS_CORRTEST } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const CorrTestMenu = ( props ) => {
	const calculateCorrTest = ( var1, var2, rho0, direction, alpha ) => {
		const { data, showDecision } = props;
		const output = <CorrTest data={data} var1={var1} var2={var2} rho0={rho0} direction={direction} alpha={alpha} showDecision={showDecision} />;
		props.logAction( DATA_EXPLORER_TESTS_CORRTEST, {
			var1, var2, rho0, direction, alpha, showDecision
		});
		props.onCreated( output );
	};
	const { quantitative, t } = props;
	return (
		<Dashboard
			title={
				<span>
					{t('Correlation Test')}
					<QuestionButton title={t('Correlation Test')} content={t('Correlation Test-description')} />
				</span>
			}
			label={t('calculate')}
			autoStart={false}
			onGenerate={calculateCorrTest}
		>
			<SelectInput
				legend={t('variable')}
				defaultValue={quantitative[ 0 ]}
				options={quantitative}
			/>
			<SelectInput
				legend={t('second-variable')}
				defaultValue={quantitative[ 1 ]}
				options={quantitative}
			/>
			<NumberInput
				legend={<TeX raw="\rho_0" />}
				defaultValue={0.0}
				step="any"
				min={-1.0}
				max={1.0}
			/>
			<SelectInput
				legend={t('direction')}
				defaultValue="two-sided"
				options={[ 'less', 'greater', 'two-sided' ]}
			/>
			<NumberInput
				legend={<span>{t('significance-level')}<TeX raw="\alpha" /></span>}
				defaultValue={0.05}
				min={0.0}
				max={1.0}
				step="any"
			/>
		</Dashboard>
	);
};


// PROPERTIES //

CorrTestMenu.propTypes = {
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

CorrTestMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default CorrTestMenu;
