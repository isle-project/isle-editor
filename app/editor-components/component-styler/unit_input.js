// MODULES //

import React, { Fragment, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import UNIT_TYPES from './unit_types.json';


// MAIN //

const UnitInput = ( props ) => {
	const [ unit, setUnit ] = useState( 'px' );
	const [ value, setValue ] = useState( null );
	const handleInputChange = ( value, unit ) => {
		const newStyle = { ...props.style };
		newStyle[ props.property ] = `${value}${unit}`;
		props.onChange( newStyle );
	};
	return (
		<Fragment>
			<Form.Label column sm={props.labelWidth || 1} >
				{props.label}
			</Form.Label>
			<Col sm={props.colWidth || 3} >
				<InputGroup style={{ width: 120 }}>
					<Form.Control
						type="number" min={0} max={200}
						onChange={( event ) => {
							setValue( event.target.value );
							handleInputChange( event.target.value, unit );
						}}
					/>
					<InputGroup.Append>
						<Form.Control
							as="select"
							style={{ padding: 3, background: 'silver' }}
							onChange={( event ) => {
								setUnit( event.target.value );
								if ( value ) {
									handleInputChange( value, event.target.value );
								}
							}}
						>
							{UNIT_TYPES.map( ( x, idx ) => <option key={idx}>{x}</option>)}
						</Form.Control>
					</InputGroup.Append>
				</InputGroup>
			</Col>
		</Fragment>
	);
};


// EXPORTS //

export default UnitInput;
