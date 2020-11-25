// MODULES //

import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'components/overlay-trigger';
import ColorPicker from 'components/color-picker';
import UnitInputBase from './unit_input_base.js';


// MAIN //

const Borders = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Border Color
				</Form.Label>
				<Col sm={3} >
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={props.style.borderColor}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newStyle = { ...props.style };
							newStyle.borderColor = `rgba(${r}, ${g}, ${b}, ${a} )`;
							props.onChange( newStyle );
						}}
						variant="Button"
					/>
				</Col>
				<UnitInputBase
					label="Border Width"
					labelWidth={3} style={props.style}
					onChange={( value ) => {
						const newStyle = { ...props.style };
						newStyle.borderWidth = value;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Borders;
