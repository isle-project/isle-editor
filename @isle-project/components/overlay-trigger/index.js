// MODULES //

import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import isTouchDevice from 'is-touch-device';


// VARIABLES //

const IS_TOUCH = isTouchDevice();


// MAIN //

/**
* Wrapper around react-bootstrap's OverlayTrigger disabling the overlay on touch devices.
*/
class Placeholder extends Component {
	render() {
		if ( IS_TOUCH ) {
			// Do not render tooltips on touch devices to prevent users from having to double tap buttons:
			return this.props.children;
		}
		return <OverlayTrigger {...this.props} >{this.props.children}</OverlayTrigger>;
	}
}


// EXPORTS //

export default Placeholder;
