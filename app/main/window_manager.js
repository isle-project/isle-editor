/*
	Adapted from: https://github.com/jprichardson/electron-window/
*/

// MODULES //

import { BrowserWindow } from 'electron';
import remoteMain from '@electron/remote/main';


// VARIABLES //

// Retain global references, if not, window will be closed automatically when garbage collected...
const _windows = {};


// FUNCTIONS //

function _createWindow( options ) {
	const opts = {
		show: false,
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true,
			worldSafeExecuteJavaScript: true,
			allowRunningInsecureContent: true,
			contextIsolation: false
		},
		...options
	};
	const window = new BrowserWindow( opts );
	_windows[ window.id ] = window;
	remoteMain.enable( window.webContents );
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
