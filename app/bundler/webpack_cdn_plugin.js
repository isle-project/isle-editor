/**
* MIT License
*
* Copyright (c) Van Nguyen <van@shirotech.com> (https://shirotech.com/)
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this * software and associated documentation files (the "Software"), to deal in the Software * without restriction, including without limitation the rights to use, copy, modify, * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to * permit persons to whom the Software is furnished to do so, subject to the following * conditions:
*
* The above copyright notice and this permission notice shall be included in all copies * or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR * THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
*/

// MODULES //

import path, { resolve, join } from 'path';
import logger from 'debug';
import readJSON from '@stdlib/fs/read-json';
import isArray from '@stdlib/assert/is-array';


// VARIABLES //

const debug = logger( 'bundler:webpack-cdn-plugin' );
const empty = '';
const slash = '/';
const packageJson = 'package.json';
const paramsRegex = /:([a-z]+)/gi;
const DEFAULT_MODULE_KEY = 'defaultCdnModuleKey____';
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const BASE_DIR = IS_PACKAGED ? join( process.resourcesPath, 'app' ) : '.';
const NODE_MODULES_DIR = resolve( BASE_DIR, './node_modules' );


// MAIN //

class WebpackCdnPlugin {
	constructor({
		modules,
		prod,
		prodUrl = 'https://unpkg.com/:name@:version/:path',
		devUrl = ':name/:path',
		publicPath,
		optimize = false,
		crossOrigin = false
	}) {
		this.modules = isArray( modules ) ? { [DEFAULT_MODULE_KEY]: modules } : modules;
		this.prod = prod !== false;
		this.prefix = publicPath;
		this.url = this.prod ? prodUrl : devUrl;
		this.optimize = optimize;
		this.crossOrigin = crossOrigin;
	}

	apply( compiler ) {
		const { output } = compiler.options;
		output.publicPath = output.publicPath || '/';

		if ( output.publicPath.slice(-1) !== slash ) {
			output.publicPath += slash;
		}
		this.prefix = this.prod ? empty : this.prefix || output.publicPath;

		if ( !this.prod && this.prefix.slice(-1) !== slash ) {
			this.prefix += slash;
		}

		const getArgs = [ this.url, this.prefix, this.prod, output.publicPath ];

		compiler.hooks.compilation.tap( 'WebpackCdnPlugin', ( compilation ) => {
			compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync('WebpackCdnPlugin', ( data, callback ) => {
				const moduleId = data.plugin.options.cdnModule;
				if ( moduleId !== false ) {
					let modules = this.modules[moduleId || Reflect.ownKeys(this.modules)[0]];
					if ( modules ) {
						if ( this.optimize ) {
							const usedModules = WebpackCdnPlugin._getUsedModules(compilation);
							modules = modules.filter(p => usedModules[p.name]);
						}
						WebpackCdnPlugin._cleanModules( modules );
						data.assets.js = WebpackCdnPlugin._getJs(modules, ...getArgs).concat(data.assets.js);
						data.assets.css = WebpackCdnPlugin._getCss(modules, ...getArgs).concat(data.assets.css);
					}
				}
				callback( null, data );
			});
		});
		const externals = compiler.options.externals || {};

		Reflect.ownKeys( this.modules ).forEach((key) => {
			const mods = this.modules[key];
			mods.filter((m) => !m.cssOnly).forEach((p) => {
			externals[p.name] = p.var || p.name;
			});
		});

		compiler.options.externals = externals;

		if ( this.prod && this.crossOrigin ) {
			compiler.hooks.afterPlugins.tap('WebpackCdnPlugin', compiler => {
			compiler.hooks.thisCompilation.tap('WebpackCdnPlugin', () => {
				compiler.hooks.compilation.tap('HtmlWebpackPluginHooks', compilation => {
				compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync('WebpackCdnPlugin', this.alterAssetTags.bind(this));
				});
			});
			});
		}
	}

	alterAssetTags( pluginArgs, callback ) {
		const filterTag = tag => {
			const prefix = this.url.split('/:')[0];
			const url = (tag.tagName === 'script' && tag.attributes.src) || (tag.tagName === 'link' && tag.attributes.href);
			return url && url.indexOf(prefix) === 0;
		};
		const processTag = tag => {
			tag.attributes.crossorigin = this.crossOrigin;
		};
		pluginArgs.head.filter(filterTag).forEach(processTag);
		pluginArgs.body.filter(filterTag).forEach(processTag);
		callback(null, pluginArgs);
	}

	/**
	* Returns the version of a package
	*/
	static getVersion(name) {
		try {
			return readJSON.sync( path.join( NODE_MODULES_DIR, name, packageJson ) ).version;
		} catch ( e ) {
			debug( 'Encountered an error: '+e.message );
		}
	}

	/**
	* Returns the list of all modules in the bundle
	*/
	static _getUsedModules(compilation) {
		let usedModules = {};

		compilation.getStats().toJson().chunks.forEach(c => {
			c.modules.forEach(m => {
			m.reasons.forEach(r => {
				usedModules[r.userRequest] = true;
			});
			});
		});

		return usedModules;
	}

	/**
	* - populate the "version" property of each module
	* - construct the "paths" and "styles" arrays
	* - add a default path if none provided
	*/
	static _cleanModules(modules) {
		modules.forEach(p => {
			p.version = p.version || WebpackCdnPlugin.getVersion(p.name);

			if ( !p.paths ) {
				p.paths = [];
			}
			if ( p.path ) {
				p.paths.unshift( p.path );
				p.path = void 0;
			}
			if ( p.paths.length === 0 && !p.cssOnly ) {
				p.paths.push(require.resolve(p.name).match(/[\\/]node_modules[\\/].+?[\\/](.*)/)[1].replace(/\\/g, '/'));
			}
			if ( !p.styles ) {
				p.styles = [];
			}
			if ( p.style ) {
				p.styles.unshift( p.style );
				p.style = void 0;
			}
		});
	}

	/**
	* Returns the list of CSS files for all modules
	* It is the concatenation of "localStyle" and all "styles"
	*/
	static _getCss(modules, url, prefix, prod, publicPath) {
		return WebpackCdnPlugin._get(modules, url, prefix, prod, publicPath, 'styles', 'localStyle');
	}

	/**
	* Returns the list of JS files for all modules
	* It is the concatenation of "localScript" and all "paths"
	*/
	static _getJs(modules, url, prefix, prod, publicPath) {
		return WebpackCdnPlugin._get(modules, url, prefix, prod, publicPath, 'paths', 'localScript');
	}

	/**
	* Generic method to construct the list of files
	*/
	static _get(modules, url, prefix, prod, publicPath, pathsKey, localKey) {
		prefix = prefix || empty;
		prod = prod !== false;

		let files = [];

		modules.filter(p => p[localKey])
			.forEach(p => files.push(publicPath + p[localKey]));

		modules.filter(p => p[pathsKey].length > 0)
			.forEach(p => {
				p[pathsKey].forEach(s => files.push(
					prefix + url.replace(paramsRegex, ( m, p1 ) => {
						if ( prod && p.cdn && p1 === 'alias' ) {
							return p.cdn;
						}
						return p1 === 'path' ? s : p[p1];
					})
				));
			});

		return files;
	}
}


// EXPORTS //

export default WebpackCdnPlugin;
