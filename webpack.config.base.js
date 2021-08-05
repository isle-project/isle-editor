// MODULES //

const { join, resolve } = require( 'path' );
const MonacoWebpackPlugin = require( 'monaco-editor-webpack-plugin' );


// VARIABLES //

/*
* External modules that need not to be bundled with the main electron application. Due to copying a significant chunk of the `node_modules` when bundling as `externalResources` so that users can use these packages, placing a package in this list avoids code duplication.
*/
const EXTERNALS = [
	'@stdlib/*',
	'archiver',
	'child_process',
	'compute-chunkify',
	'cross-spawn',
	'csv-stringify',
	'csvtojson',
	'd3',
	'd3-cloud',
	'eslint', // needs to be external for CLI Engine to work for linting
	'form-data',
	'fsevents',
	'markdown-it',
	'minimist',
	'ml-pca',
	'murmurhash3js',
	'node-pty',
	'node-libs-browser',
	'pdfjs-dist',
	'profanities',
	'pressure',
	'react-bootstrap',
	'react-color',
	'react-copy-to-clipboard',
	'react-dates',
	'react-floater',
	'react-grid-layout',
	'react-highlight-words',
	'react-input-range',
	'react-joyride',
	'react-json-tree',
	'react-live',
	'react-plotly.js',
	'react-slick',
	'react-table',
	'react-virtualized',
	'recordrtc',
	'stemmer',
	'svgo',
	'typo-js',
	'uniq',
	'venn.js',
	'webpack'
];


// MAIN //

const config = {
	module: {
		rules: [ {
			test: /\.js?$/,
			use: [
				{
					loader: 'esbuild-loader',
					options: {
						loader: 'jsx',
						target: 'es2015'
					}
				}
			],
			include: [
				join( __dirname, 'main.development.js' ),
				join( __dirname, 'app' ),
				join( __dirname, '@isle-project' )
			],
			exclude: /fonts\.js$/
		},
		{
			test: /\.txt$/,
			type: 'asset/source'
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
			type: 'asset/resource'
		}],
		noParse: [
			/node_modules\/json-schema\/lib\/validate\.js/
		]
	},
	output: {
		path: join( __dirname, 'dist' ),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2',
		globalObject: '(typeof self !== "undefined" ? self : this)',
		assetModuleFilename: 'static/media/[name][ext][query]'
	},
	resolve: {
		alias: {
			'victory': resolve( './node_modules/victory/dist/victory.min.js' ),
			'form-data': resolve( './node_modules/form-data/lib/form_data.js' ),
			'prop-types': resolve( './node_modules/prop-types/prop-types' )
		},
		modules: [
			resolve( './' ),
			resolve( './app' ),
			resolve( './node_modules' )
		],
		extensions: [ '.js', '.json' ],
		mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
	},
	plugins: [
		new MonacoWebpackPlugin({
			features: [
				'accessibilityHelp',
				'bracketMatching',
				'caretOperations',
				'clipboard',
				'codeAction',
				'codelens',
				'colorDetector',
				'coreCommands',
				'cursorUndo',
				'dnd',
				'find',
				'folding',
				'fontZoom',
				'gotoError',
				'gotoLine',
				'hover',
				'inPlaceReplace',
				'indentation',
				'inspectTokens',
				'linesOperations',
				'links',
				'multicursor',
				'parameterHints',
				'quickCommand',
				'referenceSearch',
				'rename',
				'smartSelect',
				'snippets',
				'suggest',
				'toggleHighContrast',
				'toggleTabFocusMode',
				'transpose',
				'wordHighlighter',
				'wordOperations',
				'wordPartOperations'
			],
			languages: [ 'javascript', 'typescript' ]
		})
	],
	externals: EXTERNALS
};


// EXPORTS //

module.exports = config;
