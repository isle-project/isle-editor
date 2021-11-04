// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import Plotly from '@isle-project/components/plotly';
import Tooltip from '@isle-project/components/tooltip';
import { RandomForestClassifier } from '@isle-project/components/models/decision-tree/tree.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

const fitModel = ({ y, x, type, nTrees, nTry, impurityMeasure, data, quantitative, scoreThreshold, maxTreeDepth, minItemsCount }) => {
	try {
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
				data: data,
				quantitative: quantitative,
				criterion: impurityMeasure,
				nTrees,
				nTry,
				scoreThreshold,
				maxTreeDepth,
				minItemsCount
			});
		}
		const importances = [];
		for ( let i = 0; i < predictors.length; i++ ) {
			const attr = predictors[ i ];
			importances.push( forest.importances[ attr ] );
		}
		return {
			forest,
			predictors,
			importances
		};
	} catch ( _ ) {
		return {};
	}
};


// MAIN //

/**
* Random Forests.
*
* @property {Object} data - object of value arrays
* @property {string} type - currently only `Classification` for categorical responses is supported
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {(string|Factor)} y - outcome variable
* @property {(string|Factor|Array<(string|Factor)>)} x - one or more predictor variables
* @property {string} impurityMeasure - impurity measure (`gini` or `entropy`)
* @property {number} nTrees - number of trees
* @property {number} nTry - number of predictors to check at each split
* @property {number} scoreThreshold - score threshold for split
* @property {number} maxTreeDepth - maximum tree depth
* @property {number} minItemsCount - minimum # of observations in leaf nodes
* @property {Function} onPredict - callback invoked with model object when clicking on the predict button
*/
class RandomForest extends Component {
	constructor( props ) {
		super( props );
		COUNTER += 1;

		const { y, x, type, nTrees, nTry, impurityMeasure, data, quantitative, scoreThreshold, maxTreeDepth, minItemsCount } = props;
		this.state = {
			...fitModel({ y, x, type, nTrees, nTry, impurityMeasure, data, quantitative, scoreThreshold, maxTreeDepth, minItemsCount }),
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.y !== prevState.y ||
			nextProps.x !== prevState.x ||
			nextProps.type !== prevState.type ||
			nextProps.nTrees !== prevState.nTrees ||
			nextProps.nTry !== prevState.nTry ||
			nextProps.impurityMeasure !== prevState.impurityMeasure ||
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.scoreThreshold !== prevState.scoreThreshold ||
			nextProps.maxTreeDepth !== prevState.maxTreeDepth ||
			nextProps.minItemsCount !== prevState.minItemsCount
		) {
			const { y, x, type, nTrees, nTry, impurityMeasure, data, quantitative, scoreThreshold, maxTreeDepth, minItemsCount } = nextProps;
			return {
				...fitModel({ y, x, type, nTrees, nTry, impurityMeasure, data, quantitative, scoreThreshold, maxTreeDepth, minItemsCount }),
				...nextProps
			};
		}
		return null;
	}

	handlePredict = () => {
		this.props.onPredict( this.state.forest, COUNTER );
	};

	render() {
		const { forest } = this.state;
		const { t } = this.props;
		if ( !forest ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('random-forest-for', { y: this.props.y, counter: COUNTER })}</span>
				<p>{t('created-from-trees', { nTrees: this.props.nTrees, nTry: this.props.nTry })}</p>
				<Plotly editable data={[{
					type: 'bar',
					x: this.state.predictors,
					y: this.state.importances
				}]} layout={{
					xaxis: {
						title: t('variable')
					},
					yaxis: {
						title: t('importance')
					}
				}} />
				{ this.props.onPredict ? <Tooltip tooltip={t('predictions-attached')} >
					<Button variant="secondary" size="sm" style={{ marginTop: 10 }} onClick={this.handlePredict}>{this.props.t('use-model-to-predict')}</Button>
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
	onPredict: null
};

RandomForest.propTypes = {
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
	type: PropTypes.oneOf([ 'Classification', 'Regression' ]),
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	nTrees: PropTypes.number,
	nTry: PropTypes.number,
	impurityMeasure: PropTypes.oneOf([ 'gini', 'entropy' ]),
	scoreThreshold: PropTypes.number,
	maxTreeDepth: PropTypes.number,
	minItemsCount: PropTypes.number,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( RandomForest ) );
