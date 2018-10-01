// MODULES //

import quantile from './quantile.js';
import variance from './variance.js';
import pcorr from './pcorr.js';
import range from './range.js';
import stdev from './stdev.js';
import median from './median.js';
import mean from './mean.js';
import min from './min.js';
import max from './max.js';


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
	case 'Range':
		fun = range;
		break;
	case 'Standard Deviation':
		fun = stdev;
		break;
	case 'Variance':
		fun = variance;
		break;
	default:
		fun = function noop() {};
		break;
	}
	return fun;
} // statistic()


// EXPORTS //

export default statistic;
