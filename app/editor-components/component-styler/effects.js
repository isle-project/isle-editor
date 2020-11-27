// MODULES //

import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import omit from '@stdlib/utils/omit';
import roundn from '@stdlib/math/base/special/roundn';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import SliderInput from 'components/input/slider';


// VARIABLES //

const CSS_ATTRIBUTES = [
	{
		label: 'General',
		options: [
			{ label: 'Opacity', value: 'opacity' },
			{ label: 'Margin', value: 'margin' },
			{ label: 'Padding', value: 'padding' },
			{ label: 'Border', value: 'border' },
			{ label: 'Transform', value: 'transform' },
			{ label: 'Filter', value: 'filter' },
			{ label: 'Flex', value: 'flex' }
		]
	},
	{
		label: 'Background',
		options: [
			{ label: 'Background Color', value: 'background-color' },
			{ label: 'Background Position', value: 'background-position' },
			{ label: 'Text Shadow', value: 'text-shadow' },
			{ label: 'Box Shadow', value: 'box-shadow' },
			{ label: 'Transform', value: 'transform' }
		]
	},
	{
		label: 'Size',
		options: [
			{ label: 'Width', value: 'width' },
			{ label: 'Height', value: 'height' },
			{ label: 'Max Height', value: 'max-height' },
			{ label: 'Max Width', value: 'max-width' },
			{ label: 'Min Height', value: 'min-height' },
			{ label: 'Min Width', value: 'min-width' }
		]
	},
	{
		label: 'Borders',
		options: [
			{ label: 'Border Radius', value: 'border-radius' },
			{ label: 'Border Color', value: 'border-color' },
			{ label: 'Border Width', value: 'border-with' }
		]
	},
	{
		label: 'Typography',
		options: [
			{ label: 'Font Color', value: 'font-color' },
			{ label: 'Font Size', value: 'font-size' },
			{ label: 'Line Height', value: 'line-height' },
			{ label: 'Letter Spacing', value: 'letter-spacing' },
			{ label: 'Text Indent', value: 'text-indent' },
			{ label: 'Word Spacing', value: 'word-spacing' }
		]
	},
	{
		label: 'Position',
		options: [
			{ label: 'Top', value: 'top' },
			{ label: 'Left', value: 'left' },
			{ label: 'Right', value: 'right' },
			{ label: 'Bottom', value: 'bottom' },
			{ label: 'Z-Index', value: 'z-index' }
		]
	},
	{
		label: 'Margins',
		options: [
			{ label: 'Margin Bottom', value: 'margin-bottom' },
			{ label: 'Margin Left', value: 'margin-left' },
			{ label: 'Margin Right', value: 'margin-right' },
			{ label: 'Margin Top', value: 'margin-top' }
		]
	},
	{
		label: 'Padding',
		options: [
			{ label: 'Padding Bottom', value: 'padding-bottom' },
			{ label: 'Padding Left', value: 'padding-left' },
			{ label: 'Padding Right', value: 'padding-right' },
			{ label: 'Padding Top', value: 'padding-top' }
		]
	},
	{
		label: 'All Properties',
		options: [{ label: 'All Properties', value: 'all' }]
	}
];
const EASING_TYPES = [
	{ label: 'Linear', value: 'linear' },
	{ label: 'Ease', value: 'ease' },
	{ label: 'Ease In', value: 'ease-in' },
	{ label: 'Ease Out', value: 'ease-out' },
	{ label: 'Ease In Out', value: 'ease-in-out' },
	{ label: 'Ease In Quad', value: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)' },
	{ label: 'Ease In Cubic', value: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)' },
	{ label: 'Ease In Quart', value: 'cubic-bezier(0.895, 0.030, 0.685, 0.220)' },
	{ label: 'Ease In Quint', value: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)' },
	{ label: 'Ease In Sine', value: 'cubic-bezier(0.470, 0.000, 0.745, 0.715)' },
	{ label: 'Ease In Expo', value: 'cubic-bezier(0.950, 0.050, 0.795, 0.035)' }
];
const SELECT_STYLES = {
	option: base => ({ ...base, paddingLeft: 24, paddingTop: 4, paddingBottom: 4, fontSize: '0.85em' }),
	menuPortal: base => ({ ...base, zIndex: 1060 })
};


// FUNCTIONS //

function createTransition({ type, duration, easing, delay }) {
	let out = `${type} ${duration}s`;
	if ( easing ) {
		out += ` ${easing}`;
	}
	if ( isNumber( delay ) ) {
		out += ` ${delay}s`;
	}
	return out;
}

const TransitionPicker = ( props ) => {
	const [ type, setType ] = useState( 'all' );
	const [ duration, setDuration ] = useState( 1 );
	const [ easing, setEasing ] = useState( null );
	const [ delay, setDelay ] = useState( null );
	return (
		<Fragment>
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>Transitions</p>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Type
				</Form.Label>
				<Col sm={6} >
					<Select
						isClearable
						options={CSS_ATTRIBUTES}
						onChange={( elem ) => {
							let newType;
							if ( elem ) {
								newType = elem.value;
							} else {
								newType = null;
							}
							setType( newType );
							const newStyle = omit( props.style, 'transition' );
							const transition = createTransition({ type: newType, duration, easing, delay });
							newStyle.transition = transition;
							props.onChange( newStyle );
						}}
						defaultValue={{ label: 'All Properties', value: 'all' }}
						menuPortalTarget={document.body}
						styles={SELECT_STYLES}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Duration (in seconds)
				</Form.Label>
				<Col sm={8} >
					<SliderInput
						inline
						defaultValue={duration} step={0.01}
						min={0} max={5}
						onChange={( newDuration ) => {
							setDuration( newDuration );
							const newStyle = omit( props.style, 'transition' );
							const transition = createTransition({ type, duration: newDuration, easing, delay });
							newStyle.transition = transition;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Easing
				</Form.Label>
				<Col sm={6} >
					<Select
						isClearable
						options={EASING_TYPES}
						onChange={( elem ) => {
							let newEasing;
							if ( elem ) {
								newEasing = elem.value;
							} else {
								newEasing = null;
							}
							setEasing( newEasing );
							const newStyle = omit( props.style, 'transition' );
							const transition = createTransition({ type, duration, easing: newEasing, delay });
							newStyle.transition = transition;
							props.onChange( newStyle );
						}}
						menuPortalTarget={document.body}
						styles={SELECT_STYLES}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Delay (in seconds)
				</Form.Label>
				<Col sm={8} >
					<SliderInput
						inline
						defaultValue={0} step={0.01}
						min={0} max={5}
						onChange={( newDelay ) => {
							setDelay( newDelay );
							const newStyle = omit( props.style, 'transition' );
							const transition = createTransition({ type, duration, easing, delay: newDelay });
							newStyle.transition = transition;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// MAIN //

const Effects = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	const defaultOpacity = isUndefinedOrNull( props.style.opacity ) ? 100 : roundn( props.style.opacity * 100, -2 );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Opacity (in %)
				</Form.Label>
				<Col sm={8} >
					<SliderInput
						inline
						defaultValue={defaultOpacity}
						min={0} max={100}
						onChange={( value ) => {
							let opacity = Number( value ) / 100;
							opacity = roundn( opacity, -2 );
							const newStyle = { ...props.style };
							newStyle.opacity = opacity;
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Form.Group>
			<hr />
			<TransitionPicker style={props.style} onChange={props.onChange} />
		</Fragment>
	);
};


// EXPORTS //

export default Effects;
