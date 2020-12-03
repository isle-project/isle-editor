// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h6 = ( props ) => {
	const { children, ...rest } = props;
	return <h6 {...rest}>{children}</h6>;
};


// PROPERTIES //

h6.defaultProps = {
	className: '',
	style: {}
};

h6.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Level 3 Section Heading.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default h6;
