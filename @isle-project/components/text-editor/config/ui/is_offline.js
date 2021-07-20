// MODULES //

import hasOwnProp from '@stdlib/assert/has-own-property';


// MAIN //

/**
 * Checks whether the current browser is offline.
 *
 * @returns {boolean} boolean indicating whether the current browser is offline
 */
function isOffline() {
	if ( hasOwnProp( window.navigator, 'onLine' ) ) {
		return !window.navigator.onLine;
	}
	return false;
}


// EXPORTS //

export default isOffline;
