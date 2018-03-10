/* eslint max-len: 0 */

// MODULES //

import path from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
import baseConfig from './webpack.config.base';


// VARIABLES //

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;


// MAIN //

const config = {
	...baseConfig,
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'react-hot-loader/patch',
		`webpack-dev-server/client?http://localhost:${port}/`,
		'webpack/hot/only-dev-server',
		path.join( __dirname, './app/index.js' )
	],

	output: {
		...baseConfig.output,
		publicPath: `http://localhost:${port}/dist/`,
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

	target: 'electron-renderer',

	devServer: {
		port,
		publicPath,
		compress: true,
		noInfo: false,
		stats: 'errors-only',
		inline: true,
		lazy: false,
		hot: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
		contentBase: path.join( __dirname, 'dist' ),
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
			poll: 100
		},
		historyApiFallback: {
			verbose: true,
			disableDotRule: false
		},
		before() {
			if ( process.env.START_HOT ) {
				console.log('Starting Main Process...');
				spawn(
					'npm',
					[ 'run', 'start-main-dev' ],
					{ shell: true, env: process.env, stdio: 'inherit' }
				)
					.on( 'close', code => process.exit(code) )
					.on( 'error', spawnError => console.error(spawnError) );
			}
		}
	}
};


// EXPORTS //

export default config;
