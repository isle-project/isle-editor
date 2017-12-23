// MENUS //

import edit from './menus/edit';
import file from './menus/file';
import isle from './menus/isle';
import view from './menus/view';
import help from './menus/help';
import windowMenu from './menus/window';


// MAIN //

function configureMenu({ app }) {
	const template = process.platform === 'darwin' ? [ isle({ app }) ] : [];
	return [
		...template,
		file,
		edit,
		view,
		windowMenu,
		help
	];
}


// EXPORTS //

export default configureMenu;
