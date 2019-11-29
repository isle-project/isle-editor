/**
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/quantiles
*/

// MODULES //

import isArray from '@stdlib/assert/is-array';
import isInteger from '@stdlib/assert/is-integer';
import floor from '@stdlib/math/base/special/floor';
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
* Computes quantiles for a numeric array.
*
* @param {Array} arr - array of values
* @param {number} num - number of quantiles
* @returns {Array} quantiles
*/
function quantiles( arr, num ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'invalid input argument. First argument must be an array.' );
	}
	if ( !isInteger( num ) || num <= 0 ) {
		throw new TypeError( 'invalid input argument. Second argument must be a positive integer.' );
	}
	const len = arr.length;
	const qValues = new Array( num+1 );

	arr = arr.slice();
	arr.sort( ascending );

	// 0th quantile is the min:
	qValues[ 0 ] = arr[ 0 ];

	// Max defines the quantile upper bound:
	qValues[ num ] = arr[ len-1 ];

	// Get the quantiles...
	for ( let i = 1; i < num; i++ ) {
		// Calculate the vector index marking the quantile:
		const id = ( len * i / num ) - 1;

		// Is the index an integer?
		let val;
		if ( id === floor( id ) ) {
			// Value is the average between the value at id and id+1:
			val = ( arr[ id ] + arr[ id+1 ] ) / 2.0;
		} else {
			// Round up to the next index:
			id = ceil( id );
			val = arr[ id ];
		}
		qValues[ i ] = val;
	}
	return qValues;
}


// EXPORTS //

export default quantiles;
