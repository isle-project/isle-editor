// MODULES //

import { i18n } from '@isle-project/locales';
import argmax from 'compute-argmax';
import chebyshev from 'compute-chebyshev-distance';
import cosine from 'compute-cosine-distance';
import euclidean from 'compute-euclidean-distance';
import hamming from 'compute-hamming';
import manhattan from 'compute-manhattan-distance';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isObject from '@stdlib/assert/is-object';
import isArrayArray from '@stdlib/assert/is-array-array';
import isInteger from '@stdlib/assert/is-integer';
import isNull from '@stdlib/assert/is-null';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import PriorityQueue from './queue.js';


// FUNCTIONS //

/**
* Creates a two-dimensional array.
*
* @param {number} m - number of rows
* @param {number} n - number of columns
* @return {Array} an empty array of arrays
*/
function create2dArray( m, n ) {
	const ret = [];
	for ( let i = 0; i < m; i++ ) {
		ret[ i ] = new Array( n );
	}
	return ret;
}

/**
* Returns a function which checks whether an element is equal to input.
*
* @param {string} input - the element the generated function should compare to
* @return {Function} a function which when invoked checks whether its first argument is equal to input
*/
function isEqual( input ) {
	return ( d ) => {
		return d === input;
	};
}

/**
* Algorithm adapted from Introduction to Information Retrieval by Manning et al., Cambridge University Press. 2008 [p.386].
*
* @param {Array} data - input data
* @param {Function} linkage - used linkage function
* @param {Function} distance - used distance metric
* @return {Array} a list holding merge instructions
*/
export function efficientHAC( data, linkage, distance ) {
	const d = data;
	const N = d.length;
	const P = [];
	const I = [];
	const C = create2dArray( N, N );
	for ( let n = 0; n < N; n++ ) {
		for ( let i = 0; i < N; i++ ) {
			C[n][i] = {
				'sim': 1 / (1 + distance( d[n], d[i] ) ),
				'index': i
			};
		}
		I[n] = 1;
		P[n] = new PriorityQueue( C[n] );
		P[n].delete( C[n][n] );
	}

	const A = [];

	function maxSim( q, i ){
		return I[i] === 1 ? q.max().sim : 0;
	}
	for ( let k = 0; k < N - 1; k++ ) {
		const k1 = argmax( P.map( maxSim ) )[0];
		const k2 = P[k1].max().index;
		A.push( [k1, k2] );
		I[k2] = 0;
		P[k1].reset();
		for ( let i = 0; i < I.length; i++ ) {
			if ( I[i] === 1 && i !== k1 ) {
				P[i].delete( C[i][k1] );
				P[i].delete( C[i][k2] );
				C[i][k1].sim = linkage(i, k1, k2, C);
				P[i].insert(C[i][k1]);
				C[k1][i].sim = linkage(i, k1, k2, C);
				P[k1].insert(C[k1][i]);
			}
		}
	}
	return A;
}


// MAIN //

/**
* Hierarchical clustering based on priority-queue algorithm. Implements single-linkage and complete-linkage.
*
* @param {Array} data - two-dimensional array
* @param {Object} [opts] - function options
* @param {String} [opts.linkage='complete'] - accessor function for accessing array values
* @param {String} [opts.distance='euclidean'] - boolean indicating whether to return a new array
* @return {Object} an object exposing two functions, `getTree` and `getClusters(k)`, where `k` is the number of clusters
*/
function hclust( data, opts ) {
	let allDistances;
	let distanceFun;
	let linkageFun;
	let distance;
	let linkage;

	if ( !isArrayArray( data ) ) {
		throw new TypeError( 'invalid input argument. Data must be passed as an array of arrays. Value: `' + data + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( hasOwnProp( opts, 'linkage' ) ) {
			linkage = opts.linkage;
			if ( linkage !== 'single' && linkage !== 'complete' ) {
				throw new TypeError( 'invalid option. Linkage option must be either "single" or "complete". Option: `' + linkage + '`.' );
			}
		}
		if ( hasOwnProp( opts, 'distance' ) ) {
			distance = opts.distance;
			allDistances = [ 'chebyshev', 'cosine', 'euclidean', 'hamming', 'manhattan' ];
			if ( !allDistances.some( isEqual( distance ) ) ) {
				throw new TypeError( 'invalid option. Distance option must be "chebyshev", "cosine", "euclidean", "hamming" or "manhattan". Option: `' + distance + '`.' );
			}
		}
	}

	switch ( linkage ) {
		case 'single':
			linkageFun = function singleLinkage( i, k1, k2, C ) {
				return max( C[i][k1].sim, C[i][k2].sim );
			};
		break;
		default:
			linkageFun = function completeLinkage( i, k1, k2, C ) {
				return min( C[i][k1].sim, C[i][k2].sim );
			};
		break;
	}

	switch ( distance ) {
		case 'chebyshev':
			distanceFun = chebyshev;
		break;
		case 'cosine':
			distanceFun = cosine;
		break;
		case 'hamming':
			distanceFun = hamming;
		break;
		case 'manhattan':
			distanceFun = manhattan;
		break;
		default:
			distanceFun = euclidean;
		break;
	}
	const A = efficientHAC( data, linkageFun, distanceFun );

	function getClusters( k ) {
		if ( !isInteger( k ) ) {
			throw new TypeError( 'invalid argument. The number of desired clusters must be an integer. Option: `' + k + '`.' );
		}
		const clusters = [];
		for ( let i = 0; i < data.length; i++ ) {
			const current = [ i ];
			clusters.push( current );
		}
		let nClusters = clusters.length;
		let j = 0;

		while ( nClusters > k ) {
			const merged = clusters[ A[ j ][ 0 ] ].concat( clusters[ A[j][1] ] );
			clusters[ A[j][0] ] = merged;
			clusters[ A[j][1] ] = null;
			nClusters--;
			j++;
		}
		return clusters.filter( c => !isNull( c ) );
	}

	function getClusterAssignments( k ) {
		const clusters = getClusters( k );
		const out = new Array( data.length );
		for ( let i = 0; i < clusters.length; i++ ) {
			const cluster = clusters[ i ];
			for ( let j = 0; j < cluster.length; j++ ) {
				const idx = cluster[ j ];
				out[ idx ] = `${i18n.t('StatisticalModels:cluster')} ${i+1}`;
			}
		}
		return out;
	}

	function getTree() {
		const clusters = [];
		for ( let i = 0; i < data.length; i++ ) {
			const current = {};
			current.name = data[ i ].join( ', ' );
			current.value = 1;
			clusters.push( current );
		}
		let j = 0;
		while ( j < A.length ) {
			const node = {
				children: [ clusters[ A[j][0] ], clusters[ A[j][1] ] ],
				value: clusters[ A[j][0] ].value + clusters[ A[j][1] ].value,
				name: clusters[ A[j][0] ].value + clusters[ A[j][1] ].value
			};
			clusters[ A[j][0] ] = node;
			clusters[ A[j][1] ] = null;
			j++;
		}
		return clusters[ 0 ];
	}

	return {
		getClusterAssignments,
		getClusters,
		getTree
	};
}


// EXPORTS //

export default hclust;
