'use strict';

// MODULES //

const { join } = require( 'path' );
const replace = require( '@stdlib/string/replace' );
const fs = require( 'fs' );


// VARIABLES //

const RE_VERSION = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/g;
const RE_DLL_FILE = /(\.js|\.js\.LICENSE\.txt)$/;
let newVersion;
let oldVersion;


// MAIN //

// Increment package versions:
const pkgPath = join( __dirname, '..', 'dll', 'components', 'package.json' );
const pkg = require( pkgPath );

pkg.version = replace( pkg.version, RE_VERSION, ( match, p1, p2, p3 ) => {
	oldVersion = replace( match, RE_VERSION, '$1.$2' );
	newVersion = `${p1}.${Number( p2 ) + 1}`;
	return newVersion;
});
fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, '\t' ) );

const configPath = join( __dirname, '..', 'webpack.config.components.js' );
const config = fs.readFileSync( configPath, 'utf8' );

let out = replace( config, oldVersion, newVersion );
fs.writeFileSync( configPath, out );

const htmlPath = join( __dirname, '..', 'app', 'bundler', 'index.html' );
const html = fs.readFileSync( htmlPath, 'utf8' );

out = replace( html, oldVersion, newVersion );
fs.writeFileSync( htmlPath, out );

// Delete current DLL files:
fs.readdir( join( __dirname, '..', 'dll', 'components' ), ( error, files ) => {
	if ( error ) {
		throw error;
	}
	files.filter( name => RE_DLL_FILE.test( name ) ).forEach( x => {
		fs.unlink( join( __dirname, '..', 'dll', 'components', x ), ( err ) => {
			if ( err ) {
				console.error( err );
			}
		});
	});
});
