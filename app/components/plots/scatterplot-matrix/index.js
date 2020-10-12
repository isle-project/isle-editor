// MODULES //

import React from 'react';
import floor from '@stdlib/math/base/special/floor';
import objectKeys from '@stdlib/utils/keys';
import Plotly from 'components/plotly';
import { CAT20 } from 'constants/colors';


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

function ScatterPlotMatrix( props ) {
	const config = generateScatterplotMatrixConfig( props );
	return (
		<Plotly
			editable
			draggable
			id={props.id}
			fit
			meta={props.action}
			data={config.data}
			layout={config.layout}
			onShare={props.onShare}
			onSelected={( selected ) => {
				const keys = objectKeys( selected.range );
				const range = {};
				const names = {};
				let match = RE_AXIS_IDX.exec( keys[ 0 ] );
				let idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.x = props.variables[ idx ];
				range.x = selected.range[ keys[ 0 ] ];
				match = RE_AXIS_IDX.exec( keys[ 1 ] );
				idx = 0;
				if ( match && match[ 1 ] ) {
					idx = Number( match[ 1 ] ) - 1;
				}
				names.y = props.variables[ idx ];
				range.y = selected.range[ keys[ 1 ] ];
				this.props.onSelected( names, { range });
			}}
		/>
	);
}


// EXPORTS //

export default ScatterPlotMatrix;
