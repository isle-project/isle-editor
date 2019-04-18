// MAIN //

/**
* Generates a string displaying the filters for the current active data subset.
*
* @private
* @param {Array} filters - data subset filters
* @returns {string} filter display string
*/
function formatFilters( filters ) {
	let out = 'Restricted Dataset:\n';
	for ( let i = 0; i < filters.length; i++ ) {
		const filter = filters[ i ];
		out += filter.id+': '+ JSON.stringify( filter.value ) + '\n';
	}
	return out;
}


// EXPORTS //

export default formatFilters;
