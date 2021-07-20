// MAIN //

/**
 * Copies a HTML string to the clipboard.
 *
 * @param {string} html - string to copy to the clipboard
 * @returns {void}
 */
function html2clipboard( html ) {
	const container = document.createElement( 'div' );
	container.innerHTML = html;
	container.style.position = 'fixed';
	container.style.opacity = 0;
	container.style.pointerEvents = 'none';

	document.body.appendChild( container );
	window.getSelection().removeAllRanges();

	const range = document.createRange();
	range.selectNode( container );
	window.getSelection().addRange( range );
	document.execCommand( 'copy' );

	document.body.removeChild( container );
}


// EXPORTS //

export default html2clipboard;
