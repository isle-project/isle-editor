// MODULES //

import { i18n } from '@isle-project/locales/editor';


// MAIN //

/**
* Extracts the possible values of a property from a component property description.
*
* @param {string} [description=''] - component property description
* @returns {Array} array of values
*/
function extractOptionsFromDescription( description = '' ) {
	const listStart = description.indexOf( i18n.t( 'Editor:either' ) );
	if ( listStart === -1 ) {
		return null;
	}
	description = description.substring( listStart );
	const RE_BACKTICK_STRINGS = /`([^`]+)`/g;
	let match = RE_BACKTICK_STRINGS.exec( description );
	const values = [];
	while ( match !== null ) {
		values.push( match[ 1 ] );
		match = RE_BACKTICK_STRINGS.exec( description );
	}
	return values;
}


// EXPORTS //

export default extractOptionsFromDescription;
