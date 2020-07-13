// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h4 = ( props ) => {
	const { children, ...rest } = props;
	return <h4 {...rest}>{children}</h4>;
};


// PROPERTIES //

h4.defaultProps = {
	className: '',
	style: {}
};

h4.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Level 4 Section Heading.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default h4;
