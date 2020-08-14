// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unique from 'uniq';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import objectKeys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import sqrt from '@stdlib/math/base/special/sqrt';
import Button from 'react-bootstrap/Button';
import Table from 'components/table';
import TeX from 'components/tex';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import Tooltip from 'components/tooltip';
import { DATA_EXPLORER_LASSO_REGRESSION } from 'constants/actions.js';
import zScore from 'utils/zscore';
import multiply from 'utils/multiply';
import QuestionButton from './question_button.js';
import LASSO from './lasso';


// VARIABLES //

const DESCRIPTION = <span>Fit a regression model in which non-zero regression coefficients are penalized using the <TeX raw="\lambda" /> regularization parameter. The LASSO performs automatic model selection as it will shrink the regression coefficients of some variables to zero.</span>;
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
	}

	compute = ( y, x, lambda, intercept ) => {
		COUNTER += 1;
		let yvalues = this.props.data[ y ];
		yvalues = zScore( yvalues, false, true );
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const { matrix, predictors, categoricalStats, standardized } = designMatrix( x, this.props.data, this.props.quantitative, intercept );
		const result = new LASSO( matrix, yvalues, lambda );

		// Convert back coefficients to original scale:
		if ( intercept ) {
			let coefSum = 0.0;
			for ( let i = 1; i < result.beta.length; i++ ) {
				const pred = predictors[ i-1 ];
				if ( contains( this.props.quantitative, pred ) ) {
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
				if ( contains( this.props.quantitative, pred ) ) {
					result.beta[ i ] *= yvalues.sigma / standardized[ pred ].sigma;
				} else {
					result.beta[ i ] *= yvalues.sigma / categoricalStats[ pred ].sigma;
				}
			}
		}

		this.props.logAction( DATA_EXPLORER_LASSO_REGRESSION, {
			y, x, intercept, lambda
		});
		const output = {
			variable: 'Regression Summary',
			type: 'LASSO Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >LASSO Regression for Response {y} (model id: lasso{COUNTER}, lambda: {lambda.toFixed( 4 )})</span>
				{summaryTable( predictors, intercept, result )}
				<p>Karush-Khun-Tucker (KKT) conditions for an optimal solution {result.testKKT() ? 'are' : 'are not'} satisfied</p>
				<Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={() => {
						const { matrix } = designMatrix( x, this.props.data, this.props.quantitative, intercept );
						let { fitted, residuals } = result.predict( matrix );
						// Convert fitted values and residuals back to original scale before standardizing:
						fitted = multiply( fitted, yvalues.sigma );
						residuals = multiply( residuals, -yvalues.sigma );
						const newData = copy( this.props.data, 1 );
						const newQuantitative = this.props.quantitative.slice();
						let name = 'pred_lasso' + COUNTER;
						newData[ name ] = fitted;
						if ( !contains( newQuantitative, name ) ) {
							newQuantitative.push( name );
						}
						name = 'resid_lasso' + COUNTER;
						newData[ name ] = residuals;
						if ( !contains( newQuantitative, name ) ) {
							newQuantitative.push( name );
						}
						this.props.onGenerate( newQuantitative, newData );
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
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
					options={unique( quantitative.concat( categorical ) )}
					defaultValue={quantitative[ 1 ]}
					closeMenuOnSelect={false}
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
