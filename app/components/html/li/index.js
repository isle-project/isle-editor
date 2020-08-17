// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const li = ( props ) => {
	const { children, ...rest } = props;
	return <li {...rest}>{children}</li>;
};


// PROPERTIES //

li.defaultProps = {
	className: '',
	style: {}
};

li.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* List item
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default li;
