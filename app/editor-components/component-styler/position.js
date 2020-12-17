// MODULES //

import React, { Fragment } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from '@isle-project/components/input/select';
import UnitInputBase from './unit_input_base.js';


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
				<Form.Label column sm={2} >
					{props.t('position')}
				</Form.Label>
				<Col sm={4} >
					<SelectInput
						clearable
						options={POSITION_TYPES}
						defaultValue={props.style.position || POSITION_TYPES[ 0 ]}
						onChange={( position ) => {
							const newStyle = { ...props.style };
							newStyle.position = position;
							props.onChange( newStyle );
						}}
					/>
				</Col>
				<UnitInputBase
					label={props.t('top')}
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
					label={props.t('left')}
					auto
					defaultValue={props.style.left}
					onChange={( left ) => {
						const newStyle = { ...props.style };
						newStyle.left = left;
						props.onChange( newStyle );
					}}
				/>
				<UnitInputBase
					label={props.t('right')}
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
					label={props.t('bottom')} labelWidth={2}
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
					{props.t('z-index')}
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
					{props.t('float')}
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
					>
						<ToggleButton
							variant="outline-secondary"
							value="none"
						>
							{props.t('none')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="left"
						>
							{props.t('left')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="right"
						>
							{props.t('right')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{props.t('clear')}
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
					>
						<ToggleButton
							variant="outline-secondary"
							value="none"
						>
							{props.t('none')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="left"
						>
							{props.t('left')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="right"
						>
							{props.t('right')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="both"
						>
							{props.t('both')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Position;
