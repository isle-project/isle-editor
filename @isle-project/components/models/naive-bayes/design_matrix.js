// MODULES //

import contains from '@stdlib/assert/contains';
import ndarray from '@stdlib/ndarray/array';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isnan from '@stdlib/assert/is-nan';
import isArray from '@stdlib/assert/is-array';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';


// FUNCTIONS //

function isMissing( x ) {
	return isnan( x ) || isUndefinedOrNull( x );
}

function isNonMissingNumber( x ) {
	return isNumber( x ) && !isnan( x );
}


// MAIN //

export function designMatrix( x, y, data, quantitative ) {
	let matrix = [];
	const predictors = [];
	const hash = {};
	if ( !isArray( x ) ) {
		x = [ x ];
	}
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const nobs = data[ x[ 0 ] ].length;
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				row.push( values[ i ] );
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = 0; k < categories.length; k++ ) {
					row.push( ( val === categories[ k ] ) ? 1 : 0 );
				}
			}
		}
		matrix.push( row );
	}
	matrix = ndarray( matrix );
	const yvalues = data[ y ];
	return { matrix, predictors, yvalues };
}

export function designMatrixMissing( x, y, data, quantitative ) {
	let matrix = [];
	const predictors = [];
	const hash = {};
	if ( !isArray( x ) ) {
		x = [ x ];
	}
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const nobs = data[ x[ 0 ] ].length;
	const yvalues = [];
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		let missing = false;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				if ( isNonMissingNumber( values[ i ] ) ) {
					row.push( values[ i ] );
				} else {
					missing = true;
				}
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				if ( isMissing( val ) ) {
					missing = true;
				} else {
					for ( let k = 0; k < categories.length; k++ ) {
						row.push( ( val === categories[ k ] ) ? 1 : 0 );
					}
				}
			}
		}
		if ( isMissing( data[ y ][ i ] ) ) {
			missing = true;
		}
		if ( !missing ) {
			matrix.push( row );
			yvalues.push( data[ y ][ i ] );
		}
	}
	matrix = ndarray( matrix );
	return { matrix, predictors, yvalues };
}
