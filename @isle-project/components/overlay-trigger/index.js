// MODULES //

import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// MAIN //

/**
* Wrapper around react-bootstrap's OverlayTrigger disabling the overlay on touch devices.
*/
class Placeholder extends Component {
	render() {
		console.log( this.props );
		return <OverlayTrigger {...this.props} >{this.props.children}</OverlayTrigger>;
	}
}


// EXPORTS //

export default Placeholder;
