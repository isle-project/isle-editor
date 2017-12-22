import isArray from '@stdlib/assert/is-array';
import hasOwnProp from '@stdlib/assert/has-own-property';

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
} // end FUNCTION by()

export default by;
