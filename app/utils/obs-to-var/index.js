// MODULES //

import trim from '@stdlib/string/trim';


// VARIABLES //

const RE_NUMBER = /^[+-]?[\d.]+e?[+-]?\d*$/;


// MAIN //

/**
* Returns a data object representation from an object array.
*
* ## Notes
*
* -   The function trims any whitespace from the variable names.
*
* @param {Array} arr - object array with each element corresponding to one observation
* @returns {Object} object with each key corresponding to one variable containing all its values
*/
function obsToVar( arr ) {
	const data = {};
	const keymap = {};
	const columnNames = Object.keys( arr[ 0 ] ).filter( x => x !== '' );
	for ( let i = 0; i < columnNames.length; i++ ) {
		const col = trim( columnNames[ i ] );
		keymap[ columnNames[ i ] ] = col;
		data[ col ] = new Array( arr.length );
	}
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = 0; j < columnNames.length; j++ ) {
			const col = columnNames[ j ];
			let val = arr[ i ][ col ];
			if ( RE_NUMBER.test( val ) ) {
				val = Number( val );
			}
			data[ keymap[ col ] ][ i ] = val;
		}
	}
	return data;
}


// EXPORTS //

export default obsToVar;
