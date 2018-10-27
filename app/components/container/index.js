// MODULES //

import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import PropTypes from 'prop-types';


// MAIN //


/**
* Container wrapper.
*
* @property {boolean} fluid - turn any fixed-width container layout into a full-width layout
*/
class myContainer extends Component {
	render() {
		const { fluid, ...other } = this.props;
		return (
			<Container fluid={fluid} {...other} ></Container>
		);
	}
}

// TYPES //

myContainer.defaultProps = {
	fluid: true
};

myContainer.propTypes = {
	fluid: PropTypes.bool
};


// EXPORTS //

export default myContainer;
