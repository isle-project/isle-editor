// MAIN //

/**
 * Group array values by group ids.
 *
 * @param {Array} arr - array of arrays
 * @param {Array} groupData - array of group ids
 * @returns {Object} grouped data
 */
function groupedCases( arr, groupData ) {
	const out = {};
	const len = arr[ 0 ].length;
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = 0; j < len; j++ ) {
			const group = groupData[ j ];
			if ( !out[ group ] ) {
				out[ group ] = new Array( arr.length );
				for ( let k = 0; k < arr.length; k++ ) {
					out[ group ][ k ] = [];
				}
			}
			out[ group ][ i ].push( arr[ i ][ j ] );
		}
	}
	return out;
}


// EXPORTS //

export default groupedCases;
