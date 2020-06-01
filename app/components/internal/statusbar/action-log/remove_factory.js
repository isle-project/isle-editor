// MODULES //

import isEmptyObject from '@stdlib/assert/is-empty-object';
import copy from '@stdlib/utils/copy';
import createFilters from './create_filters.js';


// MAIN //

function removeFactory( type, filter, callback ) {
	const onRemoveClick = ( event ) => {
		event.stopPropagation();
		let newFilter = copy( filter );
		delete newFilter[ type ];
		if ( isEmptyObject( newFilter ) ) {
			newFilter = null;
		}
		const newFilters = createFilters( newFilter, callback );
		callback( newFilter, newFilters );
	};
	return onRemoveClick;
}


// EXPORTS //

export default removeFactory;
