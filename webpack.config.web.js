/* eslint max-len: 0 */

// MODULES //

const path = require( 'path' );
const webpack = require( 'webpack' );
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
		compress: true,
		devMiddleware: {
			stats: 'errors-only',
			publicPath
		},
		firewall: false,
		hot: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
		static: {
			directory: path.join( __dirname, 'dist' )
		},
		historyApiFallback: {
			verbose: true,
			disableDotRule: false
		},
		client: {
			overlay: {
				warnings: false,
				errors: true
			}
		}
	}
};


// EXPORTS //

module.exports = config;
