// MENUS //

import edit from './menus/edit';
import file from './menus/file';
import isle from './menus/isle';
import view from './menus/view';
import help from './menus/help';
import windowMenu from './menus/window';


// CONFIGURE MENU //

function configureMenu({ app }) {
	const template = process.platform === 'darwin'
		? [ isle({ app }) ]
		: [];
	return [
		...template,
		file,
		edit,
		view,
		windowMenu,
		help
	];
} // end FUNCTION configureMenu()


// EXPORTS //

export default configureMenu;
