// MODULES //

import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';


// MAIN //

class Wrapper extends Component {
	render() {
		return ( <Panel {...this.props} >
			<Panel.Heading>
				<Panel.Title componentClass="h3">{this.props.header}</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				{this.props.children}
			</Panel.Body>
		</Panel> );
	}
}


// EXPORTS //

export default Wrapper;
