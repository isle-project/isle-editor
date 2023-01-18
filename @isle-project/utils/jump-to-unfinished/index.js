// MODULES //

import isArray from '@stdlib/assert/is-array';
import isHidden from '@isle-project/utils/is-hidden';


// MAIN //

function jumpToUnfinished( unfinished ) {
	if ( isArray( unfinished ) ) {
		const first = unfinished[ 0 ];
		if ( first ) {
			const elem = document.getElementById( first );
			if ( !elem ) {
				return;
			}
			if ( isHidden( elem ) ) {
				const clone = elem.cloneNode( true );
				const newDiv = document.createElement( 'div' );
				newDiv.id = 'unfinished-container';
				clone.id = 'unfinished-elem';
				clone.classList.add( 'focus-glow' );
				newDiv.append( clone );
				document.body.appendChild( newDiv );
				setTimeout( () => {
					const element = document.getElementById( 'unfinished-container' );
					if ( element ) {
						element.parentNode.removeChild( element );
					}
				}, 4000 );
			} else {
				elem.classList.add( 'focus-glow' );
				elem.scrollIntoView();
				setTimeout( () => {
					elem.classList.remove( 'focus-glow' );
				}, 4000 );
			}
		}
	}
}


// EXPORTS //

export default jumpToUnfinished;
