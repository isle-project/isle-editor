// MODULES //

import React, { Fragment, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import deg2Rad from '@stdlib/math/base/special/deg2rad';
import roundn from '@stdlib/math/base/special/roundn';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import BoxShadowInput from './box_shadow_input.js';


// VARIABLES //

const RE_UNIT = /(\d+)([^\d]+)/;
const RE_SEPARATOR = /(?<=[^\d]),/;


// MAIN //

const BoxShadows = ( props ) => {
	let initialShadows = props.style.boxShadow;
	if ( initialShadows ) {
		initialShadows = initialShadows.split( RE_SEPARATOR );
	}
	const [ shadows, setShadows ] = useState( initialShadows || [] );
	if ( !props.active ) {
		return null;
	}
	const handleChange = ({ inset, angle, distance, blur, color }) => {
		const newStyle = { ...props.style };
		const radians = deg2Rad( angle );
		const match = RE_UNIT.exec( distance );
		if ( match ) {
			const numDistance = match[ 1 ];
			const distUnit = match[ 2 ];
			const xDistance = roundn( cos( radians ) * numDistance, -3 );
			const yDistance = roundn( sin( radians ) * numDistance, -3 );
			const shadow = `${inset ? 'inset ' : ''}${xDistance}${distUnit} ${yDistance}${distUnit} ${blur} ${color}`;
			const newShadows = shadows.slice();
			newShadows.push( shadow );
			setShadows( newShadows );
			newStyle.boxShadow = newShadows.join( ', ' );
			props.onChange( newStyle );
		}
	};
	return (
		<Fragment>
			<ListGroup>
				{shadows.map( ( shadow, idx ) => {
					return (
						<ListGroup.Item key={`shadow-${idx}`}>
							{shadow}
							<Button
								variant="danger"
								size="sm"
								onClick={() => {
									const newShadows = shadows.slice();
									newShadows.splice( idx, 1 );
									setShadows( newShadows );
									const newStyle = { ...props.style };
									newStyle.boxShadow = newShadows.join( ', ' );
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
			{shadows.length === 0 ? <p>No box shadows currently applied</p> : null}
			<hr />
			<BoxShadowInput
				style={props.style}
				onChange={handleChange}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default BoxShadows;
