// MODULES //

import { app, dialog, Menu, shell } from 'electron';
import configureMenu from './app/main/configureMenu';
import createWindow from './app/main/createWindow';
import window from './app/main/windowManager';
import autoUpdater from './app/main/autoUpdater';


// VARIABLES //

let isReady = false;
let pathToOpen;


// ONREADY //

/**
* Check for application updates and set application menu.
*/
function onReady() {
	createWindow( pathToOpen, () => {
		isReady = true;
		autoUpdater( ( err, newVersion ) => {
			if ( err ) return;
			const confirm = dialog.showMessageBox({
				type: 'info',
				title: 'Update available',
				message: `A new version (${newVersion}) of Marky is available.`,
				detail: 'Do you want to download it now?',
				buttons: ['Yes', 'No']
			});
			if ( confirm === 0 ) {
				shell.openExternal( 'https://github.com/vesparny/marky/releases' );
			}
		});
	});
	Menu.setApplicationMenu( Menu.buildFromTemplate( configureMenu({ app }) ) );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
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
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if ( process.platform !== 'darwin' ) {
		app.quit();
	}
});

app.on( 'activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if ( Object.keys( window.windows ).length === 0 ) {
		createWindow();
	}
});
