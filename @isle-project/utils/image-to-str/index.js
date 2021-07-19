// MODULES //

import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:img-to-str' );


// MAIN //

/**
 * Returns a string representation of an image.
 *
 * @param {string} image - image data
 * @param {number} width - image width
 * @param {number} height - image height
 * @param {string} [format='png'] - image format
 * @returns {string} base64 encoded string representation of an image
 */
function imgToStr( img, width, height, format = 'png' ) {
	debug( `Generate base64 encoded ${format} string of ${width} x ${height} image...` );
	const canvas = document.createElement( 'canvas' );
	const context = canvas.getContext( '2d' );
	canvas.width = width;
	canvas.height = height;
	context.clearRect( 0, 0, width, height );
	context.drawImage( img, 0, 0, width, height );
	return canvas.toDataURL( 'image/'+format );
}


// EXPORTS //

export default imgToStr;
