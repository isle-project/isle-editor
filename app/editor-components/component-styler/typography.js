// MODULES //

import React, { Fragment } from 'react';
import { components } from 'react-select';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorPicker from '@isle-project/components/color-picker';
import SelectInput from '@isle-project/components/input/select';
import UnitInput from './unit_input.js';
import FONT_WEIGHTS from './font_weights.json';
import FONTS from './fonts.json';


// VARIABLES //

const Option = props => {
	return ( <components.Option key={props.data.label} {...props} >
		<span style={{ fontFamily: props.data.label }}>{props.data.label}</span>
	</components.Option> );
};
const SingleValue = ( props ) => {
	return (
		<components.SingleValue {...props}>
			<span style={{ fontFamily: props.data.label }}>{props.data.label}</span>
		</components.SingleValue>
	);
};


// MAIN //

const Typography = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					{props.t('color')}
				</Form.Label>
				<Col sm="2">
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={props.style.color}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const newStyle = { ...props.style };
							newStyle.color = `rgba(${r}, ${g}, ${b}, ${a} )`;
							props.onChange( newStyle );
						}}
						variant="Button"
					/>
				</Col>
				<UnitInput
					label={props.t('size')}
					property="fontSize"
					onChange={props.onChange}
					style={props.style}
				/>
				<UnitInput
					label={props.t('height')}
					property="lineHeight"
					onChange={props.onChange}
					style={props.style}
					labelWidth={2} colWidth={2}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="2">
					{props.t('font')}
				</Form.Label>
				<Col sm="5">
					<SelectInput
						clearable
						options={FONTS}
						defaultValue={props.style.fontFamily}
						components={{ Option, SingleValue }}
						placeholder={props.t('inherit')}
						onChange={( fontFamily ) => {
							const newStyle = { ...props.style };
							newStyle.fontFamily = fontFamily;
							props.onChange( newStyle );
						}}
					/>
				</Col>
				<Form.Label column sm="2">
					{props.t('weight')}
				</Form.Label>
				<Col sm="3">
					<SelectInput
						clearable
						options={FONT_WEIGHTS}
						defaultValue={props.style.fontWeight}
						placeholder={props.t('inherit')}
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
					{props.t('align')}
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
					{props.t('style')}
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
						value={props.style.fontStyle}
						style={{ marginRight: 6 }}
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
						value={props.style.textDecoration}
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
					label={props.t('letter-spacing')}
					property="letterSpacing"
					onChange={props.onChange}
					style={props.style}
					labelWidth={3} colWidth={4}
				/>
				<UnitInput
					label={props.t('indent')}
					property="textIndent"
					onChange={props.onChange}
					style={props.style}
					labelWidth={2} colWidth={3}
				/>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Typography;
