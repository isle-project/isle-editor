// MODULES //

import min from '@stdlib/math/base/special/min';


// MAIN //

/**
* Generates a string displaying the filters for the current active data subset.
*
* @private
* @param {Array} filters - data subset filters
* @param {boolean} abridged - controls whether to display all filters in multiple lines or an abridged version
* @returns {string} filter display string
*/
function formatFilters( filters, abridged = false ) {
	let out = abridged ? 'Filtered:' : 'Filtered:\n';
	if ( !abridged ) {
		for ( let i = 0; i < filters.length; i++ ) {
			const filter = filters[ i ];
			out += filter.id+': '+ JSON.stringify( filter.value ) + '\n';
		}
	} else {
		const maxIdx = min( filters.length, 2 );
		for ( let i = 0; i < maxIdx; i++ ) {
			const filter = filters[ i ];
			out += filter.id+': '+ JSON.stringify( filter.value );
			if ( i < maxIdx - 1 ) {
				out += ', ';
			} else {
				out += ( filters.length > maxIdx ) ? '...' : '   ';
			}
		}
	}
	return out;
}


// EXPORTS //

export default formatFilters;
