// MAIN //

function obsToVar( output ) {
	const data = {};
	const columnNames = Object.keys( output[ 0 ] ).filter( x => x !== '' );
	for ( let j = 0; j < columnNames.length; j++ ) {
		let col = columnNames[ j ];
		data[ col ] = new Array( output.length );
	}
	for ( let i = 0; i < output.length; i++ ) {
		for ( let j = 0; j < columnNames.length; j++ ) {
			let col = columnNames[ j ];
			data[ col ][ i ] = output[ i ][ col ];
		}
	}
	return data;
}


// EXPORTS //

export default obsToVar;
