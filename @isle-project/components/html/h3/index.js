// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h3 = ( props ) => {
	const { children, ...rest } = props;
	return <h3 {...rest}>{children}</h3>;
};


// PROPERTIES //

h3.defaultProps = {
	className: '',
	style: {}
};

h3.propTypes = {
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
export default h3;
