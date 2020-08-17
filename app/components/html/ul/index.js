// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const ul = ( props ) => {
	const { children, ...rest } = props;
	return <ul {...rest}>{children}</ul>;
};


// PROPERTIES //

ul.defaultProps = {
	className: '',
	style: {}
};

ul.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Unordered list.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default ul;
