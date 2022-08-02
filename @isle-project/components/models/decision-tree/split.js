// MAIN //

/**
* Splitting observations using specific predicate and pivot.
*/
function split( data, indices, attr, predicate, pivot ) {
	const values = data[ attr ];
	const out = new Int32Array( indices.length );
	let runningIndex = 0;
	for ( let i = indices.length - 1; i >= 0; i-- ) {
		const idx = indices[ i ];
		const attrValue = values[ idx ];
		if ( predicate( attrValue, pivot ) ) {
			out[ runningIndex ] = idx;
			runningIndex += 1;
		} else {
			out[ i + runningIndex ] = idx;
		}
	}
	const match = new Int32Array( out.buffer, 0, runningIndex );
	const notMatch = new Int32Array( out.buffer, runningIndex * 4, out.length - runningIndex );
	return {
		match: match,
		notMatch: notMatch
	};
}


// EXPORTS //

export default split;
