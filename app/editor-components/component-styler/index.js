// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'components/accordion';
import ColorPicker from 'components/color-picker';
import SelectInput from 'components/input/select';
import TextShadowInput from './text_shadow_input.js';
import SpacingSetter from './spacing_setter.js';
import Typography from './typography.js';
import './styler.css';


// VARIABLES //

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


// MAIN //

const ComponentStyler = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	return (
		<div className="component-styler" >
			<span className="component-styler-heading" >Customize style <Button size="sm" variant="light" className="component-styler-close-button" onClick={props.onHide}>X</Button></span>
			<Accordion
				className="component-styler-accordion"
				canCloseAll
				headers={[ 'Layout & Background', 'Spacing & Size', 'Position', 'Typography', 'Font Variants', 'Borders', 'Display' ]}
				headerStyle={{ fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' }}
			>
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
				<div style={{ ...ACCORDION_ITEM_STYLE, height: 260 }} >
					<SpacingSetter style={props.style} onChange={props.onChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Typography style={props.style} onChange={props.onChange} />
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
				<div style={ACCORDION_ITEM_STYLE} >

				</div>
				<div style={ACCORDION_ITEM_STYLE} >

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
