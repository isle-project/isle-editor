// MODULES //

import path from 'path';
import fs from 'fs-extra';
import windowStateKeeper from 'electron-window-state';
import { shell } from 'electron';
import window from './windowManager';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

export default function createWindow( filePath, callback ) {
	debug( `Should create the browser window for file ${filePath}.` );

	const mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

	const mainWindow = window.createWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		width: mainWindowState.width,
		height: mainWindowState.height
	});

	let indexPath;
	if ( process.env.NODE_ENV === 'development' ) {
		indexPath = path.resolve( __dirname, '..', 'app.html' );
	} else if ( process.env.NODE_ENV === 'production' ) {
		indexPath = path.resolve( __dirname, 'app', 'app.html' );
	}

	mainWindow.showUrl( indexPath, () => {
		console.log( "FILE PATH: " + filePath );
		if ( filePath ) {
			fs.readFile( filePath, 'utf-8', ( err, file ) => {
				if ( err ) return;
				mainWindow.webContents.send( 'ISLE::file-loaded', {
					file,
					fileName: path.basename( filePath ),
					filePath
				});
				mainWindow.setTitle( 'ISLE Editor -- ' + filePath );
			});
		} else {
			mainWindow.setTitle( 'ISLE Editor -- Untitled Document' );
		}
		if ( callback ) {
			callback();
		}
	});

	if ( process.env.NODE_ENV === 'development' ) {
		mainWindow.webContents.openDevTools();
	}

	mainWindowState.manage( mainWindow );

	function openExternal( e, url ) {
		e.preventDefault();
		shell.openExternal( url );
	}
	mainWindow.webContents.on( 'new-window', openExternal );
	mainWindow.webContents.on( 'will-navigate', openExternal );
	return mainWindow;
} // end FUNCTION createWindow()
