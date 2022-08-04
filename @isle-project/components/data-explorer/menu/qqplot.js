// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import Dashboard from '@isle-project/components/dashboard';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import QQPlot from '@isle-project/components/plots/qqplot';
import { SHARE_QQPLOT, QQPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const QQPlotMenu = ({ data, variables, defaultValue, t, session, logAction, onCreated, onSelected }) => {
	return (
		<Dashboard
			title={<span>
				{t('QQ Plot')}
				<QuestionButton title={t('QQ Plot')} content={t('QQ Plot-description')} />
			</span>}
			autoStart={false}
			onGenerate={generateQQPlot}
		>
			<SelectInput
				legend={t('variable')}
				defaultValue={defaultValue || variables[ 0 ]}
				options={variables}
			/>
		</Dashboard>
	);

	function generateQQPlot( variable ) {
		const plotId = randomstring( 6 );
		const action = {
			variable, plotId
		};
		const onShare = () => {
			session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			logAction( SHARE_QQPLOT, action );
		};
		const output = <QQPlot data={data} variable={variable} id={plotId} action={action} onShare={onShare} onSelected={onSelected} />;
		logAction( QQPLOT, action );
		onCreated( output );
	}
};


// PROPERTIES //

QQPlotMenu.defaultProps = {
	defaultValue: null,
	logAction() {}
};

QQPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default QQPlotMenu;
