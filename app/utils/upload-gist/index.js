// MODULES //

import axios from 'axios';
import mainStore from 'store/main.js';


// MAIN //

/**
* Uploads a gist.
*
* @param {Object} files - object with keys representing file names and values being objects with `content` property of their contents
* @returns {Object} POST request result
*/
async function uploadGist( files ) {
	const accessToken = mainStore.get( 'githubAccessToken' );
	const res = await axios.post( 'https://api.github.com/gists', {
		files
	}, {
		headers: {
			'Authorization': `token ${accessToken}`
		}
	});
	return res;
}


// EXPORTS //

export default uploadGist;
