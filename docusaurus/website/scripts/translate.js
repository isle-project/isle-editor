/* eslint-disable no-console */

// MODULES //

const axios = require( 'axios' );
const glob = require( 'glob' );
const fs = require( 'fs-extra' );
const qs = require( 'qs' );
const readJSON = require( '@stdlib/fs/read-json' );
const objectKeys = require( '@stdlib/utils/keys' );
const replace = require( '@stdlib/string/replace' );


// CONSTANTS //

const LANGUAGE_TARGETS = [ 'de', 'es', 'fr', 'it', 'ja', 'nl', 'pl', 'pt', 'ru', 'zh' ];
const deepl = {
	'server': 'https://api.deepl.com/v2/translate',
	'auth_key': 'fa2bffeb-2b6f-0eba-9a6a-c8984589c3fd'
};
const MAX_TRANSLATION_CALLS = 5;


// MAIN //

const options = {};
glob( '**/en/**/*.json', options, function onFiles( err, files ) {
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
		fs.writeFileSync( files[ i ], JSON.stringify( sortedReference, null, '\t' ).concat( '\n' ) );
		for ( let j = 0; j < LANGUAGE_TARGETS.length; j++ ) {
			const lng = LANGUAGE_TARGETS[ j ];
			const filePath = replace( files[ i ], '/en/', `/${lng}/` );
			if ( !fs.existsSync( filePath ) ) {
				fs.outputFileSync( filePath, JSON.stringify({}) );
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
							promises.push( axios.post( deepl.server, qs.stringify({
								auth_key: deepl.auth_key,
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
					fs.writeFileSync( filePath, JSON.stringify( out, null, '\t' ).concat( '\n' ) );
				})
				.catch( err => {
					console.log( err );
				});
		}
	}
});
