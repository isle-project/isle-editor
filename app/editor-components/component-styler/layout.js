// MODULES //

import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorPicker from 'components/color-picker';


// MAIN //

const Layout = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
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
	);
};


// EXPORTS //

export default Layout;
