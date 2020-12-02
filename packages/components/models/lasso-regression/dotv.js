// MAIN //

/**
* Calculates the dot product between two arrays.
*
* @param {NumberArray} x - first vector
* @param {NumberArray} y - second vector
* @returns {number} dot product
*/
function dotv( x, y ) {
	const len = x.length;
	let sum = 0.0;
	for ( let i = 0; i < len; i++ ) {
		sum += x[ i ] * y[ i ];
	}
	return sum;
}


// EXPORTS //

export default dotv;
