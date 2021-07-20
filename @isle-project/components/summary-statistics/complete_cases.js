// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
 * Returns an array of arrays of complete cases.
 *
 * @param {Array} arr - array of arrays
 * @returns {Array} array of arrays of complete cases
 */
function completeCases( arr ) {
	const indices = [];
	const len = arr[ 0 ].length;
	for ( let j = 0; j < len; j++ ) {
		let complete = true;
		for ( let i = 0; i < arr.length; i++ ) {
			const x = arr[ i ][ j ];
			if ( !isNumber( x ) || isnan( x ) ) {
				complete = false;
				break;
			}
		}
		if ( complete ) {
			indices.push( j );
		}
	}
	const out = new Array( arr.length );
	for ( let i = 0; i < arr.length; i++ ) {
		const arr = new Array( indices.length );
		for ( let j = 0; j < indices.length; j++ ) {
			const idx = indices[ j ];
			arr[ j ] = arr[ i ][ idx ];
		}
		out[ i ] = arr;
	}
	return out;
}


// EXPORTS //

export default completeCases;
