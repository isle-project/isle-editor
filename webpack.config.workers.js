// MODULES //

const { DefinePlugin } = require( 'webpack' );
const { join, resolve } = require( 'path' );
const { ESBuildMinifyPlugin } = require( 'esbuild-loader' );


// MAIN //

const config = {
	module: {
		rules: [
			{
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
					join( __dirname, 'app' ),
					join( __dirname, '@isle-project' )
				]
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
			'csv-stringify': resolve( './node_modules/csv-stringify/lib/browser/index.js' )
		},
		fallback: {
			'path': resolve( './node_modules/path-browserify' ),
			'stream': resolve( './node_modules/stream-browserify' ),
			'domain': false
		}
	},
	entry: {
		text_clustering_worker: [
			'@isle-project/workers/text-clustering'
		]
	},
	output: {
		path: join( __dirname, '@isle-project', 'workers' ),
		filename: '[name].js',
		assetModuleFilename: 'static/media/[hash][ext][query]'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'es2015',
				legalComments: 'none'
			})
		]
	},
	plugins: [
		new DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],
	devtool: 'source-map',
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
		'react-player': 'ReactPlayer',
		'pdfmake/build/pdfmake': 'pdfMake',
		'pdfmake/build/vfs_fonts.js': 'pdfMake',
		'plotly.js': 'Plotly',
		'moment': 'moment',
		'victory': 'Victory',
		'd3': 'd3',
		'socket.io-client': 'io',
		'js-yaml': 'jsyaml',
		'markdown-it': 'markdownit'
	}
};


// EXPORTS //

module.exports = config;
