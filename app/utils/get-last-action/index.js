// MODULES //

import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';


// MAIN //

const getLastAction = ( userActions, id, type ) => {
	if ( isObject( userActions ) ) {
		let actions = userActions[ id ];
		if ( isArray( actions ) ) {
			actions = actions.filter( action => {
				return action.type === type;
			});
			if ( actions.length > 0 ) {
				return actions[ 0 ].value;
			}
		}
	}
	return null;
};


// EXPORTS //

export default getLastAction;
