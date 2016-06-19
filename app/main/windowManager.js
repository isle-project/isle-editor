// from https://github.com/jprichardson/electron-window/
import { BrowserWindow } from 'electron';

// retain global references, if not, window will be closed automatically when
// garbage collected
const _windows = {};

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
}


// should not need to be called directly, but just in case
// window.destroy() is ever called
function _unref() {
	delete _windows[ this.id ];
}


function _loadUrl( httpOrFileUrl, callback ) {
	const win = this;
	win.webContents.once( 'did-finish-load', ( ...args ) => {
		callback( ...args );
	});
	win.loadURL( 'file://' + httpOrFileUrl );
}


function createWindow( options ) {
	const window = _createWindow( options );
	window.unref = _unref.bind( window );
	window.once( 'close', window.unref );
	window._loadUrl = _loadUrl.bind( window );

	window.showUrl = ( httpOrFileUrl, callback ) => {
		window._loadUrl( httpOrFileUrl, ( ...args ) => {
			window.show();
			if ( callback ) {
				callback( ...args );
			}
		});
	};

	return window;
}


// EXPORTS //

module.exports = {
	createWindow,
	windows: _windows,
	_createWindow,
	_loadUrl,
	_unref
};
