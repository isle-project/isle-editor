// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Plotly from 'components/plotly';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import extractUsedCategories from 'utils/extract-used-categories';
import statistic from 'utils/statistic';
import by2 from 'utils/by2';
import by from 'utils/by';


// FUNCTIONS //

export function generateBarchartConfig({ data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, direction }) {
	let traces;
	const nObs = data[ variable ].length;
	const allCats = new Set();
	if ( !group ) {
		let freqs;
		if ( yvar ) {
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
				orientation: 'h'
			} ];
		} else {
			traces = [ {
				y: counts,
				x: categories,
				type: 'bar'
			} ];
		}
	} else {
		let freqs;
		if ( yvar ) {
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
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
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
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
					});
				}
			}
		}
	}
	let xaxis;
	let yaxis;
	if ( horizontal ) {
		xaxis = {
			title: ( totalPercent || relative ) ? 'Percentage' : 'Count'
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
			title: ( totalPercent || relative ) ? 'Percentage' : 'Count'
		};
	}
	return {
		data: traces,
		layout: {
			barmode: stackBars ? 'stack' : null,
			xaxis,
			yaxis,
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


// MAIN //

const BarChart = ({ id, data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, direction, action, onShare, onSelected }) => {
	const config = generateBarchartConfig({ data, variable, yvar, summary, group, horizontal, stackBars, relative, totalPercent, xOrder, direction });
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
	variable: PropTypes.string.isRequired,
	group: PropTypes.array,
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

/**
* Bar chart.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {string} group - grouping variable
* @property {boolean} stackBars - when grouping, controls whether to stack bars on top of each other
* @property {boolean} relative - whether to calculate relative frequencies inside each group
* @property {boolean} totalPercent - whether to display overall bars as relative frequencies
* @property {string} summary - name of statistic to compute for `yvar` and to be displayed as bar height for each category
* @property {boolean} horizontal - whether to display bars horizontally
* @property {string} xOrder - one of `total`, `category`, `min`, `max`, `mean`, or `median`
* @property {string} direction - how to order bars alongside x-axis (`ascending` or `descending`)
*/
export default BarChart;
