/* Adapted from https://github.com/jamiebuilds/react-loadable */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isArray from '@stdlib/assert/is-array';
import noop from '@stdlib/utils/noop';


// VARIABLES //

const LoadableContext = React.createContext({
	report: noop
});
const ALL_INITIALIZERS = [];
const READY_INITIALIZERS = [];


// FUNCTIONS //

function isWebpackReady( getModuleIds ) {
	if ( typeof __webpack_modules__ !== 'object' ) { // eslint-disable-line camelcase
		return false;
	}
	return getModuleIds().every( moduleId => {
		return (
			typeof moduleId !== 'undefined' &&
			typeof __webpack_modules__[moduleId] !== 'undefined' // eslint-disable-line no-undef
		);
	});
}

function load( loader ) {
	let promise = loader();

	let state = {
		loading: true,
		loaded: null,
		error: null
	};

	state.promise = promise.then( loaded => {
		state.loading = false;
		state.loaded = loaded;
		return loaded;
	}).catch( err => {
		state.loading = false;
		state.error = err;
		throw err;
	});

	return state;
}

function resolve( obj ) {
	return obj && obj.__esModule ? obj.default : obj;
}

function render( loaded, props ) {
	return React.createElement( resolve(loaded), props );
}

function createLoadableComponent( loadFn, options ) {
	if ( !options.loading ) {
		throw new Error( 'react-loadable requires a `loading` component' );
	}

	let opts = Object.assign({
		loader: null,
		loading: null,
		delay: 200,
		timeout: null,
		render: render,
		webpack: null,
		modules: null
	}, options );

	let res = null;

	function init() {
		if ( !res ) {
			res = loadFn( opts.loader );
		}
		return res.promise;
	}

	ALL_INITIALIZERS.push( init );

	if ( typeof opts.webpack === 'function' ) {
		READY_INITIALIZERS.push(() => {
			if ( isWebpackReady( opts.webpack ) ) {
				return init();
			}
		});
	}

	return class LoadableComponent extends Component {
		static preload() {
			return init();
		}

		static contextType = LoadableContext;

		constructor( props ) {
			super( props );
			init();

			this.state = {
				error: res.error,
				pastDelay: false,
				timedOut: false,
				loading: res.loading,
				loaded: res.loaded
			};
		}

		componentDidMount() {
			this._mounted = true;
			this._loadModule();
		}

		componentWillUnmount() {
			this._mounted = false;
			this._clearTimeouts();
		}

		_loadModule() {
			const loadable = this.context;
			if ( loadable && isArray( opts.modules ) ) {
				opts.modules.forEach( moduleName => {
					loadable.report( moduleName );
				});
			}

			if ( !res.loading ) {
				return;
			}

			if ( typeof opts.delay === 'number' ) {
				if ( opts.delay === 0 ) {
					this.setState({ pastDelay: true });
				} else {
					this._delay = setTimeout(() => {
						this.setState({ pastDelay: true });
					}, opts.delay);
				}
			}

			if ( typeof opts.timeout === 'number' ) {
				this._timeout = setTimeout(() => {
					this.setState({ timedOut: true });
				}, opts.timeout );
			}

			let update = () => {
				if ( !this._mounted ) {
					return;
				}

				this.setState({
					error: res.error,
					loaded: res.loaded,
					loading: res.loading
				});

				this._clearTimeouts();
			};

			res.promise.then(() => {
				update();
			}).catch(err => {
				update();
				throw err;
			});
		}

		_clearTimeouts() {
			clearTimeout( this._delay );
			clearTimeout( this._timeout );
		}

		retry = () => {
			this.setState({ error: null, loading: true, timedOut: false });
			res = loadFn( opts.loader );
			this._loadModule();
		}

		render() {
			if ( this.state.loading || this.state.error ) {
				return React.createElement( opts.loading, {
					isLoading: this.state.loading,
					pastDelay: this.state.pastDelay,
					timedOut: this.state.timedOut,
					error: this.state.error,
					retry: this.retry
				});
			} else if ( this.state.loaded ) {
				return opts.render( this.state.loaded, this.props );
			}
			return null;
		}
	};
}


// MAIN //

function Loadable( opts ) {
	return createLoadableComponent( load, opts );
}


// EXPORTS //

export default Loadable;
