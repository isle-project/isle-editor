// MAIN //

/**
* Computes an element-wise multiplication of two arrays.
*
* @param {Array} x - numeric array
* @param {Array} y - numeric array
*/
function multiply( x, y ) {
	const len = x.length;
	const out = new Array( len );
	for ( let i = 0; i < len; i++ ) {
		out[ i ] = x[ i ] * y[ i ];
	}
	return out;
}


// EXPORTS //

export default multiply;
