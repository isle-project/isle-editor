// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import Table from '@isle-project/components/table';
import multiply from '@isle-project/utils/multiply';
import zScore from '@isle-project/utils/zscore';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import designMatrix from './design_matrix.js';
import LASSO from './lasso.js';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

const summaryTable = ( x, intercept, result, t ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>{t('predictor')}</th>
					<th>{t('coefficient')}</th>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>{t('intercept')}</th>
					<td>{result.beta[ 0 ].toFixed( 6 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.beta[ idx+Number(intercept) ].toFixed( 6 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

const fitModel = ({ x, y, lambda, data, quantitative, intercept }) => {
	try {
		let yvalues = data[ y ];
		yvalues = zScore( yvalues, false, true );
		const { matrix, predictors, categoricalStats, standardized } = designMatrix( x, data, quantitative, intercept );
		const result = new LASSO( matrix, yvalues, lambda );

		// Convert back coefficients to original scale:
		if ( intercept ) {
			let coefSum = 0.0;
			for ( let i = 1; i < result.beta.length; i++ ) {
				const pred = predictors[ i-1 ];
				if ( contains( quantitative, pred ) ) {
					result.beta[ i ] *= yvalues.sigma / standardized[ pred ].sigma;
					coefSum += ( result.beta[ i ] * standardized[ pred ].mu );
				} else {
					result.beta[ i ] *= yvalues.sigma / categoricalStats[ pred ].sigma;
					coefSum += ( result.beta[ i ] * categoricalStats[ pred ].mu );
				}
			}
			result.beta[ 0 ] = yvalues.mu - coefSum;
		} else {
			for ( let i = 0; i < result.beta.length; i++ ) {
				const pred = predictors[ i ];
				if ( contains( quantitative, pred ) ) {
					result.beta[ i ] *= yvalues.sigma / standardized[ pred ].sigma;
				} else {
					result.beta[ i ] *= yvalues.sigma / categoricalStats[ pred ].sigma;
				}
			}
		}
		return {
			predictors,
			result,
			yvalues
		};
	} catch ( _ ) {
		return {};
	}
};


// MAIN //

/**
* LASSO regression.
*
* @property {Object} data - object of value arrays
* @property {string} y - outcome variable
* @property {Array<string>} x - one or more predictor variables
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {number} lambda - regularization parameter
* @property {boolean} intercept - controls whether to fit a model with an intercept term
* @property {Function} onPredict - callback invoked with a predict function to make predictions for new data
*/
class LassoRegression extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const { x, y, lambda, data, quantitative, intercept } = props;
		this.state = {
			...fitModel({ x, y, lambda, data, quantitative, intercept }),
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.x !== prevState.x ||
			nextProps.y !== prevState.y ||
			nextProps.intercept !== prevState.intercept ||
			nextProps.lambda !== prevState.lambda
		) {
			const { x, y, lambda, data, quantitative, intercept } = nextProps;
			return {
				...fitModel({ x, y, lambda, data, quantitative, intercept }),
				...nextProps
			};
		}
		return null;
	}

	handlePredict = () => {
		const predict = ( data ) => {
			const { matrix } = designMatrix( this.props.x, data, this.props.quantitative, this.props.intercept );
			let fitted = this.state.result.predict( matrix );

			// Convert fitted values back to original scale before standardizing:
			fitted = multiply( fitted, this.state.yvalues.sigma );
			const residuals = new Array( fitted.length );
			for ( let i = 0; i < fitted.length; i++ ) {
				residuals[ i ] = data[ this.props.y ][ i ] - fitted[ i ];
			}
			return { fitted, residuals };
		};
		this.props.onPredict( predict, COUNTER );
	};

	render() {
		const { y, intercept, lambda, onPredict, t } = this.props;
		const { result, predictors } = this.state;
		if ( !result ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		if ( !isNumber( lambda ) ) {
			return <Alert variant="danger">{t('lambda-not-number')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('lasso-title', { y, lambda: lambda.toFixed( 4 ), counter: COUNTER })}</span>
				{summaryTable( predictors, intercept, result, t )}
				<p>{result.testKKT() ? t('kkt-satisfied') : t('kkt-not-satisfied')}</p>
				{onPredict ? <Tooltip tooltip={t('use-model-to-predict-tooltip')} >
					<Button variant="secondary" size="sm" onClick={this.handlePredict}>{this.props.t('use-model-to-predict')}</Button>
				</Tooltip> : null}
			</div>
		);
	}
}


// PROPERTIES //

LassoRegression.defaultProps = {
	lambda: 1e-3,
	intercept: true,
	onPredict() {}
};

LassoRegression.propTypes = {
	data: PropTypes.object.isRequired,
	y: PropTypes.string.isRequired,
	x: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf( Factor ) ]) ),
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	lambda: PropTypes.number,
	intercept: PropTypes.bool,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( LassoRegression ) );
