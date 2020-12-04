/**
* Copyright (C) 2020-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import setNonEnumerableProperty from '@stdlib/utils/define-nonenumerable-property';


// MAIN //

/**
* Standardizes elements in input array.
*
* @param {Array} x - input array
* @param {boolean} demean - controls whether the mean should be subtracted from the values
* @param {boolean} scale - controls whether values should be divided by the standard deviation
* @returns {Array} output array with added `mu` and `sigma` properties
*/
function zScore( x, demean = true, scale = true ) {
	const avg = mean( x );
	const sd = stdev( x );
	const len = x.length;

	const out = new Array( len );
	if ( demean ) {
		if ( scale ) {
			for ( let i = 0; i < len; i++ ) {
				out[ i ] = ( x[ i ] - avg ) / sd;
			}
		} else {
			for ( let i = 0; i < len; i++ ) {
				out[ i ] = ( x[ i ] - avg );
			}
		}
	}
	else if ( scale ) {
		for ( let i = 0; i < len; i++ ) {
			out[ i ] = x[ i ] / sd;
		}
	}
	else {
		out = x.slice();
	}
	setNonEnumerableProperty( out, 'mu', avg );
	setNonEnumerableProperty( out, 'sigma', sd );
	return out;
}


// EXPORTS //

export default zScore;
