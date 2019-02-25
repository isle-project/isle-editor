// MODULES //

import expandContractions from '@stdlib/nlp/expand-contractions';
import removePunctuation from '@stdlib/string/remove-punctuation';
import removeWords from '@stdlib/string/remove-words';
import toLowercase from '@stdlib/string/lowercase';
import stopwords from '@stdlib/datasets/stopwords-en';


// VARIABLES //

const STOPWORDS = stopwords();


// MAIN //

/**
* Pre-processes a document. The function performs the following steps:
*
* -   turning all characters to lowercase
* -   expand contractions such as don't => do not
* -   remove all punctuation characters
* -   remove a list of very common English words ("stopwords") that do not add much value for clustering and selecting documents
*
* @param {string} doc - input document
* @returns {string} pre-processed document
*/
function processDocument( doc ) {
	doc = toLowercase( doc );
	doc = expandContractions( doc );
	doc = removePunctuation( doc );
	doc = removeWords( doc, STOPWORDS );
	return doc;
}


// EXPORTS //

export default processDocument;
