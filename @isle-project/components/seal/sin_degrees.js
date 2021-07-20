// MODULES //

import sin from '@stdlib/math/base/special/sin';
import PI from '@stdlib/constants/float64/pi';


// MAIN //

/**
 * Computes the sine of an angle in degrees.
 *
 * @private
 * @param {number} angleDegrees - input angle in degrees
 * @returns {number} sine of the input angle
 */
 function sinDegrees( angleDegrees ) {
	return sin( angleDegrees * PI/180 );
}


// EXPORTS //

export default sinDegrees;
