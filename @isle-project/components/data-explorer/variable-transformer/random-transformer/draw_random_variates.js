// MODULES //

import random from '@stdlib/random/base';


// VARIABLES //

const RE_NAME_RANGE = /^([^0-9]+)(\d+):\1(\d+)$/;


// MAIN //

function drawRandomVariates({ name, distribution, params, nObs, asCategorical, seed }) {
	const match = RE_NAME_RANGE.exec( name );
	const draw = random[ distribution ].factory.apply( null, params.concat({ seed }) );
	if ( match && match.length === 4 ) {
		const prefix = match[ 1 ];
		const start = parseInt( match[ 2 ], 10 );
		const end = parseInt( match[ 3 ], 10 );
		const names = [];
		const values = [];
		if ( asCategorical ) {
			for ( let i = start; i <= end; i++ ) {
				const x = new Array( nObs );
				for ( let j = 0; j < nObs; j++ ) {
					x[ j ] = String( draw() );
				}
				values.push( x );
				names.push( `${prefix}${i}` );
			}
		} else {
			for ( let i = start; i <= end; i++ ) {
				const x = new Array( nObs );
				for ( let j = 0; j < nObs; j++ ) {
					x[ j ] = draw();
				}
				values.push( x );
				names.push( `${prefix}${i}` );
			}
		}
		return [ names, values ];
	}
	const values = new Array( nObs );
	for ( let i = 0; i < nObs; i++ ) {
		values[ i ] = draw();
	}
	return [ name, values ];
}


// EXPORTS //

export default drawRandomVariates;
