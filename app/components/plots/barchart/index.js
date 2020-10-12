// MODULES //

import React from 'react';
import Plotly from 'components/plotly';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import extractUsedCategories from 'utils/extract-used-categories';
import statistic from 'utils/statistic';
import by2 from 'utils/by2';
import by from 'utils/by';


// VARIABLES //

const MODES = [
	'Counts of distinct values',
	'Function evaluated for a variable'
];


// FUNCTIONS //

export function generateBarchartConfig({ data, variable, yvar, summary, group, horiz, mode, stackBars, relative, totalPercent, xOrder, direction }) {
	let traces;
	const nObs = data[ variable ].length;
	const allCats = new Set();
	if ( !group ) {
		let freqs;
		if ( mode === MODES[ 1 ] ) {
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
		if ( horiz ) {
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
		if ( mode === MODES[ 1 ] ) {
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
				if ( horiz ) {
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
				if ( horiz ) {
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
	if ( horiz ) {
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

const BarChart = ( props ) => {
	const config = generateBarchartConfig( props );
	return (
		<Plotly
			editable
			draggable
			id={props.id}
			fit
			data={config.data}
			layout={config.layout}
			meta={props.action}
			onShare={props.onShare}
			onSelected={( selected ) => {
				props.onSelected( props.variable, selected );
			}}
		/>
	);
};


// EXPORTS //

export default BarChart;
