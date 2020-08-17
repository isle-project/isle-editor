// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const ol = ( props ) => {
	const { children, ...rest } = props;
	return <ol {...rest}>{children}</ol>;
};


// PROPERTIES //

ol.defaultProps = {
	reversed: false,
	type: '1',
	className: '',
	style: {}
};

ol.propTypes = {
	reversed: PropTypes.bool,
	start: PropTypes.number,
	type: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Ordered list.
*
* @property {boolean} reversed - indicates whether the items of the list are in reverse order
* @property {number} start - integer to start counting from for the list items (has to be supplied as an Arabic numeral)
* @property {string} type - numbering type (`a` for lowercase`, `A` for uppercase, `i` for lowercase and `I` for uppercase Roman numerals, `1` for numbers)
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default ol;
