// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import ceil from '@stdlib/math/base/special/ceil';
import Plotly from '@isle-project/components/plotly';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import by from '@isle-project/utils/by';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import calculateDensityValues from './calculate_density_values.js';


// VARIABLES //

const SETTINGS = {
	yaxis: {
		tickformat: '-,.4r'
	},
	selectdirection: 'h'
};


// FUNCTIONS //

function setBins( config, vals, binStrategy, nBins, xbins ) {
	const maxVal = isNumber( xbins.end ) ? xbins.end : max( vals );
	const minVal = isNumber( xbins.start ) ? xbins.start : min( vals );
	if ( binStrategy === 'Select # of bins' ) {
		const sizeVal = ( maxVal - minVal + 1e-3 ) / nBins;
		config.autobinx = false;
		config.xbins = {
			size: sizeVal,
			start: minVal - sizeVal,
			end: maxVal + sizeVal
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

export function generateHistogramConfig({ data, variable, group, groupMode, nCols, displayDensity, densityType, bandwidthAdjust, binStrategy, nBins, xBins = {}}) {
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
		traces[ 0 ] = setBins( traces[ 0 ], vals, binStrategy, nBins, xBins );
		if ( displayDensity ) {
			if ( densityType ) {
				const [ x, y ] = calculateDensityValues( vals, densityType, bandwidthAdjust );
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
					setBins( config, vals, binStrategy, nBins, xBins );
					traces.push( config );
					if ( densityType ) {
						const [ x, y ] = calculateDensityValues( vals, densityType, bandwidthAdjust );
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
					setBins( config, vals, binStrategy, nBins, xBins );
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
					setBins( config, vals, binStrategy, nBins, xBins );
					traces.push( config );
					if ( densityType ) {
						const [ x, y ] = calculateDensityValues( vals, densityType, bandwidthAdjust );
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
					setBins( config, vals, binStrategy, nBins, xBins );
					traces.push( config );
				}
			}
		}
		layout = {
			yaxis: {
				title: displayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			title: `${variable} ${i18n.t('plotly:given')} ${group}`,
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

function Histogram({ id, data, variable, group, groupMode, nCols, displayDensity, densityType, bandwidthAdjust, binStrategy, nBins, xBins, action, onShare, onSelected }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateHistogramConfig({ data, variable, group, groupMode, nCols, displayDensity, densityType, bandwidthAdjust, binStrategy, nBins, xBins });
	}, [ bandwidthAdjust, binStrategy, data, densityType, displayDensity, group, groupMode, nBins, nCols, variable, xBins ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
	return (
		<Plotly
			editable
			draggable
			id={id}
			fit
			meta={action}
			data={config.data}
			layout={config.layout}
			onShare={onShare}
			onSelected={( selected ) => {
				if ( onSelected ) {
					onSelected( variable, selected );
				}
			}}
		/>
	);
}


// PROPERTIES //

Histogram.defaultProps = {
	group: null,
	groupMode: 'Overlay',
	displayDensity: false,
	densityType: null,
	bandwidthAdjust: 1,
	binStrategy: 'Automatic',
	nBins: null,
	nCols: null,
	xBins: {}
};

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	groupMode: PropTypes.oneOf([ 'Overlay', 'Facets' ]),
	displayDensity: PropTypes.bool,
	densityType: PropTypes.oneOf( [ 'Data-driven', 'Normal', 'Uniform', 'Exponential' ] ),
	bandwidthAdjust: PropTypes.number,
	binStrategy: PropTypes.oneOf( [ 'Automatic', 'Select # of bins', 'Set bin width' ] ),
	nBins: PropTypes.number,
	nCols: PropTypes.number,
	xBins: PropTypes.shape({
		start: PropTypes.number,
		size: PropTypes.number,
		end: PropTypes.number
	})
};


// EXPORTS //

/**
* A histogram.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {(string|Factor)} groupMode - whether to overlay grouped histograms on top of each other (`Overlay`) or in separate plots next to each other (`Facets`)
* @property {boolean} displayDensity - controls whether to display density values instead of counts on the y-axis
* @property {string} densityType - when displaying densities, one can either overlay a parametric distribution (`Normal`, `Uniform`, or `Exponential`) or a non-parametric kernel density estimate (`Data-driven`)
* @property {number} bandwidthAdjust - manual adjustment of bandwidth of kernel density (applicable only when `densityType` is set to `Data-driven`)
* @property {string} binStrategy - binning strategy (`Automatic`, `Select # of bins`, or `Set bin width`)
* @property {number} nBins - custom number of bins
* @property {number} nCols - number of columns when displaying a facetted grouped histogram
* @property {Object} xBins - object with `start`, `size`, and `end` properties governing binning behavior
*/
export default withPropCheck( Histogram );
