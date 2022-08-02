// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import unique from 'uniq';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import Collapse from '@isle-project/components/collapse';
import DecisionTree from '@isle-project/components/models/decision-tree';
import { DATA_EXPLORER_DECISION_TREE } from '@isle-project/constants/actions.js';
import QuestionButton from '../question_button.js';


// MAIN //

const DecisionTreeMenu = ( props ) => {
	const { categorical, quantitative, t } = props;
	const [ y, setY ] = useState( null );
	const [ x, setX ] = useState( null );
	const [ type, setType ] = useState( 'Classification' );
	const [ impurityMeasure, setImpurityMeasure ] = useState( 'gini' );
	const [ scoreThreshold, setScoreThreshold ] = useState( 0.0075 );
	const [ maxTreeDepth, setMaxTreeDepth ] = useState( 5 );
	const [ minItemsCount, setMinItemsCount ] = useState( 50 );
	const [ omitMissing, setOmitMissing ] = useState( false );

	const compute = () => {
		const output = <DecisionTree
			x={x} y={y} type={type} impurityMeasure={impurityMeasure}
			data={props.data} quantitative={props.quantitative}
			scoreThreshold={scoreThreshold} maxTreeDepth={maxTreeDepth}
			minItemsCount={minItemsCount}
			onPredict={props.onPredict} omitMissing={omitMissing}
		/>;
		props.logAction( DATA_EXPLORER_DECISION_TREE, {
			y, x, type
		});
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px', maxWidth: 600 }}
		>
			<Card.Header as="h4">
				{t('Decision Tree')}
				<QuestionButton title={t('Decision Tree')} content={t('Decision Tree-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('type')}
					options={[ 'Classification', 'Regression' ]}
					defaultValue={type}
					onChange={( newType ) => {
						if ( newType !== type ) {
							setType( newType );
							setY( newType === 'Classification' ? categorical[ 0 ] : quantitative[ 0 ] );
						}
					}}
				/>
				<SelectInput
					legend={t('outcome-y')}
					options={type === 'Classification' ? categorical : quantitative}
					defaultValue={y}
					onChange={setY}
				/>
				<SelectInput
					legend={t('predictors-x')} multi
					options={unique( quantitative.concat( categorical ) )}
					defaultValue={x || ''}
					onChange={setX}
					closeMenuOnSelect={false}
				/>
				{ type === 'Classification' ? <SelectInput
					legend={t('impurity-measure')}
					defaultValue={impurityMeasure}
					options={[ 'gini', 'entropy' ]}
					onChange={setImpurityMeasure}
				/> : null }
				<Collapse header={t('change-tree-features')} headerStyle={{ fontSize: '1rem' }} >
					<NumberInput legend={t('score-threshold-for-split')}
						min={0} max={1} step={0.001}
						defaultValue={scoreThreshold} onChange={setScoreThreshold}
					/>
					<NumberInput legend={t('maximum-tree-depth')}
						min={1} max={50}
						defaultValue={maxTreeDepth} onChange={setMaxTreeDepth}
					/>
					<NumberInput legend={t('min-obs-leafs')}
						min={1}
						defaultValue={minItemsCount}
						onChange={setMinItemsCount}
					/>
				</Collapse>
				<CheckboxInput
					legend={t('omit-missing')}
					defaultValue={omitMissing}
					onChange={setOmitMissing}
				/>
				<Button disabled={!x || x.length === 0} variant="primary" onClick={compute} >
					{t('calculate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

DecisionTreeMenu.defaultProps = {
	logAction() {}
};

DecisionTreeMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default DecisionTreeMenu;
