// MODULES //

import * as actions from 'actions';
import { ipcRenderer } from 'electron';
import Store from 'electron-store';
import replace from '@stdlib/string/replace';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle-editor' );
const config = new Store( 'ISLE' );


// MAIN //

function configureIpcRenderer( store ) {
	ipcRenderer.on( 'ISLE::file-loaded', ( e, { file, fileName, filePath }) => {
		debug( 'Loaded file: '+ filePath );
		store.dispatch( actions.fileLoaded({ fileName, filePath }) );
		store.dispatch( actions.convertMarkdown( file ) );

		let preambleText = file.match( /---([\S\s]*)---/ );
		if ( preambleText ) {
			// Extract the capture group:
			preambleText = preambleText[ 1 ];
			preambleText = replace( preambleText, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
			import( 'js-yaml' ).then( yaml => {
				const preamble = yaml.load( preambleText );
				store.dispatch( actions.updatePreamble({
					preamble,
					preambleText
				}) );
				config.set( 'mostRecentPreamble', preamble );
				config.set( 'mostRecentPreambleText', preambleText );
			});
		}
		config.set( 'mostRecentFilePath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', file );
	});

	ipcRenderer.on( 'hide-toolbar', () => {
		store.dispatch( actions.toggleToolbar() );
	});

	ipcRenderer.on( 'prepare-reload', () => {
		const state = store.getState().markdown;
		const { markdown, filePath, fileName, preamble, preambleText } = state;
		config.set( 'mostRecentFilePath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', markdown );
		config.set( 'mostRecentPreamble', preamble );
		config.set( 'mostRecentPreambleText', preambleText );
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
		config.set( 'mostRecentFilePath', null );
		config.set( 'mostRecentFileName', null );
		config.set( 'mostRecentFileData', '' );
		config.set( 'mostRecentPreamble', {} );
		config.set( 'mostRecentPreambleText', '' );
	});

	window.document.addEventListener( 'dragover', ( e ) => {
		e.preventDefault();
	});
}


// EXPORTS //

export default configureIpcRenderer;
