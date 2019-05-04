// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cite } from 'spectacle';


// MAIN //

/**
* Component wrapping the citation source. Should be used in conjunction with the Spectacle `BlockQuote` and `Quote` tags.
*
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return <Cite {...this.props}>{this.props.children}</Cite>;
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

export default Cite;
