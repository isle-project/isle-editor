// MODULES //

import sqrt from '@stdlib/math/base/special/sqrt';


// FUNCTIONS //

/**
* Computes the dot product between two arrays.
*
* @param {(Array|TypedArray)} x - input array
* @param {(Array|TypedArray)} y - input array
* @returns {number|null} dot product
*/
function dot( x, y ) {
	const len = x.length;
	let sum = 0.0;
	for ( let i = 0; i < len; i++ ) {
		sum += x[ i ] * y[ i ];
	}
	return sum;
}

/**
* Calculates the Euclidean norm of an array.
*
* @param {(Array|TypedArray)} arr - input array
* @returns {number|null} L2 norm or null
*/
function l2norm( arr ) {
	const len = arr.length;
	let t = 0.0;
	let s = 1.0;
	let r;
	for ( let i = 0; i < len; i++ ) {
		let val = arr[ i ];
		let abs = ( val < 0.0 ) ? -val : val;
		if ( abs > 0 ) {
			if ( abs > t ) {
				r = t / val;
				s = 1.0 + s*r*r;
				t = abs;
			} else {
				r = val / t;
				s = s + r*r;
			}
		}
	}
	return t * sqrt( s );
}


// MAIN //

/**
* Computes the cosine similarity between two arrays.
*
* @param {(Array|TypedArray)} x - input array
* @param {(Array|TypedArray)} y - input array
* @returns {number|null} cosine similarity or null
*/
function cosineSimilarity( x, y ) {
	const a = dot( x, y );
	const b = l2norm( x );
	const c = l2norm( y );
	return a / ( b*c );
}


// EXPORTS //

export default cosineSimilarity;
