// FUNCTIONS //

export class Factor extends String {
	constructor( name, categories ) {
		super( name );
		this.categories = categories;
	}
}


// MAIN //

/**
* A wrapper around String objects for specifying ordered categories.
*
* @param {string} name - variable name
* @param {Array} categories - ordered categories
* @returns {String} factor variable string object
*/
function factor( name, categories ) {
	return new Factor( name, categories ); // eslint-disable-line no-new-wrappers
}


// EXPORTS //

export default factor;
