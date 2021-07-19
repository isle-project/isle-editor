// MAIN //

/**
 * Event handler ignoring default behavior and preventing bubbling-up.
 *
 * @param {Event} event - event for which to prevent default behavior and propagation
 */
function stopDefaultAndPropagation( event ) {
	event.stopPropagation();
	event.preventDefault();
}


// EXPORTS //

export default stopDefaultAndPropagation;
