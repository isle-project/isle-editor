// MODULES //

import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';


// FUNCTIONS //

function castToNumber( x ) {
	if ( endsWith( x, 'px' ) ) {
		x = parseFloat( replace( x, 'px', '' ) );
	}
	return x;
}


// MAIN //

function animatePosition( element, prop, to, duration ) {
	if ( duration <= 0 ) {
		return;
	}
	console.log( 'Current: '+element.style[ prop ] );
	const current = castToNumber( element.style[ prop ] );
	const difference = to - current;
	console.log( 'Diff: '+ difference );
	const perTick = difference / duration * 10.0;
	console.log( 'perTick: '+perTick );
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
