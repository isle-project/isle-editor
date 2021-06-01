/* eslint-disable no-console */

// MODULES //

const axios = require( 'axios' );
const glob = require( 'glob' );
const path = require( 'path' );
const { mkdir } = require( 'fs/promises' );
const { existsSync, writeFileSync } = require( 'fs' );
const qs = require( 'qs' );
const readJSON = require( '@stdlib/fs/read-json' );
const objectKeys = require( '@stdlib/utils/keys' );
const replace = require( '@stdlib/string/replace' );


// CONSTANTS //

const LANGUAGE_TARGETS = [ 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh' ];
const DEEPL_SERVER = 'https://api.deepl.com/v2/translate';
const MAX_TRANSLATION_CALLS = 5;


// MAIN //

const options = {};
glob( '**/en/**/*.json', options, async function onFiles( err, files ) {
	console.log( files );

	for ( let i = 0; i < files.length; i++ ) {
		const reference = readJSON.sync( files[ i ] );
		const refKeys = objectKeys( reference );
		refKeys.sort( ( a, b ) => {
			return a.localeCompare(b);
		});
		const sortedReference = {};
		for ( let i = 0; i < refKeys.length; i++ ) {
			const key = refKeys[ i ];
			sortedReference[ key ] = reference[ key ];
		}
		writeFileSync( files[ i ], JSON.stringify( sortedReference, null, '\t' ).concat( '\n' ) );
		for ( let j = 0; j < LANGUAGE_TARGETS.length; j++ ) {
			const lng = LANGUAGE_TARGETS[ j ];
			const filePath = replace( files[ i ], '/en/', `/${lng}/` );
			if ( !existsSync( filePath ) ) {
				const targetDir = path.dirname( filePath );
				await mkdir( targetDir, { recursive: true }); // eslint-disable-line no-await-in-loop
				writeFileSync( filePath, JSON.stringify( {} ) );
			}
			const targetJSON = readJSON.sync( filePath );
			const promises = [];
			const promiseKeys = [];
			for ( let k = 0; k < refKeys.length; k++ ) {
				const key = refKeys[ k ];
				if ( !targetJSON[ key ] ) {
					const textToTranslate = reference[ key ].message;
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
						targetJSON[ key ] = {
							message: translations[ i ],
							description: reference[ key ].description
						};
					}
					refKeys.sort( ( a, b ) => {
						return a.localeCompare(b);
					});
					const out = {};
					for ( let i = 0; i < refKeys.length; i++ ) {
						const key = refKeys[ i ];
						out[ key ] = targetJSON[ key ];
					}
					writeFileSync( filePath, JSON.stringify( out, null, '\t' ).concat( '\n' ) );
				})
				.catch( err => {
					console.log( err );
				});
		}
	}
});
