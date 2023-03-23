// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import Dashboard from '@isle-project/components/dashboard';
import Chi2Test from '@isle-project/components/tests/chi2';
import { TESTS_CHISQUARE } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const Chi2TestMenu = ({ data, categorical, t, logAction, onCreated }) => {
	const calculateChisquareTest = ( var1, var2 ) => {
		const output = <Chi2Test data={data} var1={var1} var2={var2} />;
		logAction( TESTS_CHISQUARE, {
			var1, var2
		});
		onCreated( output );
	};
	return (
		<Dashboard
			title={
				<span>
					{t('Chi-square Independence Test')}
					<QuestionButton title={t('Chi-square Independence Test')} content={t('Chi-square Independence Test-description')} />
				</span>
			}
			label={t('calculate')}
			autoStart={false}
			onGenerate={calculateChisquareTest}
		>
			<SelectInput
				legend={t('first-variable')}
				defaultValue={categorical[ 0 ]}
				options={categorical}
			/>
			<SelectInput
				legend={t('second-variable')}
				defaultValue={categorical[ 1 ]}
				options={categorical}
			/>
		</Dashboard>
	);
};


// PROPERTIES //

Chi2TestMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};

Chi2TestMenu.defaultProps = {
	logAction() {}
};


// EXPORTS //

export default Chi2TestMenu;
