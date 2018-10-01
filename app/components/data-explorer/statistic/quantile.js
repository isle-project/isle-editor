// MODULES //

import isNumber from '@stdlib/assert/is-number';
import floor from '@stdlib/math/base/special/floor';
import round from '@stdlib/math/base/special/round';
import ceil from '@stdlib/math/base/special/ceil';


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a
* @param {number} b
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}


// MAIN //

/**
* Computes a quantile of the values in a numeric array.
*
* @param {Array} arr - input array
* @param {number} prob - quantile prob [0,1]
* @param {number} [method=7] - number indicating the method used to interpolate a quantile value
* @returns {(number|null)} quantile or null
*/
function quantile( arr, p, method ) {
	const len = arr.length;
	let ret;
	let id2;
	let id;
	let h;

	if ( !len ) {
		return null;
	}
	const d = [];
	for ( let i = 0; i < len; i++ ) {
		if ( !isNumber( arr[ i ] ) ) {
			return NaN;
		}
		d.push( arr[ i ] );
	}
	d.sort( ascending );

	switch ( method ) {
		case 1:
			if ( p === 0.0 ) {
				ret = d[ 0 ];
			} else {
				h = len*p + 0.5;
				id = ceil( h - 0.5 ) - 1;
				ret = d[ id ];
			}
			break;
		case 2:
			if ( p === 0.0 ) {
				ret = d[ 0 ];
			} else if ( p === 1.0 ) {
				ret = d[ len - 1 ];
			} else {
				h = len*p + 1/2;
				id = ceil( h - 1/2 ) - 1;
				id2 = floor( h + 1/2 ) - 1;
				ret = ( d[ id ] + d[ id2 ] ) / 2;
			}
			break;
		case 3:
			if ( p <= 0.5 / len ) {
				ret = d[ 0 ];
			} else {
				h = len*p;
				id = round( h ) - 1;
				ret = d[ id ];
			}
			break;
		case 4:
			if ( p < 1/len ) {
				ret = d[ 0 ];
			} else if ( p === 1.0 ) {
				ret = d[ len - 1 ];
			} else {
				h = len*p;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
		case 5:
			if ( p < 0.5 / len ) {
				ret = d[ 0 ];
			} else if ( p >= ( len - 0.5 ) / len ) {
				ret = d[ len - 1 ];
			} else {
				h = len*p + 0.5;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
		case 6:
			if ( p < 1 / ( len + 1 ) ) {
				ret = d[ 0 ];
			} else if ( p > len / ( len + 1 ) ) {
				ret = d[ len - 1 ];
			} else {
				h = ( len + 1 ) * p;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
		case 7:
			/* falls through */
		default:
			if ( p === 1.0 ) {
				ret = d[ len - 1 ];
			} else {
				h = ( len - 1 ) * p + 1;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
		case 8:
			if ( p < (2/3) / ( len + (1/3) ) ) {
				ret = d[ 0 ];
			} else if ( p >= ( len - (1/3) ) / ( len + (1/3) ) ) {
				ret = d[ len - 1 ];
			} else {
				h = ( len + 1/3 ) * p + 1/3;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
		case 9:
			if ( p < (5/8) / ( len + (1/4) ) ) {
				ret = d[ 0 ];
			} else if ( p >= ( len - (3/8) ) / ( len + (1/4) ) ) {
				ret = d[ len - 1 ];
			} else {
				h = ( len + 1/4 ) * p + 3/8;
				id = floor( h ) - 1;
				ret = d[ id ] + ( h - floor( h ) ) * ( d[ id + 1 ] - d[ id ] );
			}
			break;
	}
	return ret;
}


// EXPORTS //

export default quantile;
