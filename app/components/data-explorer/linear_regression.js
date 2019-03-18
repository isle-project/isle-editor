// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import objectValues from '@stdlib/utils/values';
import mapValues from '@stdlib/utils/map-values';
import mean from 'utils/statistic/mean';
import { DATA_EXPLORER_LINEAR_REGRESSION } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by2 from './by2.js';


// VARIABLES //

const DESCRIPTION = 'Statistical model which estimates a best-fit line for a response variable of interest (Y) given exactly one predictor variable (X). The line is determined by its intercept (Y-value at X = 0) and slope (the increase in Y associated with a unit increase of X).';


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

		if ( group ) {
			const res = by2( x, y, this.props.data[ group ], calculateCoefficients );
			let output = {
				variable: `Regression of ${yval} on ${xval} by ${group}`,
				type: 'Simple Linear Regression',
				value: <div>
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
					<label>Regression of {yval} on {xval}:</label>
					<Table bordered size="sm" >
						<tbody>
							<tr>
								<th>Variable</th>
								<th>Coefficient</th>
							</tr>
							<tr>
								<td>{xval}</td>
								<td>{slope.toFixed( 6 )}</td>
							</tr>
							<tr>
								<td>Intercept</td>
								<td>{yint.toFixed( 6 )}</td>
							</tr>
						</tbody>
					</Table>
				</div>
			};
			this.props.logAction( DATA_EXPLORER_LINEAR_REGRESSION, {
				yval, xval, group
			});
			this.props.onCreated( output );
		}
	}

	render() {
		const { continuous, categorical } = this.props;
		return (
			<Dashboard
				title={<span>Simple Linear Regression<QuestionButton title="Simple Linear Regression" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.fitRegression.bind( this )}
			>
				<SelectInput
					legend="Response Variable (Y):"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<SelectInput
					legend="Explanatory Variable (X):"
					defaultValue={continuous[ 1 ]}
					options={continuous}
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
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default SimpleLinearRegression;
