// MODULES //

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'components/accordion';
import ColorPicker from 'components/color-picker';
import SelectInput from 'components/input/select';
import './styler.css';


// VARIABLES //

const FONTS = [
	'Arial',
	'Arial Black',
	'Tahoma',
	'Trebuchet MS',
	'Verdana',
	'Open Sans',
	'Open Sans Condensed',
	'Century Gothic',
	'Geneva',
	'Lucida',
	'Lucida Sans',
	'Lucida Grande',
	'Courier',
	'Courier New',
	'Georgia',
	'Times',
	'Times New Roman',
	'MS serif',
	'Palatino Linotype'
];
const FONT_WEIGHTS = [
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800
];
const UNIT_TYPES = [
	'px',
	'%',
	'em',
	'vh',
	'vw'
];
const FONT_VARIANTS = [
	'none',
	'uppercase',
	'lowercase',
	'capitalize'
];
const ACCORDION_ITEM_STYLE = {
	marginTop: 12,
	position: 'relative',
	padding: 15
};


// FUNCTIONS //

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


// MAIN //

const ComponentStyler = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	return (
		<div className="component-styler" >
			<span className="component-styler-heading" >Customize style <Button size="sm" variant="light" style={{ float: 'right' }} onClick={props.onHide}>X</Button></span>
			<Accordion canCloseAll headers={[ 'Background', 'Typography', 'Font Variants' ]} headerStyle={{ fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' }} >
				<div style={ACCORDION_ITEM_STYLE} >
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
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Form.Group as={Row} >
						<Form.Label column sm="1">
							Color
						</Form.Label>
						<Col sm="2">
							<OverlayTrigger
								overlay={<ColorPicker
									style={{ zIndex: 2000 }}
									color={props.style.color}
									onChange={({ rgb }) => {
										const { r, g, b, a } = rgb;
										const newStyle = { ...props.style };
										newStyle.color = `rgba(${r}, ${g}, ${b}, ${a} )`;
										props.onChange( newStyle );
									}}
								/>}
								placement="bottom-end"
								trigger={[ 'click' ]}
							>
								<Button size="sm" style={{ backgroundColor: props.style.color, width: 38, height: 38 }} >
								</Button>
							</OverlayTrigger>
						</Col>
						<UnitInput
							label="Size"
							property="fontSize"
							onChange={props.onChange}
							style={props.style}
						/>
						<UnitInput
							label="Height"
							property="lineHeight"
							onChange={props.onChange}
							style={props.style}
							labelWidth={2} colWidth={2}
						/>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="2">
							Font
						</Form.Label>
						<Col sm="5">
							<SelectInput
								clearable
								options={FONTS}
								placeholder="Inherit"
								onChange={( fontFamily ) => {
									const newStyle = { ...props.style };
									newStyle.fontFamily = fontFamily;
									props.onChange( newStyle );
								}}
							/>
						</Col>
						<Form.Label column sm="2">
							Weight
						</Form.Label>
						<Col sm="3">
							<SelectInput
								clearable
								options={FONT_WEIGHTS}
								placeholder="Inherit"
								onChange={( fontWeight ) => {
									const newStyle = { ...props.style };
									newStyle.fontWeight = fontWeight;
									props.onChange( newStyle );
								}}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="2">
							Align
						</Form.Label>
						<Col sm="10">
							<ToggleButtonGroup
								name="options"
								onChange={( textAlign ) => {
									const newStyle = { ...props.style };
									newStyle.textAlign = textAlign;
									props.onChange( newStyle );
								}}
								type="radio"
								size="small"
								value={props.style.textAlign || 'left'}
								style={{ marginRight: '5px' }}
							>
								<ToggleButton
									variant="outline-secondary"
									value="left"
								>
									<i className="fas fa-align-left"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="center"
								>
									<i className="fas fa-align-center"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="right"
								>
									<i className="fas fa-align-right"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="justify"
								>
									<i className="fas fa-align-justify"></i>
								</ToggleButton>
							</ToggleButtonGroup>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="2">
							Style
						</Form.Label>
						<Col sm="10">
							<ToggleButtonGroup
								name="options"
								onChange={( fontStyle ) => {
									const newStyle = { ...props.style };
									newStyle.fontStyle = fontStyle;
									props.onChange( newStyle );
								}}
								type="radio"
								size="small"
								value={props.fontSize}
								style={{ marginRight: '5px' }}
							>
								<ToggleButton
									variant="outline-secondary"
									value="regular"
								>
									<i className="fas fa-font"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="italic"
								>
									<i className="fas fa-italic"></i>
								</ToggleButton>
							</ToggleButtonGroup>
							<ToggleButtonGroup
								name="options"
								onChange={( textDecoration ) => {
									const newStyle = { ...props.style };
									newStyle.textDecoration = textDecoration;
									props.onChange( newStyle );
								}}
								type="radio"
								size="small"
								value={props.fontSize}
								style={{ marginRight: '5px' }}
							>
								<ToggleButton
									variant="outline-secondary"
									value="none"
								>
									<i className="fas fa-times"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="line-through"
								>
									<i className="fas fa-strikethrough"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="underline"
								>
									<i className="fas fa-underline"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="overline"
								>
									<i style={{ transform: 'rotate(180deg)' }} className="fas fa-underline"></i>
								</ToggleButton>
							</ToggleButtonGroup>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<UnitInput
							label="Letter Spacing"
							property="letterSpacing"
							onChange={props.onChange}
							style={props.style}
							labelWidth={3} colWidth={4}
						/>
						<UnitInput
							label="Indent"
							property="textIndent"
							onChange={props.onChange}
							style={props.style}
							labelWidth={2} colWidth={3}
						/>
					</Form.Group>
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Form.Group as={Row} >
						<Form.Label column sm="3">
							Transform
						</Form.Label>
						<Col sm={9}>
							<SelectInput
								clearable
								options={FONT_VARIANTS}
								placeholder="Inherit"
								onChange={( textTransform ) => {
									const newStyle = { ...props.style };
									newStyle.textTransform = textTransform;
									props.onChange( newStyle );
								}}
							/>
						</Col>
					</Form.Group>
				</div>
			</Accordion>
		</div>
	);
};


// PROPERTIES //

ComponentStyler.defaultProps = {
	style: {}
};

ComponentStyler.propTypes = {
	style: PropTypes.object
};


// EXPORTS //

export default ComponentStyler;
