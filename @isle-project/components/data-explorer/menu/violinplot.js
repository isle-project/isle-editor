// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import { SHARE_VIOLINPLOT, VIOLINPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const ViolinPlotMenu = ({ data, variables, defaultValue, groupingVariables, t, session, logAction, onCreated }) => {
	const [ showBox, setShowBox ] = useState( false );
	const [ horizontal, setHorizontal ] = useState( false );
	const [ variable, setVariable ] = useState( defaultValue || variables[ 0 ] );
	const [ group, setGroup ] = useState( null );
	return (
		<Card>
			<Card.Header as="h4">
				{t('Violin Plot')}
				<QuestionButton title={t('Violin Plot')} content={t('Violin Plot-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('variable')}
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
					onChange={setVariable}
				/>
				<SelectInput
					legend={t('group-by')}
					options={groupingVariables}
					clearable={true}
					onChange={setGroup}
				/>
				<CheckboxInput
					legend={t('show-boxplot')}
					defaultValue={showBox}
					onChange={() => {
						setShowBox( !showBox );
					}}
				/>
				<CheckboxInput
					legend={t('flip-coordinates')}
					defaultValue={horizontal}
					onChange={setHorizontal}
				/>
				<Button
					variant="primary"
					onClick={handleGenerate}
				>{t('generate')}</Button>
			</Card.Body>
		</Card>
	);

	function handleGenerate() {
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
			showBox={showBox} horizontal={horizontal}
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
