/* eslint-disable no-console */

// MODULES //

const axios = require( 'axios' );
const glob = require( 'glob' );
const fs = require( 'fs' );
const path = require( 'path' );
const qs = require( 'qs' );
const replace = require( '@stdlib/string/replace' );
const readJSON = require( '@stdlib/fs/read-json' );
const objectKeys = require( '@stdlib/utils/keys' );
const ENV = require( '@stdlib/process/env' );


// VARIABLES //

const LANGUAGE_TARGETS = [ 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh' ];
const MAX_TRANSLATION_CALLS = 5;
const DEEPL_SERVER = 'https://api-free.deepl.com/v2/translate';
const TOPLEVEL_DIR = path.resolve( __dirname, '..', '..', '..' );
const RE_HANDLEBAR_EXPRESSION = /\{\{([^}]+)\}\}/g;
const RE_BACKTICK_EXPRESSION = /`([^`]+?)`/g;
const RE_XML_HANDLEBAR_GROUPS = /<x>([^<]+)<\/x>/g;
const RE_XML_BACKTICK_GROUPS = /`([^<]+)<\/y>/g;


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
					let textToTranslate = reference[ key ];
					if ( textToTranslate ) {
						textToTranslate = replace( textToTranslate, RE_HANDLEBAR_EXPRESSION, '<x>$1</x>' );
						textToTranslate = replace( textToTranslate, RE_BACKTICK_EXPRESSION, '`$1`' );
						console.log( 'Translate `'+textToTranslate+'` to '+lng );
						if ( promises.length < MAX_TRANSLATION_CALLS ) {
							promiseKeys.push( key );
							promises.push( axios.post( DEEPL_SERVER, qs.stringify({
								auth_key: ENV.DEEPL_KEY,
								source_lang: 'EN',
								text: textToTranslate,
								tag_handling: 'xml',
								ignore_tags: 'x,y',
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
						let text = replace( translations[ i ], RE_XML_HANDLEBAR_GROUPS, '{{$1}}' );
						text = replace( text, RE_XML_BACKTICK_GROUPS, '`$1`' );
						targetJSON[ key ] = text;
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
