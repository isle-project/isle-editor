// MODULES //

import React, { Fragment, useCallback } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from '@isle-project/components/input/select';
import UnitInputBase from './unit_input_base.js';


// VARIABLES //

const POSITION_TYPES = [
	'static',
	'relative',
	'absolute',
	'fixed',
	'sticky'
];


// MAIN //

const Position = ({ active, style, onChange, t }) => {
	const handlePositionChange = useCallback( ( position ) => {
		const newStyle = { ...style };
		newStyle.position = position;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleTopChange = useCallback( ( top ) => {
		const newStyle = { ...style };
		newStyle.top = top;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleLeftChange = useCallback( ( left ) => {
		const newStyle = { ...style };
		newStyle.left = left;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleRightChange = useCallback( ( right ) => {
		const newStyle = { ...style };
		newStyle.right = right;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleBottomChange = useCallback( ( bottom ) => {
		const newStyle = { ...style };
		newStyle.bottom = bottom;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleZIndexChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.zIndex = event.target.value;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFloatChange = useCallback( ( float ) => {
		const newStyle = { ...style };
		newStyle.float = float;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleClearChange = useCallback( ( float ) => {
		const newStyle = { ...style };
		newStyle.clear = float;
		onChange( newStyle );
	}, [ onChange, style ] );
	if ( !active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={2} >
					{t('position')}
				</Form.Label>
				<Col sm={4} >
					<SelectInput
						clearable
						options={POSITION_TYPES}
						defaultValue={style.position || POSITION_TYPES[ 0 ]}
						onChange={handlePositionChange}
					/>
				</Col>
				<UnitInputBase
					label={t('top')}
					auto
					defaultValue={style.top}
					onChange={handleTopChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Col sm={4} ></Col>
				<UnitInputBase
					label={t('left')}
					auto
					defaultValue={style.left}
					onChange={handleLeftChange}
				/>
				<UnitInputBase
					label={t('right')}
					auto
					defaultValue={style.right}
					onChange={handleRightChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Col sm={5} ></Col>
				<UnitInputBase
					label={t('bottom')} labelWidth={2}
					auto
					defaultValue={style.bottom}
					onChange={handleBottomChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{t('z-index')}
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number"
						defaultValue={style.zIndex}
						min={0} max={9999}
						onChange={handleZIndexChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{t('float')}
				</Form.Label>
				<Col sm={8} >
					<ToggleButtonGroup
						name="options"
						onChange={handleFloatChange}
						type="radio"
						size="small"
						value={style.float || 'none'}
					>
						<ToggleButton
							id="toggle-float-none"
							variant="outline-secondary"
							value="none"
						>
							{t('none')}
						</ToggleButton>
						<ToggleButton
							id="toggle-float-left"
							variant="outline-secondary"
							value="left"
						>
							{t('left')}
						</ToggleButton>
						<ToggleButton
							id="toggle-float-right"
							variant="outline-secondary"
							value="right"
						>
							{t('right')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{t('clear')}
				</Form.Label>
				<Col sm={8} >
					<ToggleButtonGroup
						name="options"
						onChange={handleClearChange}
						type="radio"
						size="small"
						value={style.clear || 'none'}
					>
						<ToggleButton
							id="toggle-clear-none"
							variant="outline-secondary"
							value="none"
						>
							{t('none')}
						</ToggleButton>
						<ToggleButton
							id="toggle-clear-left"
							variant="outline-secondary"
							value="left"
						>
							{t('left')}
						</ToggleButton>
						<ToggleButton
							id="toggle-clear-right"
							variant="outline-secondary"
							value="right"
						>
							{t('right')}
						</ToggleButton>
						<ToggleButton
							id="toggle-clear-both"
							variant="outline-secondary"
							value="both"
						>
							{t('both')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Position;
