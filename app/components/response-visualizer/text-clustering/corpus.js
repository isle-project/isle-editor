// MODULES //

import logger from 'debug';
import PCA from 'ml-pca';
import incrkmeans from '@stdlib/ml/incr/kmeans';
import ndarray from '@stdlib/ndarray/array';
import ndarray2array from '@stdlib/ndarray/base/to-array';
import cosineSimilarity from './similarity.js';


// VARIABLES //

const debug = logger( 'isle:text-clustering:corpus' );


// MAIN //


/**
* A corpus class for storing documents and obtaining their clustering labels.
*
* -   A class instance has an incremental k-means model that is updated as new documents arrive. The current class labels can be obtained at any point by calling the `clusters()` method. If an insufficient number of observations were supplied yet, this function will return `null`; otherwise, it returns a one-dimensional vector of length `n`, where `n` is the total number of documents in the corpus.
*/
class Corpus {
	/**
	* Class constructor.
	*
	* @param {Vocabulary} vocabulary - vocabulary used to turn documents into word vectors
	* @param {Array} clusters - array with elements corresponding to the number of clusters for the k-means models to fit
	*/
	constructor( vocabulary, clusters ) {
		// Create accumulator for partitioning data into clusters:
		this.models = clusters.map( nClusters => {
			return incrkmeans( nClusters, vocabulary.dim, {
				metric: 'cosine',
				init: [ 'kmeans++' ],
				normalize: true,
				copy: true
			});
		});
		this.buffer = new Uint8ClampedArray();
		this.nDocs = 0;
		this.dim = vocabulary.dim;
		this.vocabulary = vocabulary;
	}

	/**
	* Performs dimensionality reduction and returns xy-coordinates for the model centroids.
	*
	* @param {integer} modelIndex - index of model
	* @returns {Matrix} rows correspond to xy-coordinates for each cluster
	*/
	getClusterXYCoordinates( modelIndex ) {
		let d = this.centroids[ modelIndex ];
		d = ndarray2array( d._buffer, d._shape, d._strides, d._offset, d._order );
		const pca = new PCA( d );
		return pca.predict( d, {
			nComponents: 2
		});
	}

	/**
	* Returns the current class labels for the documents of the corpus.
	*
	* @param {integer} modelIndex - index of model to obtain predictions from
	* @returns {ndarray} one-dimensional vector of class labels
	*/
	clusters( modelIndex ) {
		debug( 'Retrieve clusters for model '+modelIndex );
		const matrix = ndarray( this.buffer, {
			shape: [ this.nDocs, this.dim ]
		});
		return this.models[ modelIndex ].predict( matrix );
	}

	/**
	* Returns the most representative documents for each cluster, i.e. the documents with the lowest distance to the cluster centroids.
	*
	* @param {Object} options - options object
	* @param {integer} options.cluster - index of cluster for which to obtain representative documents
	* @param {integer} options.modelIndex - index of model
	* @param {integer} [options.limit=5] - number of documents to include in returned value
	* @returns {Array} most representative documents
	*/
	getRepresentativeDocuments({ cluster, modelIndex, limit = 5 }) {
		const centroids = this.centroids[ modelIndex ];
		const clusters = this.clusters( modelIndex );
		const clusterPoints = centroids._buffer.subarray( cluster*this.dim, (cluster+1)*this.dim );
		let similarities = [];
		for ( let i = 0; i < this.nDocs; i++ ) {
			if ( clusters._buffer[ i ] !== cluster ) {
				continue;
			}
			const arr = this.buffer.subarray( i*this.dim, (i+1)*this.dim );
			const v = cosineSimilarity( clusterPoints, arr );
			similarities.push({
				v: v,
				idx: i
			});
		}
		similarities.sort( ( a, b ) => {
			return b.v - a.v;
		});
		similarities = similarities.filter( ( x, idx ) => {
			return idx < limit;
		});
		return similarities;
	}

	/**
	* Adds a new document to the corpus and updates the k-means model.
	*
	* @param {string} doc - input document
	*/
	addDocument( doc ) {
		const vec = this.vocabulary.toVector( doc );
		this.centroids = this.models.map( acc => {
			const out = acc( vec );
			return out ? out.centroids : null;
		});
		this.nDocs += 1;
		debug( `The corpus now contains ${this.nDocs} documents...` );
		const buffer = new Uint8ClampedArray( this.dim * this.nDocs );
		buffer.set( this.buffer );
		buffer.set( vec._buffer, this.buffer.length );
		this.buffer = buffer;
	}
}


// EXPORTS //

export default Corpus;
