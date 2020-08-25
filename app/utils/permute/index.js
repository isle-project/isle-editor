// MAIN //

/**
* Returns all permutations of the elements of an array.
*
* @param {Array} arr - input array
* @returns {Array} permutation array
*/
function permute( arr ) {
	const len = arr.length;
	arr = arr.slice();
	const out = [ arr ];
	const c = new Array( len ).fill( 0 );
	let i = 1;
	while ( i < len ) {
		if ( c[ i ] < i ) {
			const k = i % 2 && c[ i ];
			const p = arr[ i ];
			arr[ i ] = arr[ k ];
			arr[ k ] = p;
			c[ i ] = c[ i ] + 1;
			i = 1;
			out.push( arr.slice() );
		} else {
			c[ i ] = 0;
			i += 1;
		}
	}
	return out;
}


// EXPORTS //

export default permute;
