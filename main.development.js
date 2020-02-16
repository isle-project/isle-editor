/* eslint-disable no-process-env */

// MODULES //

import { app, Menu } from 'electron';
import Store from 'electron-store';
import configureMenu from './app/main/configure_menu.js';
import createWindow from './app/main/create_window.js';
import window from './app/main/window_manager.js';
import { autoUpdater } from 'electron-updater';
import { version as currentVersion } from './package.json';
import addRecentFilesMenu from './app/main/add_recent_files_menu.js';
import addCustomTemplates from './app/main/add_custom_templates.js';


// VARIABLES //

const config = new Store( 'ISLE' );
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );

let pathToOpen;
const len = IS_PACKAGED ? 1 : 2;
if ( process.env.NODE_ENV === 'production' && process.argv[ len ] ) {
	pathToOpen = process.argv[ len ];
}
else if ( config.has( 'mostRecentFilePath' ) ) {
	pathToOpen = config.get( 'mostRecentFilePath' );
}
autoUpdater.allowPrerelease = true;
autoUpdater.currentVersion = currentVersion;


// FUNCTIONS //

/**
* Check for application updates and set application menu.
*/
function onReady() {
	console.log( 'Application is ready...' ); // eslint-disable-line no-console
	createWindow({
		filePath: pathToOpen,
		callback: ( mainWindow ) => {
			function sendStatusToWindow( text ) {
				mainWindow.webContents.send( 'message', text );
			}

			if ( process.env.NODE_ENV === 'production' ) {
				sendStatusToWindow( 'Check for updates and notify if available...' );

				autoUpdater.on( 'checking-for-update', () => {
					sendStatusToWindow('Checking for update...');
				});

				autoUpdater.on( 'update-available', ( info ) => {
					sendStatusToWindow( 'Update available.' );
				});

				autoUpdater.on( 'update-not-available', ( info ) => {
					sendStatusToWindow( 'Update not available.' );
				});

				autoUpdater.on( 'error', ( err ) => {
					sendStatusToWindow( 'Error in auto-updater. ' + err );
				});

				autoUpdater.on( 'download-progress', ( progressObj ) => {
					let msg = 'Download speed: ' + progressObj.bytesPerSecond;
					msg = msg + ' - Downloaded ' + progressObj.percent + '%';
					msg = msg + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
					sendStatusToWindow( msg );
				});

				autoUpdater.on( 'update-downloaded', ( info ) => {
					sendStatusToWindow( 'Update downloaded' );
				});
				autoUpdater.checkForUpdatesAndNotify();
			}
		}
	});
	Menu.setApplicationMenu( Menu.buildFromTemplate( configureMenu({ app }) ) );
	addRecentFilesMenu();
	addCustomTemplates();
}


// MAIN //

/**
* This method will be called when Electron has finished initialization and is ready to create browser windows.
*/
app.on( 'ready', onReady );

// Quit when all windows are closed.
app.on( 'window-all-closed', () => {
	config.set( 'mostRecentFileData', null );

	// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
	if ( process.platform !== 'darwin' ) {
		app.quit();
	}
});

app.on( 'activate', () => {
	// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
	if ( Object.keys( window.windows ).length === 0 ) {
		createWindow();
	}
});

app.on( 'browser-window-created', ( e, browserWindow ) => {
	console.log( 'Browser window created...' ); // eslint-disable-line no-console
});
