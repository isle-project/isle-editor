// MODULES //

import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';


// MAIN //

function getBinaryVars( vars, data ) {
	const out = [];
	for ( let i = 0; i < vars.length; i++ ) {
		let vals = data[ vars[ i ] ];
		if ( vals ) {
			const encountered = new Set();
			for ( let j = 0; j < vals.length; j++ ) {
				let v = vals[ j ];
				if ( !isNull( v ) && !isnan( v ) && v !== '' ) {
					encountered.add( v );
				}
				if ( encountered.size > 2 ) {
					break;
				}
				if ( j === vals.length - 1 ) {
					out.push( vars[ i ] );
				}
			}
		}
	}
	return out;
}


// EXPORTS //

export default getBinaryVars;
