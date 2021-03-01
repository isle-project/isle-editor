// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import floor from '@stdlib/math/base/special/floor';
import objectKeys from '@stdlib/utils/keys';
import Plotly from '@isle-project/components/plotly';
import { i18n } from '@isle-project/locales';
import { CAT20 } from '@isle-project/constants/colors';
import { Factor } from '@isle-project/utils/factor-variable';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const RE_AXIS_IDX = /[xy](\d+)/;


// FUNCTIONS //

const axis = () => ({
	showline: false,
	zeroline: false,
	gridcolor: '#ffff',
	ticklen: 4
});

const colors = ( values ) => {
	const mapping = {};
	const out = new Array( values.length );
	let nKeys = 0;
	for ( let i = 0; i < values.length; i++ ) {
		const v = values[ i ];
		if ( !mapping[ v ] ) {
			mapping[ v ] = CAT20[ nKeys ];
			nKeys += 1;
		}
		out[ i ] = mapping[ v ];
	}
	return out;
};

export function generateScatterplotMatrixConfig({ data, variables, color }) {
	const traces = [{
		type: 'splom',
		dimensions: variables.map( x => {
			return {
				label: x,
				values: data[ x ]
			};
		})
	}];
	if ( color ) {
		traces[ 0 ].text = data[ color ];
		traces[ 0 ].marker = {
			color: colors( data[ color ] )
		};
	}
	const layout = {
		hovermode: 'closest',
		dragmode: 'select',
		plot_bgcolor: 'rgba(240,240,240, 0.95)'
	};
	layout[ 'xaxis' ] = axis();
	layout[ 'yaxis' ] = axis();
	for ( let i = 1; i < variables.length; i++ ) {
		layout[ 'xaxis'+(i+1) ] = axis();
		layout[ 'yaxis'+(i+1) ] = axis();
	}
	layout.height = 300 + ( ( floor( variables.length / 2 ) - 1 ) * 150 );
	return {
		data: traces,
		layout
	};
}

function ScatterPlotMatrix({ id, data, variables, color, action, onShare, onSelected }) {
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('Plotly:data-missing')}</Alert>;
	}
	const config = generateScatterplotMatrixConfig({ data, variables, color });
	return (
		<Plotly
			editable
			draggable
			id={id}
			fit
			meta={action}
			data={config.data}
			layout={config.layout}
			onShare={onShare}
			onSelected={( selected ) => {
				if ( !onSelected ) {
					return;
				}
				const keys = objectKeys( selected.range );
				const range = {};
				const names = {};
				let match = RE_AXIS_IDX.exec( keys[ 0 ] );
				let idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.x = variables[ idx ];
				range.x = selected.range[ keys[ 0 ] ];
				match = RE_AXIS_IDX.exec( keys[ 1 ] );
				idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.y = variables[ idx ];
				range.y = selected.range[ keys[ 1 ] ];
				onSelected( names, { range });
			}}
		/>
	);
}


// PROPERTIES //

ScatterPlotMatrix.defaultProps = {
	color: null
};

ScatterPlotMatrix.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired,
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	])
};


// EXPORTS //

/**
* A scatter plot matrix.
*
* @property {Object} data - object of value arrays for each variable
* @property {Array<string>} variables - array of variables to display in matrix
* @property {(string|Factor)} color - categorical variable to map to color of points
*/
export default withPropCheck( ScatterPlotMatrix );
