// MODULES //

import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
 * Returns a boolean value indicating whether the provided value is missing.
 *
 * @param {*} x - value to test
 * @returns {boolean} boolean indicating whether the provided value is missing
 */
function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}


// EXPORTS //

export default isMissing;
