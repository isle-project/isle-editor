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
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import { DATA_EXPLORER_RANDOM_FOREST } from 'constants/actions.js';
import subtract from 'utils/subtract';
import QuestionButton from './question_button.js';
import { RandomForestClassifier } from './tree';


// VARIABLES //

const DESCRIPTION = '';


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
			attach: false,
			type: 'Classification',
			nTrees: 500,
			nTry: 1
		};
	}

	compute = () => {
		let { y, x, attach, type, nTrees, nTry } = this.state;

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
				criterion: 'gini',
				nTrees,
				nTry
			});
		} else {

		}

		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = predictors.map( x => x[ 0 ] ).join( '' );
			let name = y+'_pred_forest_' + suffix;
			const yhat = forest.predict( newData );
			newData[ name ] = yhat;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = y+'_resid_forest_' + suffix;
			newData[ name ] = subtract( yhat, this.props.data[ y ] );
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_RANDOM_FOREST, {
			y, x, type, nTrees, nTry, attach
		});
		const output = {
			variable: 'Random Forest',
			type: 'Random Forest',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Random Forest for {y}</span>
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		const { x, y, type, attach, nTrees, nTry } = this.state;
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
						options={[ 'Classification', 'Regression' ]}
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
					<CheckboxInput
						legend="Attach predictions and residuals to data table?"
						defaultValue={attach}
						onChange={( attach ) => this.setState({ attach })}
					/>
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
