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
import emptyPlotConfig from '@isle-project/utils/empty-plot-config';


// VARIABLES //

const MAX_CATEGORIES = 50;


// FUNCTIONS //

export function generateViolinplotConfig({ data, variable, group, horizontal, showBox }) {
	let traces;
	if ( !group ) {
		const values = data[ variable ];
		traces = [ {
			[ horizontal ? 'x' : 'y' ]: values,
			type: 'violin',
			name: variable,
			box: {
				visible: showBox
			}
		} ];
	} else {
		const freqs = by( data[ variable ], data[ group ], arr => {
			return arr;
		});
		traces = [];
		const keys = extractUsedCategories( freqs, group );
		if ( keys.length > MAX_CATEGORIES ) {
			return emptyPlotConfig( i18n.t( 'plotly:too-many-categories' ) );
		}
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const val = freqs[ key ];
			traces.push({
				[ horizontal ? 'x' : 'y' ]: val,
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
			[ horizontal ? 'yaxis' : 'xaxis']: {
				type: 'category'
			}
		}
	};
}


// MAIN //

function ViolinPlot({ data, variable, id, group, showBox, horizontal, action, onShare }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generateViolinplotConfig({ data, variable, group, horizontal, showBox });
	}, [ data, group, horizontal, showBox, variable ] );
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
	showBox: false,
	horizontal: false
};

ViolinPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	horizontal: PropTypes.bool,
	showBox: PropTypes.bool
};


// EXPORTS //

/**
* A violin plot.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {boolean} horizontal - controls whether to display the violin plot horizontally
* @property {boolean} showBox - controls whether to display a box plot inside
*/
export default withPropCheck( ViolinPlot );
