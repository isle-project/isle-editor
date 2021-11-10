// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';
import abs from '@stdlib/math/base/special/abs';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import roundn from '@stdlib/math/base/special/roundn';
import Tooltip from '@isle-project/components/tooltip';
import Table from '@isle-project/components/table';
import TeX from '@isle-project/components/tex';
import subtract from '@isle-project/utils/subtract';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import designMatrixMissing from './design_matrix_missing.js';
import designMatrix from './design_matrix.js';
import irls from './logistic_regression.js';


// VARIABLES //

let COUNTER = 0;
const T = 't';


// FUNCTIONS //

const summaryTable = ( x, intercept, result, t ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<Tooltip placement="right" tooltip={t('name-of-predictor')} ><th>{t('predictor')}</th></Tooltip>
					<Tooltip placement="right" tooltip={t('change-in-log')}><th>{t('coefficient')}</th></Tooltip>
					<Tooltip placement="left" tooltip={t('standard-deviation-coefficient')} ><th>{t('std-error')}</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>{t('test-statistic-coefficient-zero')}<TeX displayMode raw="t = \tfrac{\text{Coefficient}}{\text{Std. Error}}" /></span>} ><th>{T}</th></Tooltip>
					<Tooltip placement="left" tooltip={<span>{t('p-value-coefficient-zero')}<TeX displayMode raw="2 \Phi( |t| )" /></span>} ><th>{t('p-value')}</th></Tooltip>
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
* Logistic regression.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} y - outcome variable
* @property {*} success - success category of `y`
* @property {(string|Factor|Array<(string|Factor)>)} x - one or more predictor variables
* @property {Array<string>} quantitative - array of variables in `data` that are `quantitative`
* @property {boolean} omitMissing - controls whether to omit missing values
* @property {boolean} intercept - controls whether to fit a model with an intercept term
* @property {Function} onPredict - callback invoked with a predict function to make predictions for new data
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
		let { x, y, quantitative, intercept, success } = this.props;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const predict = ( data ) => {
			const { matrix, yvalues } = designMatrix( x, y, data, quantitative, intercept, success );
			const probs = this.state.result.predict( matrix );
			const residuals = subtract( probs, yvalues );
			const yhat = probs.map( x => x > this.state.probabilityThreshold );
			return { yhat, probs, residuals };
		};
		this.props.onPredict( predict, COUNTER );
	};

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
						<InputGroup.Text>{t('threshold')}:</InputGroup.Text>
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
	y: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	success: PropTypes.any.isRequired,
	x: PropTypes.oneOfType([
		PropTypes.arrayOf( PropTypes.oneOfType([ PropTypes.string, PropTypes.instanceOf( Factor ) ]) ),
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	quantitative: PropTypes.arrayOf( PropTypes.string ).isRequired,
	omitMissing: PropTypes.bool,
	intercept: PropTypes.bool,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'models' )( withPropCheck( LogisticRegression ) );
