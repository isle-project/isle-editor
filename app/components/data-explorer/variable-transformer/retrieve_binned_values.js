// MODULES //

import isNull from '@stdlib/assert/is-null';


// MAIN //

function retrieveBinnedValues( rawData, catNames, xBreaks ) {
	const newVar = [];
	for ( let i = 0; i < rawData.length; i++ ) {
		let newLabel = null;
		let breakInd = 0;
		let val = rawData[i];
		while ( isNull( newLabel) ) {
			if ( breakInd >= catNames.length ) {
				newLabel = catNames[ catNames.length - 1 ];
			} else if ( val < xBreaks[ breakInd ] ) {
				newLabel = catNames[ breakInd ];
			} else {
				breakInd++;
			}
		}
		newVar.push( newLabel );
	}
	return newVar;
}


// EXPORTS //

export default retrieveBinnedValues;
