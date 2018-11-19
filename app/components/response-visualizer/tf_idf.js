// MODULES //

import ln from '@stdlib/math/base/special/ln';


// MAIN //

/**
* Weights a document-term matrix by term frequency - inverse document frequency.
*
* @param {ndarray} dtm - input document-term matrix
* @returns {ndarray} mutated document-term matrix object
*/
function weightTfIdf( dtm ) {
	var wordDocFrequency = [];
	var count;
	var word;
	var doc;
	var idf;
	var d;
	var w;

	for ( w = 0; w < dtm[0].length; w++ ) {
		count = 0;
		for ( d = 0; d < dtm.length; d++ ) {
			if ( dtm[d][w] !== void 0 && dtm[d][w] > 0 ) {
				count++;
			}
		}
		wordDocFrequency.push( count );
	}

	for ( doc = 0; doc < dtm.length; doc++ ) {
		for ( word = 0; word < dtm[0].length; word++ ){
			idf = ln( dtm.length ) - ln( 1 + wordDocFrequency[word] );
			if ( dtm[doc][word] !== void 0 ) {
				dtm[doc][word] = dtm[doc][word] * idf;
			}
		}
	}
	return dtm;
}


// EXPORTS //

export default weightTfIdf;
