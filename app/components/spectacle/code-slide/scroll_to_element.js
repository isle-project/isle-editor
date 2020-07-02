/**
* Adapted from scroll-to@0.0.2 (MIT Licensed) https://github.com/component/scroll-to
*/

// MODULES //

import Tween from 'component-tween';
import raf from 'component-raf';
import noop from '@stdlib/utils/noop';


// FUNCTIONS //

function scroll( element ) {
	const y = element.scrollTop;
	const x = element.scrollLeft;
	return { top: y, left: x };
}


// MAIN //

function scrollToElement( element, x, y, options ) {
	options = options || {};

	const start = scroll( element );
	const tween = Tween( start )
		.ease(options.ease || 'out-circ')
		.to({ top: y, left: x })
		.duration(options.duration || 1000);

	tween.update( function onUpdate( o ){
		element.scrollTop = o.top | 0;
		element.scrollLeft = o.left | 0;
	});

	tween.on('end', function onEnd(){
		animate = noop; // eslint-disable-line no-func-assign
	});

	function animate() {
		raf( animate );
		tween.update();
	}

	animate();
	return tween;
}


// EXPORTS //

export default scrollToElement;
