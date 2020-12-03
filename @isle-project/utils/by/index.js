// MODULES //

import isArray from '@stdlib/assert/is-array';
import hasOwnProp from '@stdlib/assert/has-own-property';


// MAIN //

/**
* Splits an input array by group and calls a function with the sub-array of each group.
*
* @private
* @param {Array} arr - input array
* @param {string} factor - group values
* @param {Function} fun - function to invoke with the array of values for each group
* @returns {Object} table with keys corresponding to the unique group labels and values corresponding to the function values for each sub-array
*/
function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		if ( hasOwnProp( ret, key ) ) {
			ret[ key ] = fun( ret[ key ]);
		}
	}
	return ret;
}


// EXPORTS //

export default by;
