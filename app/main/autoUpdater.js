// MODULES //

import semver from 'semver';
import request from 'request';
import { version as currentVersion } from './../../package.json';


// MAIN //

function autoUpdater( callback ) {
	const link = 'https://raw.githubusercontent.com/planeshifter/isle-editor/master/package.json';
	request.get( link, ( err, res, body ) => {
		if ( err ) {
			return callback( err );
		}
		try {
			const newVersion = JSON.parse( body ).version;
			if ( semver.gt( newVersion, currentVersion ) ) {
				return callback( null, newVersion );
			}
		} catch ( error ) {
			return callback( error );
		}
	});
}


// EXPORTS //

export default autoUpdater;
