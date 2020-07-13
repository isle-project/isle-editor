// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const span = ( props ) => {
	const { children, ...rest } = props;
	return <span {...rest}>{children}</span>;
};


// PROPERTIES //

span.defaultProps = {
	className: '',
	style: {}
};

span.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Generic inline container element.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default span;
