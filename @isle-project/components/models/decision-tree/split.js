// MAIN //

/**
* Splitting observations using specific predicate and pivot.
*/
function split( data, indices, attr, predicate, pivot ) {
	const match = [];
	const notMatch = [];
	const values = data[ attr ];

	for ( let i = indices.length - 1; i >= 0; i-- ) {
		const idx = indices[ i ];
		const attrValue = values[ idx ];
		if ( predicate( attrValue, pivot ) ) {
			match.push( idx );
		} else {
			notMatch.push( idx );
		}
	}
	return {
		match: match,
		notMatch: notMatch
	};
}


// EXPORTS //

export default split;
