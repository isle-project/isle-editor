// MODULES //

import uniqueNonMissing from './unique_nonmissing.js';


// MAIN //

function extractCategoriesFromValues( values, group ) {
	const distinct = uniqueNonMissing( values );
	if ( !group.categories ) {
		return distinct;
	}
	const keys = [];
	for ( let key of group.categories ) {
		if ( distinct.includes( key ) ) {
			keys.push( key );
		}
	}
	return keys;
}


// EXPORTS //

export default extractCategoriesFromValues;
