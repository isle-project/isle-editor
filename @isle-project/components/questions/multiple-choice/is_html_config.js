// MODULES //

import isObject from '@stdlib/assert/is-plain-object';


// MAIN //

/**
 * Returns a boolean indicating whether the provided value is a component object.
 *
 * @param {*} elem - value to test
 * @returns {boolean} boolean indicating whether the provided value is a component object
 */
 function isHTMLConfig( elem ) {
	return (
		isObject( elem ) &&
		elem.component
	);
}


// EXPORTS //

export default isHTMLConfig;
