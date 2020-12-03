// MODULES //

import { Matrix } from 'ml-matrix';


// MAIN //

/**
* Matrix product of `A` and `B`.
*
* @param {Matrix} A - first input matrix
* @param {Matrix} B - second input matrix
* @returns {Matrix} A * B
*/
function multiplyMatrices( A, B ) {
	const [ m, n ] = A.shape;
	const p = B.shape[ 1 ];
	const result = Matrix.zeros( m, p );
	const Bcolj = new Float64Array( n );
	for ( let j = 0; j < p; j++ ) {
		for ( let k = 0; k < n; k++ ) {
			Bcolj[ k ] = B.get(k, j);
		}
		for ( let i = 0; i < m; i++ ) {
			let s = 0;
			for ( let k = 0; k < n; k++ ) {
				s += A.get( i, k ) * Bcolj[ k ];
			}
			result.set( i, j, s );
		}
	}
	return result;
}


// EXPORTS //

export default multiplyMatrices;
