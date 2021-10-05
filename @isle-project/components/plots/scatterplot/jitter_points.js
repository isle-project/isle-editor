// MODULES //

import uniq from 'uniq';
import log10 from '@stdlib/math/base/special/log10';
import abs from '@stdlib/math/base/special/abs';
import range from '@isle-project/utils/statistic/range';
import floor from '@stdlib/math/base/special/floor';
import roundn from '@stdlib/math/base/special/roundn';
import runif from '@stdlib/random/base/uniform';
import min from '@isle-project/utils/statistic/min';


// MAIN //

/**
* Returns an array of jittered points.
*
* @private
* @param {Array<number>} x - input values
* @returns {Array<number>} jittered values
*/
function jitterPoints( x ) {
	const r = range( x );
	const z = r[ 0 ];
	if ( z === 0 ) {
		z = abs( r[ 1 ] ) || 1;
	}
	const digits = 3 - floor( log10( z ) );
	const n = x.length;
	const y = new Array( n );
	for ( let i = 0; i < n; i++ ) {
		y[ i ] = roundn( x[ i ], -digits );
	}
	y.sort( ( a, b ) => a - b );
	uniq( y );

	// Calculate differences of the elements in y:
	const d = new Array( n - 1 );
	for ( let i = 0; i < n - 1; i++ ) {
		d[ i ] = y[ i + 1 ] - y[ i ];
	}
	const v = 0.2 * abs( min( d ) );
	const out = new Array( n );
	for ( let i = 0; i < n; i++ ) {
		out[ i ] = x[ i ] + runif( -v, v );
	}
	return out;
}


// EXPORTS //

export default jitterPoints;
