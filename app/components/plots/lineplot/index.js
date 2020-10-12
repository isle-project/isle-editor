// MODULES //

import React from 'react';
import Plotly from 'components/plotly';
import extractUsedCategories from 'utils/extract-used-categories';
import by from 'utils/by';


// FUNCTIONS //

export function generateLineplotConfig({ data, xvar, yvar, group, showPoints }) {
	let traces;
	const nobs = data[ yvar ].length;
	const type = nobs > 2000 ? 'scattergl' : 'scatter';
	const mode = showPoints ? 'lines+markers' : 'lines';
	if ( !group ) {
		traces = [
			{
				x: data[ xvar ],
				y: data[ yvar ],
				type,
				mode
			}
		];
	} else {
		let xgrouped;
		if ( xvar ) {
			xgrouped = by( data[ xvar ], data[ group ], arr => {
				return arr;
			});
		} else {
			xgrouped = {};
		}
		const ygrouped = by( data[ yvar ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		const keys = extractUsedCategories( ygrouped, group );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			traces.push({
				name: key,
				x: xgrouped[ key ],
				y: ygrouped[ key ],
				type,
				mode
			});
		}
	}
	const config = {
		data: traces,
		layout: {
			title: xvar ? `${yvar} against ${xvar}` : yvar,
			xaxis: {
				title: xvar ? xvar : 'Index'
			},
			yaxis: {
				title: yvar
			}
		}
	};
	return config;
}


// MAIN //

function LinePlot({ data, xvar, yvar, group, showPoints, id, action, onShare }) {
	const config = generateLineplotConfig({
		data,
		xvar,
		yvar,
		group,
		showPoints
	});
	return ( <Plotly
		editable draggable id={id} fit
		data={config.data} layout={config.layout}
		meta={action}
		onShare={onShare} />
	);
}


// EXPORTS //

export default LinePlot;
