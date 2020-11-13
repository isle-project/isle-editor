// MAIN //

/**
* Event handler ignoring default behavior and preventing bubbling-up.
*/
function stopDefaultAndPropagation( event ) {
	event.stopPropagation();
	event.preventDefault();
}


// EXPORTS //

export default stopDefaultAndPropagation;
