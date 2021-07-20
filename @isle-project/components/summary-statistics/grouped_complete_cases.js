// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
 * Group complete cases of array values by group ids.
 *
 * @param {Array} arr - array of arrays
 * @param {Array} groupData - array of group ids
 * @returns {Object} grouped data
 */
function groupedCompleteCases( arr, groupData ) {
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
	const out = {};
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = 0; j < indices.length; j++ ) {
			const group = groupData[ indices[ j ] ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arr.length );
				for ( let k = 0; k < arr.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			const idx = indices[ j ];
			out[ group ][ i ].push( arr[ i ][ idx ] );
		}
	}
	return out;
}


// EXPORTS //

export default groupedCompleteCases;
