// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import SelectInput from 'components/input/select';
import selectStyles from 'components/input/select/styles';
import CheckboxInput from 'components/input/checkbox';
import randomstring from 'utils/randomstring/alphanumeric';
import LinePlot from 'components/plots/lineplot';
import { DATA_EXPLORER_SHARE_LINEPLOT, DATA_EXPLORER_LINEPLOT } from 'constants/actions.js';
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
	const [ x, setX ] = useState( null );
	const [ y, setY ] = useState( props.defaultValue || props.variables[ 0 ] );
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
			props.session.addNotification({
				title: props.t('plot-shared'),
				message: props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( DATA_EXPLORER_SHARE_LINEPLOT, action );
		};
		const output = <LinePlot
			data={props.data} x={x} y={y}
			group={group} showPoints={showPoints}
			onShare={onShare} action={action} id={plotId}
		/>;
		props.logAction( DATA_EXPLORER_LINEPLOT, action );
		props.onCreated( output );
	};
	const { categorical, variables, groupingVariables, t } = props;
	return (
		<Card>
			<Card.Header as="h4">
				{t('Line Plot')}
				<QuestionButton title={t('Line Plot')} content={t('Line Plot-description')} />
			</Card.Header>
			<Card.Body>
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
					/>
				</FormGroup>
				<SelectInput
					legend={t('y-axis')}
					defaultValue={y}
					options={variables}
					onChange={setY}
				/>
				<SelectInput
					legend={props.t('group-by')}
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
				<Button variant="primary" block onClick={generateLinePlot}>
					{this.props.t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

LinePlotMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	session: {}
};

LinePlotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	session: PropTypes.object,
	categorical: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default LinePlotMenu;
