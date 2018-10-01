/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/pcorr
*/

// MODULES //

import isNumber from '@stdlib/assert/is-number';
import sqrt from '@stdlib/math/base/special/sqrt';


// MAIN //

/**
* Computes Pearson product-moment correlation coefficients between one or more numeric arrays.
*
* @param {...Array} arr - numeric array
* @returns {Array} correlation matrix
*/
function pcorr() {
	const args = Array.prototype.slice.call( arguments );
	const nArgs = args.length;
	const len = args[ 0 ].length;

	// [0] Initialization...
	const deltas = new Array( nArgs );
	const means = new Array( nArgs );
	const stdevs = new Array( nArgs );
	const C = new Array( nArgs );
	const cov = new Array( nArgs );
	const corr = new Array( nArgs );
	for ( let i = 0; i < nArgs; i++ ) {
		means[ i ] = args[ i ][ 0 ];
		let arr = new Array( nArgs );
		for ( let j = 0; j < nArgs; j++ ) {
			arr[ j ] = 0;
		}
		C[ i ] = arr;
		cov[ i ] = arr.slice(); // copy!
		corr[ i ] = arr.slice(); // copy!
	}
	if ( len < 2 ) {
		return corr;
	}
	// [1] Compute the covariance...
	let N;
	for ( let n = 1; n < len; n++ ) {
		N = n + 1;
		const r = n / N;

		// [a] Extract the values and compute the deltas...
		for ( let i = 0; i < nArgs; i++ ) {
			if ( !isNumber( args[ i ][ n ] ) ) {
				for ( let j = 0; j < nArgs; j++ ) {
					for ( let k = 0; k < nArgs; k++ ) {
						corr[ j ][ k ] = NaN;
					}
				}
				return corr;
			}
			deltas[ i ] = args[ i ][ n ] - means[ i ];
		}

		// [b] Update the covariance between one array and every other array...
		for ( let i = 0; i < nArgs; i++ ) {
			const arr = C[ i ];
			const delta = deltas[ i ];
			for ( let j = i; j < nArgs; j++ ) {
				const A = arr[ j ];
				const B = r * delta * deltas[ j ];
				const sum = A + B;
				// Exploit the fact that the covariance matrix is symmetric...
				if ( i !== j ) {
					C[ j ][ i ] = sum;
				}
				arr[ j ] = sum;
			}
		}

		// [c] Update the means...
		for ( let i = 0; i < nArgs; i++ ) {
			means[ i ] += deltas[ i ] / N;
		}
	}

	// [2] Normalize the co-moments...
	const n = N - 1;
	for ( let i = 0; i < nArgs; i++ ) {
		const arr = C[ i ];
		for ( let j = i; j < nArgs; j++ ) {
			const val = arr[ j ] / n;
			cov[ i ][ j ] = val;
			if ( i !== j ) {
				cov[ j ][ i ] = val;
			}
		}
	}

	// [3] Compute the standard deviations...
	for ( let i = 0; i < nArgs; i++ ) {
		// Diagonal elements of covariance matrix...
		stdevs[ i ] = sqrt( cov[i][i] );
	}

	// [4] Set the diagonal elements to 1:
	for ( let i = 0; i < nArgs; i++ ) {
		corr[ i ][ i ] = 1;
	}

	// [5] Compute the correlation coefficients...
	for ( let i = 0; i < nArgs; i++ ) {
		const arr = cov[ i ];
		const sigma = stdevs[ i ];
		for ( let j = i+1; j < nArgs; j++ ) {
			let val = arr[ j ] / ( sigma*stdevs[j] );
			// Address floating point errors introduced by taking the sqrt and enforce strict [-1,1] bounds...
			if ( val > 1 ) {
				val = 1;
			} else if ( val < -1 ) {
				val = -1;
			}
			corr[ i ][ j ] = val;
			corr[ j ][ i ] = val;
		}
	}
	return corr;
}


// EXPORTS //

export default pcorr;
