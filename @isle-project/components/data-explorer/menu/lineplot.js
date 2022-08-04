// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from '@isle-project/components/input/select';
import selectStyles from '@isle-project/components/input/select/styles';
import CheckboxInput from '@isle-project/components/input/checkbox';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import LinePlot from '@isle-project/components/plots/lineplot';
import { SHARE_LINEPLOT, LINEPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// FUNCTIONS //

function createOption( label ) {
	return {
		label,
		value: label
	};
}


// MAIN //

const LinePlotMenu = ( props ) => {
	const { categorical, data, defaultValue, variables, groupingVariables, t, session, logAction, onCreated } = props;
	const [ x, setX ] = useState( null );
	const [ y, setY ] = useState( defaultValue || variables[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ showPoints, setShowPoints ] = useState( false );
	const generateLinePlot = () => {
		const plotId = randomstring( 6 );
		const action = {
			x,
			y,
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
			logAction( SHARE_LINEPLOT, action );
		};
		const output = <LinePlot
			data={data} x={x} y={y}
			group={group} showPoints={showPoints}
			onShare={onShare} action={action} id={plotId}
		/>;
		logAction( LINEPLOT, action );
		onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Line Plot')}
				<QuestionButton title={t('Line Plot')} content={t('Line Plot-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<FormGroup controlId="lineplot-form-select">
					<FormLabel>{t('x-axis')}</FormLabel>
					<Select
						legend={t('x-axis')}
						defaultValue={null}
						options={[
							{
								label: 'Quantitative',
								options: variables.map( createOption )
							},
							{
								label: 'Categorical',
								options: categorical.map( createOption )
							}
						]}
						onChange={( elem ) => {
							setX( elem ? elem.value : null );
						}}
						placeholder="Select... (optional)"
						isClearable
						styles={selectStyles}
						menuPortalTarget={document.body}
						menuPlacement="auto"
						menuShouldScrollIntoView={false}
					/>
				</FormGroup>
				<SelectInput
					legend={t('y-axis')}
					defaultValue={y}
					options={variables}
					onChange={setY}
				/>
				<SelectInput
					legend={t('group-by')}
					defaultValue={group}
					options={groupingVariables}
					clearable={true}
					menuPlacement="top"
					onChange={setGroup}
				/>
				<CheckboxInput
					legend={t('show-point-markers')}
					defaultValue={showPoints}
					onChange={setShowPoints}
				/>
				<div className="d-grid" >
					<Button variant="primary" onClick={generateLinePlot}>
						{t('generate')}
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

LinePlotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {}
};

LinePlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object.isRequired,
	categorical: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default LinePlotMenu;
