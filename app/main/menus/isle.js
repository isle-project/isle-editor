// MODULES //

import { i18n } from './../../../@isle-project/locales/editor';


// EXPORTS //

export default function isleMenu({ app }) {
	return {
		label: 'ISLE',
		submenu: [ {
			label: i18n.t('EditorMenu:about-isle'),
			role: 'about'
		}, {
			type: 'separator'
		}, {
			label: i18n.t('EditorMenu:services'),
			role: 'services',
			submenu: []
		}, {
			type: 'separator'
		}, {
			label: i18n.t('EditorMenu:hide-isle'),
			accelerator: 'Command+H',
			role: 'hide'
		}, {
			label: i18n.t('EditorMenu:hide-others'),
			accelerator: 'Command+Alt+H',
			role: 'hideothers'
		}, {
			label: i18n.t('EditorMenu:show-all'),
			role: 'unhide'
		}, {
			type: 'separator'
		}, {
			label: i18n.t('EditorMenu:quit'),
			accelerator: 'Command+Q',
			click: app.quit
		} ]
	};
}
