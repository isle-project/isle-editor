// MODULES //

import floor from '@stdlib/math/base/special/floor';


// MAIN //

/**
* Formats a positive time in the format `minutes:seconds`.
*
* @private
* @param {number} time - time in seconds
* @returns {string} formatted time string of the format `minutes:seconds`
*/
function fmtPositiveTime( time ) {
	let minutes = floor( time / 60 );
	let seconds = time - minutes * 60;

	// Pad minutes and seconds with zeroes:
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	return `${minutes}:${seconds}`;
}


// EXPORTS //

export default fmtPositiveTime;
