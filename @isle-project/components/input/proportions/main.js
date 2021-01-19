// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NumberInput from '@isle-project/components/input/number';
import { VictoryPie } from 'victory';
import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

function sum( arr ) {
	let out = 0;
	for ( let n = 0; n < arr.length; n++ ) {
		out += arr[ n ];
	}
	return out;
}

function pieData( arr, nElements, legends ) {
	const list = [];
	const total = sum( arr );
	const no = nElements + 1;
	for ( let i = 0; i < no; i++ ) {
		if ( i < no -1 ) {
			let o = {
				x: legends[ i ],
				y: arr[ i ]
			};
			list.push( o );
		}
		else {
			let o = {
				x: ' ',
				y: 100 - sum( arr )
			};
			if ( total !== 100 ) {
				list.push( o );
			}
		}
	}
	return list;
}

function setValues( nElements ) {
	const values = new Array( nElements );
	const initial = 100 / nElements;
	for ( let i = 0; i < nElements; i++ ) {
		values[ i ] = initial;
	}
	return values;
}

function colorsArray( colors, nElements ) {
	const c = colors.slice( 0, nElements );
	c.push( 'transparent' );
	return c;
}

function checkLegends( legends, nElements ) {
	if ( isArray( legends ) ) {
		return legends;
	}
	const list = [];
	for ( let i = 0; i < nElements; i++ ) {
		list.push( 'EL ' + i );
	}
	return list;
}


// MAIN //

/**
* A proportions input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {number} nElements - number of elements
* @property {Array} legends - group labels
* @property {boolean} disabled - controls whether the input field is deactivated
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {Array} colors - array of colors for the pie chart components. If not defined, a custom color scale will be used
* @property {number} height - proportions input height (in px)
* @property {number} innerRadius - inner radius of proportions pie chart (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onChange - callback function to be invoked when a choice is made
*/
const ProportionInput = ( props ) => {
	const { colors, nElements } = props;
	const legends = checkLegends( props.legends, nElements );
	let values = null;
	if ( props.values ) {
		values = props.values;
	}
	else {
		values = setValues( nElements );
	}
	const [ state, setState ] = useState({
		visualData: pieData( values, nElements, props.legends ),
		colors: colorsArray( props.colors, nElements )
	});
	useEffect( () => {
		setState({
			visualData: pieData( values, nElements, legends ),
			colors: colorsArray( colors, nElements )
		});
	}, [ colors, legends, nElements, values ] );

	const checkPercentage = ( ndx, value ) => {
		const newValues = values.slice();
		newValues[ ndx ] = value;
		props.onChange( newValues );
		setState({
			visualData: pieData( newValues, nElements, props.legends ),
			colors: state.colors
		});
	};
	const pos = {
		marginLeft: props.margin
	};
	const inputs = [];
	const n = nElements;
	const inputStyle = {
		float: 'left',
		width: '120px',
		textAlign: 'center'
	};
	for ( let i = 0; i < n; i++ ) {
		const free = 100.0 - sum( state.values );
		let maxValue = state.values[ i ] + free;
		maxValue = Number( maxValue.toFixed( props.precision ) );
		inputs.push( <div style={inputStyle} key={i} >
			<NumberInput
				key={i}
				legend={legends[ i ]}
				onChange={( event ) => checkPercentage( i, event )}
				min={0}
				max={maxValue}
				step={props.step}
				disabled={props.disabled}
				defaultValue={state.values[ i ]}
			/>
		</div> );
	}
	return (
		<div className="input" >
			<VictoryPie
				colorScale={state.colors}
				data={state.visualData}
				height={props.height}
				innerRadius={props.innerRadius}
			/>
			<div style={pos}>
				{inputs}
			</div>
		</div>
	);
};


// PROPERTIES //

ProportionInput.defaultProps = {
	nElements: 6,
	legends: null,
	precision: 1,
	step: 0.1,
	disabled: false,
	colors: [ 'tomato', 'orange', 'gold', 'darkcyan', 'salmon', 'lightgreen', 'gainsboro', 'lightpurple', 'darkkhaki', 'darkseagreen' ],
	height: 200,
	innerRadius: 75,
	margin: 0,
	onChange(){}
};

ProportionInput.propTypes = {
	colors: PropTypes.arrayOf( PropTypes.string ),
	disabled: PropTypes.bool,
	height: PropTypes.number,
	innerRadius: PropTypes.number,
	legends: PropTypes.array,
	margin: PropTypes.string,
	nElements: PropTypes.number,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.number
};


// EXPORTS //

export default ProportionInput;
