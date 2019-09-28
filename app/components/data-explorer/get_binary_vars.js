// MODULES //

import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';


// MAIN //

function getBinaryVars( vars, data ) {
	const out = [];
	for ( let i = 0; i < vars.length; i++ ) {
		const vals = data[ vars[ i ] ].filter( x => !isNull( x ) && !isnan( x ) );
		const encountered = new Set();
		for ( let j = 0; j < vals.length; j++ ) {
			encountered.add( vals[ j ] );
			if ( encountered.size > 2 ) {
				break;
			}
			if ( j === vals.length - 1 ) {
				out.push( vars[ i ] );
			}
		}
	}
	return out;
}


// EXPORTS //

export default getBinaryVars;
