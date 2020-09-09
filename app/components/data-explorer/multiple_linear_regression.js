// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLR from 'ml-regression-multivariate-linear';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';
import unique from 'uniq';
import copy from '@stdlib/utils/copy';
import abs from '@stdlib/math/base/special/abs';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import fCDF from '@stdlib/stats/base/dists/f/cdf';
import Button from 'react-bootstrap/Button';
import Table from 'components/table';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Dashboard from 'components/dashboard';
import Tooltip from 'components/tooltip';
import Plotly from 'components/plotly';
import { generateQQPlotConfig } from './qqplot.js';
import { DATA_EXPLORER_MULTIPLE_REGRESSION } from 'constants/actions.js';
import subtract from 'utils/subtract';
import mean from 'utils/statistic/mean';
import extractCategoriesFromValues from './extract_categories_from_values.js';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'Predict a quantitative response variable using one or more explanatory variables.';
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
	const nobs = data[ x[ 0 ] ].length;
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
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		let missing = false;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				if ( isNonMissingNumber( values[ i ] ) ) {
					row.push( values[ i ] );
				} else {
					missing = true;
				}
			} else {
				const val = values[ i ];
				if ( isMissing( val ) ) {
					missing = true;
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
	}

	compute = ( y, x, intercept, omitMissing ) => {
		COUNTER += 1;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const dMatrix = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues, nobs } = dMatrix( x, y, this.props.data, this.props.quantitative, intercept );
		const result = new MLR( matrix, yvalues, {
			intercept
		});
		const yhat = result.predict( matrix ).map( v => v[ 0 ] );
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
		const action = {
			y, x, intercept
		};
		this.props.logAction( DATA_EXPLORER_MULTIPLE_REGRESSION, action );
		const p = predictors.length;
		const rSquared = mss / ( mss + rss );
		const adjRSquared = 1 - ( 1 - rSquared ) * ( nobs - 1 ) / ( nobs - p - 1 );
		const fScore = ( mss / p ) / ( rss / ( nobs - p - 1 ) );
		const output = {
			variable: 'Regression Summary',
			type: 'Multiple Linear Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {y} (model id: lm{COUNTER})</span>
				{summaryTable( y, predictors, nobs, result )}
				<p>Residual standard error: {round( result.stdError )}</p>
				<p>R&#178;: {rSquared.toFixed( 6 )}, Adjusted R&#178;: {adjRSquared.toFixed( 6 )}</p>
				<p>F-statistic: {fScore.toFixed( 3 )} (df: {nobs-p-1}, {p}), p-value: {(1.0 - fCDF( fScore, p, nobs-p-1 )).toFixed( 6 )}</p>
				<Tooltip placement="top" tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={() => {
						const { matrix } = designMatrix( x, this.props.data, this.props.quantitative, intercept );
						const yhat = result.predict( matrix ).map( v => v[ 0 ] );
						const resid = subtract( yhat, this.props.data[ y ] );
						const newData = copy( this.props.data, 1 );
						const newQuantitative = this.props.quantitative.slice();
						let name = 'pred_lm'+COUNTER;
						newData[ name ] = yhat;
						if ( !contains( newQuantitative, name ) ) {
							newQuantitative.push( name );
						}
						name = 'resid_lm'+COUNTER;
						if ( !contains( newQuantitative, name ) ) {
							newQuantitative.push( name );
						}
						newData[ name ] = resid;
						this.props.onGenerate( newQuantitative, newData );
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
				<Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={() => {
					const qqPlot = {
						variable: 'QQ Plot of Residuals',
						type: 'Chart',
						value: <Plotly
							draggable
							editable fit
							{...generateQQPlotConfig( resid, 'residuals' )}
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
									x: yhat,
									y: resid,
									mode: 'markers',
									type: yhat.length > 2000 ? 'scattergl' : 'scatter'
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
					this.props.onCreated([ qqPlot, residualPlot ]);
				}} >
					Model Diagnostics
				</Button>
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		return (
			<Dashboard
				title={<span>Multiple Linear Regression<QuestionButton title="Multiple Linear Regression" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend="Outcome (Y):"
					options={quantitative}
					defaultValue={quantitative[ 0 ]}
				/>
				<SelectInput
					legend="Predictors (X):" multi
					options={unique( quantitative.concat( categorical ) )}
					defaultValue={quantitative[ 1 ]}
					closeMenuOnSelect={false}
				/>
				<CheckboxInput
					legend="Include intercept?"
					defaultValue={true}
				/>
				<CheckboxInput
					legend="Omit missing values"
					defaultValue={false}
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

MultipleLinearRegression.defaultProps = {
	logAction() {}
};

MultipleLinearRegression.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default MultipleLinearRegression;
