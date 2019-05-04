// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Code } from 'spectacle';


// EXPORTS //

/**
* Component displaying inline text in a monospace font.
*
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return <Code {...this.props}>{this.props.children}</Code>;
	}
}


// PROPERTIES //

Wrapper.defaultProps = {
	className: null,
	style: {}
};

Wrapper.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default Wrapper;
