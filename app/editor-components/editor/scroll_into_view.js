// MODULES //

import vex from 'vex-js';


// FUNCTIONS //

function isHidden( el ) {
	return el.offsetParent === null;
}


// MAIN //

function scrollIntoView( lineNumber ) {
	const elem = document.getElementById( 'line-'+lineNumber );
	if ( elem ) {
		if ( isHidden( elem ) ) {
			vex.dialog.alert({ unsafeMessage: 'The component is currently not displayed.' });
		}
		elem.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'end'
		});
		elem.classList.add( 'focus-glow' );
		setTimeout( () => {
			elem.classList.remove( 'focus-glow' );
		}, 2000 );
	} else {
		vex.dialog.alert({ unsafeMessage: 'The component is currently not rendered in the lesson document.' });
	}
}


// EXPORTS //

export default scrollIntoView;

