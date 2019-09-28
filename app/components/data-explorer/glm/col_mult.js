// MODULES //

import ndarray from '@stdlib/ndarray/array';


// MAIN //

/**
* Multiplies each column of matrix `A` with the elements of vector `b`.
*
* @param {Matrix} A - input matrix
* @param {NumberArray} b - input vector
* @returns {Matrix} `A` with columns multiplied by elements of `b`
*/
function colMult( A, b ) {
	const [ m, n ] = A.shape;
	const result = ndarray( new Float64Array( m*n ), { 'shape': [ m, n ]} );
	for ( let i = 0; i < m; i++ ) {
		for ( let j = 0; j < n; j++ ) {
			result.set( i, j, A.get( i, j ) * b[ i ] );
		}
	}
	return result;
}


// EXPORTS //

export default colMult;
