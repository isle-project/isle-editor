// MODULES //

import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import setNonEnumerableProperty from '@stdlib/utils/define-nonenumerable-property';


// MAIN //

/**
* Standardizes elements in input array.
*
* @param {Array} x - input array
* @param {boolean} demean - controls whether the mean should be subtracted from the values
* @param {boolean} scale - controls whether values should be divided by the standard deviation
* @returns {Array} output array with added `mu` and `sigma` properties
*/
function zScore( x, demean = true, scale = true ) {
	const avg = mean( x );
	const sd = stdev( x );
	const len = x.length;

	const out = new Array( len );
	if ( demean ) {
		if ( scale ) {
			for ( let i = 0; i < len; i++ ) {
				out[ i ] = ( x[ i ] - avg ) / sd;
			}
		} else {
			for ( let i = 0; i < len; i++ ) {
				out[ i ] = ( x[ i ] - avg );
			}
		}
	}
	else if ( scale ) {
		for ( let i = 0; i < len; i++ ) {
			out[ i ] = x[ i ] / sd;
		}
	}
	else {
		out = x.slice();
	}
	setNonEnumerableProperty( out, 'mu', avg );
	setNonEnumerableProperty( out, 'sigma', sd );
	return out;
}


// EXPORTS //

export default zScore;
