// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import omit from '@stdlib/utils/omit';
import roundn from '@stdlib/math/base/special/roundn';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import SliderInput from '@isle-project/components/input/slider';
import TransitionPicker from './transition_picker.js';


// VARIABLES //

const RE_SEPARATOR = /(?<=[^\d]),/;
const DELETE_BUTTON_STYLE = { float: 'right' };


// MAIN //

const Effects = ({ active, style, onChange, t }) => {
	let initialTransitions = style.boxShadow;
	if ( initialTransitions ) {
		initialTransitions = initialTransitions.split( RE_SEPARATOR );
	}
	const [ transitions, setTransitions ] = useState( initialTransitions || [] );
	const handleOpacityChange = useCallback( ( value ) => {
		let opacity = Number( value ) / 100;
		opacity = roundn( opacity, -2 );
		const newStyle = { ...style };
		newStyle.opacity = opacity;
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleTransitionChange = useCallback( ( transition ) => {
		const newTransitions = transitions.slice();
		newTransitions.push( transition );
		const newStyle = omit( style, 'transition' );
		newStyle.transition = newTransitions.join( ', ' );
		onChange( newStyle );
		setTransitions( newTransitions );
	}, [ onChange, style, transitions ] );
	if ( !active ) {
		return null;
	}
	const defaultOpacity = isUndefinedOrNull( style.opacity ) ? 100 : roundn( style.opacity * 100, -2 );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{t('opacity')}
				</Form.Label>
				<Col sm={8} >
					<SliderInput
						inline
						defaultValue={defaultOpacity}
						min={0} max={100}
						onChange={handleOpacityChange}
					/>
				</Col>
			</Form.Group>
			<hr />
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>
				{t('transitions')}
			</p>
			<ListGroup>
				{transitions.map( ( transition, idx ) => {
					return (
						<ListGroup.Item key={`transition-${idx}`}>
							{transition}
							<Button
								variant="danger"
								size="sm"
								onClick={() => {
									const newTransitions = transitions.slice();
									newTransitions.splice( idx, 1 );
									setTransitions( newTransitions );
									const newStyle = { ...style };
									newStyle.transition = newTransitions.join( ', ' );
									onChange( newStyle );
								}}
								style={DELETE_BUTTON_STYLE}
							>
								<div className="fa fa-times" />
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			{transitions.length === 0 ? <p>{t('no-transitions')}</p> : null}
			<hr />
			<TransitionPicker
				style={style}
				onChange={handleTransitionChange}
				t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default Effects;
