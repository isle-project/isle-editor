// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import isnan from '@stdlib/assert/is-nan';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isString from '@stdlib/assert/is-string';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// FUNCTIONS //

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}

export function generateBoxplotConfig({ data, variable, group = [], orientation, overlayPoints }) {
	let categoryarray;
	let traces;
	if ( isString.isPrimitive( variable ) ) {
		variable = [ variable ];
	}
	if ( isString( group ) ) {
		group = [ group ];
	}
	if ( group.length === 0 ) {
		traces = new Array( variable.length );
		for ( let i = 0; i < variable.length; i++ ) {
			const x = variable[ i ];
			const values = data[ x ];
			const nonmissing = [];
			for ( let i = 0; i < values.length; i++ ) {
				const v = values[ i ];
				if ( isNonMissingNumber( v ) ) {
					nonmissing.push( v );
				}
			}
			const trace = {
				type: 'box',
				name: x
			};
			if ( orientation === 'horizontal' ) {
				trace.x = nonmissing;
			} else {
				trace.y = nonmissing;
			}
			traces[ i ] = trace;
		}
	}
	else if ( group.length === 1 ) {
		const x = variable[ 0 ];
		const freqs = by( data[ x ], data[ group[0] ], arr => {
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
		const x = variable[ 0 ];
		const freqs = by( data[ x ], data[ group[0] ], arr => {
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
		title: group.length > 0 ? `${variable[ 0 ]} ${i18n.t('Plotly:given')} ${group.join( ', ')}` : variable.join( ', ' ),
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
* @property {(string|Array<string>)} variable - variable(s) to display
* @property {(string|Factor|Array<(string|Factor)>)} group - one or two grouping variables
* @property {string} orientation - `vertical` or `horizontal` orientation
* @property {boolean} overlayPoints - controls whether to overlay points
*/
const BoxPlot = ({ data, variable, group, orientation, overlayPoints, id, action, onShare }) =>{
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('Plotly:data-missing')}</Alert>;
	}
	if ( !variable ) {
		return <Alert variant="danger">{i18n.t('Plotly:variable-missing')}</Alert>;
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
	group: [],
	orientation: 'vertical',
	overlayPoints: false
};

BoxPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	]).isRequired,
	group: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	orientation: PropTypes.oneOf([ 'vertical', 'horizontal' ]),
	overlayPoints: PropTypes.bool
};


// EXPORTS //

export default withPropCheck( BoxPlot );
