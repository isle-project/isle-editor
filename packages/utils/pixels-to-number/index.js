// MODULES //

import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';


// MAIN //

/**
* Casts a pixel string to a number.
*
* @private
* @param {(string|number)} x - input value
* @param {number} cast number (in px)
*/
function pixelsToNumber( x ) {
	if ( endsWith( x, 'px' ) ) {
		x = parseFloat( replace( x, 'px', '' ) );
	}
	return x;
}


// EXPORTS //

export default pixelsToNumber;
