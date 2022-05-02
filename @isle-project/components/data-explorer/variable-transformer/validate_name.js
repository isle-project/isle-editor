// MAIN //

/**
* Validates that a variable name is valid, i.e., it is a string with length greater or equal to one and which does not contain any invalid characters.
*
* @param {string} name - variable name
* @returns {boolean} boolean indicating if the variable name is valid
*/
function validateName( name ) {
	return (
		name &&
		name.length >= 1 &&
		name.indexOf( '.' ) === -1 &&
		name.indexOf( ' ' ) === -1
	);
}


// EXPORTS //

export default validateName;
