// MODULES //

const { DefinePlugin, DllPlugin } = require( 'webpack' );
const { join, resolve } = require( 'path' );


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
					join( __dirname, '@isle-project' )
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
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'static/media/[name].[hash:8].[ext]'
					}
				}
			}
		]
	},
	resolve: {
		modules: [
			resolve( './' ),
			resolve( './app' ),
			resolve( './node_modules' )
		],
		alias: {
			'csv-parse': resolve( './node_modules/csv-parse/lib/browser/index.js' ),
			'csv-stringify': resolve( './node_modules/csv-stringify/lib/browser/index.js' )
		},
		fallback: {
			'path': resolve( './node_modules/path-browserify' )
		}
	},
	entry: {
		components: [
			'@isle-project/components/accordion',
			'@isle-project/components/animated',
			'@isle-project/components/background',
			'@isle-project/components/beacon-tooltip',
			'@isle-project/components/bibliography',
			'@isle-project/components/chat-button',
			'@isle-project/components/citation',
			'@isle-project/components/clock',
			'@isle-project/components/collapse',
			'@isle-project/components/color-picker',
			'@isle-project/components/container',
			'@isle-project/components/dashboard',
			'@isle-project/components/data-explorer',
			'@isle-project/components/data-sampler',
			'@isle-project/components/data-table',
			'@isle-project/components/date-display',
			'@isle-project/components/draggable',
			'@isle-project/components/draggable-grid',
			'@isle-project/components/draggable-list',
			'@isle-project/components/enlargeable-grid',
			'@isle-project/components/expire',
			'@isle-project/components/feedback',
			'@isle-project/components/flippable-card',
			'@isle-project/components/questions/free-text',
			'@isle-project/components/free-text-survey',
			'@isle-project/components/gate',
			'@isle-project/components/generator',
			'@isle-project/components/hint-button',
			'@isle-project/components/iframe',
			'@isle-project/components/image',
			'@isle-project/components/questions/image',
			'@isle-project/components/input',
			'@isle-project/components/joyride',
			'@isle-project/components/js-shell',
			'@isle-project/components/key-controls',
			'@isle-project/components/learn',
			'@isle-project/components/lesson-submit',
			'@isle-project/components/likert-scale',
			'@isle-project/components/link',
			'@isle-project/components/questions/match-list',
			'@isle-project/components/metrics/contingency-table',
			'@isle-project/components/metrics/db',
			'@isle-project/components/metrics/realtime',
			'@isle-project/components/multi-cards',
			'@isle-project/components/questions/multiple-choice-matrix',
			'@isle-project/components/questions/multiple-choice',
			'@isle-project/components/multiple-choice-survey',
			'@isle-project/components/questions/number',
			'@isle-project/components/number-survey',
			'@isle-project/components/questions/order',
			'@isle-project/components/overlay-trigger',
			'@isle-project/components/pages',
			'@isle-project/components/panel',
			'@isle-project/components/plotly',
			'@isle-project/components/polaroid',
			'@isle-project/components/preload',
			'@isle-project/components/proportions-survey',
			'@isle-project/components/provider',
			'@isle-project/components/qrcode',
			'@isle-project/components/questions/question-form',
			'@isle-project/components/questions/quiz',
			'@isle-project/components/r/help',
			'@isle-project/components/r/output',
			'@isle-project/components/r/plot',
			'@isle-project/components/r/shell',
			'@isle-project/components/r/table',
			'@isle-project/components/random-video',
			'@isle-project/components/range-picker',
			'@isle-project/components/questions/range',
			'@isle-project/components/reaction',
			'@isle-project/components/recorder',
			'@isle-project/components/revealer',
			'@isle-project/components/runner',
			'@isle-project/components/scrolling-text',
			'@isle-project/components/seal',
			'@isle-project/components/questions/select',
			'@isle-project/components/questions/select-matrix',
			'@isle-project/components/shaped-form',
			'@isle-project/components/sketchpad',
			'@isle-project/components/slider',
			'@isle-project/components/solution-button',
			'@isle-project/components/sortable-tree',
			'@isle-project/components/spreadsheet-upload',
			'@isle-project/components/sticky-note',
			'@isle-project/components/switch',
			'@isle-project/components/table',
			'@isle-project/components/tex',
			'@isle-project/components/text',
			'@isle-project/components/text-editor',
			'@isle-project/components/timed-button',
			'@isle-project/components/timer',
			'@isle-project/components/tooltip',
			'@isle-project/components/typewriter',
			'@isle-project/components/unveil',
			'@isle-project/components/video-chat-button',
			'@isle-project/components/video-lecture',
			'@isle-project/components/video-player',
			'@isle-project/components/weather',
			'@isle-project/components/wikipedia',
			'@isle-project/components/word-cloud',
			'@isle-project/components/internal/lesson',
			'@isle-project/components/internal/login',
			'@isle-project/components/internal/response-visualizer',
			'@isle-project/components/internal/signup',
			'@isle-project/components/internal/spinner',
			'@isle-project/components/internal/statusbar',
			'@isle-project/components/internal/toolbar',
			'@isle-project/components/internal/voice-control',
			'@isle-project/components/internal/error-boundary'
		],
		session: [
			'@isle-project/session'
		],
		locales: [
			'@isle-project/locales'
		]
	},
	output: {
		path: join( __dirname, '@isle-project', 'dll' ),
		filename: 'dll.[name].js',
		library: '[name]_dll',
		publicPath: 'https://cdn.jsdelivr.net/npm/@isle-project/dll@0.2.5/'
	},
	optimization: {
		minimize: true
	},
	plugins: [
		new DllPlugin({
			path: join( __dirname, '@isle-project', 'dll', '[name]-manifest.json' ),
			name: '[name]_dll'
		}),
		new DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],
	externals: {
		'axios': 'axios',
		'localforage': 'localforage',
		'i18next': 'i18next',
		'react': 'React',
		'react-dom': 'ReactDOM',
		'pdfjs-dist/build/pdf.min.js': 'pdfjsLib',
		'react-table': 'ReactTable',
		'prop-types': 'PropTypes',
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
		'@isle-project/components/internal/text-clustering': 'TextClustering'
	}
};


// EXPORTS //

module.exports = config;
