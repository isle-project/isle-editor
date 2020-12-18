// MODULES //

import { i18n } from './../../../@isle-project/locales/editor';
import * as actions from './../actions';


// VIEW MENU //

const createViewMenu = () => {
	const out = {
		label: i18n.t('EditorMenu:view'),
		submenu: [
			{
				label: i18n.t('EditorMenu:reload'),
				accelerator: 'CmdOrCtrl+R',
				click( item, focusedWindow ) {
					actions.reload( focusedWindow );
				}
			},
			{
				label: i18n.t('EditorMenu:toggle-toolbar'),
				accelerator: 'CmdOrCtrl+T',
				click( item, focusedWindow ) {
					actions.hideToolbar( focusedWindow );
				}
			},
			{
				label: i18n.t('EditorMenu:toggle-developer-tools'),
				accelerator: ( function getAccelerator() {
					if ( process.platform === 'darwin' ) {
						return 'Alt+Command+I';
					}
					return 'Ctrl+Shift+I';
				} )(),
				click( item, focusedWindow ) {
					if ( focusedWindow ) {
						focusedWindow.webContents.toggleDevTools();
					}
				}
			},
			{
				label: i18n.t('EditorMenu:toggle-full-screen'),
				accelerator: ( function getAccelerator() {
					if ( process.platform === 'darwin' ) {
						return 'Ctrl+Command+F';
					}
					return 'F11';
				} )(),
				click( item, focusedWindow ) {
					if ( focusedWindow ) {
						focusedWindow.setFullScreen( !focusedWindow.isFullScreen() );
					}
				}
			}
		]
	};
	if ( process.platform === 'darwin' ) {
		out.submenu.push({
			type: 'separator'
		}, {
			label: i18n.t('EditorMenu:bring-all-to-front'),
			role: 'front'
		});
	}
	return out;
};


// EXPORTS //

export default createViewMenu;
