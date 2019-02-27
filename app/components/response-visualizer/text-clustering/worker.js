// MODULES //

import Vocabulary from './vocabulary.js';
import Corpus from './corpus.js';


// VARIABLES //

const DIM = 300;
const vocab = new Vocabulary( DIM );
const corpus = new Corpus( vocab, [ 3, 5, 7 ] );


// MAIN //

/**
* Handles incoming messages, delegates work, and sends back results to main thread.
*
* @param {Event} e - incoming event from main thread
*/
self.onmessage = function onMessage( e ) {
	const data = e.data;
	switch ( data.type ) {
		case 'TO_VECTOR': {
			const vec = vocab.toVector( data.value );
			self.postMessage({
				type: 'WORD_VECTOR',
				value: vec
			});
			break;
		}
		case 'ADD_DOCUMENT': {
			corpus.addDocument( data.value );
			break;
		}
		case 'ADD_DOCUMENTS': {
			corpus.addDocuments( data.value );
			break;
		}
		case 'ITERATE': {
			corpus.iterate( data.value );
			break;
		}
		case 'GET_CLUSTERS': {
			const clusters = corpus.clusters( data.value );
			self.postMessage({
				type: 'CLUSTERS',
				value: {
					clusters,
					modelIndex: data.value
				}
			});
			break;
		}
		case 'GET_CLUSTER_COORDINATES': {
			const coord = corpus.getClusterXYCoordinates( data.value );
			self.postMessage({
				type: 'CLUSTER_COORDINATES',
				value: {
					coordinates: coord,
					modelIndex: data.value
				}
			});
			break;
		}
		case 'GET_REPRESENTATIVE_DOCUMENTS': {
			const answers = corpus.getRepresentativeDocuments({
				cluster: data.value.cluster,
				modelIndex: data.value.modelIndex
			});
			self.postMessage({
				type: 'REPRESENTATIVE_DOCUMENTS',
				value: answers
			});
		}
	}
};
