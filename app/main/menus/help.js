// MODULES //

import { net } from 'electron';
import os from 'os';
import { i18n } from './../../../@isle-project/locales/editor';
import * as actions from './../actions';
import pkg from './../../../package.json';


// MAIN //

const createHelpMenu = () => {
	const out = {
		label: i18n.t('EditorMenu:help'),
		submenu: [
			{
				label: i18n.t('EditorMenu:report-bug'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new?template=bug_report.md' );
				}
			},
			{
				label: i18n.t('EditorMenu:request-new-feature'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new?template=feature_request.md' );
				}
			},
			{
				label: i18n.t('EditorMenu:search-issues'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues' );
				}
			},
			{
				type: 'separator'
			},
			{
				label: i18n.t('EditorMenu:check-for-updates' ),
				click: ( _, browserWindow ) => {
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
							const updateAvailable = newVersion !== pkg.version;
							const msg = updateAvailable ?
								`A new version (${newVersion}) is available for <a href="https://isledocs.com/docs/overview/install" target="_blank" >download</a>.` :
								'There is currently no update available...';
							const html = [
								'<body>',
									'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor Update</h1>',
									`<p>${msg}</p>`,
								'</body>'
							].join( '' );
							actions.showDialog({ browserWindow, message: html });
						});
					});
					request.end();
				}
			},
			{
				label: i18n.t('EditorMenu:about'),
				accelerator: '',
				click: ( _, browserWindow ) => {
					const html = [
						'<body>',
							'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor</h1>',
							`<p><b>Version:</b> ${pkg.version}</p>`,
							`<p><b>Operating System:</b> ${os.type()} ${os.arch()} ${os.release()}</p>`,
						'</body>'
					].join( '' );
					actions.showDialog({ browserWindow, message: html });
				}
			}
		]
	};
	return out;
};


// EXPORTS //

export default createHelpMenu
