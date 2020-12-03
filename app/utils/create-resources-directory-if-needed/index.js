// MODULES //

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import exists from '@stdlib/fs/exists';


// MAIN //

function createResourcesDirectoryIfNeeded( dir, fileName ) {
	if ( !exists.sync( dir ) ) {
		mkdirSync( dir );
		mkdirSync( join( dir, 'pdf' ) );
		mkdirSync( join( dir, 'img' ) );
		mkdirSync( join( dir, 'video' ) );
		mkdirSync( join( dir, 'include' ) );
		const manifestPath = join( dir, 'manifest.json' );
		const manifest = {
			resources: {}
		};
		writeFileSync( manifestPath, JSON.stringify( manifest, null, 2 ) );
		const pkgJSON = join( dir, 'package.json' );
		if ( !exists.sync( pkgJSON ) ) {
			writeFileSync( pkgJSON, JSON.stringify({
				name: fileName
			}, null, 2 ) );
		}
		return true;
	}
	return false;
}


// EXPORTS //

export default createResourcesDirectoryIfNeeded;
