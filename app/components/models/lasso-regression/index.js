// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import objectKeys from '@stdlib/utils/keys';
import sqrt from '@stdlib/math/base/special/sqrt';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';
import Table from 'components/table';
import multiply from 'utils/multiply';
import zScore from 'utils/zscore';
import LASSO from './lasso.js';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

const summaryTable = ( x, intercept, result ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Predictor</th>
					<th>Coefficient</th>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>Intercept</th>
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

function designMatrix( x, data, quantitative, intercept ) {
	const matrix = [];
	const predictors = [];
	const hash = {};
	const standardized = {};
	const categoricalStats = {};
	const nobs = data[ x[ 0 ] ].length;
	for ( let j = 0; j < x.length; j++ ) {
		if ( contains( quantitative, x[ j ] ) ) {
			const values = zScore( data[ x[ j ] ] );
			standardized[ x[ j ] ] = values;
			predictors.push( x[ j ] );
		} else {
			const values = data[ x[ j ] ];
			const counts = countBy( values, identity );
			const categories = x[ j ].categories || objectKeys( counts );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				const label = `${x[ j ]}_${categories[ k ]}`;
				predictors.push( label );
				const p = counts[ categories[ k ] ] / nobs;
				categoricalStats[ label ] = {
					mu: p,
					sigma: sqrt( p * (1-p) )
				};
			}
			hash[ x[ j ] ] = categories;
		}
	}
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		if ( intercept ) {
			row.push( 1 );
		}
		for ( let j = 0; j < x.length; j++ ) {
			if ( contains( quantitative, x[ j ] ) ) {
				const values = standardized[ x[ j ] ];
				row.push( values[ i ] );
			} else {
				const values = data[ x[ j ] ];
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					const { mu, sigma } = categoricalStats[ `${x[ j ]}_${categories[ k ]}` ];
					row.push(
						( val === categories[ k ] ) ?
						( 1 - mu ) / sigma :
						-mu / sigma
					);
				}
			}
		}
		matrix.push( row );
	}
	return { matrix, predictors, categoricalStats, standardized };
}


// MAIN //

class LassoRegression extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const { x, y, lambda, data, quantitative, intercept } = props;
		let yvalues = data[ y ];
		yvalues = zScore( yvalues, false, true );
		if ( !isArray( x ) ) {
			x = [ x ];
		}
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
		this.result = result;
		this.yvalues = yvalues;
	}

	handlePredict = () => {
		const { matrix } = designMatrix( this.props.x, this.props.data, this.props.quantitative, this.props.intercept );
		let { fitted, residuals } = this.result.predict( matrix );

		// Convert fitted values and residuals back to original scale before standardizing:
		fitted = multiply( fitted, this.yvalues.sigma );
		residuals = multiply( residuals, -this.yvalues.sigma );
		this.props.onPredict( fitted, residuals, COUNTER );
	}

	render() {
		const { y, predictors, intercept, lambda, onPredict } = this.props;
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >LASSO Regression for Response {y} (model id: lasso{COUNTER}, lambda: {lambda.toFixed( 4 )})</span>
				{summaryTable( predictors, intercept, this.result )}
				<p>Karush-Khun-Tucker (KKT) conditions for an optimal solution {this.result.testKKT() ? 'are' : 'are not'} satisfied</p>
				{onPredict ? <Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={this.handlePredict}>Use this model to predict for currently selected data</Button>
				</Tooltip> : null}
			</div>
		);
	}
}


// PROPERTIES //

LassoRegression.defaultProps = {
	onPredict: null
};

LassoRegression.propTypes = {
	onPredict: PropTypes.func
};


// EXPORTS //

export default LassoRegression;
