// MODULES //

import i18next from 'i18next';
import * as actions from './../actions';


// VIEW MENU //

const viewMenu = {
	label: i18next.t('view'),
	submenu: [
		{
			label: i18next.t('reload'),
			accelerator: 'CmdOrCtrl+R',
			click( item, focusedWindow ) {
				actions.reload( focusedWindow );
			}
		},
		{
			label: i18next.t('toggle-toolbar'),
			accelerator: 'CmdOrCtrl+T',
			click( item, focusedWindow ) {
				actions.hideToolbar( focusedWindow );
			}
		},
		{
			label: i18next.t('toggle-developer-tools'),
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
			label: i18next.t('toggle-full-screen'),
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
	viewMenu.submenu.push({
		type: 'separator'
	}, {
		label: i18next.t('bring-all-to-front'),
		role: 'front'
	});
}


// EXPORTS //

export default viewMenu;
