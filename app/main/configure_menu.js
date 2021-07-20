// MODULES //

import { i18n } from './../../@isle-project/locales/editor.main';
import createEditMenu from './menus/edit';
import createFileMenu from './menus/file';
import createISLE from './menus/isle';
import createViewMenu from './menus/view';
import createHelpMenu from './menus/help';
import createWindowMenu from './menus/window';


// MAIN //

/**
 * Main application menu.
 */
function configureMenu({ app }) {
	const template = process.platform === 'darwin' ? [ createISLE({ app, i18n }) ] : [];
	return [
		...template,
		createFileMenu( i18n ),
		createEditMenu( i18n ),
		createViewMenu( i18n ),
		createWindowMenu( i18n ),
		createHelpMenu( i18n )
	];
}


// EXPORTS //

export default configureMenu;
