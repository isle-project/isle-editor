// MODULES //

import objectKeys from '@stdlib/utils/keys';


// MAIN //

/**
 * Extracts a list of used categories from a frequency table object.
 *
 * @param {Object} freq - frequency table
 * @param {Object} group - group object
 * @returns {Array} list of used categories
 */
function extractUsedCategories( freq, group ) {
	if ( !group.categories ) {
		return objectKeys( freq );
	}
	const keys = [];
	for ( let key of group.categories ) {
		if ( freq[ key ] ) {
			keys.push( key );
		}
	}
	// Handle missing value category not present in group categories:
	if ( freq[ 'null' ] ) {
		keys.push( 'null' );
	}
	return keys;
}


// EXPORTS //

export default extractUsedCategories;
