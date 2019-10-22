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
import mean from 'utils/statistic/mean';
import { DATA_EXPLORER_LINEAR_REGRESSION } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by2 from './by2.js';


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

		COUNTER += 1;
		if ( group ) {
			const res = by2( x, y, this.props.data[ group ], calculateCoefficients );
			let output = {
				variable: `Regression of ${yval} on ${xval} by ${group}`,
				type: 'Simple Linear Regression',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>Regression of {yval} on {xval}</label>
					<p>
						<i>Grouped by {group}:</i>
					</p>
					{objectValues( mapValues( res, ( elem, key ) => {
						const [ yint, slope ] = elem;
						return (
							<div>
								<label>{key}:</label>
								<Table bordered size="sm" >
									<tbody>
										<tr>
											<th>Variable</th>
											<th>Coefficient</th>
										</tr>
										<tr>
											<td>{xval}</td>
											<td>{slope.toFixed( 4 )}</td>
										</tr>
										<tr>
											<td>Intercept</td>
											<td>{yint.toFixed( 4 )}</td>
										</tr>
									</tbody>
								</Table>
							</div>
						);
					}) )}
					</div>
			};
			this.props.onCreated( output );
		}
		else {
			const [ yint, slope ] = calculateCoefficients( x, y );
			let output = {
				variable: `Regression of ${yval} on ${xval}`,
				type: 'Simple Linear Regression',
				value: <div style={{ overflowX: 'auto', width: '100%' }}>
					<label>Regression of {yval} on {xval} (model id: slm{COUNTER})</label>
					<Table bordered size="sm" >
						<tbody>
							<tr>
								<th>Variable</th>
								<th>Coefficient</th>
							</tr>
							<tr>
								<td>{xval}</td>
								<td>{slope.toFixed( 3 )}</td>
							</tr>
							<tr>
								<td>Intercept</td>
								<td>{yint.toFixed( 3 )}</td>
							</tr>
						</tbody>
					</Table>
					<Tooltip tooltip="Predictions and residuals will be attached to data table">
						<Button variant="secondary" size="sm" onClick={() => {
							const x = this.props.data[ xval ];
							const y = this.props.data[ yval ];
							const yhat = new Float64Array( y.length );
							const resid = new Float64Array( y.length );
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
			this.props.logAction( DATA_EXPLORER_LINEAR_REGRESSION, {
				yval, xval, group
			});
			this.props.onCreated( output );
		}
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
