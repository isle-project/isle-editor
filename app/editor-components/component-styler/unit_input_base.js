// MODULES //

import React, { Fragment, useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import UNIT_TYPES from './unit_types.json';


// VARIABLES //

const RE_UNIT_INPUT = /(\d+)([a-z%]*)/;


// FUNCTIONS //

const extractUnitAndValue = ( defaultValue ) => {
	const match = RE_UNIT_INPUT.exec( defaultValue );
	if ( !match ) {
		return {
			value: 0,
			unit: 'px'
		};
	}
	return {
		value: match[ 1 ],
		unit: match[ 2 ] || 'px'
	};
};


// MAIN //

const UnitInputBase = ({ defaultValue, colWidth, label, labelWidth, onChange }) => {
	const initial = extractUnitAndValue( defaultValue );
	const [ unit, setUnit ] = useState( initial.unit );
	const [ value, setValue ] = useState( initial.value );
	useEffect( () => {
		const initial = extractUnitAndValue( defaultValue );
		setUnit( initial.unit );
		setValue( initial.value );
	}, [ defaultValue ]);
	return (
		<Fragment>
			<Form.Label column sm={labelWidth || 1} >
				{label}
			</Form.Label>
			<Col sm={colWidth || 3} >
				<InputGroup style={{ width: 120 }}>
					<Form.Control
						type="number" min={0} max={200}
						value={value}
						onChange={( event ) => {
							setValue( event.target.value );
							onChange( `${event.target.value}${unit}`);
						}}
					/>
					<InputGroup.Append>
						<Form.Control
							as="select"
							style={{ padding: 3, background: 'silver' }}
							value={unit}
							onChange={( event ) => {
								setUnit( event.target.value );
								if ( value ) {
									onChange( `${value}${event.target.value}`);
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

export default UnitInputBase;
