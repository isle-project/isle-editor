// MODULES //

import { findDOMNode } from 'react-dom';
import startsWith from '@stdlib/string/starts-with';
import { i18n } from '@isle-project/locales';


// MAIN //

/**
 * Closes all the hint buttons inside the given element.
 *
 * @param {HTMLElement} el - element to search for hint buttons
 * @returns {void}
 */
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
		if ( startsWith( hintButtons[ i ].innerText, i18n.t('components:close') ) ) {
			hintButtons[ i ].click();
		}
	}
}


// EXPORTS //

export default closeHintButtons;
