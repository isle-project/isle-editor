// MODULES //

import { dirname, join, extname } from 'path';
import { json, csv } from 'd3';
import { readFileSync } from 'fs';
import logger from 'debug';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import isObject from '@stdlib/assert/is-object';
import isError from '@stdlib/assert/is-error';
import isURI from '@stdlib/assert/is-uri';
import replace from '@stdlib/string/replace';
import readJSON from '@stdlib/fs/read-json';
import obsToVar from 'utils/obs-to-var';


// VARIABLES //

const debug = logger( 'isle-editor:preview' );


// MAIN //


async function loadRequires( libs, filePath ) {
	/* eslint-disable no-eval */
	debug( 'Should require files or modules...' );
	let dir = dirname( filePath );
	const asyncOps = [];
	const asyncKeys = [];
	const asyncExtensions = [];
	debug( 'Directory: '+dir );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.(\/|\\)/.test( lib ) ) {
					lib = join( dir, libs[ key ]);
					if ( process.platform === 'win32' ) {
						lib = replace( lib, '\\', '\\\\' );
					}
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				const ext = extname( lib );
				if ( isURI( lib) ) {
					debug( 'Load file from online location...' );
					asyncExtensions.push( ext );
					if ( ext === '.json' ) {
						asyncOps.push( json( lib ) );
						asyncKeys.push( key );
						global[ key ] = {};
					}
					else if ( ext === '.csv' ) {
						asyncOps.push( csv( lib ) );
						asyncKeys.push( key );
						global[ key ] = {};
					}
				} else {
					debug( 'Load file from disk...' );
					if ( ext === '.svg' ) {
						debug( 'Read SVG from disk: '+lib );
						let content = readFileSync( lib ).toString( 'base64' );
						eval( `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';` );
					}
					else if ( ext === '.jpg' || ext === '.png' || ext === '.jpeg' ) {
						debug( 'Read image from disk: '+lib );
						let buffer = readFileSync( lib );
						eval( `global[ '${key}' ] = 'data:image/jpeg;base64,${buffer.toString( 'base64' )}'` );
					}
					else if ( ext === '.json' ) {
						const json = readJSON.sync( lib );
						if ( isError( json ) ) {
							throw new Error(`\n Error encountered while reading ${lib}: ` + json.message);
						} else {
							global[ key ] = json;
						}
					}
					else {
						debug( `Load '${lib}' library...` );
						eval( `global[ '${key}' ] = require( '${lib}' );` );
					}
				}
			}
		}
		try {
			const res = await Promise.all( asyncOps );
			for ( let i = 0; i < res.length; i++ ) {
				let v = res[ i ];
				if ( asyncExtensions[ i ] === '.csv' ) {
					v = obsToVar( v );
				}
				global[ asyncKeys[ i ] ] = v;
			}
		} catch ( err ) {
			return err;
		}
	}
	return null;
	/* eslint-enable no-eval */
}


// EXPORTS //

export default loadRequires;
