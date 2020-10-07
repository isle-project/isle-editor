// MODULES //

import isUndefined from '@stdlib/assert/is-undefined';
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
	for ( let i = 0; i < rawData.length; i++ ) {
		let newLabel = void 0;
		const val = rawData[ i ];
		if ( isNumber( val ) && !isnan( val ) ) {
			let breakInd = 0;
			while ( isUndefined( newLabel ) ) {
				if (
					breakInd >= xBreaks.length || // exhausted all break points
					val < xBreaks[ breakInd ] // value is smaller than current break point
				) {
					newLabel = catNames[ breakInd ];
				} else {
					breakInd += 1;
				}
			}
		} else {
			newLabel = null;
		}
		newVar.push( newLabel );
	}
	return newVar;
}


// EXPORTS //

export default retrieveBinnedValues;
