// MAIN //

/**
 * Renders a time in milliseconds as a string.
 *
 * @param {number} ms - time in milliseconds
 * @returns {string} string representation of a time in milliseconds
 */
function renderTime( ms ) {
	return new Date( ms ).toLocaleTimeString( [], {
		hour: '2-digit',
		minute: '2-digit',
		month: 'short',
		day: 'numeric'
	});
}


// EXPORTS //

export default renderTime;
