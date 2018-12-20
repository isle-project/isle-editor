// MODULES //

import cp from 'child_process';
import fs from 'fs-extra';
import { basename, dirname, extname, resolve, join } from 'path';
import yaml from 'js-yaml';
import webpack from 'webpack';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import isObject from '@stdlib/assert/is-object';
import isRelativePath from '@stdlib/assert/is-relative-path';
import hasOwnProp from '@stdlib/assert/has-own-property';
import replace from '@stdlib/string/replace';
import papplyRight from '@stdlib/utils/papply-right';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import markdownToHTML from 'utils/markdown-to-html';
import transformToPresentation from 'utils/transform-to-presentation';
import REQUIRES from './requires.json';


// VARIABLES //

const debug = logger( 'bundler' );


// FUNCTIONS //

const makeOutputDir = ( outputDir ) => {
	fs.mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = join( outputDir, 'index.isle' );
	fs.writeFileSync( islePath, code );
};

const generateIndexHTML = ( meta, minify, stats, head ) => `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>${meta.title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css" integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y" crossorigin="anonymous">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:400,400i,700,800" rel="stylesheet">
		<link rel="stylesheet" href="css/lesson.css" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>${head ? '\n\t\t'+head.split( '\n' ).join( '\n\t\t' ) : ''}
	</head>
	<body>
	<div id="loading">
		<div id="loading-author">${meta.author}</div>
		<div id="loading-titling">${meta.title}</div>
		${ meta.description ? '<div id="loading-description">'+meta.description+'</div>' : '' }
		<div id ="loading-bar"></div>
		<div id="loading-date">${meta.date}</div>
		${ meta.logo ? '<img id="loading-logo" src="'+meta.logo+'" />' : '' }
	</div>
	<div id="App"></div>
	<script>
		// Handle bug occurring when crypto-browserify is used with Webpack...
		window._crypto = {};
	</script>
	${stats.assets.map( ( asset ) => {
		let link;
		if ( !minify ) {
			link = asset.name;
		}
		else {
			const newExt = !contains( asset.name, '.worker.' ) ? '.min.js' : '.js'; // Do not rename worker files to make `pdfjs` work
			link = basename( asset.name, '.js' ) + newExt;
		}
		return `<script src="${link}"></script>`;
	}).join( '\n' )}
	</body>
</html>
`;

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
					let content = fs.readFileSync( lib ).toString( 'base64' );
					str += `global[ '${key}' ] = 'data:image/svg+xml;base64,${content}';\n`;
				}
				else if ( /\.(?:jpg|png)$/.test( lib ) ) {
					let buffer = fs.readFileSync( lib );
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
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import NotificationSystem from 'react-notification-system';
import Provider from 'components/provider';
import factor from 'utils/factor-variable';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => `import ${elem} from '${REQUIRES[ elem ]}';` );
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent, className ) => `
global.session = new Session( preamble );

class Lesson extends Component {
	constructor() {
		super();
		this.state = preamble.state || {};
	}

	componentDidMount() {
		global.lesson = this;
		const loader = document.getElementById( 'loading' );
		if ( loader ) {
			loader.style.animation = 'anim-fade-out 1.7s forwards';
			setTimeout(function onRemove() {
				loader.remove();
				document.body.style['overflow-y'] = 'auto';
			}, 3000 );
		}
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<div id="Lesson" className="${className}" >
				<Fragment>${lessonContent}</Fragment>
				<NotificationSystem ref={ ( div ) => this.notificationSystem = div } allowHTML={true} />
			</div>
		);
	}
}

document.body.style['overflow-y'] = 'hidden';

render(
	<Provider session={session} >
		<Lesson />
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

	for ( let i = 0; i < availableComponents.length; i++ ) {
		const regexp = new RegExp( `<${availableComponents[ i ]}[^>]*>`, 'g' );
		if ( regexp.test( code ) === true ) {
			ret.push( availableComponents[ i ]);
		}
	}
	// Components that will always be required:
	ret.push( 'VictoryTheme' );
	return ret;
};

const getISLEcode = ( config, filePath ) => {
	if ( config.instructorNotes && extname( config.instructorNotes ) === '.md' ) {
		if ( isRelativePath( config.instructorNotes ) ) {
			debug( 'Loading instructor notes from the supplied relative path...' );
			const fPath = resolve( dirname(filePath), config.instructorNotes );
			config.instructorNotes = fs.readFileSync( fPath );
			config.instructorNotes = config.instructorNotes.toString();
		} else if ( isAbsolutePath( config.instructorNotes ) ) {
			debug( 'Loading instructor notes from the supplied absolute path...' );
			config.instructorNotes = fs.readFileSync( config.instructorNotes );
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
	res += getLessonComponent( lessonContent, className );
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
	const modulePaths = [
		resolve( basePath, './node_modules' ),
		resolve( basePath, './node_modules/@stdlib/stdlib/lib/node_modules' ),
		resolve( basePath, './node_modules/@stdlib/stdlib/node_modules' ),
		resolve( basePath, './app/' )
	];
	const config = {
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
				'victory': resolve(
					basePath,
					'./node_modules/victory/dist/victory.min.js'
				),
				'katex': resolve(
					basePath,
					'./node_modules/katex/dist/katex.min.js'
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
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: '"production"'
				}
			}),
			new webpack.IgnorePlugin( /^\.\/locale$/, /moment$/ ),
			new webpack.ContextReplacementPlugin( /moment[/\\]locale$/, /us/ ),
			new webpack.IgnorePlugin( /vertx/ )
		]
	};

	let yamlStr = content.match( /---([\S\s]*)---/ )[ 1 ];
	yamlStr = replace( yamlStr, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
	const meta = yaml.load( yamlStr );
	const appDir = join( outputPath, outputDir );
	const indexPath = resolve( './public/index.js' );
	const htmlPath = join( appDir, 'index.html' );
	const statsFile = join( appDir, 'stats.json' );
	const getCSSPath = () => {
		return join( basePath, 'app', 'css' );
	};
	makeOutputDir( appDir );
	generateISLE( appDir, content );

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

	fs.writeFileSync( indexPath, str );

	// Copy CSS files:
	fs.copySync( getCSSPath(), join( appDir, 'css' ) );
	if ( meta.css ) {
		// Append custom CSS file to `lesson.css` file:
		let fpath = meta.css;
		if ( !isAbsolutePath( meta.css ) ) {
			fpath = join( dirname( filePath ), meta.css );
		}
		const css = fs.readFileSync( fpath ).toString();
		fs.appendFileSync( join( appDir, 'css', 'lesson.css' ), css );
	}
	if ( meta.style ) {
		fs.appendFileSync( join( appDir, 'css', 'lesson.css' ), meta.style );
	}

	let imgPath = join( basePath, 'app', 'img' );
	fs.copySync( join( imgPath, 'favicon.ico' ), join( appDir, 'favicon.ico' ) );

	config.entry = indexPath;
	config.output = {
		path: appDir,
		filename: 'bundle.js'
	};
	const compiler = webpack( config );
	compiler.run( ( err, stats ) => {
		if ( err ) {
			debug( 'Encountered an error during bundling: ' + err );
			throw err;
		}
		if ( stats.errors ) {
			stats.errors.forEach( debug );
		}
		stats = stats.toJson();
		if ( writeStats ) {
			debug( 'Write statistics to file...' );
			fs.writeFileSync( statsFile, JSON.stringify( stats ) );
		}
		fs.unlinkSync( indexPath );
		fs.writeFileSync( htmlPath, generateIndexHTML( meta, minify, stats, meta.head ) );

		if ( !minify ) {
			return clbk( err, meta );
		}
		let done = 0;
		debug( 'Minifying bundle...' );
		for ( let i = 0; i < stats.assets.length; i++ ) {
			const child = cp.fork( resolve( basePath, './app/bundler/minify.js' ) );
			const { name } = stats.assets[ i ];
			const bundlePath = join( appDir, name );
			const code = fs.readFileSync( bundlePath ).toString();
			child.on( 'message', papplyRight( onMessage, name, bundlePath ));
			child.send( code );
		}
		function onMessage( minified, sendHandle, name, bundlePath ) {
			if ( minified.error ) {
				debug( 'Encountered an error during minification: ' + minified.error );
				throw minified.error;
			}
			if ( contains( name, '.worker.' ) ) {
				// Avoid renaming worker files to make `pdfjs` work:
				fs.writeFileSync( bundlePath, minified.code );
			} else {
				const minifiedPath = join( appDir, basename( name, '.js' )+'.min.js' );
				fs.writeFileSync( minifiedPath, minified.code );
				fs.unlinkSync( bundlePath );
			}
			done += 1;
			if ( done === stats.assets.length ) {
				return clbk( err, meta );
			}
		}
	});
}


// EXPORTS //

export default writeIndexFile;
