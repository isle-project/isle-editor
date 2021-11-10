// MODULES //

import React, { Fragment, useCallback, useEffect, useState } from 'react';
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
		value: Number( match[ 1 ] ),
		unit: match[ 2 ] || 'px'
	};
};


// MAIN //

const UnitInput = ({ style, property, label, labelWidth, colWidth, onChange }) => {
	const initial = extractUnitAndValue( style[ property ] );
	const [ unit, setUnit ] = useState( initial.unit );
	const [ value, setValue ] = useState( initial.value );
	useEffect( () => {
		const initial = extractUnitAndValue( style[ property ] );
		setUnit( initial.unit );
		setValue( initial.value );
	}, [ style, property ]);
	const handleInputChange = useCallback( ( value, unit ) => {
		const newStyle = { ...style };
		newStyle[ property ] = `${value}${unit}`;
		onChange( newStyle );
	}, [ onChange, property, style ] );
	const handleValueChange = useCallback( ( event ) => {
		setValue( event.target.value );
		handleInputChange( event.target.value, unit );
	}, [ handleInputChange, unit ] );
	const handleUnitChange = useCallback( ( event ) => {
		setUnit( event.target.value );
		if ( value ) {
			handleInputChange( value, event.target.value );
		}
	}, [ handleInputChange, value ] );
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
						onChange={handleValueChange}
					/>
					<Form.Control
						value={unit}
						as="select"
						style={{ padding: 3, background: 'silver' }}
						onChange={handleUnitChange}
					>
						{UNIT_TYPES.map( ( x, idx ) => <option key={idx}>{x}</option>)}
					</Form.Control>
				</InputGroup>
			</Col>
		</Fragment>
	);
};


// EXPORTS //

export default UnitInput;
