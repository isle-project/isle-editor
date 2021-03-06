// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import by from '@isle-project/utils/by';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


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
			title: group ? `${variable} ${i18n.t('plotly:given')} ${group}` : variable,
			xaxis: {
				type: 'category'
			}
		}
	};
}


// MAIN //

function ViolinPlot({ data, variable, id, group, showBox, action, onShare }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateViolinplotConfig({ data, variable, group, showBox });
	}, [ data, group, showBox, variable ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
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


// PROPERTIES //

ViolinPlot.defaultProps = {
	group: null,
	showBox: false
};

ViolinPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	showBox: PropTypes.bool
};


// EXPORTS //

/**
* A violin plot.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {boolean} showBox - controls whether to display a box plot inside
*/
export default withPropCheck( ViolinPlot );
