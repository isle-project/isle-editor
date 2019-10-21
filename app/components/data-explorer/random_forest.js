// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import floor from '@stdlib/math/base/special/floor';
import sqrt from '@stdlib/math/base/special/sqrt';
import SelectInput from 'components/input/select';
import Tooltip from 'components/tooltip';
import NumberInput from 'components/input/number';
import { DATA_EXPLORER_RANDOM_FOREST } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import { RandomForestClassifier } from './tree';


// VARIABLES //

const DESCRIPTION = 'Instead of growing a single decision tree, a random forest as an ensemble method constructs many decision trees at once and returns the average of the predictions (regression case) or the majority vote (classification case) of the individual trees';
let COUNTER = 0;


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

class RandomForest extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ],
			type: 'Classification',
			nTrees: 50,
			nTry: 1,
			impurityMeasure: 'gini'
		};
	}

	compute = () => {
		let { y, x, type, nTrees, nTry, impurityMeasure } = this.state;
		COUNTER += 1;

		let predictors;
		if ( isArray( x ) ) {
			predictors = x;
		} else {
			predictors = [ x ];
		}

		let forest;
		if ( type === 'Classification' ) {
			forest = new RandomForestClassifier({
				response: y,
				predictors,
				data: this.props.data,
				quantitative: this.props.quantitative,
				criterion: impurityMeasure,
				nTrees,
				nTry
			});
		}
		this.props.logAction( DATA_EXPLORER_RANDOM_FOREST, {
			y, x, type, nTrees, nTry
		});
		const output = {
			variable: 'Random Forest',
			type: 'Random Forest',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Random Forest for {y} (model id:forest{COUNTER})</span>
				<div></div>
				<Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={() => {
						const newData = copy( this.props.data, 1 );
						if ( type === 'Classification' ) {
							const newCategorical = this.props.categorical.slice();
							const yhat = forest.predict( newData ).map( x => String( x ) );
							let name = 'pred_forest' + COUNTER;
							newData[ name ] = yhat;
							if ( !contains( newCategorical, name ) ) {
								newCategorical.push( name );
							}
							name = 'correct_forest' + COUNTER;
							const yvalues = this.props.data[ y ];
							newData[ name ] = yhat.map( ( x, i ) => x === String( yvalues[ i ] ) ? 'Yes' : 'No' );
							if ( !contains( newCategorical, name ) ) {
								newCategorical.push( name );
							}
							this.props.onGenerate( this.props.quantitative, newCategorical, newData );
						}
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
			</div>
		};
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
					Random Forest<QuestionButton title="Random Forest" content={DESCRIPTION} />
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
						legend="Outcome (Y):"
						options={type === 'Classification' ? categorical : quantitative}
						defaultValue={y}
						onChange={( y ) => this.setState({ y })}
					/>
					<SelectInput
						legend="Predictors (X):" multi
						options={quantitative.concat( categorical )}
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
					{ type === 'Classification' ? <SelectInput
						legend="Impurity Measure"
						defaultValue={this.state.impurityMeasure}
						options={[ 'gini', 'entropy' ]}
						onChange={( impurityMeasure ) => this.setState({ impurityMeasure })}
					/> : null }
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

RandomForest.defaultProps = {
	logAction() {}
};

RandomForest.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default RandomForest;
