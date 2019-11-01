// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import markdownit from 'markdown-it';
import pdfMake from 'pdfmake/build/pdfmake';
import Loadable from 'components/loadable';
import VoiceInput from 'components/input/voice';
import Button from 'react-bootstrap/Button';
import logger from 'debug';
import { DOMSerializer } from 'prosemirror-model';
import repeat from '@stdlib/string/repeat';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import generateUID from 'utils/uid';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
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

function loadFonts() {
	import( /* webpackChunkName: "fonts" */ './../../constants/fonts.js' )
		.then( fonts => {
			debug( 'Successfully loaded fonts...' );
			pdfMake.vfs = fonts.default;
		})
		.catch( err => {
			debug( 'Encountered an error while loading fonts: '+err.message );
		});
}


// MAIN //

/**
* A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.
*
* @property {boolean} allowSubmissions - controls whether students may submit their reports to the server
* @property {string} defaultValue - default text of the editor
* @property {boolean} sendSubmissionEmails - controls whether to send confirmation emails with PDF/HTML output upon submission
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {boolean} groupMode - controls whether to enable collaborative text editing
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
			value = JSON.parse( localStorage.getItem( this.id ) );
			// localStorage.setItem( 'state', JSON.stringify(window.view.state.doc.toJSON()))
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
			submittedPeerComments: false
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
					dispatch(state.tr.replaceSelectionWith(table));
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
			},
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
					this.exportPDF = ( config ) => {
						const title = document.title || 'provisoric';
						try {
							const domNode = DOMSerializer.fromSchema( schema ).serializeFragment( state.doc.content );
							const tmp = document.createElement( 'div' );
							tmp.appendChild( domNode );
							const doc = generatePDF( tmp.innerHTML, config, 16, this.editorDiv.clientWidth );
							this.togglePDFModal( () => {
								pdfMake.createPdf( doc ).download( title );
							});
						} catch ( err ) {
							const session = this.context;
							session.addNotification({
								title: 'Encountered an error while generating PDF',
								message: `${err.message}. Please check the syntax of your Markdown content to make sure that it is correct.`,
								level: 'error',
								position: 'tr'
							});
						}
					};
					return false;
				}
			}
		];
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
				title: 'Open tutorials',
				run: this.toggleGuides,
				content: icons.guides
			},
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
					width={30}
					height={30}
					onFinalText={this.recordedText}
				/>
			}
		]);
		if ( this.props.groupMode ) {
			this.menu.addons.push({
				title: 'Add an annotation',
				content: icons.annotation,
				run: addAnnotation
			});
		}
		if ( props.defaultValue !== DEFAULT_VALUE ) {
			this.menu.addons.reset = {
				title: 'Reset to default value',
				run: () => {
					this.toggleResetModal();
				},
				content: icons.reset
			};
		}
		loadFonts();
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

	handleAutosave = () => {
		// TODO: Re-implement autosaving
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
			const html = reader.result;
			const matches = RE_BODY.exec( html );
			const value = matches[ 1 ];
			this.setState({
				value
			});
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

	submitReport = ( additionalRecipientObj = null, message = null ) => {
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
		const title = document.title || 'provisoric';
		const html = createHTML( title, tmp.innerHTML );

		// Create the config so that the function can run:
		const config = {
			// LETTER size:
			pageSize: {
				width: 8.5 * 72.0,
				height: 11.0 * 72.0
			},
			pageOrientation: 'portrait'
		};
		const doc = generatePDF( tmp.innerHTML, config, 16, this.editorDiv.clientWidth );
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
				value: this.state.value
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
					this.setEditorValue( report );
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
					this.setEditorValue( comments );
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
			this.setState( newState );
		}
		this.setState({
			peer: assignment
		}, () => {
			this.context.addNotification({
				title: 'Pairing established',
				message: 'You have been successfully paired with other students!',
				level: 'success',
				position: 'tr'
			});
		});
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
		this.setState({
			peer: null,
			submittedToPeer: false,
			submittedPeerComments: false
		}, () => {
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
			value: this.props.defaultValue
		});
		this.context.addNotification({
			title: 'Reset',
			message: 'Your report has been successfully deleted and the editor reset to its default value',
			level: 'success',
			position: 'tr'
		});
	}

	render() {
		return (
			<Fragment>
				<div className="editorview-wrapper" ref={( div ) => { this.editorWrapper = div; }} style={this.props.style} >
					{ this.props.groupMode ?
						<ProseMirrorCollaborativeView
							defaultValue={this.state.value}
							menu={this.menu}
							onMount={( div ) => {
								this.editorDiv = div;
							}}
							session={this.context}
							fullscreen={this.state.isFullscreen}
							showColorPicker={this.state.showColorPicker}
							onColorChoice={this.onColorChoice}
							id={this.id}
							onEditorState={( editorState ) => {
								this.editorState = editorState;
							}}
						/> :
						<ProseMirrorEditorView
							defaultValue={this.state.value}
							menu={this.menu}
							onMount={( div ) => {
								this.editorDiv = div;
							}}
							fullscreen={this.state.isFullscreen}
							showColorPicker={this.state.showColorPicker}
							onColorChoice={this.onColorChoice}
							id={this.id}
							onEditorState={( editorState ) => {
								this.editorState = editorState;
							}}
						/>
					}
				</div>
				{ this.props.peerReview ? <UserPairer
					id={this.id+'_pairer'}
					onAssignmentStudent={this.handlePeerAssignment}
					onClearStudent={this.handlePeerCleanup}
					filterOwners={this.props.peerReview.filterOwners}
				/> : null }
				{ this.props.peerReview ? <PeerSubmitModal
					show={this.state.showSubmitModal && this.state.peer}
					onHide={this.toggleSubmitModal}
					onSubmitToReviewer={() => {
						this.context.log({
							id: this.id,
							type: EDITOR_PEER_REPORT,
							value: md,
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
							value: md,
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
					disabledSubmitButton={this.state.submittedToPeer}
					disabledReviewButton={!this.state.submittedToPeer || this.state.submittedPeerComments}
					disabledFinalButton={!this.state.submittedPeerComments}
				/> : null }
				<ResetModal
					show={this.state.showResetModal}
					onHide={this.toggleResetModal}
					onSubmit={this.resetEditor}
				/>
				<SubmitModal
					show={this.state.showSubmitModal && !this.state.peer}
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
	allowSubmissions: PropTypes.bool,
	defaultValue: PropTypes.string,
	groupMode: PropTypes.bool,
	voiceTimeout: PropTypes.number,
	language: PropTypes.string,
	style: PropTypes.object
};

TextEditor.defaultProps = {
	allowSubmissions: true,
	defaultValue: DEFAULT_VALUE,
	groupMode: false,
	voiceTimeout: 5000,
	language: 'en-US',
	style: {}
};

TextEditor.contextType = SessionContext;


// EXPORTS //

export default TextEditor;
