// MODULES //

import quantile from 'compute-quantile';
import min from 'compute-min';
import max from 'compute-max';
import mean from 'compute-mean';
import pcorr from 'compute-pcorr';
import range from 'compute-range';
import stdev from 'compute-stdev';
import median from 'compute-median';
import variance from 'compute-variance';
import nanmin from 'compute-nanmin';
import nanmax from 'compute-nanmax';
import nanmean from 'compute-nanmean';
import nanrange from 'compute-nanrange';
import nanstdev from 'compute-nanstdev';
import nanmedian from 'compute-nanmedian';
import nanvariance from 'compute-nanvariance';
import isNull from '@stdlib/assert/is-null';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

/**
* Returns a function to calculate the specified statistic.
*
* @param {string} statName - name of statistic
* @param {boolean} omit - controls whether to remove missing values
* @returns {Function} function to calculate statistic
*/
function statistic( statName, omit ) {
	let fun;
	switch ( statName ) {
	case 'Correlation':
		fun = pcorr;
		break;
	case 'Interquartile Range':
		fun = ( arr ) => {
			let values = [];
			if ( omit ) {
				for ( let i = 0; i < arr.length; i++ ) {
					if ( !isNull( arr[ i ] ) && !isnan( arr[ i ] ) ) {
						values.push( arr[ i ] );
					}
				}
			} else {
				values = arr;
			}
			const upper = quantile( values, 0.75 );
			const lower = quantile( values, 0.25 );
			const iqr = upper - lower;
			return [ iqr, lower, upper ];
		};
		break;
	case 'Mean':
		fun = omit ? nanmean : mean;
		break;
	case 'Median':
		fun = omit ? nanmedian : median;
		break;
	case 'Min':
		fun = omit ? nanmin: min;
		break;
	case 'Max':
		fun = omit ? nanmax : max;
		break;
	case 'Range':
		fun = omit ? nanrange : range;
		break;
	case 'Standard Deviation':
		fun = omit ? nanstdev : stdev;
		break;
	case 'Variance':
		fun = omit ? nanvariance : variance;
		break;
	default:
		fun = function noop() {};
		break;
	}
	return fun;
} // statistic()


// EXPORTS //

export default statistic;
