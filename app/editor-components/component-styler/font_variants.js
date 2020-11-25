
// MODULES //

import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SelectInput from 'components/input/select';
import TextShadowInput from './text_shadow_input.js';


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


// MAIN //

const FontVariants = ( props ) => {
	return (
		<Fragment>
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
		</Fragment>
	);
};


// EXPORTS //

export default FontVariants;
