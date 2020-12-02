// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const pre = ( props ) => {
	const { children, ...rest } = props;
	return <pre {...rest}>{children}</pre>;
};


// PROPERTIES //

pre.defaultProps = {
	className: '',
	style: {}
};

pre.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Element displaying preformatted text.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default pre;
