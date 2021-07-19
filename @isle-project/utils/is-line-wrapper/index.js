// MODULES //

import isPlainObject from '@stdlib/assert/is-plain-object';


// MAIN //

/**
 * Validates if a element is a line wrapper object.
 *
 * @param {*} element - element to validate
 * @returns {boolean} boolean indicating if a element is a line wrapper object
 */
function isLineWrapper( element ) {
	return (
		isPlainObject( element ) &&
		element.props &&
		element.props.tagName &&
		element.props.startColumn &&
		element.props.endColumn &&
		element.props.startLineNumber &&
		element.props.endLineNumber
	);
}


// EXPORTS //

export default isLineWrapper;
