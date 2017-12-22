// MODULES //

import isArray from '@stdlib/assert/is-array';
import hasOwnProp from '@stdlib/assert/has-own-property';


// MAIN //

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
