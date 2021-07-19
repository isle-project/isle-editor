// MODULES //

import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';


// MAIN //

/**
 * Returns the last action of a given array of user actions.
 *
 * @param {Object} userActions - object with arrays of user actions per identifier
 * @param {number} id - component identifier for which to retrieve action
 * @param {string} type - type of action to retrieve
 * @returns {(Object|null)} action object or null if not found
 */
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
