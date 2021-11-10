// MODULES //

import React, { Fragment, useCallback } from 'react';
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
const SELECT_COMPONENTS = { Option, SingleValue };


// MAIN //

const Typography = ({ active, style, onChange, t }) => {
	const handleColorChange = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newStyle = { ...style };
		newStyle.color = `rgba(${r}, ${g}, ${b}, ${a} )`; // eslint-disable-line i18next/no-literal-string
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFontFamilyChange = useCallback( ( fontFamily ) => {
		const newStyle = { ...style };
		newStyle.fontFamily = fontFamily;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFontWeightChange = useCallback( ( fontWeight ) => {
		const newStyle = { ...style };
		newStyle.fontWeight = fontWeight;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleTextAlignChange = useCallback( ( textAlign ) => {
		const newStyle = { ...style };
		newStyle.textAlign = textAlign;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFontStyleChange = useCallback( ( fontStyle ) => {
		const newStyle = { ...style };
		newStyle.fontStyle = fontStyle;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleTextDecorationChange = useCallback( ( textDecoration ) => {
		const newStyle = { ...style };
		newStyle.textDecoration = textDecoration;
		onChange( newStyle );
	}, [ onChange, style ] );
	if ( !active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="1">
					{t('color')}
				</Form.Label>
				<Col sm="2">
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={style.color}
						onChange={handleColorChange}
						variant="Button"
					/>
				</Col>
				<UnitInput
					label={t('size')}
					property="fontSize"
					onChange={onChange}
					style={style}
				/>
				<UnitInput
					label={t('height')}
					property="lineHeight"
					onChange={onChange}
					style={style}
					labelWidth={2} colWidth={2}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="2">
					{t('font')}
				</Form.Label>
				<Col sm="5">
					<SelectInput
						clearable
						options={FONTS}
						defaultValue={style.fontFamily}
						components={SELECT_COMPONENTS}
						placeholder={t('inherit')}
						onChange={handleFontFamilyChange}
					/>
				</Col>
				<Form.Label column sm="2">
					{t('weight')}
				</Form.Label>
				<Col sm="3">
					<SelectInput
						clearable
						options={FONT_WEIGHTS}
						defaultValue={style.fontWeight}
						placeholder={t('inherit')}
						onChange={handleFontWeightChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="2">
					{t('align')}
				</Form.Label>
				<Col sm="10">
					<ToggleButtonGroup
						name="options"
						onChange={handleTextAlignChange}
						type="radio"
						size="small"
						value={style.textAlign || 'left'}
					>
						<ToggleButton
							id="toggle-text-align-left"
							variant="outline-secondary"
							value="left"
						>
							<i className="fas fa-align-left"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-align-center"
							variant="outline-secondary"
							value="center"
						>
							<i className="fas fa-align-center"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-align-right"
							variant="outline-secondary"
							value="right"
						>
							<i className="fas fa-align-right"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-align-justify"
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
					{t('style')}
				</Form.Label>
				<Col sm="10">
					<ToggleButtonGroup
						name="options"
						onChange={handleFontStyleChange}
						type="radio"
						size="small"
						value={style.fontStyle}
						style={{ marginRight: 6 }}
					>
						<ToggleButton
							id="toggle-font-style-regular"
							variant="outline-secondary"
							value="regular"
						>
							<i className="fas fa-font"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-font-style-italic"
							variant="outline-secondary"
							value="italic"
						>
							<i className="fas fa-italic"></i>
						</ToggleButton>
					</ToggleButtonGroup>
					<ToggleButtonGroup
						name="options"
						onChange={handleTextDecorationChange}
						type="radio"
						size="small"
						value={style.textDecoration}
					>
						<ToggleButton
							id="toggle-text-decoration-none"
							variant="outline-secondary"
							value="none"
						>
							<i className="fas fa-times"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-decoration-underline"
							variant="outline-secondary"
							value="line-through"
						>
							<i className="fas fa-strikethrough"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-decoration-overline"
							variant="outline-secondary"
							value="underline"
						>
							<i className="fas fa-underline"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-text-decoration-line-through"
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
					label={t('letter-spacing')}
					property="letterSpacing"
					onChange={onChange}
					style={style}
					labelWidth={3} colWidth={4}
				/>
				<UnitInput
					label={t('indent')}
					property="textIndent"
					onChange={onChange}
					style={style}
					labelWidth={2} colWidth={3}
				/>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Typography;
