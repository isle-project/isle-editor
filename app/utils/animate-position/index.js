// MODULES //

import pixelsToNumber from 'utils/pixels-to-number';


// MAIN //

/**
* Animates a position property of a specified DOM element.
*
* @param {Node} element - DOM node
* @param {string} prop - property name
* @param {number} to - target value for property
* @param {integer} duration - number of milliseconds for the animation to complete
*/
function animatePosition( element, prop, to, duration ) {
	if ( duration <= 0 ) {
		return;
	}
	const current = pixelsToNumber( element.style[ prop ] );
	const difference = to - current;
	const perTick = difference / duration * 10.0;
	setTimeout( function onTimeout() {
		const newVal = pixelsToNumber( element.style[ prop ] ) + perTick;
		element.style[ prop ] = `${newVal}px`;
		if ( newVal === to ) {
			return;
		}
		animatePosition( element, prop, to, duration - 10.0 );
	}, 10 );
}


// EXPORTS //

export default animatePosition;
