/**
* Computes a matrix product of a n x p matrix and a column vector of length p.
*
* @param {Matrix} A - n x p matrix
* @param {Array} b - p x 1 column vector
* @returns {Array} result of matrix multiplication
*/
function mmult( A, b ) {
	const n = A.shape[ 0 ];
	const p = A.shape[ 1 ];

	let ret = new Float64Array( n );
	for ( let i = 0; i < n; i++ ) {
			let sum = 0;
			for ( let j = 0; j < p; j++ ) {
				sum += A.get( i, j ) * b[ j ];
			}
			ret[ i ] = sum;
	}
	return ret;
}


// EXPORTS //

export default mmult;
