// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Tooltip from 'components/tooltip';
import copy from '@stdlib/utils/copy';
import contains from '@stdlib/assert/contains';
import objectValues from '@stdlib/utils/values';
import mapValues from '@stdlib/utils/map-values';
import incrsumabs2 from '@stdlib/stats/incr/sumabs2';
import tCDF from '@stdlib/stats/base/dists/t/cdf';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import mean from 'utils/statistic/mean';
import { DATA_EXPLORER_LINEAR_REGRESSION } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by2 from './by2.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'Statistical model which estimates a best-fit line for a response variable of interest (Y) given exactly one predictor variable (X). The line is determined by its intercept (Y-value at X = 0) and slope (the increase in Y associated with a unit increase of X).';
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


// MAIN //

class SimpleLinearRegression extends Component {
	constructor( props ) {
		super( props );
	}

	fitRegression( yval, xval, group ) {
		const x = this.props.data[ xval ];
		const y = this.props.data[ yval ];
		let output;
		COUNTER += 1;
		if ( group ) {
			const xmeans = by( x, this.props.data[ group ], mean );
			const res = by2( x, y, this.props.data[ group ], calculateCoefficients );
			output = {
				variable: `Regression of ${yval} on ${xval} by ${group}`,
				type: 'Simple Linear Regression',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
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
									<tbody>
										<tr>
											<th>Variable</th>
											<th>Coefficient</th>
											<th>Std. Error</th>
											<th>t</th>
											<th>p-value</th>
										</tr>
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
					<Tooltip tooltip="Predictions and residuals will be attached to data table">
						<Button variant="secondary" size="sm" onClick={() => {
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
							const newData = copy( this.props.data, 1 );
							const newQuantitative = this.props.quantitative.slice();
							let name = 'pred_slm'+COUNTER;
							newData[ name ] = yhat;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							name = 'resid_slm'+COUNTER;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							newData[ name ] = resid;
							this.props.onGenerate( newQuantitative, newData );
						}}>Use this model to predict for currently selected data</Button>
					</Tooltip>
					</div>
			};
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
			output = {
				variable: `Regression of ${yval} on ${xval}`,
				type: 'Simple Linear Regression',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>Regression of {yval} on {xval} (model id: slm{COUNTER})</label>
					<Table bordered size="sm" >
						<tbody>
							<tr>
								<th>Variable</th>
								<th>Coefficient</th>
								<th>Std. Error</th>
								<th>t</th>
								<th>p-value</th>
							</tr>
							<tr>
								<td>Intercept</td>
								<td>{yint.toFixed( 3 )}</td>
								<td>{interceptSE.toFixed( 4 )}</td>
								<td>{tIntercept.toFixed( 4 )}</td>
								<td>{2.0 * (1.0-cdf( abs( tIntercept ) ) ).toFixed( 4 )}</td>
							</tr>
							<tr>
								<td>{xval}</td>
								<td>{slope.toFixed( 3 )}</td>
								<td>{slopeSE.toFixed( 4 )}</td>
								<td>{tSlope.toFixed( 4 )}</td>
								<td>{2.0 * (1.0-cdf( abs( tSlope ) ) ).toFixed( 4 )}</td>
							</tr>
						</tbody>
					</Table>
					<Tooltip tooltip="Predictions and residuals will be attached to data table">
						<Button variant="secondary" size="sm" onClick={() => {
							const x = this.props.data[ xval ];
							const y = this.props.data[ yval ];
							const yhat = new Array( y.length );
							const resid = new Array( y.length );
							for ( let i = 0; i < yhat.length; i++ ) {
								yhat[ i ] = yint + slope * x[ i ];
								resid[ i ] = yhat[ i ] - y[ i ];
							}
							const newData = copy( this.props.data, 1 );
							const newQuantitative = this.props.quantitative.slice();
							let name = 'pred_slm'+COUNTER;
							newData[ name ] = yhat;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							name = 'resid_slm'+COUNTER;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							newData[ name ] = resid;
							this.props.onGenerate( newQuantitative, newData );
						}}>Use this model to predict for currently selected data</Button>
					</Tooltip>
				</div>
			};
		}
		this.props.logAction( DATA_EXPLORER_LINEAR_REGRESSION, {
			yval, xval, group
		});
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, categorical } = this.props;
		return (
			<Dashboard
				title={<span>Simple Linear Regression<QuestionButton title="Simple Linear Regression" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.fitRegression.bind( this )}
			>
				<SelectInput
					legend="Response Variable (Y):"
					defaultValue={quantitative[ 0 ]}
					options={quantitative}
				/>
				<SelectInput
					legend="Explanatory Variable (X):"
					defaultValue={quantitative[ 1 ]}
					options={quantitative}
				/>
				<SelectInput
					legend="Group By:"
					options={categorical}
					clearable={true}
					menuPlacement="top"
				/>
			</Dashboard>
		);
	}
}


// PROPERTIES //

SimpleLinearRegression.defaultProps = {
	categorical: [],
	logAction() {}
};

SimpleLinearRegression.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default SimpleLinearRegression;
