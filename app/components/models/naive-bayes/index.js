// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'components/table';
import ndarray from '@stdlib/ndarray/array';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';
import exp from '@stdlib/math/base/special/exp';
import Tooltip from 'components/tooltip';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';
import { gaussian } from './naive_bayes.js';


// VARIABLES //

let COUNTER = 0;


// FUNCTIONS //

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

export function designMatrix( x, y, data, quantitative ) {
	let matrix = [];
	const predictors = [];
	const hash = {};
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const nobs = data[ x[ 0 ] ].length;
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				row.push( values[ i ] );
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = 0; k < categories.length; k++ ) {
					row.push( ( val === categories[ k ] ) ? 1 : 0 );
				}
			}
		}
		matrix.push( row );
	}
	matrix = ndarray( matrix );
	const yvalues = data[ y ];
	return { matrix, predictors, yvalues };
}

function designMatrixMissing( x, y, data, quantitative ) {
	let matrix = [];
	const predictors = [];
	const hash = {};
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const nobs = data[ x[ 0 ] ].length;
	const yvalues = [];
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
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				if ( isMissing( val ) ) {
					missing = true;
				} else {
					for ( let k = 0; k < categories.length; k++ ) {
						row.push( ( val === categories[ k ] ) ? 1 : 0 );
					}
				}
			}
		}
		if ( isMissing( data[ y ][ i ] ) ) {
			missing = true;
		}
		if ( !missing ) {
			matrix.push( row );
			yvalues.push( data[ y ][ i ] );
		}
	}
	matrix = ndarray( matrix );
	return { matrix, predictors, yvalues };
}

const summaryTable = ( predictors, result, quantitative ) => {
	return (
		<div>
			<span className="title">A-priori probabilities:</span>
			<Table bordered size="sm">
				<thead>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
					</tr>
				</thead>
				<tbody>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{exp(result.prior[ x ]).toFixed( 3 )}</th>)}
					</tr>
				</tbody>
			</Table>
			<span className="title">Conditionals:</span>
			{predictors.map( ( pred, i ) => {
				if ( contains( quantitative, pred ) ) {
					return ( <Table bordered size="sm" key={i} >
						<thead>
							<tr>
								<th>{pred}</th>
								{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Mean</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
							<tr>
								<th>SD</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.sigma.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
						</tbody>
					</Table> );
				}
				return ( <Table bordered size="sm" key={i} >
					<thead>
						<tr>
							<th>{pred}</th>
							{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Yes</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 3 )}</td>;
							})}
						</tr>
						<tr>
							<th>No</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{(1-result.mu.get( i, j )).toFixed( 3 )}</td>;
							})}
						</tr>
					</tbody>
				</Table> );
			})}
		</div>
	);
};


// MAIN //

class NaiveBayes extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const designM = props.omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues } = designM( props.x, props.y, props.data, props.quantitative );
		this.results = gaussian( matrix, yvalues );
		this.predictors = predictors;
	}

	handlePrediction = () => {
		this.props.onPredict( this.results, COUNTER );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Naive Bayes for Response {this.props.y} (model id: bayes{COUNTER})</span>
				{summaryTable( this.predictors, this.results, this.props.quantitative )}
				{this.props.onPredict ? <Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={this.handlePrediction} >Use this model to predict for currently selected data</Button>
				</Tooltip> : null}
			</div>
		);
	}
}


// PROPERTIES //

NaiveBayes.defaultProps = {
	onPredict: null
};

NaiveBayes.propTypes = {
	onPredict: PropTypes.func
};


// EXPORTS //

export default NaiveBayes;
