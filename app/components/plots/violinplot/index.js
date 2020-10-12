// MODULES //

import React from 'react';
import Plotly from 'components/plotly';
import extractUsedCategories from 'utils/extract-used-categories';
import by from 'utils/by';


// FUNCTIONS //

export function generateViolinplotConfig({ data, variable, group, showBox }) {
	let traces;
	if ( !group ) {
		let values = data[ variable ];
		traces = [ {
			y: values,
			type: 'violin',
			name: variable,
			box: {
				visible: showBox
			}
		} ];
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		const keys = extractUsedCategories( freqs, group );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const val = freqs[ key ];
			traces.push({
				y: val,
				name: key,
				type: 'violin',
				box: {
					visible: showBox
				}
			});
		}
	}
	return {
		data: traces,
		layout: {
			title: group ? `${variable} given ${group}` : variable,
			xaxis: {
				type: 'category'
			}
		}
	};
}


// MAIN //

function ViolinPlot({ data, variable, id, group, showBox, action, onShare }) {
	const config = generateViolinplotConfig({ data, variable, group, showBox });
	return (
		<Plotly
			editable
			id={id}
			fit
			meta={action}
			draggable
			data={config.data}
			layout={config.layout}
			onShare={onShare}
		/>
	);
}


// EXPORTS //

export default ViolinPlot;
