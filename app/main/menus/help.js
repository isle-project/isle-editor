// MODULES //

import { BrowserWindow } from 'electron';
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
