// MODULES //

import axios from 'axios';
import electronStore from 'store/electron.js';


// VARIABLES //

const ISLE_SERVER = electronStore.get( 'server' );
const ISLE_TOKEN = electronStore.get( 'token' );


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
			'Authorization': `JWT ${ISLE_TOKEN}` // eslint-disable-line i18next/no-literal-string
		}
	});
	return `${ISLE_SERVER}/${res.data.filename}`;
}


// EXPORTS //

export default uploadBugImage;
