// MAIN //

const canInsert = ( type ) => ( state ) => {
	const { $from } = state.selection;
	for ( let d = $from.depth; d >= 0; d-- ) {
		const index = $from.index( d );
		if ( $from.node( d ).canReplaceWith( index, index, type ) ) {
			return true;
		}
	}
	return false;
};


// EXPORTS //

export default canInsert;
