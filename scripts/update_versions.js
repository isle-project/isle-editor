'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const pkg = require( path.join( __dirname, '..', 'package.json' ) );

const readmeName = path.join( __dirname, '..', 'README.md' );
const readme = fs.readFileSync( readmeName, 'utf8' );

const out = readme.replace( /[0-9]{1}\.[0-9]{1,2}\.[0-9]{1,3}/g, pkg.version );

fs.writeFileSync( readmeName, out );
