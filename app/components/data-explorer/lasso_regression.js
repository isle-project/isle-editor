// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import objectKeys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import sqrt from '@stdlib/math/base/special/sqrt';
import Table from 'react-bootstrap/Table';
import TeX from 'components/tex';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_LASSO_REGRESSION } from 'constants/actions.js';
import zScore from 'utils/zscore';
import multiply from 'utils/multiply';
import QuestionButton from './question_button.js';
import LASSO from './lasso';


// VARIABLES //

const DESCRIPTION = <span>Fit a regression model in which non-zero regression coefficients are penalized using the <TeX raw="\lambda" /> regularization parameter. The LASSO performs automatic model selection as it will shrink the regression coefficients of some variables to zero.</span>;


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
					<td>{result.coefficients[ 0 ].toFixed( 6 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.coefficients[ idx+Number(intercept) ].toFixed( 6 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// MAIN //

class LassoRegression extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( y, x, lambda, intercept, attach ) => {
		let yvalues = this.props.data[ y ];
		yvalues = zScore( yvalues, false, true );
		const n = yvalues.length;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const matrix = [];
		const predictors = [];
		const hash = {};
		const standardized = {};
		const categoricalStats = {};
		for ( let j = 0; j < x.length; j++ ) {
			if ( contains( this.props.quantitative, x[ j ] ) ) {
				const values = zScore( this.props.data[ x[ j ] ] );
				standardized[ x[ j ] ] = values;
				predictors.push( x[ j ] );
			} else {
				const values = this.props.data[ x[ j ] ];
				const counts = countBy( values, identity );
				const categories = x[ j ].categories || objectKeys( counts );
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					const label = `${x[ j ]}_${categories[ k ]}`;
					predictors.push( label );
					const p = counts[ categories[ k ] ] / n;
					categoricalStats[ label ] = {
						mu: p,
						sigma: sqrt( p * (1-p) )
					};
				}
				hash[ x[ j ] ] = categories;
			}
		}
		console.log( predictors );
		console.log( categoricalStats );
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			if ( intercept ) {
				row.push( 1 );
			}
			for ( let j = 0; j < x.length; j++ ) {
				if ( contains( this.props.quantitative, x[ j ] ) ) {
					const values = standardized[ x[ j ] ];
					row.push( values[ i ] );
				} else {
					const values = this.props.data[ x[ j ] ];
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
		const result = new LASSO( matrix, yvalues, lambda );

		// Convert back coefficients to original scale:
		if ( intercept ) {
			let coefSum = 0.0;
			for ( let i = 1; i < result.coefficients.length; i++ ) {
				const pred = predictors[ i-1 ];
				if ( contains( this.props.quantitative, pred ) ) {
					result.coefficients[ i ] *= yvalues.sigma / standardized[ pred ].sigma;
					coefSum += ( result.coefficients[ i ] * standardized[ pred ].mu );
				} else {
					result.coefficients[ i ] *= yvalues.sigma / categoricalStats[ pred ].sigma;
					coefSum += ( result.coefficients[ i ] * categoricalStats[ pred ].mu );
				}
			}
			result.coefficients[ 0 ] = yvalues.mu - coefSum;
		} else {
			for ( let i = 0; i < result.coefficients.length; i++ ) {
				const pred = predictors[ i ];
				if ( contains( this.props.quantitative, pred ) ) {
					result.coefficients[ i ] *= yvalues.sigma / standardized[ pred ].sigma;
				} else {
					result.coefficients[ i ] *= yvalues.sigma / categoricalStats[ pred ].sigma;
				}
			}
		}

		if ( attach ) {
			// Convert fitted values and residuals back to original scale before standardizing:
			result.fitted = multiply( result.fitted, yvalues.sigma );
			result.residuals = multiply( result.residuals, -yvalues.sigma );

			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = x.map( x => x[0] ).join( '' );
			let name = y+'_pred_lasso_' + suffix;
			const yhat = result.fitted;
			newData[ name ] = yhat;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = y+'_resid_lasso_' + suffix;
			newData[ name ] = result.residuals;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_LASSO_REGRESSION, {
			y, x, intercept, lambda
		});
		const output = {
			variable: 'Regression Summary',
			type: 'LASSO Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >LASSO Regression for Response {y} (lambda = {lambda})</span>
				{summaryTable( predictors, intercept, result )}
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		return (
			<Dashboard
				title={<span>LASSO Regression<QuestionButton title="LASSO Regression" content={DESCRIPTION} /></span>}
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
				<SliderInput
					legend={<span>L1 Penalty Term <TeX raw="\lambda" /></span>}
					defaultValue={1e-3}
					min={1e-12}
					max={1}
					step="any"
					rangeInputStyle={{ width: 320 }}
					numberInputStyle={{ width: 120 }}
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

LassoRegression.defaultProps = {
	logAction() {}
};

LassoRegression.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default LassoRegression;
