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
	if ( defaultValue === 'auto' || defaultValue === 'none' ) {
		return {
			value: 0,
			unit: defaultValue
		};
	}
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

const UnitInputBase = ({ defaultValue, colWidth, label, labelWidth, onChange, auto, none }) => {
	const initial = extractUnitAndValue( defaultValue );
	const [ unit, setUnit ] = useState( initial.unit );
	const [ value, setValue ] = useState( initial.value );
	const OPTIONS = UNIT_TYPES.slice();
	if ( auto ) {
		OPTIONS.unshift( 'auto' );
	}
	if ( none ) {
		OPTIONS.push( 'none' );
	}
	useEffect( () => {
		const initial = extractUnitAndValue( defaultValue );
		setUnit( initial.unit );
		setValue( initial.value );
	}, [ auto, defaultValue ]);
	const handleValueChange = useCallback( ( event ) => {
		setValue( event.target.value );
		onChange( `${event.target.value}${unit}`);
	}, [ onChange, unit ] );
	const handleUnitChange = useCallback( ( event ) => {
		const newUnit = event.target.value;
		setUnit( newUnit );
		if ( value && newUnit !== 'auto' && newUnit !== 'none' ) {
			onChange( `${value}${newUnit}`);
		} else {
			onChange( newUnit );
		}
	}, [ onChange, value ] );
	return (
		<Fragment>
			<Form.Label column sm={labelWidth || 1} >
				{label}
			</Form.Label>
			<Col sm={colWidth || 3} >
				<InputGroup style={{ width: 120 }}>
					{ unit === 'auto' || unit === 'none' ?
						<Form.Control type="text" disabled value={unit} style={{ fontVariant: 'small-caps' }} /> :
						<Form.Control
							type="number" min={0} max={200}
							value={value}
							onChange={handleValueChange}
						/>
					}
					<Form.Control
						as="select"
						style={{ padding: 3, background: 'silver' }}
						value={unit}
						onChange={handleUnitChange}
					>
						{OPTIONS.map( ( x, idx ) => <option key={idx}>{x}</option>)}
					</Form.Control>
				</InputGroup>
			</Col>
		</Fragment>
	);
};


// EXPORTS //

export default UnitInputBase;
