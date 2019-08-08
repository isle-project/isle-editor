// VARIABLES //

const RE_NUMBER = /[+-]?[\d.]+e?[+-]?\d*/;


// MAIN //

function obsToVar( output ) {
	const data = {};
	const columnNames = Object.keys( output[ 0 ] ).filter( x => x !== '' );
	for ( let j = 0; j < columnNames.length; j++ ) {
		const col = columnNames[ j ];
		data[ col ] = new Array( output.length );
	}
	for ( let i = 0; i < output.length; i++ ) {
		for ( let j = 0; j < columnNames.length; j++ ) {
			const col = columnNames[ j ];
			let val = output[ i ][ col ];
			if ( RE_NUMBER.test( val ) ) {
				val = Number( val );
			}
			data[ col ][ i ] = val;
		}
	}
	return data;
}


// EXPORTS //

export default obsToVar;
