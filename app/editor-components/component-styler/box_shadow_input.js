// MODULES //

import React, { Fragment, useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import deg2Rad from '@stdlib/math/base/special/deg2rad';
import roundn from '@stdlib/math/base/special/roundn';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import ColorPicker from '@isle-project/components/color-picker';
import UnitInputBase from './unit_input_base.js';


// VARIABLES //

const RE_UNIT = /(\d+)([^\d]+)/;
const DEFAULT_STATE = {
	inset: false,
	angle: 0,
	distance: '0px',
	blur: '0px',
	color: 'rgba(0, 0, 0, 1)'
};


// MAIN //

const BoxShadowInput = ( props ) => {
	const [ state, setState ] = useState( DEFAULT_STATE );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={1} >
					{props.t('type')}
				</Form.Label>
				<Col sm={10} >
					<ToggleButtonGroup
						name="options"
						onChange={( inset ) => {
							const newState = {
								...state,
								inset
							};
							setState( newState );
						}}
						type="radio"
						size="small"
						value={state.inset}
					>
						<ToggleButton
							variant="outline-secondary"
							value={false}
						>
							{props.t('outside')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value={true}
						>
							{props.t('inside')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={1} >
					{props.t('angle')}
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
					labelWidth={2}
					defaultValue={state.distance}
					style={props.style}
					colWidth={3}
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
					labelWidth={1}
					defaultValue={state.blur}
					colWidth={3}
					style={props.style}
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
				<Form.Label column sm={1} >
					{props.t('color')}
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
					const shadow = `${state.inset ? 'inset ' : ''}${xDistance}${distUnit} ${yDistance}${distUnit} ${state.blur} ${state.color}`;
					props.onChange( shadow );
				}
				setState( DEFAULT_STATE );
			}} >
				{props.t('add-shadow')}
			</Button>
		</Fragment>
	);
};


// EXPORTS //

export default BoxShadowInput;
