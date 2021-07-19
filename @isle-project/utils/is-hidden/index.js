// MAIN //

/**
 * Determines if an element is hidden.
 *
 * @param {Node} el - input element
 * @returns {boolean} boolean indicating whether element is hidden
 */
function isHidden( el ) {
	if ( !el ) {
		return true;
	}
	return el.offsetParent === null;
}


// EXPORTS //

export default isHidden;
