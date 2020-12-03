// MODULES //

import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isNull from '@stdlib/assert/is-null';
import replace from '@stdlib/string/replace';


// FUNCTIONS //

function escapeDots( str ) {
	if ( !isString( str ) ) {
		return str;
	}
	return replace( str, '.', '[dot]' );
}


// MAIN //

/**
* Loop over the data and generate new labels.
*/
function recodeCategorical( firstVar, secondVar, nameMappings, data, castNumeric = false ) {
	const newVar = [];
	const firstValues = data[ firstVar ];
	if ( !nameMappings ) {
		return firstValues;
	}
	if ( castNumeric ) {
		if ( isNull( secondVar ) ) {
			for ( let i = 0; i < firstValues.length; i++ ) {
				const val = firstValues[ i ];
				const newLabel = Number( nameMappings[ escapeDots( val ) ] );
				newVar.push( newLabel );
			}
		} else {
			const secondValues = data[ secondVar ];
			for ( let i = 0; i < firstValues.length; i++ ) {
				const oldFirst = escapeDots( firstValues[ i ] );
				const oldSecond = escapeDots( secondValues[ i ] );
				const newLabel = nameMappings[ oldFirst + '-' + oldSecond ];
				newVar.push( Number( newLabel ) );
			}
		}
		return newVar;
	}
	if ( isNull( secondVar ) ) {
		for ( let i = 0; i < firstValues.length; i++ ) {
			const val = firstValues[ i ];
			let newLabel = nameMappings[ escapeDots( val ) ];
			if ( newLabel === 'null' || newLabel === 'NA' ) {
				newLabel = null;
			}
			newVar.push( newLabel );
		}
	} else {
		const secondValues = data[ secondVar ];
		for ( let i = 0; i < firstValues.length; i++ ) {
			const oldFirst = escapeDots( firstValues[ i ] );
			const oldSecond = escapeDots( secondValues[ i ] );
			const newLabel = nameMappings[ oldFirst + '-' + oldSecond ];
			newVar.push( newLabel );
		}
	}
	return newVar;
}


// EXPORTS //

export default recodeCategorical;
