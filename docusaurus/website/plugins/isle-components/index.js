// MAIN //

const path = require( 'path' );


// VARIABLES //

const resolve = path.resolve;
const basePath = resolve( __dirname, './../../../../' );
const modulePaths = [
	path.join( basePath, '.' ),
	path.join( basePath, 'app' ),
	path.join( basePath, 'node_modules' )
];


// MODULES //

module.exports = function main( context, options ) {
	return {
		name: 'isle-components',
		configureWebpack( config, isServer ) {
			return {
				resolve: {
					modules: modulePaths,
					alias: {
						'@isle-project/components/internal/response-visualizer': 'react-bootstrap/Button'
					}
				},
				node: {
					Buffer: 'mock',
					child_process: 'empty',
					module: 'empty',
					dns: 'mock',
					fs: 'empty',
					net: 'mock',
					tls: 'mock'
				},
				module: {
					rules: [
						{
							test: /\.js$/,
							exclude: [
								/node_modules(?:\/|\\)(?!debug|@iktakahiro(?:\/|\\)markdown-it-katex)/,
								/fonts\.js$/
							],
							loader: 'babel-loader',
							query: {
								plugins: [
									resolve( basePath, './node_modules/@babel/plugin-transform-react-constant-elements' ),
									resolve( basePath, './node_modules/@babel/plugin-transform-react-inline-elements' ),
									resolve( basePath, './node_modules/babel-plugin-transform-react-remove-prop-types' ),
									resolve( basePath, './node_modules/@babel/plugin-transform-react-jsx' ),
									resolve( basePath, './node_modules/@babel/plugin-proposal-class-properties' ),
									resolve( basePath, './node_modules/@babel/plugin-syntax-dynamic-import' ),
									[ resolve( basePath, './node_modules/@babel/plugin-transform-runtime' ), {
										'regenerator': true
									}]
								],
								presets: [
									[ resolve( basePath, './node_modules/@babel/preset-env' ), {
										targets: {
											ie: '11'
										},
										useBuiltIns: 'usage',
										corejs: 2
									}],
									resolve( basePath, './node_modules/@babel/preset-react' )
								],
								babelrc: false,
								cacheDirectory: true,
								overrides: [{
									test: [
										resolve( basePath, './node_modules/debug/**/*.js' ),
										resolve( basePath, './node_modules/@iktakahiro/markdown-it-katex/**/*.js' )
									],
									presets: [
										[ resolve( basePath, './node_modules/@babel/preset-env' ), {
											modules: 'commonjs',
											targets: {
												ie: '11'
											}
										}]
									]
								}]
							}
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
				}
			};
		}
	};
};
