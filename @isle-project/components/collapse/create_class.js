// MAIN //

/**
 * Returns a class given the current visibility.
 *
 * @private
 * @param {boolean} val - current visibility status
 * @returns {boolean} collapse classes depending on visibility status
 */
 function createClass( val ) {
	if ( val === false ) {
		return 'vs-body vs-hidden';
	}
	return 'vs-body vs-display';
}


// EXPORTS //

export default createClass;
