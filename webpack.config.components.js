// MODULES //

const { DllPlugin } = require( 'webpack' );
const { join, resolve } = require( 'path' );
const TerserPlugin = require( 'terser-webpack-plugin' );


// MAIN //

const config = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [
								'@babel/plugin-proposal-export-default-from',
								'@babel/plugin-proposal-class-properties'
							],
							presets: [
								'@babel/preset-env'
							],
							cacheDirectory: true,
							cacheCompression: false
						}
					}
				],
				include: [
					join( __dirname, 'app' ),
					join( __dirname, 'packages' )
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-react-loader'
				}
			}
		]
	},
	resolve: {
		modules: [
			resolve( './app' ),
			resolve( './packages' ),
			resolve( './node_modules' )
		]
	},
	entry: {
		components: [
			'./packages/components/accordion',
			'./packages/components/animated',
			'./packages/components/background',
			'./packages/components/beacon-tooltip',
			'./packages/components/bibliography',
			'./packages/components/chat-button',
			'./packages/components/citation',
			'./packages/components/clock',
			'./packages/components/collapse',
			'./packages/components/color-picker',
			'./packages/components/container',
			'./packages/components/dashboard',
			'./packages/components/data-explorer',
			'./packages/components/data-sampler',
			'./packages/components/data-table',
			'./packages/components/date-display',
			'./packages/components/draggable',
			'./packages/components/draggable-grid',
			'./packages/components/draggable-list',
			'./packages/components/enlargeable-grid',
			'./packages/components/expire',
			'./packages/components/feedback',
			'./packages/components/flippable-card',
			'./packages/components/questions/free-text',
			'./packages/components/free-text-survey',
			'./packages/components/gate',
			'./packages/components/generator',
			'./packages/components/hint-button',
			'./packages/components/iframe',
			'./packages/components/image',
			'./packages/components/questions/image',
			'./packages/components/input',
			'./packages/components/joyride',
			'./packages/components/js-shell',
			'./packages/components/key-controls',
			'./packages/components/learn',
			'./packages/components/lesson-submit',
			'./packages/components/likert-scale',
			'./packages/components/link',
			'./packages/components/questions/match-list',
			'./packages/components/metrics/contingency-table',
			'./packages/components/metrics/db',
			'./packages/components/metrics/realtime',
			'./packages/components/multi-cards',
			'./packages/components/questions/multiple-choice-matrix',
			'./packages/components/questions/multiple-choice',
			'./packages/components/multiple-choice-survey',
			'./packages/components/news',
			'./packages/components/questions/number',
			'./packages/components/number-survey',
			'./packages/components/questions/order',
			'./packages/components/overlay-trigger',
			'./packages/components/pages',
			'./packages/components/panel',
			'./packages/components/plotly',
			'./packages/components/polaroid',
			'./packages/components/preload',
			'./packages/components/proportions-survey',
			'./packages/components/provider',
			'./packages/components/qrcode',
			'./packages/components/questions/question-form',
			'./packages/components/questions/quiz',
			'./packages/components/r/help',
			'./packages/components/r/output',
			'./packages/components/r/plot',
			'./packages/components/r/shell',
			'./packages/components/r/table',
			'./packages/components/random-video',
			'./packages/components/range-picker',
			'./packages/components/questions/range',
			'./packages/components/reaction',
			'./packages/components/recorder',
			'./packages/components/revealer',
			'./packages/components/runner',
			'./packages/components/scrolling-text',
			'./packages/components/seal',
			'./packages/components/questions/select',
			'./packages/components/questions/select-matrix',
			'./packages/components/shaped-form',
			'./packages/components/shaped-image',
			'./packages/components/sketchpad',
			'./packages/components/slider',
			'./packages/components/solution-button',
			'./packages/components/sortable-tree',
			'./packages/components/spreadsheet-upload',
			'./packages/components/sticky-note',
			'./packages/components/switch',
			'./packages/components/table',
			'./packages/components/tex',
			'./packages/components/text',
			'./packages/components/text-editor',
			'./packages/components/timed-button',
			'./packages/components/timer',
			'./packages/components/tooltip',
			'./packages/components/typewriter',
			'./packages/components/unveil',
			'./packages/components/video-chat-button',
			'./packages/components/video-lecture',
			'./packages/components/video-player',
			'./packages/components/weather',
			'./packages/components/wikipedia',
			'./packages/components/word-cloud',
			'./packages/components/internal/lesson',
			'./packages/components/internal/login',
			'./packages/components/internal/response-visualizer',
			'./packages/components/internal/signup',
			'./packages/components/internal/spinner',
			'./packages/components/internal/statusbar',
			'./packages/components/internal/toolbar',
			'./packages/components/internal/voice-control'
		]
	},
	output: {
		path: join( __dirname, 'packages', 'components', 'dist' ),
		filename: 'dll.[name].js',
		library: '[name]_dll',
		publicPath: 'https://cdn.jsdelivr.net/npm/@isle-project/components@0.47.13/dist'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: 'all',
				cache: true,
				parallel: true
			})
		]
	},
	plugins: [
		new DllPlugin({
			path: join( __dirname, 'packages', 'components', '[name]-manifest.json' ),
			name: '[name]_dll'
		})
	],
	externals: {
		'axios': 'axios',
		'localforage': 'localforage',
		'react': 'React',
		'react-dom': 'ReactDOM',
		'pdfjs-dist/webpack': 'pdfjsLib',
		'react-table': 'ReactTable',
		'prop-types': 'PropTypes',
		'react-contextmenu': 'ReactContextMenu',
		'react-draggable': 'ReactDraggable',
		'react-list': 'ReactList',
		'react-notification-system': 'ReactNotificationSystem',
		'react-player': 'ReactPlayer',
		'pdfmake/build/pdfmake': 'pdfMake',
		'pdfmake/build/vfs_fonts.js': 'pdfMake',
		'plotly.js': 'Plotly',
		'katex': 'katex',
		'moment': 'moment',
		'victory': 'Victory',
		'd3': 'd3',
		'socket.io-client': 'io',
		'js-yaml': 'jsyaml',
		'markdown-it': 'markdownit',
		'lodash': '_',
		'components/internal/text-clustering': 'TextClustering'
	}
};


// EXPORTS //

module.exports = config;
