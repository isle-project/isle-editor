// MAIN //

/**
* Scrolls a vertical scrolbar to the specified position.
*
* @param {Node} element - DOM node with the scrollbar to change
* @param {number} to - vertical position of the scroll bar after animation
* @param {integer} duration - number of milliseconds until animation shall be complete
* @returns {void}
*/
function scrollTo( element, to, duration ) {
	if ( duration <= 0 ) {
		return;
	}
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10.0;

	setTimeout( function onTimeout() {
		element.scrollTop = element.scrollTop + perTick;
		if ( element.scrollTop === to ) {
			return;
		}
		scrollTo( element, to, duration - 10.0 );
	}, 10 );
}


// EXPORTS //

export default scrollTo;
