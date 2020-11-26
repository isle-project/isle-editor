// MODULES //

import React, { Fragment } from 'react';
import BoxShadowInput from './box_shadow_input.js';


// MAIN //

const BoxShadows = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<BoxShadowInput style={props.style} onChange={props.onChange} />
		</Fragment>
	);
};


// EXPORTS //

export default BoxShadows;
