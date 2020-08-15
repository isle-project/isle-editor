// MODULES //

import isNull from '@stdlib/assert/is-null';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
* Returns bin categories for the supplied data
*
* @param {Array<number>} rawData - data array
* @param {Array<string>} catNames - category names
* @param {Array<number>} xBreaks - bin breakpoints
* @returns {Array<string>} array of bin categories
*/
function retrieveBinnedValues( rawData, catNames, xBreaks ) {
	const newVar = [];
	let hasMissing = false;
	for ( let i = 0; i < rawData.length; i++ ) {
		let newLabel = null;
		const val = rawData[ i ];
		if ( isNumber( val ) && !isnan( val ) ) {
			let breakInd = 0;
			while ( isNull( newLabel) ) {
				if ( breakInd >= catNames.length ) {
					newLabel = catNames[ catNames.length - 1 ];
				} else if ( val < xBreaks[ breakInd ] ) {
					newLabel = catNames[ breakInd ];
				} else {
					breakInd += 1;
				}
			}
		} else {
			hasMissing = true;
		}
		newVar.push( newLabel );
	}
	if ( hasMissing ) {
		catNames.push( null );
	}
	return newVar;
}


// EXPORTS //

export default retrieveBinnedValues;
