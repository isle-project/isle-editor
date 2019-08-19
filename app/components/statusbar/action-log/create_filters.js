// MODULES //

import React, { Fragment } from 'react';
import objectEntries from '@stdlib/utils/entries';
import removeFactory from './remove_factory.js';
import './create_filters.css';


// MAIN //

function createFilters( filter, callback ) {
	let entries = filter ? objectEntries( filter ) : [];
	let newFilters = <Fragment>
		<span className="title">Filters:</span>
		<span style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
			{entries.map( ( arr, idx ) => {
				return ( <button
					className="action-filter-button"
					onClick={removeFactory( arr[ 0 ], filter, callback)}
					key={idx}
				>{arr[ 0 ]}: {arr[ 1 ]}</button> );
			})}
		</span>
	</Fragment>;
	return newFilters;
}


// EXPORTS //

export default createFilters;
