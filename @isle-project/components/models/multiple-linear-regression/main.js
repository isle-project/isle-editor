// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import MLR from 'ml-regression-multivariate-linear';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import fCDF from '@stdlib/stats/base/dists/f/cdf';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import abs from '@stdlib/math/base/special/abs';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import Table from '@isle-project/components/table';
import Tooltip from '@isle-project/components/tooltip';
import Plotly from '@isle-project/components/plotly';
import Histogram from '@isle-project/components/plots/histogram';
import { generateQQPlotConfig } from '@isle-project/components/plots/qqplot';
import subtract from '@isle-project/utils/subtract';
import mean from '@isle-project/utils/statistic/mean';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import isMissing from '@isle-project/utils/is-missing';


// VARIABLES //

let COUNTER = 0;
const TSTAT = 't';
const DF = 'df';
const R2 = 'R²:';


// FUNCTIONS //

function designMatrix( x, y, data, quantitative, intercept ) {
	if ( !isArray( x ) ) {
		x = [ x ];
	}
	const matrix = [];
	const predictors = [];
	const hash = {};
	const nobs = data[ x[ 0 ] ].length;
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				row.push( values[ i ] );
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					row.push( ( val === categories[ k ] ) ? 1 : 0 );
				}
			}
		}
		matrix.push( row );
	}
	const yvalues = data[ y ].map( x => [ x ]);
	return { matrix, predictors, yvalues, nobs };
}

function designMatrixMissing( x, y, data, quantitative, intercept ) {
	if ( !isArray( x ) ) {
		x = [ x ];
	}
	const matrix = [];
	const predictors = [];
	const hash = {};
	const yvalues = [];
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	for ( let i = 0; i < data[ x[ 0 ] ].length; i++ ) {
		const row = [];
		let missing = false;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				if ( isNonMissingNumber( values[ i ] ) ) {
					row.push( values[ i ] );
				} else {
					missing = true;
					break;
				}
			} else {
				const val = values[ i ];
				if ( isMissing( val ) ) {
					missing = true;
					break;
				} else {
					const categories = hash[ x[ j ] ];
					for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
						row.push( ( val === categories[ k ] ) ? 1 : 0 );
					}
				}
			}
		}
		if ( !missing ) {
			matrix.push( row );
			yvalues.push( [ data[ y ][ i ] ] );
		}
	}
	const nobs = yvalues.length;
	return { matrix, predictors, yvalues, nobs };
}

const summaryTable = ( y, x, nobs, result, t ) => {
	const cdf = tCDF.factory( nobs - x.length - 1 );
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>{t('predictor')}</th>
					<th>{t('coefficient')}</th>
					<th>{t('std-error')}</th>
					<th>{TSTAT}</th>
					<th>{t('p-value')}</th>
				</tr>
			</thead>
			<tbody>
				{ result.intercept ? <tr>
					<th>{t('intercept')}</th>
					<td>{result.weights[ x.length ][ 0 ].toFixed( 6 )}</td>
					<td>{result.stdErrors[ x.length ].toFixed( 4 )}</td>
					<td>{result.tStats[ x.length ].toFixed( 4 )}</td>
					<td>{2.0 * (1.0-cdf( abs( result.tStats[ x.length ] ) ) ).toFixed( 4 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.weights[ idx ][ 0 ].toFixed( 6 )}</td>
							<td>{result.stdErrors[ idx ].toFixed( 4 )}</td>
							<td>{result.tStats[ idx ].toFixed( 4 )}</td>
							<td>{2.0 * (1.0-cdf( abs( result.tStats[ idx ] ) ) ).toFixed( 4 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

const fitModel = ({ x, y, intercept, omitMissing, data, quantitative }) => {
	const out = {};
	try {
		const dMatrix = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues, nobs } = dMatrix( x, y, data, quantitative, intercept );
		out.result = new MLR( matrix, yvalues, {
			intercept
		});
		const yhat = out.result.predict( matrix ).map( v => v[ 0 ] );
		out.yhat = yhat;
		const avgFitted = mean( yhat );
		let mss = 0;
		for ( let i = 0; i < yhat.length; i++ ) {
			mss += pow( yhat[ i ] - avgFitted, 2 );
		}
		const resid = subtract( yvalues, yhat );
		let rss = 0;
		for ( let i = 0; i < resid.length; i++ ) {
			rss += pow( resid[ i ], 2 );
		}
		const p = predictors.length;
		out.resid = resid;
		out.rSquared = mss / ( mss + rss );
		out.adjRSquared = 1 - ( 1 - out.rSquared ) * ( nobs - 1 ) / ( nobs - p - 1 );
		out.fScore = ( mss / p ) / ( rss / ( nobs - p - 1 ) );
		out.p = p;
		out.nobs = nobs;
		out.predictors = predictors;
		return out;
	} catch ( _ ) {
		return out;
	}
};


// MAIN //

/**
* Multiple linear regression.
*
* @property {Object} data - object of value arrays
* @property {string} y - outcome variable
* @property {Array<string>} x - one or more predictor variables
* @property {(string|Factor|Array<(string|Factor)>)} quantitative - array of variables in `data` that are `quantitative`
* @property {boolean} omitMissing - controls whether to omit missing values
* @property {boolean} intercept - controls whether to fit a model with an intercept term
* @property {Function} onDiagnostics - callback invoked with diagnostic plots
* @property {Function} onPredict - callback invoked with a predict function to make predictions for new data
*/
class MultipleLinearRegression extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const { x, y, intercept, omitMissing, data, quantitative } = props;
		this.state = {
			...fitModel({ x, y, intercept, omitMissing, data, quantitative }),
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.x !== prevState.x ||
			nextProps.y !== prevState.y ||
			nextProps.omitMissing !== prevState.omitMissing ||
			nextProps.intercept !== prevState.intercept
		) {
			const { x, y, intercept, omitMissing, data, quantitative } = nextProps;
			const newState = {
				...fitModel({ x, y, intercept, omitMissing, data, quantitative }),
				...nextProps
			};
			return newState;
		}
		return null;
	}

	handleDiagnostics = () => {
		const { x, y, intercept, t } = this.props;
		const qqPlot = <Plotly
			draggable
			editable fit
			{...generateQQPlotConfig( this.state.resid, 'residuals' )}
			meta={{ type: 'qqplot of regression residuals', x, y, intercept }}
		/>;
		const hist = <Histogram
			data={{ 'Residuals': this.state.resid }}
			variable="Residuals"
			title={t('plotly:histogram-title', { x: 'Residuals' })}
		/>;
		const residualPlot = <Plotly
			draggable editable fit
			data={[
				{
					x: this.state.yhat,
					y: this.state.resid,
					mode: 'markers',
					type: this.state.yhat.length > 2000 ? 'scattergl' : 'scatter'
				}
			]}
			layout={{
				xaxis: {
					title: t('fitted-values')
				},
				yaxis: {
					title: t('residuals')
				},
				title: t('residuals-vs-fitted')
			}}
			meta={{ type: 'regression residuals vs. fitted', x, y, intercept }}
		/>;
		this.props.onDiagnostics([ qqPlot, hist, residualPlot ]);
	};

	handlePredict = () => {
		const { quantitative, intercept } = this.props;
		const predict = ( data ) => {
			const { x, y } = this.props;
			const { matrix } = designMatrix( x, y, data, quantitative, intercept );
			const fitted = this.state.result.predict( matrix ).map( v => v[ 0 ] );
			const residuals = subtract( data[ y ], fitted );
			return { fitted, residuals };
		};
		this.props.onPredict( predict, COUNTER );
	};

	render() {
		const { y, predictors, nobs, result, adjRSquared, p, fScore, rSquared } = this.state;
		const { t } = this.props;
		if ( !result ) {
			return <Alert variant="danger">{this.props.t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('multiple-regression-title', { y, counter: COUNTER })}</span>
				{summaryTable( y, predictors, nobs, result, t )}
				<p>{t('residual-standard-error')}: {round( result.stdError )}</p>
				<p>{R2} {rSquared.toFixed( 6 )}, {t('adjusted')} {R2} {adjRSquared.toFixed( 6 )}</p>
				<p>{t('f-statistic')}: {fScore.toFixed( 3 )} (${DF}: {nobs-p-1}, {p}), {t('p-value')}: {(1.0 - fCDF( fScore, p, nobs-p-1 )).toFixed( 6 )}</p>
				{ this.props.onPredict ? <Tooltip placement="top" tooltip={t('use-model-to-predict-tooltip')} >
					<Button variant="secondary" size="sm" onClick={this.handlePredict}>{t('use-model-to-predict')}</Button>
				</Tooltip> : null }
				{ this.props.onDiagnostics ? <Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={this.handleDiagnostics} >
					{t('model-diagnostics')}
				</Button> : null }
			</div>
		);
	}
}


// PROPERTIES //

MultipleLinearRegression.defaultProps = {
	omitMissing: false,
	intercept: true,
	onDiagnostics: null,
	onPredict: null
};

MultipleLinearRegression.propTypes = {
	data: PropTypes.object.isRequired,
	y: PropTypes.string.isRequired,
	x: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf( Factor ) ]) ),
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	omitMissing: PropTypes.bool,
	intercept: PropTypes.bool,
	onDiagnostics: PropTypes.func,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( [ 'models', 'plotly' ] )( withPropCheck( MultipleLinearRegression ) );
