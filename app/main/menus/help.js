// MODULES //

import { BrowserWindow, net } from 'electron';
import semver from 'semver';
import os from 'os';
import * as actions from './../actions';
import { version as currentVersion } from './../../../package.json';


// EXPORTS //

export default {
	label: 'Help',
	submenu: [
		{
			label: 'Report issue',
			accelerator: '',
			click: () => {
				actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new' );
			}
		},
		{
			label: 'Search issues',
			accelerator: '',
			click: () => {
				actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues' );
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Check for updates...',
			click: () => {
				const request = net.request({
					method: 'GET',
					url: 'https://raw.githubusercontent.com/planeshifter/isle-editor/master/package.json'
				});
				request.on( 'response', response => {
					let body = '';
					response.on( 'data', ( chunk ) => {
						body += chunk;
					});
					request.on( 'error', error => console.error( error ) ); // eslint-disable-line
					response.on( 'end', () => {
						const json = JSON.parse( body );
						const newVersion = json.version;
						const updateAvailable = semver.gt( newVersion, currentVersion );
						const win = new BrowserWindow({
							modal: true,
							resizable: false,
							center: true,
							title: 'ISLE Editor',
							height: 200,
							width: 300
						});
						win.setMenuBarVisibility( false ); // account for Linux bug, see: https://github.com/electron/electron/issues/15901#issuecomment-473773527
						win.removeMenu();
						const msg = updateAvailable ?
							`A new version (${newVersion}) is available for <a href="https://isledocs.com/docs/overview/install" target="_blank" >download</a>.` :
							'There is currently no update available...';
						const html = [
							'<body>',
								'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor Update</h1>',
								`<p>${msg}</p>`,
							'</body>'
						].join( '' );
						win.loadURL( 'data:text/html;charset=utf-8,' + encodeURI( html ) );
					});
				});
				request.end();
			}
		},
		{
			label: 'About',
			accelerator: '',
			click: () => {
				const win = new BrowserWindow({
					modal: true,
					resizable: false,
					center: true,
					title: 'ISLE Editor',
					height: 300,
					width: 300
				});
				win.setMenuBarVisibility( false ); // account for Linux bug, see: https://github.com/electron/electron/issues/15901#issuecomment-473773527
				win.removeMenu();
				const html = [
					'<body>',
						'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor</h1>',
						`<p><b>Version:</b> ${currentVersion}</p>`,
						`<p><b>Operating System:</b> ${os.type()} ${os.arch()} ${os.release()}</p>`,
					'</body>'
				].join( '' );
				win.loadURL( 'data:text/html;charset=utf-8,' + encodeURI( html ) );
			}
		}
	]
};
