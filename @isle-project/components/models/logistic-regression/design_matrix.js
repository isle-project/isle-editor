// MODULES //

import contains from '@stdlib/assert/contains';
import ndarray from '@stdlib/ndarray/array';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';


// MAIN //

/**
 * Creates a design matrix for a logistic regression model.
 *
 * @param {Array} x - names of predictors
 * @param {string} y - name of response variable
 * @param {Object} data - data object
 * @param {Array} quantitative - array of quantitative predictors
 * @param {boolean} intercept - boolean indicating whether to include an intercept
 * @param {*} success - success value
 * @returns {Object} design matrix
 */
function designMatrix( x, y, data, quantitative, intercept, success ) {
	const predictors = [];
	const hash = {};
	const nobs = data[ x[ 0 ] ].length;
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
	const buffer = new Float64Array( nobs * (predictors.length+1) );
	for ( let i = 0; i < nobs; i++ ) {
		if ( intercept ) {
			buffer[ (predictors.length+1)*i ] = 1;
		}
		let colIndex = 0;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				colIndex += 1;
				buffer[ (predictors.length+1)*i + colIndex ] = values[ i ];
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					colIndex += 1;
					buffer[ (predictors.length+1)*i + colIndex ] = ( val === categories[ k ] ) ? 1 : 0;
				}
			}
		}
	}
	const matrix = ndarray( buffer, {
		shape: [ nobs, predictors.length+1 ]
	});
	const yvalues = data[ y ].map( v => {
		return v === success ? 1 : 0;
	});
	return { matrix, predictors, yvalues, nobs };
}


// EXPORTS //

export default designMatrix;
