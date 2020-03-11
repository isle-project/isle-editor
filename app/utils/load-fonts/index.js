// MODULES //

import pdfMake from 'pdfmake/build/pdfmake';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:utils' );


// FUNCTIONS //

function loadFonts() {
	import( /* webpackChunkName: "fonts" */ '../../constants/fonts.js' )
		.then( fonts => {
			debug( 'Successfully loaded fonts...' );
			pdfMake.vfs = fonts.default;
		})
		.catch( err => {
			debug( 'Encountered an error while loading fonts: '+err.message );
		});
}


// EXPORTS //

export default loadFonts;
