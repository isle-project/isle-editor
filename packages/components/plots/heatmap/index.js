// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Plotly from 'components/plotly';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/math/utils/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import maxScalar from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import kde2d from '@stdlib/stats/kde2d';
import max from 'utils/statistic/max';
import min from 'utils/statistic/min';
import extractUsedCategories from 'utils/extract-used-categories';
import calculateCoefficients from 'utils/linear-regression/calculate_coefficients.js';
import by2 from 'utils/by2';
import by from 'utils/by';


// FUNCTIONS //

function calculateOpacity( nobs ) {
	return maxScalar( 0.05, 0.6 - floor( nobs / 500 ) );
}

function toArrayArray( arr ) {
	const nRows = arr.shape[ 0 ];
	const nCols = arr.shape[ 1 ];
	const out = new Array( nRows );
	for ( let i = 0; i < nRows; i++ ) {
		const row = Array( nCols );
		for ( let j = 0; j < nCols; j++ ) {
			row[ j ] = arr.get( i, j );
		}
		out[ i ] = row;
	}
	return out;
}

export function generateHeatmapConfig({ data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan }) {
	let annotations;
	let traces;
	let layout;
	const xvals = data[ x ];
	const yvals = data[ y ];
	if ( !group ) {
		const out = kde2d( xvals, yvals );
		traces = [
			{
				x: out.x,
				y: out.y,
				z: toArrayArray( out.z ),
				type: 'heatmap',
				showscale: false,
				transpose: true,
				colorscale: alternateColor ? 'YIGnBu' : 'RdBu'
			}
		];
		if ( overlayPoints ) {
			const points = {
				x: xvals,
				y: yvals,
				mode: 'markers',
				name: 'points',
				marker: {
					color: 'white',
					opacity: calculateOpacity( xvals.length )
				},
				type: xvals.length > 2000 ? 'scattergl' : 'scatter'
			};
			traces.push( points );
		}
		if ( regressionMethod && regressionMethod.length > 0 ) {
			let xc = [];
			let yc = [];
			for ( let j = 0; j < xvals.length; j++ ) {
				let xval = xvals[ j ];
				let yval = yvals[ j ];
				if (
					isNumber( xval ) && isNumber( yval ) &&
					!isnan( xval ) && !isnan( yval )
				) {
					xc.push( xval );
					yc.push( yval );
				}
			}
			let predictedLinear;
			let predictedSmooth;
			let values;
			if ( contains( regressionMethod, 'linear' ) ) {
				values = linspace( min( xc ), max( xc ), 100 );
				const coefs = calculateCoefficients( xc, yc );
				predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				traces.push({
					x: values,
					y: predictedLinear,
					text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
					mode: 'lines',
					name: 'Linear Fit',
					type: 'line'
				});
			}
			if ( contains( regressionMethod, 'smooth' ) ) {
				const out = lowess( xc, yc, { 'f': smoothSpan } );
				values = out.x;
				predictedSmooth = out.y;
				traces.push({
					x: values,
					y: predictedSmooth,
					mode: 'lines',
					name: 'Smoothed Fit',
					type: 'line'
				});
			}
		}
		layout = {
			title: `${x} vs. ${y}`,
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
	} else {
		let xgrouped;
		let ygrouped;
		const densities = by2( xvals, yvals, data[ group ], kde2d );
		const keys = extractUsedCategories( densities, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = new Array(nPlots);
		let subplots = new Array(nRows);
		for ( let j = 0; j < nRows; j++ ) {
			subplots[j] = new Array(nCols);
		}

		if ( regressionMethod && regressionMethod.length > 0 ) {
			xgrouped= by( xvals, data[ group ], arr => {
				return arr;
			});
			ygrouped = by( yvals, data[ group ], arr => {
				return arr;
			});
		}
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = densities[ key ];
			let xAxisID;
			let yAxisID;
			if ( commonXAxis ) {
				xAxisID = `x${col === 0 ? '' : col+1}`;
			} else {
				xAxisID = `x${i === 0 ? '' : i+1}`;
			}

			if ( commonYAxis ) {
				yAxisID = `y${row === 0 ? '' : row+1}`;
			} else {
				yAxisID = `y${i === 0 ? '' : i+1}`;
			}
			traces.push(
				{
					x: val.x,
					y: val.y,
					z: toArrayArray( val.z ),
					type: 'heatmap',
					showscale: false,
					transpose: true,
					xaxis: xAxisID,
					yaxis: yAxisID,
					colorscale: alternateColor ? 'YIGnBu' : 'RdBu'
				}
			);
			subplots[ row ][ col ] = xAxisID + yAxisID;
			if ( regressionMethod && regressionMethod.length > 0 ) {
				let xvals = xgrouped[ key ];
				let yvals = ygrouped[ key ];
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
				let predictedLinear;
				let predictedSmooth;
				let values;
				if ( contains( regressionMethod, 'linear' ) ) {
					values = linspace( min( xc ), max( xc ), 100 );
					const coefs = calculateCoefficients( xc, yc );
					predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
					traces.push({
						x: values,
						y: predictedLinear,
						text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
						mode: 'lines',
						name: 'Linear Fit',
						type: 'line',
						xaxis: xAxisID,
						yaxis: yAxisID
					});
				}
				if ( contains( regressionMethod, 'smooth' ) ) {
					const out = lowess( xc, yc, { 'f': smoothSpan } );
					values = out.x;
					predictedSmooth = out.y;
					traces.push({
						x: values,
						y: predictedSmooth,
						mode: 'lines',
						name: 'Smoothed Fit',
						type: 'line',
						xaxis: xAxisID,
						yaxis: yAxisID
					});
				}
			}

			annotations[ i ] = {
				xref: 'paper',
				yref: 'paper',
				x: ( 1 + ( 2*col) ) / ( 2*nCols ),
				y: 1 - ( (row*1.12) / nRows ),
				text: key,
				xanchor: 'center',
				yanchor: 'bottom',
				showarrow: false,
				font: {
					size: 14
				}
			};
		}
		layout = {
			grid: {
				subplots: subplots
			},
			annotations: annotations,
			title: `${x} vs. ${y} given ${group}`
		};
	}
	return {
		layout,
		data: traces
	};
}


// MAIN //

function HeatMap({ id, data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan, action, onShare, onSelected }) {
	const config = generateHeatmapConfig({ data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan });
	return ( <Plotly
		editable
		draggable
		fit
		id={id}
		data={config.data}
		layout={config.layout}
		meta={action}
		onShare={onShare}
		onSelected={( selected ) => {
			if ( onSelected ) {
				onSelected({ x, y }, selected );
			}
		}}
	/> );
}


// PROPERTIES //

HeatMap.defaultProps = {
	overlayPoints: false,
	smoothSpan: 0.66,
	regressionMethod: null,
	alternateColor: false,
	commonXAxis: false,
	commonYAxis: false
};

HeatMap.propTypes = {
	data: PropTypes.object.isRequired,
	x: PropTypes.string.isRequired,
	y: PropTypes.string.isRequired,
	overlayPoints: PropTypes.bool,
	smoothSpan: PropTypes.number,
	regressionMethod: PropTypes.arrayOf( PropTypes.oneOf( [ 'linear', 'smooth' ] ) ),
	alternateColor: PropTypes.bool,
	commonXAxis: PropTypes.bool,
	commonYAxis: PropTypes.bool
};


// EXPORTS //

/**
* A heat map for visualizing a relationship between two variables.
*
* @property {Object} data - object of value arrays for each variable
* @property {string} x - x-axis variable
* @property {string} y - y-axis variable
* @property {boolean} overlayPoints - controls whether to overlay points for each observation
* @property {Array<string>} regressionMethod - array containing `linear` and/or `smooth` to overlay a linear and/or smoothed regression line
* @property {number} smoothSpan - smoothing span
* @property {boolean} alternateColor - controls whether to use an alternative color scheme for the heat map
* @property {boolean} commonXAxis - controls whether to use a common x-axis when creating multiple heat maps per value of a grouping variable
* @property {boolean} commonYAxis - controls whether to use a common y-axis when creating multiple heat maps per value of a grouping variable
*/
export default HeatMap;
