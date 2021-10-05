// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/array/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import mapValues from '@stdlib/utils/map-values';
import groupBy from '@stdlib/utils/group-by';
import group from '@stdlib/utils/group';
import unique from 'uniq';
import max from '@isle-project/utils/statistic/max';
import min from '@isle-project/utils/statistic/min';
import calculateCoefficients from '@isle-project/utils/linear-regression/calculate_coefficients.js';
import { CAT20 } from '@isle-project/constants/colors';
import { Factor } from '@isle-project/utils/factor-variable';
import { withPropCheck } from '@isle-project/utils/prop-check';
import jitterPoints from './jitter_points.js';
import minmax from './minmax.js';


// VARIABLES //

const SYMBOLS = [
	'circle',
	'square-open',
	'diamond',
	'hexagon-open',
	'cross-open',
	'star-open',
	'pentagon',
	'triangle-up',
	'circle-open',
	'bowtie',
	'star',
	'triangle-down',
	'hexagram',
	'hourglass',
	'diamond-cross',
	'square-cross',
	'star-square',
	'star-square-open'
];


// FUNCTIONS //

/**
 * Scales elements of a data array to the range [a,b].
 *
 * @param {Array} arr - array of data
 * @param {number} a - minimum value
 * @param {number} b - maximum value
 * @returns {Array} scaled data
 */
function scale( arr, a, b ) {
	const [ minimum, maximum ] = minmax( arr );
	const range = maximum - minimum;
	const out = new Array( arr.length );
	for ( let i = 0; i < out.length; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			out[ i ] = NaN;
		} else {
			out[ i ] = ( ( b - a ) * ( arr[ i ] - minimum ) / range ) + a;
		}
	}
	return out;
}

export function generateScatterplotConfig({ data, xval, yval, text, color, type, size, regressionLine, regressionMethod, lineBy, smoothSpan, jitterX, jitterY }) {
	let textValues;
	let nColors;
	let traces;
	let colors;
	let sizes;
	let types;
	let x;
	let y;

	let mode = 'markers';
	if ( text ) {
		mode += '+text';
	}
	const nobs = data[ xval ].length;
	if ( color ) {
		colors = data[ color ];
		colors = colors.map( x => isUndefinedOrNull( x ) ? String( x ) : x );
	}
	if ( type ) {
		types = data[ type ];
		types = types.map( x => isUndefinedOrNull( x ) ? String( x ) : x );
	}
	if ( size ) {
		sizes = data[ size ];
	}
	if ( text ) {
		textValues = data[ text ];
	}
	x = data[ xval ];
	y = data[ yval ];
	if ( jitterX ) {
		x = jitterPoints( x );
	}
	if ( jitterY ) {
		y = jitterPoints( y );
	}
	if ( color && type ) {
		const uniqueColors = colors.slice();
		unique( uniqueColors );
		nColors = uniqueColors.length;
		const uniqueTypes = types.slice();
		unique( uniqueTypes );

		traces = [];
		const xgrouped = groupBy( x, ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		const ygrouped = groupBy( y, ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		let texts;
		if ( text ) {
			texts = groupBy( data[ text ], ( v, i ) => {
				return colors[ i ] + ':' + types[ i ];
			});
		}
		let sizegrouped;
		if ( size ) {
			sizegrouped = groupBy( sizes, ( v, i ) => {
				return colors[ i ] + ':' + types[ i ];
			});
			sizegrouped = mapValues( sizegrouped, ( value ) => {
				return scale( value, 5.0, 10.0 );
			});
		}
		for ( let i = 0; i < uniqueColors.length; i++ ) {
			for ( let j = 0; j < uniqueTypes.length; j++ ) {
				const grouping = uniqueColors[ i ] + ':' + uniqueTypes[ j ];
				const trace = {
					x: xgrouped[ grouping ],
					y: ygrouped[ grouping ],
					type: nobs > 2000 ? 'scattergl' : 'scatter',
					mode: mode,
					name: grouping,
					marker: {
						symbol: SYMBOLS[ j ],
						size: size ? sizegrouped[ grouping ] : 5.0,
						autocolorscale: false,
						color: CAT20[ i ]
					}
				};
				if ( text ) {
					trace.text = texts[ grouping ];
					trace.textposition = 'bottom';
				}
				traces.push( trace );
			}
		}
	}
	else if ( type ) {
		const groups = types.slice();
		unique( groups );
		const xgrouped = group( x, types );
		const ygrouped = group( y, types );
		let texts;
		if ( text ) {
			texts = group( textValues, types );
		}
		traces = new Array( groups.length );
		for ( let i = 0; i < groups.length; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: nobs > 2000 ? 'scattergl' : 'scatter',
				mode: mode,
				name: groups[ i ],
				marker: {
					symbol: SYMBOLS[ i ],
					size: size ? scale( group( sizes, data[ type ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: 'rgba(0,0,0,1)'
				}
			};
			if ( text ) {
				traces[ i ].text = texts[ groups[ i ] ];
				traces[ i ].textposition = 'bottom';
			}
		}
	}
	else if ( color ) {
		const groups = colors.slice();
		unique( groups );
		nColors = groups.length;
		const xgrouped = group( x, colors );
		const ygrouped = group( y, colors );
		let texts;
		if ( text ) {
			texts = group( textValues, colors );
		}
		traces = new Array( nColors );
		for ( let i = 0; i < nColors; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: nobs > 2000 ? 'scattergl' : 'scatter',
				mode: mode,
				name: groups[ i ],
				marker: {
					symbol: 'circle',
					size: size ? scale( group( sizes, colors)[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: CAT20[ i ]
				}
			};
			if ( text ) {
				traces[ i ].text = texts[ groups[ i ] ];
				traces[ i ].textposition = 'bottom';
			}
		}
	} else {
		traces = [ {
			x: x,
			y: y,
			type: nobs > 2000 ? 'scattergl' : 'scatter',
			mode: mode,
			name: i18n.t('plotly:points'),
			marker: {
				symbol: 'circle',
				size: size ? scale( data[ size ], 5.0, 10.0 ) : 5.0
			}
		} ];
		if ( text ) {
			traces[ 0 ].text = textValues;
			traces[ 0 ].textposition = 'bottom';
		}
	}

	if ( regressionLine ) {
		if ( lineBy ) {
			const groups = data[ lineBy ].slice();
			unique( groups );
			const xgrouped = {};
			const ygrouped = {};
			for ( let i = 0; i < groups.length; i++ ) {
				xgrouped[ groups[ i ] ] = [];
				ygrouped[ groups[ i ] ] = [];
			}
			for ( let i = 0; i < data[ lineBy ].length; i++ ) {
				const group = data[ lineBy ][ i ];
				if ( !isUndefinedOrNull( group ) ) {
					if (
						isNumber( x[ i ] ) && isNumber( y[ i ] ) &&
						!isnan( x[ i ] ) && !isnan( y[ i ] )
					) {
						xgrouped[ group ].push( x[ i ] );
						ygrouped[ group ].push( y[ i ] );
					}
				}
			}
			let colorOffset = 0;
			if ( color && color !== lineBy ) {
				colorOffset += nColors;
			}
			for ( let i = 0; i < groups.length; i++ ) {
				const xvals = xgrouped[ groups[ i ] ];
				const yvals = ygrouped[ groups[ i ] ];
				let predictedLinear;
				let predictedSmooth;
				let values;
				if ( xvals.length === 0 || yvals.length === 0 ) {
					continue;
				}
				if ( contains( regressionMethod, 'linear' ) ) {
					values = linspace( min( xvals ), max( xvals ), 100 );
					const coefs = calculateCoefficients( xvals, yvals );
					predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
					traces.push({
						x: values,
						y: predictedLinear,
						mode: 'lines',
						name: groups[ i ],
						type: 'line',
						line: {
							color: CAT20[ colorOffset+i ],
							width: 1.5
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
						name: groups[ i ],
						type: 'line',
						line: {
							color: CAT20[ colorOffset+i ],
							width: 1.5
						}
					});
				}
			}
		} else {
			let xvals = x;
			let yvals = y;
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
					name: i18n.t('plotly:linear-fit'),
					type: 'line'
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
					name: i18n.t('plotly:smoothed-fit'),
					type: 'line'
				});
			}
		}
	}
	return {
		data: traces,
		layout: {
			hovermode: 'closest',
			xaxis: {
				title: xval
			},
			yaxis: {
				title: yval
			},
			legend: {
				traceorder: 'normal',
				font: {
					family: 'sans-serif',
					size: 10,
					color: '#000'
				},
				bordercolor: '#E2E2E2',
				borderwidth: 2
			},
			title: `${yval} ${i18n.t('plotly:vs')} ${xval}`
		}
	};
}


// MAIN //

function ScatterPlot({ id, data, xval, yval, text, color, type, size, regressionLine, regressionMethod, lineBy, smoothSpan, jitterX, jitterY, action, onShare, onSelected }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateScatterplotConfig({ data, xval, yval, text, color, type, size, regressionLine, regressionMethod, lineBy, smoothSpan, jitterX, jitterY });
	}, [ color, data, lineBy, regressionLine, regressionMethod, size, smoothSpan, text, type, xval, yval, jitterX, jitterY ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
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
					onSelected({ x: xval, y: yval }, selected );
				}
			}}
		/>
	);
}


// PROPERTIES //

ScatterPlot.defaultProps = {
	text: null,
	color: null,
	type: null,
	size: null,
	lineBy: null,
	regressionLine: false,
	regressionMethod: [ 'linear' ],
	smoothSpan: 0.66,
	jitterX: false,
	jitterY: false
};

ScatterPlot.propTypes = {
	data: PropTypes.object.isRequired,
	xval: PropTypes.string.isRequired,
	yval: PropTypes.string.isRequired,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	type: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	size: PropTypes.string,
	regressionLine: PropTypes.bool,
	regressionMethod: PropTypes.arrayOf( PropTypes.oneOf([ 'linear', 'smooth' ]) ),
	lineBy: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	smoothSpan: PropTypes.number,
	jitterX: PropTypes.bool,
	jitterY: PropTypes.bool
};


// EXPORTS //

/**
* A scatter plot.
*
* @property {Object} data - object of value arrays for each variable
* @property {string} xval - variable to display on the x-axis
* @property {string} yval - variable to display on the y-axis
* @property {(string|Factor)} text - texts to be displayed next to each point
* @property {(string|Factor)} type - categorical variable to map to the displayed symbols
* @property {string} size - quantitative variable to map to the size of the points
* @property {(string|Factor)} color - categorical variable to map to color of points
* @property {boolean} regressionLine - controls whether to overlay regression line(s)
* @property {Array<string>} regressionMethod - `linear` and/or `smooth` to display linear regression and smoothed LOWESS regression line
* @property {number} smoothSpan - smoothing span parameter for `smooth` regression line
* @property {(string|Factor)} lineBy - display separate regression line for each category of specified categorical variable
* @property {boolean} jitterX - controls whether to jitter points on the x-axis
* @property {boolean} jitterY - controls whether to jitter points on the y-axis
*/
export default withPropCheck( ScatterPlot );
