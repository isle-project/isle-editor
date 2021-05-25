'use strict';

// MODULES //

const { execSync } = require( 'child_process' );
const { join, resolve, dirname } = require( 'path' );
const removePunctuation = require( '@stdlib/string/remove-punctuation' );
const removeFirst = require( '@stdlib/string/remove-first' );
const removeLast = require( '@stdlib/string/remove-last' );
const readJSON = require( '@stdlib/fs/read-json' ).sync;


// VARIABLES //

const TOPLEVEL_DIR = resolve( __dirname, '..', '..', '..' );


// MAIN //

let command = 'grep -roP "(withTranslation|useTranslation)\\( ?\'\\K[^\']*(?=\' ?\\))" @isle-project/* ';
const namespaceTable = {};
execSync( command, {
	cwd: TOPLEVEL_DIR
})
	.toString()
	.split( '\n' )
	.map( x => x.split( ':' ) )
	.forEach( x => {
		namespaceTable[ dirname( x[ 0 ] ) ] = x[ 1 ];
	});

const translations = {};
command = 'grep -roP "\\"[^\\"]+EN\\" \\*/ \'[^\']+\'" @isle-project/locales/index.js';
execSync( command, {
	cwd: TOPLEVEL_DIR
})
	.toString()
	.split( '\n' )
	.map( x => x.split( ' */ ' ) )
	.forEach( x => {
		if ( x[ 0 ] && x[ 1 ] ) {
			translations[ removePunctuation( x[ 0 ] ) ] = readJSON( join( __dirname, '..', removeFirst( removeLast( x[ 1 ] ) ) ) );
		}
	});

command = 'grep -roP "(props.| |\\t|{)t\\( ?\'\\K[^\']*(?=\' ?\\))" @isle-project/* ';
execSync( command, {
	cwd: TOPLEVEL_DIR
})
	.toString()
	.split( '\n' )
	.map( x => x.split( ':' ) )
	.map( x => ({
		file: x[ 0 ],
		ns: namespaceTable[ dirname( x[ 0 ] ) ],
		key: x[ x.length-1 ]
	}))
	.forEach( x => {
		if ( translations[ x.ns+'EN' ] &&!translations[ x.ns+'EN' ][ x.key ] ) {
			console.log( 'Missing translation: '+ x.key+ ' (ns: '+x.ns+')' );
		}
	});

console.log( 'Finished.' );
