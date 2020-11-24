// MODULES //

import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import deg2Rad from '@stdlib/math/base/special/deg2rad';
import roundn from '@stdlib/math/base/special/roundn';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import ColorPicker from 'components/color-picker';
import UNIT_TYPES from './unit_types.json';


// VARIABLES //

const RE_UNIT = /(\d+)([^\d]+)/;


// FUNCTIONS //

const UnitInputBase = ( props ) => {
	const [ unit, setUnit ] = useState( 'px' );
	const [ value, setValue ] = useState( null );
	return (
		<Fragment>
			<Form.Label column sm={props.labelWidth || 1} >
				{props.label}
			</Form.Label>
			<Col sm={props.colWidth || 3} >
				<InputGroup style={{ width: 120 }}>
					<Form.Control
						type="number" min={0} max={200}
						onChange={( event ) => {
							setValue( event.target.value );
							props.onChange( `${event.target.value}${unit}`);
						}}
					/>
					<InputGroup.Append>
						<Form.Control
							as="select"
							style={{ padding: 3, background: 'silver' }}
							onChange={( event ) => {
								setUnit( event.target.value );
								if ( value ) {
									props.onChange( `${value}${event.target.value}`);
								}
							}}
						>
							{UNIT_TYPES.map( ( x, idx ) => <option key={idx}>{x}</option>)}
						</Form.Control>
					</InputGroup.Append>
				</InputGroup>
			</Col>
		</Fragment>
	);
};


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
					<OverlayTrigger
						overlay={<ColorPicker
							color={state.color}
							style={{ zIndex: 2000 }}
							onChange={({ rgb }) => {
								const { r, g, b, a } = rgb;
								const newState = {
									...state,
									color: `rgba(${r}, ${g}, ${b}, ${a} )`
								};
								setState( newState );
								handleChange( newState );
							}}
						/>}
						placement="bottom-end"
						trigger={[ 'click' ]}
					>
						<Button size="sm" style={{ backgroundColor: state.color, width: 38, height: 38 }} >
						</Button>
					</OverlayTrigger>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default TextShadowInput;
