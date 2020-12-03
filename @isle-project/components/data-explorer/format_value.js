// MODULES //

import roundsd from '@stdlib/math/base/special/roundsd';


// VARIABLES //

const RE_EXP_NOTATION = /(-?[\d.]+)e(-?\d+)/;


// MAIN //

function formatValue( x, digits = 3 ) {
	x = String( roundsd( x, digits ) );
	if ( x.includes( 'e' ) ) {
		x = x.replace( RE_EXP_NOTATION, '$1 × 10^$2' );
	}
	return x;
}


// EXPORTS //

export default formatValue;
