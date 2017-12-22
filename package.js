/* eslint strict: 0, no-shadow: 0, no-unused-vars: 0, no-console: 0 */
'use strict';

// MODULES //

require( 'babel-polyfill' );
const modclean = require( 'modclean' );
const packager = require( 'electron-packager' );
const webpack = require( 'webpack' );
const path = require( 'path' );
const spawn = require( 'child_process' ).spawn;
const exec = require( 'child_process' ).exec;
const argv = require( 'minimist' )( process.argv.slice( 2 ) );
const del = require( 'del' );
const os = require( 'os' );
const electronCfg = require( './webpack.config.electron.js' );
const cfg = require( './webpack.config.production.js' );


// VARIABLES //

const pkg = require( './package.json' );
const deps = Object.keys( pkg.dependencies );
const devDeps = Object.keys( pkg.devDependencies );

const appName = argv.name || argv.n || pkg.productName;
const shouldUseAsar = argv.asar || argv.a || false;
const shouldBuildAll = argv.all || false;


const DEFAULT_OPTS = {
	dir: './',
	name: appName,
	asar: shouldUseAsar,
	ignore: [
		'^/docs($|/)',
		'^/reports($|/)',
		'^/test($|/)',
		'^/tools($|/)',
		'^/release($|/)',
		'^/main.development.js'
	].concat( devDeps.map( name => `/node_modules/${name}($|/)` ) )
		.concat([
			'/node_modules/css-loader($|/)',
			'/node_modules/electron-debug($|/)',
			'/node_modules/electron-window-state($|/)',
			'/node_modules/file-loader($|/)',
			'/node_modules/fs-plus($|/)',
			'/node_modules/js-yaml($|/)',
			'/node_modules/markdown-it($|/)',
			'/node_modules/raw-loader($|/)',
			'/node_modules/react-redux($|/)',
			'/node_modules/react-redux-thunk($|/)',
			'/node_modules/react-router($|/)',
			'/node_modules/react-router-redux($|/)',
			'/node_modules/react-split-pane($|/)',
			'/node_modules/react-tools($|/)'
		])
};

const icon = argv.icon || argv.i || 'app/app';

if ( icon ) {
	DEFAULT_OPTS.icon = icon;
}

const version = argv.version || argv.v;

if ( version ) {
	DEFAULT_OPTS.electronVersion = version;
	startPack();
} else {
	// Use the same version as the currently-installed electron...
	exec( 'npm list electron --dev', ( err, stdout ) => {
		if ( err ) {
			DEFAULT_OPTS.electronVersion = '1.0.2';
		} else {
			DEFAULT_OPTS.electronVersion = stdout.split( 'electron@' )[ 1 ].substr( 0, 5 );
		}
		startPack();
	});
}


function build( cfg ) {
	return new Promise( ( resolve, reject ) => {
		webpack( cfg, ( err, stats ) => {
			if ( err ) return reject( err );
			resolve( stats );
		});
	});
}

function startPack() {
	console.log( 'start pack...' );
	build( electronCfg )
		.then( () => build( cfg ) )
		.then( () => del( 'release' ) )
		.then( paths => {
			if ( shouldBuildAll ) {
				// Build for all platforms...
				const archs = [ 'ia32', 'x64' ];
				const platforms = [ 'linux', 'win32', 'darwin' ];

				platforms.forEach( plat => {
					archs.forEach( arch => {
						pack( plat, arch, afterPack( plat, arch ) );
					});
				});
			} else {
				// Build for current platform only...
				pack( os.platform(), os.arch(), afterPack( os.platform(), os.arch() ) );
			}
		})
		.catch( err => {
			console.error( err );
		});
}

function pack( plat, arch, cb ) {
	// There is no darwin ia32 electron
	if ( plat === 'darwin' && arch === 'ia32' ) {
		return;
	}

	const iconObj = {
		icon: DEFAULT_OPTS.icon + ( () => {
			let extension = '.png';
			if ( plat === 'darwin' ) {
				extension = '.icns';
			} else if ( plat === 'win32' ) {
				extension = '.ico';
			}
			return extension;
		})()
	};

	const opts = Object.assign({}, DEFAULT_OPTS, iconObj, {
		platform: plat,
		arch,
		prune: true,
		appVersion: pkg.version || DEFAULT_OPTS.electronVersion,
		appCopyright: 'Copyright © 2016 Philipp Burckhardt. All rights reserved.',
		win32metadata: {
			CompanyName: 'Carnegie Mellon University',
			FileDescription: 'Interactive Statistics Learning Environment (ISLE) Editor',
			OriginalFilename: 'ISLE Editor.exe',
			ProductName: 'ISLE Editor',
			InternalName: 'ISLE Editor'
		},
		out: `release/${plat}-${arch}`
	});

	packager( opts, cb );
}

function afterPack( plat, arch ) {
	return function log( err, filepath ) {
		if ( err ) {
			return console.error( err );
		}
		console.log( `${plat}-${arch} finished!` );
		cleanModules();
	}; // end FUNCTION log()

	function cleanModules() {
		const nodeModulesPath = plat !== 'darwin' ?
			`release/${plat}-${arch}/ISLE Editor-${plat}-${arch}/resources/app/node_modules` :
			`release/${plat}-${arch}/ISLE Editor-${plat}-${arch}/ISLE Editor.app/Contents/Resources/app/node_modules`;

		const mc = new modclean.ModClean({
			cwd: path.join(
				process.cwd(),
				nodeModulesPath
			)
		});
		mc.clean( function callback( err, results ) {
			if ( err ) {
				return console.error( err );
			}
			console.log( `ModCleaner Deleted Files Total (${plat}-${arch}):`, results.length );
			zip();
		});
	} // end FUNCTION cleanModules()

	function zip() {
		const zipper = spawn( 'zip', [ '-r', `ISLE Editor-${plat}-${arch}.zip`, `ISLE Editor-${plat}-${arch}` ], {
			cwd: path.join(
				process.cwd(),
				`release/${plat}-${arch}/`
			)
		});
		zipper.stdout.on( 'data', ( data ) => {
			console.log( `stdout: ${data}` );
		});
		zipper.stderr.on( 'data', ( data ) => {
			console.log( `stderr: ${data}` );
		});
		zipper.on( 'close', ( code ) => {
			console.log( `zip exited with code ${code} (${plat}-${arch})` );
		});
	} // end FUNCTION zip()
} // end FUNCTION afterPack()
