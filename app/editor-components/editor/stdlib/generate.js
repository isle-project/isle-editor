/* Script file for generating `namespace.json` file. */

'use strict';

// MODULES //

const { join, resolve } = require( 'path' );
const { writeFileSync } = require( 'fs' );
const namespace = require( '@stdlib/namespace' );
const startsWith = require( '@stdlib/string/starts-with' );
const replace = require( '@stdlib/string/replace' );
const uppercase = require( '@stdlib/string/uppercase' );
const readJSON = require( '@stdlib/fs/read-json' ).sync;


// VARIABLES //

const NAMESPACE = namespace();
const STDLIB_DIR = resolve( './node_modules/@stdlib/stdlib/lib/node_modules' );
const RE_DOT =/\.([a-z])/g;
const RE_DOT_UPPER =/([a-z]+)\.([A-Z])/g;


// FUNCTIONS //

function toCamelCase( str ) {
	let out = replace( str, RE_DOT, ( match, p1 ) => {
		return uppercase( p1 );
	});

	// Take care of distribution constructors:
	out = replace( out, RE_DOT_UPPER, ( match, p1, p2 ) => {
		return p2;
	});
	return out;
}


// MAIN //

for ( let i = 0; i < NAMESPACE.length; i++ ) {
	const entry = NAMESPACE[ i ];
	const fpath = join( STDLIB_DIR, entry.path, 'package.json' );
	const pkgJSON = readJSON( fpath );

	if ( startsWith( entry.alias, 'base.' ) ) {
		entry.alias = entry.alias.substring( 5 );
	}
	if ( startsWith( entry.alias, 'dists.' ) ) {
		entry.alias = entry.alias.substring( 6 );
	}
	entry.alias = toCamelCase( entry.alias );

	// Attach package description:
	entry.description = pkgJSON.description;

	// Remove related functions for now as not needed:
	delete entry.related;

	// Remove value:
	delete entry.value;
}

writeFileSync( join( __dirname, './namespace.json' ), JSON.stringify( NAMESPACE ) );
