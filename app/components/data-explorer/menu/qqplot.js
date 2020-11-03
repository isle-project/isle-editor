// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import randomstring from 'utils/randomstring/alphanumeric';
import QQPlot from 'components/plots/qqplot';
import { DATA_EXPLORER_SHARE_QQPLOT, DATA_EXPLORER_QQPLOT } from 'constants/actions.js';
import QuestionButton from '../question_button.js';


// VARIABLES //

const DESCRIPTION = 'A QQ (quantile-quantile) plot allows one to compare the distribution of a sample to a reference distribution (usually a normal distribution). Deviations from the plotted 45 degree reference line on the plot indicate how much the sample deviates from the reference distribution.';


// MAIN //

const QQPlotMenu = ({ data,  variables, defaultValue, t, session, logAction, onCreated }) => {
	return (
		<Dashboard
			title={<span>
				{t('QQ Plot')}
				<QuestionButton title={t('QQ Plot')} content={DESCRIPTION} />
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
			logAction( DATA_EXPLORER_SHARE_QQPLOT, action );
		};
		const output = <QQPlot data={data} variable={variable} id={plotId} action={action} onShare={onShare} />;
		logAction( DATA_EXPLORER_QQPLOT, action );
		onCreated( output );
	}
};


// PROPERTIES //

QQPlotMenu.defaultProps = {
	defaultValue: null,
	logAction() {},
	session: {}
};

QQPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default QQPlotMenu;
