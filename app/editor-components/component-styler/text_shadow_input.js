// MODULES //

import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
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
const DEFAULT_STATE = {
	angle: 0,
	distance: '0px',
	blur: '0px',
	color: 'rgba(0, 0, 0, 1)'
};


// MAIN //

const TextShadowInput = ( props ) => {
	const [ state, setState ] = useState( DEFAULT_STATE );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Angle
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number" min={0} max={365}
						value={state.angle}
						onChange={( event ) => {
							const newState = {
								...state,
								angle: event.target.value
							};
							setState( newState );
						}}
					/>
				</Col>
				<UnitInputBase
					label="Distance"
					defaultValue={state.distance}
					labelWidth={2} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							distance: value
						};
						setState( newState );
					}}
				/>
				<UnitInputBase
					label="Blur"
					defaultValue={state.blur}
					labelWidth={1} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							blur: value
						};
						setState( newState );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Color
				</Form.Label>
				<Col sm={1} >
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
						}}
						variant="Button"
					/>
				</Col>
			</Form.Group>
			<Button variant="secondary" onClick={() => {
				const radians = deg2Rad( state.angle );
				const match = RE_UNIT.exec( state.distance );
				if ( match ) {
					const numDistance = match[ 1 ];
					const distUnit = match[ 2 ];
					const xDistance = roundn( cos( radians ) * numDistance, -3 );
					const yDistance = roundn( sin( radians ) * numDistance, -3 );
					const textShadow = `${xDistance}${distUnit} ${yDistance}${distUnit} ${state.blur} ${state.color}`;
					props.onChange( textShadow );
					setState( DEFAULT_STATE );
				}
			}} >
				Add Shadow
			</Button>
		</Fragment>
	);
};


// EXPORTS //

export default TextShadowInput;
