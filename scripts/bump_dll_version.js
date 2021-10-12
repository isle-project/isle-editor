'use strict';

// MODULES //

const { join } = require( 'path' );
const contains = require( '@stdlib/assert/contains' );
const replace = require( '@stdlib/string/replace' );
const startsWith = require( '@stdlib/string/starts-with' );
const objectKeys = require( '@stdlib/utils/keys' );
const ENV = require( '@stdlib/process/env' );
const fs = require( 'fs' );
const mainPkgJson = require( './../package.json' );


// VARIABLES //

const RE_VERSION = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/g;
const RE_DLL_FILE = /(\.js|\.js\.LICENSE\.txt|\.css)$/;
const SEMVER = [ 'major', 'minor', 'patch' ];
const FOLDERS = [ 'components', 'constants', 'dll', 'locales', 'session', 'utils', 'webpack-cdn-plugin', 'workers' ];
let newVersion;
let oldVersion;
let type = ENV.VERSION;
if ( !contains( SEMVER, type ) ) {
	throw new Error( '`VERSION` environment variable must be set to either `major`, `minor`, or `patch`. Value: '+type );
}


// MAIN //

// Increment package versions:

FOLDERS.forEach( folder => {
	const pkgPath = join( __dirname, '..', '@isle-project', folder, 'package.json' );
	const pkg = require( pkgPath );
	pkg.version = replace( pkg.version, RE_VERSION, ( match, p1, p2, p3 ) => {
		oldVersion = replace( match, RE_VERSION, '$1.$2.$3' );
		if ( type === 'major' ) {
			newVersion = `${Number( p1 ) + 1}.${0}.${0}`;
		}
		else if ( type === 'minor' ) {
			newVersion = `${p1}.${Number( p2 ) + 1}.${0}`;
		} else {
			newVersion = `${p1}.${p2}.${Number( p3 ) + 1}`;
		}
		return newVersion;
	});
	let keys = objectKeys( pkg.peerDependencies );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		if ( startsWith( key, '@isle-project' ) ) {
			pkg.peerDependencies[ key ] = newVersion;
		}
	}
	keys = objectKeys( pkg.dependencies );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		pkg.dependencies[ key ] = ( mainPkgJson.dependencies[ key ] || mainPkgJson.devDependencies[ key ] );
	}
	fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, '\t' ).concat( '\n' ) );
});

if ( type === 'major' || type === 'minor' || type === 'patch' ) {
	const configPath = join( __dirname, '..', 'webpack.config.dll.js' );
	const config = fs.readFileSync( configPath, 'utf8' );

	console.log( `Replacing ${oldVersion} with ${newVersion} in webpack configuration...` );
	let out = replace( config, oldVersion, newVersion );
	fs.writeFileSync( configPath, out );

	console.log( `Replacing ${oldVersion} with ${newVersion} in index.html...` );
	const htmlPath = join( __dirname, '..', 'app', 'bundler', 'index.html' );
	const html = fs.readFileSync( htmlPath, 'utf8' );
	out = replace( html, `dll@${oldVersion}`, `dll@${newVersion}` );
	fs.writeFileSync( htmlPath, out );

	console.log( `Replacing ${oldVersion} with ${newVersion} in @isle-project/locales/index.js...` );
	const jsPath = join( __dirname, '..', '@isle-project', 'locales', 'index.js' );
	const js = fs.readFileSync( jsPath, 'utf8' );

	out = replace( js, `locales@${oldVersion}`, `locales@${newVersion}` );
	fs.writeFileSync( jsPath, out );
}

// Delete current DLL files:
fs.readdir( join( __dirname, '..', '@isle-project', 'dll' ), ( error, files ) => {
	if ( error ) {
		throw error;
	}
	files.filter( name => RE_DLL_FILE.test( name ) ).forEach( x => {
		fs.unlink( join( __dirname, '..', '@isle-project', 'dll', x ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});
});
