// MODULES //

import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';


// MAIN //

/**
* Computes the minimum and maximum value of an array.
*
* @param {Array} arr - array of values
* @returns {Array} minimum and maximum value
*/
function minmax( arr ) {
	let min = PINF;
	let max = NINF;
	for ( let i = 1; i < arr.length; i++ ) {
		if ( arr[ i ] < min ) {
			min = arr[ i ];
		}
		if ( arr[ i ] > max ) {
			max = arr[ i ];
		}
	}
	return [ min, max ];
}


// EXPORTS //

export default minmax;
