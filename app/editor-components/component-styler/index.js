// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
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


// MAIN //

const ComponentStyler = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	return (
		<div className="component-styler" >
			<span className="component-styler-heading" >Customize style <Button size="sm" variant="light" style={{ float: 'right' }} onClick={props.onHide}>X</Button></span>
			<Accordion canCloseAll headers={[ 'Background', 'Typography', 'Margins' ]} headerStyle={{ fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' }} >
				<div style={{ marginTop: 12, position: 'relative', height: '320px' }} >
					<ColorPicker
						style={{ position: 'absolute', left: '0px' }}
						color={props.style.backgroundColor}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newStyle = { ...props.style };
							newStyle.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a} )`;
							props.onChange( newStyle );
						}}
					/>
				</div>
				<div style={{ marginTop: 12, position: 'relative', height: '320px', padding: 15 }} >
					<Form.Group as={Row} >
						<Form.Label column sm="3">
							Color
						</Form.Label>
						<Col sm="9">
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
								<Button size="sm" style={{ backgroundColor: props.style.color }} >
									{props.style.color || 'Choose Color'}
								</Button>
							</OverlayTrigger>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="3">
							Font Family
						</Form.Label>
						<Col sm="9">
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
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm="3">
							Font Weight
						</Form.Label>
						<Col sm="9">
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
						<Form.Label column sm="3">
							Align
						</Form.Label>
						<Col sm="9">
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
									style={{
										fontSize: '12px'
									}}
								>
									<i className="fas fa-align-left"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="center"
									style={{
										fontSize: '12px'
									}}
								>
									<i className="fas fa-align-center"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="right"
									style={{
										fontSize: '12px'
									}}
								>
									<i className="fas fa-align-right"></i>
								</ToggleButton>
								<ToggleButton
									variant="outline-secondary"
									value="justify"
									style={{
										fontSize: '12px'
									}}
								>
									<i className="fas fa-align-justify"></i>
								</ToggleButton>
							</ToggleButtonGroup>
						</Col>
					</Form.Group>
				</div>
				<div>
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
