// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const ol = ( props ) => {
	const { children, ...rest } = props;
	return <ol {...rest}>{children}</ol>;
};


// PROPERTIES //

ol.defaultProps = {
	className: '',
	style: {}
};

ol.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Ordered list.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default ol;
