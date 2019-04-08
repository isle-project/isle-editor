// MODULES //

import cp from 'child_process';
import { appendFileSync, copyFileSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { dirname, extname, resolve, join } from 'path';
import yaml from 'js-yaml';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackCdnPlugin from './webpack_cdn_plugin.js';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isObject from '@stdlib/assert/is-object';
import isRelativePath from '@stdlib/assert/is-relative-path';
import hasOwnProp from '@stdlib/assert/has-own-property';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import max from '@stdlib/math/base/special/max';
import papplyRight from '@stdlib/utils/papply-right';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import markdownToHTML from 'utils/markdown-to-html';
import transformToPresentation from 'utils/transform-to-presentation';
import REQUIRES from './requires.json';


// VARIABLES //

const debug = logger( 'bundler' );


// FUNCTIONS //

const makeOutputDir = ( outputDir ) => {
	mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = join( outputDir, 'index.isle' );
	writeFileSync( islePath, code );
};

const loadRequires = ( libs, filePath ) => {
	let str = '';
	let dir = dirname( filePath );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.(\/|\\)/.test( lib ) ) {
					lib = join( dir, libs[ key ]);
					if ( process.platform === 'win32' ) {
						lib = replace( lib, '\\', '\\\\' );
					}
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				if ( /\.svg$/.test( lib ) ) {
					let content = readFileSync( lib ).toString( 'base64' );
					str += `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';\n`;
				}
				else if ( /\.(?:jpg|png)$/.test( lib ) ) {
					let buffer = readFileSync( lib );
					str += `global[ '${key}' ] = 'data:image/jpeg;base64,${buffer.toString( 'base64' )}';\n`;
				}
				else {
					str += `import ${key} from '${lib}';\n`;
					str += `global[ '${key}' ] = ${key};\n`;
				}
			}
		}
	}
	return str;
};

const getMainImports = () => `
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Lesson from 'components/lesson';
import Provider from 'components/provider';
import factor from 'utils/factor-variable';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => `import ${elem} from '${REQUIRES[ elem ]}';` );
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent, className, loaderTimeout = 3000 ) => `
global.session = new Session( preamble );

class LessonWrapper extends Component {
	constructor() {
		super();
		this.state = preamble.state || {};
	}

	componentDidMount() {
		const loader = document.getElementById( 'loading' );
		if ( loader ) {
			setTimeout(function onFadeOut() {
				loader.style.animation = 'anim-fade-out 1.7s forwards';
			}, ${max( loaderTimeout - 3000, 0 )});
			setTimeout(function onRemove() {
				loader.remove();
				document.body.style['overflow-y'] = 'auto';
			}, ${loaderTimeout} );
		}
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<Lesson className="${className}" >
				${lessonContent}
			</Lesson>
		);
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
	const availableComponents = Object.keys( REQUIRES );

	let needVictoryTheme = false;
	for ( let i = 0; i < availableComponents.length; i++ ) {
		const regexp = new RegExp( `<${availableComponents[ i ]}[^>]*>`, 'g' );
		if ( regexp.test( code ) === true ) {
			ret.push( availableComponents[ i ] );
			if ( startsWith( availableComponents[ i ], 'Victory' ) ) {
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

const getISLEcode = ( config, filePath ) => {
	if ( config.instructorNotes && extname( config.instructorNotes ) === '.md' ) {
		if ( isRelativePath( config.instructorNotes ) ) {
			debug( 'Loading instructor notes from the supplied relative path...' );
			const fPath = resolve( dirname(filePath), config.instructorNotes );
			config.instructorNotes = readFileSync( fPath );
			config.instructorNotes = config.instructorNotes.toString();
		} else if ( isAbsolutePath( config.instructorNotes ) ) {
			debug( 'Loading instructor notes from the supplied absolute path...' );
			config.instructorNotes = readFileSync( config.instructorNotes );
			config.instructorNotes = config.instructorNotes.toString();
		}
	}
	return `const preamble = ${JSON.stringify( config )};`;
};

const getSessionCode = ( basePath ) => {
	let requirePath = resolve( join( basePath, 'app', 'session' ) );
	if ( process.platform === 'win32' ) {
		requirePath = replace( requirePath, '\\', '\\\\' );
	}
	let str = `import Session from '${requirePath}';`;
	return str;
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
	if ( meta.require ) {
		res += loadRequires( meta.require, filePath );
	}
	let className = 'Lesson';
	if ( contains( components, 'Deck' ) ) {
		className = 'Presentation';
		res += '\n';
		res += 'import SPECTACLE_THEME from \'components/spectacle/theme.json\';';
	}
	res += '\n';
	res += getISLEcode( meta, filePath );

	res += getSessionCode( basePath );

	res += getComponents( components );
	let loaderTimeout;
	if ( meta.objectives ) {
		loaderTimeout = 3000 + ( 3000 * meta.objectives.length );
	} else {
		loaderTimeout = 3000;
	}
	res += getLessonComponent( lessonContent, className, loaderTimeout );
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
* @param {string} options.outputDir - name of output directory
* @param {string} options.yamlStr - lesson meta data in YAML format
* @param {boolean} options.minify - boolean indicating whether code should be minified
* @param {boolean} options.writeStats - boolean indicating whether bundle stats should be written to `stats.json` file
* @param {Function} clbk - callback function
*/
function writeIndexFile({
	filePath,
	outputPath,
	basePath,
	content,
	outputDir,
	minify,
	writeStats
}, clbk ) {
	let yamlStr = content.match( /---([\S\s]*)---/ )[ 1 ];
	yamlStr = replace( yamlStr, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
	const meta = yaml.load( yamlStr );
	const appDir = join( outputPath, outputDir );
	const indexPath = resolve( './public/index.js' );
	const statsFile = join( appDir, 'stats.json' );
	makeOutputDir( appDir );
	generateISLE( appDir, content );

	const modulePaths = [
		resolve( basePath, './node_modules' ),
		resolve( basePath, './node_modules/@stdlib/stdlib/lib/node_modules' ),
		resolve( basePath, './node_modules/@stdlib/stdlib/node_modules' ),
		resolve( basePath, './app/' )
	];
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
				),
				'react-transition-group/TransitionGroup': resolve(
					basePath,
					'./node_modules/spectacle/node_modules/react-transition-group/TransitionGroup.js'
				) // ensure slide transitions work in Spectacle presentations
			},
			mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						plugins: [
							resolve( basePath, './node_modules/@babel/plugin-transform-react-constant-elements' ),
							resolve( basePath, './node_modules/@babel/plugin-transform-react-inline-elements' ),
							resolve( basePath, './node_modules/babel-plugin-transform-react-remove-prop-types' ),
							resolve( basePath, './node_modules/@babel/plugin-transform-react-jsx' ),
							resolve( basePath, './node_modules/@babel/plugin-proposal-class-properties' ),
							resolve( basePath, './node_modules/@babel/plugin-syntax-dynamic-import' )

						],
						presets: [
							resolve( basePath, './node_modules/@babel/preset-env' ),
							resolve( basePath, './node_modules/@babel/preset-react' )
						],
						babelrc: false,
						cacheDirectory: true
					}
				},
				{
					test: /\.worker\.js$/,
					exclude: /node_modules/,
					use: { loader: 'worker-loader' }
				},
				{
					test: /\.svg$/i,
					use: {
						loader: 'svg-react-loader'
					}
				},
				{
					test: /\.css$$/,
					use: [
						'style-loader',
						'css-loader?sourceMap'
					]
				}
			],
			noParse: /node_modules\/json-schema\/lib\/validate\.js/
		},
		optimization: {
			minimize: false,
			splitChunks: {
				chunks: 'all'
			}
		},
		node: {
			child_process: 'empty',
			dns: 'mock',
			fs: 'empty',
			net: 'mock',
			tls: 'mock'
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				title: meta.title,
				template: resolve( basePath, './app/bundler/index.html' ),
				templateParameters: {
					meta
				},
				minify: false
			}),
			new WebpackCdnPlugin({
				prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:alias/:version/:path',
				modules: [
					{
						name: 'plotly.js',
						alias: 'plotly.js',
						var: 'Plotly',
						path: 'plotly.min.js'
					},
					{
						name: 'katex',
						alias: 'KaTeX',
						var: 'katex',
						path: 'katex.min.js'
					},
					{
						name: 'moment',
						alias: 'moment.js',
						var: 'moment',
						path: 'moment.min.js'
					},
					{
						name: 'react',
						alias: 'react',
						var: 'React',
						path: 'umd/react.production.min.js'
					},
					{
						name: 'react-dom',
						alias: 'react-dom',
						var: 'ReactDOM',
						path: 'umd/react-dom.production.min.js'
					},
					{
						name: 'prop-types',
						alias: 'prop-types',
						var: 'PropTypes',
						path: 'prop-types.min.js'
					},
					{
						name: 'react-table',
						alias: 'react-table',
						var: 'ReactTable',
						path: 'react-table.js'
					},
					{
						name: 'markdown-it',
						alias: 'markdown-it',
						var: 'markdownit',
						path: 'markdown-it.min.js'
					},
					{
						name: 'pdfmake/build/pdfmake',
						alias: 'pdfmake',
						var: 'pdfMake',
						path: 'pdfmake.min.js',
						version: '0.1.40'
					},
					{
						name: 'localforage',
						alias: 'localforage',
						var: 'localforage',
						path: 'localforage.min.js'
					},
					{
						name: 'victory',
						alias: 'victory',
						var: 'Victory',
						path: 'victory.min.js'
					}
				]
			}),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.IgnorePlugin( /vertx/ )
		]
	};

	// Remove YAML preamble...
	content = content.replace( /---([\S\s]*)---/, '' );

	// Replace Markdown by HTML...
	content = markdownToHTML( content, {
		addEmptySpans: false
	});
	if ( meta.type === 'presentation' ) {
		content = transformToPresentation( content, meta );
	}
	if ( !meta.removeStatusBar ) {
		content = '<StatusBar className="fixedPos" />\n' + content;
	}
	const usedComponents = getComponentList( content );
	const str = generateIndexJS( content, usedComponents, meta, basePath, filePath );
	debug( `Create JS file: ${str}` );

	writeFileSync( indexPath, str );

	// Copy CSS file:
	mkdirSync( join( appDir, 'css' ) );
	copyFileSync( join( basePath, 'app', 'css', 'lesson.css' ), join( appDir, 'css', 'lesson.css' ) );
	if ( meta.css ) {
		// Append custom CSS file to `lesson.css` file:
		let fpath = meta.css;
		if ( !isAbsolutePath( meta.css ) ) {
			fpath = join( dirname( filePath ), meta.css );
		}
		const css = readFileSync( fpath ).toString();
		appendFileSync( join( appDir, 'css', 'lesson.css' ), css );
	}
	if ( meta.style ) {
		appendFileSync( join( appDir, 'css', 'lesson.css' ), meta.style );
	}

	let imgPath = join( basePath, 'app', 'img' );
	copyFileSync( join( imgPath, 'favicon.ico' ), join( appDir, 'favicon.ico' ) );

	config.entry = indexPath;
	config.output = {
		path: appDir,
		publicPath: './',
		filename: minify ? 'bundle.min.js' : 'bundle.js'
	};
	const compiler = webpack( config );
	compiler.run( ( err, stats ) => {
		if ( err ) {
			debug( 'Encountered an error during bundling: ' + err );
			throw err;
		}
		console.dir( stats ); // eslint-disable-line no-console
		if ( stats.errors ) {
			stats.errors.forEach( debug );
		}
		stats = stats.toJson();
		if ( writeStats ) {
			debug( 'Write statistics to file...' );
			writeFileSync( statsFile, JSON.stringify( stats ) );
		}
		unlinkSync( indexPath );
		if ( !minify ) {
			return clbk( err, meta );
		}
		let done = 0;
		debug( 'Minifying bundle...' );
		for ( let i = 0; i < stats.assets.length; i++ ) {
			const child = cp.fork( resolve( basePath, './app/bundler/minify.js' ) );
			const { name } = stats.assets[ i ];
			if ( endsWith( name, '.js' ) ) {
				const bundlePath = join( appDir, name );
				const code = readFileSync( bundlePath ).toString();
				child.on( 'message', papplyRight( onMessage, name, bundlePath ));
				child.send( code );
			}
		}
		function onMessage( minified, sendHandle, name, bundlePath ) {
			if ( minified.error ) {
				debug( 'Encountered an error during minification: ' + minified.error );
				throw minified.error;
			}
			const minifiedPath = join( appDir, name );
			writeFileSync( minifiedPath, minified.code );
			done += 1;
			if ( done === stats.assets.length-1 ) {
				return clbk( err, meta );
			}
		}
	});
}


// EXPORTS //

export default writeIndexFile;
