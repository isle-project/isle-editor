// MODULES //

import { i18n } from './../../../@isle-project/locales/editor';
import * as actions from './../actions';
import electronStore from './../../store/electron.js';


// MAIN //

const createFileMenu = () => {
	return {
		label: i18n.t('EditorMenu:file'),
		submenu: [ {
			label: i18n.t('EditorMenu:new-file'),
			accelerator: 'CmdOrCtrl+N',
			click: ( menuItem, browserWindow ) => {
				actions.newFile({ browserWindow });
			}
		},
		{
			label: i18n.t('EditorMenu:new-from-template'),
			submenu: []
		},
		{
			label: i18n.t('EditorMenu:open-file'),
			accelerator: 'CmdOrCtrl+O',
			click: ( menuItem, browserWindow ) => {
				actions.open({ browserWindow });
			}
		},
		{
			type: 'separator'
		},
		{
			label: i18n.t('EditorMenu:save-file'),
			accelerator: 'CmdOrCtrl+S',
			click: ( menuItem, browserWindow ) => {
				actions.save({ browserWindow });
			}
		},
		{
			label: i18n.t('EditorMenu:save-file-as'),
			accelerator: 'Shift+CmdOrCtrl+S',
			click: ( menuItem, browserWindow ) => {
				actions.saveAs({ browserWindow });
			}
		},
		{
			type: 'separator'
		},
		{
			label: i18n.t('EditorMenu:create-template'),
			submenu: [
				{
					label: i18n.t('EditorMenu:create-template-with-preamble'),
					click: ( menuItem, browserWindow ) => {
						actions.createTemplate({ browserWindow, includePreamble: true });
					}
				},
				{
					label: i18n.t('EditorMenu:create-template-without-preamble'),
					click: ( menuItem, browserWindow ) => {
						actions.createTemplate({ browserWindow, includePreamble: false });
					}
				},
				{
					label: i18n.t('EditorMenu:import-from-gist'),
					click: ( menuItem, browserWindow ) => {
						const hasToken = electronStore.has( 'githubAccessToken' );
						if ( !hasToken ) {
							return actions.showDialog({
								browserWindow,
								message: i18n.t('please-connect-to-github')
							});
						}
						actions.importTemplatesFromGist({ browserWindow });
					}
				}
			]
		},
		{
			label: i18n.t('EditorMenu:open-recent'),
			submenu: []
		},
		{
			type: 'separator'
		},
		{
			label: i18n.t('EditorMenu:quit'),
			accelerator: 'CmdOrCtrl+Q',
			click: ( menuItem, browserWindow ) => {
				actions.startClosingApp({ browserWindow });
			}
		} ]
	};
};


// EXPORTS //

export default createFileMenu;
