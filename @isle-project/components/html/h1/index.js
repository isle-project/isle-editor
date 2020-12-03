// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h1 = ( props ) => {
	const { children, ...rest } = props;
	return <h1 {...rest}>{children}</h1>;
};


// PROPERTIES //

h1.defaultProps = {
	className: '',
	style: {}
};

h1.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Level 1 Section Heading.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default h1;
