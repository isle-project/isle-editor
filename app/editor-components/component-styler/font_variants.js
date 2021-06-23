
// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
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

const FontVariants = ({ style, onChange, t }) => {
	let initialTextShadow = style.textShadow;
	if ( initialTextShadow ) {
		initialTextShadow = initialTextShadow.split( RE_SEPARATOR );
	}
	const [ textShadows, setTextShadows ] = useState( initialTextShadow || [] );
	const handleTextTransformChange = useCallback( ( textTransform ) => {
		const newStyle = { ...style };
		newStyle.textTransform = textTransform;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleWhitespaceChange = useCallback( ( whiteSpace ) => {
		const newStyle = { ...style };
		newStyle.whiteSpace = whiteSpace;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleFontVariantChange = useCallback( ( fontVariant ) => {
		const newStyle = { ...style };
		newStyle.fontVariant = fontVariant;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleNewShadow = useCallback( ( shadow ) => {
		const newTextShadows = textShadows.slice();
		newTextShadows.push( shadow );
		setTextShadows( newTextShadows );
		const newStyle = omit( style, 'textShadow' );
		newStyle.textShadow = newTextShadows.join( ', ' );
		onChange( newStyle );
	}, [ onChange, style, textShadows ] );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t('transform')}
				</Form.Label>
				<Col sm={3}>
					<SelectInput
						clearable
						options={FONT_TRANSFORM}
						placeholder="Inherit"
						onChange={handleTextTransformChange}
					/>
				</Col>
				<Form.Label column sm="3">
					{t('break')}
				</Form.Label>
				<Col sm={3}>
					<SelectInput
						clearable
						options={FONT_BREAKS}
						defaultValue={style.whiteSpace}
						placeholder="Inherit"
						onChange={handleWhitespaceChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="3">
					{t('font-variant')}
				</Form.Label>
				<Col sm={9}>
					<SelectInput
						clearable
						options={FONT_VARIANTS}
						defaultValue={style.fontVariant}
						placeholder="Inherit"
						onChange={handleFontVariantChange}
					/>
				</Col>
			</Form.Group>
			<hr />
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>
				{t('text-shadows')}
			</p>
			<ListGroup>
				{textShadows.map( ( transition, idx ) => {
					return (
						<ListGroup.Item key={`transition-${idx}`}>
							{transition}
							<Button
								aria-label={t('delete')}
								variant="danger"
								size="sm"
								onClick={() => {
									const newTextShadows = textShadows.slice();
									newTextShadows.splice( idx, 1 );
									setTextShadows( newTextShadows );
									const newStyle = { ...style };
									newStyle.textShadow = newTextShadows.join( ', ' );
									onChange( newStyle );
								}}
								style={{ float: 'right' }}
							>
								<div className="fa fa-times" />
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			{textShadows.length === 0 ? <p>{t('no-text-shadows')}</p> : null}
			<hr />
			<TextShadowInput
				style={style}
				onChange={handleNewShadow}
				t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default FontVariants;
