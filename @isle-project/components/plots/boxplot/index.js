// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import isnan from '@stdlib/assert/is-nan';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

export function generateBoxplotConfig({ data, variable, group, orientation, overlayPoints }) {
	let categoryarray;
	let traces;
	if ( group.length === 0 ) {
		const values = data[ variable ];
		const nonmissing = [];
		for ( let i = 0; i < values.length; i++ ) {
			const v = values[ i ];
			if ( isNonMissingNumber( v ) ) {
				nonmissing.push( v );
			}
		}
		const trace = {
			type: 'box',
			name: variable
		};
		if ( orientation === 'horizontal' ) {
			trace.x = nonmissing;
		} else {
			trace.y = nonmissing;
		}
		traces = [ trace ];
	}
	else if ( group.length === 1 ) {
		const freqs = by( data[ variable ], data[ group[0] ], arr => {
			return arr;
		});
		traces = [];
		const keys = extractUsedCategories( freqs, group[ 0 ] );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const values = freqs[ key ];
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			const trace = {
				name: key,
				type: 'box'
			};
			if ( orientation === 'horizontal' ) {
				trace.x = nonmissing;
			} else {
				trace.y = nonmissing;
			}
			traces.push( trace );
		}
	}
	else if ( group.length === 2 ) {
		const freqs = by( data[ variable ], data[ group[0] ], arr => {
			return arr;
		});
		const cats = by( data[ group[1] ], data[ group[0] ], arr => {
			return arr;
		});
		traces = [];
		const keys = extractUsedCategories( freqs, group[ 0 ] );
		const catKeys = extractCategoriesFromValues( data[ group[1] ], group[ 1 ] );
		categoryarray = catKeys;
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			let x;
			let y;
			const values = freqs[ key ];
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			if ( orientation === 'horizontal' ) {
				y = cats[ key ];
				x = nonmissing;
			} else {
				y = nonmissing;
				x = cats[ key ];
			}
			traces.push({
				x,
				y,
				name: key,
				type: 'box',
				orientation: orientation === 'horizontal' ? 'h' : 'v'
			});
		}
	}
	if ( overlayPoints ) {
		for ( let i = 0; i < traces.length; i++ ) {
			const trace = traces[ i ];
			trace.boxpoints = 'all';
			trace.jitter = 0.5;
		}
	}
	const layout = {
		title: group.length > 0 ? `${variable} ${i18n.t('Plotly:given')} ${group.join( ', ')}` : variable,
		xaxis: {
			title: orientation === 'vertical' && group.length === 2 ? group[ 1 ] : '',
			type: orientation === 'vertical' ? 'category' : null,
			showticklabels: ( group.length > 0 || orientation === 'horizontal' )
		},
		yaxis: {
			title: orientation === 'horizontal' && group.length === 2 ? group[ 1 ] : '',
			type: orientation === 'horizontal' ? 'category' : null,
			showticklabels: ( group.length > 0 || orientation === 'vertical' )
		}
	};
	if ( categoryarray ) {
		if ( orientation === 'horizontal' ) {
			layout.yaxis.categoryorder = 'array';
			layout.yaxis.categoryarray = categoryarray;
		} else {
			layout.xaxis.categoryorder = 'array';
			layout.xaxis.categoryarray = categoryarray;
		}
	}
	const config = {
		data: traces,
		layout
	};
	if ( group.length === 2 ) {
		config.layout.boxmode = 'group';
	}
	return config;
}


// MAIN //

/**
* A box plot.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {Array<string>} group - one or two grouping variables
* @property {string} orientation - `vertical` or `horizontal` orientation
* @property {boolean} overlayPoints - controls whether to overlay points
*/
const BoxPlot = ({ data, variable, group = [], orientation, overlayPoints, id, action, onShare }) =>{
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('Plotly:data-missing')}</Alert>;
	}
	const config = generateBoxplotConfig({
		data,
		variable,
		group,
		orientation,
		overlayPoints
	});
	return ( <Plotly
		editable
		draggable
		id={id}
		fit
		data={config.data}
		layout={config.layout}
		meta={action}
		onShare={onShare}
	/> );
};


// PROPERTIES //

BoxPlot.defaultProps = {
	group: null,
	orientation: 'vertical',
	overlayPoints: false
};

BoxPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.array,
	orientation: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
	overlayPoints: PropTypes.bool
};


// EXPORTS //

export default BoxPlot;
