/* eslint-disable i18next/no-literal-string */

// MODULES //

import { appendFileSync, copyFileSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { copy, removeSync } from 'fs-extra';
import { basename, dirname, extname, resolve, join } from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import MiniCssExtractPlugin, { loader as MiniCSSLoader } from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import WebpackCdnPlugin, { CDN_MODULES } from '@isle-project/webpack-cdn-plugin';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isURI from '@stdlib/assert/is-uri';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import max from '@stdlib/math/base/special/max';
import objectKeys from '@stdlib/utils/keys';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import markdownToHTML from 'utils/markdown-to-html';
import transformToPresentation from 'utils/transform-to-presentation';
import REQUIRES from './requires.json';
import COMPONENTS_MANIFEST from '@isle-project/dll/components-manifest.json';
import LOCALES_MANIFEST from '@isle-project/dll/locales-manifest.json';
import SESSION_MANIFEST from '@isle-project/dll/session-manifest.json';
import MANIFEST_TEMPLATE from './manifest.json';


// VARIABLES //

const debug = logger( 'bundler' );
const EXTERNALS = {};
const AVAILABLE_COMPONENTS = objectKeys( REQUIRES );
for ( let i = 0; i < CDN_MODULES.length; i++ ) {
	const p = CDN_MODULES[ i ];
	EXTERNALS[ p.name ] = p.var || p.name;
}
const RE_PREAMBLE = /^---([\S\s]*?)---/;


// FUNCTIONS //

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
import 'whatwg-fetch';


// MODULES //

import React, { Component } from 'react';
import { json, csv } from 'd3';
import { render } from 'react-dom';
import { extname } from 'path';
import url from 'url';
import * as serviceWorker from 'bundler/service_worker.js';
import { UpdateNotification } from 'bundler/service_worker.js';
import TextClustering from '@isle-project/components/internal/text-clustering';
import Lesson from '@isle-project/components/internal/lesson';
import ErrorBoundary from '@isle-project/components/internal/error-boundary';
import Provider from '@isle-project/components/provider';
import factor from '@isle-project/utils/factor-variable';
import obsToVar from '@isle-project/utils/obs-to-var';
import 'css/lesson.css';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => {
		const pkg = REQUIRES[ elem ];
		return `import ${elem} from '${pkg}';`;
	});
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent, className, loaderTimeout = 2500 ) => `
global.session = new Session( preamble );
global.TextClustering = TextClustering;

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
		serviceWorker.register();
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


// MAIN //

/**
* Generate contents of index.js file of lesson.
*
* @param {string} lessonContent - ISLE lesson file
* @param {Array} components - array of component names
* @param {Object} meta - lesson meta object
* @param {string} basePath - file path of ISLE editor
* @param {string} filePath - file path of source file
* @returns {string} index.js content
*/
function generateIndexJS( lessonContent, components, meta, basePath, filePath ) {
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
	res += getLessonComponent( lessonContent, className, meta.splashScreenTimeout );
	return res;
}

/**
* Write index.js file to disk
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
* @param {Function} clbk - callback function
*/
function writeIndexFile({
	filePath,
	outputPath,
	basePath,
	content,
	meta,
	outputDir,
	minify,
	loadFromCDN,
	writeStats
}, clbk ) {
	debug( `Writing index.js file for ${filePath} to ${outputPath}...` );

	const appDir = join( outputPath, outputDir );
	const indexPath = join( appDir, 'index.js' );
	const statsFile = join( appDir, 'stats.json' );
	makeOutputDir( appDir );
	generateISLE( appDir, content );

	debug( `Resolve packages relative to ${basePath}...` );
	let fileDir;
	let resourceDirectory;
	let fileName;
	const modulePaths = [
		resolve( basePath, './' ),
		resolve( basePath, './app/' ),
		resolve( basePath, './node_modules' )
	];
	if ( filePath ) {
		fileDir = dirname( filePath );
		fileName = basename( filePath, extname( filePath ) );
		resourceDirectory = join( fileDir, `${fileName}-resources` );
		modulePaths.push( resolve( join( resourceDirectory, 'node_modules' ) ) );
	}
	const plugins = [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: meta.title,
			preventScaleGestures: meta.preventScaleGestures,
			template: resolve( basePath, './app/bundler/index.html' ),
			templateParameters: {
				meta,
				loadFromCDN
			},
			minify: false
		}),
		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'allAssets',
			fileBlacklist: [ /\.map/, /\.js/ ]
		}),
		new WebpackCdnPlugin({
			prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:alias/:version/:path',
			modules: CDN_MODULES
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		}),
		new ManifestPlugin({
			fileName: 'asset-manifest.json'
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			clientsClaim: true,
			exclude: [/\.map$/, /asset-manifest\.json$/],
			importWorkboxFrom: 'cdn'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	];
	if ( loadFromCDN ) {
		plugins.push(
			new webpack.DllReferencePlugin({
				manifest: LOCALES_MANIFEST
			})
		);
		plugins.push(
			new webpack.DllReferencePlugin({
				manifest: COMPONENTS_MANIFEST
			})
		);
		plugins.push(
			new webpack.DllReferencePlugin({
				manifest: SESSION_MANIFEST
			})
		);
	}
	const config = {
		context: resolve( basePath ),
		resolve: {
			modules: modulePaths,
			alias: {
				'csv-parse': resolve(
					basePath,
					'./node_modules/csv-parse/lib/es5/index.js'
				),
				'csv-stringify': resolve(
					basePath,
					'./node_modules/csv-stringify/lib/es5/index.js'
				)
			},
			mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [
						/node_modules(?:\/|\\)(?!@iktakahiro(?:\/|\\)markdown-it-katex)/,
						/fonts\.js$/
					],
					loader: 'babel-loader',
					query: {
						plugins: [
							resolve( basePath, './node_modules/@babel/plugin-transform-react-constant-elements' ),
							resolve( basePath, './node_modules/@babel/plugin-transform-react-inline-elements' ),
							resolve( basePath, './node_modules/babel-plugin-transform-react-remove-prop-types' ),
							resolve( basePath, './node_modules/@babel/plugin-transform-react-jsx' ),
							resolve( basePath, './node_modules/@babel/plugin-proposal-class-properties' ),
							resolve( basePath, './node_modules/@babel/plugin-syntax-dynamic-import' ),
							[ resolve( basePath, './node_modules/@babel/plugin-transform-runtime' ), {
								'regenerator': true
							}]
						],
						presets: [
							[ resolve( basePath, './node_modules/@babel/preset-env' ), {
								targets: {
									ie: '11'
								},
								useBuiltIns: 'usage',
								corejs: 2
							}],
							resolve( basePath, './node_modules/@babel/preset-react' )
						],
						babelrc: false,
						cacheDirectory: true,
						overrides: [{
							test: [
								resolve( basePath, './node_modules/@iktakahiro/markdown-it-katex/**/*.js' )
							],
							presets: [
								[ resolve( basePath, './node_modules/@babel/preset-env' ), {
									modules: 'commonjs',
									targets: {
										ie: '11'
									}
								}]
							]
						}]
					}
				},
				{
					test: /(sum-series|is-typed-array|node_modules\/ml-)[\s\S]+?\.js$/,
					loader: 'babel-loader',
					query: {
						presets: [
							[ resolve( basePath, './node_modules/@babel/preset-env' ), {
								modules: 'commonjs',
								targets: {
									ie: '11'
								}
							}]
						]
					}
				},
				{
					test: /\.css$/,
					use: [
						MiniCSSLoader,
						'css-loader'
					]
				},
				{
					test: /\.worker\.js$/,
					exclude: /node_modules/, // do not touch the worker scripts of `pdf.js`
					use: {
						loader: 'worker-loader'
					}
				},
				{
					test: /\.svg$/i,
					use: {
						loader: 'svg-react-loader'
					}
				}
			],
			noParse: /node_modules\/json-schema\/lib\/validate\.js/
		},
		optimization: {
			minimize: minify,
			minimizer: [
				new OptimizeCSSAssetsPlugin({}),
				new TerserPlugin({
					extractComments: 'all',
					cache: true,
					parallel: true,
					terserOptions: {
						warnings: true,
						compress: {
							arrows: false,
							booleans: false,
							collapse_vars: false,
							comparisons: false,
							computed_props: false,
							hoist_funs: false,
							hoist_props: false,
							hoist_vars: false,
							if_return: false,
							inline: false,
							join_vars: false,
							keep_infinity: false,
							loops: false,
							negate_iife: false,
							properties: false,
							reduce_funcs: false,
							reduce_vars: false,
							sequences: false,
							side_effects: false,
							switches: false,
							top_retain: false,
							toplevel: false,
							typeofs: false,
							unused: false,
							conditionals: true,
							dead_code: true,
							evaluate: true
						},
						mangle: true
					}
				})
			],
			splitChunks: {
				cacheGroups: {
					code: {
						test: /\.js$/,
						chunks: 'all'
					}
				}
			}
		},
		node: {
			child_process: 'empty',
			dns: 'mock',
			fs: 'empty',
			net: 'mock',
			tls: 'mock'
		},
		externals: EXTERNALS,
		plugins
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
		let elements = '[';
		if ( meta.toolbar ) {
			meta.toolbar.forEach( ( x, i ) => {
				elements += `{name: '${x.name}', component: ${x.component}, icon: '${x.icon}' }`;
				if ( i < meta.toolbar.length - 1 ) {
					elements += ', ';
				}
			});
		}
		elements += ']';
		content = `<Toolbar elements={${elements}} />\n` + content;
	}
	const usedComponents = getComponentList( content );
	const str = generateIndexJS( content, usedComponents, meta, basePath, filePath );
	debug( `Create JS file: ${str}` );

	writeFileSync( indexPath, str );

	// Copy CSS file:
	mkdirSync( join( appDir, 'css' ) );
	copyFileSync( join( basePath, 'app', 'css', 'custom.css' ), join( appDir, 'css', 'custom.css' ) );
	if ( meta.css ) {
		// Append custom CSS file to `custom.css` file:
		let fpath = meta.css;
		if ( filePath && !isAbsolutePath( meta.css ) ) {
			fpath = join( fileDir, meta.css );
		}
		const css = readFileSync( fpath ).toString();
		appendFileSync( join( appDir, 'css', 'custom.css' ), css );
	}
	if ( meta.style ) {
		appendFileSync( join( appDir, 'css', 'custom.css' ), meta.style );
	}

	// Copy asset directories:
	const resourceDirName = `${fileName}-resources`;
	mkdirSync( join( appDir, `${fileName}-resources` ) );
	if ( filePath ) {
		copy( join( resourceDirectory, 'img' ), join( appDir, resourceDirName, 'img' ) ).catch( debug );
		copy( join( resourceDirectory, 'pdf' ), join( appDir, resourceDirName, 'pdf' ) ).catch( debug );
		copy( join( resourceDirectory, 'video' ), join( appDir, resourceDirName, 'video' ) ).catch( debug );
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
		filename: minify ? './js/bundle.min.js' : './js/bundle.js'
	};
	const compiler = webpack( config );
	compiler.run( ( err, stats ) => {
		unlinkSync( indexPath );
		if ( err ) {
			debug( 'Encountered an error during bundling: ' + err );
			removeSync( appDir );
			return clbk( err );
		}
		console.dir( stats ); // eslint-disable-line no-console
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
			return clbk( err );
		}
		if ( writeStats ) {
			debug( 'Write statistics to file...' );
			const statsJSON = stats.toJson();
			writeFileSync( statsFile, JSON.stringify( statsJSON ) );
		}
		return clbk( null, meta );
	});
}


// EXPORTS //

export default writeIndexFile;
