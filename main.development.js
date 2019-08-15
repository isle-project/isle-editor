/* eslint-disable no-process-env */

// MODULES //

import { app, Menu, MenuItem } from 'electron';
import { basename } from 'path';
import Store from 'electron-store';
import * as actions from './app/main/actions.js';
import configureMenu from './app/main/configure_menu.js';
import createWindow from './app/main/create_window.js';
import window from './app/main/window_manager.js';
import { autoUpdater } from 'electron-updater';
import { version as currentVersion } from './package.json';


// VARIABLES //

const config = new Store( 'ISLE' );

let isReady = false;
let pathToOpen;

if ( process.argv[ 2 ] ) {
	pathToOpen = process.argv[ 2 ];
}
else if ( config.has( 'mostRecentPath' ) ) {
	pathToOpen = config.get( 'mostRecentPath' );
}

const recentFiles = config.get( 'recentFiles' ) || [];

autoUpdater.allowPrerelease = true;
autoUpdater.currentVersion = currentVersion;


// FUNCTIONS //

/**
* Check for application updates and set application menu.
*/
function onReady() {
	console.log( 'Application is ready...' ); // eslint-disable-line no-console
	createWindow( pathToOpen, ( mainWindow ) => {
		isReady = true;

		function sendStatusToWindow(text) {
			mainWindow.webContents.send('message', text);
		}

		if ( process.env.NODE_ENV === 'production' ) {
			sendStatusToWindow( 'Check for updates and notify if available...' );

			autoUpdater.on('checking-for-update', () => {
				sendStatusToWindow('Checking for update...');
			});

			autoUpdater.on('update-available', (info) => {
				sendStatusToWindow('Update available.');
			});

			autoUpdater.on('update-not-available', (info) => {
				sendStatusToWindow('Update not available.');
			});

			autoUpdater.on('error', (err) => {
				sendStatusToWindow('Error in auto-updater. ' + err);
			});

			autoUpdater.on('download-progress', (progressObj) => {
				let msg = 'Download speed: ' + progressObj.bytesPerSecond;
				msg = msg + ' - Downloaded ' + progressObj.percent + '%';
				msg = msg + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
				sendStatusToWindow(msg);
			});

			autoUpdater.on('update-downloaded', (info) => {
				sendStatusToWindow('Update downloaded');
			});

			autoUpdater.checkForUpdatesAndNotify();
		}
	});
	Menu.setApplicationMenu( Menu.buildFromTemplate( configureMenu({ app }) ) );
	addRecentFilesMenu();
}

function openRecentFactory( path ) {
	return ( menuItem, browserWindow ) => {
		actions.openFile( path, browserWindow );
	};
}

function addRecentFilesMenu() {
	const currentMenu = Menu.getApplicationMenu();
	let fileMenu = null;
	let recents = null;
	for ( let i = 0; i < currentMenu.items.length; i++ ) {
		const item = currentMenu.items[ i ];
		if ( item.label === 'File' ) {
			fileMenu = currentMenu.items[ i ];
		}
	}
	if ( fileMenu ) {
		for ( let i = 0; i < fileMenu.submenu.items.length; i++ ) {
			const item = fileMenu.submenu.items[ i ];
			if ( item.label === 'Open Recent' ) {
				recents = fileMenu.submenu.items[ i ];
			}
		}
	}
	if ( recents ) {
		for ( let i = 0; i < recentFiles.length; i++ ) {
			const path = recentFiles[ i ];
			const item = new MenuItem({
				label: basename( path ),
				click: openRecentFactory( path )
			});
			recents.submenu.append( item );
		}
		const onClearRecent = () => {
			recents.submenu.clear();
			config.set( 'recentFiles', [] );
		};
		recents.submenu.append( new MenuItem({
			label: 'Clear recently opened',
			click: onClearRecent
		}));
		Menu.setApplicationMenu( currentMenu );
	}
}


// MAIN //

/**
* This method will be called when Electron has finished initialization and is ready to create browser windows.
*/
app.on( 'ready', onReady );

app.on( 'open-file', ( e, path ) => {
	e.preventDefault();
	if ( isReady ) {
		createWindow( path );
	} else {
		pathToOpen = path;
	}
});

// Quit when all windows are closed.
app.on( 'window-all-closed', () => {
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
