// MODULES //

import vex from 'vex-js';
import isHidden from 'utils/is-hidden';


// MAIN //

function scrollIntoView( lineNumber, startColumn ) {
	const elem = document.getElementById( 'line-'+lineNumber+'-'+startColumn );
	if ( elem ) {
		if ( isHidden( elem ) ) {
			vex.dialog.alert( 'The component is not displayed.' );
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
	}
}


// EXPORTS //

export default scrollIntoView;

