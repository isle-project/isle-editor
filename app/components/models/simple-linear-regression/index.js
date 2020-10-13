// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'components/table';
import Tooltip from 'components/tooltip';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';
import objectValues from '@stdlib/utils/values';
import mapValues from '@stdlib/utils/map-values';
import incrsumabs2 from '@stdlib/stats/incr/sumabs2';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import mean from 'utils/statistic/mean';
import Plotly from 'components/plotly';
import { generateQQPlotConfig } from 'components/plots/qqplot';
import by2 from 'utils/by2';
import by from 'utils/by';


// VARIABLES //

let COUNTER = 0;


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
	return [ yint, slope ];
}

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}


// MAIN //

class SimpleLinearRegression extends Component {
	constructor( props ) {
		super( props );

		const { xval, yval, data, group, omitMissing } = props;
		const x = data[ xval ];
		const y = data[ yval ];
		const groups = data[ group ];
		if ( omitMissing ) {
			const xvals = [];
			const yvals = [];
			const groupvals = [];
			if ( groups ) {
				for ( let i = 0; i < x.length; i++ ) {
					if (
						!isMissing( groups[ i ] ) &&
						isNonMissingNumber( x[ i ] ) &&
						isNonMissingNumber( y[ i ] )
					) {
						xvals.push( x[ i ] );
						yvals.push( y[ i ] );
						groupvals.push( groups[ i ] );
					}
				}
			} else {
				for ( let i = 0; i < x.length; i++ ) {
					if (
						isNonMissingNumber( x[ i ] ) &&
						isNonMissingNumber( y[ i ] )
					) {
						xvals.push( x[ i ] );
						yvals.push( y[ i ] );
					}
				}
			}
			this.x = xvals;
			this.y = yvals;
			this.groups = groupvals;
		} else {
			this.x = x;
			this.y = y;
			this.groups = groups;
		}
		COUNTER += 1;
	}

	render() {
		const { x, y, groups } = this;
		const { xval, yval, group, data } = this.props;
		let output;
		if ( group ) {
			const xmeans = by( x, groups, mean );
			const res = by2( x, y, groups, calculateCoefficients );
			output = <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>Regression of {yval} on {xval}</label>
				<p>
					<i>Grouped by {group}:</i>
				</p>
				{objectValues( mapValues( res, ( elem, key ) => {
					const [ yint, slope ] = elem;
					const resAcc = incrsumabs2();
					const x2Acc = incrsumabs2();
					const x2mmAcc = incrsumabs2();
					const cdf = tCDF.factory( y.length - 2 );
					for ( let i = 0; i < y.length; i++ ) {
						const pred = yint + slope * x[ i ];
						resAcc( pred - y[ i ] );
						x2Acc( x[ i ] );
						x2mmAcc( x[ i ] - xmeans[ key ] );
					}
					const sigma2 = resAcc() / ( y.length - 2 );
					const slopeVar = sigma2 / x2mmAcc();
					const slopeSE = sqrt( slopeVar );
					const interceptVar = ( (1/y.length) * sigma2 * x2Acc() ) / x2mmAcc();
					const interceptSE = sqrt( interceptVar );
					const tSlope = slope / slopeSE;
					const tIntercept = yint / interceptSE;
					return (
						<div>
							<label>{key}:</label>
							<Table bordered size="sm" >
								<thead>
									<tr>
										<th>Variable</th>
										<th>Coefficient</th>
										<th>Std. Error</th>
										<th>t</th>
										<th>p-value</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Intercept</td>
										<td>{yint.toFixed( 4 )}</td>
										<td>{interceptSE.toFixed( 4 )}</td>
										<td>{tIntercept.toFixed( 4 )}</td>
										<td>{2.0 * (1.0-cdf( abs( tIntercept ) ) ).toFixed( 4 )}</td>
									</tr>
									<tr>
										<td>{xval}</td>
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
				<Tooltip tooltip="Predictions and residuals will be attached to data table" >
					<Button variant="secondary" size="sm" onClick={() => {
						const x = data[ xval ];
						const y = data[ yval ];
						const yhat = new Float64Array( y.length );
						const resid = new Float64Array( y.length );
						const groups = data[ group ];
						for ( let i = 0; i < yhat.length; i++ ) {
							const [ yint, slope ] = res[ groups[ i ] ];
							yhat[ i ] = yint + slope * x[ i ];
							resid[ i ] = yhat[ i ] - y[ i ];
						}
						this.props.onPredict( yhat, resid, COUNTER );
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
				<Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={() => {
					const x = this.props.data[ xval ];
					const y = this.props.data[ yval ];
					const yhat = new Float64Array( y.length );
					const resid = new Float64Array( y.length );
					const groups = this.props.data[ group ];
					for ( let i = 0; i < yhat.length; i++ ) {
						const [ yint, slope ] = res[ groups[ i ] ];
						yhat[ i ] = yint + slope * x[ i ];
						resid[ i ] = yhat[ i ] - y[ i ];
					}
					const qqPlot = {
						variable: 'QQ Plot of Residuals',
						type: 'Chart',
						value: <Plotly
							draggable
							editable fit
							{...generateQQPlotConfig( resid, 'residuals' )}
							meta={{ type: 'qqplot of regression residuals', x, y }}
						/>
					};
					const residualPlot = {
						variable: 'Residuals vs. Fitted',
						type: 'Chart',
						value: <Plotly
							draggable editable fit
							data={[
								{
									x: yhat,
									y: resid,
									mode: 'markers'
								}
							]}
							layout={{
								xaxis: {
									title: 'Fitted Values'
								},
								yaxis: {
									title: 'Residuals'
								},
								title: 'Residuals vs. Fitted'
							}}
							meta={{ type: 'regression residuals vs. fitted', x, y }}
						/>
					};
					this.props.onDiagnostics([ qqPlot, residualPlot ]);
				}} >
					Model Diagnostics
				</Button>
			</div>;
		}
		else {
			const [ yint, slope ] = calculateCoefficients( x, y );
			const resAcc = incrsumabs2();
			const x2Acc = incrsumabs2();
			const x2mmAcc = incrsumabs2();
			const xmean = mean( x );
			const cdf = tCDF.factory( y.length - 2 );
			for ( let i = 0; i < y.length; i++ ) {
				const pred = yint + slope * x[ i ];
				resAcc( pred - y[ i ] );
				x2Acc( x[ i ] );
				x2mmAcc( x[ i ] - xmean );
			}
			const sigma2 = resAcc() / ( y.length - 2 );
			const slopeVar = sigma2 / x2mmAcc();
			const slopeSE = sqrt( slopeVar );
			const interceptVar = ( (1/y.length) * sigma2 * x2Acc() ) / x2mmAcc();
			const interceptSE = sqrt( interceptVar );
			const tSlope = slope / slopeSE;
			const tIntercept = yint / interceptSE;
			output = <div style={{ overflowX: 'auto', width: '100%' }} >
				<label>Regression of {yval} on {xval} (model id: slm{COUNTER})</label>
				<Table bordered size="sm" >
					<thead>
						<tr>
							<th>Variable</th>
							<th>Coefficient</th>
							<th>Std. Error</th>
							<th>t</th>
							<th>p-value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Intercept</td>
							<td>{yint.toFixed( 4 )}</td>
							<td>{interceptSE.toFixed( 4 )}</td>
							<td>{tIntercept.toFixed( 4 )}</td>
							<td>{2.0 * (1.0-cdf( abs( tIntercept ) ) ).toFixed( 4 )}</td>
						</tr>
						<tr>
							<td>{xval}</td>
							<td>{slope.toFixed( 4 )}</td>
							<td>{slopeSE.toFixed( 4 )}</td>
							<td>{tSlope.toFixed( 4 )}</td>
							<td>{2.0 * (1.0-cdf( abs( tSlope ) ) ).toFixed( 4 )}</td>
						</tr>
					</tbody>
				</Table>
				<Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={() => {
						const x = data[ xval ];
						const y = data[ yval ];
						const yhat = new Array( y.length );
						const resid = new Array( y.length );
						for ( let i = 0; i < yhat.length; i++ ) {
							yhat[ i ] = yint + slope * x[ i ];
							resid[ i ] = yhat[ i ] - y[ i ];
						}
						this.props.onPredict( yhat, resid, COUNTER );
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
				<Button variant="secondary" size="sm" style={{ marginLeft: 6 }} onClick={() => {
					const x = this.props.data[ xval ];
					const y = this.props.data[ yval ];
					const yhat = new Array( y.length );
					const resid = new Array( y.length );
					for ( let i = 0; i < yhat.length; i++ ) {
						yhat[ i ] = yint + slope * x[ i ];
						resid[ i ] = yhat[ i ] - y[ i ];
					}
					const qqPlot = {
						variable: 'QQ Plot of Residuals',
						type: 'Chart',
						value: <Plotly
							draggable
							editable fit
							{...generateQQPlotConfig( resid, 'residuals' )}
							meta={{ type: 'qqplot of regression residuals', x, y }}
						/>
					};
					const residualPlot = {
						variable: 'Residuals vs. Fitted',
						type: 'Chart',
						value: <Plotly
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
									title: 'Fitted Values'
								},
								yaxis: {
									title: 'Residuals'
								},
								title: 'Residuals vs. Fitted'
							}}
							meta={{ type: 'regression residuals vs. fitted', x, y }}
						/>
					};
					this.props.onDiagnostics([ qqPlot, residualPlot ]);
				}} >
					Model Diagnostics
				</Button>
			</div>;
		}
		return output;
	}
}


// PROPERTIES //

SimpleLinearRegression.defaultProps = {
	onDiagnostics: null,
	onPredict: null
};

SimpleLinearRegression.propTypes = {
	onDiagnostics: PropTypes.func,
	onPredict: PropTypes.func
};


// EXPORTS //

export default SimpleLinearRegression;
