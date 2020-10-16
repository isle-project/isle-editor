// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import Plotly from 'components/plotly';
import Tooltip from 'components/tooltip';
import { RandomForestClassifier } from 'components/models/decision-tree/tree.js';


// VARIABLES //

let COUNTER = 0;


// MAIN //

/**
* Regression and classification trees.
*
* @property {Object} data - object of value arrays
* @property {string} type - currently only `Classification` for categorical responses is supported
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {string} y - outcome variable
* @property {Array<string>} x - one or more predictor variables
* @property {string} impurityMeasure - impurity measure (`gini` or `entropy`)
* @property {number} nTrees - number of trees
* @property {number} nTry - number of predictors to check at each split
* @property {number} scoreThreshold - score threshold for split
* @property {number} maxTreeDepth - maximum tree depth
* @property {number} minItemsCount - minimum # of observations in leaf nodes
* @property {Function} onResult - callback invoked with model object
*/
class RandomForest extends Component {
	constructor( props ) {
		super( props );
		COUNTER += 1;

		const { y, x, type, nTrees, nTry, impurityMeasure, data, quantitative } = props;
		let predictors;
		if ( isArray( x ) ) {
			predictors = x;
		} else {
			predictors = [ x ];
		}
		let forest;
		this.predictors = predictors;
		if ( type === 'Classification' ) {
			this.forest = new RandomForestClassifier({
				response: y,
				predictors,
				data: data,
				quantitative: quantitative,
				criterion: impurityMeasure,
				nTrees,
				nTry,
				scoreThreshold: props.scoreThreshold,
				maxTreeDepth: props.maxTreeDepth,
				minItemsCount: props.minItemsCount
			});
		}
		const importances = [];
		for ( let i = 0; i < predictors.length; i++ ) {
			const attr = predictors[ i ];
			importances.push( forest.importances[ attr ] );
		}
		this.importances = importances;
	}

	handlePredict = () => {
		this.props.onResult( this.forest, COUNTER );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Random Forest for {this.props.y} (model id: forest{COUNTER})</span>
				<p>Created from {this.props.nTrees} trees by checking {this.props.nTry} features at each split.</p>
				<Plotly editable data={[{
					type: 'bar',
					x: this.predictors,
					y: this.importances
				}]} layout={{
					xaxis: {
						title: 'Variable'
					},
					yaxis: {
						title: 'Importance'
					}
				}} />
				{ this.props.onResult ? <Tooltip tooltip="Predictions will be attached to data table">
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={this.handlePredict}>Use this model to predict for currently selected data</Button>
				</Tooltip> : null }
			</div>
		);
	}
}


// PROPERTIES //

RandomForest.defaultProps = {
	type: 'Classification',
	nTrees: 50,
	nTry: 1,
	impurityMeasure: 'gini',
	scoreThreshold: 0.01,
	maxTreeDepth: 20,
	minItemsCount: 50,
	onResult: null
};

RandomForest.propTypes = {
	data: PropTypes.object.isRequired,
	y: PropTypes.string.isRequired,
	x: PropTypes.arrayOf( PropTypes.string ).isRequired,
	type: PropTypes.oneOf([ 'Classification', 'Regression' ]),
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	nTrees: PropTypes.number,
	nTry: PropTypes.number,
	impurityMeasure: PropTypes.oneOf([ 'gini', 'entropy' ]),
	scoreThreshold: PropTypes.number,
	maxTreeDepth: PropTypes.number,
	minItemsCount: PropTypes.number,
	onResult: PropTypes.func
};


// EXPORTS //

export default RandomForest;
