// MODULES //

import { findDOMNode } from 'react-dom';
import startsWith from '@stdlib/string/starts-with';
import i18next from 'i18next';


// MAIN //

function closeHintButtons( elem ) {
	if ( !elem ) {
		return;
	}
	const node = findDOMNode( elem );
	if ( !node ) {
		return;
	}
	const hintButtons = node.getElementsByClassName( 'hint-button' );
	for ( let i = 0; i < hintButtons.length; i++ ) {
		if ( startsWith( hintButtons[ i ].innerText, i18next.t('components:close') ) ) {
			hintButtons[ i ].click();
		}
	}
}


// EXPORTS //

export default closeHintButtons;
