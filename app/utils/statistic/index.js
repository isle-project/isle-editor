// MODULES //

import papplyRight from '@stdlib/utils/papply-right';
import kurtosis from './kurtosis.js';
import skewness from './skewness.js';
import quantile from './quantile.js';
import variance from './variance.js';
import pcorr from './pcorr.js';
import range from './range.js';
import stdev from './stdev.js';
import median from './median.js';
import mean from './mean.js';
import min from './min.js';
import max from './max.js';
import sum from './sum.js';


// VARIABLES //

const firstQuartile = papplyRight( quantile, 0.25, 5 );
const thirdQuartile = papplyRight( quantile, 0.75, 5 );


// MAIN //

/**
* Returns a function to calculate the specified statistic.
*
* @param {string} statName - name of statistic
* @returns {Function} function to calculate statistic
*/
function statistic( statName ) {
	let fun;
	switch ( statName ) {
	case 'Correlation':
		fun = pcorr;
		break;
	case 'Interquartile Range':
		fun = ( arr ) => {
			const upper = quantile( arr, 0.75 );
			const lower = quantile( arr, 0.25 );
			const iqr = upper - lower;
			return [ iqr, lower, upper ];
		};
		break;
	case 'Mean':
		fun = mean;
		break;
	case 'Median':
		fun = median;
		break;
	case 'Min':
		fun = min;
		break;
	case 'Max':
		fun = max;
		break;
	case 'Quantile':
		fun = quantile;
		break;
	case 'Range':
		fun = range;
		break;
	case 'Sum':
		fun = sum;
		break;
	case 'Standard Deviation':
		fun = stdev;
		break;
	case 'Variance':
		fun = variance;
		break;
	case 'Skewness':
		fun = skewness;
		break;
	case 'Excess Kurtosis':
		fun = kurtosis;
		break;
	case 'First Quartile':
		fun = firstQuartile;
		break;
	case 'Third Quartile':
		fun = thirdQuartile;
		break;
	default:
		fun = function noop() {};
		break;
	}
	return fun;
} // statistic()


// EXPORTS //

export default statistic;
