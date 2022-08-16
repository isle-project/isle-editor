// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import statistic from '@isle-project/utils/statistic';
import by2 from '@isle-project/utils/by2';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';
import emptyPlotConfig from '@isle-project/utils/empty-plot-config';


// VARIABLES //

const MAX_CATEGORIES = 150;


// FUNCTIONS //

export function generateBarchartConfig({ data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, colors, direction }) {
	let traces;
	if ( !data[ variable ] ) {
		return {};
	}
	const nObs = data[ variable ].length;
	const allCats = new Set();
	if ( !group ) {
		let freqs;
		if ( yvar ) {
			if ( !data[ yvar ] ) {
				return {};
			}
			freqs = by( data[ yvar ], data[ variable ], statistic( summary ) );
		} else {
			freqs = countBy( data[ variable ], identity );
		}
		const categories = extractUsedCategories( freqs, variable );
		for ( let i = 0; i < categories.length; i++ ) {
			categories[ i ] = String( categories[ i ] );
			allCats.add( categories[ i ] );
		}
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		if ( totalPercent ) {
			for ( let i = 0; i < counts.length; i++ ) {
				counts[ i ] = counts[ i ] / nObs;
			}
		}
		if ( horizontal ) {
			traces = [ {
				y: categories,
				x: counts,
				type: 'bar',
				orientation: 'h',
				marker: {
					color: colors[ 0 ]
				}
			} ];
		} else {
			traces = [ {
				y: counts,
				x: categories,
				type: 'bar',
				marker: {
					color: colors[ 0 ]
				}
			} ];
		}
	} else {
		let freqs;
		if ( !data[ group ] ) {
			return {};
		}
		if ( yvar ) {
			if ( !data[ yvar ] ) {
				return {};
			}
			freqs = by2( data[ group ], data[ yvar ], data[ variable ], ( labels, vals ) => {
				return by( vals, labels, statistic( summary ) );
			});
		} else {
			freqs = by( data[ group ], data[ variable ], arr => {
				return countBy( arr, identity );
			});
		}
		traces = [];
		const keys = extractUsedCategories( freqs, variable );
		if ( relative ) {
			const catCounts = countBy( data[ group ], identity );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = extractUsedCategories( val, group );
				categories.forEach( allCats.add, allCats );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ] / catCounts[ categories[ i ] ];
				}
				if ( totalPercent ) {
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
				}
				if ( horizontal ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h',
						marker: {
							color: colors[ i ]
						}
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key,
						marker: {
							color: colors[ i ]
						}
					});
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = extractUsedCategories( val, group );
				categories.forEach( allCats.add, allCats );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ];
				}
				if ( totalPercent ) {
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
				}
				if ( horizontal ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h',
						marker: {
							color: colors[ i ]
						}
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key,
						marker: {
							color: colors[ i ]
						}
					});
				}
			}
		}
	}
	let xaxis;
	let yaxis;
	if ( horizontal ) {
		xaxis = {
			title: ( totalPercent || relative ) ? i18n.t('plotly:proportion') : i18n.t('plotly:count')
		};
		yaxis = {
			title: group ? group : variable,
			categoryorder: xOrder ? xOrder + ' ' + direction : null,
			type: 'category',
			tickmode: 'array',
			tickvals: Array.from( allCats ),
			ticktext: Array.from( allCats ),
			ticklen: 15,
			tickcolor: 'white'
		};
	} else {
		xaxis = {
			title: group ? group : variable,
			categoryorder: xOrder ? xOrder + ' ' + direction : null,
			type: 'category',
			tickmode: 'array',
			tickvals: Array.from( allCats ),
			ticktext: Array.from( allCats ),
			ticklen: 15,
			tickcolor: 'white'
		};
		yaxis = {
			title: ( totalPercent || relative ) ? i18n.t('plotly:proportion') : i18n.t('plotly:Count')
		};
	}
	if ( allCats.size > MAX_CATEGORIES ) {
		return emptyPlotConfig( i18n.t( 'plotly:too-many-categories' ) );
	}
	return {
		data: traces,
		layout: {
			barmode: stackBars ? 'stack' : null,
			xaxis,
			yaxis,
			title: group ? `${variable} ${i18n.t('plotly:given')} ${group}` : variable,
			hovermode: 'closest'
		}
	};
}


// MAIN //

/**
* Bar chart.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {boolean} stackBars - when grouping, controls whether to stack bars on top of each other
* @property {boolean} relative - whether to calculate relative frequencies inside each group
* @property {boolean} totalPercent - whether to display overall bars as relative frequencies
* @property {string} yvar - optional variable used for the column heights (in conjunction with `summary`)
* @property {string} summary - name of statistic to compute for `yvar` and to be displayed as bar height for each category (either `Min`, `Max`, `Mean`, `Median`, `Sum`, ...)
* @property {boolean} horizontal - whether to display bars horizontally
* @property {string} xOrder - either `total`, `category`, `min`, `max`, `mean`, or `median`
* @property {string} direction - how to order bars alongside x-axis (`ascending` or `descending`)
* @property {Array} colors - either a single-element array with a color for the bars or an array of colors for each category when grouping
*/
const BarChart = ({ id, data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, direction, action, colors, onShare, onSelected }) => {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateBarchartConfig({ data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, direction, colors });
	}, [ data, direction, colors, group, horizontal, relative, stackBars, summary, totalPercent, variable, xOrder, yvar ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
	return (
		<Plotly
			editable
			draggable
			id={id}
			fit
			data={config.data}
			layout={config.layout}
			meta={action}
			onShare={onShare}
			onSelected={( selected ) => {
				if ( onSelected ) {
					onSelected( variable, selected );
				}
			}}
		/>
	);
};


// PROPERTIES //

BarChart.defaultProps = {
	group: null,
	horizontal: false,
	stackBars: false,
	relative: false,
	totalPercent: false,
	yvar: null,
	summary: null,
	xOrder: null,
	direction: 'ascending'
};

BarChart.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	yvar: PropTypes.string,
	summary: PropTypes.oneOf([ 'Mean', 'Median', 'Min', 'Max', 'Sum' ]),
	horizontal: PropTypes.bool,
	stackBars: PropTypes.bool,
	relative: PropTypes.bool,
	totalPercent: PropTypes.bool,
	xOrder: PropTypes.oneOf([ 'total', 'category', 'min', 'max', 'mean', 'median' ]),
	direction: PropTypes.oneOf([ 'ascending', 'descending' ])
};


// EXPORTS //

export default withPropCheck( BarChart );
