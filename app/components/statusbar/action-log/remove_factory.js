import isEmptyObject from '@stdlib/assert/is-empty-object';
import copy from '@stdlib/utils/copy';
import createFilters from './create_filters.js';

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


export default removeFactory;
