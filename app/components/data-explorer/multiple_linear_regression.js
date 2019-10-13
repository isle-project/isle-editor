// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MLR from 'ml-regression-multivariate-linear';
import uniq from 'uniq';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import abs from '@stdlib/math/base/special/abs';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import fCDF from '@stdlib/stats/base/dists/f/cdf';
import Table from 'react-bootstrap/Table';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_MULTIPLE_REGRESSION } from 'constants/actions.js';
import subtract from 'utils/subtract';
import mean from 'utils/statistic/mean';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'Predict a quantitative response variable using one or more explanatory variables.';


// FUNCTIONS //

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
					<td>{result.weights[ x.length ][ 0 ].toFixed( 3 )}</td>
					<td>{result.stdErrors[ x.length ].toFixed( 3 )}</td>
					<td>{result.tStats[ x.length ].toFixed( 3 )}</td>
					<td>{2.0 * (1.0-cdf( abs( result.tStats[ x.length ] ) ) ).toFixed( 3 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.weights[ idx ][ 0 ].toFixed( 3 )}</td>
							<td>{result.stdErrors[ idx ].toFixed( 3 )}</td>
							<td>{result.tStats[ idx ].toFixed( 3 )}</td>
							<td>{2.0 * (1.0-cdf( abs( result.tStats[ idx ] ) ) ).toFixed( 3 )}</td>
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

	compute = ( y, x, intercept, attach ) => {
		let yvalues = this.props.data[ y ].map( v => [ v ]);
		const n = yvalues.length;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const matrix = [];
		const predictors = [];
		const hash = {};
		for ( let j = 0; j < x.length; j++ ) {
			const values = this.props.data[ x[ j ] ];
			if ( contains( this.props.quantitative, x[ j ] ) ) {
				predictors.push( x[ j ] );
			} else {
				const categories = x[ j ].categories || uniq( values.slice() );
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					predictors.push( `${x[ j ]}_${categories[ k ]}` );
				}
				hash[ x[ j ] ] = categories;
			}
		}
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < x.length; j++ ) {
				const values = this.props.data[ x[ j ] ];
				if ( contains( this.props.quantitative, x[ j ] ) ) {
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
		const result = new MLR( matrix, yvalues, {
			intercept
		});

		const yhat = result.predict( matrix ).map( v => v[ 0 ] );
		const avgFitted = mean( yhat );
		let mss = 0;
		for ( let i = 0; i < yhat.length; i++ ) {
			mss += pow( yhat[ i ] - avgFitted, 2 );
		}
		const resid = subtract( yhat, this.props.data[ y ] );
		let rss = 0;
		for ( let i = 0; i < resid.length; i++ ) {
			rss += pow( resid[ i ], 2 );
		}
		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = x.map( x => x[ 0 ] ).join( '' );
			let name = y+'_pred_lm_' + suffix;
			newData[ name ] = yhat;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = y+'_resid_lm_' + suffix;
			newData[ name ] = resid;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_MULTIPLE_REGRESSION, {
			y, x, intercept
		});
		const p = predictors.length;
		const rSquared = mss / ( mss + rss );
		const adjRSquared = 1 - ( 1 - rSquared ) * ( n - 1 ) / ( n - p - 1 );
		const fScore = ( mss / p ) / ( rss / ( n - p - 1 ) );
		const output = {
			variable: 'Regression Summary',
			type: 'Multiple Linear Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {y}</span>
				{summaryTable( y, predictors, n, result )}
				<p>Residual standard error: {round( result.stdError )}</p>
				<p>R&#178;: {rSquared.toFixed( 6 )}, Adjusted R&#178;: {adjRSquared.toFixed( 6 )}</p>
				<p>F-statistic: {fScore.toFixed( 3 )} (df: {n-p-1}, {p}), p-value: {(1.0 - fCDF( fScore, p, n-p-1 )).toFixed( 6 )}</p>
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
					options={quantitative.concat( categorical )}
					defaultValue={quantitative[ 1 ]}
				/>
				<CheckboxInput
					legend="Include intercept?"
					defaultValue={true}
				/>
				<CheckboxInput
					legend="Attach predictions and residuals to data table?"
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
