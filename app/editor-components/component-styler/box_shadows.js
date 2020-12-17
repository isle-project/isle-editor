// MODULES //

import React, { Fragment, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import BoxShadowInput from './box_shadow_input.js';


// VARIABLES //

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
								<div className="fa fa-times" />
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			{shadows.length === 0 ? <p>{props.t('no-box-shadows')}</p> : null}
			<hr />
			<BoxShadowInput
				style={props.style}
				onChange={( shadow ) => {
					const newStyle = { ...props.style };
					const newShadows = shadows.slice();
					newShadows.push( shadow );
					setShadows( newShadows );
					newStyle.boxShadow = newShadows.join( ', ' );
					props.onChange( newStyle );
				}}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default BoxShadows;
