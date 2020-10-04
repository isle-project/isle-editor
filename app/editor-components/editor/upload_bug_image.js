// MODULES //

import axios from 'axios';
import rendererStore from 'store/electron.js';


// VARIABLES //

const ISLE_SERVER = rendererStore.get( 'server' );
const ISLE_TOKEN = rendererStore.get( 'token' );


// MAIN //

async function uploadBugImage( blob ) {
	const file = new File([ blob ], 'data.png', {
		type: 'image/png'
	});
	const formData = new FormData();
	formData.append( 'file', file );
	formData.append( 'namespaceName', 'demonstrations' );
	const res = await axios.post( ISLE_SERVER+'/upload_file', formData, {
		headers: {
			'Authorization': `JWT ${ISLE_TOKEN}`
		}
	});
	return `${ISLE_SERVER}/${res.data.filename}`;
}


// EXPORTS //

export default uploadBugImage;


