// MAIN //

/**
* A wrapper around String objects for specifying ordered categories.
*
* @param {string} name - variable name
* @param {Array} categories - ordered categories
* @returns {String} factor variable string object
*/
function factorVariable( name, categories ) {
	const out = new String( name ); // eslint-disable-line no-new-wrappers
	out.categories = categories;
	return out;
}


// EXPORTS //

export default factorVariable;
