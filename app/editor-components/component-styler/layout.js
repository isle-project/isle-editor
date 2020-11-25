// MODULES //

import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'components/overlay-trigger';
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
				<OverlayTrigger
					overlay={<ColorPicker
						style={{ zIndex: 2000 }}
						color={props.style.backgroundColor}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newStyle = { ...props.style };
							newStyle.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a} )`;
							props.onChange( newStyle );
						}}
					/>}
					placement="bottom-end"
					trigger={[ 'click' ]}
				>
					<Button size="sm" style={{ backgroundColor: props.style.backgroundColor, width: 38, height: 38 }} >
					</Button>
				</OverlayTrigger>
			</Col>
		</Form.Group>
	);
};


// EXPORTS //

export default Layout;
