'use strict';

// MODULES //

const path = require( 'path' );
const { spawn } = require( 'child_process' );
const fs = require( 'fs' );
const replace = require( '@stdlib/string/replace' );


// VARIABLES //

const RE_NODE_MODULE = /^[\s\S]*?\/node_modules\/([\s\S]+$)/;
const RE_EOL = /\r?\n/;
const pkgPath = path.join( __dirname, '..', 'package.json' );
const pkg = require( pkgPath );
const IGNORE_LIST = [
	'!node_modules/function-bind/**/*'
];


// MAIN //

const extraResources = [
	'@isle-project/**/*',
	'app/css/*',
	'app/constants/*',
	'app/img/*',
	'app/bundler/*',
	'app/utils/**/*',
	'node_modules/**/*',
	'!node_modules/**/README.md',
	'!node_modules/**/readme.md',
	'!node_modules/**/LICENSE',
	'!node_modules/**/LICENSE.md',
	'!node_modules/**/license',
	'!node_modules/**/CHANGELOG.md',
	'!node_modules/**/changelog.md',
	'!node_modules/**/test/*',
	'!node_modules/**/tests/*',
	'!node_modules/**/example/*',
	'!node_modules/**/examples/*',
	'!node_modules/**/coverage/*',
	'!node_modules/**/.github/*',
	'!node_modules/**/{.editorconfig,.travis,.mocharc,nycrc,.git,.hg,.svn,CVS,RCS,SCCS,__pycache__,.DS_Store,thumbs.db,.gitignore,.gitkeep,.gitattributes,.npmignore,.idea,.vs,.flowconfig,.jshintrc,.eslintrc,.circleci,.yarn-integrity,.yarn-metadata.json,yarn-error.log,yarn.lock,package-lock.json,npm-debug.log,appveyor.yml,.travis.yml,circle.yml,.nyc_output}',
	'!node_modules/@stdlib/**/img',
	'!node_modules/@stdlib/**/docs/repl.txt',
	'!node_modules/@stdlib/**/src',
	'!node_modules/@stdlib/**/include',
	'!node_modules/@stdlib/**/binding.gyp',
	'!node_modules/@stdlib/**/manifest.json',
	'!node_modules/@stdlib/**/include.gypi',
	'!node_modules/@stdlib/datasets/spam-assassin/*',
	'!node_modules/.cache/**/*',
	'!node_modules/@icons/**/*',
	'!node_modules/plotly.js/dist/**/*',
	'!node_modules/mapbox-gl/dist/**/*',
	'!@isle-project/components/dist/**/*',
	'!@isle-project/session/dist/*'
];
const DEV_DEPS = new Set();
const listDevDeps = spawn( 'npm', [ 'ls', '--only=dev', '--parseable', '--all' ] );

listDevDeps.stdout.on( 'data', ( data ) => {
	const lines = data.toString().split( RE_EOL );
	for ( let i = 1; i < lines.length - 1; i++ ) {
		DEV_DEPS.add( lines[ i ] );
	}
});

listDevDeps.stdout.on( 'close', ( code ) => {
	console.log( `npm ls --dev exited with code ${code}` );
	console.log( `The isle-editor has ${DEV_DEPS.size} development dependencies.` );

	const listProdDeps = spawn( 'npm', [ 'ls', '--only=prod', '--parseable', '-all' ]);

	listProdDeps.stdout.on( 'data', ( data ) => {
		const lines = data.toString().split( RE_EOL );
		for ( let i = 1; i < lines.length - 1; i++ ) {
			const val = lines[ i ];
			if ( DEV_DEPS.has( val ) ) {
				DEV_DEPS.delete( val );
			}
		}
	});

	listProdDeps.stdout.on( 'close', ( code ) => {
		console.log( `npm ls --prod exited with code ${code}` );
		console.log( `The isle-editor has ${DEV_DEPS.size} development dependencies that are not also used by production dependencies.` );

		DEV_DEPS.forEach( ( value ) => {
			const ignorePattern = replace( value, RE_NODE_MODULE, '!node_modules/$1/**/*' );
			if ( !IGNORE_LIST.includes( ignorePattern ) ) {
				extraResources.push( ignorePattern );
			}
		});

		console.log( extraResources );
		pkg.build.extraResources = extraResources;

		fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, 2 ).concat( '\n' ) );
	});
});
