/*
	Adapted from: https://github.com/jprichardson/electron-window/
*/

// MODULES //

import { BrowserWindow } from 'electron';
import { enable } from '@electron/remote/main';


// VARIABLES //

// Retain global references, if not, window will be closed automatically when garbage collected...
const _windows = {};


// FUNCTIONS //

/**
* Creates a new browser window.
*
* @private
* @param {Object} options - options for the new window
* @param {boolean} [options.show=false] - whether to show the window
* @param {Object} [options.webPreferences] - options for the new window's web preferences
* @param {boolean} [options.webPreferences.nodeIntegration=true] - whether to enable Node.js integration in the new window
* @param {boolean} [options.webPreferences.webviewTag=true] - whether to enable the `<webview>` tag in the new window
* @param {boolean} [options.webPreferences.worldSafeExecuteJavaScript=true] - whether to enable world safe execute JavaScript in the new window
* @param {boolean} [options.webPreferences.allowRunningInsecureContent=false] - whether to allow running insecure content in the new window
* @param {boolean} [options.webPreferences.contextIsolation=false] - whether to enable context isolation in the new window
* @returns {BrowserWindow} the new window
*/
function _createWindow( options ) {
	const opts = {
		show: false,
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true,
			worldSafeExecuteJavaScript: true,
			allowRunningInsecureContent: false,
			contextIsolation: false
		},
		...options
	};
	const window = new BrowserWindow( opts );
	_windows[ window.id ] = window;
	enable( window.webContents );
	return window;
}

// Should not need to be called directly (just in case window.destroy() is ever called)
function _unref() {
	delete _windows[ this.id ]; // eslint-disable-line @babel/no-invalid-this
}

function _loadUrl( httpOrFileUrl, callback ) {
	const self = this; // eslint-disable-line @babel/no-invalid-this
	self.webContents.once( 'did-finish-load', ( ...args ) => {
		callback( ...args );
	});
	self.loadURL( 'file://' + httpOrFileUrl );
}

function createWindow( options ) {
	const window = _createWindow( options );
	window.unref = _unref.bind( window );
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
}


// MAIN //

const main = {
	createWindow,
	windows: _windows,
	_createWindow,
	_loadUrl,
	_unref
};


// EXPORTS //

export default main;
