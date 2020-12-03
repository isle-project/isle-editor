// MODULES //

import React, { Fragment } from 'react';
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

const Size = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	const { width, height, maxHeight, maxWidth, minWidth, minHeight } = props.style;
	return (
		<Fragment>
			<Form.Group as={Row} >
				<UnitInputBase
					label="Width"
					labelWidth={3}
					colWidth={3}
					auto
					defaultValue={isUndefinedOrNull( width ) ? 'auto' : width}
					onChange={( width ) => {
						const newStyle = { ...props.style };
						newStyle.width = width;
						props.onChange( newStyle );
					}}
				/>
				<UnitInputBase
					label="Height"
					labelWidth={3}
					colWidth={3}
					auto
					defaultValue={isUndefinedOrNull( height ) ? 'auto' : height}
					onChange={( height ) => {
						const newStyle = { ...props.style };
						newStyle.height = height;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label="Min Width"
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( minWidth ) ? '0px' : minWidth}
					auto
					onChange={( minWidth ) => {
						const newStyle = { ...props.style };
						newStyle.minWidth = minWidth;
						props.onChange( newStyle );
					}}
				/>
				<UnitInputBase
					label="Min Height"
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( minHeight ) ? '0px' : minHeight}
					auto
					onChange={( minHeight ) => {
						const newStyle = { ...props.style };
						newStyle.minHeight = minHeight;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label="Max Width"
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( maxWidth ) ? 'none' : maxWidth}
					none
					onChange={( maxWidth ) => {
						const newStyle = { ...props.style };
						newStyle.maxWidth = maxWidth;
						props.onChange( newStyle );
					}}
				/>
				<UnitInputBase
					label="Max Height"
					labelWidth={3}
					colWidth={3}
					defaultValue={isUndefinedOrNull( maxHeight ) ? 'none' : maxHeight}
					none
					onChange={( maxHeight ) => {
						const newStyle = { ...props.style };
						newStyle.maxHeight = maxHeight;
						props.onChange( newStyle );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Overflow
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={( overflow ) => {
							const newStyle = omit( props.style, [ 'overflow', 'overflowX', 'overflowY' ] );
							newStyle.overflow = overflow;
							if ( props.style.overflowX ) {
								newStyle.overflowX = props.style.overflowX;
							}
							if ( props.style.overflowY ) {
								newStyle.overflowY = props.style.overflowY;
							}
							props.onChange( newStyle );
						}}
						type="radio"
						size="small"
						value={props.style.overflow}
					>
						<ToggleButton
							variant="outline-secondary"
							value="visible"
							title="Visible"
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="hidden"
							title="Hidden"
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="scroll"
							title="Scroll"
						>
							<i className="fas fa-align-justify"></i>  &#8613;
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="auto"
							title="Auto"
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							auto
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Overflow-X
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={( overflowX ) => {
							const newStyle = omit( props.style, [ 'overflow', 'overflowX', 'overflowY' ] );
							if ( props.style.overflow ) {
								newStyle.overflow = props.style.overflow;
							}
							if ( props.style.overflowY ) {
								newStyle.overflowY = props.style.overflowY;
							}
							if ( overflowX !== 'visible' ) {
								newStyle.overflowX = overflowX;
							}
							props.onChange( newStyle );
						}}
						type="radio"
						size="small"
						value={props.style.overflowX}
					>
						<ToggleButton
							variant="outline-secondary"
							value="visible"
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="hidden"
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="scroll"
						>
							<i className="fas fa-align-justify"></i>  &#8613;
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="auto"
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							auto
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Overflow-Y
				</Form.Label>
				<Col sm={9} >
					<ToggleButtonGroup
						name="options"
						defaultValue="visible"
						onChange={( overflowY ) => {
							const newStyle = omit( props.style, [ 'overflow', 'overflowX', 'overflowY' ] );
							if ( props.style.overflow ) {
								newStyle.overflow = props.style.overflow;
							}
							if ( props.style.overflowX ) {
								newStyle.overflowX = props.style.overflowX;
							}
							if ( overflowY !== 'visible' ) {
								newStyle.overflowY = overflowY;
							}
							props.onChange( newStyle );
						}}
						type="radio"
						size="small"
						value={props.style.overflowY}
					>
						<ToggleButton
							variant="outline-secondary"
							value="visible"
						>
							<i className="far fa-eye"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="hidden"
						>
							<i className="fas fa-eye-slash"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="scroll"
						>
							<i className="fas fa-align-justify"></i>  &#8613;
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="auto"
							style={{ fontVariant: 'small-caps', fontWeight: 700 }}
						>
							auto
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					Fit
				</Form.Label>
				<Col sm={4} >
					<SelectInput
						defaultValue={props.style.fit || FIT_OPTIONS[ 0 ]}
						options={FIT_OPTIONS}
						onChange={( fit ) => {
							const newStyle = { ...props.style };
							newStyle.fit = fit;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Size;
