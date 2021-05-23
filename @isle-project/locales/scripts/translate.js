/* eslint-disable no-console */

// MODULES //

const axios = require( 'axios' );
const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );
const qs = require( 'qs' );
const readJSON = require( '@stdlib/fs/read-json' );
const objectKeys = require( '@stdlib/utils/keys' );


// CONSTANTS //

const LANGUAGE_TARGETS = [ 'de', 'es', 'fr', 'it', 'ja', 'nl', 'pl', 'pt', 'ru', 'zh' ];
const MAX_TRANSLATION_CALLS = 5;
const DEEPL_SERVER = 'https://api.deepl.com/v2/translate';
const TOPLEVEL_DIR = path.resolve( __dirname, '..', '..', '..' );


// MAIN //

const options = {
	cwd: TOPLEVEL_DIR
};
glob( '@isle-project/locales/**/en.json', options, function onFiles( err, files ) {
	console.log( files );
	for ( let i = 0; i < files.length; i++ ) {
		const file = path.resolve( TOPLEVEL_DIR, files[ i ] );
		const reference = readJSON.sync( file );
		const dir = path.dirname( file );
		const refKeys = objectKeys( reference );
		refKeys.sort( ( a, b ) => {
			return a.localeCompare(b);
		});
		const sortedReference = {};
		for ( let i = 0; i < refKeys.length; i++ ) {
			const key = refKeys[ i ];
			sortedReference[ key ] = reference[ key ];
		}
		fs.writeFileSync( file, JSON.stringify( sortedReference, null, '\t' ).concat( '\n' ) );

		for ( let j = 0; j < LANGUAGE_TARGETS.length; j++ ) {
			const lng = LANGUAGE_TARGETS[ j ];
			const filePath = path.join( dir, `${lng}.json` );
			if ( !fs.existsSync( filePath ) ) {
				fs.writeFileSync( filePath, JSON.stringify({}) );
			}
			const targetJSON = readJSON.sync( filePath );
			const promises = [];
			const promiseKeys = [];
			for ( let k = 0; k < refKeys.length; k++ ) {
				const key = refKeys[ k ];
				if ( !targetJSON[ key ] ) {
					const textToTranslate = reference[ key ];
					if ( textToTranslate ) {
						console.log( 'Translate `'+textToTranslate+'` to '+lng );
						if ( promises.length < MAX_TRANSLATION_CALLS ) {
							promiseKeys.push( key );
							promises.push( axios.post( DEEPL_SERVER, qs.stringify({
								auth_key: process.env.DEEPL_KEY, // eslint-disable-line no-process-env
								source_lang: 'EN',
								text: textToTranslate,
								target_lang: lng === 'pt' ? 'PT-BR' : lng.toUpperCase()
							}) ) );
						}
					}
				}
			}
			Promise.all( promises )
				.then( results => {
					const translations = results.map( x => x.data.translations[ 0 ].text );
					for ( let i = 0; i < promiseKeys.length; i++ ) {
						const key = promiseKeys[ i ];
						targetJSON[ key ] = translations[ i ];
					}
					refKeys.sort( ( a, b ) => {
						return a.localeCompare(b);
					});
					const out = {};
					for ( let i = 0; i < refKeys.length; i++ ) {
						const key = refKeys[ i ];
						out[ key ] = targetJSON[ key ];
					}
					fs.writeFileSync( filePath, JSON.stringify( out, null, '\t' ).concat( '\n' ) );
				})
				.catch( err => {
					console.log( err );
				});
		}
	}
});

console.log( 'Finished.' );
