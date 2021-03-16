// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
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
	angle: 0,
	distance: '0px',
	blur: '0px',
	color: 'rgba(0, 0, 0, 1)'
};
const Z_INDEX_STYLE = { zIndex: 2000 };


// MAIN //

const TextShadowInput = ({ style, onChange, t }) => {
	const [ state, setState ] = useState( DEFAULT_STATE );
	const handleAngleChange = useCallback( ( event ) => {
		const newState = {
			...state,
			angle: event.target.value
		};
		setState( newState );
	}, [ state ] );
	const handleDistanceChange = useCallback( ( value ) => {
		const newState = {
			...state,
			distance: value
		};
		setState( newState );
	}, [ state ] );
	const handleBlurChange = useCallback( ( value ) => {
		const newState = {
			...state,
			blur: value
		};
		setState( newState );
	}, [ state ] );
	const handleColorChange = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newState = {
			...state,
			color: `rgba(${r}, ${g}, ${b}, ${a} )`
		};
		setState( newState );
	}, [ state ] );
	const handleShadowAddition = useCallback( () => {
		const radians = deg2Rad( state.angle );
		const match = RE_UNIT.exec( state.distance );
		if ( match ) {
			const numDistance = match[ 1 ];
			const distUnit = match[ 2 ];
			const xDistance = roundn( cos( radians ) * numDistance, -3 );
			const yDistance = roundn( sin( radians ) * numDistance, -3 );
			const textShadow = `${xDistance}${distUnit} ${yDistance}${distUnit} ${state.blur} ${state.color}`;
			onChange( textShadow );
			setState( DEFAULT_STATE );
		}
	}, [ onChange, state ] );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					{t('angle')}
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number" min={0} max={365}
						value={state.angle}
						onChange={handleAngleChange}
					/>
				</Col>
				<UnitInputBase
					label={t('distance')}
					defaultValue={state.distance}
					labelWidth={2} style={style}
					onChange={handleDistanceChange}
				/>
				<UnitInputBase
					label={t('blur')}
					defaultValue={state.blur}
					labelWidth={1} style={style}
					onChange={handleBlurChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					{t('color')}
				</Form.Label>
				<Col sm={1} >
					<ColorPicker
						style={Z_INDEX_STYLE}
						color={state.color}
						onChange={handleColorChange}
						variant="Button"
					/>
				</Col>
			</Form.Group>
			<Button variant="secondary" onClick={handleShadowAddition} >
				{t('add-shadow')}
			</Button>
		</Fragment>
	);
};


// EXPORTS //

export default TextShadowInput;
