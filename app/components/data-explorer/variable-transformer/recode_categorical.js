// MODULES //

import isNull from '@stdlib/assert/is-null';


// MAIN //

/**
* Loop over the data and generate new labels.
*/
function recodeCategorical( firstVar, secondVar, nameMappings, data ) {
	const newVar = [];
	const firstValues = data[ firstVar ];
	if ( isNull( secondVar ) ) {
		for ( let i = 0; i < firstValues.length; i++ ) {
			const val = firstValues[ i ];
			const newLabel = nameMappings[ val ];
			newVar.push( newLabel );
		}
	} else {
		const secondValues = data[ secondVar ];
		for ( let i = 0; i < firstValues.length; i++ ) {
			const oldFirst = firstValues[ i ];
			const oldSecond = secondValues[ i ];
			const newLabel = nameMappings[ oldFirst + '-' + oldSecond ];
			newVar.push( newLabel );
		}
	}
	return newVar;
}


// EXPORTS //

export default recodeCategorical;
