// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const blockquote = ( props ) => {
	const { children, ...rest } = props;
	return <blockquote {...rest}>{children}</blockquote>;
};


// PROPERTIES //

blockquote.defaultProps = {
	cite: null,
	className: '',
	style: {}
};

blockquote.propTypes = {
	cite: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Component displaying an extended quotation.
*
* @param {string} cite - source for the quote
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default blockquote;
