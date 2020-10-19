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
					join( __dirname, 'app' )
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
			resolve( './node_modules' )
		]
	},
	entry: {
		components: [
			'./app/components/accordion',
			'./app/components/animated',
			'./app/components/background',
			'./app/components/beacon-tooltip',
			'./app/components/bibliography',
			'./app/components/calculator',
			'./app/components/chat-button',
			'./app/components/citation',
			'./app/components/clock',
			'./app/components/collapse',
			'./app/components/color-picker',
			'./app/components/container',
			'./app/components/dashboard',
			'./app/components/data-explorer',
			'./app/components/data-sampler',
			'./app/components/data-table',
			'./app/components/date-display',
			'./app/components/draggable',
			'./app/components/draggable-grid',
			'./app/components/draggable-list',
			'./app/components/enlargeable-grid',
			'./app/components/expire',
			'./app/components/feedback',
			'./app/components/flippable-card',
			'./app/components/free-text-question',
			'./app/components/free-text-survey',
			'./app/components/gate',
			'./app/components/generator',
			'./app/components/hint-button',
			'./app/components/iframe',
			'./app/components/image',
			'./app/components/image-question',
			'./app/components/input',
			'./app/components/joyride',
			'./app/components/js-shell',
			'./app/components/key-controls',
			'./app/components/learn',
			'./app/components/lesson-submit',
			'./app/components/likert-scale',
			'./app/components/link',
			'./app/components/match-list-question',
			'./app/components/metrics/contingency-table',
			'./app/components/metrics/db',
			'./app/components/metrics/realtime',
			'./app/components/multi-cards',
			'./app/components/multiple-choice-matrix',
			'./app/components/multiple-choice-question',
			'./app/components/multiple-choice-survey',
			'./app/components/news',
			'./app/components/number-question',
			'./app/components/number-survey',
			'./app/components/order-question',
			'./app/components/overlay-trigger',
			'./app/components/pages',
			'./app/components/panel',
			'./app/components/plotly',
			'./app/components/polaroid',
			'./app/components/preload',
			'./app/components/proportions-survey',
			'./app/components/provider',
			'./app/components/qrcode',
			'./app/components/question-form',
			'./app/components/queue',
			'./app/components/quiz',
			'./app/components/r/help',
			'./app/components/r/output',
			'./app/components/r/plot',
			'./app/components/r/shell',
			'./app/components/r/table',
			'./app/components/random-video',
			'./app/components/range-picker',
			'./app/components/range-question',
			'./app/components/reaction',
			'./app/components/recorder',
			'./app/components/response-visualizer',
			'./app/components/revealer',
			'./app/components/runner',
			'./app/components/scrolling-text',
			'./app/components/seal',
			'./app/components/select-question',
			'./app/components/select-question-matrix',
			'./app/components/shaped-form',
			'./app/components/shaped-image',
			'./app/components/sketchpad',
			'./app/components/slider',
			'./app/components/solution-button',
			'./app/components/sortable-tree',
			'./app/components/internal/spinner',
			'./app/components/spreadsheet-upload',
			'./app/components/sticky-note',
			'./app/components/switch',
			'./app/components/table',
			'./app/components/tex',
			'./app/components/text',
			'./app/components/text-editor',
			'./app/components/timed-button',
			'./app/components/timer',
			'./app/components/tooltip',
			'./app/components/typewriter',
			'./app/components/unveil',
			'./app/components/user-pairer',
			'./app/components/video-chat-button',
			'./app/components/video-lecture',
			'./app/components/video-player',
			'./app/components/weather',
			'./app/components/wikipedia',
			'./app/components/word-cloud',
			'./app/components/internal/lesson',
			'./app/components/internal/login',
			'./app/components/internal/signup',
			'./app/components/internal/statusbar',
			'./app/components/internal/toolbar',
			'./app/components/internal/voice-control'
		]
	},
	output: {
		path: join( __dirname, 'dll', 'components' ),
		filename: 'dll.[name].js',
		library: '[name]_dll',
		publicPath: 'https://cdn.jsdelivr.net/npm/@isle-project/components@0.47.3/'
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
			path: join( __dirname, 'app', 'components', '[name]-manifest.json' ),
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
