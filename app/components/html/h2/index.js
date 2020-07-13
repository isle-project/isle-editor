// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const h2 = ( props ) => {
	const { children, ...rest } = props;
	return <h2 {...rest}>{children}</h2>;
};


// PROPERTIES //

h2.defaultProps = {
	className: '',
	style: {}
};

h2.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Level 2 Section Heading.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default h2;
