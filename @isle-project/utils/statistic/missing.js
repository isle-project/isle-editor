// MODULES //

import isMissing from '@isle-project/utils/is-missing';


// MAIN //

/**
* Returns the proportion of missing values.
*
* @param {Array} arr - array of values
* @returns {number} proportion of missing values (between 0 and 1)
*/
function missing( arr ) {
	const len = arr.length;
	if ( !len ) {
		return null;
	}
	let nMissing = 0;
	for ( let i = 0; i < len; i++ ) {
		if ( isMissing( arr[ i ] ) ) {
			nMissing += 1;
		}
	}
	return nMissing / len;
}


// EXPORTS //

export default missing;
