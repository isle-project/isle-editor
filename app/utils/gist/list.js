// MODULES //

import axios from 'axios';
import mainStore from 'store/main.js';


// MAIN //

/**
* List user `gists`.
*
* @returns {Object} GET request result
*/
async function listGists( page = 0 ) {
	const accessToken = mainStore.get( 'githubAccessToken' );
	const res = await axios.get( 'https://api.github.com/gists', {
		per_page: 100,
		page: page
	},
	{
		headers: {
			'Accept': 'application/vnd.github.v3+json',
			'Authorization': `token ${accessToken}`
		}
	});
	return res;
}


// EXPORTS //

export default listGists;
