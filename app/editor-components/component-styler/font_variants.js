
// MODULES //

import React, { Fragment, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import omit from '@stdlib/utils/omit';
import SelectInput from '@isle-project/components/input/select';
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
const RE_SEPARATOR = /(?<=[^\d]),/;


// MAIN //

const FontVariants = ( props ) => {
	let initialTextShadow = props.style.textShadow;
	if ( initialTextShadow ) {
		initialTextShadow = initialTextShadow.split( RE_SEPARATOR );
	}
	const [ textShadows, setTextShadows ] = useState( initialTextShadow || [] );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{props.t('transform')}
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
					{props.t('break')}
				</Form.Label>
				<Col sm={3}>
					<SelectInput
						clearable
						options={FONT_BREAKS}
						defaultValue={props.style.whiteSpace}
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
					{props.t('font-variant')}
				</Form.Label>
				<Col sm={9}>
					<SelectInput
						clearable
						options={FONT_VARIANTS}
						defaultValue={props.style.fontVariant}
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
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>Text Shadows</p>
			<ListGroup>
				{textShadows.map( ( transition, idx ) => {
					return (
						<ListGroup.Item key={`transition-${idx}`}>
							{transition}
							<Button
								variant="danger"
								size="sm"
								onClick={() => {
									const newTextShadows = textShadows.slice();
									newTextShadows.splice( idx, 1 );
									setTextShadows( newTextShadows );
									const newStyle = { ...props.style };
									newStyle.textShadow = newTextShadows.join( ', ' );
									props.onChange( newStyle );
								}}
								style={{ float: 'right' }}
							>
								<div className="fa fa-times" />
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			{textShadows.length === 0 ? <p>{props.t('no-text-shadows')}</p> : null}
			<hr />
			<TextShadowInput
				style={props.style}
				onChange={( shadow ) => {
					const newTextShadows = textShadows.slice();
					newTextShadows.push( shadow );
					setTextShadows( newTextShadows );
					const newStyle = omit( props.style, 'textShadow' );
					newStyle.textShadow = newTextShadows.join( ', ' );
					props.onChange( newStyle );
				}}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default FontVariants;
