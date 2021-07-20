// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
 * Returns a boolean value indicating whether the provided value is a number that is not missing.
 *
 * @param {*} x - value to test
 * @returns {boolean} boolean indicating whether the provided value is a number that is not missing
 */
function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}


// EXPORTS //

export default isNonMissingNumber;
