'use strict';

// MODULES //

const { join } = require( 'path' );
const contains = require( '@stdlib/assert/contains' );
const replace = require( '@stdlib/string/replace' );
const ENV = require( '@stdlib/process/env' );
const fs = require( 'fs' );


// VARIABLES //

const RE_VERSION = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/g;
const RE_DLL_FILE = /(\.js|\.js\.LICENSE\.txt)$/;
const SEMVER = [ 'major', 'minor', 'patch' ];
let newVersion;
let oldVersion;
let type = ENV.VERSION;
if ( !contains( SEMVER, type ) ) {
	throw new Error( '`VERSION` environment variable must be set to either `major`, `minor`, or `patch`. Value: '+type );
}


// MAIN //

// Increment package versions:
const pkgPath = join( __dirname, '..', 'packages', 'components', 'package.json' );
const pkg = require( pkgPath );

pkg.version = replace( pkg.version, RE_VERSION, ( match, p1, p2, p3 ) => {
	oldVersion = replace( match, RE_VERSION, '$1.$2.$3' );
	if ( type === 'major' ) {
		newVersion = `${Number( p1 ) + 1}.${p2}.${p3}`;
	}
	else if ( type === 'minor' ) {
		newVersion = `${p1}.${Number( p2 ) + 1}.${p3}`;
	} else {
		newVersion = `${p1}.${p2}.${Number( p3 ) + 1}`;
	}
	return newVersion;
});
fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, '\t' ) );

if ( type === 'major' || type === 'minor' || type === 'patch' ) {
	const configPath = join( __dirname, '..', 'webpack.config.components.js' );
	const config = fs.readFileSync( configPath, 'utf8' );

	console.log( `Replacing ${oldVersion} with ${newVersion} in webpack configuration...` );
	let out = replace( config, oldVersion, newVersion );
	fs.writeFileSync( configPath, out );

	console.log( `Replacing ${oldVersion} with ${newVersion} in index.html...` );
	const htmlPath = join( __dirname, '..', 'app', 'bundler', 'index.html' );
	const html = fs.readFileSync( htmlPath, 'utf8' );

	out = replace( html, `components@${oldVersion}`, `components@${newVersion}` );
	fs.writeFileSync( htmlPath, out );
}

// Delete current DLL files:
fs.readdir( join( __dirname, '..', 'packages', 'components', 'dist' ), ( error, files ) => {
	if ( error ) {
		throw error;
	}
	files.filter( name => RE_DLL_FILE.test( name ) ).forEach( x => {
		fs.unlink( join( __dirname, '..', 'packages', 'components', 'dist', x ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});
});
