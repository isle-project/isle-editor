// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import unique from 'uniq';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import floor from '@stdlib/math/base/special/floor';
import sqrt from '@stdlib/math/base/special/sqrt';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import Collapse from 'components/collapse';
import RandomForest from 'components/models/random-forest';
import { DATA_EXPLORER_RANDOM_FOREST } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Instead of growing a single decision tree, a random forest as an ensemble method constructs many decision trees at once and returns the average of the predictions (regression case) or the majority vote (classification case) of the individual trees';


// FUNCTIONS //

function chooseTries( x, type ) {
	if ( !x ) {
		return 1;
	}
	if ( type === 'Classificiation' ) {
		return floor( sqrt( x.length ) );
	}
	if ( x.length < 3 ) {
		return 1;
	}
	return floor( x.length / 3 );
}


// MAIN //

class RandomForestMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ],
			type: 'Classification',
			nTrees: 50,
			nTry: 1,
			impurityMeasure: 'gini',
			scoreThreshold: 0.01,
			maxTreeDepth: 20,
			minItemsCount: 50
		};
	}

	compute = () => {
		let { y, x, type, nTrees, nTry, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount } = this.state;
		const output = <RandomForest
			x={x} y={y} type={type} nTrees={nTrees} nTry={nTry}
			impurityMeasure={impurityMeasure}
			scoreThreshold={scoreThreshold}
			maxTreeDepth={maxTreeDepth}
			minItemsCount={minItemsCount}
			quantitative={this.props.quantitative}
			data={this.props.data}
			onPredict={( forest, counter ) => {
				const newData = copy( this.props.data, 1 );
				if ( type === 'Classification' ) {
					const newCategorical = this.props.categorical.slice();
					const yhat = forest.predict( newData ).map( x => String( x ) );
					let name = 'pred_forest' + counter;
					newData[ name ] = yhat;
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					name = 'correct_forest' + counter;
					const yvalues = this.props.data[ y ];
					newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
					if ( !contains( newCategorical, name ) ) {
						newCategorical.push( name );
					}
					this.props.onGenerate( this.props.quantitative, newCategorical, newData );
				}
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_RANDOM_FOREST, {
			y, x, type, nTrees, nTry
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		const { x, y, type, nTrees, nTry } = this.state;
		return (
			<Card
				style={{ fontSize: '14px', maxWidth: 600 }}
			>
				<Card.Header as="h4">
					{this.props.t('Random Forest')}<QuestionButton title={this.props.t('Random Forest')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Type"
						options={[ 'Classification' ]}
						defaultValue={type}
						onChange={( type ) => {
							if ( type !== this.state.type ) {
								this.setState({
									type,
									y: type === 'Classification' ? categorical[ 0 ] : quantitative[ 0 ],
									nTry: chooseTries( this.state.x, type )
								});
							}
						}}
					/>
					<SelectInput
						legend={this.props.t('outcome-y')}
						options={type === 'Classification' ? categorical : quantitative}
						defaultValue={y}
						onChange={( y ) => this.setState({ y })}
					/>
					<SelectInput
						legend={this.props.t('predictors-x')} multi
						options={unique( quantitative.concat( categorical ) )}
						defaultValue={x || ''}
						onChange={( x ) => {
							this.setState({
								x,
								nTry: chooseTries( x, type )
							});
						}}
					/>
					<NumberInput
						legend="Number of trees"
						defaultValue={nTrees}
						inputStyle={{ float: 'right' }}
						onChange={( nTrees) => this.setState({ nTrees })}
						tooltipPlacement="top"
						min={1}
					/>
					<NumberInput
						legend="# of predictors to check at each split"
						defaultValue={nTry}
						inputStyle={{ float: 'right' }}
						onChange={( nTry ) => this.setState({ nTry })}
						tooltipPlacement="top"
						min={1}
						max={isArray( x ) ? x.length : 1}
					/>
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
					{ type === 'Classification' ? <SelectInput
						legend="Impurity Measure"
						defaultValue={this.state.impurityMeasure}
						options={[ 'gini', 'entropy' ]}
						onChange={( impurityMeasure ) => this.setState({ impurityMeasure })}
					/> : null }
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>
						{this.props.t('calculate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

RandomForestMenu.defaultProps = {
	logAction() {}
};

RandomForestMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default RandomForestMenu;
