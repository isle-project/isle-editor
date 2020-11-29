// MODULES //

import React, { Fragment, useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorPicker from 'components/color-picker';
import SelectInput from 'components/input/select';
import DISPLAY_TYPES from './display_types.json';
import './layout.css';


// MAIN //

const Layout = ( props ) => {
	const [ type, setType ] = useState( 'color' );
	if ( !props.active ) {
		return null;
	}
	let input;
	switch ( type ) {
		case 'color':
			input = <Form.Group as={Row} >
				<Form.Label column sm="4">
					Background Color
				</Form.Label>
				<Col sm={1} >
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={props.style.backgroundColor}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newStyle = { ...props.style };
							newStyle.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a} )`;
							props.onChange( newStyle );
						}}
						variant="Button"
					/>
				</Col>
			</Form.Group>;
			break;
		case 'image':
			input = <Form.Group as={Row} >
				<Form.Label column sm="4">
					Background Image
				</Form.Label>
				<Col sm="8">

				</Col>
			</Form.Group>;
			break;
		case 'linear-gradient':
			input = <Form.Group as={Row} >
				<Form.Label column sm="4">
					Linear Gradient
				</Form.Label>
				<Col sm="8">

				</Col>
			</Form.Group>;
			break;
		case 'radial-gradient':
			input = <Form.Group as={Row} >
				<Form.Label column sm="4">
					Radial Gradient
				</Form.Label>
				<Col sm="8">

				</Col>
			</Form.Group>;
			break;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
					Display
				</Form.Label>
				<Col sm="8">
					<SelectInput
						defaultValue={DISPLAY_TYPES[ 0 ]}
						options={DISPLAY_TYPES}
						onChange={( display ) => {
							const newStyle = { ...props.style };
							newStyle.display = display;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
					Background Type
				</Form.Label>
				<Col sm={8} >
					<ToggleButtonGroup
						name="type"
						onChange={setType}
						type="radio"
						value={type}
					>
						<ToggleButton
							variant="outline-secondary"
							value="color"
						>
							<i className="fas fa-square fa-lg" style={{ color: 'black' }} ></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="image"
						>
							<i className="far fa-image fa-lg"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="linear-gradient"
						>
							<div className="component-styler-box linear-gradient-box" ></div>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="radial-gradient"
						>
							<div className="component-styler-box radial-gradient-box" ></div>
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			{input}
		</Fragment>
	);
};


// EXPORTS //

export default Layout;
