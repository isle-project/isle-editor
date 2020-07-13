// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const p = ( props ) => {
	const { children, ...rest } = props;
	return <p {...rest}>{children}</p>;
};


// PROPERTIES //

p.defaultProps = {
	className: '',
	style: {}
};

p.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Paragraph element.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default p;
