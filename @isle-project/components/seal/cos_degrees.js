// MODULES //

import cos from '@stdlib/math/base/special/cos';
import PI from '@stdlib/constants/float64/pi';


// MAIN //

/**
 * Computes the cosine of an angle in degrees.
 *
 * @private
 * @param {number} angleDegrees - input angle in degrees
 * @returns {number} cosine of the input angle
 */
 function cosDegrees( angleDegrees ) {
	return cos( angleDegrees * PI/180 );
}


// EXPORTS //

export default cosDegrees;
