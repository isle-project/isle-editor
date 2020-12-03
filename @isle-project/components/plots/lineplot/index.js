// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Plotly from '@isle-project/components/plotly';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';


// FUNCTIONS //

export function generateLineplotConfig({ data, x, y, group, showPoints }) {
	let traces;
	const nobs = data[ y ].length;
	const type = nobs > 2000 ? 'scattergl' : 'scatter';
	const mode = showPoints ? 'lines+markers' : 'lines';
	if ( !group ) {
		traces = [
			{
				x: data[ x ],
				y: data[ y ],
				type,
				mode
			}
		];
	} else {
		let xgrouped;
		if ( x ) {
			xgrouped = by( data[ x ], data[ group ], arr => {
				return arr;
			});
		} else {
			xgrouped = {};
		}
		const ygrouped = by( data[ y ], data[ group ], arr => {
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
			title: x ? `${y} against ${x}` : y,
			xaxis: {
				title: x ? x : 'Index'
			},
			yaxis: {
				title: y
			}
		}
	};
	return config;
}


// MAIN //

const LinePlot = ({ data, x, y, group, showPoints, id, action, onShare }) => {
	const config = generateLineplotConfig({
		data,
		x,
		y,
		group,
		showPoints
	});
	return ( <Plotly
		editable draggable id={id} fit
		data={config.data} layout={config.layout}
		meta={action}
		onShare={onShare} />
	);
};


// PROPERTIES //

LinePlot.defaultProps = {
	x: null,
	group: null,
	showPoints: false
};

LinePlot.propTypes = {
	data: PropTypes.object.isRequired,
	x: PropTypes.string,
	y: PropTypes.string.isRequired,
	group: PropTypes.string,
	showPoints: PropTypes.bool
};


// EXPORTS //

/**
* A line plot.
*
* @property {Object} data - object of value arrays for each variable
* @property {string} x - x-axis variable
* @property {string} y - y-axis variable
* @property {string} group - grouping variable
* @property {boolean} showPoints - controls whether to overlay points at each observation
*/
export default LinePlot;
