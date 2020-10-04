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
	const res = await axios.get( `https://api.github.com/gists/gist_id=${id}`,
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
