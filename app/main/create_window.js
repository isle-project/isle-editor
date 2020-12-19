// MODULES //

import path from 'path';
import fs from 'fs';
import logger from 'debug';
import { shell } from 'electron';
import windowStateKeeper from 'electron-window-state';
import window from './window_manager.js';


// VARIABLES //

const debug = logger( 'isle-editor' );


// FUNCTIONS //

function openExternal( e, url ) {
	e.preventDefault();
	shell.openExternal( url );
}


// MAIN //

function createWindow({ filePath, callback, fromTemplate } = {}) {
	/* eslint-disable no-process-env */

	const mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

	const mainWindow = window.createWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		width: mainWindowState.width,
		height: mainWindowState.height,
		minWidth: 850,
		minHeight: 300
	});
	mainWindow.on( 'close', ( event ) => {
		event.preventDefault();
		mainWindow.webContents.send( 'confirm-close-when-unsaved', {
			windowID: mainWindow.id
		});
	});

	let indexPath;
	if ( process.env.NODE_ENV === 'development' ) {
		indexPath = path.resolve( __dirname, '..', 'app.html' );
	} else if ( process.env.NODE_ENV === 'production' ) {
		indexPath = path.resolve( __dirname, 'app', 'app.html' );
	}
	mainWindow.showUrl( indexPath, () => {
		if ( filePath ) {
			debug( `Should create browser window for file ${filePath}.` );
			fs.readFile( filePath, 'utf-8', ( err, file ) => {
				if ( err ) {
					return console.error( `Encountered an error: ${err.message}` ); // eslint-disable-line no-console
				}
				mainWindow.webContents.send( 'file-loaded', {
					file,
					fileName: path.basename( filePath ),
					filePath
				});
				mainWindow.setTitle( 'ISLE Editor -- ' + filePath );
			});
		} else {
			mainWindow.setTitle( 'ISLE Editor -- Untitled Document' );
			if ( fromTemplate ) {
				debug( `Should create browser window for new file based on template ${fromTemplate}.` );
				mainWindow.webContents.send( 'created-from-template', {
					name: fromTemplate
				});
			} else {
				debug( 'Should create browser window for new file.' );
				mainWindow.webContents.send( 'create-new-file' );
			}
		}
		if ( callback ) {
			return callback( mainWindow );
		}
	});

	mainWindowState.manage( mainWindow );
	mainWindow.webContents.on( 'new-window', openExternal );
	mainWindow.webContents.on( 'will-navigate', openExternal );
	return mainWindow;
}


// EXPORTS //

export default createWindow;
