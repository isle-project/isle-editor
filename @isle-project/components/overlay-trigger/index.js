// MODULES //

import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import isMobile from 'is-mobile';


// VARIABLES //

const IS_MOBILE = isMobile({
	tablet: true
});


// MAIN //

/**
* Wrapper around react-bootstrap's OverlayTrigger disabling the overlay on touch devices.
*/
class Placeholder extends Component {
	render() {
		if ( IS_MOBILE ) {
			// Do not render tooltips on touch devices to prevent users from having to double tap buttons:
			return this.props.children;
		}
		return <OverlayTrigger {...this.props} >{this.props.children}</OverlayTrigger>;
	}
}


// EXPORTS //

export default Placeholder;
