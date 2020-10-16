// MODULES //

import React, { Component } from 'react';
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


// VARIABLES //

const DESCRIPTION = 'Grow a decision tree for either a regression or classification problem. For quantitative responses, at each iteration of the algorithm the data are split by the variable which leads to splits with the greatest reduction in variance for the response. For categorical responses, the data are split on the feature which leads to the largest information gain (measured either in terms of the Gini index or entropy)';


// MAIN //

class DecisionTreeMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ],
			type: 'Classification',
			impurityMeasure: 'gini',
			scoreThreshold: 0.0075,
			maxTreeDepth: 5,
			minItemsCount: 50
		};
	}

	compute = () => {
		let { y, x, type, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount } = this.state;
		const output = <DecisionTree
			x={x} y={y} type={type} impurityMeasure={impurityMeasure}
			data={this.props.data} quantitative={this.props.quantitative}
			scoreThreshold={scoreThreshold} maxTreeDepth={maxTreeDepth}
			minItemsCount={minItemsCount}
			onPredict={( tree, counter ) => {
				const newData = copy( this.props.data, 1 );
				if ( type === 'Classification' ) {
					const newCategorical = this.props.categorical.slice();
					const yhat = tree.predict( newData ).map( x => String( x ) );
					let name = 'pred_tree' + counter;
					newData[ name ] = yhat;
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					name = 'correct_tree' + counter;
					const yvalues = this.props.data[ y ];
					newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					this.props.onGenerate( this.props.quantitative, newCategorical, newData );
				}
				else {
					const newQuantitative = this.props.quantitative.slice();
					const yhat = tree.predict( newData );
					let name = 'pred_tree' + counter;
					newData[ name ] = yhat;
					if ( !contains( newQuantitative, name ) ) {
						newQuantitative.push( name );
					}
					name = 'resid_tree' + counter;
					newData[ name ] = subtract( yhat, this.props.data[ y ] );
					if ( !contains( newQuantitative, name ) ) {
						newQuantitative.push( name );
					}
					this.props.onGenerate( newQuantitative, this.props.categorical, newData );
				}
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_DECISION_TREE, {
			y, x, type
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		const { x, y, type } = this.state;
		return (
			<Card
				style={{ fontSize: '14px', maxWidth: 600 }}
			>
				<Card.Header as="h4">
					Decision Tree<QuestionButton title="Decision Tree" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Type"
						options={[ 'Classification', 'Regression' ]}
						defaultValue={type}
						onChange={( type ) => {
							if ( type !== this.state.type ) {
								this.setState({
									type,
									y: type === 'Classification' ? categorical[ 0 ] : quantitative[ 0 ]
								});
							}
						}}
					/>
					<SelectInput
						legend="Outcome (Y):"
						options={type === 'Classification' ? categorical : quantitative}
						defaultValue={y}
						onChange={( y ) => this.setState({ y })}
					/>
					<SelectInput
						legend="Predictors (X):" multi
						options={unique( quantitative.concat( categorical ) )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
						closeMenuOnSelect={false}
					/>
					{ type === 'Classification' ? <SelectInput
						legend="Impurity Measure"
						defaultValue={this.state.impurityMeasure}
						options={[ 'gini', 'entropy' ]}
						onChange={( impurityMeasure ) => this.setState({ impurityMeasure })}
					/> : null }
					<Collapse header="Change tree features..." headerStyle={{ fontSize: '1rem' }} >
						<NumberInput legend="Score threshold for split"
							min={0} max={1} step={0.001}
							defaultValue={this.state.scoreThreshold} onChange={( scoreThreshold ) => this.setState({ scoreThreshold })}
						/>
						<NumberInput legend="Maximum tree depth"
							min={1} max={50}
							defaultValue={this.state.maxTreeDepth} onChange={( maxTreeDepth ) => this.setState({ maxTreeDepth })}
						/>
						<NumberInput legend="Minimum # of observations in leaf nodes"
							min={1}
							defaultValue={this.state.minItemsCount}
							onChange={( minItemsCount ) => this.setState({ minItemsCount })}
						/>
					</Collapse>
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


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
