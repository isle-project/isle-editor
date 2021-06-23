// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import BoxShadowInput from './box_shadow_input.js';


// VARIABLES //

const RE_SEPARATOR = /(?<=[^\d]),/;


// MAIN //

const BoxShadows = ({ active, style, onChange, t }) => {
	let initialShadows = style.boxShadow;
	if ( initialShadows ) {
		initialShadows = initialShadows.split( RE_SEPARATOR );
	}
	const [ shadows, setShadows ] = useState( initialShadows || [] );
	const handleBoxShadowInput = useCallback( ( shadow ) => {
		const newStyle = { ...style };
		const newShadows = shadows.slice();
		newShadows.push( shadow );
		setShadows( newShadows );
		newStyle.boxShadow = newShadows.join( ', ' );
		onChange( newStyle );
	}, [ onChange, shadows, style ] );
	if ( !active ) {
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
								aria-label={t('delete')}
								variant="danger"
								size="sm"
								onClick={() => {
									const newShadows = shadows.slice();
									newShadows.splice( idx, 1 );
									setShadows( newShadows );
									const newStyle = { ...style };
									newStyle.boxShadow = newShadows.join( ', ' );
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
			{shadows.length === 0 ? <p>{t('no-box-shadows')}</p> : null}
			<hr />
			<BoxShadowInput
				style={style}
				onChange={handleBoxShadowInput}
				t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default BoxShadows;
