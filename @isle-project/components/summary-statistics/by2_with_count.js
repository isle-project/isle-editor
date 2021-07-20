// MODULES //

import isArray from '@stdlib/assert/is-array';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const SORT_OPTS = {
	'numeric': true // Use numeric collation such that "1" < "2" < "10"...
};


// MAIN //

/**
 * Applies a function to elements of two arrays by group(s).
 *
 * @param {Array} arr1 - first array
 * @param {Array} arr2 - second array
 * @param {Array} factor - array of factors
 * @param {Function} functions - functions to apply to each array
 * @param {string} [group] - group variable
 * @returns {Object} object with `keys` holding used categories and the `result`s for each label
 */
function by2WithCount( arr1, arr2, factor, functions, group ) {
	let result = {};
	let ret1 = {};
	let ret2 = {};
	for ( let i = 0; i < factor.length; i++ ) {
		if ( !isArray( ret1[ factor[ i ] ]) ) {
			ret1[ factor[ i ] ] = [];
			ret2[ factor[ i ] ] = [];
		}
		ret1[ factor[ i ] ].push( arr1[ i ]);
		ret2[ factor[ i ] ].push( arr2[ i ]);
	}
	let keys;
	if ( group.length === 1 ) {
		keys = extractUsedCategories( ret1, group[ 0 ] );
	} else {
		keys = objectKeys( ret1 );
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		result[ key ] = {
			value: functions.map( f => f( ret1[ key ], ret2[ key ]) ),
			size: ret1[ key ].length
		};
	}
	return { keys, result };
}


// EXPORTS //

export default by2WithCount;
