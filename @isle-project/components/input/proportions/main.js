// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import NumberInput from '@isle-project/components/input/number';
import { CAT20 } from '@isle-project/constants/colors';
import { VictoryPie } from 'victory';
import './proportions.css';


// FUNCTIONS //

function sum( arr ) {
	let out = 0;
	for ( let n = 0; n < arr.length; n++ ) {
		out += arr[ n ];
	}
	return out;
}


// MAIN //

/**
* A proportions input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Array} legends - group labels
* @property {boolean} disabled - controls whether the input field is deactivated
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {Array} colors - array of colors for the pie chart components. If not defined, a custom color scale will be used
* @property {number} height - proportions input height (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onChange - callback function to be invoked when a choice is made
*/
const ProportionInput = ( props ) => {
	const { colors, legends, values, onChange } = props;
	const nElements = legends.length;
	const [ state, setState ] = useState({
		values: values ? values : new Array( nElements ).fill( 100 / nElements ),
		colors: ( colors ? colors : CAT20.slice( 0, nElements ) ).concat( [ 'transparent' ] )
	});
	useEffect( () => {
		const n = legends.length;
		setState({
			values: values ? values : new Array( n ).fill( 100 / n ),
			colors: ( colors ? colors : CAT20.slice( 0, n ) ).concat( [ 'transparent' ] )
		});
	}, [ colors, legends, values ] );

	const inputs = [];
	const free = 100.0 - sum( state.values );
	for ( let i = 0; i < nElements; i++ ) {
		let maxValue = state.values[ i ] + free;
		maxValue = Number( maxValue.toFixed( props.precision ) );
		inputs.push( <div className="proportions-number-input" key={i} >
			<NumberInput
				key={i}
				legend={legends[ i ]}
				onChange={( value ) => {
					const newValues = state.values.slice();
					newValues[ i ] = value;
					onChange( newValues );
					setState({
						values: newValues,
						colors: state.colors
					});
				}}
				min={0}
				max={maxValue}
				step={props.step}
				disabled={props.disabled}
				defaultValue={state.values[ i ]}
			/>
		</div> );
	}
	const visualData = legends.map( ( legend, idx ) => {
		return {
			x: legend,
			y: state.values[ idx ]
		};
	});
	if ( free > 0 ) {
		visualData.push({
			x: ' ',
			y: free
		});
	}
	return (
		<Card body className="proportions-input" >
			<VictoryPie
				colorScale={state.colors}
				data={visualData}
				height={props.height}
				innerRadius={0.375 * props.height}
			/>
			{inputs}
		</Card>
	);
};


// PROPERTIES //

ProportionInput.defaultProps = {
	legends: [],
	precision: 1,
	step: 0.1,
	disabled: false,
	colors: null,
	height: 200,
	onChange(){}
};

ProportionInput.propTypes = {
	colors: PropTypes.arrayOf( PropTypes.string ),
	disabled: PropTypes.bool,
	height: PropTypes.number,
	legends: PropTypes.array,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.number
};


// EXPORTS //

export default ProportionInput;
