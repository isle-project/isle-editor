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
		this.props.onPredict( this.forest, COUNTER );
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
				<Tooltip tooltip="Predictions will be attached to data table">
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={this.handlePredict}>Use this model to predict for currently selected data</Button>
				</Tooltip>
			</div>
		);
	}
}


// PROPERTIES //

RandomForest.defaultProps = {
	onPredict: null
};

RandomForest.propTypes = {
	onPredict: PropTypes.func
};


// EXPORTS //

export default RandomForest;
