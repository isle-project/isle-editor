// MODULES //

import isArray from '@stdlib/assert/is-array';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import objectKeys from '@stdlib/utils/keys';
import sqrt from '@stdlib/math/base/special/sqrt';
import contains from '@stdlib/assert/contains';
import zScore from '@isle-project/utils/zscore';


// MAIN //

/**
 * Returns the design matrix for a lasso regression model.
 *
 * @param {Array} x - predictor variables
 * @param {Object} data - data object
 * @param {Array} quantitative - array of quantitative predictors
 * @param {boolean} intercept - boolean indicating whether to include an intercept
 * @returns {Object} object with design `matrix`, list of `predictors`, `categoricalStats`, and `standardized` values
 */
function designMatrix( x, data, quantitative, intercept ) {
	if ( !isArray( x ) ) {
		x = [ x ];
	}
	const matrix = [];
	const predictors = [];
	const hash = {};
	const standardized = {};
	const categoricalStats = {};
	const nobs = data[ x[ 0 ] ].length;
	for ( let j = 0; j < x.length; j++ ) {
		if ( contains( quantitative, x[ j ] ) ) {
			const values = zScore( data[ x[ j ] ] );
			standardized[ x[ j ] ] = values;
			predictors.push( x[ j ] );
		} else {
			const values = data[ x[ j ] ];
			const counts = countBy( values, identity );
			const categories = x[ j ].categories || objectKeys( counts );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				const label = `${x[ j ]}_${categories[ k ]}`;
				predictors.push( label );
				const p = counts[ categories[ k ] ] / nobs;
				categoricalStats[ label ] = {
					mu: p,
					sigma: sqrt( p * (1-p) )
				};
			}
			hash[ x[ j ] ] = categories;
		}
	}
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		if ( intercept ) {
			row.push( 1 );
		}
		for ( let j = 0; j < x.length; j++ ) {
			if ( contains( quantitative, x[ j ] ) ) {
				const values = standardized[ x[ j ] ];
				row.push( values[ i ] );
			} else {
				const values = data[ x[ j ] ];
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					const { mu, sigma } = categoricalStats[ `${x[ j ]}_${categories[ k ]}` ];
					row.push(
						( val === categories[ k ] ) ?
						( 1 - mu ) / sigma :
						-mu / sigma
					);
				}
			}
		}
		matrix.push( row );
	}
	return { matrix, predictors, categoricalStats, standardized };
}


// EXPORTS //

export default designMatrix;
