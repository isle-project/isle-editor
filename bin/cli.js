#!/usr/bin/env node
'use strict';

// MODULES //

const fs = require( 'fs' );
const path = require( 'path' );
const spawn = require( 'child_process' ).spawn;
const cwd = require( '@stdlib/utils/cwd' );
const electron = require( 'electron' );
const parseArgs = require( 'minimist' );
const pkg = require( './../package.json' );
const opts = require( './opts.json' );


// FUNCTIONS //

/**
* Performs initialization tasks.
*
* @private
* @example
* init();
*/
function init() {
	// Set the process title to allow the process to be more easily identified:
	process.title = pkg.name;
	process.stdout.on( 'error', process.exit );
} // end FUNCTION init()

/**
* Prints usage information.
*
* @private
* @example
* help();
* // => '...'
*/
function help() {
	var fpath = path.join( __dirname, 'usage.txt' );
	fs.createReadStream( fpath )
		.pipe( process.stdout )
		.on( 'close', onClose );

	function onClose() {
		process.exit( 0 );
	}
} // end FUNCTION help()

/**
* Prints the package version.
*
* @private
* @example
* version();
* // => '#.#.#'
*/
function version() {
	var msg = pkg.version.toString()+'\n';
	process.stdout.write( msg, 'utf8' );
	process.exit( 0 );
} // end FUNCTION version()

/**
* Callback invoked upon encountering an error while running a command.
*
* @private
* @param {Error} error - error object
* @throws {Error} unexpected error
*/
function onError( error ) {
	throw error;
} // end FUNCTION onError()


// VARIABLES //

const appArgs = [ path.join( __dirname, '..' ) ];
let args;


// MAIN //

init();

// Parse command-line arguments:
args = parseArgs( process.argv.slice( 2 ), opts );

if ( args.help ) {
	return help();
}
if ( args.version ) {
	return version();
}

if ( args._[ 0 ]) {
	// Get absolute file path:
	let fpath = path.resolve( cwd(), args._[ 0 ]);

	// Add path to application arguments:
	appArgs.push( fpath );
}

// Run application:
spawn( electron, appArgs, {
	stdio: 'inherit'
});
