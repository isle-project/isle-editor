// MODULES //

import { app, dialog, Menu, MenuItem, shell } from 'electron';
import { basename } from 'path';
import Store from 'electron-store';
import * as actions from './app/main/actions.js';
import configureMenu from './app/main/configure_menu.js';
import createWindow from './app/main/create_window.js';
import window from './app/main/window_manager.js';
import autoUpdater from './app/main/auto_updater.js';


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


// FUNCTIONS //

/**
* Check for application updates and set application menu.
*/
function onReady() {
	console.log( 'Application is ready...' ); // eslint-disable-line no-console
	createWindow( pathToOpen, () => {
		isReady = true;
		autoUpdater( ( err, newVersion ) => {
			if ( err ) return;
			const confirm = dialog.showMessageBox({
				type: 'info',
				title: 'Update available',
				message: `A new version (${newVersion}) of the ISLE Editor is available.`,
				detail: 'Do you want to download it now?',
				buttons: [ 'Yes', 'No' ]
			});
			if ( confirm === 0 ) {
				shell.openExternal( 'https://github.com/isle-project/isle-editor/releases' );
			}
		});
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
	const recents = currentMenu.items[ 0 ].submenu.items[ 6 ];

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
