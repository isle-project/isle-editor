/*
	Adapted from: https://github.com/jprichardson/electron-window/
*/

// MODULES //

import { BrowserWindow } from 'electron';


// VARIABLES //

// Retain global references, if not, window will be closed automatically when garbage collected...
const _windows = {};


// FUNCTIONS //

function _createWindow( options ) {
	const opts = {
		... {
			show: false
		},
		...options
	};
	const window = new BrowserWindow( opts );
	_windows[ window.id ] = window;

	return window;
} // end FUNCTION _createWindow()


// Should not need to be called directly (just in case window.destroy() is ever called)
function _unref() {
	delete _windows[ this.id ];
} // end FUNCTION _unref()

function _loadUrl( httpOrFileUrl, callback ) {
	const self = this;
	self.webContents.once( 'did-finish-load', ( ...args ) => {
		callback( ...args );
	});
	self.loadURL( 'file://' + httpOrFileUrl );
} // end FUNCTION _loadUrl()

function createWindow( options ) {
	const window = _createWindow( options );
	window.unref = _unref.bind( window );
	window.once( 'close', window.unref );
	window._loadUrl = _loadUrl.bind( window );

	window.showUrl = ( httpOrFileUrl, callback ) => {
		window._loadUrl( httpOrFileUrl, ( ...args ) => {
			window.show();
			if ( callback ) {
				return callback( ...args );
			}
		});
	};
	return window;
} // end FUNCTION createWindow()


// EXPORTS //

module.exports = {
	createWindow,
	windows: _windows,
	_createWindow,
	_loadUrl,
	_unref
};
