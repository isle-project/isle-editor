// MODULES //

import React, { Fragment, useState } from 'react';
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


// MAIN //

const Effects = ( props ) => {
	let initialTransitions = props.style.boxShadow;
	if ( initialTransitions ) {
		initialTransitions = initialTransitions.split( RE_SEPARATOR );
	}
	const [ transitions, setTransitions ] = useState( initialTransitions || [] );
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
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>Transitions</p>
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
									const newStyle = { ...props.style };
									newStyle.transition = newTransitions.join( ', ' );
									props.onChange( newStyle );
								}}
								style={{ float: 'right' }}
							>
								x
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			{transitions.length === 0 ? <p>No transitions currently applied</p> : null}
			<hr />
			<TransitionPicker
				style={props.style}
				onChange={( transition ) => {
					const newTransitions = transitions.slice();
					newTransitions.push( transition );
					const newStyle = omit( props.style, 'transition' );
					newStyle.transition = newTransitions.join( ', ' );
					props.onChange( newStyle );
					setTransitions( newTransitions );
				}}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default Effects;
