// MODULES //

import axios from 'axios';
import electronStore from 'store/electron.js';


// MAIN //

/**
* Get a specified Gist.
*
* @param {string} id - gist identifier
* @returns {Object} GET request result
*/
async function getGist( id ) {
	const accessToken = electronStore.get( 'githubAccessToken' );
	const url = `https://api.github.com/gists/${id}`;
	const res = await axios.get( url,
	{
		headers: {
			'Accept': 'application/vnd.github.v3+json',
			'Authorization': `token ${accessToken}`
		}
	});
	return res;
}


// EXPORTS //

export default getGist;
