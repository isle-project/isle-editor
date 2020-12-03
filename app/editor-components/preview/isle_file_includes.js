// MODULES //

import { basename, dirname, resolve, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import isURI from '@stdlib/assert/is-uri';
import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';
import readJSON from '@stdlib/fs/read-json';
import hasOwnProp from '@stdlib/assert/has-own-property';
import createResourcesDirectoryIfNeeded from '@isle-project/utils/create-resources-directory-if-needed';
import mergePreambles from '@isle-project/utils/merge-preambles';


// VARIABLES //

const RE_INCLUDES = /<!-- #include ["']([^'"]+)['"] -->/g;
const RE_RELATIVE_FILE = /\.\.?\/[^\n"?:*<>|]+\.[a-z0-9]+/gi;


// FUNCTIONS //

async function matchPreamble( str, preamble ) {
	const main = await import( 'js-yaml' );
	const yaml = main.default;
	let childPreamble = str.match( /^(?:\s*)---([\S\s]*?)---/ );
	if ( childPreamble ) {
		// Extract the capture group:
		childPreamble = childPreamble[ 1 ];
		childPreamble = replace( childPreamble, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
		childPreamble = yaml.load( childPreamble );
		preamble = mergePreambles( preamble, childPreamble );
	}
}


// MAIN //

async function isleFileIncludes( code, preamble, filePath ) {
	let out = {};
	out[ 'preamble' ] = preamble;
	if ( !filePath ) {
		return out;
	}
	let match = RE_INCLUDES.exec( code );
	if ( !match ) {
		return out;
	}
	const destDir = dirname( filePath );
	const fileName = basename( filePath, '.isle' );
	const isleDir = join( destDir, `${fileName}-resources` );
	createResourcesDirectoryIfNeeded( isleDir, fileName );
	const manifestPath = join( isleDir, 'manifest.json' );
	let manifest = readJSON.sync( manifestPath );
	if ( manifest instanceof Error ) {
		manifest = {};
	}
	if ( !hasOwnProp( manifest, 'include' ) ) {
		manifest.include = {};
	}
	const asyncOps = [];
	const asyncMatches = [];
	const asyncDirs = [];
	const d3 = await import( 'd3' );
	while ( match ) {
		let str;
		const path = match[ 1 ];
		if ( isURI( path ) ) {
			if ( !endsWith( path, '.isle' ) ) {
				path += '/index.isle';
			}
			asyncMatches.push( match[ 0 ] );
			asyncDirs.push( dirname( path ) );
			asyncOps.push( d3.text( path ) );
		} else {
			str = readFileSync( resolve( dirname( filePath ), path ), 'utf8' );
			matchPreamble( str, preamble );
			out[ match[ 0 ] ] = str;
			manifest.include[ basename( match[ 0 ] ) ] = {
				lastAccessed: new Date().toLocaleString()
			};
		}
		match = RE_INCLUDES.exec( code );
	}
	const res = await Promise.all( asyncOps );
	for ( let i = 0; i < res.length; i++ ) {
		let str = res[ i ];
		manifest.include[ basename( asyncDirs[ i ] ) ] = {
			lastAccessed: new Date().toLocaleString()
		};
		matchPreamble( str, preamble );

		str = replace( str, RE_RELATIVE_FILE, ( match ) => {
			return join( asyncDirs[ i ], match );
		});

		out[ asyncMatches[ i ] ] = str;
	}
	writeFileSync( manifestPath, JSON.stringify( manifest, null, 2 ) );
	return out;
}


// EXPORTS //

export default isleFileIncludes;
