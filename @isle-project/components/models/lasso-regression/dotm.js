// MAIN //

/**
* Calculates the dot product between j-th column vectors of the two input matrices skipping zero elements.
*
* @param {Matrix} x - first input matrix
* @param {Matrix} y - second input matrix
* @param {number} j - column index
* @returns {number} dot product value
*/
function dotm( x, y, j ) {
	let ret = 0.0;
	const nRows = x.shape[ 0 ];
	for ( let i = 0; i < nRows; i++ ) {
		const xVal = x.get( i, j );
		const yVal = y.get( i, j );
		if ( xVal !== 0 && yVal !== 0 ) {
			ret += xVal * yVal;
		}
	}
	return ret;
}


// EXPORTS //

export default dotm;
