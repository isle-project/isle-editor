// MODULES //

import { Menu, MenuItem } from 'electron';
import objectKeys from '@stdlib/utils/keys';
import * as actions from './actions.js';
import config from './../store/main.js';


// VARIABLES //

const SUPPLIED_TEMPLATES = [{
	label: 'Data Explorer',
	click: ( menuItem, browserWindow ) => {
		actions.newFromTemplate({
			browserWindow,
			name: 'data-explorer'
		});
	}
},
{
	label: 'Lecture Slides',
	click: ( menuItem, browserWindow ) => {
		actions.newFromTemplate({
			browserWindow,
			name: 'lecture-slides'
		});
	}
},
{
	label: 'Presentation',
	click: ( menuItem, browserWindow ) => {
		actions.newFromTemplate({
			browserWindow,
			name: 'presentation'
		});
	}
},
{
	label: 'Video Lecture',
	click: ( menuItem, browserWindow ) => {
		actions.newFromTemplate({
			browserWindow,
			name: 'video-lecture'
		});
	}
}];


// MAIN //

function addCustomTemplates() {
	const currentMenu = Menu.getApplicationMenu();
	let customTemplates = null;
	let fileMenu = null;

	for ( let i = 0; i < currentMenu.items.length; i++ ) {
		const item = currentMenu.items[ i ];
		if ( item.label === 'File' ) {
			fileMenu = currentMenu.items[ i ];
		}
	}
	if ( fileMenu ) {
		for ( let i = 0; i < fileMenu.submenu.items.length; i++ ) {
			const item = fileMenu.submenu.items[ i ];
			if ( item.label === 'New From Template' ) {
				customTemplates = fileMenu.submenu.items[ i ];
			}
		}
	}
	if ( customTemplates ) {
		customTemplates.submenu.clear();
		SUPPLIED_TEMPLATES.forEach( x => {
			customTemplates.submenu.append( new MenuItem( x ) );
		});
		customTemplates.submenu.append( new MenuItem({
			type: 'separator'
		}) );
		const templates = config.get( 'templates' ) || {};
		const keys = objectKeys( templates );
		for ( let i = 0; i < keys.length; i++ ) {
			const name = keys[ i ];
			const item = new MenuItem({
				label: name,
				click: ( _, browserWindow ) => {
					browserWindow.webContents.send( 'open-template-dialog', {
						name
					});
				}
			});
			customTemplates.submenu.append( item );
		}
		Menu.setApplicationMenu( currentMenu );
	}
}


// EXPORTS //

export default addCustomTemplates;
