// MODULES //

import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorPicker from 'components/color-picker';
import SelectInput from 'components/input/select';
import DISPLAY_TYPES from './display_types.json';


// MAIN //

const Layout = ( props ) => {
	if ( !props.active ) {
		return null;
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
					Background Color
				</Form.Label>
				<Col sm="8">
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
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Layout;
