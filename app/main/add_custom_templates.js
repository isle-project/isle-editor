// MODULES //

import { Menu, MenuItem } from 'electron';
import { i18n } from './../../@isle-project/locales/editor.main';
import * as actions from './actions.js';
import config from './../store/main.js';
import electronStore from './../store/electron.js';


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

/**
 * Add custom templates to the application menu.
 */
function addCustomTemplates() {
	const currentMenu = Menu.getApplicationMenu();
	let customTemplates = null;
	let fileMenu = null;

	for ( let i = 0; i < currentMenu.items.length; i++ ) {
		const item = currentMenu.items[ i ];
		if ( item.label === i18n.t('file') ) {
			fileMenu = currentMenu.items[ i ];
		}
	}
	if ( fileMenu ) {
		for ( let i = 0; i < fileMenu.submenu.items.length; i++ ) {
			const item = fileMenu.submenu.items[ i ];
			if ( item.label === i18n.t('new-from-template') ) {
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
		const keys = Object.keys( templates );
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

		customTemplates.submenu.append( new MenuItem({
			type: 'separator'
		}) );
		const item = new MenuItem({
			label: 'Upload custom templates to Gist',
			click: ( _, browserWindow ) => {
				const hasToken = electronStore.has( 'githubAccessToken' );
				if ( !hasToken ) {
					return actions.showDialog({
						browserWindow,
						message: 'Please link to your GitHub account in order to use this feature,'
					});
				}
				browserWindow.webContents.send( 'upload-custom-templates', {
					templates
				});
			}
		});
		customTemplates.submenu.append( item );

		Menu.setApplicationMenu( currentMenu );
	}
}


// EXPORTS //

export default addCustomTemplates;
