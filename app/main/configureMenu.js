// MENUS //

import file from './menus/file';
import isle from './menus/isle';
import view from './menus/view';


// CONFIGURE MENU //

export default function configureMenu({ app }) {
	const template = process.platform === 'darwin'
		? [ isle({ app }) ]
		: [];
	return [
		...template,
		file,
		view
	];
}
