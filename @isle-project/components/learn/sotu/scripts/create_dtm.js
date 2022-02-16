'use strict';

// MODULES //

const sotu = require( '@stdlib/datasets/sotu' );
const removePunctuation = require( '@stdlib/string/remove-punctuation' );
const tm = require( 'text-miner' );
const fs = require( 'fs' );


// MAIN //

let speeches = sotu({
	range: [ 1900, 2021 ]
});
let texts = speeches.map( x => removePunctuation( x.text ) );
let years = speeches.map( x => x.year );
let party = speeches.map( x => x.party );
const corpus = new tm.Corpus( texts )
	.toLower()
	.removeDigits()
	.clean()
	.removeWords( tm.STOPWORDS.EN.concat( [ '$' ] ) );
const terms = new tm.DocumentTermMatrix( corpus );
const dtm = terms.data;

const tdm = new Array( terms.vocabulary.length );
for ( let i = 0; i < terms.vocabulary.length; i++ ) {
	const wordVec = {};
	for ( let j = 0; j < terms.nDocs; j++ ) {
		if ( dtm[ j ][ i ] > 0 ) {
			wordVec[ j ] = dtm[ j ][ i ];
		}
	}
	tdm[ i ] = wordVec;
}

const out = {
	vocabulary: terms.vocabulary,
	years: years,
	tdm: tdm,
	party: party
};
fs.writeFileSync( 'tdm_sparse.json', JSON.stringify( out ) );
