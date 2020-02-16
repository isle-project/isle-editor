// MODULES //

import { Menu, MenuItem } from 'electron';
import Store from 'electron-store';
import { basename } from 'path';
import * as actions from './actions.js';


// VARIABLES //

const config = new Store( 'ISLE' );
const recentFiles = config.get( 'recentFiles' ) || [];


// FUNCTIONS //

function openRecentFactory( path ) {
	return ( menuItem, browserWindow ) => {
		actions.openFile( path, browserWindow );
	};
}

function addRecentFilesMenu() {
	const currentMenu = Menu.getApplicationMenu();
	let fileMenu = null;
	let recents = null;
	for ( let i = 0; i < currentMenu.items.length; i++ ) {
		const item = currentMenu.items[ i ];
		if ( item.label === 'File' ) {
			fileMenu = currentMenu.items[ i ];
		}
	}
	if ( fileMenu ) {
		for ( let i = 0; i < fileMenu.submenu.items.length; i++ ) {
			const item = fileMenu.submenu.items[ i ];
			if ( item.label === 'Open Recent' ) {
				recents = fileMenu.submenu.items[ i ];
			}
		}
	}
	if ( recents ) {
		for ( let i = 0; i < recentFiles.length; i++ ) {
			const path = recentFiles[ i ];
			const item = new MenuItem({
				label: basename( path ),
				click: openRecentFactory( path )
			});
			recents.submenu.append( item );
		}
		const onClearRecent = () => {
			recents.submenu.clear();
			config.set( 'recentFiles', [] );
		};
		recents.submenu.append( new MenuItem({
			label: 'Clear recently opened',
			click: onClearRecent
		}));
		Menu.setApplicationMenu( currentMenu );
	}
}


// EXPORTS //

export default addRecentFilesMenu;
