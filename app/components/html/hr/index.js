// MODULES //

import React from 'react';
import PropTypes from 'prop-types';


// MAIN //

const hr = ( props ) => {
	return <hr {...props} />;
};


// PROPERTIES //

hr.defaultProps = {
	className: '',
	style: {}
};

hr.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

/**
* Horizontal rule defining a thematic break in the document.
*
* @param {string} className - class name
* @param {Object} style - CSS inline styles
*/
export default hr;
