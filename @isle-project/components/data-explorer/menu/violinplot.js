// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Dashboard from '@isle-project/components/dashboard';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import { SHARE_VIOLINPLOT, VIOLINPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = '';


// MAIN //

const ViolinPlotMenu = ({ data, variables, defaultValue, groupingVariables, t, session, logAction, onCreated }) => {
	const [ showBox, setShowBox ] = useState( false );
	return (
		<Dashboard
			autoStart={false}
			title={<span>
				{t('Violin Plot')}
				<QuestionButton title={t('Violin Plot')} content={DESCRIPTION} />
			</span>}
			onGenerate={generateViolinplot}
		>
			<SelectInput
				legend={t('variable')}
				defaultValue={defaultValue || variables[ 0 ]}
				options={variables}
			/>
			<SelectInput
				legend={t('group-by')}
				options={groupingVariables}
				clearable={true}
			/>
			<CheckboxInput
				legend={t('show-boxplot')}
				defaultValue={showBox}
				onChange={() => {
					setShowBox( !showBox );
				}}
			/>
		</Dashboard>
	);

	function generateViolinplot( variable, group ) {
		const plotId = randomstring( 6 );
		const action = {
			variable,
			group,
			plotId
		};
		const onShare = () => {
			session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			logAction( SHARE_VIOLINPLOT, action );
		};
		const output = <ViolinPlot
			id={plotId} variable={variable} group={group}
			data={data} onShare={onShare} action={action}
			showBox={showBox}
		/>;
		logAction( VIOLINPLOT, action );
		onCreated( output );
	}
};


// PROPERTIES //

ViolinPlotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {}
};

ViolinPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ViolinPlotMenu;
