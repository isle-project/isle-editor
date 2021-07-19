// MODULES //

import uniqueNonMissing from './unique_nonmissing.js';


// MAIN //

/**
 * Extracts categories from values.
 *
 * @param {Array} values - array of values
 * @param {Object} group - group object
 * @param {string} [group.categories] - categories to return
 * @returns {Array} array of distinct categories inside `values`
 */
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
