// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h5 = ( props ) => {
	const { children, ...rest } = props;
	return <h5 {...rest}>{children}</h5>;
};


// PROPERTIES //

h5.defaultProps = {
	className: '',
	style: {}
};

h5.propTypes = {
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
export default h5;
