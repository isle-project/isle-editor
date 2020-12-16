// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
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
import Tooltip from '@isle-project/components/tooltip';
import Table from '@isle-project/components/table';
import TeX from '@isle-project/components/tex';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import subtract from '@isle-project/utils/subtract';
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

const summaryTable = ( x, intercept, result, t ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<Tooltip placement="right" tooltip="Name of predictor" ><th>{t('predictor')}</th></Tooltip>
					<Tooltip placement="right" tooltip="Change in log odds associated with unit-increase in respective predictor"><th>{t('coefficient')}</th></Tooltip>
					<Tooltip placement="left" tooltip="Standard deviation of coefficient estimate" ><th>Std. Error</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>Test statistic for hypothesis that coefficient is zero <TeX displayMode raw="t = \tfrac{\text{Coefficient}}{\text{Std. Error}}" /></span>} ><th>t</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>p-value for hypothesis that coefficient is zero <TeX displayMode raw="2 \Phi( |t| )" /></span>} ><th>{t('p-value')}</th></Tooltip>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>{t('intercept')}</th>
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

const fitModel = ({ y, success, x, intercept, omitMissing, data, quantitative }) => {
	try {
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const dMatrix = omitMissing ? designMatrixMissing : designMatrix;
		const { matrix, predictors, yvalues, nobs } = dMatrix( x, y, data, quantitative, intercept, success );
		return {
			result: irls( matrix, yvalues, nobs ),
			predictors: predictors
		};
	} catch ( _ ) {
		return {};
	}
};


// MAIN //

/**
* Multiple linear regression.
*
* @property {Object} data - object of value arrays
* @property {string} y - outcome variable
* @property {*} success - success category of `y`
* @property {Array<string>} x - one or more predictor variables
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {boolean} omitMissing - controls whether to omit missing values
* @property {boolean} intercept - controls whether to fit a model with an intercept term
* @property {Function} onPredict - callback invoked with predictions and residuals after model fitting
*/
class LogisticRegression extends Component {
	constructor( props ) {
		super( props );
		COUNTER += 1;
		let { y, success, x, intercept, omitMissing, data, quantitative } = props;
		const { result, predictors } = fitModel({ y, success, x, intercept, omitMissing, data, quantitative });
		this.state = {
			probabilityThreshold: 0.5,
			result,
			predictors,
			...props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.quantitative !== prevState.quantitative ||
			nextProps.x !== prevState.x ||
			nextProps.y !== prevState.y ||
			nextProps.success !== prevState.success ||
			nextProps.omitMissing !== prevState.omitMissing
		) {
			const { y, success, x, intercept, omitMissing, data, quantitative } = nextProps;
			const newState = {
				...fitModel({ y, success, x, intercept, omitMissing, data, quantitative }),
				...nextProps
			};
			return newState;
		}
		return null;
	}

	handlePredict = () => {
		let { x, y, data, quantitative, intercept, success } = this.props;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const { matrix, yvalues } = designMatrix( x, y, data, quantitative, intercept, success );
		const probs = this.state.result.predict( matrix );
		const resid = subtract( probs, yvalues );
		const yhat = probs.map( x => x > this.state.probabilityThreshold );
		this.props.onPredict( yhat, probs, resid, COUNTER );
	}

	render() {
		const { result } = this.state;
		const { t } = this.props;
		if ( !result ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >{t('logistic-title', { y: this.props.y, counter: COUNTER })}</span>
				{summaryTable( this.state.predictors, this.props.intercept, result, this.props.t )}
				<i>{result.converged ? t('fisher-scoring-converged', { n: result.iterations }) : t('fisher-scoring-not-converged', { n: result.iterations })}</i>
				<p>{t('aic')}: {roundn( result.aic, -3 )}</p>
				{this.props.onPredict ? <ButtonGroup>
					<Tooltip tooltip={t('use-model-to-predict-tooltip-logistic')} >
						<Button variant="secondary" size="sm" onClick={this.handlePredict} >
							{this.props.t('use-model-to-predict')}
						</Button>
					</Tooltip>
					<InputGroup size="sm" >
						<InputGroup.Prepend>
							<InputGroup.Text>{t('threshold')}:</InputGroup.Text>
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
	omitMissing: false,
	intercept: true,
	onPredict: null
};

LogisticRegression.propTypes = {
	data: PropTypes.object.isRequired,
	y: PropTypes.string.isRequired,
	success: PropTypes.any.isRequired,
	x: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.string ),
		PropTypes.string
	]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	omitMissing: PropTypes.bool,
	intercept: PropTypes.bool,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'StatisticalModels' )( LogisticRegression );
