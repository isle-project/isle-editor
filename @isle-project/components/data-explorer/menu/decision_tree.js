// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import unique from 'uniq';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import Collapse from 'components/collapse';
import DecisionTree from 'components/models/decision-tree';
import { DATA_EXPLORER_DECISION_TREE } from 'constants/actions.js';
import subtract from 'utils/subtract';
import QuestionButton from '../question_button.js';


// MAIN //

const DecisionTreeMenu = ( props ) => {
	const { categorical, quantitative, t } = props;
	const [ y, setY ] = useState( 0 );
	const [ x, setX ] = useState( 0 );
	const [ type, setType ] = useState( 'Classification' );
	const [ impurityMeasure, setImpurityMeasure ] = useState( 'gini' );
	const [ scoreThreshold, setScoreThreshold ] = useState( 0.0075 );
	const [ maxTreeDepth, setMaxTreeDepth ] = useState( 5 );
	const [ minItemsCount, setMinItemsCount ] = useState( 50 );

	const compute = () => {
		const output = <DecisionTree
			x={x} y={y} type={type} impurityMeasure={impurityMeasure}
			data={props.data} quantitative={props.quantitative}
			scoreThreshold={scoreThreshold} maxTreeDepth={maxTreeDepth}
			minItemsCount={minItemsCount}
			onPredict={( tree, counter ) => {
				const newData = copy( props.data, 1 );
				if ( type === 'Classification' ) {
					const newCategorical = props.categorical.slice();
					const yhat = tree.predict( newData ).map( x => String( x ) );
					let name = 'pred_tree' + counter;
					newData[ name ] = yhat;
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					name = 'correct_tree' + counter;
					const yvalues = props.data[ y ];
					newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					props.onGenerate( props.quantitative, newCategorical, newData );
				}
				else {
					const newQuantitative = props.quantitative.slice();
					const yhat = tree.predict( newData );
					let name = 'pred_tree' + counter;
					newData[ name ] = yhat;
					if ( !contains( newQuantitative, name ) ) {
						newQuantitative.push( name );
					}
					name = 'resid_tree' + counter;
					newData[ name ] = subtract( yhat, props.data[ y ] );
					if ( !contains( newQuantitative, name ) ) {
						newQuantitative.push( name );
					}
					props.onGenerate( newQuantitative, props.categorical, newData );
				}
			}}
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
			<Card.Body>
				<SelectInput
					legend={t('type')}
					options={[ 'Classification', 'Regression' ]}
					defaultValue={type}
					onChange={( newType ) => {
						if ( newType !== type ) {
							setType( newType );
							setY( type === 'Classification' ? categorical[ 0 ] : quantitative[ 0 ] );
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
					<NumberInput legend="Score threshold for split"
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
				<Button disabled={!x || x.length === 0} variant="primary" block onClick={compute} >
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
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default DecisionTreeMenu;
