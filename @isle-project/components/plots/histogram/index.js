// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isArray from '@stdlib/assert/is-array';
import ceil from '@stdlib/math/base/special/ceil';
import Plotly from '@isle-project/components/plotly';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import by from '@isle-project/utils/by';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import calculateDensityValues from './calculate_density_values.js';
import emptyPlotConfig from '@isle-project/utils/empty-plot-config';


// VARIABLES //

const MAX_CATEGORIES = 50;


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

export function generateHistogramConfig({ data, variable, group, title, groupMode, nCols, displayDensity, densityType = [], densityParams = {}, bandwidthAdjust, binStrategy, nBins, xBins = {}, sameXRange, sameYRange }) {
	let traces;
	let layout;
	let keys;

	if ( !isArray( densityType ) ) {
		densityType = [ densityType ];
	}
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
			for ( let i = 0; i < densityType.length; i++ ) {
				const type = densityType[ i ];
				let params;
				if ( isArray( densityParams ) ) {
					params = densityParams;
				} else {
					params = densityParams[ type ] || [];
				}
				const [ x, y ] = calculateDensityValues( vals, type, params, bandwidthAdjust );
				traces.push({
					x: x,
					y: y,
					type: 'lines',
					name: type+' density'
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
			title: title || variable,
			selectdirection: 'h'
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
		keys = extractUsedCategories( freqs, group );
		if ( keys.length > MAX_CATEGORIES ) {
			return emptyPlotConfig( i18n.t( 'plotly:too-many-categories' ) );
		}
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
					for ( let i = 0; i < densityType.length; i++ ) {
						const type = densityType[ i ];
						let params;
						if ( isArray( densityParams ) ) {
							params = densityParams;
						} else {
							params = densityParams[ type ] || [];
						}
						const [ x, y ] = calculateDensityValues( vals, type, params, bandwidthAdjust );
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
					for ( let i = 0; i < densityType.length; i++ ) {
						const [ x, y ] = calculateDensityValues( vals, densityType[ i ], bandwidthAdjust );
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
			title: title || `${variable} ${i18n.t('plotly:given')} ${group}`
		};
		if ( groupMode === 'Facets' ) {
			layout.grid = { rows: nRows, columns: nCols, pattern: 'independent' };
			layout.height = 300 + ( ( nRows - 1 ) * 150 );
			if ( sameXRange ) {
				for ( let i = 1; i <= keys.length; i++ ) {
					layout[ 'xaxis'+i ] = { matches: 'x' };
				}
			}
			if ( sameYRange ) {
				for ( let i = 1; i <= keys.length; i++ ) {
					layout[ 'yaxis'+i ] = { matches: 'y' };
				}
			}
		} else {
			layout.barmode = 'overlay';
			layout.hovermode = 'x';
			layout.xaxis = { title: variable };
		}
	}
	return {
		data: traces,
		layout: layout
	};
}


// MAIN //

function Histogram({ id, data, variable, group, title, groupMode, nCols, displayDensity, densityType, densityParams, bandwidthAdjust, binStrategy, nBins, xBins, sameXRange, sameYRange, action, onShare, onSelected }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateHistogramConfig({ data, variable, group, title, groupMode, nCols, displayDensity, densityType: isArray( densityType ) ? densityType : [ densityType ], densityParams, bandwidthAdjust, binStrategy, nBins, xBins, sameXRange, sameYRange });
	}, [ bandwidthAdjust, binStrategy, data, densityType, densityParams, displayDensity, group, title, groupMode, nBins, nCols, variable, xBins, sameXRange, sameYRange ] );
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
	title: null,
	displayDensity: false,
	densityParams: [],
	densityType: null,
	bandwidthAdjust: 1,
	binStrategy: 'Automatic',
	nBins: null,
	nCols: null,
	xBins: {},
	sameXRange: false,
	sameYRange: false
};

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	title: PropTypes.string,
	groupMode: PropTypes.oneOf([ 'Overlay', 'Facets' ]),
	displayDensity: PropTypes.bool,
	densityType: PropTypes.oneOfType([
		PropTypes.oneOf( [ 'Data-driven', 'Normal', 'Uniform', 'Exponential', 'T', 'Chi-squared' ] ),
		PropTypes.arrayOf( PropTypes.oneOf( [ 'Data-driven', 'Normal', 'Uniform', 'Exponential', 'T', 'Chi-squared' ] ) )
	]),
	densityParams: PropTypes.oneOfType([ PropTypes.arrayOf( PropTypes.number ), PropTypes.any ]),
	bandwidthAdjust: PropTypes.number,
	binStrategy: PropTypes.oneOf( [ 'Automatic', 'Select # of bins', 'Set bin width' ] ),
	nBins: PropTypes.number,
	nCols: PropTypes.number,
	xBins: PropTypes.shape({
		start: PropTypes.number,
		size: PropTypes.number,
		end: PropTypes.number
	}),
	sameXRange: PropTypes.bool,
	sameYRange: PropTypes.bool
};


// EXPORTS //

/**
* A histogram.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {string} title - title of histogram
* @property {(string|Factor)} groupMode - whether to overlay grouped histograms on top of each other (`Overlay`) or in separate plots next to each other (`Facets`)
* @property {boolean} displayDensity - controls whether to display density values instead of counts on the y-axis
* @property {(string|Array<string>)} densityType - when displaying densities, one can either overlay parametric distribution(s) (`Normal`, `Uniform`, `T`, 'Chi-squared`, or `Exponential`) and/or a non-parametric kernel density estimate (`Data-driven`)
* @property {(Array<number>|Object)} densityParams - distribution parameters for the density when a parametric distribution is used ([mu, sigma] for a normal distribution, [a, b] for a uniform distribution, [lambda] for an exponential distribution) or an object mapping distribution names to parameters when multiple densities should be displayed (e.g., `{'Normal': [mu, sigma], 'Uniform': [a, b]}, 'Exponential': [lambda]}`)
* @property {number} bandwidthAdjust - manual adjustment of bandwidth of kernel density (applicable only when `densityType` is set to `Data-driven`)
* @property {string} binStrategy - binning strategy (`Automatic`, `Select # of bins`, or `Set bin width`)
* @property {number} nBins - custom number of bins
* @property {number} nCols - number of columns when displaying a facetted grouped histogram
* @property {Object} xBins - object with `start`, `size`, and `end` properties governing binning behavior
* @property {boolean} sameXRange - if true, the x-axis range for each facet will be the same as the overall histogram
* @property {boolean} sameYRange - if true, the y-axis range for each facet will be the same as the overall histogram
*/
export default withPropCheck( Histogram );
