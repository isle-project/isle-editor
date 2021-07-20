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
 * Applies a function to elements of an array by group(s).
 *
 * @param {Array} arr - array of values
 * @param {Array} factor - factor variable array
 * @param {Array} functions - array of functions
 * @param {Array} [group] - group variable(s)
 * @returns {Object} object with `keys` holding used categories and the `result`s for each label
 */
function byWithCount( arr, factor, functions, group ) {
	let table = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( table[ factor[ i ] ]) ) {
			table[ factor[ i ] ] = [];
		}
		table[ factor[ i ] ].push( arr[ i ]);
	}
	let keys = objectKeys( table );
	if ( group.length === 2 ) {
		const cat1 = group[ 0 ].categories;
		const cat2 = group[ 1 ].categories;
		if ( cat1 && cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else if ( cat1 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = cat1.indexOf( as[ 0 ] ) - cat1.indexOf( bs[ 0 ] );
				if ( diff !== 0 ) {
					return diff;
				}
				return as[ 1 ].localeCompare( bs[ 1 ], void 0, SORT_OPTS );
			});
		}
		else if ( cat2 ) {
			keys.sort( ( a, b ) => {
				const as = a.split( ':' );
				const bs = b.split( ':' );
				let diff = as[ 0 ].localeCompare( bs[ 0 ], void 0, SORT_OPTS );
				if ( diff !== 0 ) {
					return diff;
				}
				diff = cat2.indexOf( as[ 1 ] ) - cat2.indexOf( bs[ 1 ] );
				return diff;
			});
		}
		else {
			keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
		}
	} else if ( group.length === 1 && group[ 0 ].categories ) {
		keys = extractUsedCategories( table, group[ 0 ] );
	} else {
		keys.sort( ( a, b ) => a.localeCompare( b, void 0, SORT_OPTS ) );
	}
	const out = {};
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		out[ key ] = {
			value: functions.map( f => f( table[ key ] ) ),
			size: table[ key ].length
		};
	}
	return out;
}


// EXPORTS //

export default byWithCount;
