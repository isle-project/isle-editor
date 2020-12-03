// MODULES //

import hasOwnProp from '@stdlib/assert/has-own-property';


// MAIN //

function isOffline() {
	if ( hasOwnProp( window.navigator, 'onLine' ) ) {
		return !window.navigator.onLine;
	}
	return false;
}


// EXPORTS //

export default isOffline;
