/* eslint max-len: 0 */

// MODULES //

const path = require( 'path' );
const { spawn } = require( 'child_process' );
const rspack = require( '@rspack/core' );
const baseConfig = require( './rspack.config.base' );


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

	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false
	},

	plugins: [
		...baseConfig.plugins,
		new rspack.HotModuleReplacementPlugin(),
		new rspack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		})
	],

	target: 'electron-renderer',

	devServer: {
		port,
		compress: true,
		allowedHosts: 'all',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		},
		devMiddleware: {
			stats: 'errors-only',
			publicPath
		},
		hot: true,
		client: false,
		webSocketServer: false,
		static: {
			directory: path.join( __dirname, 'dist' )
		},
		historyApiFallback: {
			verbose: true,
			disableDotRule: false
		},
		setupMiddlewares: (middlewares, devServer) => {
			if ( process.env.START_HOT ) { // eslint-disable-line no-process-env
				console.log( 'Starting Main Process...' ); // eslint-disable-line no-console
				spawn(
					'npm',
					[ 'run', 'start-main-dev' ],
					{
						shell: true,
						env: process.env, // eslint-disable-line no-process-env
						stdio: 'inherit'
					}
				)
					.on( 'close', code => process.exit(code) ) // eslint-disable-line no-process-exit
					.on( 'error', spawnError => console.error(spawnError) ); // eslint-disable-line no-console
			}
			return middlewares;
		}
	}
};


// EXPORTS //

module.exports = config;
