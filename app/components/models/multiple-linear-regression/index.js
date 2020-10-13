// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLR from 'ml-regression-multivariate-linear';
import Button from 'react-bootstrap/Button';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import fCDF from '@stdlib/stats/base/dists/f/cdf';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';
import abs from '@stdlib/math/base/special/abs';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import Table from 'components/table';
import Tooltip from 'components/tooltip';
import Plotly from 'components/plotly';
import { generateQQPlotConfig } from 'components/plots/qqplot';
import subtract from 'utils/subtract';
import mean from 'utils/statistic/mean';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function designMatrix( x, y, data, quantitative, intercept ) {
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

const summaryTable = ( y, x, nobs, result ) => {
	const cdf = tCDF.factory( nobs - x.length - 1 );
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Predictor</th>
					<th>Coefficient</th>
					<th>Std. Error</th>
					<th>t</th>
					<th>p-value</th>
				</tr>
			</thead>
			<tbody>
				{ result.intercept ? <tr>
					<th>Intercept</th>
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


// MAIN //

class MultipleLinearRegression extends Component {
	constructor( props ) {
		super( props );

		let { x, y, intercept, omitMissing, data, quantitative } = props;
		COUNTER += 1;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const dMatrix = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues, nobs } = dMatrix( x, y, data, quantitative, intercept );
		this.result = new MLR( matrix, yvalues, {
			intercept
		});
		const yhat = this.result.predict( matrix ).map( v => v[ 0 ] );
		this.yhat = yhat;
		const avgFitted = mean( yhat );
		let mss = 0;
		for ( let i = 0; i < yhat.length; i++ ) {
			mss += pow( yhat[ i ] - avgFitted, 2 );
		}
		const resid = subtract( yhat, yvalues );
		let rss = 0;
		for ( let i = 0; i < resid.length; i++ ) {
			rss += pow( resid[ i ], 2 );
		}
		const p = predictors.length;
		this.resid = resid;
		this.rSquared = mss / ( mss + rss );
		this.adjRSquared = 1 - ( 1 - this.rSquared ) * ( nobs - 1 ) / ( nobs - p - 1 );
		this.fScore = ( mss / p ) / ( rss / ( nobs - p - 1 ) );
		this.p = p;
		this.nobs = nobs;
		this.predictors = predictors;
	}

	handleDiagnostics = () => {
		const { x, y, intercept } = this.props;
		const qqPlot = {
			variable: 'QQ Plot of Residuals',
			type: 'Chart',
			value: <Plotly
				draggable
				editable fit
				{...generateQQPlotConfig( this.resid, 'residuals' )}
				meta={{ type: 'qqplot of regression residuals', x, y, intercept }}
			/>
		};
		const residualPlot = {
			variable: 'Residuals vs. Fitted',
			type: 'Chart',
			value: <Plotly
				draggable editable fit
				data={[
					{
						x: this.yhat,
						y: this.resid,
						mode: 'markers',
						type: this.yhat.length > 2000 ? 'scattergl' : 'scatter'
					}
				]}
				layout={{
					xaxis: {
						title: 'Fitted Values'
					},
					yaxis: {
						title: 'Residuals'
					},
					title: 'Residuals vs. Fitted'
				}}
				meta={{ type: 'regression residuals vs. fitted', x, y, intercept }}
			/>
		};
		this.props.onDiagnostics([ qqPlot, residualPlot ]);
	}

	handlePredict = () => {
		const { data, quantitative, intercept } = this.props;
		const { matrix } = designMatrix( this.x, this.y, data, quantitative, intercept );
		const yhat = this.result.predict( matrix ).map( v => v[ 0 ] );
		const resid = subtract( yhat, data[ this.y ] );
		this.props.onPredict( yhat, resid, COUNTER );
	}

	render() {
		const { y, predictors, nobs, result, adjRSquared, p, fScore } = this;
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {y} (model id: lm{COUNTER})</span>
				{summaryTable( y, predictors, nobs, result )}
				<p>Residual standard error: {round( result.stdError )}</p>
				<p>R&#178;: {this.rSquared.toFixed( 6 )}, Adjusted R&#178;: {adjRSquared.toFixed( 6 )}</p>
				<p>F-statistic: {this.fScore.toFixed( 3 )} (df: {nobs-p-1}, {p}), p-value: {(1.0 - fCDF( fScore, p, nobs-p-1 )).toFixed( 6 )}</p>
				{ this.props.onPredict ? <Tooltip placement="top" tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={this.props.handlePredict}>Use this model to predict for currently selected data</Button>
				</Tooltip> : null }
				{ this.props.onDiagnostics ? <Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={this.handleDiagnostics} >
					Model Diagnostics
				</Button> : null }
			</div>
		);
	}
}


// PROPERTIES //

MultipleLinearRegression.defaultProps = {
	onDiagnostics: null,
	onPredict: null
};

MultipleLinearRegression.propTypes = {
	onDiagnostics: PropTypes.func,
	onPredict: PropTypes.func
};


// EXPORTS //

export default MultipleLinearRegression;
