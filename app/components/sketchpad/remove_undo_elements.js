// MAIN //

const removeUndoElements = ( arr, nUndos ) => {
	let count = 0;
	let lastID;
	let elem;
	while ( count <= nUndos && arr.length > 0 ) {
		elem = arr.pop();
		if ( elem.type === 'text' ) {
			count += 1;
		} else if ( elem.type === 'line' && lastID !== elem.drawID ) {
			count += 1;
			lastID = elem.drawID;
		}
	}
	arr.push( elem );
};


// EXPORTS //

export default removeUndoElements;
