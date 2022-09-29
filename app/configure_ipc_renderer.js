// MODULES //

import * as actions from 'actions';
import logger from 'debug';
import { ipcRenderer } from 'electron';
import { basename, extname } from 'path';
import { i18n } from '@isle-project/locales/editor';
import vex from 'vex-js';
import vexDialog from 'vex-dialog';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import objectKeys from '@stdlib/utils/keys';
import trim from '@stdlib/string/trim';
import VIDEO_LECTURE_TEMPLATE from 'constants/templates/video_lecture.js';
import LECTURE_SLIDES_TEMPLATE from 'constants/templates/lecture_slides.js';
import DATA_EXPLORER_TEMPLATE from 'constants/templates/data_explorer.js';
import PRESENTATION_TEMPLATE from 'constants/templates/presentation.js';
import PREAMBLE from 'constants/preamble.js';
import mergePrambles from 'utils/merge-preambles';
import getGist from 'utils/gist/get';
import uploadGist from 'utils/gist/upload';
import config from 'store/main.js';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-plain.css';


// VARIABLES //

const debug = logger( 'isle-editor' );
vex.registerPlugin( vexDialog );
vex.defaultOptions.className = 'vex-theme-plain';
const RE_PREAMBLE = /^---([\S\s]*?)---/;
const RE_GIST_URL = /gist\.github\.com\/?[^/]*?\/([\s\S]+)$/;


// MAIN //

function configureIpcRenderer( store ) {
	ipcRenderer.on( 'file-loaded', ( e, { file, fileName, filePath }) => {
		debug( 'Loaded file: '+ filePath );
		store.dispatch( actions.fileLoaded({ fileName, filePath, file }) );

		let preambleText = file.match( RE_PREAMBLE );
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
	});

	ipcRenderer.on( 'create-new-file', () => {
		store.dispatch( actions.createdNewFile() );
	});

	ipcRenderer.on( 'created-from-template', ( e, { name }) => {
		let template;
		let preambleAdditions;
		switch ( name ) {
			case 'video-lecture':
				template = VIDEO_LECTURE_TEMPLATE;
				preambleAdditions = {};
			break;
			case 'presentation':
				template = PRESENTATION_TEMPLATE;
				preambleAdditions = {
					type: 'presentation'
				};
			break;
			case 'lecture-slides':
				template = LECTURE_SLIDES_TEMPLATE;
				preambleAdditions = {
					fixedView: true
				};
			break;
			case 'data-explorer':
				template = DATA_EXPLORER_TEMPLATE;
				preambleAdditions = {
					require: {
						dataFile: 'https://isle.stat.cmu.edu/data-explorers_forestfires.json',
						dataInfoFile: 'https://isle.stat.cmu.edu/data-explorers_forestfires_info.json'
					}
				};
			break;
			default:
				template = config.get( 'templates.'+name );
				preambleAdditions = {};
			break;
		}
		const preambleTemplate = config.get( 'preambleTemplate' ) || PREAMBLE;
		import( 'js-yaml' ).then( yaml => {
			let preamble = yaml.load( preambleTemplate );
			preamble = mergePrambles( preamble, preambleAdditions );
			const preambleText = trim( yaml.dump( preamble ) );
			store.dispatch( actions.createdFromTemplate({ template, preamble, preambleText }) );
			store.dispatch( actions.updatePreamble({
				preamble,
				preambleText
			}) );
		});
	});

	ipcRenderer.on( 'create-template-prompt', ( e, { includePreamble }) => {
		vex.dialog.prompt({
			message: includePreamble ? i18n.t('create-template-prompt-with-preamble' ) : i18n.t('create-template-prompt-without-preamble' ),
			placeholder: i18n.t('enter-template-name'),
			callback( value ) {
				if ( value ) {
					const state = store.getState().editor;
					let text = state.markdown;
					if ( !includePreamble ) {
						text = replace( text, RE_PREAMBLE, '---\n<preamble>\n---' );
					}
					if ( config.has( `templates.${value}` ) ) { // eslint-disable-line i18next/no-literal-string
						vex.dialog.confirm({
							message: i18n.t('template-already-exists'),
							callback( bool ) {
								if ( bool ) {
									config.set( `templates.${value}`, text ); // eslint-disable-line i18next/no-literal-string
									vex.dialog.alert( i18n.t('template-successfully-created') );
									ipcRenderer.send( 'redraw-templates-menu' );
								}
							}
						});
					} else {
						config.set( `templates.${value}`, text ); // eslint-disable-line i18next/no-literal-string
						vex.dialog.alert( i18n.t('template-successfully-created') );
						ipcRenderer.send( 'redraw-templates-menu' );
					}
				}
			}
		});
	});

	ipcRenderer.on( 'import-templates-from-gist', ( e ) => {
		vex.dialog.prompt({
			message: i18n.t('please-enter-gist-url'),
			placeholder: i18n.t('git-hub-gist-url'),
			callback: async ( value ) => {
				if ( value ) {
					const match = RE_GIST_URL.exec( value );
					if ( match && match[ 1 ] ) {
						value = match[ 1 ];
					}
					const res = await getGist( value );
					const files = res.data.files;
					const keys = objectKeys( files );
					for ( let i = 0; i < keys.length; i++ ) {
						const key = keys[ i ];
						const { content } = files[ key ];
						let name = `templates.${basename( key, extname( key ) )}`; // eslint-disable-line i18next/no-literal-string
						let freeName = name;
						let idx = 2;
						while ( config.has( freeName ) ) {
							freeName = `${name}_${idx}`;
							idx += 1;
						}
						config.set( freeName, content );
					}
					vex.dialog.alert( i18n.t('templates-successfully-loaded') );
					ipcRenderer.send( 'redraw-templates-menu' );
				}
			}
		});
	});

	ipcRenderer.on( 'upload-custom-templates', async ( e, { templates } ) => {
		const keys = objectKeys( templates);
		const files = {};
		for ( let i = 0; i < keys.length; i++ ) {
			files[ `${keys[ i ]}.isle` ] = {
				content: templates[ keys[ i ] ]
			};
		}
		const result = await uploadGist( files );
		vex.dialog.alert({
			unsafeMessage: `${i18n.t('templates-successfully-uploaded')}. <a href="${result.data.html_url}">${i18n.t('open-link')}</a>.`
		});
	});

	ipcRenderer.on( 'open-template-dialog', ( e, { name } ) => {
		vex.dialog.open({
			message: i18n.t('confirm-template-creation'),
			buttons: [
				{
					type: 'text',
					text: i18n.t('confirm'),
					className: 'vex-dialog-button-primary',
					click() {
						ipcRenderer.send( 'create-from-user-template', name );
					}
				},
				{
					type: 'text',
					text: 'Rename',
					className: 'vex-dialog-button-secondary',
					click() {
						vex.dialog.prompt({
							unsafeMessage: `<p>${i18n.t('enter-new-template-name')} <b>${name}</b></p>`,
							placeholder: i18n.t('new-template-name'),
							callback( value ) {
								if ( value ) {
									const oldName = 'templates.'+name;
									const tmp = config.get( oldName );
									config.delete( oldName );
									const newName = 'templates.'+value;
									config.set( newName, tmp );
									vex.dialog.alert( i18n.t( 'template-successfully-renamed' ) );
									ipcRenderer.send( 'redraw-templates-menu' );
								}
							}
						});
					}
				},
				{
					type: 'text',
					text: i18n.n('cancel'),
					className: 'vex-dialog-button-secondary'
				},
				{
					type: 'text',
					text: i18n.t('delete-template'),
					className: 'vex-bottom-left-button vex-dialog-button-danger',
					click() {
						vex.dialog.confirm({
							unsafeMessage: '<p>'+i18n.t('please-confirm-template-deletion')+'<b>'+name+'</b>?</p>',
							buttons: [
								{ ...vex.dialog.buttons.YES, className: 'vex-dialog-button-danger' },
								vex.dialog.buttons.NO
							],
							callback( value ) {
								if ( value ) {
									vex.dialog.alert( i18n.t('template-successfully-deleted') );
									config.delete( 'templates.'+name );
									ipcRenderer.send( 'redraw-templates-menu' );
								}
							}
						});
					}
				}
			]
		});
	});

	ipcRenderer.on( 'show-dialog', ( e, { message }) => {
		vex.dialog.alert({ unsafeMessage: message });
	});

	ipcRenderer.on( 'hide-toolbar', () => {
		store.dispatch( actions.toggleToolbar() );
	});

	ipcRenderer.on( 'prepare-reload', () => {
		debug( 'Prepare reload...' );
		config.set( 'shouldReload', true );
		const state = store.getState().editor;
		const { markdown, fileName, filePath, preamble, preambleText } = state;
		config.set( 'mostRecentFilePath', filePath );
		config.set( 'mostRecentFileName', fileName );
		config.set( 'mostRecentFileData', markdown );
		config.set( 'mostRecentPreamble', preamble );
		config.set( 'mostRecentPreambleText', preambleText );
	});

	ipcRenderer.on( 'save-file', () => {
		const state = store.getState();
		const data = state.editor.markdown;
		const filePath = state.editor.filePath;
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
		const data = state.editor.markdown;
		const filePath = state.editor.filePath;
		ipcRenderer.send( 'save-file-as', {
			data,
			filePath
		});
	});

	ipcRenderer.on( 'clear-cache-and-create', ( _, name ) => {
		config.set( 'mostRecentFilePath', null );
		config.set( 'mostRecentFileData', null );
		config.set( 'mostRecentPreamble', {} );
		config.set( 'mostRecentPreambleText', '' );
		config.set( 'recentFiles', [] );
		if ( name ) {
			ipcRenderer.send( 'create-from-user-template', name );
		} else {
			ipcRenderer.send( 'create' );
		}
	});

	ipcRenderer.on( 'confirm-close-when-unsaved', ( e, { windowID }) => {
		const state = store.getState();
		const unsaved = state.editor.unsaved;
		if ( unsaved ) {
			vex.dialog.open({
				message: i18n.t('confirm-close-when-unsaved-prompt'),
				buttons: [
					{
						type: 'text',
						text: i18n.t('save'),
						className: 'vex-dialog-button-primary',
						click() {
							const filePath = state.editor.filePath;
							const data = state.editor.markdown;
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
						}
					},
					{
						type: 'text',
						text: i18n.t('cancel'),
						className: 'vex-dialog-button-secondary'
					},
					{
						type: 'text',
						text: i18n.t('don-t-save'),
						className: 'vex-dialog-button-secondary',
						click() {
							ipcRenderer.send( 'close-window', { windowID });
						}
					}
				]
			});
		} else {
			ipcRenderer.send( 'close-window', { windowID });
		}
	});

	ipcRenderer.on( 'close-editor', () => {
		console.log( 'Closing the editor...' ); // eslint-disable-line no-console
		config.set( 'mostRecentFileData', null );
	});

	window.document.addEventListener( 'dragover', ( e ) => {
		e.preventDefault();
	});

	ipcRenderer.on( 'message', ( event, text ) => {
		console.log( text ); // eslint-disable-line no-console
	});

	ipcRenderer.on( 'download-progress', ( event, percent ) => {
		store.dispatch( actions.downloadProgress( percent ) );
	});

	ipcRenderer.on( 'update-downloaded', ( event, info ) => {
		store.dispatch( actions.updateDownloaded() );
		vex.dialog.confirm({
			message: i18n.t('confirm-exit-and-update', { releaseName: info.releaseName }),
			callback( value ) {
				if ( value ) {
					const state = store.getState();
					const unsaved = state.editor.unsaved;
					if ( !unsaved ) {
						ipcRenderer.send( 'quit-and-install' );
					} else {
						vex.dialog.alert( i18n.t('save-before-update') );
					}
				}
			},
			overlayClosesOnClick: false
		});
	});

	ipcRenderer.on( 'update-available', ( event, info ) => {
		console.log( event );
		console.log( info );
		store.dispatch( actions.updateAvailable( info ) );
	});
}


// EXPORTS //

export default configureIpcRenderer;
