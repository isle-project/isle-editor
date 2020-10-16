// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import Tooltip from 'components/tooltip';
import { RegressionTree, ClassificationTree, TreePlot } from './tree.js';


// VARIABLES //

let COUNTER = 0;


// MAIN //

/**
* Regression and classification trees.
*
* @property {Object} data - object of value arrays
* @property {string} type - `Classification` for categorical or `Regression` for quantitative outcomes
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {string} y - outcome variable
* @property {Array<string>} x - one or more predictor variables
* @property {string} impurityMeasure - impurity measure (`gini` or `entropy`)
* @property {number} scoreThreshold - score threshold for split
* @property {number} maxTreeDepth - maximum tree depth
* @property {number} minItemsCount - minimum # of observations in leaf nodes
*/
class DecisionTree extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		let predictors;
		if ( isArray( props.x ) ) {
			predictors = props.x;
		} else {
			predictors = [ props.x ];
		}
		let tree;
		if ( props.type === 'Classification' ) {
			tree = new ClassificationTree({
				response: props.y,
				predictors,
				data: props.data,
				quantitative: props.quantitative,
				criterion: props.impurityMeasure,
				scoreThreshold: props.scoreThreshold,
				maxTreeDepth: props.maxTreeDepth,
				minItemsCount: props.minItemsCount
			});
		} else {
			tree = new RegressionTree({
				response: props.y,
				predictors,
				data: props.data,
				quantitative: props.quantitative,
				scoreThreshold: props.scoreThreshold,
				maxTreeDepth: props.maxTreeDepth,
				minItemsCount: props.minItemsCount
			});
		}
		this.tree = tree;
	}

	handlePredict = () => {
		this.props.onPredict( this.tree, COUNTER );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Decision Tree for {this.props.y} (model id: tree{COUNTER})</span>
				<TreePlot tree={this.tree.root} />
				{this.props.onPredict ? <Tooltip tooltip="Predictions will be attached to data table">
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={this.handlePredict}>Use this model to predict for currently selected data</Button>
				</Tooltip> : null}
			</div>
		);
	}
}


// PROPERTIES //

DecisionTree.defaultProps = {
	impurityMeasure: 'gini',
	scoreThreshold: 0.0075,
	maxTreeDepth: 5,
	minItemsCount: 50,
	onPredict: null
};

DecisionTree.propTypes = {
	data: PropTypes.object.isRequired,
	y: PropTypes.string.isRequired,
	x: PropTypes.arrayOf( PropTypes.string ).isRequired,
	type: PropTypes.oneOf([ 'Classification', 'Regression' ]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	impurityMeasure: PropTypes.oneOf([ 'gini', 'entropy' ]),
	scoreThreshold: PropTypes.number,
	maxTreeDepth: PropTypes.number,
	minItemsCount: PropTypes.number,
	onPredict: PropTypes.func
};


// EXPORTS //

export default DecisionTree;
