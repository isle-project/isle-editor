// MODULES //

import webpack from 'webpack';
import { join, resolve } from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';


// VARIABLES //

const EXTERNALS = [
	'@stdlib/stdlib',
	'ajv',
	'ansi-to-react',
	'archiver',
	'camelcase',
	'child_process',
	'component-playground',
	'component-raf',
	'component-tween',
	'compute-chunkify',
	'compute-mean',
	'compute-stdev',
	'csv-parse',
	'csv-stringify',
	'd3-cloud',
	'd3',
	'detect-csv',
	'eslint',
	'form-data',
	'fsevents',
	'highlight.js',
	'html-webpack-plugin',
	'js-yaml',
	'katex',
	'localforage',
	'markdown-it-container',
	'markdown-it-ins',
	'markdown-it-katex',
	'markdown-it-sub',
	'markdown-it',
	'minimist',
	'mini-css-extract-plugin',
	'ml-pca',
	'moment',
	'murmurhash3js',
	'pdfjs-dist',
	'pdfmake',
	'plotly.js',
	'profanities',
	'pressure',
	'react-dom',
	'react',
	'react-bootstrap',
	'react-color',
	'react-contextmenu',
	'react-copy-to-clipboard',
	'react-dates',
	'react-dom',
	'react-draggable',
	'react-floater',
	'react-grid-layout',
	'react-highlight-words',
	'react-input-range',
	'react-joyride',
	'react-json-tree',
	'react-list',
	'react-notification-system',
	'react-player',
	'react-plotly.js',
	'react-select',
	'react-slick',
	'react-table',
	'react-transition-group',
	'recordrtc',
	'socket.io-client',
	'spectacle',
	'stemmer',
	'svgo',
	'terser',
	'turndown',
	'turndown-plugin-gfm',
	'typo-js',
	'uglify-es',
	'uniq',
	'venn.js',
	'victory',
	'webpack'
];


// MAIN //

export default {
	module: {
		rules: [ {
			test: /\.js?$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						plugins: [],
						cacheDirectory: true,
						cacheCompression: false
					}
				}
			],
			include: [
				join( __dirname, 'main.development.js' ),
				join( __dirname, 'app' )
			],
			exclude: /\.fonts\.js$/
		},
		{
			test: /\.worker\.js$/,
			use: { loader: 'worker-loader' },
			include: join( __dirname, 'app', 'components', 'response-visualizer' )
		},
		{
			test: /\.txt$/,
			use: 'raw-loader'
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		{
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
			use: {
				loader: 'file-loader',
				options: {
					name: 'static/media/[name].[hash:8].[ext]'
				}
			}
		}],
		noParse: [
			/node_modules\/json-schema\/lib\/validate\.js/
		]
	},
	output: {
		path: join( __dirname, 'dist' ),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2',
		globalObject: '(typeof self !== "undefined" ? self : this)'
	},
	resolve: {
		alias: {
			'victory': resolve( './node_modules/victory/dist/victory.min.js' ),
			'form-data': resolve( './node_modules/form-data/lib/form_data.js' ),
			'react-transition-group/TransitionGroup': resolve( './node_modules/spectacle/node_modules/react-transition-group/TransitionGroup.js' ) // ensure slide transitions work in Spectacle presentations
		},
		modules: [
			resolve( './app' ),
			resolve( './node_modules' ),
			resolve( './node_modules/@stdlib/stdlib/lib/node_modules' )
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
				'comment',
				'contextmenu',
				'coreCommands',
				'cursorUndo',
				'dnd',
				'find',
				'folding',
				'fontZoom',
				'format',
				'gotoError',
				'gotoLine',
				'hover',
				'inPlaceReplace',
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
				'transpose',
				'wordHighlighter',
				'wordOperations',
				'wordPartOperations'
			],
			languages: [ 'javascript', 'typescript' ]
		}),
		new webpack.IgnorePlugin( /vertx/ )
	],
	externals: EXTERNALS
};
