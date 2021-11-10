// MODULES //

import React, { Fragment, useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import omit from '@stdlib/utils/omit';
import UnitInputBase from './unit_input_base.js';
import SelectInput from '@isle-project/components/input/select';
import './spacing_setter.css';


// VARIABLES //

const FIT_OPTIONS = [
	'fill',
	'contain',
	'cover',
	'none',
	'scale-down'
];


// MAIN //

const Size = ({ active, style, onChange, t }) => {
	const handleWidthChange = useCallback( ( width ) => {
		const newStyle = { ...style };
		newStyle.width = width;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleHeightChange = useCallback( ( height ) => {
		const newStyle = { ...style };
		newStyle.height = height;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMinWidthChange = useCallback( ( minWidth ) => {
		const newStyle = { ...style };
		newStyle.minWidth = minWidth;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMinHeightChange = useCallback( ( minHeight ) => {
		const newStyle = { ...style };
		newStyle.minHeight = minHeight;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMaxWidthChange = useCallback( ( maxWidth ) => {
		const newStyle = { ...style };
		newStyle.maxWidth = maxWidth;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMaxHeightChange = useCallback( ( maxHeight ) => {
		const newStyle = { ...style };
		newStyle.maxHeight = maxHeight;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleOverflowChange = useCallback( ( overflow ) => {
		const newStyle = omit( style, [ 'overflow', 'overflowX', 'overflowY' ] );
		newStyle.overflow = overflow;
		if ( style.overflowX ) {
			newStyle.overflowX = style.overflowX;
		}
		if ( style.overflowY ) {
			newStyle.overflowY = style.overflowY;
		}
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleXOverflowChange = useCallback( ( overflowX ) => {
		const newStyle = omit( style, [ 'overflow', 'overflowX', 'overflowY' ] );
		if ( style.overflow ) {
			newStyle.overflow = style.overflow;
		}
		if ( style.overflowY ) {
			newStyle.overflowY = style.overflowY;
		}
		if ( overflowX !== 'visible' ) {
			newStyle.overflowX = overflowX;
		}
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleYOverflowChange = useCallback( ( overflowY ) => {
		const newStyle = omit( style, [ 'overflow', 'overflowX', 'overflowY' ] );
		if ( style.overflow ) {
			newStyle.overflow = style.overflow;
		}
		if ( style.overflowX ) {
			newStyle.overflowX = style.overflowX;
		}
		if ( overflowY !== 'visible' ) {
			newStyle.overflowY = overflowY;
		}
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFitChange = useCallback( ( fit ) => {
		const newStyle = { ...style };
		newStyle.fit = fit;
		onChange( newStyle );
	}, [ onChange, style ] );
	if ( !active ) {
		return null;
	}
	const { width, height, maxHeight, maxWidth, minWidth, minHeight } = style;
	/* eslint-disable i18next/no-literal-string */
	return (
		<Fragment>
			<Form.Group as={Row} >
				<UnitInputBase
					label={t('width')}
					labelWidth={3}
					colWidth={3}
					auto
					defaultValue={isUndefinedOrNull( width ) ? 'auto' : width}
					onChange={handleWidthChange}
				/>
				<UnitInputBase
					label={t('height')}
					labelWidth={3}
					colWidth={3}
					auto
					defaultValue={isUndefinedOrNull( height ) ? 'auto' : height}
					onChange={handleHeightChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label={t('min-width')}
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( minWidth ) ? '0px' : minWidth}
					auto
					onChange={handleMinWidthChange}
				/>
				<UnitInputBase
					label={t('min-height')}
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( minHeight ) ? '0px' : minHeight}
					auto
					onChange={handleMinHeightChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label={t('max-width')}
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( maxWidth ) ? 'none' : maxWidth}
					none
					onChange={handleMaxWidthChange}
				/>
				<UnitInputBase
					label={t('max-height')}
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( maxHeight ) ? 'none' : maxHeight}
					none
					onChange={handleMaxHeightChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t('overflow')}
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={handleOverflowChange}
						type="radio"
						size="small"
						value={style.overflow}
					>
						<ToggleButton
							id="overflow-toggle-visible"
							variant="outline-secondary"
							value="visible"
							title={t('visible')}
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-toggle-hidden"
							variant="outline-secondary"
							value="hidden"
							title={t('hidden')}
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-toggle-scroll"
							variant="outline-secondary"
							value="scroll"
							title={t('scroll')}
						>
							<i className="fas fa-align-justify"></i> &#8613;
						</ToggleButton>
						<ToggleButton
							id="overflow-toggle-auto"
							variant="outline-secondary"
							value="auto"
							title={t('auto')}
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							{t('auto')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t('overflow-x')}
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={handleXOverflowChange}
						type="radio"
						size="small"
						value={style.overflowX}
					>
						<ToggleButton
							id="overflow-x-toggle-visible"
							variant="outline-secondary"
							value="visible"
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-x-toggle-hidden"
							variant="outline-secondary"
							value="hidden"
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-x-toggle-scroll"
							variant="outline-secondary"
							value="scroll"
						>
							<i className="fas fa-align-justify"></i> &#8613;
						</ToggleButton>
						<ToggleButton
							id="overflow-x-toggle-auto"
							variant="outline-secondary"
							value="auto"
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							{t('auto')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t('overflow-y')}
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={handleYOverflowChange}
						type="radio"
						size="small"
						value={style.overflowY}
					>
						<ToggleButton
							id="overflow-y-toggle-visible"
							variant="outline-secondary"
							value="visible"
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-y-toggle-hidden"
							variant="outline-secondary"
							value="hidden"
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							id="overflow-y-toggle-scroll"
							variant="outline-secondary"
							value="scroll"
						>
							<i className="fas fa-align-justify"></i> &#8613;
						</ToggleButton>
						<ToggleButton
							id="overflow-y-toggle-auto"
							variant="outline-secondary"
							value="auto"
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							{t('auto')}
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t( 'fit' )}
				</Form.Label>
				<Col sm={4} >
					<SelectInput
						defaultValue={style.fit || FIT_OPTIONS[ 0 ]}
						options={FIT_OPTIONS}
						onChange={handleFitChange}
					/>
				</Col>
			</Form.Group>
		</Fragment>
	);
	/* eslint-enable i18next/no-literal-string */
};


// EXPORTS //

export default Size;
