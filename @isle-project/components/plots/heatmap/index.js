// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/array/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import maxScalar from '@stdlib/math/base/special/max';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import kde2d from '@stdlib/stats/kde2d';
import max from '@isle-project/utils/statistic/max';
import min from '@isle-project/utils/statistic/min';
import { withPropCheck } from '@isle-project/utils/prop-check';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import calculateCoefficients from '@isle-project/utils/linear-regression/calculate_coefficients.js';
import by2 from '@isle-project/utils/by2';
import by from '@isle-project/utils/by';
import { Factor } from '@isle-project/utils/factor-variable';


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

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

export function generateHeatmapConfig({ data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan }) {
	let annotations;
	let traces;
	let layout;
	const xvals = data[ x ];
	const yvals = data[ y ];
	if ( !group ) {
		const xc = [];
		const yc = [];
		for ( let j = 0; j < xvals.length; j++ ) {
			const xval = xvals[ j ];
			const yval = yvals[ j ];
			if (
				isNumber( xval ) && isNumber( yval ) &&
				!isnan( xval ) && !isnan( yval )
			) {
				xc.push( xval );
				yc.push( yval );
			}
		}
		const out = kde2d( xc, yc );
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
					text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`, // eslint-disable-line i18next/no-literal-string
					mode: 'lines',
					name: i18n.t('plotly:linear-fit'),
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
					name: i18n.t('plotly:smoothed-fit'),
					type: 'line'
				});
			}
		}
		layout = {
			title: `${x} ${i18n.t('plotly:vs')} ${y}`,
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
		const xc = [];
		const yc = [];
		const groupvals = [];
		const groups = data[ group ];
		for ( let i = 0; i < xvals.length; i++ ) {
			if (
				!isMissing( groups[ i ] ) &&
				isNonMissingNumber( xvals[ i ] ) &&
				isNonMissingNumber( yvals[ i ] )
			) {
				xc.push( xvals[ i ] );
				yc.push( yvals[ i ] );
				groupvals.push( groups[ i ] );
			}
		}

		let xgrouped;
		let ygrouped;
		const densities = by2( xc, yc, groupvals, kde2d );
		const keys = extractUsedCategories( densities, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = new Array( nPlots );
		let subplots = new Array( nRows );
		for ( let j = 0; j < nRows; j++ ) {
			subplots[j] = new Array( nCols );
		}
		if (
			regressionMethod && regressionMethod.length > 0 ||
			overlayPoints
		) {
			xgrouped= by( xc, groupvals, arr => {
				return arr;
			});
			ygrouped = by( yc, groupvals, arr => {
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
				xAxisID = `x${col === 0 ? '' : col+1}`; // eslint-disable-line i18next/no-literal-string
			} else {
				xAxisID = `x${i === 0 ? '' : i+1}`; // eslint-disable-line i18next/no-literal-string
			}

			if ( commonYAxis ) {
				yAxisID = `y${row === 0 ? '' : row+1}`; // eslint-disable-line i18next/no-literal-string
			} else {
				yAxisID = `y${i === 0 ? '' : i+1}`; // eslint-disable-line i18next/no-literal-string
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
			if ( overlayPoints ) {
				const points = {
					x: xgrouped[ key ],
					y: ygrouped[ key ],
					xaxis: xAxisID,
					yaxis: yAxisID,
					mode: 'markers',
					marker: {
						color: 'white',
						opacity: calculateOpacity( val.x.length )
					},
					type: val.x.length > 2000 ? 'scattergl' : 'scatter'
				};
				traces.push( points );
			}
			subplots[ row ][ col ] = xAxisID + yAxisID;
			if ( regressionMethod && regressionMethod.length > 0 ) {
				const xvals = xgrouped[ key ];
				const yvals = ygrouped[ key ];
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
						name: 'Linear Fit',
						type: 'line',
						xaxis: xAxisID,
						yaxis: yAxisID
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
			title: `${x} ${i18n.t('plotly:vs')} ${y} ${i18n.t('plotly:given')} ${group}`
		};
	}
	return {
		layout,
		data: traces
	};
}


// MAIN //

function HeatMap({ id, data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan, action, onShare, onSelected }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateHeatmapConfig({ data, x, y, overlayPoints, alternateColor, group, commonXAxis, commonYAxis, regressionMethod, smoothSpan });
	}, [ alternateColor, commonXAxis, commonYAxis, data, group, overlayPoints, regressionMethod, smoothSpan, x, y ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
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
	group: null,
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
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
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
* @property {(string|Factor)} group - grouping variable
* @property {boolean} overlayPoints - controls whether to overlay points for each observation
* @property {Array<string>} regressionMethod - array containing `linear` and/or `smooth` to overlay a linear and/or smoothed regression line
* @property {number} smoothSpan - smoothing span
* @property {boolean} alternateColor - controls whether to use an alternative color scheme for the heat map
* @property {boolean} commonXAxis - controls whether to use a common x-axis when creating multiple heat maps per value of a grouping variable
* @property {boolean} commonYAxis - controls whether to use a common y-axis when creating multiple heat maps per value of a grouping variable
*/
export default withPropCheck( HeatMap );
