// MODULES //

const fs = require( 'fs-extra' );
const path = require( 'path' );
const yaml = require( 'js-yaml' );
const webpack = require( 'webpack' );
const UglifyJS = require( 'uglify-js' );
const debug = require( 'debug-electron' )( 'bundler' );
const contains = require( '@stdlib/utils/contains' );
const isObject = require( '@stdlib/utils/is-object' );
const isAbsolutePath = require( '@stdlib/utils/is-absolute-path' );
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
		<link href="css/katex.min.css" rel="stylesheet" />
		<link href="css/bootstrap.min.css" rel="stylesheet" />
		<link href="css/bootstrap-theme.min.css" rel="stylesheet" />
		<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css' />
		<link href="css/fixed-data-table.min.css" rel="stylesheet" />
		<link href="css/slick.min.css" rel="stylesheet" type="text/css" />
		<link href="css/slick-theme.min.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" href="css/lesson.css" />
	</head>
	<body>
	<div id="Lesson"></div>
	<script>
		// Handle bug occuring when crypto-browserify is used with Webpack...
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
			if ( libs.hasOwnProperty( key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.\//.test( lib ) ) {
					lib = path.join( dirname, libs[ key ]);
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				str += `global[ '${key}' ] = require( '${lib}' );\n`;
			}
		}
	}
	return str;
};

const getMainImports = () => `
import React, { Component } from 'react';
import { render } from 'react-dom';
import yaml from 'js-yaml';
import NotificationSystem from 'react-notification-system';
`;

const getComponents = ( arr ) => {
	const requireStatements = arr.map( elem => REQUIRES[ elem ]);
	return requireStatements.join( '\n' );
};

const getLessonComponent = ( lessonContent ) => `
class Lesson extends Component {
	constructor() {
		super();
		this.state = global.ISLE.state;

		this.session = new Session( global.ISLE );

		this.addNotification = ( config ) => {
			if ( this.refs.notificationSystem ) {
				this.refs.notificationSystem.addNotification( config );
			}
		}

		global.lesson = this;
	}

	sendMail( name, to ) {
		let mailOptions = global.ISLE.mails[ name ];
		if ( !mailOptions.hasOwnProperty( 'from' ) ) {
			mailOptions.from = ISLE.email || 'robinson@isle.cmu.edu';
		}
		if ( mailOptions.hasOwnProperty( 'text' ) ) {
			mailOptions.text = mustache.render( mailOptions.text, global.lesson );
		}
		mailOptions.to = to;
		request.post( ISLE.server + '/mail', {
			form: mailOptions
		}, ( error, response, body ) => {
			console.log( error );
		});
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<div>
				<div>${lessonContent}</div>
				<NotificationSystem ref="notificationSystem" allowHTML={true} />
			</div>
		);
	}
}

render(
	<Lesson />,
	document.getElementById( 'Lesson' )
);`;

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
	return 'global.ISLE = yaml.load(`' + yamlStr + '`);';
};

const getSessionCode = ( basePath ) => {
	let str = 'const Session = ';
	str += `require( '${path.resolve( basePath, './app/api/session' )}' );`;
	return str;
};

const getMailCode = () => `
import request from 'request';
import mustache from 'mustache';`;


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
		res += `const createTheme = require( 'spectacle/lib/themes/default' ).default;
				const theme = createTheme({
					primary: "#fffff8",
					secondary: "#2e4468",
					tertiary: "#c95d0a",
					quartenary: "black"
				}, {
					primary: "Cardo",
					secondary: "Cardo",
					tertiary: "Cardo",
					font: "Cardo"
				});`;
	}
	res += '\n';
	res += getISLEcode( yamlStr );

	res += getSessionCode( basePath );
	res += getMailCode();

	res += getComponents( components );
	res += getLessonComponent( lessonContent );
	return res;
} // end FUNCTION generateIndexJS()

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
* @param {Function} clbk - callback function
*/
function writeIndexFile({
	filePath,
	outputPath,
	basePath,
	content,
	outputDir,
	minify
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
				'object-keys': path.resolve( basePath, './objectKeys.js' ),
				'victory': path.resolve(
					basePath,
					'./node_modules/victory/dist/victory/'
				),
				'history/createHashHistory': path.resolve(
					basePath,
					'./node_modules/react-history/node_modules/history/createHashHistory.js'
				)
			}
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
					test: /^((?!\.global).)*\.css$/,
					use: [
						'style-loader',
						'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
			new webpack.IgnorePlugin( /vertx/ ),
			new webpack.ProvidePlugin({
				'window.d3': 'd3'
			})
		],
		externals: [
			'crypto-browserify'
		]
	};

	const yamlStr = content.match( /---([\S\s]*)---/ )[ 1 ];
	const meta = yaml.load( yamlStr );

	const appDir = path.join( outputPath, outputDir );
	const indexPath = path.resolve( './public/index.js' );
	const htmlPath = path.join( appDir, 'index.html' );
	const bundlePath = path.join( appDir, 'bundle.js' );
	const getCSSPath = () => {
		return path.join( basePath, `./app/css/` );
	};
	makeOutputDir( appDir );
	generateISLE( appDir, content );

	// Remove YAML preamble...
	content = content.replace( /---([\S\s]*)---/, '' );

	// Replace Markdown by HTML...
	content = markdownToHTML( content );

	if ( meta.type === 'presentation' ) {
		// Automatically insert <Slide> tags if not manually set...
		if ( !contains( content, '<Slide' ) || !contains( content, '</Slide>' ) ) {
			let pres = '<Slide>';
			let arr = content.split( '<h1>' );
			pres += arr.shift() + '<h1>';
			pres += arr.join( '</Slide><Slide><h1>' );
			pres += '</Slide>';
			content = pres;
		}
		content = `<Deck
				theme={theme}
				globalStyles={true}
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
		fs.copySync( fpath, path.join( appDir, 'css/lesson.css' ) );
	}

	if ( contains( usedComponents, 'FeedbackButtons' ) ) {
		fs.mkdirSync( path.join( appDir, 'img' ) );
		let imgPath = path.join( basePath, './app/img' );
		fs.copySync( path.join( imgPath ), path.join( appDir, 'img' ) );
	}

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
		fs.unlinkSync( indexPath );
		fs.writeFileSync( htmlPath, generateIndexHTML( meta.title, minify ) );

		if ( minify ) {
			const minified = UglifyJS.minify( bundlePath, {
				warnings: false,
				compress: true,
				mangle: true
			});
			fs.writeFileSync( path.join( appDir, 'bundle.min.js' ), minified.code );
		}
		clbk( err, meta );
	});
} // end FUNCTION writeIndexFile()


// EXPORTS //

module.exports = writeIndexFile;
