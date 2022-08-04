// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import IntervalPlot from '@isle-project/components/plots/interval-plot';
import { SHARE_INTERVALPLOT, INTERVALPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const IntervalPlotMenu = ({ data, variables, groupingVariables, t, session, logAction, onCreated }) => {
	const [ selectedVariable, setSelectedVariable ] = useState( null );
	const [ group, setGroup ] = useState( null );
	const [ orientation, setOrientation ] = useState( 'vertical' );
	const [ significanceLevel, setSignificanceLevel ] = useState( 0.05 );

	const generateIntervalPlot = () => {
		const plotId = randomstring( 6 );
		const action = {
			variable: selectedVariable,
			group: group,
			plotId
		};
		const onShare = () => {
			session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			logAction( SHARE_INTERVALPLOT, action );
		};
		const output = <IntervalPlot id={plotId} onShare={onShare} action={action}
			data={data} variable={selectedVariable} group={group}
			orientation={orientation} significanceLevel={significanceLevel}
		/>;
		logAction( INTERVALPLOT, action );
		onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Interval Plot')}
				<QuestionButton title={t('Interval Plot')} content={t('Interval Plot-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('variable')}
					defaultValue={selectedVariable}
					options={variables}
					onChange={setSelectedVariable}
				/>
				<SelectInput
					legend={t('group-by')}
					defaultValue={group}
					options={groupingVariables}
					onChange={setGroup}
					clearable
				/>
				<SelectInput
					legend={t('orientation')}
					options={[ 'vertical', 'horizontal' ]}
					defaultValue="vertical"
					menuPlacement="top"
					onChange={setOrientation}
				/>
				<NumberInput
					legend={t('significance-level')}
					defaultValue={0.05}
					onChange={setSignificanceLevel}
					min={0.0}
					max={1.0}
					step="any"
				/>
				<Button
					variant="primary" onClick={generateIntervalPlot}
					disabled={!selectedVariable || !group}
				>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

IntervalPlotMenu.defaultProps = {
	groupingVariables: null,
	logAction() {},
	onCreated() {}
};

IntervalPlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default IntervalPlotMenu;
