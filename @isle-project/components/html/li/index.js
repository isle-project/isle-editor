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
	value: null,
	className: '',
	style: {}
};

li.propTypes = {
	value: PropTypes.number,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* List item
*
* @param {number} value - integer indicating the current ordinal value of the list item (following list items will continue numbering from the specified value)
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default li;
