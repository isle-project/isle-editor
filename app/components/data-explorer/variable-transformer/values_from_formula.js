// MODULES //

import round from '@stdlib/math/base/special/round';
import sqrt from '@stdlib/math/base/special/sqrt';
import exp from '@stdlib/math/base/special/exp';
import pow from '@stdlib/math/base/special/pow';
import ln from '@stdlib/math/base/special/ln';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isNull from '@stdlib/assert/is-null';
import FUNCTION_KEYS from './function_keys.json';


// VARIABLES //

const FUNCTIONS = [
	exp,
	ln,
	pow,
	round,
	sqrt
];


// MAIN //

function valuesFromFormula( code, data ) {
	let arr = [];
	for ( let key in data ) {
		if ( hasOwnProp( data, key ) ) {
			for ( let i = 0; i < data[ key ].length; i++ ) {
				if ( !isObject( arr[ i ] ) ) {
					arr[ i ] = {};
				}
				const val = data[ key ][ i ];
				arr[ i ][ key ] = isNull( val ) ? NaN : val;
			}
		}
	}
	const fun = new Function( 'datum', ...FUNCTION_KEYS, code ); // eslint-disable-line no-new-func
	const values = new Array( arr.length );
	for ( let i = 0; i < arr.length; i++ ) {
		values[ i ] = fun( arr[ i ], ...FUNCTIONS );
	}
	return values;
}


// EXPORTS //

export default valuesFromFormula;
