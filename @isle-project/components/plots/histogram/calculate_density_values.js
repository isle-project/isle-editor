// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import linspace from '@stdlib/array/linspace';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/stats/base/dists/normal/pdf';
import dchisq from '@stdlib/stats/base/dists/chisquare/pdf';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import dt from '@stdlib/stats/base/dists/t/pdf';
import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import iqr from '@isle-project/utils/statistic/iqr';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import kernelSmoothDensity from '@isle-project/utils/kernel-smooth-density';


// MAIN //

/**
* Calculates either a kernel density estimator or the MLE of a chosen parametric distribution.
*
* @private
* @param {Array} values - input values
* @param {string} densityType - `Data-driven`, `Uniform`, `Exponential`, or `Normal`
* @param {Array<number>} [densityParams=[]] - parameters for the chosen density distribution
* @param {number} [bandwidthAdjust=1.0] - bandwidth multiplier applied to rule-of-thumb bandwidth value
* @returns {Array} two-element nested array of `x` and `y` values
*/
function calculateDensityValues( values, densityType, densityParams = [], bandwidthAdjust = 1 ) {
	/* eslint-disable no-case-declarations */
	const minVal = min( values );
	const maxVal = max( values );
	const x = linspace( minVal, maxVal, 512 );
	let y;
	switch ( densityType ) {
	case 'Data-driven':
		// Chose appropriate bandwidth via rule-of-thumb:
		let h = 2.0 * iqr( values ) * pow( values.length, -1/3 ) || 0.1;

		// Multiply bandwidth with user-defined adjustment parameter:
		h *= bandwidthAdjust;
		const phi = gaussian.factory( 0.0, 1.0 );
		const kde = kernelSmoothDensity( values, phi, h );
		y = x.map( x => kde( x ) );
		break;
	case 'Uniform':
		const a = isNumber( densityParams[ 0 ] ) ? densityParams[ 0 ] : minVal;
		const b = isNumber( densityParams[ 1 ] ) ? densityParams[ 1 ] : maxVal;
		y = x.map( x => dunif( x, a, b ) );
		break;
	case 'Exponential':
		const lambda = isNumber( densityParams[ 0 ] ) ? densityParams[ 0 ] : 1.0 / mean( values );
		y = x.map( x => dexp( x, lambda ) );
		break;
	case 'Normal':
		const avg = isNumber( densityParams[ 0 ] ) ? densityParams[ 0 ] : mean( values );
		const sd = isNumber( densityParams[ 1 ] ) ? densityParams[ 1 ] : stdev( values );
		y = x.map( x => gaussian( x, avg, sd ) );
		break;
	case 'T':
		const df = isNumber( densityParams[ 0 ] ) ? densityParams[ 0 ] : values.length - 1;
		y = x.map( x => dt( x, df ) );
		break;
	case 'Chi-squared':
		const nu = isNumber( densityParams[ 0 ] ) ? densityParams[ 0 ] : mean( values );
		y = x.map( x => dchisq( x, nu ) );
	}
	return [ x, y ];
}


// EXPORTS //

export default calculateDensityValues;
