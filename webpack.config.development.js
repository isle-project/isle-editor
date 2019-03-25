/* eslint max-len: 0 */

// MODULES //

import path from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import baseConfig from './webpack.config.base';


// VARIABLES //

const smp = new SpeedMeasurePlugin({
	granularLoaderData: false,
	disable: !process.env.MEASURE // eslint-disable-line no-process-env
});
const port = process.env.PORT || 1212; // eslint-disable-line no-process-env
const publicPath = `http://localhost:${port}/dist`;


// MAIN //

const config = smp.wrap({
	...baseConfig,
	devtool: 'eval',

	entry: [
		`webpack-dev-server/client?http://localhost:${port}/`,
		'webpack/hot/only-dev-server',
		path.join( __dirname, './app/index.js' )
	],

	mode: 'development',

	output: {
		...baseConfig.output,
		publicPath: `http://localhost:${port}/dist/`,
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
		new webpack.HotModuleReplacementPlugin({
			multiStep: true
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
		new HardSourceWebpackPlugin()
	],

	target: 'electron-renderer',

	devServer: {
		port,
		publicPath,
		compress: true,
		noInfo: true,
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
		before() {
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
		}
	}
});


// EXPORTS //

export default config;
