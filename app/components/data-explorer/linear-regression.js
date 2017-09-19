// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import mean from 'compute-mean';
import isArray from '@stdlib/assert/is-array';
import objectValues from '@stdlib/utils/values';
import mapValues from '@stdlib/utils/map-values';


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
} // end FUNCTION calculateCoefficients()

function by2( arr1, arr2, factor, fun ) {
	let out = {};
	let ret1 = {};
	let ret2 = {};
	for ( let i = 0; i < factor.length; i++ ) {
		if ( !isArray( ret1[ factor[ i ] ]) ) {
			ret1[ factor[ i ] ] = [];
			ret2[ factor[ i ] ] = [];
		}
		ret1[ factor[ i ] ].push( arr1[ i ]);
		ret2[ factor[ i ] ].push( arr2[ i ]);
	}
	for ( let key in ret1 ) {
		out[ key ] = fun( ret1[ key ], ret2[ key ]);
	}
	return out;
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
			console.log( res );
			let output = {
				variable: `Regression of ${yval} on ${xval} by ${group}`,
				type: 'Simple Linear Regression',
				value: <pre>
					<label>Regression of {yval} on {xval}:</label>
					{objectValues( mapValues( res, ( elem, key ) => {
						const [ yint, slope ] = elem;
						return (
							<div>
								<label>{key}</label>
								<table>
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
								</table>
							</div>
						);
					}) )}
				</pre>
			};
			this.props.onCreated( output );
		}
		else {
			const [ yint, slope ] = calculateCoefficients( x, y );
			let output = {
				variable: `Regression of ${yval} on ${xval}`,
				type: 'Simple Linear Regression',
				value: <pre>
					<label>Regression of {yval} on {xval}:</label>
					<table>
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
					</table>
				</pre>
			};
			this.props.onCreated( output );
		}
	}

	render() {
		const { continuous, categorical } = this.props;
		return (
			<Dashboard
				title="Simple Linear Regression"
				autoStart={false}
				onGenerate={this.fitRegression.bind( this )}
			>
				<SelectInput
					legend="Response Variable:"
					defaultValue={continuous[ 0 ]}
					options={continuous}
				/>
				<SelectInput
					legend="Explanatory Variable:"
					defaultValue={continuous[ 1 ]}
					options={continuous}
				/>
				<SelectInput
					legend="Group By:"
					options={categorical}
					clearable={true}
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

SimpleLinearRegression.defaultProps = {
	defaultValue: null,
	onPlotDone() {}
};


// PROPERTY TYPES //

SimpleLinearRegression.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default SimpleLinearRegression;
