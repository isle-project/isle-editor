// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import SelectInput from '@isle-project/components/input/select';
import ScatterPlotMatrix from '@isle-project/components/plots/scatterplot-matrix';
import { DATA_EXPLORER_SHARE_SPLOM, DATA_EXPLORER_SPLOM } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const ScatterplotMatrixMenu = ( props ) => {
	const { data, t } = props;
	const [ variables, setVariables ] = useState( null );
	const [ color, setColor ] = useState( null );

	const generate = () => {
		const plotId = randomstring( 6 );
		const action = {
			variables, color, plotId
		};
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( DATA_EXPLORER_SHARE_SPLOM, action );
		};
		const output = <ScatterPlotMatrix
			id={plotId}
			data={data}
			variables={variables}
			color={color}
			action={action}
			onShare={onShare}
			onSelected={props.onSelected}
		/>;
		props.logAction( DATA_EXPLORER_SPLOM, action );
		props.onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4" >
				{t('Scatterplot Matrix')}<QuestionButton title={t('Scatterplot Matrix')} content={t('Scatterplot Matrix-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('variables')}
					options={props.variables}
					multi
					onChange={setVariables}
				/>
				<SelectInput
					legend={`${t('color')}:`}
					options={props.groupingVariables}
					clearable={true}
					onChange={setColor}
				/>
				<Button
					variant="primary"
					onClick={generate}
					disabled={!variables || variables.length < 2}
				>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

ScatterplotMatrixMenu.defaultProps = {
	groupingVariables: null,
	logAction() {},
	onSelected() {}
};

ScatterplotMatrixMenu.propTypes = {
	data: PropTypes.object.isRequired,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ScatterplotMatrixMenu;
