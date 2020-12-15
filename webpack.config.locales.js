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
		]
	},
	entry: {
		locales: [
			'@isle-project/locales'
		]
	},
	output: {
		path: join( __dirname, '@isle-project', 'locales', 'dist' ),
		filename: 'dll.[name].js',
		library: '[name]_dll',
		publicPath: 'https://cdn.jsdelivr.net/npm/@isle-project/locales@0.0.0/dist/'
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
			path: join( __dirname, '@isle-project', 'locales', '[name]-manifest.json' ),
			name: '[name]_dll'
		})
	],
	externals: {
		'i18next': 'i18next'
	}
};


// EXPORTS //

module.exports = config;
