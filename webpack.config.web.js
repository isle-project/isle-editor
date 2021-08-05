/* eslint max-len: 0 */

// MODULES //

const path = require( 'path' );
const webpack = require( 'webpack' );
const ReactRefreshWebpackPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' );
const baseConfig = require( './webpack.config.base' );


// VARIABLES //

const port = process.env.PORT || 1212; // eslint-disable-line no-process-env
const publicPath = `http://localhost:${port}/dist`; // eslint-disable-line i18next/no-literal-string


// MAIN //

const config = {
	...baseConfig,
	devtool: 'eval-cheap-source-map',

	entry: [
		path.join( __dirname, './app/index.js' )
	],

	mode: 'development',

	output: {
		...baseConfig.output,
		publicPath: `http://localhost:${port}/dist/`, // eslint-disable-line i18next/no-literal-string
		pathinfo: false,
		filename: 'renderer.dev.js'
	},

	module: {
		...baseConfig.module,
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-react-loader'
				}
			}
		]
	},

	resolve: {
		...baseConfig.resolve,
		alias: {
			...baseConfig.resolve.alias,
			'v8-compile-cache': false,
			'utils/load-requires': false
		},
		fallback: {
			'path': path.resolve( './node_modules/path-browserify' ),
			'stream': path.resolve( './node_modules/stream-browserify' ),
			'os': path.resolve('./node_modules/os-browserify/browser' ),
			'crypto': false,
			'domain': false,
			'fs': false,
			'http': false,
			'https': false
		}
	},

	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false
	},

	plugins: [
		...baseConfig.plugins,
		new ReactRefreshWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin({
			multiStep: true
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	],

	target: 'web',

	devServer: {
		port,
		publicPath,
		compress: true,
		stats: 'errors-only',

		inline: true,
		lazy: false,
		hot: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
		contentBase: path.join( __dirname, 'dist' ),
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
			poll: 1000 // Check for changes every second
		},
		historyApiFallback: {
			verbose: true,
			disableDotRule: false
		},
		overlay: {
			warnings: false,
			errors: true
		}
	}
};


// EXPORTS //

module.exports = config;
