// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import markdownit from 'markdown-it';
import pdfMake from 'pdfmake/build/pdfmake';
import Loadable from 'components/internal/loadable';
import VoiceInput from 'components/input/voice';
import Gate from 'components/gate';
import SelectInput from 'components/input/select';
import Button from 'react-bootstrap/Button';
import ResponseVisualizer from 'components/response-visualizer';
import logger from 'debug';
import { DOMSerializer } from 'prosemirror-model';
import repeat from '@stdlib/string/repeat';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import replace from '@stdlib/string/replace';
import generateUID from 'utils/uid';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
import blobToBase64 from 'utils/blob-to-base64';
import SessionContext from 'session/context.js';
const PeerSubmitModal = Loadable( () => import( './peer_submit_modal.js' ) );
const SubmitModal = Loadable( () => import( './submit_modal.js' ) );
const ResetModal = Loadable( () => import( './reset_modal.js' ) );
const TableSelect = Loadable( () => import( './table_select.js' ) );
const Guides = Loadable( () => import( './guides' ) );
const PDFModal = Loadable( () => import( './pdf_modal.js' ) );
import UserPairer from 'components/user-pairer';
import menu from './config/menu';
import icons from './config/icons';
import ProseMirrorEditorView from './view.js';
import ProseMirrorCollaborativeView from './collaborative_view.js';
import { addAnnotation } from './config/comments';
import createHTML from './create_html.js';
import schema from './config/schema';
import canInsert from './config/can_insert.js';
import applyMark from './config/apply_mark.js';
import isTextStyleMarkCommandEnabled from './config/is_text_style_mark_command_enabled.js';
import generatePDF from './generate_pdf.js';
import { EDITOR_PEER_COMMENTS, EDITOR_PEER_REPORT, EDITOR_SUBMIT } from 'constants/actions.js';
import { CREATED_GROUPS, DELETED_GROUPS } from 'constants/events.js';
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
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {string} mode - controls whether to enable text editing for groups (when set to `group`) or for everyone (when set to `collaborative`)
* @property {Object} peerReview - if not null, enables peer review mode in which each submission is sent to another randomly chosen student and vice versa
* @property {number} intervalTime - time between auto saves
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
		if ( props.autoSave ) {
			value = localStorage.getItem( this.id );
		}
		if ( !value ) {
			value = md.render( props.defaultValue );
		}
		this.state = {
			showResetModal: false,
			showSubmitModal: false,
			showTableModal: false,
			showPDFModal: false,
			showColorPicker: false,
			showGuides: false,
			isFullscreen: false,
			value,
			originalDefaultValue: props.defaultValue,
			peer: null,
			submittedToPeer: false,
			submittedPeerComments: false,
			displayPeerReport: false,
			docId: 0,
			group: null,
			allGroups: null
		};

		this.menu = copy( menu, 2 );
		this.menu.tableEdits.unshift({
			title: 'Insert table',
			content: 'Insert table',
			enable: canInsert( schema.nodes.table ),
			run: ( state, dispatch ) => {
				this.toggleTableModal();
				this.insertTable = ({ rowCount, colCount }) => {
					const cells = [];
					while ( colCount-- ) {
						cells.push(
							schema.nodes.table_cell.createAndFill(),
						);
					}
					const rows = [];
					while ( rowCount-- ) {
						rows.push(schema.nodes.table_row.createAndFill(
							void 0,
							cells
						));
					}
					const table = schema.nodes.table.createAndFill( void 0, rows);
					dispatch( state.tr.replaceSelectionWith( table ) );
				};
				return false;
			}
		});
		this.menu.marks.push({
			title: 'Font color',
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
				title: 'Save HTML',
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
					saveAs( blob, `${title}.html` );
				}
			},
			{
				title: 'Export PDF',
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
								img.src = await toDataURL( img.src ); // eslint-disable-line no-await-in-loop
							}
							const innerHTML = replace( tmp.innerHTML, '<p></p>', '<p> </p>'); // replace empty paragraph node to not break pdfmake
							doc = generatePDF( innerHTML, config, 16, this.editorDiv.clientWidth );
						} catch ( err ) {
							const session = this.context;
							session.addNotification({
								title: 'Encountered an error while serializing HTML',
								message: `${err.message}. Please check the syntax of your report.`,
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
									title: 'Encountered an error while generating PDF',
									message: `${err}. Please check the syntax of your report.`,
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
				title: 'Open HTML',
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
				title: 'Submit',
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
				title: 'Toggle fullscreen',
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
				title: 'Open tutorials',
				run: this.toggleGuides,
				content: icons.guides
			}
		]);
		if ( this.props.mode === 'group' || this.props.mode === 'collaborative' ) {
			this.menu.addons.push({
				title: 'Add an annotation',
				content: icons.annotation,
				run: addAnnotation
			});
		}
		if ( this.props.mode === 'individual' && props.defaultValue !== DEFAULT_VALUE ) {
			let tooltip;
			let icon;
			const resetModal = this.props.resetModal;
			if ( resetModal && resetModal.tooltip ) {
				tooltip = resetModal.tooltip;
			} else {
				tooltip = 'Reset to default value';
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
		if ( this.props.autoSave && this.props.mode === 'individual' ) {
			this.saveInterval = setInterval( this.saveInBrowser, this.props.intervalTime );
		}
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === CREATED_GROUPS ) {
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
			if ( action && action.id === this.id ) {
				if ( action.type === EDITOR_PEER_REPORT ) {
					localStorage.setItem( this.id+'_peer_report', action.value );
					this.addPeerReportNotification( action.value );
				}
				else if ( action.type === EDITOR_PEER_COMMENTS ) {
					localStorage.setItem( this.id+'_peer_comments', action.value );
					this.addPeerComments( action.value );
				}
			}
		});
		window.addEventListener( 'unload', this.saveInBrowser );
	}

	componentWillUnmount() {
		if ( this.saveInterval ) {
			clearInterval( this.saveInterval );
		}
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		window.removeEventListener( 'unload', this.saveInBrowser );
	}

	saveInBrowser = () => {
		debug( 'Saving document state to local storage...' );
		if ( this.editorState ) {
			localStorage.setItem( this.id, JSON.stringify( this.editorState.doc.toJSON() ) );
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

	toggleTableModal = ( inserted ) => {
		if ( inserted ) {
			this.insertTable( inserted );
		}
		this.setState({
			showTableModal: !this.state.showTableModal
		});
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
				title: 'Sign in',
				message: 'You have to sign in before you can submit your report',
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
			img.src = await toDataURL( img.src ); // eslint-disable-line no-await-in-loop
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
					text: `Dear ${session.user.name}, your report has been successfully recorded. For your convenience, your report and the generated HTML file are attached to this email.`,
					subject: 'Report submitted',
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
				title: 'Submitted',
				message: 'Your report has been successfully submitted',
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

	addPeerReportNotification = ( report ) => {
		const session = this.context;
		this.peerReportNotification = session.addNotification({
			title: 'Peer report ready for review',
			message: 'You have been sent a report for peer review! Please confirm to load it into the Markdown editor',
			level: 'success',
			position: 'tr',
			dismissible: 'none',
			autoDismiss: 0,
			children: <div style={{ marginBottom: '30px' }}>
				<Button size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={() => {
					if ( !this.state.submittedToPeer ) {
						return session.addNotification({
							title: 'Submit first',
							message: 'Submit your report first before opening the report you got sent for review',
							level: 'warning',
							position: 'tr'
						});
					}
					localStorage.removeItem( this.id+'_peer_report' );
					session.removeNotification( this.peerReportNotification );
					this.setState({
						value: report,
						displayPeerReport: true
					});
				}}>Open Report</Button>
			</div>
		});
	}

	addPeerComments = ( comments ) => {
		const session = this.context;
		this.peerCommentsNotification = session.addNotification({
			title: 'Peer review comments received',
			message: 'You have received comments from your peer reviewer! Please confirm to load it into the Markdown editor',
			level: 'success',
			position: 'tr',
			dismissible: 'none',
			autoDismiss: 0,
			children: <div style={{ marginBottom: '30px' }}>
				<Button size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={() => {
					if ( !this.state.submittedPeerComments ) {
						return session.addNotification({
							title: 'Submit first',
							message: 'First send back the comments you wrote before opening your annotated report',
							level: 'warning',
							position: 'tr'
						});
					}
					localStorage.removeItem( this.id+'_peer_comments' );
					session.removeNotification( this.peerCommentsNotification );
					this.setState({
						value: comments,
						displayPeerReport: false
					});
				}}>Open Comments</Button>
			</div>
		});
	}

	handlePeerAssignment = ( assignment ) => {
		if ( this.props.peerReview ) {
			const peerReport = localStorage.getItem( this.id+'_peer_report' );
			if ( peerReport ) {
				this.addPeerReportNotification( peerReport );
			}
			else {
				const peerComments = localStorage.getItem( this.id+'_peer_comments' );
				if ( peerComments ) {
					this.addPeerComments( peerComments );
				}
			}
			const newState = {};
			newState.submittedToPeer = localStorage.getItem( this.id+'submitted_to_peer' ) || false;
			newState.submittedPeerComments = localStorage.getItem( this.id+'submitted_comments' ) || false;
			newState.peer = assignment;
			this.setState( newState, () => {
				this.context.addNotification({
					title: 'Pairing established',
					message: 'You have been successfully paired with other students!',
					level: 'success',
					position: 'tr'
				});

				// Set color of editor background to signal own report:
				this.editorDiv.firstChild.style.background = 'rgba(154, 208, 248, 0.2)';
			});
		}
	}

	handlePeerCleanup = () => {
		const session = this.context;
		if ( this.peerReportNotification ) {
			session.removeNotification( this.peerReportNotification );
		}
		if ( this.peerCommentsNotification ) {
			session.removeNotification( this.peerCommentsNotification );
		}
		localStorage.removeItem( this.id+'submitted_to_peer' );
		localStorage.removeItem( this.id+'submitted_comments' );
		localStorage.removeItem( this.id+'_peer_report' );
		localStorage.removeItem( this.id+'_peer_comments' );
		this.setState({
			peer: null,
			submittedToPeer: false,
			submittedPeerComments: false,
			displayPeerReport: false
		}, () => {
			this.editorDiv.firstChild.style.background = '#fff';
			this.context.addNotification({
				title: 'Pairing ended',
				message: 'The peer review pairings were ended.',
				level: 'info',
				position: 'tr'
			});
		});
	}

	resetEditor = () => {
		localStorage.removeItem( this.id );
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
			message = 'Your report has been successfully deleted and the editor reset to its default value';
		}
		this.context.addNotification({
			title,
			message,
			level: 'success',
			position: 'tr'
		});
	}

	render() {
		const session = this.context;
		if ( this.props.mode === 'group' && !this.state.group ) {
			return <h3 style={this.props.style} >Activity will become available once you are part of a group</h3>;
		}
		return (
			<Fragment>
				{ this.props.mode === 'group' ? <Gate owner >
					<SelectInput
						legend="Select group"
						options={this.state.allGroups}
						value={this.state.group}
						onChange={( group ) => {
							this.setState({
								group
							});
						}}
					/>
				</Gate> : null }
				<div
					id={this.id} className="editorview-wrapper"
					ref={( div ) => { this.editorWrapper = div; }}
					style={this.props.style}
				>
					{ this.props.mode === 'group' || this.props.mode === 'collaborative' ?
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
							id={this.props.mode === 'group' ? this.state.group + '-' + this.id : this.id}
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
								if ( this.state.peer ) {
									if ( this.state.displayPeerReport ) {
										// Set color of editor background to signal that report belongs to someone else:
										this.editorDiv.firstChild.style.background = 'rgba(146, 217, 183, 0.2)';
									} else {
										// Set color of editor background to signal own report:
										this.editorDiv.firstChild.style.background = 'rgba(154, 208, 248, 0.2)';
									}
								}
							}}
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
				</div>
				{ this.props.allowSubmissions ? <div
					style={{ textAlign: 'center', width: '100%' }}
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
				{ this.props.peerReview ? <UserPairer
					id={this.id+'_pairer'}
					onAssignmentStudent={this.handlePeerAssignment}
					onClearStudent={this.handlePeerCleanup}
					filterOwners={this.props.peerReview.filterOwners}
				/> : null }
				{ this.props.peerReview ? <PeerSubmitModal
					show={this.state.showSubmitModal}
					onHide={this.toggleSubmitModal}
					onSubmitToReviewer={() => {
						this.context.log({
							id: this.id,
							type: EDITOR_PEER_REPORT,
							value: JSON.stringify( this.editorState.doc.toJSON() ),
							noSave: true
						}, this.state.peer.to.email );
						this.setState({
							submittedToPeer: true
						});
						localStorage.setItem( this.id+'submitted_to_peer', true );
						this.submitReport();
					}}
					onSubmitComments={() => {
						this.context.log({
							id: this.id,
							type: EDITOR_PEER_COMMENTS,
							value: JSON.stringify( this.editorState.doc.toJSON() ),
							noSave: true
						}, this.state.peer.from.email );
						this.setState({
							submittedPeerComments: true
						});
						localStorage.setItem( this.id+'submitted_comments', true );
						this.submitReport();
					}}
					onFinalSubmit={this.submitReport}
					submitButtonLabel={this.props.peerReview.submitButtonLabel}
					reviewButtonLabel={this.props.peerReview.reviewButtonLabel}
					finalButtonLabel={this.props.peerReview.finalButtonLabel}
					disabledSubmitButton={!this.state.peer || this.state.submittedToPeer}
					disabledReviewButton={!this.state.submittedToPeer || this.state.submittedPeerComments || !this.state.displayPeerReport}
					disabledFinalButton={!this.state.submittedPeerComments || this.state.displayPeerReport}
				/> : null }
				<ResetModal
					show={this.state.showResetModal}
					onHide={this.toggleResetModal}
					onSubmit={this.resetEditor}
					{...this.props.resetModal}
				/>
				<SubmitModal
					show={this.state.showSubmitModal && !this.props.peerReview}
					onHide={this.toggleSubmitModal}
					onSubmit={this.submitReport}
				/>
				<TableSelect
					show={this.state.showTableModal}
					onHide={this.toggleTableModal}
				/>
				<Guides
					show={this.state.showGuides}
					onHide={this.toggleGuides}
				/>
				<PDFModal
					show={this.state.showPDFModal}
					onHide={this.togglePDFModal}
					exportPDF={this.exportPDF}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

TextEditor.propTypes= {
	autoSave: PropTypes.bool,
	allowSubmissions: PropTypes.bool,
	canLoadHTML: PropTypes.bool,
	defaultValue: PropTypes.string,
	mode: PropTypes.oneOf([
		'group', 'collaborative', 'individual'
	]),
	intervalTime: PropTypes.number,
	peerReview: PropTypes.shape({
		submitButtonLabel: PropTypes.string,
		reviewButtonLabel: PropTypes.string,
		finalButtonLabel: PropTypes.string,
		filterOwners: PropTypes.bool
	}),
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
	autoSave: true,
	allowSubmissions: true,
	canLoadHTML: true,
	defaultValue: DEFAULT_VALUE,
	mode: 'individual',
	intervalTime: 10000,
	peerReview: null,
	voiceTimeout: 5000,
	language: 'en-US',
	resetModal: null,
	style: {}
};

TextEditor.contextType = SessionContext;


// EXPORTS //

export default TextEditor;
