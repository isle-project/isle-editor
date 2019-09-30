
/**
* Adapted from MIT-licensed code:
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

import contains from '@stdlib/assert/contains';
import hasOwnProp from '@stdlib/assert/has-own-property';
import ln from '@stdlib/math/base/special/ln';
import round from '@stdlib/math/base/special/round';
import incrspace from '@stdlib/math/utils/incrspace';
import Plot from './tree_plot.js';
import split from './split.js';


// FUNCTIONS //

/**
* Calculating how many elements have the same
* values
*
* @param values - array of values
*/
function countUniqueValues( values, indices ) {
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
* @param values - array of values
*/
function mostFrequentValue( values, indices ) {
	// Counting number of occurrences:
	const counter = countUniqueValues( values, indices );

	let mostFrequentCount = 0;
	let mostFrequentValue;
	for ( let value in counter ) {
		if ( counter[value] > mostFrequentCount ) {
			mostFrequentCount = counter[value];
			mostFrequentValue = value;
		}
	}
	return mostFrequentValue;
}

function gini( values, indices ) {
	const counter = countUniqueValues( values, indices );
	let out = 0;
	for ( let i in counter ) {
		if ( hasOwnProp( counter, i ) ) {
			const p = counter[i] / indices.length;
			out += p * (1-p);
		}
	}
	return out;
}

/**
* Calculating entropy of a variable.
*
* @param values - array of values
*/
function entropy( values, indices ) {
	// Count number of occurrences of each value:
	const counter = countUniqueValues( values, indices );
	let entropy = 0;
	for ( let i in counter ) {
		if ( hasOwnProp( counter, i ) ) {
			const p = counter[i] / indices.length;
			entropy += -p * ln(p);
		}
	}
	return entropy;
}

/**
* Calculates the variance of a variable.
*
* @param values - array of values
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
* @param values - array of values
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
 * Creates an instance of DecisionTree
 *
 * @constructor
 * @param builder - contains training set and
 *                  some configuration parameters
 */
function ClassificationTreeConstructor( opts ) {
	const nobs = opts.data[ opts.response ].length;

	this.root = buildClassificationTree({
		data: opts.data,
		response: opts.response,
		predictors: opts.predictors,
		indices: incrspace( 0, nobs, 1 ),
		minItemsCount: opts.minItemsCount || 50,
		minBucket: opts.minBucket || ( round( ( opts.minItemsCount || 50 ) / 3 )),
		scoreThreshold: opts.scoreThreshold || 0.01,
		maxTreeDepth: opts.maxTreeDepth || 20,
		quantitative: opts.quantitative,
		criterion: opts.criterion === 'gini' ? gini : entropy
	});

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
		indices: incrspace( 0, nobs, 1 ),
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
}

/**
* Creates an instance of RandomForest with specific number of trees.
*
* @constructor
* @param builder - contains training set and some configuration parameters for building decision trees
*/
function RandomForestClassifierConstructor( builder, treesNumber ) {
	this.trees = buildRandomForestClassifier( builder, treesNumber );
}

RandomForestClassifierConstructor.prototype.predict = function predict( item ) {
	return predictRandomForest( this.trees, item );
};

/**
* Function for building classification decision tree.
*/
function buildClassificationTree(opts) {
	var data = opts.data;
	var predictors = opts.predictors;
	var indices = opts.indices;
	var response = opts.response;
	var minItemsCount = opts.minItemsCount;
	var scoreThreshold = opts.scoreThreshold;
	var maxTreeDepth = opts.maxTreeDepth;
	var quantitative = opts.quantitative;
	var criterion = opts.criterion;
	var minBucket = opts.minBucket;

	const nobs = indices.length;
	if ((maxTreeDepth === 0) || ( nobs <= minItemsCount)) {
		// restriction by maximal depth of tree
		// or size of training set is to small
		// so we have to terminate process of building tree
		return {
			category: mostFrequentValue( data[ response ], indices )
		};
	}

	var initialScore = criterion( data[ response ], indices );

	// used as hash-set for avoiding the checking of split by rules
	// with the same 'attribute-predicate-pivot' more than once
	var alreadyChecked = {};

	// this variable expected to contain rule, which splits training set
	// into subsets with smaller values of entropy (produces informational gain)
	var bestSplit = {
		gain: 0
	};
	for ( let i = nobs - 1; i >= 0; i-- ) {
		const idx = indices[ i ];

		// iterating over all attributes of item
		for ( let j = 0; j < predictors.length; j++ ) {
			const attr = predictors[ j ];

			// let the value of current attribute be the pivot
			var pivot = data[ attr ][ idx ];

			// pick the predicate
			// depending on the type of the attribute value
			var predicateName;
			if ( contains( quantitative, attr ) ) {
				predicateName = '>=';
			} else {
				// there is no sense to compare non-numeric attributes
				// so we will check only equality of such attributes
				predicateName = '==';
			}

			var attrPredPivot = attr + predicateName + pivot;
			if ( alreadyChecked[attrPredPivot] ) {
				// skip such pairs of 'attribute-predicate-pivot',
				// which been already checked
				continue;
			}
			alreadyChecked[attrPredPivot] = true;

			var predicate = predicates[predicateName];

			// splitting training set by given 'attribute-predicate-value'
			var currSplit = split( data, indices, attr, predicate, pivot );

			// calculating for subsets:
			var matchEntropy = criterion( data[ response ], currSplit.match );
			var notMatchEntropy = criterion( data[ response ], currSplit.notMatch );

			// calculating informational gain
			let newScore = 0;
			newScore += matchEntropy * currSplit.match.length;
			newScore += notMatchEntropy * currSplit.notMatch.length;
			newScore /= nobs;
			var currGain = initialScore - newScore;

			if (
				currGain > bestSplit.gain &&
				currSplit.match.length > minBucket &&
				currSplit.notMatch.length > minBucket
			) {
				// remember pairs 'attribute-predicate-value'
				// which provides informational gain
				bestSplit = currSplit;
				bestSplit.predicateName = predicateName;
				bestSplit.predicate = predicate;
				bestSplit.attribute = attr;
				bestSplit.pivot = pivot;
				bestSplit.gain = currGain;
			}
		}
	}

	if ( !bestSplit.gain || ( bestSplit.gain / initialScore ) < scoreThreshold ) {
		return { category: mostFrequentValue( data[ response ], indices ) };
	}

	// building sub-trees:

	opts.maxTreeDepth = maxTreeDepth - 1;

	opts.indices = bestSplit.match;
	var matchSubTree = buildClassificationTree( opts );

	opts.indices = bestSplit.notMatch;
	var notMatchSubTree = buildClassificationTree( opts );

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
function buildRegressionTree(opts) {
	var data = opts.data;
	var predictors = opts.predictors;
	var indices = opts.indices;
	var response = opts.response;
	var minItemsCount = opts.minItemsCount;
	var scoreThreshold = opts.scoreThreshold;
	var maxTreeDepth = opts.maxTreeDepth;
	var quantitative = opts.quantitative;
	var minBucket = opts.minBucket;

	const nobs = indices.length;
	if ((maxTreeDepth === 0) || ( nobs <= minItemsCount)) {
		// restriction by maximal depth of tree
		// or size of training set is to small
		// so we have to terminate process of building tree
		return {
			category: mean( data[ response ], indices )
		};
	}

	var initialScore = variance( data[ response ], indices );

	// used as hash-set for avoiding the checking of split by rules
	// with the same 'attribute-predicate-pivot' more than once
	var alreadyChecked = {};

	// this variable expected to contain rule, which splits training set
	// into subsets with smaller values of entropy (produces informational gain)
	var bestSplit = {
		gain: 0
	};
	for ( let i = nobs - 1; i >= 0; i-- ) {
		const idx = indices[ i ];

		// iterating over all attributes of item
		for ( let j = 0; j < predictors.length; j++ ) {
			const attr = predictors[ j ];

			// let the value of current attribute be the pivot
			var pivot = data[ attr ][ idx ];

			// pick the predicate
			// depending on the type of the attribute value
			var predicateName;
			if ( contains( quantitative, attr ) ) {
				predicateName = '>=';
			} else {
				// there is no sense to compare non-numeric attributes
				// so we will check only equality of such attributes
				predicateName = '==';
			}

			var attrPredPivot = attr + predicateName + pivot;
			if ( alreadyChecked[attrPredPivot] ) {
				// skip such pairs of 'attribute-predicate-pivot',
				// which been already checked
				continue;
			}
			alreadyChecked[attrPredPivot] = true;

			var predicate = predicates[predicateName];

			// splitting training set by given 'attribute-predicate-value'
			var currSplit = split( data, indices, attr, predicate, pivot );

			// calculating for subsets:
			var matchEntropy = variance( data[ response ], currSplit.match );
			var notMatchEntropy = variance( data[ response ], currSplit.notMatch );

			// calculating informational gain
			let newScore = 0;
			newScore += matchEntropy * currSplit.match.length;
			newScore += notMatchEntropy * currSplit.notMatch.length;
			newScore /= nobs;
			var currGain = initialScore - newScore;

			if (
				currGain > bestSplit.gain &&
				currSplit.match.length > minBucket &&
				currSplit.notMatch.length > minBucket
			) {
				// remember pairs 'attribute-predicate-value'
				// which provides informational gain
				bestSplit = currSplit;
				bestSplit.predicateName = predicateName;
				bestSplit.predicate = predicate;
				bestSplit.attribute = attr;
				bestSplit.pivot = pivot;
				bestSplit.gain = currGain;
			}
		}
	}

	if ( !bestSplit.gain || ( bestSplit.gain / initialScore ) < scoreThreshold ) {
		return { category: mean( data[ response ], indices ) };
	}

	// building subtrees:

	opts.maxTreeDepth = maxTreeDepth - 1;

	opts.indices = bestSplit.match;
	var matchSubTree = buildRegressionTree( opts );

	opts.indices = bestSplit.notMatch;
	var notMatchSubTree = buildRegressionTree( opts );

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
* Building array of decision trees
*/
function buildRandomForestClassifier(builder, treesNumber) {
	var items = builder.trainingSet;

	// creating training sets for each tree
	var trainingSets = [];
	for (var t = 0; t < treesNumber; t++) {
		trainingSets[t] = [];
	}
	for ( let i = items.length - 1; i >= 0; i-- ) {
		// assigning items to training sets of each tree
		// using 'round-robin' strategy
		var correspondingTree = i % treesNumber;
		trainingSets[correspondingTree].push(items[i]);
	}

	// building decision trees
	var forest = [];
	for ( let t = 0; t < treesNumber; t++) {
		builder.trainingSet = trainingSets[t];

		var tree = new ClassificationTreeConstructor( builder );
		forest.push(tree);
	}
	return forest;
}

/**
 * Each of decision tree classifying item
 * ('voting' that item corresponds to some class).
 *
 * This function returns hash, which contains
 * all classifying results, and number of votes
 * which were given for each of classifying results
 */
function predictRandomForest(forest, item) {
	const result = {};
	for ( let i in forest ) {
		if ( hasOwnProp( forest, i ) ) {
			const tree = forest[i];
			const prediction = tree.predict(item);
			result[prediction] = result[prediction] ? result[prediction] + 1 : 1;
		}
	}
	return result;
}


// EXPORTS //

export const ClassificationTree = ClassificationTreeConstructor;
export const RegressionTree = RegressionTreeConstructor;
export const RandomForestClassifier = RandomForestClassifierConstructor;
export const TreePlot = Plot;
