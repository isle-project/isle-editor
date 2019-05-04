// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fill } from 'spectacle';


// MAIN //

/**
* The fill tag takes up all the space available to it. Fill tags next to each other form an equidistant grid.
*
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		return <Fill {...this.props}>{this.props.children}</Fill>;
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
