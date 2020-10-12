// MODULES //

import React from 'react';
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

export function generateHeatmapConfig({ data, xval, yval, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan }) {
	let annotations;
	let traces;
	let layout;
	const x = data[ xval ];
	const y = data[ yval ];
	if ( !group ) {
		const out = kde2d( x, y );
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
				x,
				y,
				mode: 'markers',
				name: 'points',
				marker: {
					color: 'white',
					opacity: calculateOpacity( x.length )
				},
				type: x.length > 2000 ? 'scattergl' : 'scatter'
			};
			traces.push( points );
		}
		if ( regressionMethod && regressionMethod.length > 0 ) {
			let xc = [];
			let yc = [];
			for ( let j = 0; j < x.length; j++ ) {
				let xval = x[ j ];
				let yval = y[ j ];
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
	} else {
		let xgrouped;
		let ygrouped;
		const densities = by2( x, y, data[ group ], kde2d );
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
			xgrouped= by( x, data[ group ], arr => {
				return arr;
			});
			ygrouped = by( y, data[ group ], arr => {
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
			title: `${xval} vs. ${yval} given ${group}`
		};
	}
	return {
		layout,
		data: traces
	};
}


// MAIN //

function HeatMap( props ) {
	const config = generateHeatmapConfig( props );
	return ( <Plotly
		editable
		draggable
		fit
		id={props.id}
		data={config.data}
		layout={config.layout}
		meta={props.action}
		onShare={props.onShare}
		onSelected={( selected ) => {
			this.props.onSelected({ x: props.xval, y: props.yval }, selected );
		}}
	/> );
}


// EXPORTS //

export default HeatMap;
