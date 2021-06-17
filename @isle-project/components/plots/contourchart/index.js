// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import maxScalar from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/array/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import Plotly from '@isle-project/components/plotly';
import max from '@isle-project/utils/statistic/max';
import min from '@isle-project/utils/statistic/min';
import calculateCoefficients from '@isle-project/utils/linear-regression/calculate_coefficients.js';
import { withPropCheck } from '@isle-project/utils/prop-check';


// FUNCTIONS //

function calculateOpacity(nobs) {
	return maxScalar( 0.05, 0.6 - floor( nobs / 500 ) );
}

export function generateContourChart({ data, x, y, overlayPoints, regressionMethod, smoothSpan }) {
	let xvals = data[ x ];
	let yvals = data[ y ];
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
				text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`, // eslint-disable-line i18next/no-literal-string
				mode: 'lines',
				name: i18n.t('Plotly:linear-fit'),
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
				name: i18n.t('Plotly:smoothed-fit'),
				type: 'line',
				line: {
					color: 'tomato'
				}
			});
		}
	}
	const layout = {
		title: `${x} ${i18n.t('Plotly:vs')} ${y}`,
		xaxis: {
			showgrid: true,
			zeroline: true,
			title: x
		},
		yaxis: {
			showgrid: true,
			zeroline: true,
			title: y
		}
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

function ContourChart({ id, data, x, y, overlayPoints, smoothSpan, regressionMethod, action, onShare, onSelected }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateContourChart({ data, x, y, overlayPoints, regressionMethod, smoothSpan });
	}, [ data, overlayPoints, regressionMethod, smoothSpan, x, y ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('Plotly:data-missing')}</Alert>;
	}
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
				if ( onSelected ) {
					onSelected({ x: x, y: y }, selected );
				}
			}}
		/>
	);
}


// PROPERTIES //

ContourChart.defaultProps = {
	overlayPoints: false,
	smoothSpan: 0.66,
	regressionMethod: null,
	onSelected() {}
};

ContourChart.propTypes = {
	data: PropTypes.object.isRequired,
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
	overlayPoints: PropTypes.bool,
	smoothSpan: PropTypes.number,
	regressionMethod: PropTypes.arrayOf( PropTypes.oneOf( [ 'linear', 'smooth' ] ) ),
	onSelected: PropTypes.func
};


// EXPORTS //

/**
* A contour chart.
*
* @property {Object} data - object of value arrays for each variable
* @property {string} x - x-axis variable
* @property {string} y - y-axis variable
* @property {boolean} overlayPoints - controls whether to overlay points for each observation
* @property {Array<string>} regressionMethod - array containing `linear` and/or `smooth` to overlay a linear and/or smoothed regression line
* @property {number} smoothSpan - smoothing span
* @property {Function} onSelected - callback invoked when points are selected with x, y values and the selected points
*/
export default withPropCheck( ContourChart );
