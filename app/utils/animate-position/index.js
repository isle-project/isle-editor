// MODULES //

import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';


// FUNCTIONS //

/**
* Casts a pixel string to a number.
*
* @private
* @param {(string|number)} x - input value
* @param {number} cast number (in px)
*/
function castToNumber( x ) {
	if ( endsWith( x, 'px' ) ) {
		x = parseFloat( replace( x, 'px', '' ) );
	}
	return x;
}


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
	const current = castToNumber( element.style[ prop ] );
	const difference = to - current;
	const perTick = difference / duration * 10.0;
	setTimeout( function onTimeout() {
		const newVal = castToNumber( element.style[ prop ] ) + perTick;
		element.style[ prop ] = `${newVal}px`;
		if ( element.style[ prop ] === to ) {
			return;
		}
		animatePosition( element, prop, to, duration - 10.0 );
	}, 10 );
}


// EXPORTS //

export default animatePosition;
