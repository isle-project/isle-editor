'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const pkg = require( path.join( __dirname, '..', 'package.json' ) );


// VARIABLES //

const RE_VERSION = /[0-9]{1}\.[0-9]{1,2}\.[0-9]{1,3}/g;


// MAIN //

const readmePath = path.join( __dirname, '..', 'README.md' );
const readme = fs.readFileSync( readmePath, 'utf8' );

let out = readme.replace( RE_VERSION, pkg.version );
fs.writeFileSync( readmePath, out );

const installGuidePath = path.join( __dirname, '..', 'docusaurus', 'website', 'docs', 'overview', 'install.md' );
const installGuide = fs.readFileSync( installGuidePath, 'utf8' );
out = installGuide.replace( RE_VERSION, pkg.version );
fs.writeFileSync( installGuidePath, out );

const splashscreenPath = path.join( __dirname, '..', 'app', 'splashscreen.html' );
const splashscreen = fs.readFileSync( splashscreenPath, 'utf8' );
out = splashscreen.replace( RE_VERSION, pkg.version );
fs.writeFileSync( splashscreenPath, out );

