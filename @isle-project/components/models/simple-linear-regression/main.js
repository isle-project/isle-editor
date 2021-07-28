// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Table from '@isle-project/components/table';
import Tooltip from '@isle-project/components/tooltip';
import objectValues from '@stdlib/utils/values';
import mapValues from '@stdlib/utils/map-values';
import incrsumabs2 from '@stdlib/stats/incr/sumabs2';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import mean from '@isle-project/utils/statistic/mean';
import Plotly from '@isle-project/components/plotly';
import { generateQQPlotConfig } from '@isle-project/components/plots/qqplot';
import by2 from '@isle-project/utils/by2';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import isMissing from '@isle-project/utils/is-missing';


// VARIABLES //

let COUNTER = 0;
const T = 't';


// FUNCTIONS //

function calculateCoefficients( x, y ) {
	const xmu = mean( x );
	const ymu = mean( y );
	let C1 = 0;
	let C2 = 0;
	const len = x.length;
	for ( let i = 0; i < len; i++ ) {
		let xdelta = x[ i ] - xmu;
		let ydelta = y[ i ] - ymu;
		C1 += xdelta * xdelta;
		C2 += xdelta * ydelta;
	}
	const slope = C2 / C1;
	const yint = ymu - slope*xmu;
	return { yint, slope, xg: x, yg: y };
}

function extractValues({ x, y, data, group, omitMissing }) {
	const xd = data[ x ];
	const yd = data[ y ];
	const groups = data[ group ];
	if ( omitMissing ) {
		const xvals = [];
		const yvals = [];
		const groupvals = [];
		if ( groups ) {
			for ( let i = 0; i < xd.length; i++ ) {
				if (
					!isMissing( groups[ i ] ) &&
					isNonMissingNumber( xd[ i ] ) &&
					isNonMissingNumber( yd[ i ] )
				) {
					xvals.push( xd[ i ] );
					yvals.push( yd[ i ] );
					groupvals.push( groups[ i ] );
				}
			}
		} else {
			for ( let i = 0; i < xd.length; i++ ) {
				if (
					isNonMissingNumber( xd[ i ] ) &&
					isNonMissingNumber( yd[ i ] )
				) {
					xvals.push( xd[ i ] );
					yvals.push( yd[ i ] );
				}
			}
		}
		return {
			xd: xvals,
			yd: yvals,
			groups: groupvals
		};
	}
	return {
		xd: xd,
		yd: yd,
		groups: groups
	};
}


// MAIN //

/**
* Simple linear regression.
*
* @property {Object} data - object of value arrays
* @property {string} x - explanatory variable
* @property {string} y - response variable
* @property {(string|Factor)} group - grouping variable
* @property {boolean} omitMissing - controls whether to omit missing values in model fitting
* @property {Function} onDiagnostics - callback invoked with diagnostic plots
* @property {Function} onPredict - callback invoked with a predict function to make predictions for new data
*/
class SimpleLinearRegression extends Component {
	constructor( props ) {
		super( props );

		COUNTER += 1;
		const { x, y, data, group, omitMissing } = props;
		this.state = extractValues({ x, y, data, group, omitMissing });
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.x !== prevState.x ||
			nextProps.y !== prevState.y ||
			nextProps.group !== prevState.group ||
			nextProps.omitMissing !== prevState.omitMissing
		) {
			const { x, y, intercept, omitMissing, data, group } = nextProps;
			return extractValues({ x, y, intercept, omitMissing, data, group } );
		}
		return null;
	}

	render() {
		const { xd, yd, groups } = this.state;
		const { x, y, group, data, t } = this.props;
		let output;
		try {
			if ( group ) {
				const xmeans = by( xd, groups, mean );
				const res = by2( xd, yd, groups, calculateCoefficients );
				output = <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>{t('regression-y-on-x', { x, y })}</label>
					<p>
						<i>{t('grouped-by')} {group}:</i>
					</p>
					{objectValues( mapValues( res, ( elem, key ) => {
						const { yint, slope, xg, yg } = elem;
						const resAcc = incrsumabs2();
						const x2Acc = incrsumabs2();
						const x2mmAcc = incrsumabs2();
						const cdf = tCDF.factory( yg.length - 2 );
						for ( let i = 0; i < yg.length; i++ ) {
							const pred = yint + slope * xg[ i ];
							resAcc( pred - yg[ i ] );
							x2Acc( xg[ i ] );
							x2mmAcc( xg[ i ] - xmeans[ key ] );
						}
						const sigma2 = resAcc() / ( yg.length - 2 );
						const slopeVar = sigma2 / x2mmAcc();
						const slopeSE = sqrt( slopeVar );
						const interceptVar = ( (1/yg.length) * sigma2 * x2Acc() ) / x2mmAcc();
						const interceptSE = sqrt( interceptVar );
						const tSlope = slope / slopeSE;
						const tIntercept = yint / interceptSE;
						return (
							<div key={`group-${key}`} >
								<label>{key}:</label>
								<Table bordered size="sm" >
									<thead>
										<tr>
											<th>{t('variable')}</th>
											<th>{t('coefficient')}</th>
											<th>{t('std-error')}</th>
											<th>{T}</th>
											<th>{t('p-value')}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{t('intercept')}</td>
											<td>{yint.toFixed( 4 )}</td>
											<td>{interceptSE.toFixed( 4 )}</td>
											<td>{tIntercept.toFixed( 4 )}</td>
											<td>{2.0 * (1.0-cdf( abs( tIntercept ) ) ).toFixed( 4 )}</td>
										</tr>
										<tr>
											<td>{x}</td>
											<td>{slope.toFixed( 4 )}</td>
											<td>{slopeSE.toFixed( 4 )}</td>
											<td>{tSlope.toFixed( 4 )}</td>
											<td>{2.0 * (1.0-cdf( abs( tSlope ) ) ).toFixed( 4 )}</td>
										</tr>
									</tbody>
								</Table>
							</div>
						);
					}) )}
					{ this.props.onPredict ? <Tooltip tooltip={t('use-model-to-predict-tooltip')} >
						<Button variant="secondary" size="sm" onClick={() => {
							const predict = ( data ) => {
								const xd = data[ x ];
								const yd = data[ y ];
								const fitted = new Float64Array( yd.length );
								const residuals = new Float64Array( yd.length );
								const groups = data[ group ];
								for ( let i = 0; i < fitted.length; i++ ) {
									const { yint, slope } = res[ groups[ i ] ];
									fitted[ i ] = yint + slope * xd[ i ];
									residuals[ i ] = yd[ i ] - fitted[ i ];
								}
								return { fitted, residuals };
							};
							this.props.onPredict( predict, COUNTER );
						}}>{this.props.t('use-model-to-predict')}</Button>
					</Tooltip> : null }
					{ this.props.onDiagnostics ? <Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={() => {
						const xd = data[ x ];
						const yd = data[ y ];
						const fitted = new Float64Array( yd.length );
						const residuals = new Float64Array( yd.length );
						const groups = data[ group ];
						for ( let i = 0; i < fitted.length; i++ ) {
							const { yint, slope } = res[ groups[ i ] ];
							fitted[ i ] = yint + slope * xd[ i ];
							residuals[ i ] = yd[ i ] - fitted[ i ];
						}
						const qqPlot = <Plotly
							draggable
							editable fit
							{...generateQQPlotConfig( residuals, 'residuals' )}
							meta={{ type: 'qqplot of regression residuals', x: xd, y: yd }}
						/>;
						const residualPlot = <Plotly
							draggable editable fit
							data={[
								{
									x: fitted,
									y: residuals,
									mode: 'markers'
								}
							]}
							layout={{
								xaxis: {
									title: t('fitted-values')
								},
								yaxis: {
									title: t('residuals')
								},
								title: t('residuals-vs-fitted')
							}}
							meta={{ type: 'regression residuals vs. fitted', x: xd, y: yd }}
						/>;
						this.props.onDiagnostics([ qqPlot, residualPlot ]);
					}} >
						{t('model-diagnostics')}
					</Button> : null }
				</div>;
			}
			else {
				const { yint, slope } = calculateCoefficients( xd, yd );
				const resAcc = incrsumabs2();
				const x2Acc = incrsumabs2();
				const x2mmAcc = incrsumabs2();
				const xmean = mean( xd );
				const cdf = tCDF.factory( yd.length - 2 );
				for ( let i = 0; i < yd.length; i++ ) {
					const pred = yint + slope * xd[ i ];
					resAcc( pred - yd[ i ] );
					x2Acc( xd[ i ] );
					x2mmAcc( xd[ i ] - xmean );
				}
				const sigma2 = resAcc() / ( yd.length - 2 );
				const slopeVar = sigma2 / x2mmAcc();
				const slopeSE = sqrt( slopeVar );
				const interceptVar = ( (1/yd.length) * sigma2 * x2Acc() ) / x2mmAcc();
				const interceptSE = sqrt( interceptVar );
				const tSlope = slope / slopeSE;
				const tIntercept = yint / interceptSE;
				output = <div style={{ overflowX: 'auto', width: '100%' }} >
					<label>{t('simple-regression-title', { x, y, counter: COUNTER })}</label>
					<Table bordered size="sm" >
						<thead>
							<tr>
								<th>{t('variable')}</th>
								<th>{t('coefficient')}</th>
								<th>{t('std-error')}</th>
								<th>{T}</th>
								<th>{t('p-value')}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{t('intercept')}</td>
								<td>{yint.toFixed( 4 )}</td>
								<td>{interceptSE.toFixed( 4 )}</td>
								<td>{tIntercept.toFixed( 4 )}</td>
								<td>{2.0 * (1.0-cdf( abs( tIntercept ) ) ).toFixed( 4 )}</td>
							</tr>
							<tr>
								<td>{x}</td>
								<td>{slope.toFixed( 4 )}</td>
								<td>{slopeSE.toFixed( 4 )}</td>
								<td>{tSlope.toFixed( 4 )}</td>
								<td>{2.0 * (1.0-cdf( abs( tSlope ) ) ).toFixed( 4 )}</td>
							</tr>
						</tbody>
					</Table>
					{ this.props.onPredict ? <Tooltip tooltip={t('use-model-to-predict-tooltip')} >
						<Button variant="secondary" size="sm" onClick={() => {
							const predict = ( data ) => {
								const xd = data[ x ];
								const yd = data[ y ];
								const fitted = new Array( yd.length );
								const residuals = new Array( yd.length );
								for ( let i = 0; i < fitted.length; i++ ) {
									fitted[ i ] = yint + slope * xd[ i ];
									residuals[ i ] = yd[ i ] - fitted[ i ];
								}
								return { fitted, residuals };
							};
							this.props.onPredict( predict, COUNTER );
						}}>{this.props.t('use-model-to-predict')}</Button>
					</Tooltip> : null }
					{ this.props.onDiagnostics ? <Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={() => {
						const xd = data[ x ];
						const yd = data[ y ];
						const yhat = new Array( yd.length );
						const resid = new Array( yd.length );
						for ( let i = 0; i < yhat.length; i++ ) {
							yhat[ i ] = yint + slope * xd[ i ];
							resid[ i ] = yd[ i ] - yhat[ i ];
						}
						const qqPlot = <Plotly
							draggable
							editable fit
							{...generateQQPlotConfig( resid, 'residuals' )}
							meta={{ type: 'qqplot of regression residuals', x: xd, y: yd }}
						/>;
						const residualPlot = <Plotly
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
									title: t('fitted-values')
								},
								yaxis: {
									title: t('residuals')
								},
								title: t('residuals-vs-fitted')
							}}
							meta={{ type: 'regression residuals vs. fitted', x: xd, y: yd }}
						/>;
						this.props.onDiagnostics([ qqPlot, residualPlot ]);
					}} >
						{t('model-diagnostics')}
					</Button> : null }
				</div>;
			}
			return output;
		} catch ( _ ) {
			return <Alert variant="danger">{t('missing-attributes')}</Alert>;
		}
	}
}


// PROPERTIES //

SimpleLinearRegression.defaultProps = {
	group: null,
	omitMissing: false,
	onDiagnostics: null,
	onPredict: null
};

SimpleLinearRegression.propTypes = {
	data: PropTypes.object.isRequired,
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	omitMissing: PropTypes.bool,
	onDiagnostics: PropTypes.func,
	onPredict: PropTypes.func
};


// EXPORTS //

export default withTranslation( [ 'models', 'plotly' ] )( withPropCheck( SimpleLinearRegression ) );
