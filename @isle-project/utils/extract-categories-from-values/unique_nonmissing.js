// MODULES //

import isMissing from '@isle-project/utils/is-missing';


// VARIABLES //

const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// FUNCTIONS //

/**
* Comparator function to sort values in ascending order.
*
* @private
* @param {*} a - first value
* @param {*} b - second value
* @returns {number} negative number if `a` comes before `b, positive if `a` comes after `b`, and `0` if they are equivalent
*/
function ascending( a, b ) {
	return String( a ).localeCompare( String( b ), void 0, SORT_OPTS );
}


// MAIN //

/**
* Returns the unique elements in an array.
*
* @private
* @param {Array} arr - input array
* @returns {Array} array of unique elements
*/
function unique( arr ) {
	let i;
	let j;

	const out = Array.prototype.slice.call( arr );
	const len = out.length;

	// Sort array in ascending order:
	out.sort( ascending );

	for ( i = 1, j = 0; i < len; i++ ) {
		const val = out[ i ];
		if ( out[ j ] !== val ) {
			j += 1;
			out[ j ] = val;
		}
	}
	// Truncate the array:
	out.length = j+1;

	const nonmissing = [];
	for ( i = 0; i < out.length; i++ ) {
		if ( !isMissing( out[ i ] ) ) {
			nonmissing.push( out[ i ] );
		}
	}
	return nonmissing;
}


// EXPORTS //

export default unique;
