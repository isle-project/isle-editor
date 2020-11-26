// MODULES //

import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliderInput from 'components/input/slider';
import roundn from '@stdlib/math/base/special/roundn';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';


// MAIN //

const Effects = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	const defaultOpacity = isUndefinedOrNull( props.style.opacity ) ? 100 : roundn( props.style.opacity * 100, -2 );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
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
		</Fragment>
	);
};


// EXPORTS //

export default Effects;
