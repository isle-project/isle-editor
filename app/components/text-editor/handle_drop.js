// MODULES //

import logger from 'debug';
import { toggleCursorParking, resetCursorParking } from './config/cursor_parking';
import { uploadImageFiles } from './config/image_upload_placeholder_plugin.js';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

const handleDrop = ( view, event ) => {
	debug( 'Handle drop event...' );
	const coords = {
		x: event.clientX,
		y: event.clientY
	};
	const dropPos = view.posAtCoords({
		left: coords.x,
		top: coords.y
	});
	const pos = dropPos ? dropPos.pos : null;
	const { dataTransfer } = event;
	if ( dataTransfer && dataTransfer.files && dataTransfer.files.length > 0 ) {
		event.preventDefault();
		const { files } = dataTransfer;
		const filesList = Array.from( files );
		if ( uploadImageFiles( view, filesList, coords ) ) {
			resetCursorParking( view );
		}
	} else {
		toggleCursorParking( view, pos );
	}
};


// EXPORTS //

export default handleDrop;
