// MODULES //

import { dialog, ipcMain, BrowserWindow } from 'electron';
import fs from 'fs-extra';
import { extname, basename } from 'path';
import { EXTENSIONS } from './globals.js';
import createWindow from './createWindow';
import { exec } from 'child_process';


// MAIN //

ipcMain.on( 'save-file', ( e, { data, filePath }) => {
	fs.writeFile( filePath, data, 'utf-8', ( err ) => {
		if ( err ) {
			return;
		}
		e.sender.send( 'ISLE::file-loaded', {
			fileName: basename( filePath ),
			filePath: filePath,
			file: data
		});
	});
});

function openFile( filePath, browserWindow ) {
	if (
		EXTENSIONS.indexOf( extname( filePath )
			.slice( 1 )
			.toLowerCase()
		) !== -1 ||
		!extname( filePath )
	) {
		const fileSize = fs.statSync( filePath )[ 'size' ];
		if ( fileSize >= 1048576 ) { // 1MB
			const confirm = dialog.showMessageBox( browserWindow, {
				type: 'error',
				title: 'Unsupported File',
				message: 'You are trying to load a large file, ISLE Editor will be unresponsive',
				detail: 'Do you still want to load this file?',
				buttons: [ 'Proceed', 'Cancel' ]
			});
			if ( confirm === 1 ) return;
		}

		fs.readFile( filePath, 'utf-8', ( err ) => {
			if ( err ) {
				return err;
			}
			createWindow( filePath );
		});
		return;
	}
	dialog.showMessageBox( browserWindow, {
		type: 'error',
		title: 'Unsupported File',
		message: 'You are trying to load a not supported file',
		detail: 'The supported file extensions are \n\n' + EXTENSIONS.join( ' ,' ),
		buttons: [ 'Ok' ]
	});
}

ipcMain.on( 'save-file-as', ( e, { data }) => {
	dialog.showSaveDialog({}, ( filePath ) => {
		if ( filePath ) {
			fs.writeFile( filePath, data, 'utf-8', ( err ) => {
				if ( err ) {
					return;
				}
				BrowserWindow.fromWebContents( e.sender ).setTitle( `ISLE -- ${filePath}` );
				e.sender.send( 'ISLE::file-loaded', {
					fileName: basename( filePath ),
					filePath: filePath,
					file: data
				});
			});
		}
	});
});


// EXPORTS //

export function hideToolbar( browserWindow ) {
	if ( browserWindow ) {
		browserWindow.webContents.send( 'hide-toolbar' );
	}
}

export function openBrowser( url ) {
	console.log( `Should open ${url} in the default browser...` ); // eslint-disable-line no-console
	exec( 'xdg-open ' + url );
}

export function open({ browserWindow }) {
	dialog.showOpenDialog( browserWindow, {
		properties: [ 'openFile' ],
		filters: [
			{ name: 'isle', extensions: [ 'isle' ]},
			{ name: 'markdown', extensions: [ 'markdown', 'md', 'mdown', 'mkd', 'mdwn' ]},
			{ name: 'html', extensions: [ 'html' ]}
		]
	}, ( fileNames ) => {
		if ( fileNames === void 0 ) {
			return;
		}
		openFile( fileNames[ 0 ], browserWindow );
	});
}

export function reload( browserWindow ) {
	if ( browserWindow ) {
		browserWindow.webContents.send( 'prepare-reload' );
		browserWindow.reload();
	}
}

export function save({ browserWindow }) {
	browserWindow.webContents.send( 'save-file' );
}

export function saveAs({ browserWindow }) {
	browserWindow.webContents.send( 'save-file-as' );
}

export function newFile({ browserWindow }) {
	browserWindow.webContents.send( 'clear-cache' );
	createWindow();
}

export function closeApp({ browserWindow }) {
	console.log( 'Should close browser window...' ); // eslint-disable-line no-console
	browserWindow.close();
}
