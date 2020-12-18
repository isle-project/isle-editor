// MODULES //

import { addResources } from './../../@isle-project/locales/editor';
import createEditMenu from './menus/edit';
import createFileMenu from './menus/file';
import createISLE from './menus/isle';
import createViewMenu from './menus/view';
import createHelpMenu from './menus/help';
import createWindowMenu from './menus/window';


// VARIABLES //

addResources( 'EditorMenu' );


// MAIN //

function configureMenu({ app }) {
	const template = process.platform === 'darwin' ? [ createISLE({ app }) ] : [];
	return [
		...template,
		createFileMenu(),
		createEditMenu(),
		createViewMenu(),
		createWindowMenu(),
		createHelpMenu()
	];
}


// EXPORTS //

export default configureMenu;
