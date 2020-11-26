// MODULES //

import React, { Fragment } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// MAIN //

const Position = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
					Position
				</Form.Label>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
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
				<Form.Label column sm="4">
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
