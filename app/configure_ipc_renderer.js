// MODULES //

import * as actions from 'actions';
import { ipcRenderer } from 'electron';
import Configstore from 'configstore';


// VARIABLES //

const config = new Configstore( 'ISLE' );


// MAIN //

function configureIpcRenderer( store ) {
	ipcRenderer.on( 'ISLE::file-loaded', ( e, { file, fileName, filePath }) => {
		store.dispatch( actions.convertMarkdown( file ) );
		store.dispatch( actions.fileLoaded({ fileName, filePath }) );
		config.set( 'mostRecentPath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', file );
	});

	ipcRenderer.on( 'hide-toolbar', () => {
		store.dispatch( actions.toggleToolbar() );
	});

	ipcRenderer.on( 'prepare-reload', () => {
		const state = store.getState().markdown;
		const { markdown, filePath, fileName } = state;
		config.set( 'mostRecentPath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', markdown );
	});

	ipcRenderer.on( 'save-file', () => {
		const data = store.getState().markdown.markdown;
		const filePath = store.getState().markdown.filePath;
		if ( !filePath ) {
			ipcRenderer.send( 'save-file-as', {
				data
			});
			return;
		}
		ipcRenderer.send( 'save-file', {
			data,
			filePath
		});
	});

	ipcRenderer.on( 'save-file-as', () => {
		const data = store.getState().markdown.markdown;
		ipcRenderer.send( 'save-file-as', {
			data
		});
	});

	ipcRenderer.on( 'clear-cache', () => {
		config.set( 'mostRecentPath', null );
		config.set( 'mostRecentFileName', null );
		config.set( 'mostRecentFileData', '' );
	});

	window.document.addEventListener( 'dragover', ( e ) => {
		e.preventDefault();
	});
} // end FUNCTION configureIpcRenderer()


// EXPORTS //

export default configureIpcRenderer;
