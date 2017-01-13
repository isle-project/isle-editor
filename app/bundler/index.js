// MODULES //

const fs = require( 'fs-plus' );
const path = require( 'path' );
const yaml = require( 'js-yaml' );
const webpack = require( 'webpack' );
const UglifyJS = require( 'uglify-js' );
const markdownToHTML = require( './../utils/markdown-to-html' );
const REQUIRES = require( './requires.json' );


// VARIABLES //

const isPackaged = !( /node_modules\/electron\/dist/.test( process.resourcesPath ) );
const rootPaths = [];
if ( isPackaged ) {
	rootPaths.push( `${process.resourcesPath}/app` );
	rootPaths.push( `${process.resourcesPath}/app/node_modules/@stdlib/stdlib/lib/node_modules` );
	rootPaths.push( `${process.resourcesPath}/app/node_modules/@stdlib/stdlib/node_modules` );
} else {
	rootPaths.push( path.resolve( './node_modules' ) );
	rootPaths.push( path.resolve( './node_modules/@stdlib/stdlib/lib/node_modules' ) );
	rootPaths.push( path.resolve( './node_modules/@stdlib/stdlib/node_modules' ) );
	rootPaths.push( path.resolve( './app/' ) );
}


// CONFIG //

const config = {
	resolve: {
		root: rootPaths,
		alias: {
			'object-keys': isPackaged ? `${process.resourcesPath}/app/objectKeys.js` : path.resolve( './objectKeys.js' ),
			'victory': isPackaged ?
				`${process.resourcesPath}/app/node_modules/victory/dist/victory/`:
				path.resolve( './node_modules/victory/dist/victory/' )
		}
	},
	resolveLoader: {
		root: rootPaths
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: path.join( __dirname, 'node_modules' ),
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
		],
		noParse: /node_modules\/json-schema\/lib\/validate\.js/
	},
	node: {
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

// FUNCTIONS //

const makeOutputDir = ( outputDir ) => {
	fs.mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = path.join( outputDir, 'index.isle' );
	fs.writeFileSync( islePath, code );
};

const contains = ( arr, value ) => {
	for ( let i = 0; i < arr.length; i++ ) {
		if ( arr[ i ] === value ) {
			return true;
		}
	}
	return false;
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
	<script src=${ minify ? "bundle.min.js" : "bundle.js" }></script>
	</body>
</html>
`;

const getMainImports = () => `
import React, { Component } from 'react';
import { render } from 'react-dom';
import yaml from 'js-yaml';
import assignMath from '@stdlib/namespace/lib/math';
import NotificationSystem from 'react-notification-system';

global.std = {};
assignMath( global.std );
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

const getSessionCode = () => {
	let str = 'const Session = ';
	str += isPackaged ?
		`require( '${process.resourcesPath}/app/app/api/session' );` :
		`require( '${path.resolve( './app/api/session' )}' );`;
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
* @returns {string} index.js content
*/
function generateIndexJS( lessonContent, components, yamlStr ) {
	let res = getMainImports();
	res += '\n';
	res += getISLEcode( yamlStr );

	res += getSessionCode();
	res += getMailCode();

	res += getComponents( components );
	res += getLessonComponent( lessonContent );
	return res;
} // end FUNCTION generateIndexJS()

/**
* Write index.js file to disk
*
* @param {string} outputPath - file path of output directory
* @param {string} lessonContent - ISLE lesson file
* @param {string} yamlStr - lesson meta data in YAML format
* @param {boolean} minify - boolean indicating whether code should be minified
* @param {Function} clbk - callback function
*/
function writeIndexFile( outputPath, lessonContent, minify, clbk ) {
	const yamlStr = lessonContent.match( /---([\S\s]*)---/ )[ 1 ];
	const meta = yaml.load( yamlStr );
	const appDir = path.join( outputPath, meta.title );
	const indexPath = isPackaged ?
		`${process.resourcesPath}/app/public/index.js` :
		path.resolve( './public/index.js' );
	const htmlPath = path.join( appDir, 'index.html' );
	const bundlePath = path.join( appDir, 'bundle.js' );
	const getCSSPath = () => {
		return isPackaged ?
		`${process.resourcesPath}/app/app/css/` :
		path.resolve( `./app/css/` );
	};

	// Remove YAML preamble...
	lessonContent = lessonContent.replace( /---([\S\s]*)---/, '' );

	// Replace Markdown by HTML...
	lessonContent = markdownToHTML( lessonContent );

	const outputDir = path.join( outputPath, meta.title );
	makeOutputDir( outputDir );
	generateISLE( outputDir, lessonContent );

	const usedComponents = getComponentList( lessonContent );

	const str = generateIndexJS( lessonContent, usedComponents, yamlStr );

	fs.writeFileSync( indexPath, str );
	console.log( str );

	// Copy CSS files:
	fs.copySync( getCSSPath(), path.join( appDir, 'css' ) );

	if ( contains( usedComponents, 'FeedbackButtons' ) ) {
		fs.mkdirSync( path.join( appDir, 'img' ) );
		let imgPath = isPackaged ?
			`${process.resourcesPath}/app/app/img` :
			path.resolve( './app/img' );
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
		console.log( stats );
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
