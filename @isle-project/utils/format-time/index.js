// MODULES //

import floor from '@stdlib/math/base/special/floor';


// MAIN //

/**
 * Formats a duration as a human-readable string.
 *
 * @param {number} ms - duration in milliseconds
 * @returns {string} formatted duration
 */
const formatTime = ( ms ) => {
	ms = ms / 1000;
	const hours = floor( ms / ( 60*60 ) );
	ms = ms % ( 60*60 );
	let minutes = floor( ms / 60 );
	if ( minutes < 10 ) {
		minutes = '0'+minutes;
	}
	return hours + ':' + minutes;
};


// EXPORTS //

export default formatTime;
