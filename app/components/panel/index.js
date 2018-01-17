// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';


// MAIN //

class Wrapper extends Component {
	render() {
		return ( <Panel {...this.props} >
			{ this.props.header ? <Panel.Heading>
				<Panel.Title componentClass="h3">{this.props.header}</Panel.Title>
			</Panel.Heading> : null }
			<Panel.Body>
				{this.props.children}
			</Panel.Body>
		</Panel> );
	}
}


// PROPERTY TYPES //

Wrapper.propTypes = {
	'header': PropTypes.string
};

Wrapper.defaultProps = {
	'header': null
};


// EXPORTS //

export default Wrapper;
