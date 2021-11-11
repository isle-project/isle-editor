/* eslint-disable i18next/no-literal-string, no-console */

// MODULES //

const { appendFileSync, copyFileSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } = require( 'fs' );
const { copy, removeSync } = require( 'fs-extra' );
const { basename, dirname, extname, resolve, join } = require( 'path' );
const webpack = require( 'webpack' );
const { ESBuildMinifyPlugin } = require( 'esbuild-loader' );
const esbuild = require( 'esbuild' );
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { WebpackManifestPlugin } = require( 'webpack-manifest-plugin' );
const WorkboxWebpackPlugin = require( 'workbox-webpack-plugin' );
const WebpackCdnPlugin = require( './../../@isle-project/webpack-cdn-plugin' );
const contains = require( '@stdlib/assert/contains' );
const isURI = require( '@stdlib/assert/is-uri' );
const isObject = require( '@stdlib/assert/is-object' );
const hasOwnProp = require( '@stdlib/assert/has-own-property' );
const replace = require( '@stdlib/string/replace' );
const startsWith = require( '@stdlib/string/starts-with' );
const max = require( '@stdlib/math/base/special/max' );
const objectKeys = require( '@stdlib/utils/keys' );
const isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
const markdownToHTML = require( './../utils/markdown-to-html' );
const transformToPresentation = require( './../utils/transform-to-presentation' );
const REQUIRES = require( './requires.json' );
const COMPONENTS_MANIFEST = require( './../../@isle-project/dll/components-manifest.json' );
const LOCALES_MANIFEST = require( './../../@isle-project/dll/locales-manifest.json' );
const SESSION_MANIFEST = require( './../../@isle-project/dll/session-manifest.json' );
const MANIFEST_TEMPLATE = require( './manifest.json' );


// VARIABLES //

const EXTERNALS = {};
const AVAILABLE_COMPONENTS = objectKeys( REQUIRES );
const { CDN_MODULES } = WebpackCdnPlugin;
for ( let i = 0; i < CDN_MODULES.length; i++ ) {
	const p = CDN_MODULES[ i ];
	EXTERNALS[ p.name ] = p.var || p.name;
}
const RE_PREAMBLE = /^---([\S\s]*?)---/;
if ( process ) {
	process.on( 'uncaughtException', ( err ) => {
		const msg = 'Caught exception: '+err.message;
		if ( process.send ) {
			process.send( msg );
		} else {
			console.log( msg ); // eslint-disable-line no-console
		}
	});
}
const START_TIME = new Date();
const BROWSER_TARGETS = [
	'es2015'
];


// FUNCTIONS //

const logMsg = ( msg ) => {
	msg += ' (elapsed: '+(new Date()-START_TIME)+'ms)';
	if ( process.send ) {
		process.send( msg );
	} else {
		console.log( msg ); // eslint-disable-line no-console
	}
};

function logError( err ) {
	logMsg( 'Encountered an error: '+err.message );
}

const makeOutputDir = ( outputDir ) => {
	mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = join( outputDir, 'index.isle' );
	writeFileSync( islePath, code );
};

const loadSyncRequires = ( libs, filePath ) => {
	let str = '';
	let dir = filePath ? dirname( filePath ) : '';
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = libs[ key ];
				if ( isURI( encodeURI( lib ) ) ) {
					continue;
				}
				if ( isAbsolutePath( lib ) || /\.(\/|\\)/.test( lib ) ) {
					lib = join( dir, libs[ key ]);
					if ( process.platform === 'win32' ) {
						lib = replace( lib, '\\', '\\\\' );
					}
				}
				str += `import ${key} from '${lib}';\n`;
				str += `global[ '${key}' ] = ${key};\n`;
			}
		}
	}
	return str;
};

const prepareAsyncRequires = ( libs ) => {
	const asyncOps = {
		resources: [],
		keys: []
	};
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = encodeURI( libs[ key ] );
				if ( isURI( lib ) ) {
					asyncOps.resources.push( lib );
					asyncOps.keys.push( key );
				}
			}
		}
	}
	return asyncOps;
};

function replaceImplicitGlobals( lessonContent, asyncKeys ) {
	for ( let i = 0; i < asyncKeys.length; i++ ) {
		lessonContent = replace( lessonContent, '{'+asyncKeys[ i ]+'}', '{global.'+asyncKeys[ i ]+'}' );
	}
	return lessonContent;
}

const getMainImports = () => `
// POLYFILLS //

import 'raf/polyfill';
import 'react-app-polyfill/ie11';


// MODULES //

import React, { Component } from 'react';
import { json, csv } from 'd3';
import { render } from 'react-dom';
import { extname } from 'path';
import url from 'url';
import * as serviceWorker from 'bundler/service_worker.js';
import { UpdateNotification } from 'bundler/service_worker.js';
import Lesson from '@isle-project/components/internal/lesson';
import ErrorBoundary from '@isle-project/components/internal/error-boundary';
import Provider from '@isle-project/components/internal/provider';
import factor from '@isle-project/utils/factor-variable';
import date from '@isle-project/utils/date';
import obsToVar from '@isle-project/utils/obs-to-var';
import 'bundler/loading.css';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => {
		const pkg = REQUIRES[ elem ];
		return `import ${elem} from '${pkg}';`;
	});
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent, className, loaderTimeout = 2500, offlineAccess = false ) => `
global.session = new Session( preamble );

const asyncOps = [];
const extensions = [];
if ( asyncRequires ) {
	for ( let i = 0; i < asyncRequires.resources.length; i++ ) {
		const lib = asyncRequires.resources[ i ];
		const ext = extname( url.parse( lib ).pathname );
		extensions[ i ] = ext;
		if ( ext === '.json' ) {
			asyncOps[ i ] = json( lib );
		}
		else if ( ext === '.csv' ) {
			asyncOps[ i ] = csv( lib );
		}
	}
}

class LessonWrapper extends Component {
	constructor() {
		super();
		const initialState = preamble.state || {};
		this.state = {
			isLoading: true,
			...initialState
		};
		global.lesson = this;
	}

	async componentDidMount() {
		const res = await Promise.all( asyncOps );
		for ( let i = 0; i < res.length; i++ ) {
			let v = res[ i ];
			if ( extensions[ i ] === '.csv' ) {
				v = obsToVar( v );
			}
			global[ asyncRequires.keys[ i ] ] = v;
		}
		this.setState({
			isLoading: false
		});
	}

	componentDidUpdate() {
		if ( !this.state.isLoading ) {
			const loader = document.getElementById( 'loading' );
			if ( loader ) {
				setTimeout(function onFadeOut() {
					loader.style.animation = 'anim-fade-out 0.5s forwards';
				}, ${max( loaderTimeout - 750, 0 )});
				setTimeout(function onRemove() {
					if ( loader && loader.parentElement ) {
						loader.parentElement.removeChild( loader );
					}
					document.body.style[ 'overflow-y' ] = 'auto';
				}, ${loaderTimeout} );
			}
		}
		${offlineAccess ? 'serviceWorker.register();' : 'serviceWorker.unregister();'};
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	renderLesson() {
		return (
			<ErrorBoundary>
				<Lesson
					className="${className}"
				>
					${lessonContent}
					<UpdateNotification />
				</Lesson>
			</ErrorBoundary>
		);
	}

	render() {
		if ( this.state.isLoading ) {
			return <Lesson className="${className}" ></Lesson>;
		}
		return this.renderLesson();
	}
}

document.body.style[ 'overflow-y' ] = 'hidden';

const link = document.createElement( 'link' );
link.href = './css/custom.css';
link.rel = 'stylesheet';
document.head.appendChild( link );

render(
	<Provider session={session} >
		<LessonWrapper />
	</Provider>,
	document.getElementById( 'App' )
);`;

/**
* Generates a list of components used in the lesson.
*
* @param {string} code - lesson code
* @returns {Array} array of used components
*/
const getComponentList = ( code ) => {
	const ret = [];
	let needVictoryTheme = false;
	for ( let i = 0; i < AVAILABLE_COMPONENTS.length; i++ ) {
		const regexp = new RegExp( `<${AVAILABLE_COMPONENTS[ i ]}[^>]*>`, 'g' );
		if ( regexp.test( code ) === true ) {
			ret.push( AVAILABLE_COMPONENTS[ i ] );
			if ( startsWith( AVAILABLE_COMPONENTS[ i ], 'Victory' ) ) {
				needVictoryTheme = true;
			}
		}
	}
	// Components that will always be required:
	if ( needVictoryTheme ) {
		ret.push( 'VictoryTheme' );
	}
	return ret;
};

/**
* Generate contents of index.js file of lesson.
*
* @param {string} lessonContent - ISLE lesson file
* @param {Array} components - array of component names
* @param {Object} meta - lesson meta object
* @param {string} basePath - file path of ISLE editor
* @param {string} filePath - file path of source file
* @param {boolean} offlineAccess - whether to include a service worker for offline access
* @returns {string} index.js content
*/
function generateIndexJS( lessonContent, components, meta, basePath, filePath, offlineAccess ) {
	let res = getMainImports();
	let asyncOps;
	if ( meta.require ) {
		res += loadSyncRequires( meta.require, filePath );
		asyncOps = prepareAsyncRequires( meta.require );
		res += `const asyncRequires = ${JSON.stringify( asyncOps )};`;
		for ( let i = 0; i < asyncOps.keys.length; i++ ) {
			res += `global.${asyncOps.keys[ i ]} = null;\n`;
		}
	} else {
		res += 'const asyncRequires = null';
	}
	let className = 'Lesson';
	if ( contains( components, 'Deck' ) ) {
		className = 'Presentation';
	}
	res += '\n';
	res += `const preamble = ${JSON.stringify( meta )};`;

	res += 'import Session from \'@isle-project/session\';';

	res += `global.COMPONENT_LIST = ${JSON.stringify( components )};`;
	res += getComponents( components );
	if ( asyncOps ) {
		lessonContent = replaceImplicitGlobals( lessonContent, asyncOps.keys );
	}
	res += getLessonComponent( lessonContent, className, meta.splashScreenTimeout, offlineAccess );
	return res;
}

/**
* Writes index.js file to disk and bundles ISLE lesson.
*
* @param {Object} options - options object
* @param {string} options.filePath - file path of source file
* @param {string} options.outputPath - file path of output directory
* @param {string} options.basePath - file path of ISLE editor
* @param {string} options.content - ISLE lesson file content
* @param {string} options.meta - ISLE lesson meta information
* @param {string} options.outputDir - name of output directory
* @param {string} options.yamlStr - lesson meta data in YAML format
* @param {boolean} options.minify - boolean indicating whether code should be minified
* @param {boolean} options.loadFromCDN - boolean indicating whether resources should be loaded from CDN
* @param {boolean} options.writeStats - boolean indicating whether bundle stats should be written to `stats.json` file
* @param {boolean} options.offlineAccess - whether to allow offline access by exporting the lesson as a progressive web application with service workers
*/
function bundleLesson( options ) {
	if ( !options ) {
		return logMsg( 'Missing options.' );
	}
	let {
		filePath,
		outputPath,
		basePath,
		content,
		meta,
		outputDir,
		minify,
		loadFromCDN,
		writeStats,
		offlineAccess
	} = options;
	logMsg( `Writing index.js file for ${filePath} to ${outputPath}...` );

	const appDir = join( outputPath, outputDir );
	const indexPath = join( appDir, 'index.js' );
	const statsFile = join( appDir, 'stats.json' );
	makeOutputDir( appDir );
	generateISLE( appDir, content );

	logMsg( `Resolve packages relative to ${basePath}...` );
	let fileDir;
	let resourceDirectory;
	let fileName;
	const modulePaths = [
		resolve( basePath, './node_modules' )
	];
	if ( filePath ) {
		fileDir = dirname( filePath );
		fileName = basename( filePath, extname( filePath ) );
		resourceDirectory = join( fileDir, `${fileName}-resources` );
		modulePaths.push( resolve( join( resourceDirectory, 'node_modules' ) ) );
	}
	let plugins = [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: meta.title,
			preventScaleGestures: meta.preventScaleGestures,
			template: resolve( basePath, './app/bundler/index.html' ),
			templateParameters: {
				meta,
				loadFromCDN
			},
			inject: 'body',
			minify: true
		}),
		new WebpackCdnPlugin({
			prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:alias/:version/:path',
			modules: CDN_MODULES
		}),
		new WebpackManifestPlugin({
			fileName: 'asset-manifest.json'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.ProgressPlugin({
			activeModules: true,
			entries: true,
			handler( percentage, message, ...args ) {
				logMsg( `${percentage}: ${message} ${args.join( ', ' )}` );
			},
			profile: true
		}),
		new SpeedMeasurePlugin({
			outputTarget: logMsg
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: false,
			exclude: [/\.map$/, /asset-manifest\.json$/]
		})
	];
	if ( loadFromCDN ) {
		plugins = [
			new webpack.DllReferencePlugin({
				manifest: LOCALES_MANIFEST
			}),
			new webpack.DllReferencePlugin({
				manifest: SESSION_MANIFEST
			}),
			new webpack.DllReferencePlugin({
				manifest: COMPONENTS_MANIFEST
			})
		].concat( plugins );
	}
	const config = {
		cache: {
			type: 'memory'
		},
		context: resolve( basePath ),
		resolve: {
			modules: modulePaths,
			alias: {
				'@isle-project': resolve(
					basePath,
					'./@isle-project'
				),
				'bundler': resolve(
					basePath,
					'./app/bundler'
				),
				'css': resolve(
					basePath,
					'./app/css'
				),
				'csv-stringify': resolve(
					basePath,
					'./node_modules/csv-stringify/lib/browser/index.js'
				)
			},
			fallback: {
				'path': resolve(
					basePath,
					'./node_modules/path-browserify'
				),
				'stream': resolve(
					basePath,
					'./node_modules/stream-browserify'
				),
				'domain': false
			},
			extensions: ['.js', '.json' ],
			symlinks: false,
			unsafeCache: true,
			mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [
						/node_modules/,
						/fonts\.js$/
					],
					loader: 'esbuild-loader',
					options: {
						loader: 'jsx',
						target: BROWSER_TARGETS,
						implementation: esbuild,
						legalComments: 'none'
					}
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'esbuild-loader',
							options: {
								loader: 'css',
								minify: true
							}
						}
					]
				},
				{
					test: /\.svg$/i,
					use: {
						loader: 'svg-react-loader'
					}
				},
				{
					test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
					type: 'asset/resource'
				}
			],
			noParse: /node_modules\/json-schema\/lib\/validate\.js/
		},
		optimization: {
			minimize: minify,
			splitChunks: {
				cacheGroups: {
					code: {
						test: /\.js$/,
						chunks: 'all'
					}
				}
			},
			minimizer: [
				new ESBuildMinifyPlugin({
					target: BROWSER_TARGETS,
					implementation: esbuild,
					minify: false,
					minifyIdentifiers: false,
					minifyWhitespace: true,
					minifySyntax: true,
					legalComments: 'none'
				})
			]
		},
		externals: EXTERNALS,
		plugins,
		profile: true
	};

	// Remove YAML preamble...
	content = content.replace( RE_PREAMBLE, '' );

	// Replace comments:
	content = content.replace( /<!--([\S\s]*?)-->/g, '' );

	// Replace Markdown by HTML...
	const isPresentation = meta.type === 'presentation' || contains( content, '<Slide ' );
	content = markdownToHTML( content );
	if ( isPresentation ) {
		content = transformToPresentation( content, meta );
	}
	if ( !meta.removeStatusBar ) {
		content = '<StatusBar className="fixedPos" />\n' + content;
	}
	if ( !meta.removeToolbar ) {
		content = '<Toolbar />\n' + content;
	}
	const usedComponents = getComponentList( content );

	logMsg( 'Create JS file...' );
	let str = generateIndexJS( content, usedComponents, meta, basePath, filePath, offlineAccess );

	// Copy CSS file:
	mkdirSync( join( appDir, 'css' ) );
	writeFileSync( join( appDir, 'css', 'custom.css' ), '' );
	if ( meta.css ) {
		if ( isURI( encodeURI( meta.css ) ) ) {
			str += `const cssLink = document.createElement( 'link' );
			cssLink.href = '${meta.css}';
			cssLink.rel = 'stylesheet';
			document.head.appendChild( cssLink );
			`;
		} else {
			// Append custom CSS file to `custom.css` file:
			let fpath = meta.css;
			if ( filePath && !isAbsolutePath( meta.css ) ) {
				fpath = join( fileDir, meta.css );
			}
			const css = readFileSync( fpath ).toString();
			appendFileSync( join( appDir, 'css', 'custom.css' ), css );
		}
	}
	if ( meta.style ) {
		appendFileSync( join( appDir, 'css', 'custom.css' ), meta.style );
	}

	writeFileSync( indexPath, str );

	// Copy asset directories:
	const resourceDirName = `${fileName}-resources`;
	mkdirSync( join( appDir, `${fileName}-resources` ) );
	if ( filePath ) {
		copy( join( resourceDirectory, 'img' ), join( appDir, resourceDirName, 'img' ) ).catch( logError );
		copy( join( resourceDirectory, 'pdf' ), join( appDir, resourceDirName, 'pdf' ) ).catch( logError );
		copy( join( resourceDirectory, 'video' ), join( appDir, resourceDirName, 'video' ) ).catch( logError );
	}

	let imgPath = join( basePath, 'app', 'img' );
	copyFileSync( join( imgPath, 'favicon.ico' ), join( appDir, 'favicon.ico' ) );
	copyFileSync( join( imgPath, 'favicon.png' ), join( appDir, 'favicon.png' ) );
	copyFileSync( join( imgPath, 'apple-touch-icon.png' ), join( appDir, 'apple-touch-icon.png' ) );

	const manifest = { ...MANIFEST_TEMPLATE };
	manifest[ 'short_name' ] = meta.title;
	manifest[ 'name' ] = meta.title;
	manifest[ 'description' ] = meta.description;
	writeFileSync( join( appDir, 'manifest.json' ), JSON.stringify( manifest, null, '\t' ) );

	config.entry = indexPath;
	config.output = {
		path: appDir,
		publicPath: './',
		filename: minify ? './js/[name].bundle.min.js' : './js/[name].bundle.js',
		assetModuleFilename: 'static/media/[name][ext][query]',
		pathinfo: false
	};
	let compiler;
	try {
		logMsg( 'Creating webpack configuration...' );
		compiler = webpack( config );
		logMsg( 'Webpack configuration created...' );
	} catch ( err ) {
		return logMsg( 'Encountered an error while creating configuration object: '+err.message );
	}
	compiler.run( ( err, stats ) => {
		unlinkSync( indexPath );
		if ( err ) {
			logMsg( 'Encountered an error during bundling: ' + err.message );
			removeSync( appDir );
			return logMsg(err.message );
		}
		logMsg( 'Bundling finished without errors...' );
		if (
			stats.compilation &&
			stats.compilation.errors &&
			stats.compilation.errors.length > 0
		) {
			let errMsg = '';
			stats.compilation.errors.forEach( v => {
				errMsg += v;
				errMsg += '\n';
			});
			err = new Error( errMsg );
			removeSync( appDir );
			return logMsg( err.message );
		}
		if ( writeStats ) {
			logMsg( 'Write statistics to file...' );
			const statsJSON = stats.toJson();
			writeFileSync( statsFile, JSON.stringify( statsJSON ) );
		}
		compiler.close( ( closeErr ) => {
			if ( closeErr ) {
				logMsg('Encountered an error while closing the compiler: ' + closeErr.message );
			}
		});
		return logMsg( 'success' );
	});
}


// MAIN //

const argv = process.argv;
const settingsPath = argv[ 2 ];
logMsg( 'Read settings from '+settingsPath );
const settings = JSON.parse( readFileSync( settingsPath, 'utf-8' ).toString() );

logMsg( 'Start bundling lesson...' );
bundleLesson( settings );
