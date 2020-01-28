// MODULES //

import * as actions from 'actions';
import { ipcRenderer } from 'electron';
import Store from 'electron-store';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle-editor' );
const config = new Store( 'ISLE' );


// MAIN //

function configureIpcRenderer( store ) {
	ipcRenderer.on( 'file-loaded', ( e, { file, fileName, filePath }) => {
		debug( 'Loaded file: '+ filePath );
		store.dispatch( actions.fileLoaded({ fileName, filePath }) );
		store.dispatch( actions.convertMarkdown( file, true ) );

		let preambleText = file.match( /^---([\S\s]*?)---/ );
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

		let fileList = config.get( 'recentFiles' );
		if ( !isArray( fileList ) ) {
			fileList = [];
		}
		if ( !contains( fileList, filePath ) ) {
			fileList.unshift( filePath );
		}
		config.set( 'recentFiles', fileList );

		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', file );
	});

	ipcRenderer.on( 'hide-toolbar', () => {
		store.dispatch( actions.toggleToolbar() );
	});

	ipcRenderer.on( 'prepare-reload', () => {
		debug( 'Prepare reload...' );
		const state = store.getState().markdown;
		const { markdown, filePath, fileName, preamble, preambleText } = state;
		config.set( 'mostRecentFilePath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', markdown );
		config.set( 'mostRecentPreamble', preamble );
		config.set( 'mostRecentPreambleText', preambleText );
	});

	ipcRenderer.on( 'save-file', () => {
		const state = store.getState();
		const data = state.markdown.markdown;
		const filePath = state.markdown.filePath;
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
		const state = store.getState();
		const data = state.markdown.markdown;
		const filePath = state.markdown.filePath;
		ipcRenderer.send( 'save-file-as', {
			data,
			filePath
		});
	});

	ipcRenderer.on( 'clear-cache', () => {
		config.set( 'mostRecentFilePath', null );
		config.set( 'mostRecentFileName', null );
		config.set( 'mostRecentFileData', '' );
		config.set( 'mostRecentPreamble', {} );
		config.set( 'mostRecentPreambleText', '' );
		config.set( 'recentFiles', [] );
	});

	ipcRenderer.on( 'close-editor', () => {
		config.set( 'mostRecentFileData', null );
	});

	window.document.addEventListener( 'dragover', ( e ) => {
		e.preventDefault();
	});

	ipcRenderer.on( 'message', ( event, text ) => {
		console.log( text ); // eslint-disable-line no-console
	});
}


// EXPORTS //

export default configureIpcRenderer;
