// MODULES //

import semver from 'semver';
import { version as currentVersion } from './../../package.json';


// MAIN //

function autoUpdater( callback ) {
	const link = 'https://raw.githubusercontent.com/planeshifter/isle-editor/master/package.json';
	fetch( link )
		.then( res => res.json() )
		.then( body => {
			const newVersion = body.version;
			if ( semver.gt( newVersion, currentVersion ) ) {
				return callback( null, newVersion );
			}
		})
		.catch( error => callback( error ) );
}


// EXPORTS //

export default autoUpdater;
