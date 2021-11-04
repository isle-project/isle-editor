// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import Tooltip from '@isle-project/components/tooltip';
import { RegressionTree, ClassificationTree, TreePlot } from './tree.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

const fitModel = ({ x, y, data, type, quantitative, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount }) => {
	let predictors;
	if ( isArray( x ) ) {
		predictors = x;
	} else {
		predictors = [ x ];
	}
	try {
		let tree;
		if ( type === 'Classification' ) {
			tree = new ClassificationTree({
				response: y,
				predictors,
				data: data,
				quantitative: quantitative,
				criterion: impurityMeasure,
				scoreThreshold: scoreThreshold,
				maxTreeDepth: maxTreeDepth,
				minItemsCount: minItemsCount
			});
		} else {
			tree = new RegressionTree({
				response: y,
				predictors,
				data: data,
				quantitative: quantitative,
				scoreThreshold: scoreThreshold,
				maxTreeDepth: maxTreeDepth,
				minItemsCount: minItemsCount
			});
		}
		return tree;
	} catch ( _ ) {
		return null;
	}
};


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
* @property {Function} onPredict - callback invoked with model object when clicking on the predict button
*/
class DecisionTree extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;

		const { x, y, data, type, quantitative, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount } = this.props;
		this.state = {
			tree: fitModel({ x, y, data, type, quantitative, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount }),
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.y !== prevState.y ||
			nextProps.x !== prevState.x ||
			nextProps.type !== prevState.type ||
			nextProps.impurityMeasure !== prevState.impurityMeasure ||
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.scoreThreshold !== prevState.scoreThreshold ||
			nextProps.maxTreeDepth !== prevState.maxTreeDepth ||
			nextProps.minItemsCount !== prevState.minItemsCount
		) {
			const { x, y, data, type, quantitative, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount } = nextProps;
			return {
				tree: fitModel({ x, y, data, type, quantitative, impurityMeasure, scoreThreshold, maxTreeDepth, minItemsCount }),
				...nextProps
			};
		}
		return null;
	}

	handlePredict = () => {
		this.props.onPredict( this.state.tree, COUNTER );
	};

	render() {
		const { tree } = this.state;
		const { t } = this.props;
		if ( !tree ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('decision-tree-for', { y: this.props.y, counter: COUNTER })}</span>
				<TreePlot tree={tree.root} />
				{this.props.onPredict ? <Tooltip tooltip={t('predictions-attached')} >
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={this.handlePredict}>{this.props.t('use-model-to-predict')}</Button>
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
	y: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	x: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf( Factor ) ]) ),
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	type: PropTypes.oneOf([ 'Classification', 'Regression' ]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	impurityMeasure: PropTypes.oneOf([ 'gini', 'entropy' ]),
	scoreThreshold: PropTypes.number,
	maxTreeDepth: PropTypes.number,
	minItemsCount: PropTypes.number,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( DecisionTree ) );
