// MODULES //

import power from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import sqrt from '@stdlib/math/base/special/sqrt';
import exp from '@stdlib/math/base/special/exp';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import ln from '@stdlib/math/base/special/ln';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isNull from '@stdlib/assert/is-null';
import stdev from '@isle-project/utils/statistic/stdev.js';
import mean from '@isle-project/utils/statistic/mean.js';
import sum from '@isle-project/utils/statistic/sum.js';
import FUNCTION_KEYS from './function_keys.json';


// FUNCTIONS //

/**
 * Turns a function accepting an array of numbers into a function accepting a variable number of arguments.
 *
 * @private
 * @param {Function} func - function to wrap
 * @returns {Function} wrapped function
 */
const variadicFunction = ( func ) => {
	return ( ...args ) => {
		return func( args );
	};
};


// VARIABLES //

const FUNCTIONS = [
	exp,
	ln,
	round,
	sqrt,
	power,
	max,
	min,
	variadicFunction( mean ),
	variadicFunction( stdev ),
	variadicFunction( sum )
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
