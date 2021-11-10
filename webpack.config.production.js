// MODULES //

const webpack = require( 'webpack' );
const path = require( 'path' );
const esbuild = require( 'esbuild' );
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' );
const { ESBuildMinifyPlugin } = require( 'esbuild-loader' );
const baseConfig = require( './webpack.config.base' );


// VARIABLES //

const smp = new SpeedMeasurePlugin({
	granularLoaderData: false,
	disable: !process.env.MEASURE // eslint-disable-line no-process-env
});


// MAIN //

const config = {
	...baseConfig,

	devtool: 'cheap-source-map',

	entry: {
		index: './app/index'
	},

	output: {
		...baseConfig.output,
		publicPath: '../dist/',
		filename: 'renderer.prod.js',
		chunkFilename: '[name].bundle.js'
	},

	optimization: {
		minimize: true,
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'esnext',
				implementation: esbuild
			})
		]
	},

	module: {
		...baseConfig.module,

		rules: [
			{
				test: /.js$/,
				use: [
					{
						loader: 'esbuild-loader',
						options: {
							loader: 'jsx',
							target: 'esnext',
							implementation: esbuild,
							legalComments: 'none'
						}
					}
				],
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' ),
					path.join( __dirname, '@isle-project' )
				]
			},
			{
				test: /\.txt$/,
				type: 'asset/source'
			},
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-react-loader'
				}
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
				type: 'asset/resource'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],

	stats: {
		warnings: false
	},

	target: 'electron-renderer'
};


// EXPORTS //

module.exports = smp.wrap( config );
