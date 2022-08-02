/* eslint-disable guard-for-in */

/**
* Contains MIT-licensed code:
*
* The MIT License (MIT)
*
* Copyright (c) 2013 Yurii Lahodiuk
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import quantiles from '@isle-project/utils/statistic/quantiles.js';
import sample from '@stdlib/random/sample';
import ln from '@stdlib/math/base/special/ln';
import round from '@stdlib/math/base/special/round';
import incrspace from '@stdlib/array/incrspace';
import Plot from './tree_plot.js';
import split from './split.js';


// FUNCTIONS //

/**
 * Calculating how many elements have the same values.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {Object} object with counts
 */
function countUniqueValues( values, indices ) {
	console.log( 'countUniqueValues' );
	const counter = {};

	// Detect different values of attribute:
	for ( let i = indices.length - 1; i >= 0; i--) {
		const idx = indices[ i ];
		counter[ values[ idx ] ] = 0;
	}

	// Count number of occurrences of each of value:
	for ( let i = indices.length - 1; i >= 0; i--) {
		const idx = indices[ i ];
		counter[ values[ idx ] ] += 1;
	}
	return counter;
}

/**
 * Finding value which is most frequent in an array.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {number} most frequent value
 */
function mostFrequentValue( values, indices ) {
	// Counting number of occurrences:
	const counter = countUniqueValues( values, indices );

	let mostFrequentCount = 0;
	let mostFrequentValue;
	for ( let value in counter ) {
		if ( counter[ value ] > mostFrequentCount ) {
			mostFrequentCount = counter[ value ];
			mostFrequentValue = value;
		}
	}
	return mostFrequentValue;
}

/**
 * Calculates the GINI coefficient for the given values.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {number} GINI coefficient
 */
function gini( values, indices ) {
	const counter = countUniqueValues( values, indices );
	const len = indices.length;
	let out = 0;
	for ( let i in counter ) {
		const p = counter[i] / len;
		out += p * (1-p);
	}
	return out;
}

/**
 * Calculating entropy of a variable.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {number} entropy value
 */
function entropy( values, indices ) {
	// Count number of occurrences of each value:
	const counter = countUniqueValues( values, indices );
	const len = indices.length;
	let entropy = 0;
	for ( let i in counter ) {
		const p = counter[i] / len;
		entropy += -p * ln(p);
	}
	return entropy;
}

/**
 * Calculates the variance of a variable.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {number} variance
 */
function variance( values, indices ) {
	const len = indices.length;
	let delta = 0;
	let mean = 0;
	let M2 = 0;
	let N = 0;

	if ( !len ) {
		return null;
	}
	if ( len < 2 ) {
		return 0;
	}
	for ( let i = 0; i < len; i++ ) {
		const idx = indices[ i ];
		const x = values[ idx ];
		N += 1;
		delta = x - mean;
		mean += delta / N;
		M2 += delta * ( x - mean );
	}
	return M2 / ( N - 1 );
}

/**
 * Calculates the mean of a variable.
 *
 * @private
 * @param {Array} values - array of values
 * @param {Array} indices - array of indices
 * @returns {number} mean value
 */
function mean( values, indices ) {
	const len = indices.length;
	if ( !len ) {
		return null;
	}
	let mu = 0;
	for ( let i = 0; i < len; i++ ) {
		const idx = indices[ i ];
		const delta = values[ idx ] - mu;
		mu += delta / (i+1);
	}
	return mu;
}


// VARIABLES //

const predicates = {
	'==': ( a, b ) => a == b, // eslint-disable-line eqeqeq
	'>=': ( a, b ) => a >= b
};


// MAIN //

/**
* Creates an instance of a decision tree for classification problems.
*
* @constructor
* @param opts - contains training set and some configuration parameters
*/
function ClassificationTreeConstructor( opts ) {
	const nobs = opts.data[ opts.response ].length;

	this.importances = {};
	for ( let j = 0; j < opts.predictors.length; j++ ) {
		this.importances[ opts.predictors[ j ] ] = 0;
	}
	this.root = buildClassificationTree({
		data: opts.data,
		response: opts.response,
		predictors: opts.predictors,
		indices: opts.indices ? opts.indices : incrspace( 0, nobs, 1 ),
		minItemsCount: opts.minItemsCount || 50,
		minBucket: opts.minBucket || ( round( ( opts.minItemsCount || 50 ) / 3 )),
		scoreThreshold: opts.scoreThreshold || 0.01,
		maxTreeDepth: opts.maxTreeDepth || 20,
		quantitative: opts.quantitative,
		criterion: opts.criterion === 'gini' ? gini : entropy
	}, this.importances );

	this.predict = ( data, idx ) => {
		if ( idx === void 0 ) {
			const nobs = data[ opts.predictors[ 0 ] ].length;
			const out = new Array( nobs );
			for ( let i = 0; i < nobs; i++ ) {
				out[ i ] = predict( this.root, data, i );
			}
			return out;
		}
		return predict( this.root, data, idx );
	};

	this.type = 'classification';
	this.response = opts.response;
}

/**
 * Creates an instance of DecisionTree
 *
 * @constructor
 * @param builder - contains training set and
 *                  some configuration parameters
 */
function RegressionTreeConstructor( opts ) {
	const nobs = opts.data[ opts.response ].length;

	this.root = buildRegressionTree({
		data: opts.data,
		response: opts.response,
		predictors: opts.predictors,
		indices: opts.indices ? opts.indices : incrspace( 0, nobs, 1 ),
		minItemsCount: opts.minItemsCount || 50,
		minBucket: opts.minBucket || ( round( ( opts.minItemsCount || 50 ) / 3 )),
		scoreThreshold: opts.scoreThreshold || 0.01,
		maxTreeDepth: opts.maxTreeDepth || 20,
		quantitative: opts.quantitative
	});

	this.predict = ( data, idx ) => {
		if ( idx === void 0 ) {
			const nobs = data[ opts.predictors[ 0 ] ].length;
			const out = new Array( nobs );
			for ( let i = 0; i < nobs; i++ ) {
				out[ i ] = Number( predict( this.root, data, i ) );
			}
			return out;
		}
		return Number( predict( this.root, data, idx ) );
	};

	this.type = 'regression';
	this.response = opts.response;
}

/**
* Creates an instance of RandomForest with specific number of trees.
*
* @constructor
* @param opts - contains configuration parameters for building decision trees
*/
function RandomForestClassifierConstructor( opts ) {
	this.trees = buildRandomForestClassifier( opts );
	this.importances = {};
	for ( let i = 0; i < opts.predictors.length; i++ ) {
		const attr = opts.predictors[ i ];
		this.importances[ attr ] = 0;
		for ( let j = 0; j < this.trees.length; j++ ) {
			this.importances[ attr ] += this.trees[ j ].importances[ attr ];
		}
		this.importances[ attr ] /= this.trees.length;
	}
	this.predict = ( data, idx ) => {
		if ( idx === void 0 ) {
			const nobs = data[ opts.predictors[ 0 ] ].length;
			const out = new Array( nobs );
			for ( let i = 0; i < nobs; i++ ) {
				out[ i ] = predictRandomForest( this.trees, data, i );
			}
			return out;
		}
		return predictRandomForest( this.trees, data, idx );
	};
	this.type = 'classification';
	this.response = opts.response;
}

/**
* Function for building classification decision tree.
*/
function buildClassificationTree( opts, importances ) {
	const {
		data, predictors, indices, response,
		minItemsCount, scoreThreshold, maxTreeDepth,
		quantitative, criterion, minBucket, nTry
	} = opts;
	const nobs = indices.length;
	const yValues = data[ response ];
	if ( ( maxTreeDepth === 0 ) || ( nobs <= minItemsCount ) ) {
		// Restriction by maximal depth of tree or size of training set is to small so we have to terminate process of building tree...
		return {
			category: mostFrequentValue( yValues, indices )
		};
	}
	const initialScore = criterion( yValues, indices );

	const alreadyChecked = new Map();
	const isQuantitative = new Map();
	predictors.forEach( attr => {
		alreadyChecked.set( attr, new Map() );
		isQuantitative.set( attr, quantitative.indexOf( attr ) !== -1 );
	});

	let bestSplit = {
		gain: 0
	};
	if ( nTry ) {
		predictors = sample( predictors, { size: nTry });
	}
	for ( let i = nobs - 1; i >= 0; i-- ) {
		const idx = indices[ i ];

		// Used as hash-set for avoiding the checking of split by rules with the same 'attribute-predicate-pivot' more than once
		for ( let j = 0; j < predictors.length; j++ ) {
			const attr = predictors[ j ];

			// Let the value of current attribute be the pivot:
			const pivot = data[ attr ][ idx ];

			// Pick the predicate depending on the type of the attribute value...
			let predicateName;
			let attrPredPivot;
			if ( isQuantitative.get( attr ) ) {
				predicateName = '>=';
				attrPredPivot = Number( ( pivot > -1 && pivot < 1 ) ? pivot.toPrecision( 2 ) : pivot.toFixed( 2 ) );
			} else {
				// No sense to compare non-numeric attributes so we will check only equality of such attributes...
				predicateName = '==';
				attrPredPivot = pivot;
			}
			const checked = alreadyChecked.get( attr );
			if ( checked.has( attrPredPivot ) ) {
				// We have already checked this split so we can skip it...
				continue;
			}
			checked.set( attrPredPivot, true );
			const predicate = predicates[ predicateName ];

			// Splitting training set by given 'attribute-predicate-value':
			const currSplit = split( data, indices, attr, predicate, attrPredPivot );

			// Recursively calculating for subsets:
			const matchEntropy = criterion( yValues, currSplit.match );
			const notMatchEntropy = criterion( yValues, currSplit.notMatch );

			// Calculating gain:
			let newScore = 0;
			newScore += matchEntropy * currSplit.match.length;
			newScore += notMatchEntropy * currSplit.notMatch.length;
			newScore /= nobs;
			const currGain = initialScore - newScore;
			if (
				currGain > bestSplit.gain &&
				currSplit.match.length > minBucket &&
				currSplit.notMatch.length > minBucket
			) {
				// Remember pairs 'attribute-predicate-value' which provide gain...
				bestSplit = currSplit;
				bestSplit.predicateName = predicateName;
				bestSplit.predicate = predicate;
				bestSplit.attribute = attr;
				bestSplit.pivot = attrPredPivot;
				bestSplit.gain = currGain;
			}
		}
	}
	if ( !bestSplit.gain || ( bestSplit.gain / initialScore ) < scoreThreshold ) {
		return { category: mostFrequentValue( yValues, indices ) };
	}
	// Building sub-trees:
	opts.maxTreeDepth = maxTreeDepth - 1;

	importances[ bestSplit.attribute ] += bestSplit.gain;

	opts.indices = bestSplit.match;
	const matchSubTree = buildClassificationTree( opts, importances );

	opts.indices = bestSplit.notMatch;
	const notMatchSubTree = buildClassificationTree( opts, importances );

	return {
		attribute: bestSplit.attribute,
		predicate: bestSplit.predicate,
		predicateName: bestSplit.predicateName,
		pivot: bestSplit.pivot,
		match: matchSubTree,
		notMatch: notMatchSubTree,
		matchedCount: bestSplit.match.length,
		notMatchedCount: bestSplit.notMatch.length
	};
}

/**
* Function for building classification decision tree.
*/
function buildRegressionTree( opts ) {
	const {
		data, predictors, indices, response,
		minItemsCount, scoreThreshold, maxTreeDepth,
		quantitative, minBucket, nTry
	} = opts;

	const nobs = indices.length;
	const yValues = data[ response ];
	if ((maxTreeDepth === 0) || ( nobs <= minItemsCount)) {
		// restriction by maximal depth of tree
		// or size of training set is to small
		// so we have to terminate process of building tree
		return {
			category: mean( yValues, indices )
		};
	}

	const initialScore = variance( yValues, indices );

	const alreadyChecked = new Map();
	const isQuantitative = new Map();
	predictors.forEach( attr => {
		alreadyChecked.set( attr, new Map() );
		isQuantitative.set( attr, quantitative.indexOf( attr ) !== -1 );
	});

	// this variable expected to contain rule, which splits training set
	// into subsets with smaller values of entropy (produces informational gain)
	let bestSplit = {
		gain: 0
	};

	if ( nTry ) {
		predictors = sample( predictors, { size: nTry });
	}
	for ( let i = nobs - 1; i >= 0; i-- ) {
		const idx = indices[ i ];

		// iterating over all attributes of item
		for ( let j = 0; j < predictors.length; j++ ) {
			const attr = predictors[ j ];

			// let the value of current attribute be the pivot
			const pivot = data[ attr ][ idx ];

			// Pick the predicate depending on the type of the attribute value:
			let predicateName;
			let attrPredPivot;
			if ( isQuantitative.get( attr ) ) {
				predicateName = '>=';
				attrPredPivot = Number( ( pivot > -1 && pivot < 1 ) ? pivot.toPrecision( 2 ) : pivot.toFixed( 2 ) );
			} else {
				// There is no sense to compare non-numeric attributes so we will check only equality of such attributes...
				predicateName = '==';
				attrPredPivot = pivot;
			}
			const checked = alreadyChecked.get( attr );
			if ( checked.has( attrPredPivot ) ) {
				// We have already checked this split so we can skip it...
				continue;
			}
			checked.set( attrPredPivot, true );

			const predicate = predicates[ predicateName ];

			// splitting training set by given 'attribute-predicate-value'
			const currSplit = split( data, indices, attr, predicate, attrPredPivot );

			// calculating for subsets:
			const matchEntropy = variance( yValues, currSplit.match );
			const notMatchEntropy = variance( yValues, currSplit.notMatch );

			// calculating informational gain
			let newScore = 0;
			newScore += matchEntropy * currSplit.match.length;
			newScore += notMatchEntropy * currSplit.notMatch.length;
			newScore /= nobs;
			const currGain = initialScore - newScore;
			if (
				currGain > bestSplit.gain &&
				currSplit.match.length > minBucket &&
				currSplit.notMatch.length > minBucket
			) {
				bestSplit = currSplit;
				bestSplit.predicateName = predicateName;
				bestSplit.predicate = predicate;
				bestSplit.attribute = attr;
				bestSplit.pivot = attrPredPivot;
				bestSplit.gain = currGain;
			}
		}
	}
	if ( !bestSplit.gain || ( bestSplit.gain / initialScore ) < scoreThreshold ) {
		return { category: mean( yValues, indices ) };
	}

	// Building sub-trees:
	opts.maxTreeDepth = maxTreeDepth - 1;

	opts.indices = bestSplit.match;
	const matchSubTree = buildRegressionTree( opts );

	opts.indices = bestSplit.notMatch;
	const notMatchSubTree = buildRegressionTree( opts );

	return {
		attribute: bestSplit.attribute,
		predicate: bestSplit.predicate,
		predicateName: bestSplit.predicateName,
		pivot: bestSplit.pivot,
		match: matchSubTree,
		notMatch: notMatchSubTree,
		matchedCount: bestSplit.match.length,
		notMatchedCount: bestSplit.notMatch.length
	};
}

/**
* Returns the predicted value for the i-th observation using the decision tree.
*/
function predict( tree, data, i ) {
	// Traversing tree from the root to leaf:
	while ( true ) {
		if ( tree.category ) {
			// Only leafs contains predicted category...
			return tree.category;
		}
		const attr = tree.attribute;
		const value = data[ attr ][ i ];
		const predicate = tree.predicate;
		const pivot = tree.pivot;

		// Move to one of the sub-trees:
		if ( predicate( value, pivot ) ) {
			tree = tree.match;
		} else {
			tree = tree.notMatch;
		}
	}
}

/**
* Building array of decision trees.
*/
function buildRandomForestClassifier( opts ) {
	// Creating training sets for each tree:
	const trainingSets = [];
	const nobs = opts.data[ opts.response ].length;
	const indices = incrspace( 0, nobs, 1 );
	for ( let t = 0; t < opts.nTrees; t++ ) {
		trainingSets[ t ] = sample( indices );
	}
	const forest = [];
	for ( let t = 0; t < opts.nTrees; t++ ) {
		opts.indices = trainingSets[ t ];
		const tree = new ClassificationTreeConstructor( opts );
		forest.push( tree );
	}
	return forest;
}

/**
* Returns the majority vote prediction for the chosen item.
*/
function predictRandomForest( forest, data, idx ) {
	const result = {};
	for ( let i = 0; i < forest.length; i++ ) {
		const tree = forest[ i ];
		const prediction = tree.predict( data, idx );
		result[ prediction ] = result[ prediction ] ? result[ prediction ] + 1 : 1;
	}
	let max = -1;
	let out;
	for ( let key in result ) {
		if ( result[ key ] > max ) {
			max = result[ key ];
			out = key;
		}
	}
	return out;
}


// EXPORTS //

export const ClassificationTree = ClassificationTreeConstructor;
export const RegressionTree = RegressionTreeConstructor;
export const RandomForestClassifier = RandomForestClassifierConstructor;
export const TreePlot = Plot;
