import * as actions from './actions';
import { ipcRenderer } from 'electron';

export default function configureIpcRenderer( store ) {
	ipcRenderer.on( 'ISLE::file-loaded', ( e, { file, fileName, filePath }) => {
		store.dispatch( actions.convertMarkdown( file ) );
		store.dispatch( actions.fileLoaded({ fileName, filePath }) );
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

	window.document.addEventListener( 'drop', ( e ) => {
		e.preventDefault();
		ipcRenderer.send( 'ISLE::dropped-file', {
			filePath: e.dataTransfer.files[0].path
		});
	});

	window.document.addEventListener( 'dragover', ( e ) => {
		e.preventDefault();
	});
}
