// MODULES //

import isArray from '@stdlib/assert/is-array';
import hasOwnProp from '@stdlib/assert/has-own-property';


// MAIN //

/**
* Splits two input arrays by group and calls a supplied function with the two sub-arrays for each group.
*
* @private
* @param {Array} arr1 - first input array
* @param {Array} arr2 - second input array
* @param {string} factor - group values
* @param {Function} fun - function to invoke for each group
* @returns {Object} table with keys corresponding to the unique group labels and values corresponding to the function values
*/
function by2( arr1, arr2, factor, fun ) {
	let out = {};
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
	for ( let key in ret1 ) {
		if ( hasOwnProp( ret1, key ) ) {
			out[ key ] = fun( ret1[ key ], ret2[ key ]);
		}
	}
	return out;
}


// EXPORTS //

export default by2;
