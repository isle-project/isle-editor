// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import contains from '@stdlib/assert/contains';
import ndarray from '@stdlib/ndarray/array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isArray from '@stdlib/assert/is-array';
import isnan from '@stdlib/assert/is-nan';
import abs from '@stdlib/math/base/special/abs';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import roundn from '@stdlib/math/base/special/roundn';
import Tooltip from 'components/tooltip';
import Table from 'components/table';
import TeX from 'components/tex';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';
import subtract from 'utils/subtract';
import irls from './logistic_regression.js';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function designMatrix( x, y, data, quantitative, intercept, success ) {
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
	const buffer = new Float64Array( nobs * (predictors.length+1) );
	for ( let i = 0; i < nobs; i++ ) {
		if ( intercept ) {
			buffer[ (predictors.length+1)*i ] = 1;
		}
		let colIndex = 0;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				colIndex += 1;
				buffer[ (predictors.length+1)*i + colIndex ] = values[ i ];
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					colIndex += 1;
					buffer[ (predictors.length+1)*i + colIndex ] = ( val === categories[ k ] ) ? 1 : 0;
				}
			}
		}
	}
	const matrix = ndarray( buffer, {
		shape: [ nobs, predictors.length+1 ]
	});
	const yvalues = data[ y ].map( v => {
		return v === success ? 1 : 0;
	});
	return { matrix, predictors, yvalues, nobs };
}

function designMatrixMissing( x, y, data, quantitative, intercept, success ) {
	const predictors = [];
	const hash = {};
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
	let buffer = [];
	const yvalues = [];
	for ( let i = 0; i < data[ x[ 0 ] ].length; i++ ) {
		let missing = false;
		const row = [];
		if ( intercept ) {
			row.push( 1 );
		}
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
			buffer = buffer.concat( row );
			yvalues.push( data[ y ][ i ] === success ? 1 : 0 );
		}
	}
	const nobs = yvalues.length;
	const matrix = ndarray( buffer, {
		shape: [ nobs, predictors.length+1 ]
	});
	return { matrix, predictors, yvalues, nobs };
}

const summaryTable = ( x, intercept, result ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<Tooltip placement="right" tooltip="Name of predictor" ><th>Predictor</th></Tooltip>
					<Tooltip placement="right" tooltip="Change in log odds associated with unit-increase in respective predictor"><th>Coefficient</th></Tooltip>
					<Tooltip placement="left" tooltip="Standard deviation of coefficient estimate" ><th>Std. Error</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>Test statistic for hypothesis that coefficient is zero <TeX displayMode raw="t = \tfrac{\text{Coefficient}}{\text{Std. Error}}" /></span>} ><th>t</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>p-value for hypothesis that coefficient is zero <TeX displayMode raw="2 \Phi( |t| )" /></span>} ><th>p-value</th></Tooltip>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>Intercept</th>
					<td>{result.coefficients[ 0 ].toFixed( 6 )}</td>
					<td>{result.stdErrors[ 0 ].toFixed( 4 )}</td>
					<td>{( result.coefficients[ 0 ] / result.stdErrors[ 0 ] ).toFixed( 4 )}</td>
					<td>{( 2.0 * pnorm( -abs( result.coefficients[ 0 ] / result.stdErrors[ 0 ] ), 0.0, 1.0 ) ).toFixed( 4 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					idx = idx + Number( intercept );
					const tStat = result.coefficients[ idx ]/ result.stdErrors[ idx ];
					const pVal = 2.0 * pnorm( -abs( tStat ), 0.0, 1.0 );
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.coefficients[ idx ].toFixed( 6 )}</td>
							<td>{result.stdErrors[ idx ].toFixed( 4 )}</td>
							<td>{tStat.toFixed( 4 )}</td>
							<td>{pVal.toFixed( 4 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// MAIN //

class LogisticRegression extends Component {
	constructor( props ) {
		COUNTER += 1;
		let { y, success, x, intercept, omitMissing } = this.props;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const dMatrix = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues, nobs } = dMatrix( x, y, this.props.data, this.props.quantitative, intercept, success );
		this.results = irls( matrix, yvalues, nobs );
		this.predictors = predictors;
		this.state = {
			probabilityThreshold: 0.5
		};
	}

	handlePredict = () => {
		const { x, y, data, quantitative, intercept, success } = this.props;
		const { matrix, yvalues } = designMatrix( x, y, data, quantitative, intercept, success );
		const probs = this.results.predict( matrix );
		const resid = subtract( probs, yvalues );
		const yhat = probs.map( x => x > this.state.probabilityThreshold );
		this.props.onPredict( yhat, probs, resid, COUNTER );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {this.props.y} (model id: logis{COUNTER})</span>
				{summaryTable( this.predictors, this.props.intercept, this.results )}
				<i>The algorithm {this.results.converged ? 'converged' : <Fragment>did <b>not</b> converge</Fragment>} after {this.results.iterations} Fisher Scoring iterations</i>
				<p>Akaike Information Criterion (AIC): {roundn( this.results.aic, -3 )}</p>
				{this.props.onPredict ? <ButtonGroup>
					<Tooltip tooltip="Probabilities, residuals, and predicted categories (using the chosen probability threshold to be exceeded for predicting a success) will be attached to the data table">
						<Button variant="secondary" size="sm" onClick={this.handlePredict} >
							Use this model to predict for currently selected data
						</Button>
					</Tooltip>
					<InputGroup size="sm" >
						<InputGroup.Prepend>
							<InputGroup.Text>Threshold:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="number"
							min={0}
							max={1}
							defaultValue={0.5}
							step={0.01}
							onChange={( event ) => {
								this.setState({
									probabilityThreshold: event.target.value
								});
							}}
						/>
					</InputGroup>
				</ButtonGroup> : null}
			</div>
		);
	}
}


// PROPERTIES //

LogisticRegression.defaultProps = {
	onPredict: null
};

LogisticRegression.propTypes = {
	onPredict: PropTypes.func
};


// EXPORTS //

export default LogisticRegression;
