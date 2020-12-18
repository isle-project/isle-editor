// MODULES //

import axios from 'axios';
import electronStore from 'store/electron.js';


// MAIN //

/**
* Uploads a gist.
*
* @param {Object} files - object with keys representing file names and values being objects with `content` property of their contents
* @returns {Object} POST request result
*/
async function uploadGist( files ) {
	const accessToken = electronStore.get( 'githubAccessToken' );
	const res = await axios.post( 'https://api.github.com/gists', {
		files
	}, {
		headers: {
			'Authorization': `token ${accessToken}` // eslint-disable-line i18next/no-literal-string
		}
	});
	return res;
}


// EXPORTS //

export default uploadGist;
