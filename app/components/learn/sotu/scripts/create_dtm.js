'use strict';

// MODULES //

var sotu = require( '@stdlib/datasets/sotu' );
var removePunctuation = require( '@stdlib/string/remove-punctuation' );
var tm = require( 'text-miner' );
var fs = require( 'fs' );


// MAIN //

let speeches = sotu({
	range: [ 1900, 2018 ]
});
let texts = speeches.map( x => removePunctuation( x.text ) );
let years = speeches.map( x => x.year );
let party = speeches.map( x => x.party );
var corpus = new tm.Corpus( texts )
	.toLower()
	.removeDigits()
	.clean()
	.removeWords( tm.STOPWORDS.EN.concat( [ '$' ] ) );
var terms = new tm.DocumentTermMatrix( corpus );
var dtm = terms.data;

var tdm = new Array( terms.vocabulary.length );
for ( let i = 0; i < terms.vocabulary.length; i++ ) {
	var wordVec = {};
	for ( let j = 0; j < terms.nDocs; j++ ) {
		if ( dtm[ j ][ i ] > 0 ) {
			wordVec[ j ] = dtm[ j ][ i ];
		}
	}
	tdm[ i ] = wordVec;
}

var out = {
	vocabulary: terms.vocabulary,
	years: years,
	tdm: tdm,
	party: party
};
fs.writeFileSync( 'tdm_sparse.json', JSON.stringify( out ) );
