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
import deg2Rad from '@stdlib/math/base/special/deg2rad';
import roundn from '@stdlib/math/base/special/roundn';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
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
const FONT_TRANSFORM = [
	'none',
	'uppercase',
	'lowercase',
	'capitalize'
];
const FONT_VARIANTS = [
	'normal',
	'small-caps',
	'all-small-caps',
	'petite-caps',
	'all-petite-caps',
	'unicase',
	'titling-caps'
];
const FONT_BREAKS = [
	'normal',
	'nowrap',
	'pre',
	'pre-line',
	'pre-wrap'
];
const ACCORDION_ITEM_STYLE = {
	marginTop: 12,
	position: 'relative',
	padding: 15
};
const RE_UNIT = /(\d+)([^\d]+)/;


// FUNCTIONS //

const TextShadowInput = ( props ) => {
	const [ state, setState ] = useState({
		angle: 0,
		distance: 0,
		blur: 0,
		color: 'rgba(0, 0, 0, 1)'
	});
	const handleChange = ({ angle, distance, blur, color }) => {
		const newStyle = { ...props.style };
		const radians = deg2Rad( angle );
		const match = RE_UNIT.exec( distance );
		if ( match ) {
			const numDistance = match[ 1 ];
			const distUnit = match[ 2 ];
			const xDistance = roundn( cos( radians ) * numDistance, -3 );
			const yDistance = roundn( sin( radians ) * numDistance, -3 );
			newStyle.textShadow = `${xDistance}${distUnit} ${yDistance}${distUnit} ${blur} ${color}`;
			props.onChange( newStyle );
		}
	};
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Angle
				</Form.Label>
				<Col sm={2} >
					<Form.Control
						type="number" min={0} max={365}
						onChange={( event ) => {
							const newState = {
								...state,
								angle: event.target.value
							};
							setState( newState );
							handleChange( newState );
						}}
					/>
				</Col>
				<UnitInputBase
					label="Distance"
					labelWidth={2} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							distance: value
						};
						setState( newState );
						handleChange( newState );
					}}
				/>
				<UnitInputBase
					label="Blur"
					labelWidth={1} style={props.style}
					onChange={( value ) => {
						const newState = {
							...state,
							blur: value
						};
						setState( newState );
						handleChange( newState );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					Color
				</Form.Label>
				<Col sm="11">
					<OverlayTrigger
						overlay={<ColorPicker
							color={state.color}
							style={{ zIndex: 2000 }}
							onChange={({ rgb }) => {
								const { r, g, b, a } = rgb;
								const newState = {
									...state,
									color: `rgba(${r}, ${g}, ${b}, ${a} )`
								};
								setState( newState );
								handleChange( newState );
							}}
						/>}
						placement="bottom-end"
						trigger={[ 'click' ]}
					>
						<Button size="sm" style={{ backgroundColor: state.color, width: 38, height: 38 }} >
						</Button>
					</OverlayTrigger>
				</Col>
			</Form.Group>
		</Fragment>
	);
};

const UnitInputBase = ( props ) => {
	const [ unit, setUnit ] = useState( 'px' );
	const [ value, setValue ] = useState( null );
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
							props.onChange( `${event.target.value}${unit}`);
						}}
					/>
					<InputGroup.Append>
						<Form.Control
							as="select"
							style={{ padding: 3, background: 'silver' }}
							onChange={( event ) => {
								setUnit( event.target.value );
								if ( value ) {
									props.onChange( `${value}${event.target.value}`);
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
						<Col sm={3}>
							<SelectInput
								clearable
								options={FONT_TRANSFORM}
								placeholder="Inherit"
								onChange={( textTransform ) => {
									const newStyle = { ...props.style };
									newStyle.textTransform = textTransform;
									props.onChange( newStyle );
								}}
							/>
						</Col>
						<Form.Label column sm="3">
							Break
						</Form.Label>
						<Col sm={3}>
							<SelectInput
								clearable
								options={FONT_BREAKS}
								placeholder="Inherit"
								onChange={( whiteSpace ) => {
									const newStyle = { ...props.style };
									newStyle.whiteSpace = whiteSpace;
									props.onChange( newStyle );
								}}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="3">
							Font Variant
						</Form.Label>
						<Col sm={9}>
							<SelectInput
								clearable
								options={FONT_VARIANTS}
								placeholder="Inherit"
								onChange={( fontVariant ) => {
									const newStyle = { ...props.style };
									newStyle.fontVariant = fontVariant;
									props.onChange( newStyle );
								}}
							/>
						</Col>
					</Form.Group>
					<hr />
					<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>Text Shadow</p>
					<TextShadowInput style={props.style} onChange={props.onChange} />
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
