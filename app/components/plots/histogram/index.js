// MODULES //

import React from 'react';
import linspace from '@stdlib/math/utils/linspace';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import isnan from '@stdlib/assert/is-nan';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import ceil from '@stdlib/math/base/special/ceil';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/stats/base/dists/normal/pdf';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import Plotly from 'components/plotly';
import iqr from 'utils/statistic/iqr';
import extractUsedCategories from 'utils/extract-used-categories';
import kernelSmoothDensity from 'utils/kernel-smooth-density';
import by from 'utils/by';


// VARIABLES //

const SETTINGS = {
	yaxis: {
		tickformat: '-,.4r'
	},
	selectdirection: 'h'
};


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

function setBins( config, vals, binStrategy, nBins, xbins ) {
	const maxVal = isNumber( xbins.end ) ? xbins.end : max( vals );
	const minVal = isNumber( xbins.start ) ? xbins.start : min( vals );
	if ( binStrategy === 'Select # of bins' ) {
		const sizeVal = ( maxVal - minVal ) / nBins;
		config.autobinx = false;
		config.xbins = {
			size: sizeVal,
			start: minVal,
			end: maxVal
		};
	}
	else if ( binStrategy === 'Set bin width' ) {
		config.autobinx = false;
		config.xbins = {
			size: ( maxVal - minVal ) / xbins.size <= 1e4 ? xbins.size : null,
			start: minVal,
			end: maxVal
		};
	}
	return config;
}

/**
* Calculates either a kernel density estimator or the MLE of a chosen parametric distribution.
*/
function calculateDensityValues( vals, densityType ) {
	/* eslint-disable no-case-declarations */
	const minVal = min( vals );
	const maxVal = max( vals );
	const x = linspace( minVal, maxVal, 512 );
	let y;
	switch ( densityType ) {
	case 'Data-driven':
		// Chose appropriate bandwidth via rule-of-thumb:
		const h = 2.0 * iqr( vals ) * pow( vals.length, -1/3 ) || 0.1;
		const phi = gaussian.factory( 0.0, 1.0 );
		const kde = kernelSmoothDensity( vals, phi, h );
		y = x.map( x => kde( x ) );
		break;
	case 'Uniform':
		y = x.map( x => dunif( x, minVal, maxVal ) );
		break;
	case 'Exponential':
		const lambda = 1.0 / mean( vals );
		y = x.map( x => dexp( x, lambda ) );
		break;
	case 'Normal':
		const avg = mean( vals );
		const sd = stdev( vals );
		y = x.map( x => gaussian( x, avg, sd ) );
		break;
	}
	return [ x, y ];
}

export function generateHistogramConfig({ data, variable, group, groupMode, nCols, displayDensity, densityType, binStrategy, nBins, xbins = {}}) {
	let traces;
	let layout;

	if ( !group ) {
		let vals = data[ variable ];
		let nonmissing = [];
		for ( let i = 0; i < vals.length; i++ ) {
			let x = vals[ i ];
			if ( isNonMissingNumber( x ) ) {
				nonmissing.push( x );
			}
		}
		vals = nonmissing;
		traces = [ {
			x: vals,
			type: 'histogram',
			name: 'histogram'
		} ];
		traces[ 0 ] = setBins( traces[ 0 ], vals, binStrategy, nBins, xbins );
		if ( displayDensity ) {
			if ( densityType ) {
				const [ x, y ] = calculateDensityValues( vals, densityType );
				traces.push({
					x: x,
					y: y,
					type: 'lines',
					name: densityType+' density'
				});
			}
			traces[ 0 ][ 'histnorm' ] = 'probability density';
		}
		layout = {
			xaxis: { title: variable },
			yaxis: {
				title: displayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			reversescale: true,
			title: variable,
			...SETTINGS
		};
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			let nonmissing = [];
			for ( let i = 0; i < arr.length; i++ ) {
				let x = arr[ i ];
				if ( isNonMissingNumber( x ) ) {
					nonmissing.push( x );
				}
			}
			return nonmissing;
		});
		traces = [];
		const keys = extractUsedCategories( freqs, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / nCols );
		if ( groupMode === 'Facets' ) {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				let vals = freqs[ key ];
				if ( displayDensity ) {
					const config = {
						x: vals,
						type: 'histogram',
						histnorm: 'probability density',
						name: densityType ? key+':histogram' : key,
						xaxis: 'x'+(i+1),
						yaxis: 'y'+(i+1)
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
					if ( densityType ) {
						const [ x, y ] = calculateDensityValues( vals, densityType );
						traces.push({
							x: x,
							y: y,
							type: 'lines',
							name: key+':density',
							xaxis: 'x'+(i+1),
							yaxis: 'y'+(i+1)
						});
					}
				} else {
					const config = {
						x: vals,
						type: 'histogram',
						name: key,
						xaxis: 'x'+(i+1),
						yaxis: 'y'+(i+1)
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				let vals = freqs[ key ];
				if ( displayDensity ) {
					const config = {
						x: vals,
						type: 'histogram',
						histnorm: 'probability density',
						name: densityType ? key+':histogram' : key,
						opacity: 0.5
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
					if ( densityType ) {
						const [ x, y ] = calculateDensityValues( vals, densityType );
						traces.push({
							x: x,
							y: y,
							type: 'lines',
							name: key+':density'
						});
					}
				} else {
					const config = {
						x: vals,
						type: 'histogram',
						name: key,
						opacity: 0.5
					};
					setBins( config, vals, binStrategy, nBins, xbins );
					traces.push( config );
				}
			}
		}
		layout = {
			yaxis: {
				title: displayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			title: `${variable} given ${group}`,
			...SETTINGS
		};
		if ( groupMode === 'Facets' ) {
			layout.grid = { rows: nRows, columns: nCols, pattern: 'independent' };
			layout.height = 300 + ( ( nRows - 1 ) * 150 );
		} else {
			layout.barmode = 'overlay';
			layout.xaxis = { title: variable };
		}
	}
	return {
		data: traces,
		layout: layout
	};
}


// MAIN //

function Histogram( props ) {
	const config = generateHistogramConfig( props );
	return (
		<Plotly
			editable
			draggable
			id={props.id}
			fit
			meta={props.action}
			data={config.data}
			layout={config.layout}
			onShare={props.onShare}
			onSelected={( selected ) => {
				this.props.onSelected( props.variable, selected );
			}}
		/>
	);
}


// EXPORTS //

export default Histogram;
