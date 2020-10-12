// MODULES //

import React from 'react';
import Plotly from 'components/plotly';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import extractUsedCategories from 'utils/extract-used-categories';
import sum from 'utils/statistic/sum';
import by from 'utils/by';


// VARIABLES //

const MODES = [
	'Counts of unique values',
	'Values from a second variable'
];


// FUNCTIONS //

export function generatePiechartConfig({ data, variable, group, mode, summaryVariable }) {
	let annotations;
	let traces;
	if ( !group ) {
		let freqs;
		if ( mode === MODES[ 1 ] ) {
			freqs = by( data[ summaryVariable ], data[ variable ], sum );
		} else {
			freqs = countBy( data[ variable ], identity );
		}
		const categories = extractUsedCategories( freqs, variable );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		traces = [ {
			values: counts,
			labels: categories,
			type: 'pie'
		} ];
	} else {
		const freqs = by( data[ variable ], data[ group ], arr => {
			return countBy( arr, identity );
		});
		const keys = extractUsedCategories( freqs, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = [];

		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = freqs[ key ];
			const categories = extractUsedCategories( val, variable.categories );
			const counts = new Array( categories.length );
			for ( let i = 0; i < categories.length; i++ ) {
				counts[ i ] = val[ categories[ i ] ];
			}
			traces.push({
				values: counts,
				labels: categories,
				type: 'pie',
				name: key,
				domain: {
					x: [ ( col ) / nCols, ( col+1 ) / nCols ],
					y: [ ( row ) / nRows, ( row+0.8 ) / nRows ]
				}
			});
			annotations.push({
				text: key,
				x: ( col % 2 ? col+0.8 : col+0.2 ) / nCols,
				y: ( row+0.9 ) / nRows,
				font: {
					size: 18
				},
				showarrow: false
			});
		}
	}
	const layout = {
		annotations,
		title: group ? `${variable} given ${group}` : variable
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

function PieChart({ variable, group, data, mode, summaryVariable, id, action, onShare }) {
	const config = generatePiechartConfig({
		data,
		variable,
		group,
		mode,
		summaryVariable
	});
	return ( <Plotly
		editable
		draggable
		id={id}
		fit
		meta={action}
		data={config.data}
		layout={config.layout}
		onShare={onShare}
	/> );
}


// EXPORTS //

export default PieChart;
