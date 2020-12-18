// MODULES //

import { i18n } from './../../../@isle-project/locales/editor';


// MAIN //

const createWindowMenu = () => {
	return {
		label: i18n.t('EditorMenu:window'),
		role: 'window',
		submenu: [
			{
				label: i18n.t('EditorMenu:minimize'),
				accelerator: 'CmdOrCtrl+M',
				role: 'minimize'
			},
			{
				label: i18n.t('EditorMenu:close'),
				accelerator: 'CmdOrCtrl+W',
				role: 'close'
			}
		]
	};
};


// EXPORTS //

export default createWindowMenu;
