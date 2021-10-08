/* eslint-disable no-process-env */

// MODULES //

import electron, { app, BrowserWindow, Menu } from 'electron';
import Store from 'electron-store';
import path from 'path';
import { performance } from 'perf_hooks';
import { i18n } from './@isle-project/locales/editor.main';
import addCustomTemplates from './app/main/add_custom_templates.js';
import configureMenu from './app/main/configure_menu.js';
import createWindow from './app/main/create_window.js';
import window from './app/main/window_manager.js';
import addRecentFilesMenu from './app/main/add_recent_files_menu.js';
import { enable, initialize } from '@electron/remote/main';


// VARIABLES //

const mainConfig = new Store( 'isle-main' );


// FUNCTIONS //

/**
* Check for application updates and set application menu.
*/
function onReady() {
	console.log( 'Application is ready... (time: '+performance.now()+')' ); // eslint-disable-line no-console

	// Initialize the remote module:
	initialize();

	const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
	const splash = new BrowserWindow({
		width, height, transparent: false, frame: false, alwaysOnTop: true, resizable: false
	});
	enable( splash.webContents );
	const splashscreenPath = path.resolve( __dirname, 'app', 'splashscreen.html' );
	splash.loadURL( 'file://'+splashscreenPath );
	console.log( 'Splashscreen has rendered... (time: '+performance.now()+')' ); // eslint-disable-line no-console

	const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
	const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
	let pathToOpen;
	const len = IS_PACKAGED ? 1 : 2;
	if ( process.env.NODE_ENV === 'production' && process.argv[ len ] ) {
		pathToOpen = process.argv[ len ];
	}
	else if ( mainConfig.has( 'mostRecentFilePath' ) ) {
		pathToOpen = mainConfig.get( 'mostRecentFilePath' );
	}
	createWindow({
		filePath: pathToOpen,
		callback: ( mainWindow ) => {
			console.log( 'Main window has been created... (time: '+performance.now()+')' ); // eslint-disable-line no-console
			splash.destroy();
			function sendStatusToWindow( text ) {
				mainWindow.webContents.send( 'message', text );
			}
			i18n.changeLanguage( i18n.language );

			const { autoUpdater } = require( 'electron-updater' );
			autoUpdater.allowPrerelease = true;
			autoUpdater.autoDownload = false;
			const pkg = require( './package.json' );
			autoUpdater.currentVersion = pkg.version;
			if ( process.env.NODE_ENV === 'production' ) {
				sendStatusToWindow( 'Check for updates and notify if available...' );

				autoUpdater.on( 'checking-for-update', () => {
					sendStatusToWindow( 'Checking for update...' );
				});

				autoUpdater.on( 'update-available', ( info ) => {
					sendStatusToWindow( 'Update available.' );
					mainWindow.webContents.send( 'update-available', info );
				});

				autoUpdater.on( 'update-not-available', ( info ) => {
					sendStatusToWindow( 'Update not available.' );
				});

				autoUpdater.on( 'error', ( err ) => {
					sendStatusToWindow( 'Error in auto-updater. ' + err );
				});

				autoUpdater.on( 'download-progress', ( progress ) => {
					let msg = 'Download speed: ' + progress.bytesPerSecond;
					msg = msg + ' - Downloaded ' + progress.percent + '%';
					msg = msg + ' (' + progress.transferred + '/' + progress.total + ')';
					sendStatusToWindow( msg );
					mainWindow.webContents.send( 'download-progress', progress.percent );
				});

				autoUpdater.on( 'update-downloaded', ( info ) => {
					mainWindow.webContents.send( 'update-downloaded', info );
				});
				autoUpdater.checkForUpdatesAndNotify();
			}
		}
	});

	if ( process.env.NODE_ENV === 'development' ) {
		installExtensions();
	}
	Menu.setApplicationMenu( null );

	i18n.on( 'languageChanged', ( lng ) => {
		mainConfig.set( 'i18nLanguage', lng );

		// Recreate menu when user changes editor language:
		const menuTemplate = configureMenu({ app });
		Menu.setApplicationMenu( Menu.buildFromTemplate( menuTemplate ) );
		addRecentFilesMenu();
		addCustomTemplates();
	});

	async function installExtensions() {
		const { default: installExtension, REACT_DEVELOPER_TOOLS } = require( 'electron-devtools-installer' );
		try {
			const res = await installExtension( REACT_DEVELOPER_TOOLS, {
				loadExtensionOptions: {
					allowFileAccess: true
				}
			});
			console.log( `Added Extension:  ${res}` ); // eslint-disable-line no-console
			return res;
		} catch ( err ) {
			console.log( 'An error occurred: ', err ); // eslint-disable-line no-console
			return null;
		}
	}
}


// MAIN //

/**
* This method will be called when Electron has finished initialization and is ready to create browser windows.
*/
app.on( 'ready', onReady );

// Quit when all windows are closed.
app.on( 'window-all-closed', () => {
	mainConfig.set( 'mostRecentFileData', null );

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
