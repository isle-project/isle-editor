/*
	Adapted from: https://github.com/jprichardson/electron-window/
*/

// MODULES //

import { BrowserWindow } from 'electron';
import { enable } from '@electron/remote/main';
import * as actions from './actions.js';


// VARIABLES //

// Retain global references, if not, window will be closed automatically when garbage collected...
const _windows = {};
let isAuthenticating = false;


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
			contextIsolation: false,
			partition: 'persist:isle'
		},
		...options
	};
	const window = new BrowserWindow( opts );
	_windows[ window.id ] = window;
	enable( window.webContents );

	const session = window.webContents.session;
	session.webRequest.onBeforeRedirect( authRedirect );
	return window;

	/**
	 * Check redirection for ISLE authentication request and open browser window to authenticate if necessary.
	 *
	 * @private
	 * @param {Object} requestDetails - details of the request
	 */
	function authRedirect( requestDetails ) {
		if ( !isAuthenticating && requestDetails.redirectURL.includes( '/saml-xmw/' ) ) {
			const authWindow = new BrowserWindow({
				width: 800,
				height: 600,
				show: true,
				alwaysOnTop: true,
				webPreferences: {
					partition: 'persist:isle'
				}
			});
			// Remove query string from redirect URL if present
			let redirectURL;
			if ( requestDetails.redirectURL.includes( '?' ) ) {
				redirectURL = requestDetails.redirectURL.split( '?' )[ 0 ];
			} else {
				redirectURL = requestDetails.redirectURL;
			}
			isAuthenticating = true;
			authWindow.loadURL( redirectURL );
			authWindow.removeMenu();

			authWindow.webContents.on( 'will-redirect', ( event, url ) => {
				if ( url.includes( 'saml-xmw' ) || url.includes( 'dashboard' ) ) {
					authWindow.destroy();
					actions.reload( window );
					isAuthenticating = false;
				}
			});

			// On closing `authWindow`, set `isAuthenticating` to `false`:
			authWindow.on( 'close', () => {
				isAuthenticating = false;
			});
		}
	}
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
