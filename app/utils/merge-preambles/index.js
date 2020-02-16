// MODULES //

import uniq from 'uniq';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import merge from '@stdlib/utils/merge';


// FUNCTIONS //

function mergeStrategy( a, b, key ) {
	if ( key === 'author' ) {
		if ( isString( a ) ) {
			a = [ a ];
		}
		if ( isString( b ) ) {
			b = [ b ];
		}
		return uniq( a.concat( b ) );
	}
	if ( key === 'toolbar' ) {
		return uniq( a.concat( b ), ( a, b ) => {
			if ( a.name === b.name ) {
				return 0;
			}
			return 1;
		});
	}
	return a;
}


// MAIN //

const mergePreambles = merge.factory({
	'override': mergeStrategy,
	'copy': false,
	'extend': true
});


// EXPORTS //

export default mergePreambles;
