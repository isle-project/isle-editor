// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import contains from '@stdlib/assert/contains';
import Table from '@isle-project/components/table';
import exp from '@stdlib/math/base/special/exp';
import Tooltip from '@isle-project/components/tooltip';
import { gaussian } from './naive_bayes.js';
import { designMatrix, designMatrixMissing } from './design_matrix.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

const summaryTable = ( predictors, result, quantitative, t ) => {
	return (
		<div>
			<span className="title">{t('apriori-probs')}:</span>
			<Table bordered size="sm">
				<thead>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
					</tr>
				</thead>
				<tbody>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{exp(result.prior[ x ]).toFixed( 3 )}</th>)}
					</tr>
				</tbody>
			</Table>
			<span className="title">{t('conditionals')}:</span>
			{predictors.map( ( pred, i ) => {
				if ( contains( quantitative, pred ) ) {
					return ( <Table bordered size="sm" key={i} >
						<thead>
							<tr>
								<th>{pred}</th>
								{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>{t('mean')}</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
							<tr>
								<th>{t('sd')}</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.sigma.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
						</tbody>
					</Table> );
				}
				return ( <Table bordered size="sm" key={i} >
					<thead>
						<tr>
							<th>{pred}</th>
							{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>{t('yes')}</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 3 )}</td>;
							})}
						</tr>
						<tr>
							<th>{t('no')}</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{(1-result.mu.get( i, j )).toFixed( 3 )}</td>;
							})}
						</tr>
					</tbody>
				</Table> );
			})}
		</div>
	);
};

const fitModel = ({ x, y, data, quantitative, omitMissing }) => {
	try {
		const designM = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues } = designM( x, y, data, quantitative );
		const result = gaussian( matrix, yvalues );
		return {
			result,
			predictors
		};
	} catch ( error ) {
		return {};
	}
};


// MAIN //

/**
* Naive Bayes assuming that the predictors given the class membership follow a normal distribution.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} y - outcome variable
* @property {(string|Factor|Array<(string|Factor)>)} x - one or more predictor variables
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {boolean} omitMissing - controls whether to omit missing values
* @property {Function} onPredict - callback invoked with predictions and residuals after model fitting
*/
class NaiveBayes extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const { x, y, data, quantitative, omitMissing } = props;
		this.state = {
			...fitModel({ x, y, data, quantitative, omitMissing }),
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.x !== prevState.x ||
			nextProps.y !== prevState.y ||
			nextProps.omitMissing !== prevState.omitMissing
		) {
			const { x, y, data, quantitative, omitMissing } = nextProps;
			return {
				...fitModel({ x, y, data, quantitative, omitMissing }),
				...nextProps
			};
		}
		return null;
	}

	handlePrediction = () => {
		const predict = ( data ) => {
			const result = this.state.result;
			const { matrix } = designMatrix( this.props.x, this.props.y, data, this.props.quantitative );
			const probs = result.predictProbs( matrix );
			const classProbs = {};
			for ( let i = 0; i < result.classes.length; i++ ) {
				const name = 'probs_' + result.classes[ i ] + '_bayes' + COUNTER;
				classProbs[ name ] = probs.map( x => x[ i ] );
			}
			const fitted = result.predict( matrix );
			const name = 'pred_bayes'+ COUNTER;
			const newCategorical = this.props.categorical.slice();
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
			}
			return { fitted, classProbs };
		};
		this.props.onPredict( predict, COUNTER );
	};

	render() {
		const { result, predictors } = this.state;
		const { t } = this.props;
		if ( !result ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('naive-bayes-for-response', { y: this.props.y, counter: COUNTER })}</span>
				{summaryTable( predictors, result, this.props.quantitative, t )}
				{this.props.onPredict ? <Tooltip tooltip={t('use-model-to-predict-tooltip')} >
					<Button variant="secondary" size="sm" onClick={this.handlePrediction} >{t('use-model-to-predict')}</Button>
				</Tooltip> : null}
			</div>
		);
	}
}


// PROPERTIES //

NaiveBayes.defaultProps = {
	omitMissing: false,
	onPredict: null
};

NaiveBayes.propTypes = {
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
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	omitMissing: PropTypes.bool,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( NaiveBayes ) );
