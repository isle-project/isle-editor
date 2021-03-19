// MODULES //

import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';


// MAIN //

async function installExtensions() {
	try {
		const res = await installExtension( REACT_DEVELOPER_TOOLS, {
			loadExtensionOptions: {
				allowFileAccess: true
			}
		});
		console.log( `Added Extension:  ${res}` ); // eslint-disable-line no-console
		return res;
	} catch ( err ) {
		console.log( 'An error occurred: ', err ); // eslint-disable-line no-console
		return null;
	}
}


// EXPORTS //

export default installExtensions;
