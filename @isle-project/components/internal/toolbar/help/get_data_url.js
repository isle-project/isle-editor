// MAIN //

/**
 * Returns a data URL for the specified image.
 *
 * @param {Object} img - image object
 * @returns {string} data URL
 */
function getDataUrl( img ) {
	const canvas = document.createElement( 'canvas' );
	const ctx = canvas.getContext( '2d' );
	canvas.width = img.width * 3;
	canvas.height = img.height * 3;
	ctx.drawImage( img, 0, 0, img.width * 3, img.height * 3 );
	return canvas.toDataURL( 'image/jpeg' );
}


// EXPORTS //

export default getDataUrl;
