// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BlockQuote } from 'spectacle';


// MAIN //

/**
* A styled blockquote. Should be used in conjunction with the Spectacle `Cite` and `Quote` tags.
*
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return <BlockQuote {...this.props}>{this.props.children}</BlockQuote>;
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
