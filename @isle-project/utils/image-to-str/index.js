// MODULES //

import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:img-to-str' );


// MAIN //

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
