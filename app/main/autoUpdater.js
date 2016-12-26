// MODULES //

import semver from 'semver';
import request from 'request';
import { version as currentVersion } from './../../package.json';


// MAIN //

function autoUpdater( callback ) {
	const link = 'https://raw.githubusercontent.com/planeshifter/isle-editor/master/package.json';
	request.get( link, ( err, res, body ) => {
		if ( err ) {
			callback( err );
		} else {
			try {
				const newVersion = JSON.parse( body ).version;
				if ( semver.gt( newVersion, currentVersion ) ) {
					callback( null, newVersion );
				}
			} catch ( error ) {
				callback( error );
			}
		}
	});
} // end FUNCTION autoUpdater()


// EXPORTS //

export default autoUpdater;
