// MODULES //

import React, { Fragment } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from 'components/input/select';
import UnitInputBase from './unit_input_base.js';
import { style } from 'd3';


// VARIABLES //

const POSITION_TYPES = [
	'static',
	'relative',
	'absolute',
	'fixed',
	'sticky'
];


// MAIN //

const Position = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Position
				</Form.Label>
				<Col sm={3} >
					<SelectInput
						clearable
						options={POSITION_TYPES}
						defaultValue={POSITION_TYPES[ 0 ]}
						onChange={( position ) => {
							const newStyle = { ...props.style };
							newStyle.position = position;
							props.onChange( newStyle );
						}}
					/>
				</Col>
				<UnitInputBase
					label="Top"
					auto
					defaultValue={props.style.top}
					onChange={( top ) => {
						const newStyle = { ...props.style };
						newStyle.top = top;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Col sm={4} ></Col>
				<UnitInputBase
					label="Left"
					auto
					defaultValue={props.style.left}
					onChange={( left ) => {
						const newStyle = { ...props.style };
						newStyle.left = left;
						props.onChange( newStyle );
					}}
				/>
				<UnitInputBase
					label="Right"
					auto
					defaultValue={props.style.right}
					onChange={( right ) => {
						const newStyle = { ...props.style };
						newStyle.right = right;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Col sm={5} ></Col>
				<UnitInputBase
					label="Bottom" labelWidth={2}
					auto
					defaultValue={props.style.bottom}
					onChange={( bottom ) => {
						const newStyle = { ...props.style };
						newStyle.bottom = bottom;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					z-index
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number"
						defaultValue={props.style.zIndex}
						min={0} max={9999}
						onChange={( event ) => {
							const newStyle = { ...props.style };
							newStyle.zIndex = event.target.value;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Float
				</Form.Label>
				<Col sm={8} >
					<ToggleButtonGroup
						name="options"
						onChange={( float ) => {
							const newStyle = { ...props.style };
							newStyle.float = float;
							props.onChange( newStyle );
						}}
						type="radio"
						size="small"
						value={props.style.float || 'none'}
						style={{ marginRight: '5px' }}
					>
						<ToggleButton
							variant="outline-secondary"
							value="none"
						>
							None
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="left"
						>
							Left
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="right"
						>
							Right
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Clear
				</Form.Label>
				<Col sm={8} >
					<ToggleButtonGroup
						name="options"
						onChange={( float ) => {
							const newStyle = { ...props.style };
							newStyle.clear = float;
							props.onChange( newStyle );
						}}
						type="radio"
						size="small"
						value={props.style.clear || 'none'}
						style={{ marginRight: '5px' }}
					>
						<ToggleButton
							variant="outline-secondary"
							value="none"
						>
							None
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="left"
						>
							Left
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="right"
						>
							Right
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="both"
						>
							Both
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Position;
