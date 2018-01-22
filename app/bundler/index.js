// MODULES //

const cp = require( 'child_process' );
const fs = require( 'fs-extra' );
const path = require( 'path' );
const yaml = require( 'js-yaml' );
const webpack = require( 'webpack' );
const debug = require( 'debug' )( 'bundler' );
const contains = require( '@stdlib/assert/contains' );
const isObject = require( '@stdlib/assert/is-object' );
const hasOwnProp = require( '@stdlib/assert/has-own-property' );
const replace = require( '@stdlib/string/replace' );
const isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
const markdownToHTML = require( './../utils/markdown-to-html' );
const REQUIRES = require( './requires.json' );


// FUNCTIONS //

const makeOutputDir = ( outputDir ) => {
	fs.mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = path.join( outputDir, 'index.isle' );
	fs.writeFileSync( islePath, code );
};

const generateIndexHTML = ( title, minify ) => `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>${title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" integrity="sha384-B41nY7vEWuDrE9Mr+J2nBL0Liu+nl/rBXTdpQal730oTHdlrlXHzYMOhDU60cwde" crossorigin="anonymous">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
		<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
		<link rel="stylesheet" href="css/lesson.css" />
		<script src="https://use.fontawesome.com/1ef7eff9d5.js"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
	</head>
	<body>
	<div id="loading">
		<h1 id="loading-title">${title}</h1>
	</div>
	<div id="App"></div>
	<script>
		// Handle bug occurring when crypto-browserify is used with Webpack...
		window._crypto = {};
	</script>
	<script src="${ minify ? 'bundle.min.js' : 'bundle.js' }"></script>
	</body>
</html>
`;

const loadRequires = ( libs, filePath ) => {
	let str = '';
	let dirname = path.dirname( filePath );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( hasOwnProp( libs, key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.\//.test( lib ) ) {
					lib = path.join( dirname, libs[ key ]);
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
					str += `global[ '${key}' ] = require( '${lib}' );\n`;
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
import NotificationSystem from 'react-notification-system';
import Provider from 'components/provider';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => REQUIRES[ elem ]);
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent ) => `
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
			loader.remove();
		}
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<div id="Lesson" className="Lesson" >
				<div>${lessonContent}</div>
				<NotificationSystem ref={ ( div ) => this.notificationSystem = div } allowHTML={true} />
			</div>
		);
	}
}

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
		const regexp = new RegExp( `<${availableComponents[ i ]}[^>]*>`, 'gi' );
		if ( regexp.test( code ) === true ) {
			ret.push( availableComponents[ i ]);
		}
	}
	// Components that will always be required:
	ret.push( 'VictoryTheme' );
	return ret;
};

const getISLEcode = ( yamlStr ) => {
	return `const preamble = ${JSON.stringify( yaml.load( yamlStr ) )};`;
};

const getSessionCode = ( basePath ) => {
	let requirePath = path.resolve( path.join( basePath, 'app', 'session' ) );
	if ( process.platform === 'win32' ) {
		requirePath = replace( requirePath, '\\', '\\\\' );
	}
	let str = 'const Session = ';
	str += `require( '${requirePath}' );`;
	return str;
};


// MAIN //

/**
* Generate contents of index.js file of lesson.
*
* @param {string} lessonContent - ISLE lesson file
* @param {Array} components - array of component names
* @param {string} yamlStr - lesson meta data in YAML format
* @param {string} basePath - file path of ISLE editor
* @param {string} filePath - file path of source file
* @returns {string} index.js content
*/
function generateIndexJS( lessonContent, components, yamlStr, basePath, filePath ) {
	let res = getMainImports();

	const meta = yaml.load( yamlStr );
	if ( meta.require ) {
		res += loadRequires( meta.require, filePath );
	}

	if ( contains( components, 'Deck' ) ) {
		res += '\n';
		res += 'const theme = require( \'components/spectacle/theme.json\' )';
	}
	res += '\n';
	res += getISLEcode( yamlStr );

	res += getSessionCode( basePath );

	res += getComponents( components );
	res += getLessonComponent( lessonContent );
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
		path.resolve( basePath, './node_modules' ),
		path.resolve( basePath, './node_modules/@stdlib/stdlib/lib/node_modules' ),
		path.resolve( basePath, './node_modules/@stdlib/stdlib/node_modules' ),
		path.resolve( basePath, './app/' )
	];
	const config = {
		resolve: {
			modules: modulePaths,
			alias: {
				'victory': path.resolve(
					basePath,
					'./node_modules/victory/dist/victory.min.js'
				),
				'katex': path.resolve(
					basePath,
					'./node_modules/katex/dist/katex.min.js'
				),
				'plotly.js': path.resolve(
					basePath,
					'./node_modules/plotly.js/dist/plotly-cartesian.min.js'
				),
				'browserify-aes/browser': path.resolve(
					basePath,
					'./node_modules/parse-asn1/node_modules/browserify-aes/browser.js'
				)
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
							'add-module-exports'
						],
						presets: [
							'es2015',
							'react',
							'stage-0'
						],
						babelrc: false,
						cacheDirectory: true
					}
				},
				{
					test: /\.json$/,
					loader: 'json-loader'
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

	const yamlStr = content.match( /---([\S\s]*)---/ )[ 1 ];
	const meta = yaml.load( yamlStr );
	const appDir = path.join( outputPath, outputDir );
	const indexPath = path.resolve( './public/index.js' );
	const htmlPath = path.join( appDir, 'index.html' );
	const statsFile = path.join( appDir, 'stats.json' );
	const bundlePath = path.join( appDir, 'bundle.js' );
	const getCSSPath = () => {
		return path.join( basePath, 'app', 'css' );
	};
	makeOutputDir( appDir );
	generateISLE( appDir, content );

	// Remove YAML preamble...
	content = content.replace( /---([\S\s]*)---/, '' );

	// Replace Markdown by HTML...
	content = markdownToHTML( content );
	if ( !meta.hideToolbar ) {
		content = '<StatusBar className="fixedPos" />\n' + content;
	}
	if ( meta.type === 'presentation' ) {
		// Automatically insert <Slide> tags if not manually set...
		if ( !contains( content, '<Slide' ) || !contains( content, '</Slide>' ) ) {
			let pres = '<Slide>';
			let arr = content.split( '<p>===</p>' );
			pres += arr.join( '</Slide><Slide>' );
			pres += '</Slide>';
			pres = pres.replace( /<h([0-5])>(.*?)<\/h[0-5]>/g, '<Heading size={$1}>$2</Heading>' );
			pres = pres.replace( /<p[^>]*>([\s\S]+?)<\/p>/g, '<SText>$1</SText>' );
			pres = pres.replace( /<ul[^>]*>([\s\S]+?)<\/ul>/g, '<List>$1</List>' );
			pres = pres.replace( /<li[^>]*>([\s\S]+?)<\/li>/g, '<ListItem>$1</ListItem>' );
			content = pres;
		}
		content = `<Deck
				theme={theme}
				globalStyles={false}
				transition={[]}
				progress="number"
			>
				${content}
			</Deck>`;
	}
	const usedComponents = getComponentList( content );
	const str = generateIndexJS( content, usedComponents, yamlStr, basePath, filePath );
	debug( `Create JS file: ${str}` );

	fs.writeFileSync( indexPath, str );

	// Copy CSS files:
	fs.copySync( getCSSPath(), path.join( appDir, 'css' ) );
	// Override `lesson.css` file if custom CSS file is specified:
	if ( meta.css ) {
		let fpath = meta.css;
		if ( !isAbsolutePath( meta.css ) ) {
			fpath = path.join( path.dirname( filePath ), meta.css );
		}
		fs.copySync( fpath, path.join( appDir, 'css', 'lesson.css' ) );
	}
	if ( meta.style ) {
		fs.appendFileSync( path.join( appDir, 'css', 'lesson.css' ), meta.style );
	}

	let imgPath = path.join( basePath, 'app', 'img' );
	fs.copySync( path.join( imgPath, 'favicon.ico' ), path.join( appDir, 'favicon.ico' ) );

	config.entry = indexPath;
	config.output = {
		path: appDir,
		filename: 'bundle.js'
	};
	const compiler = webpack( config );
	compiler.run( ( err, stats ) => {
		if ( err ) {
			throw err;
		}
		debug( stats );
		if ( writeStats ) {
			fs.writeFileSync( statsFile, JSON.stringify( stats.toJson() ) );
		}
		fs.unlinkSync( indexPath );
		fs.writeFileSync( htmlPath, generateIndexHTML( meta.title, minify ) );

		if ( minify ) {
			const child = cp.fork( path.resolve( basePath, './app/bundler/minify.js' ) );
			const code = fs.readFileSync( bundlePath ).toString();
			child.on( 'message', function onMessage( minified ) {
				if ( minified.error ) {
					throw minified.error;
				}
				fs.writeFileSync( path.join( appDir, 'bundle.min.js' ), minified.code );
				fs.unlinkSync( path.join( appDir, 'bundle.js' ) );
				clbk( err, meta );
			});
			child.send( code );
		} else {
			clbk( err, meta );
		}
	});
}


// EXPORTS //

module.exports = writeIndexFile;
