// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import Table from 'react-bootstrap/Table';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import { DATA_EXPLORER_LASSO_REGRESSION } from 'constants/actions.js';
import zScore from 'utils/zscore';
import multiply from 'utils/multiply';
import QuestionButton from './question_button.js';
import LASSO from './lasso';


// VARIABLES //

const DESCRIPTION = '';


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
		for ( let j = 0; j < x.length; j++ ) {
			const values = zScore( this.props.data[ x[ j ] ] );
			standardized[ x[ j ] ] = values;
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
			if ( intercept ) {
				row.push( 1 );
			}
			for ( let j = 0; j < x.length; j++ ) {
				const values = standardized[ x[ j ] ];
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
		const result = new LASSO( matrix, yvalues, lambda );

		// Convert back coefficients to original scale:
		if ( intercept ) {
			let coefSum = 0.0;
			for ( let i = 1; i < result.coefficients.length; i++ ) {
				result.coefficients[ i ] *= yvalues.sigma / standardized[ x[ i-1 ] ].sigma;
				coefSum += ( result.coefficients[ i ] * standardized[ x[ i-1 ] ].mu );
			}
			result.coefficients[ 0 ] = yvalues.mu - coefSum;
		} else {
			for ( let i = 0; i < result.coefficients.length; i++ ) {
				result.coefficients[ i ] *= yvalues.sigma / standardized[ x[ i ] ].sigma;
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
				{summaryTable( x, intercept, result )}
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
				<NumberInput
					legend="L1 Penalty Term (Lambda)"
					defaultValue={1}
					min={1e-12}
					step="any"
					width={120}
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
