// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fit } from 'spectacle';


// EXPORTS //

/**
* Component taking up as much space as its bounds provide, but not more.
*
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return <Fit {...this.props}>{this.props.children}</Fit>;
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
