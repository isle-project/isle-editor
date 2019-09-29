// MODULES //

import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import setNonEnumerableProperty from '@stdlib/utils/define-nonenumerable-property';


// MAIN //

/**
* Standardizes elements in input array.
*
* @param {Array} arr - input array
* @returns {Array} output array with added `mu` and `sigma` properties
*/
function zScore( x ) {
	const avg = mean( x );
	const sd = stdev( x );
	const len = x.length;

	const out = new Array( len );
	for ( let i = 0; i < len; i++ ) {
		out[ i ] = ( x[ i ] - avg ) / sd;
	}
	setNonEnumerableProperty( out, 'mu', avg );
	setNonEnumerableProperty( out, 'sigma', sd );
	return out;
}


// EXPORTS //

export default zScore;
