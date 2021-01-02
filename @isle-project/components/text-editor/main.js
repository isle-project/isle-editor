// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import markdownit from 'markdown-it';
import pdfMake from 'pdfmake/build/pdfmake';
import { withTranslation } from 'react-i18next';
import Loadable from '@isle-project/components/internal/loadable';
import VoiceInput from '@isle-project/components/input/voice';
import Gate from '@isle-project/components/gate';
import SelectInput from '@isle-project/components/input/select';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import logger from 'debug';
import { DOMSerializer } from 'prosemirror-model';
import repeat from '@stdlib/string/repeat';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import replace from '@stdlib/string/replace';
import startsWith from '@stdlib/string/starts-with';
import generateUID from '@isle-project/utils/uid';
import saveAs from '@isle-project/utils/file-saver';
import base64toBlob from '@isle-project/utils/base64-to-blob';
import blobToBase64 from '@isle-project/utils/blob-to-base64';
import SessionContext from '@isle-project/session/context.js';
const SubmitModal = Loadable( () => import( './submit_modal.js' ) );
const ResetModal = Loadable( () => import( './reset_modal.js' ) );
const Guides = Loadable( () => import( './guides' ) );
const PDFModal = Loadable( () => import( './pdf_modal.js' ) );
import menu from './config/menu';
import icons from './config/icons';
import ProseMirrorEditorView from './view.js';
import ProseMirrorCollaborativeView from './collaborative_view.js';
import { addAnnotation } from './config/comments';
import createHTML from './create_html.js';
import schema from './config/schema';
import applyMark from './config/apply_mark.js';
import isTextStyleMarkCommandEnabled from './config/is_text_style_mark_command_enabled.js';
import generatePDF from './generate_pdf.js';
import { EDITOR_SUBMIT } from '@isle-project/constants/actions.js';
import { CREATED_GROUPS, DELETED_GROUPS, LOGGED_IN, LOGGED_OUT, TEXT_EDITOR_DOCUMENTS_UPDATED } from '@isle-project/constants/events.js';
import imgToStr from '@isle-project/utils/image-to-str';
import 'pdfmake/build/vfs_fonts.js';
import './editor.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );
const RE_BODY = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
const uid = generateUID( 'text-editor' );
const DEFAULT_VALUE = repeat( '\n', 15 );
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
let savedOverflow;


// FUNCTIONS //

async function toDataURL( url ){
	const res = await fetch( url )
		.then( response => response.blob() )
		.then( blobToBase64 );
	return res;
}


// MAIN //

/**
* A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.
*
* @property {boolean} allowSubmissions - controls whether students may submit their reports to the server
* @property {string} defaultValue - default text of the editor
* @property {boolean} sendSubmissionEmails - controls whether to send confirmation emails with PDF/HTML output upon submission
* @property {string} mode - controls whether to enable text editing for groups (when set to `group`) or for everyone (when set to `collaborative`)
* @property {number} voiceTimeout - time in milliseconds after a chunk of recorded voice input is inserted
* @property {string} language - language identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked when editor text changes; receives the current text as its sole argument
*/
class TextEditor extends Component {
	constructor( props, session ) {
		super( props );

		this.id = props.id || uid( props );
		let value;
		if ( !value ) {
			value = md.render( props.defaultValue );
		}
		this.state = {
			showResetModal: false,
			showSubmitModal: false,
			showPDFModal: false,
			showColorPicker: false,
			showGuides: false,
			isFullscreen: false,
			value,
			originalDefaultValue: props.defaultValue,
			docId: 0,
			group: null,
			allGroups: null,
			selectedUserReport: null
		};

		this.menu = copy( menu, 2 );
		this.menu.marks.push({
			title: 'font-color',
			content: icons.color,
			enable: ( state ) => {
				return isTextStyleMarkCommandEnabled( state, 'textColor' );
			},
			run: ( state, dispatch ) => {
				this.setState({ showColorPicker: !this.state.showColorPicker });
				this.onColorChoice = ( color ) => {
					const { schema } = state;
					let { tr } = state;
					const markType = schema.marks.textColor;
					const attrs = color ? { color: color.hex } : null;
					tr = applyMark(
						state.tr.setSelection( state.selection ),
						schema,
						markType,
						attrs
					);
					if ( tr.docChanged || tr.storedMarksSet ) {
						if ( dispatch ) {
							dispatch( tr );
						}
						this.setState({ showColorPicker: !this.state.showColorPicker });
						return true;
					}
					this.setState({ showColorPicker: !this.state.showColorPicker });
					return false;
				};
			}
		});
		this.menu.addons = [
			{
				title: 'save-html',
				content: icons.save,
				run: ( state, dispatch ) => {
					const domNode = DOMSerializer.fromSchema( schema ).serializeFragment( state.doc.content );
					const tmp = document.createElement( 'div' );
					tmp.appendChild( domNode );
					const title = document.title || 'provisoric';
					const text = createHTML( title, tmp.innerHTML );
					const blob = new Blob([ text ], {
						type: 'text/html'
					});
					saveAs( blob, `${title}.html` ); // eslint-disable-line i18next/no-literal-string
				}
			},
			{
				title: 'export-pdf',
				content: icons.pdf,
				run: ( state, dispatch ) => {
					this.togglePDFModal();
					this.exportPDF = async ( config ) => {
						const title = document.title || 'provisoric';
						let doc;
						try {
							const domNode = DOMSerializer.fromSchema( schema ).serializeFragment( state.doc.content );
							const tmp = document.createElement( 'div' );
							tmp.appendChild( domNode );
							const images = tmp.getElementsByTagName( 'img' );
							for ( let i = 0; i < images.length; i++ ) {
								const img = images[ i ];
								img.crossOrigin = 'Anonymous';
								if ( startsWith( img.src, 'data:image/svg+xml' ) ) {
									debug( 'Convert from SVG to PNG...' );
									img.src = imgToStr( img, img.naturalWidth, img.naturalHeight ); // eslint-disable-line no-await-in-loop
								}
								else if ( !startsWith( img.src, 'data:' ) ) {
									img.src = await toDataURL( img.src ); // eslint-disable-line no-await-in-loop
								}
							}
							const innerHTML = replace( tmp.innerHTML, '<p></p>', '<p> </p>' ); // replace empty paragraph node to not break pdfmake
							doc = generatePDF( innerHTML, config, 16, this.editorDiv.clientWidth );
						} catch ( err ) {
							const session = this.context;
							session.addNotification({
								title: this.props.t('error-serializing-html'),
								message: `${err.message}. ${this.props.t('check-syntax')}`,
								level: 'error',
								position: 'tr'
							});
						}
						this.togglePDFModal( () => {
							try {
								pdfMake.createPdf( doc ).download( title );
							} catch ( err ) {
								const session = this.context;
								session.addNotification({
									title: this.props.t('error-generating-pdf'),
									message: `${err}. ${this.props.t('check-syntax')}`,
									level: 'error',
									position: 'tr'
								});
							}
						});
					};
					return false;
				}
			}
		];
		if ( this.props.canLoadHTML ) {
			this.menu.addons.unshift({
				title: 'open-html',
				run: ( state, dispatch ) => {
					const input = document.createElement( 'input' );
					input.type = 'file';
					input.accept = '.html';
					input.addEventListener( 'change', this.handleFileSelect, false );
					input.click();
					return false;
				},
				content: icons.open
			});
		}
		if ( this.props.allowSubmissions ) {
			this.menu.addons.push({
				title: 'submit',
				content: icons.submit,
				run: ( state, dispatch ) => {
					this.editorState = state;
					this.toggleSubmitModal();
					return false;
				}
			});
		}
		this.menu.addons = this.menu.addons.concat([
			{
				title: 'toggle-fullscreen',
				run: () => {
					if ( !/fullscreen/.test( this.editorWrapper.className ) ) {
						this.editorWrapper.className += ' fullscreen';
					} else {
						this.editorWrapper.className = this.editorWrapper.className.replace( /\s*fullscreen\b/, '' );
					}
					if ( !this.state.isFullscreen ) {
						savedOverflow = document.body.style.overflow;
						document.body.style.overflow = 'hidden';
					} else {
						document.body.style.overflow = savedOverflow;
					}
					this.setState({
						isFullscreen: !this.state.isFullscreen
					});
				},
				content: icons.fullscreen
			},
			{
				title: '',
				content: <VoiceInput
					mode="microphone"
					language={this.props.language}
					timeout={this.props.voiceTimeout}
					width={26}
					height={26}
					onFinalText={this.recordedText}
				/>
			},
			{
				title: 'open-tutorials',
				run: this.toggleGuides,
				content: icons.guides
			},
			{
				title: 'add-annotation',
				content: icons.annotation,
				run: addAnnotation
			}
		]);
		if ( props.defaultValue !== DEFAULT_VALUE ) {
			let tooltip;
			let icon;
			const resetModal = this.props.resetModal;
			if ( resetModal && resetModal.tooltip ) {
				tooltip = resetModal.tooltip;
			} else {
				tooltip = 'reset-to-default';
			}
			if ( resetModal && resetModal.icon ) {
				icon = resetModal.icon;
			} else {
				icon = icons.reset;
			}
			this.menu.addons.push({
				title: tooltip,
				run: () => {
					this.toggleResetModal();
				},
				content: icon
			});
		}
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.defaultValue !== prevState.originalDefaultValue ) {
			debug( 'Default value has changed...' );
			const newState = {
				defaultValue: nextProps.defaultValue,
				originalDefaultValue: nextProps.defaultValue
			};
			return newState;
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === LOGGED_IN || type === LOGGED_OUT || type === TEXT_EDITOR_DOCUMENTS_UPDATED ) {
				this.forceUpdate();
			}
			else if ( type === CREATED_GROUPS ) {
				const allGroups = session.allGroups.map( x => x.name );
				this.setState({
					group: session.group ? session.group.name : allGroups[ 0 ],
					allGroups
				});
			}
			else if ( type === DELETED_GROUPS ) {
				this.setState({
					group: null,
					allGroups: null
				});
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	recordedText = ( text ) => {
		text += ' ';
		document.execCommand( 'insertText', false, text );
	}

	handleFileSelect = ( evt ) => {
		debug( 'Opening file...' );
		const files = evt.target.files;
		const reader = new FileReader();
		reader.onload = () => {
			debug( 'Successfully read file...' );
			const html = reader.result;
			const matches = RE_BODY.exec( html );
			const value = matches[ 1 ];
			this.setState({
				value,
				docId: this.state.docId + 1
			});
		};
		reader.onerror = () => {
			debug( 'Encountered an error...' );
		};
		reader.readAsText( files[ 0 ] );
	}

	toggleSubmitModal = ( event, clbk = noop ) => {
		this.setState({
			showSubmitModal: !this.state.showSubmitModal
		}, clbk );
	}

	toggleGuides = () => {
		this.setState({
			showGuides: !this.state.showGuides
		});
	}

	toggleResetModal = ( event, clbk = noop ) => {
		this.setState({
			showResetModal: !this.state.showResetModal
		}, clbk );
	}

	togglePDFModal = ( clbk = noop ) => {
		this.setState({
			showPDFModal: !this.state.showPDFModal
		}, clbk );
	}

	submitReport = async ( additionalRecipientObj = null, message = null ) => {
		const session = this.context;
		if ( session.anonymous ) {
			return session.addNotification({
				title: this.props.t('sign-in'),
				message: this.props.t('sign-in-required'),
				level: 'warning',
				position: 'tr'
			});
		}
		let domNode = DOMSerializer.fromSchema( schema ).serializeFragment( this.editorState.doc.content );
		let tmp = document.createElement( 'div' );
		tmp.appendChild( domNode );
		const images = tmp.getElementsByTagName( 'img' );
		for ( let i = 0; i < images.length; i++ ) {
			const img = images[ i ];
			img.crossOrigin = 'Anonymous';
			if ( startsWith( img.src, 'data:image/svg+xml' ) ) {
				debug( 'Convert from SVG to PNG...' );
				img.src = imgToStr( img, img.naturalWidth, img.naturalHeight ); // eslint-disable-line no-await-in-loop
			}
			else if ( !startsWith( img.src, 'data:' ) ) {
				img.src = await toDataURL( img.src ); // eslint-disable-line no-await-in-loop
			}
		}
		const innerHTML = replace( tmp.innerHTML, '<p></p>', '<p> </p>'); // replace empty paragraph node to not break pdfmake
		const title = document.title || 'provisoric';
		const html = createHTML( title, innerHTML );

		// Create the config so that the function can run:
		const config = {
			// LETTER size:
			pageSize: {
				width: 8.5 * 72.0,
				height: 11.0 * 72.0
			},
			pageOrientation: 'portrait'
		};
		const doc = generatePDF( innerHTML, config, 16, this.editorDiv.clientWidth );
		const pdfDocGenerator = pdfMake.createPdf( doc );
		pdfDocGenerator.getBase64( ( pdf ) => {
			if ( this.props.sendSubmissionEmails ) {
				const msg = {
					text: this.props.t('report-submitted-message', {
						name: session.user.name
					}),
					subject: this.props.t('report-submitted'),
					attachments: [
						{
							filename: 'report.html',
							content: html,
							contentType: 'text/html'
						},
						{
							filename: 'report.pdf',
							content: pdf,
							contentType: 'application/pdf',
							encoding: 'base64'
						}
					]
				};
				session.sendMail( msg, session.user.email );
				if ( additionalRecipientObj ) {
					msg.text = message;
					session.sendMail( msg, additionalRecipientObj.email );
				}
			}

			// Upload report:
			const htmlForm = new FormData();
			const pdfForm = new FormData();

			let filename = 'report.html';
			if ( this.id ) {
				filename = this.id+'_'+filename;
			}
			const htmlFile = new File([ html ], filename, {
				type: 'text/html'
			});
			htmlForm.append( 'file', htmlFile );

			filename = 'report.pdf';
			filename = this.id+'_'+filename;
			const pdfBlob = base64toBlob( pdf, 'application/pdf' );
			const pdfFile = new File([ pdfBlob ], filename, {
				type: 'application/pdf'
			});
			pdfForm.append( 'file', pdfFile );

			session.uploadFile({ formData: htmlForm, showNotification: false });
			session.uploadFile({ formData: pdfForm, showNotification: false });
			session.addNotification({
				title: this.props.t('submitted'),
				message: this.props.t('submitted-msg'),
				level: 'success',
				position: 'tr'
			});
			session.log({
				id: this.id,
				type: EDITOR_SUBMIT,
				value: tmp.innerText
			});
		});
	}

	resetEditor = () => {
		this.setState({
			value: md.render( this.props.defaultValue ),
			docId: this.state.docId + 1
		});
		let title;
		let message;
		const resetModal = this.props.resetModal;
		if ( resetModal && resetModal.notificationTitle ) {
			title = resetModal.notificationTitle;
		} else {
			title = 'Reset';
		}
		if ( resetModal && resetModal.notification ) {
			message = resetModal.notification;
		} else {
			message = this.props.t('report-deleted-msg');
		}
		this.context.addNotification({
			title,
			message,
			level: 'success',
			position: 'tr'
		});
	}

	generateDocumentId() {
		if ( this.props.mode === 'group' ) {
			return this.state.group + '-' + this.id;
		}
		const session = this.context;
		if ( this.state.selectedUserReport ) {
			return this.id + '-'+ this.state.selectedUserReport;
		}
		if ( this.props.mode === 'individual' ) {
			return this.id + '-' + ( session.user.email || session.anonymousIdentifier );
		}
		// Case: mode === 'collaborative'
		return this.id;
	}

	render() {
		const session = this.context;
		if ( this.props.mode === 'group' && !this.state.group ) {
			return <h3 style={this.props.style} >{this.props.t('available-when-grouped')}</h3>;
		}
		const useCollaborativeView = isString( session.server );
		return (
			<Fragment>
				<div
					id={this.id} className="editorview-wrapper"
					ref={( div ) => { this.editorWrapper = div; }}
					style={this.props.style}
				>
					{useCollaborativeView ?
						<ProseMirrorCollaborativeView
							defaultValue={this.state.value}
							menu={this.menu}
							onMount={( div ) => {
								this.editorDiv = div;
							}}
							session={session}
							fullscreen={this.state.isFullscreen}
							showColorPicker={this.state.showColorPicker}
							onColorChoice={this.onColorChoice}
							id={this.generateDocumentId()}
							onEditorState={( editorState ) => {
								this.editorState = editorState;
							}}
						/> :
						<ProseMirrorEditorView
							defaultValue={this.state.value}
							menu={this.menu}
							className="cancel"
							onMount={( div ) => {
								this.editorDiv = div;
							}}
							t={this.props.t}
							fullscreen={this.state.isFullscreen}
							showColorPicker={this.state.showColorPicker}
							onColorChoice={this.onColorChoice}
							id={this.id}
							onEditorState={( editorState ) => {
								this.editorState = editorState;
							}}
							docId={this.state.docId}
						/>
					}
					{ this.props.mode === 'group' ?
						<Gate owner >
							<SelectInput
								placeholder={this.props.t('select-group')}
								options={this.state.allGroups}
								value={this.state.group}
								onChange={( group ) => {
									this.setState({
										group
									});
								}}
								style={{ marginLeft: '20px', width: '320px', display: 'inline-block' }}
							/>
						</Gate> : null }
					{ this.props.mode === 'individual' ? <Gate owner >
							<SelectInput
								placeholder={this.props.t('select-document-to-display')}
								options={session.textEditorDocuments.filter( x => x.startsWith( this.id )).map( x => x.slice( this.id.length + 1 ))}
								value={this.state.selectedUserReport}
								onChange={( id ) => {
									this.setState({
										selectedUserReport: id
									});
								}}
								clearable
								style={{ marginLeft: '20px', width: '320px', display: 'inline-block' }}
							/>
						</Gate> : null
					}
					{ this.props.allowSubmissions ? <div
						style={{ float: 'right', marginRight: '8px', marginTop: '-8px' }}
					>
						<ResponseVisualizer
							id={this.id}
							data={{
								type: 'text'
							}}
							info={EDITOR_SUBMIT}
							style={{ padding: 5 }}
						/>
					</div>: null }
				</div>
				{this.state.showResetModal ? <ResetModal
					show={this.state.showResetModal}
					onHide={this.toggleResetModal}
					onSubmit={this.resetEditor}
					t={this.props.t}
					{...this.props.resetModal}
				/> : null}
				{this.state.showSubmitModal ? <SubmitModal
					show={this.state.showSubmitModal}
					onHide={this.toggleSubmitModal}
					onSubmit={this.submitReport}
					t={this.props.t}
				/> : null}
				<Guides
					show={this.state.showGuides}
					onHide={this.toggleGuides}
					for={this.id}
					t={this.props.t}
				/>
				{this.state.showPDFModal ? <PDFModal
					show={this.state.showPDFModal}
					onHide={this.togglePDFModal}
					exportPDF={this.exportPDF}
					t={this.props.t}
				/> : null}
			</Fragment>
		);
	}
}


// PROPERTIES //

TextEditor.propTypes= {
	allowSubmissions: PropTypes.bool,
	canLoadHTML: PropTypes.bool,
	defaultValue: PropTypes.string,
	mode: PropTypes.oneOf([
		'group', 'collaborative', 'individual'
	]),
	resetModal: PropTypes.shape({
		title: PropTypes.string,
		body: PropTypes.string,
		buttonLabel: PropTypes.string,
		notificationTitle: PropTypes.string,
		notification: PropTypes.string,
		tooltip: PropTypes.string
	}),
	voiceTimeout: PropTypes.number,
	language: PropTypes.string,
	style: PropTypes.object
};

TextEditor.defaultProps = {
	allowSubmissions: true,
	canLoadHTML: true,
	defaultValue: DEFAULT_VALUE,
	mode: 'individual',
	voiceTimeout: 5000,
	language: 'en-US',
	resetModal: null,
	style: {}
};

TextEditor.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'TextEditor' )( TextEditor );
