// MODULES //

import semver from 'semver';
import { net } from 'electron';
import { version as currentVersion } from './../../package.json';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle-editor:auto-updater' );

// MAIN //

function autoUpdater( callback ) {
	const request = net.request({
		method: 'GET',
		url: 'https://raw.githubusercontent.com/planeshifter/isle-editor/master/package.json'
	});
	request.on( 'response', response => {
		let body = '';
		response.on( 'data', ( chunk ) => {
			body += chunk;
		});
		request.on( 'error', error => callback( error ) );
		response.on( 'end', () => {
			let json = JSON.parse( body );
			const newVersion = json.version;
			debug( 'Newest version is '+newVersion );
			if ( semver.gt( newVersion, currentVersion ) ) {
				return callback( null, newVersion );
			}
		});
	});
	request.end();
}


// EXPORTS //

export default autoUpdater;
