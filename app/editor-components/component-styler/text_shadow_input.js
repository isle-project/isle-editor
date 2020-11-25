// MODULES //

import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import deg2Rad from '@stdlib/math/base/special/deg2rad';
import roundn from '@stdlib/math/base/special/roundn';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import ColorPicker from 'components/color-picker';
import UnitInputBase from './unit_input_base.js';


// VARIABLES //

const RE_UNIT = /(\d+)([^\d]+)/;


// MAIN //

const TextShadowInput = ( props ) => {
	const [ state, setState ] = useState({
		angle: 0,
		distance: 0,
		blur: 0,
		color: 'rgba(0, 0, 0, 1)'
	});
	const handleChange = ({ angle, distance, blur, color }) => {
		const newStyle = { ...props.style };
		const radians = deg2Rad( angle );
		const match = RE_UNIT.exec( distance );
		if ( match ) {
			const numDistance = match[ 1 ];
			const distUnit = match[ 2 ];
			const xDistance = roundn( cos( radians ) * numDistance, -3 );
			const yDistance = roundn( sin( radians ) * numDistance, -3 );
			newStyle.textShadow = `${xDistance}${distUnit} ${yDistance}${distUnit} ${blur} ${color}`;
			props.onChange( newStyle );
		}
	};
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Angle
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number" min={0} max={365}
						onChange={( event ) => {
							const newState = {
								...state,
								angle: event.target.value
							};
							setState( newState );
							handleChange( newState );
						}}
					/>
				</Col>
				<UnitInputBase
					label="Distance"
					labelWidth={2} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							distance: value
						};
						setState( newState );
						handleChange( newState );
					}}
				/>
				<UnitInputBase
					label="Blur"
					labelWidth={1} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							blur: value
						};
						setState( newState );
						handleChange( newState );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Color
				</Form.Label>
				<Col sm="11">
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={state.color}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newState = {
								...state,
								color: `rgba(${r}, ${g}, ${b}, ${a} )`
							};
							setState( newState );
							handleChange( newState );
						}}
						variant="Button"
					/>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default TextShadowInput;
