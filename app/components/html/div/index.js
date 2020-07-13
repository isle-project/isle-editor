// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const div = ( props ) => {
	const { children, ...rest } = props;
	return <div {...rest}>{children}</div>;
};


// PROPERTIES //

div.defaultProps = {
	className: '',
	style: {}
};

div.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Generic container element.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default div;
