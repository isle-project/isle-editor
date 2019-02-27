// MODULES //

import murmurhash3js from 'murmurhash3js';
import stemmer from 'stemmer';
import isPositiveInteger from '@stdlib/assert/is-positive-integer';
import tokenize from '@stdlib/nlp/tokenize';
import ctor from '@stdlib/ndarray/ctor';
import processDocument from './process_document.js';


// VARIABLES //

const vector = ctor( 'int8', 1 );


// FUNCTIONS //

/**
* Returns a one-dimensional vector containing the values of the supplied data buffer.
*
* @param {TypedArray} buffer - data buffer
* @returns {ndarray} one-dimensional vector
*/
function createVector( buffer ) {
	return vector( buffer, [ buffer.length ], [ 1 ], 0, 'row-major' );
}


// MAIN //

/**
* A vocabulary class for turning strings into word vectors.
*
* -   The implementation uses the "hashing trick" to avoid keeping a dictionary of all encountered words in memory (at the risk of hash collisions). It further allows us to calculate word vectors without access of the entire vocabulary. This is especially useful in an online learning setting where new documents keep trickling in, which may contain words not previously encountered.
* -   Words are directly mapped to indices by applying a hash function (MURMURHASH3) and then restricting the resulting hash value to the range [0, dimension-1] using the modulo function, which represents the index for the given word.
*/
class Vocabulary {
	/**
	* Class constructor.
	*
	* @param {integer} dim - word vector length
	*/
	constructor( dim ) {
		if ( !isPositiveInteger( dim ) ) {
			throw new TypeError( 'invalid argument. First argument must be a positive integer. Value: `'+dim+'`' );
		}
		this.dim = dim;
		this.hashTable = new Map();
	}

	/**
	* Calculates, stores, and returns the index for a supplied word.
	*
	* @param {string} word
	* @returns {integer} word index
	*/
	addWord( word ) {
		const hash = murmurhash3js.x86.hash32( word );
		const remainder = hash % this.dim;
		this.hashTable.set( word, remainder );
		return remainder;
	}

	/**
	* Processes a document and returns a bag-of-words representation.
	*
	* @param {string} doc - input document
	* @returns {Array} sparse word vector
	*/
	toVector( doc ) {
		// Tokenize document after pre-processing...
		doc = processDocument( doc );
		const words = tokenize( doc );
		for ( let i = 0; i < words.length; i++ ) {
			words[ i ] = stemmer( words[ i ] );
		}
		const len = words.length;
		// Add bigrams:
		for ( let i = 0; i < len - 1; i++ ) {
			words.push( words[ i ] + ' ' + words[ i+1 ] );
		}

		// Create and return sparse word vector...
		const out = new Uint8ClampedArray( this.dim );
		for ( let i = 0; i < words.length; i++ ) {
			const gram = words[ i ];
			let idx;
			if ( this.hashTable.has( gram ) ) {
				idx = this.hashTable.get( gram );
			}
			else {
				idx = this.addWord( gram );
			}
			out[ idx ] += 1;
		}
		const vec = createVector( out );
		return vec;
	}
}


// EXPORTS //

export default Vocabulary;
