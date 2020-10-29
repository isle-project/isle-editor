// MODULES //

import React, { Component } from 'react';
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

class QQPlotMenu extends Component {
	constructor( props ) {
		super( props );
	}

	generateQQPlot( variable ) {
		const plotId = randomstring( 6 );
		const action = {
			variable, plotId
		};
		const onShare = () => {
			this.props.session.addNotification({
				title: this.props.t('plot-shared'),
				message: this.props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_QQPLOT, action );
		};
		const output = <QQPlot data={this.props.data} variable={variable} id={plotId} action={action} onShare={onShare} />;
		this.props.logAction( DATA_EXPLORER_QQPLOT, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultValue, t } = this.props;
		return (
			<Dashboard
				title={<span>
					{t('QQ Plot')}
					<QuestionButton title={t('QQ Plot')} content={DESCRIPTION} />
				</span>}
				autoStart={false}
				onGenerate={this.generateQQPlot.bind( this )}
			>
				<SelectInput
					legend={`${t('variable')}:`}
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
			</Dashboard>
		);
	}
}


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
