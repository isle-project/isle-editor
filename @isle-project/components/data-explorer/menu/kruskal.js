// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import Dashboard from '@isle-project/components/dashboard';
import Kruskal from '@isle-project/components/tests/kruskal';
import { DATA_EXPLORER_TESTS_KRUSKAL } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const KruskalMenu = ( props ) => {
	const calculateTest = ( variable, group ) => {
		const { data, showDecision } = props;
		const output = <Kruskal data={data} variable={variable} group={group} showDecision={showDecision} />;
		props.logAction( DATA_EXPLORER_TESTS_KRUSKAL, {
			variable, group, showDecision
		});
		props.onCreated( output );
	};
	const { quantitative, categorical, t } = props;
	return (
		<Dashboard
			autoStart={false}
			title={<span>
				{t('Kruskal-Wallis Test')}
				<QuestionButton title={t('Kruskal-Wallis Test')} content={t('Kruskal-Wallis Test-description')} />
			</span>}
			label={t('calculate')}
			onGenerate={calculateTest}
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

KruskalMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

KruskalMenu.defaultProps = {
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default KruskalMenu;
