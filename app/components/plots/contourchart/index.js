// MODULES //

import React from 'react';
import maxScalar from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/math/utils/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import noop from '@stdlib/utils/noop';
import Plotly from 'components/plotly';
import max from 'utils/statistic/max';
import min from 'utils/statistic/min';
import calculateCoefficients from 'utils/linear-regression/calculate_coefficients.js';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return maxScalar( 0.05, 0.6 - floor( nobs / 500 ) );
}

export function generateContourChart({ data, xval, yval, overlayPoints, regressionMethod, smoothSpan }) {
	let xvals = data[ xval ];
	let yvals = data[ yval ];
	const trace1 = {
		x: xvals,
		y: yvals,
		mode: 'density',
		type: 'histogram2dcontour',
		colorscale: 'YIOrRd',
		showscale: false,
		reversescale: true
	};
	const traces = [ trace1 ];
	if ( overlayPoints ) {
		const trace2 = {
			x: xvals,
			y: yvals,
			mode: 'markers',
			name: 'points',
			marker: {
				color: '#1f77b4',
				opacity: calculateOpacity( xvals.length )
			},
			type: xvals.length > 2000 ? 'scattergl' : 'scatter'
		};
		traces.push(trace2);
	}
	if ( regressionMethod && regressionMethod.length > 0 ) {
		let xc = [];
		let yc = [];
		for ( let j = 0; j < xvals.length; j++ ) {
			let x = xvals[ j ];
			let y = yvals[ j ];
			if (
				isNumber( x ) && isNumber( y ) &&
				!isnan( x ) && !isnan( y )
			) {
				xc.push( x );
				yc.push( y );
			}
		}
		xvals = xc;
		yvals = yc;
		let predictedLinear;
		let predictedSmooth;
		let values;
		if ( contains( regressionMethod, 'linear' ) ) {
			values = linspace( min( xvals ), max( xvals ), 100 );
			const coefs = calculateCoefficients( xvals, yvals );
			predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
			traces.push({
				x: values,
				y: predictedLinear,
				text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
				mode: 'lines',
				name: 'Linear Fit',
				type: 'line',
				line: {
					color: 'steelblue'
				}
			});
		}
		if ( contains( regressionMethod, 'smooth' ) ) {
			const out = lowess( xvals, yvals, { 'f': smoothSpan } );
			values = out.x;
			predictedSmooth = out.y;
			traces.push({
				x: values,
				y: predictedSmooth,
				mode: 'lines',
				name: 'Smoothed Fit',
				type: 'line',
				line: {
					color: 'tomato'
				}
			});
		}
	}
	let layout = {
		title: `${xval} vs. ${yval}`,
		xaxis: {
			showgrid: true,
			zeroline: true,
			title: xval
		},
		yaxis: {
			showgrid: true,
			zeroline: true,
			title: yval
		}
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

function ContourChart({ id, data, xval, yval, overlayPoints, smoothSpan, regressionMethod, action, onShare, onSelected = noop }) {
	const config = generateContourChart({ data, xval, yval, overlayPoints, regressionMethod, smoothSpan });
	return (
		<Plotly
			editable
			draggable
			fit
			id={id}
			meta={action}
			data={config.data}
			layout={config.layout}
			onShare={onShare}
			onSelected={( selected ) => {
				onSelected({ x: xval, y: yval }, selected );
			}}
		/>
	);
}


// EXPORTS //

export default ContourChart;
