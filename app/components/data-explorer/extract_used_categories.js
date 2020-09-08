// MODULES //

import objectKeys from '@stdlib/utils/keys';


// MAIN //

function extractUsedCategories( freqs, group ) {
	if ( !group.categories ) {
		return objectKeys( freqs );
	}
	const keys = [];
	for ( let key of group.categories ) {
		if ( freqs[ key ] ) {
			keys.push( key );
		}
	}
	return keys;
}


// EXPORTS //

export default extractUsedCategories;
