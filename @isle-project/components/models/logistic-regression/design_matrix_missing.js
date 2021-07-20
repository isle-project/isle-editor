// MODULES //

import contains from '@stdlib/assert/contains';
import ndarray from '@stdlib/ndarray/array';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import isNonMissingNumber from '@isle-project/utils/is-non-missing-number';
import isMissing from '@isle-project/utils/is-missing';


// MAIN //

/**
 * Creates a design matrix for a logistic regression model after filtering out missing values.
 *
 * @param {Array} x - names of predictors
 * @param {string} y - name of response variable
 * @param {Object} data - data object
 * @param {Array} quantitative - array of quantitative predictors
 * @param {boolean} intercept - boolean indicating whether to include an intercept
 * @param {*} success - success value
 * @returns {Object} design matrix
 */
function designMatrixMissing( x, y, data, quantitative, intercept, success ) {
	const predictors = [];
	const hash = {};
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = extractCategoriesFromValues( values, x[ j ] );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	let buffer = [];
	const yvalues = [];
	for ( let i = 0; i < data[ x[ 0 ] ].length; i++ ) {
		let missing = false;
		const row = [];
		if ( intercept ) {
			row.push( 1 );
		}
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				if ( isNonMissingNumber( values[ i ] ) ) {
					row.push( values[ i ] );
				} else {
					missing = true;
				}
			} else {
				const val = values[ i ];
				if ( isMissing( val ) ) {
					missing = true;
				} else {
					const categories = hash[ x[ j ] ];
					for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
						row.push( ( val === categories[ k ] ) ? 1 : 0 );
					}
				}
			}
		}
		if ( !missing ) {
			buffer = buffer.concat( row );
			yvalues.push( data[ y ][ i ] === success ? 1 : 0 );
		}
	}
	const nobs = yvalues.length;
	const matrix = ndarray( buffer, {
		shape: [ nobs, predictors.length+1 ]
	});
	return { matrix, predictors, yvalues, nobs };
}


// EXPORTS //

export default designMatrixMissing;
