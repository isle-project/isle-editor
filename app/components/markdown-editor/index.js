// MODULES //

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import markdownIt from 'markdown-it';
import pdfMake from 'pdfmake';
import katex from 'markdown-it-katex';
import markdownSub from 'markdown-it-sub';
import markdownIns from 'markdown-it-ins';
import markdownContainer from 'markdown-it-container';
import Button from 'react-bootstrap/lib/Button';
import saveAs from 'utils/file-saver';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import uppercase from '@stdlib/string/uppercase';
import removeLast from '@stdlib/string/remove-last';
import removeFirst from '@stdlib/string/remove-first';
import repeat from '@stdlib/string/repeat';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import contains from '@stdlib/assert/contains';
import trim from '@stdlib/string/trim';
import copy from '@stdlib/utils/copy';
import noop from '@stdlib/utils/noop';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import VoiceInput from 'components/input/voice';
import UserPairer from 'components/user-pairer';
import base64toBlob from 'utils/base64-to-blob';
import SessionContext from 'session/context.js';
import SimpleMDE from './simplemde.js';
import generatePDF from './generate_pdf.js';
import SaveModal from './save_modal.js';
import SubmitModal from './submit_modal.js';
import PeerSubmitModal from './peer_submit_modal.js';
import ResetModal from './reset_modal.js';
import TableSelect from './table_select.js';
import ColumnSelect from './column_select.js';
import Guides from './guides';
import FigureInsert from './figure_insert.js';
import TitleInsert from './title_insert.js';
import extractTitles from './extract_titles.js';
import createHTML from './create_html.js';
import createPreviewStyles from './create_preview_styles.js';
import './simplemde.css';
import './markdown_editor.css';


// VARIABLES //

const debug = logger( 'isle:markdown-editor' );
const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( katex, {
	throwOnError: false,
	errorColor: '#cc0000'
});
md.use( markdownSub );
md.use( markdownContainer, 'center' );
md.use( markdownIns );

pdfMake.vfs = {};

const DEFAULT_VALUE = repeat( '\n', 15 );
const RE_MARKDOWN_NONLINK = /\[[^\]]*\](?=[^[(:])/g;


// FUNCTIONS //

function replacerHTML( str, match ) {
	var ids = extractTitles( match );
	debug(' The object of the ids in replacerHTML is ' + JSON.stringify(ids) );
	var html = `${ids.title ? `<h1 class='center' style="font-size: 48px; width: 100%">${ids.title}</h1>` : null}
		${ids.name ? `<h2 class='center' style="font-size: 44px; width: 100%">${ids.name}` : null}`;
	html += `<br />${ids.advisor ? `Advisor(s): ${ids.advisor}` : null}</h2>`;
	debug(' the HTML in replacerHTML is ' + html );
	return html;
}

function replacer( key, value ) {
	if ( key === 'origin' ) {
		return void 0;
	}
	if ( key === 'sticky' ) {
		return void 0;
	}
	return value;
}


// MAIN //

/**
* A markdown editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.
*
* @property {string} defaultValue - default text of the editor
* @property {Array} toolbarConfig - array of toolbar element identifiers to be displayed
* @property {Object} options - options passed to the SimpleMDE constructor, the package on which this component is based; see their documentation for available options
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {Object} peerReview - if not null, enables peer review mode in which each submission is sent to another randomly chosen student and vice versa
* @property {number} intervalTime - time between auto saves
* @property {boolean} voiceControl - controls whether voice input is enabled
* @property {number} voiceTimeout - time in milliseconds after a chunk of recorded voice input is inserted
* @property {string} language - language identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked when editor text changes; receives the current text as its sole argument
*/
class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );

		var value = props.defaultValue;
		var hash = {};
		var out;
		if ( props.id && props.autoSave ) {
			var previous = localStorage.getItem( props.id );
			if ( previous ) {
				out = this.reMakeText( previous );
				value = out.text;
				hash = out.hash;
			}
		}

		this.state = {
			change: {
				text: '',
				removed: ''
			},
			value: value,
			hash: hash,
			showSaveModal: false,
			showSubmitModal: false,
			showResetModal: false,
			defaultValue: props.defaultValue,
			showTableSelect: false,
			showColumnSelect: false,
			fontSize: 12,
			showFigureInsert: false,
			showTitleInsert: false,
			showGuides: false,
			peer: null,
			submittedToPeer: false,
			submittedPeerComments: false
		};

		this.toolbarOpts = {
			'bold': 'bold',
			'italic': 'italic',
			'|': '|',
			'underline': {
				name: 'underline',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const start = '++';
					const end = '++';
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					let text = cm.getSelection();
					if (
						startsWith( text, start ) &&
						endsWith( text, end )
					) {
						text = removeLast( text );
						text = removeLast( text );
						text = removeFirst( text );
						text = removeFirst( text );
						cm.replaceSelection( text );
					} else {
						const wrappedStart = {
							line: startPoint.line,
							ch: startPoint.ch - 2
						};
						const wrappedEnd = {
							line: endPoint.line,
							ch: endPoint.ch + 2
						};
						let wrapped = cm.getRange( wrappedStart, wrappedEnd );
						if (
							startsWith( wrapped, start ) &&
							endsWith( wrapped, end )
						) {
							cm.replaceRange( text, wrappedStart, wrappedEnd );
						} else {
							text = text.split( '++' ).join( '' );
							cm.replaceSelection( start + text + end );
							startPoint.ch += 2;
							endPoint.ch = startPoint.ch + text.length;
							cm.setSelection( startPoint, endPoint );
						}
					}
					cm.focus();
				},
				className: 'fa fa-underline',
				title: 'Underline Text'
			},
			'new_line': {
				name: 'newLine',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					if ( startPoint.line === endPoint.line ) {
						const pos = {
							line: startPoint.line,
							ch: endPoint.ch
						};
						cm.replaceRange( '\\\n', pos );
					}
					while ( startPoint.line !== endPoint.line ) {
						var currentLine = cm.getLine( startPoint.line );
						if ( endsWith( currentLine, '\\' ) ) {
							cm.replaceRange( removeLast( currentLine ),
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						} else {
							cm.replaceRange( currentLine + '\\',
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						}
						startPoint.line += 1;
					}
					cm.focus();
				},
				className: 'fa fa-reply fa-flip-vertical',
				title: 'Add new line separator'
			},
			'center': {
				name: 'center',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const start = '::: center';
					const end = ':::';
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					const startLine = cm.getLine( startPoint.line );
					const endLine = cm.getLine( endPoint.line );
					const prevLine = cm.getLine( startPoint.line - 1 );
					const nextLine = cm.getLine( endPoint.line + 1 );
					if (
						startsWith( startLine, '::: center' ) &&
						startsWith( endLine, ':::' )
					) {
						cm.replaceRange( '',
							{ line: startPoint.line, ch: 0 },
							{ line: startPoint.line, ch: 99999999999999 }
						);
						cm.replaceRange( '',
							{ line: endPoint.line, ch: 0 },
							{ line: endPoint.line, ch: 99999999999999 }
						);
					}
					else if (
						prevLine && nextLine &&
						startsWith( prevLine, '::: center' ) &&
						startsWith( nextLine, ':::' )
					) {
						cm.replaceRange( '',
							{ line: startPoint.line - 1, ch: 0 },
							{ line: startPoint.line - 1, ch: 99999999999999 }
						);
						cm.replaceRange( '',
							{ line: endPoint.line + 1, ch: 0 },
							{ line: endPoint.line + 1, ch: 99999999999999 }
						);
					}
					else {
						let text = cm.getSelection();
						text = text.split( ':::' ).join( '' );
						cm.replaceSelection( start + '\n' + text + '\n' + end );
						startPoint.ch = 0;
						endPoint.ch = 3;
						endPoint.line += 2;
						cm.setSelection( startPoint, endPoint );
						cm.focus();
					}
				},
				className: 'fa fa-align-center',
				title: 'Center Element'
			},
			'insert_table': {
				name: 'insert_new_table',
				action: () => {
					this.toggleTableSelect();
				},
				className: 'fa fa-table',
				title: 'Insert Table'
			},
			'heading': 'heading',
			'unordered_list': 'unordered-list',
			'ordered_list': 'ordered-list',
			'link': 'link',
			'insert_columns': {
				name: 'insert_new_columns',
				action: () => {
					this.toggleColumnSelect();
				},
				className: 'fa fa-ellipsis-h',
				title: 'Insert Columns'
			},
			'open_markdown': {
				name: 'open_markdown',
				action: ( editor ) => {
					const input = document.createElement( 'input' );
					input.type = 'file';
					input.accept = '.md';
					input.addEventListener( 'change', this.handleFileSelect, false );
					input.click();
				},
				className: 'fa fa-folder-open',
				title: 'Open Markdown File'
			},
			'save': {
				name: 'save',
				action: () => {
					this.toggleSaveModal();
				},
				className: 'fa fa-save',
				title: 'Save Report'
			},
			'submit': {
				name: 'submit',
				action: () => {
					this.toggleSubmitModal();
				},
				className: 'fa fa-share-square',
				title: 'Submit'
			},
			'voice': {
				name: 'recorder',
				className: 'voice_input_button',
				title: ''
			},
			'preview': 'preview',
			'side_by_side': 'side-by-side',
			'fullscreen': 'fullscreen',
			'font_size': {
				name: 'font_size',
				className: 'font_size_button',
				title: 'Select Font Size'
			},
			'figure_insert': {
				name: 'figure_insert',
				className: 'fa fa-clone',
				title: 'Insert Figures',
				action: () => {
					this.toggleFigureInsert();
				}
			},
			'title_insert': {
				name: 'title_insert',
				className: 'fa fa-credit-card',
				title: 'Insert Title',
				action: () => {
					this.toggleTitleInsert();
				}
			},
			'guides': {
				name: 'guides',
				className: 'fa fa-question-circle',
				title: 'Editor Guides',
				action: () => {
					this.toggleGuides();
				}
			},
			'reset': {
				name: 'reset',
				action: () => {
					this.toggleResetModal();
				},
				className: 'fa fa-eraser',
				title: 'Reset'
			}
		};
		this.loadFonts();
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			newState.defaultValue = nextProps.defaultValue;
			return newState;
		}
		return null;
	}

	componentDidMount() {
		this.interval = setInterval( this.handleAutosave, this.props.intervalTime );
		this.initializeEditor();
		const toolbars = this.wrapper.getElementsByClassName( 'editor-toolbar' );
		if ( toolbars.length > 0 ) {
			const editorToolbar = toolbars[ 0 ];
			const fontSizeToRemove = editorToolbar.getElementsByClassName( 'font_size_button' );
			if ( fontSizeToRemove.length > 0 ) {
				ReactDOM.render( <input type='number' min={4} max={99}
					onChange={( event ) => {
						this.setState({
							fontSize: event.target.value
						});
					}}
					defaultValue={this.state.fontSize}
					className='font_size_input'
				/>, fontSizeToRemove[ 0 ] );
			}
			const voiceToRemove = editorToolbar.getElementsByClassName( 'voice_input_button' );
			if ( voiceToRemove.length > 0 ) {
				ReactDOM.render( <VoiceInput mode="microphone"
					language={this.props.language}
					timeout={this.props.voiceTimeout}
					width={30}
					height={30}
					onFinalText={this.recordedText}
				/>, voiceToRemove[ 0 ] );
			}
		}
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( action && action.id === this.props.id ) {
				if ( action.type === 'MARKDOWN_EDITOR_PEER_REPORT' ) {
					const notification = session.addNotification({
						title: 'Report received',
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
								session.removeNotification( notification );
								this.setEditorValue( action.value );
							}}>Open Report</Button>
						</div>
					});
				}
				else if ( action.type === 'MARKDOWN_EDITOR_PEER_COMMENTS' ) {
					const notification = session.addNotification({
						title: 'Comments received',
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
								session.removeNotification( notification );
								this.setEditorValue( action.value );
							}}>Open Comments</Button>
						</div>
					});
				}
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		if (
			this.state.defaultValue !== prevState.defaultValue ||
			this.props.toolbarConfig !== prevProps.toolbarConfig ||
			this.props.voiceControl !== prevProps.voiceControl
		) {
			this.simplemde.toTextArea(); // Reset text area to remove SimpleMDE instance...
			this.initializeEditor();
		}
		this.simplemde.codemirror.refresh();
	}

	componentWillUnmount() {
		this.handleAutosave();
		if ( this.interval ) {
			clearInterval( this.interval );
		}
		this.unsubscribe();
	}

	setEditorValue = ( text ) => {
		const out = this.reMakeText( text );
		this.setState({
			'hash': out.hash
		});
		this.simplemde.codemirror.execCommand( 'selectAll' );
		this.simplemde.codemirror.replaceSelection( out.text );
	}

	logChange() {
		const { change } = this.state;
		if ( change.origin && change.text.length > 0 ) {
			let origin = change.origin;
			if ( startsWith( origin, '+' ) ) {
				origin = removeFirst( origin );
			}
			if ( this.props.id ) {
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'MARKDOWN_EDITOR_'+uppercase( origin ),
					value: JSON.stringify( change, replacer, 2 )
				});
			}
			return true;
		}
		return false;
	}

	loadFonts() {
		import( /* webpackChunkName: "fonts" */ './fonts.js' )
			.then( fonts => {
				debug( 'Successfully loaded fonts...' );
				pdfMake.vfs = fonts.default;
			})
			.catch( err => {
				debug( 'Encountered an error while loading fonts: '+err.message );
			});
	}

	initializeEditor() {
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.state.value,
			previewRender: this.previewRender,
			toolbar: this.createToolbar(),
			status: [ 'lines', 'words' ],
			indentWithTabs: false,
			promptURLs: true,
			tabSize: 2,
			language: this.props.language,
			...this.props.options
		});

		// Add event listeners:
		this.simplemde.codemirror.on( 'change', ( instance, change ) => {
			let obj = this.state.change;
			if ( !obj.origin ) {
				obj.origin = change.origin;
			}
			else if ( change.origin !== obj.origin ) {
				this.logChange();
				obj = {
					'text': '',
					'removed': ''
				};
			}
			if ( !obj.from ) {
				obj.from = change.from;
			} else {
				if ( change.from.line < obj.from.line ) {
					obj.from.line = change.from.line;
				}
				if ( change.from.ch < obj.from.ch ) {
					obj.from.ch = change.from.ch;
				}
			}
			if ( !obj.to || change.to.ch > obj.to.ch ) {
				obj.to = change.to;
			} else {
				if ( change.to.line > obj.to.line ) {
					obj.to.line = change.to.line;
				}
				if ( change.to.ch > obj.to.ch ) {
					obj.to.ch = change.to.ch;
				}
			}
			if ( change.origin === '+input' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			else if ( change.origin === '+delete' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			else if ( change.origin === 'paste' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			this.setState({
				change: obj,
				value: this.simplemde.value()
			}, () => {
				this.props.onChange( this.state.value );
			});
		});

		this.simplemde.codemirror.on( 'drop', ( instance, event ) => {
			event.preventDefault();
			const key = event.dataTransfer.getData( 'text/plain' );
			const html = event.dataTransfer.getData( 'text/html' );
			const coords = instance.coordsChar({
				left: event.x + window.pageXOffset,
				top: event.y + window.pageYOffset
			});
			if ( key && html ) {
				const { hash } = this.state;
				hash[ key ] = html;
				instance.replaceRange( key, coords );
				this.setState({
					hash
				});
			}
			else if ( key && !html ) {
				instance.replaceRange( key, coords );
			}
			else if ( !key && html ) {
				instance.replaceRange( html, coords );
			}
		});
	}

	handleAutosave = () => {
		if ( this.props.id ) {
			let text = this.state.value;
			text = this.replacePlaceholders( text );
			localStorage.setItem( this.props.id, text );
			const logged = this.logChange();
			if ( logged ) {
				this.setState({
					change: {
						'text': []
					}
				});
			}
		}
	}

	replacePlaceholders( plainText, skipComments ) {
		let replacementHash;
		const { hash } = this.state;
		for ( let key in hash ) {
			if ( hasOwnProp( hash, key ) ) {
				var matchInPipeRegExp = new RegExp('\\|\\s*' + key + '\\s*\\|');
				let id = replace( key, '<!--', '' );
				id = replace( id, '-->', '' );
				if ( !skipComments || matchInPipeRegExp.test(plainText) ) {
					// will have an issue if insert one figure in table and same figure outside table
					replacementHash = `<!-- START:${id} -->${hash[ key ]}<!-- END -->`;
				} else {
					replacementHash = `\n\n${hash[ key ]}\n\n`;
				}
				var re = new RegExp( '\\s*'+key+'\\s*', 'g' );
				plainText = plainText.replace( re, replacementHash );
			}
		}
		debug('this is the plaintext ' + plainText);
		return plainText;
	}

	reMakeText = ( text ) => {
		const hash = {};
		const START_TAG = '<!-- START:';
		const START_TAG_LEN = START_TAG.length;
		const CLOSING_TAG = '-->';
		const CLOSING_TAG_LEN = CLOSING_TAG.length;
		const END_TAG = '<!-- END -->';
		let startIndex;
		let newText;
		let section;
		let startS;
		let endE;
		let bigE;
		let data;
		let key;

		newText = text;
		startIndex = 0;
		while ( text.indexOf( START_TAG, startIndex ) !== -1 ) {
			// We start on the first match:
			startS = text.indexOf( START_TAG, startIndex );
			endE = text.indexOf( CLOSING_TAG, startS );
			bigE = text.indexOf( END_TAG, startS );

			key = text.substr( startS + START_TAG_LEN, endE - startS - (START_TAG_LEN+1) );
			data = text.substr( endE + CLOSING_TAG_LEN, bigE - endE - CLOSING_TAG_LEN );
			section = text.substr( startS, bigE + (START_TAG_LEN+1) - startS );
			hash[ `<!--${key}-->` ] = trim( data );
			newText = newText.replace( section, `<!--${key}-->` );

			// Update the startIndex:
			startIndex = bigE + CLOSING_TAG_LEN;
		}
		return { 'text': newText, 'hash': hash };
	}

	handleFileSelect = ( evt ) => {
		const files = evt.target.files;
		const reader = new FileReader();
		reader.onload = () => {
			this.setEditorValue( reader.result );
		};
		reader.readAsText( files[ 0 ] );
	}

	createToolbar = () => {
		const toolbarConfig = copy( this.props.toolbarConfig );
		const toolbar = [];
		let tbOpt; // Gives the name as a string of option
		let tbObj; // Gives the object that will be put in array
		// The negation is to make sure that voice is not added twice
		if ( this.props.voiceControl && !contains( toolbarConfig, 'voice' ) ) {
			toolbarConfig.push( 'voice' );
		}
		// Handle case of adding in figure insert:
		if ( contains( toolbarConfig, 'figure_insert' ) ) {
			toolbarConfig.push( '|' );
			toolbarConfig.push( 'figure_insert' );
		}
		if ( this.props.defaultValue !== DEFAULT_VALUE ) {
			toolbarConfig.push( 'reset' );
		}
		for ( let i = 0; i < toolbarConfig.length; i++ ) {
			tbOpt = toolbarConfig[ i ];
			tbObj = this.toolbarOpts[ tbOpt ];
			toolbar.push( tbObj );
		}
		return toolbar;
	}

	recordedText = ( text ) => {
		var sel = this.simplemde.codemirror.somethingSelected();
		if ( sel ) {
			this.simplemde.codemirror.replaceSelection( text );
		}
		else {
			var c = this.simplemde.codemirror.getCursor();
			this.simplemde.codemirror.replaceRange( text, c );
		}
	}

	columnTagConvert = ( plainText ) => {
		var firstIndex;
		var colCount = 1;
		const RANDOMSTR = '3hiueronenrklnwfkln';
		plainText = plainText.replace('<!--ColGroupStart-->', `<div style="display: table"><div style="width: ${RANDOMSTR}%; float: left;">`);
		while ( plainText.includes('<!--Column') ) {
			firstIndex = plainText.indexOf('<!--Column');
			if ( plainText.charAt(firstIndex + '<!--Column'.length) === '-' ) {
				break;
			}
			colCount += 1;
			plainText = plainText.replace(`<!--Column${colCount}-->`, `</div>\n<div style="width: ${RANDOMSTR}%; float: left;">`);
		}

		plainText = plainText.replace('<!--ColGroupEnd-->', '</div></div>');
		var colWidth = 100 / colCount;
		plainText = replace(plainText, RANDOMSTR, colWidth.toString());

		return plainText;
	}

	titleTagConvert = ( plainText ) => {
		// Use a regular expression to match the contents of the title comment:
		const regTitle = /<!--TitleText([\s\S]*?)-->/;
		plainText = plainText.replace(regTitle, replacerHTML);
		return plainText;
	}

	previewRender = ( plainText ) => {
		// Add columns:
		plainText = this.columnTagConvert( plainText );

		// Take the plaintext and insert the images via hash:
		plainText = this.replacePlaceholders( plainText, true );

		plainText = this.titleTagConvert( plainText );

		// Cycle through and remove old stylings:
		var allStyles = document.getElementsByTagName('style');
		var tmpStyle;
		for ( var i = allStyles.length - 1; i >= 0; i-- ) {
			tmpStyle = allStyles[i];
			if ( contains(tmpStyle.innerText, '.editor-preview-active') ) {
				tmpStyle.parentNode.removeChild(tmpStyle);
			}
		}

		// Side effect: Create style object and add to document head
		var style = document.createElement('style');
		style.type = 'text/css';
		style.appendChild( document.createTextNode( createPreviewStyles( this.state.fontSize ) ) );

		var head = document.head;
		head.appendChild( style );

		// Render the markdown:
		return md.render( plainText );
	}

	allowDrop( event ) {
		event.preventDefault();
	}

	toggleColumnSelect = () => {
		this.setState({
			showColumnSelect: !this.state.showColumnSelect
		});
	}

	toggleFigureInsert = () => {
		this.setState({
			showFigureInsert: !this.state.showFigureInsert
		});
	}

	toggleSaveModal = ( event, clbk = noop ) => {
		this.setState({
			showSaveModal: !this.state.showSaveModal
		}, clbk );
	}

	toggleSubmitModal = ( event, clbk = noop ) => {
		this.setState({
			showSubmitModal: !this.state.showSubmitModal
		}, clbk );
	}

	toggleResetModal = ( event, clbk = noop ) => {
		this.setState({
			showResetModal: !this.state.showResetModal
		}, clbk );
	}

	toggleTableSelect = () => {
		this.setState({
			showTableSelect: !this.state.showTableSelect
		});
	}

	toggleTitleInsert = () => {
		this.setState({
			showTitleInsert: !this.state.showTitleInsert
		});
	}

	toggleGuides = () => {
		this.setState({
			showGuides: !this.state.showGuides
		});
	}

	resetEditor = () => {
		localStorage.removeItem( this.props.id );
		this.simplemde.codemirror.execCommand( 'selectAll' );
		this.simplemde.codemirror.replaceSelection( this.props.defaultValue );
		this.context.addNotification({
			title: 'Reset',
			message: 'Your report has been successfully deleted and the editor reset to its default value',
			level: 'success',
			position: 'tr'
		});
	}

	saveMarkdown = () => {
		const title = document.title || 'provisoric';
		let text = this.simplemde.value();
		text = this.replacePlaceholders( text );
		const blob = new Blob([ text ], {
			type: 'text/html'
		});
		this.toggleSaveModal( null, () => {
			saveAs( blob, title+'.md' );
		});
	}

	exportHTML = () => {
		const title = document.title || 'provisoric';
		const mdValue = this.simplemde.value();
		const body = this.previewRender( mdValue );
		const html = createHTML( title, body, Number( this.state.fontSize ) );
		const blob = new Blob([ html ], {
			type: 'text/html'
		});
		this.toggleSaveModal( null, () => {
			saveAs( blob, title+'.html' );
		});
	}

	exportPDF = ( config ) => {
		const title = document.title || 'provisoric';
		let text = this.simplemde.value();
		text = this.replacePlaceholders( text, true ); // replace all new line characters in tables for parsing to work

		// Replace accidentally unescaped square brackets:
		text = replace( text, RE_MARKDOWN_NONLINK, '\\[$1\\]' );
		try {
			const ast = md.parse( text );
			const doc = generatePDF( ast, config, this.state.fontSize );
			this.toggleSaveModal( null, () => {
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
	}

	submitReport = (additionalRecipientObj = null, message = null) => {
		const session = this.context;
		if ( session.anonymous ) {
			return session.addNotification({
				title: 'Sign in',
				message: 'You have to sign in before you can submit your report',
				level: 'warning',
				position: 'tr'
			});
		}
		let text = this.simplemde.value();
		text = this.replacePlaceholders( text, true );

		// Replace accidentally unescaped square brackets:
		text = replace( text, RE_MARKDOWN_NONLINK, '\\[$1\\]' );

		let html = this.previewRender( text );
		const title = document.title || 'provisoric';
		html = createHTML( title, html, Number( this.state.fontSize ) );
		const ast = md.parse( text );

		// Create the config so that the function can run:
		const config = {
			// LETTER size:
			'pageSize': {
				'width': 8.5 * 72.0,
				'height': 11.0 * 72.0
			},
			'pageOrientation': 'portrait'
		};
		const doc = generatePDF( ast, config, this.state.fontSize );
		const pdfDocGenerator = pdfMake.createPdf( doc );
		pdfDocGenerator.getBase64( ( pdf ) => {
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
						filename: 'report.md',
						content: this.replacePlaceholders( this.simplemde.value() ),
						contentType: 'text/plain'
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
				// force the message
				msg.text = message;
				session.sendMail( msg, additionalRecipientObj.email );
			}

			// Upload report:
			const htmlForm = new FormData();
			const pdfForm = new FormData();

			let filename = 'report.html';
			if ( this.props.id ) {
				filename = this.props.id+'_'+filename;
			}
			const htmlFile = new File([ html ], filename, {
				type: 'text/html'
			});
			htmlForm.append( 'file', htmlFile );

			filename = 'report.pdf';
			if ( this.props.id ) {
				filename = this.props.id+'_'+filename;
			}
			const pdfBlob = base64toBlob( pdf, 'application/pdf' );
			const pdfFile = new File([ pdfBlob ], filename, {
				type: 'application/pdf'
			});
			pdfForm.append( 'file', pdfFile );

			session.uploadFile( htmlForm );
			session.uploadFile( pdfForm );

			session.addNotification({
				title: 'Submitted',
				message: 'Your report has been successfully submitted',
				level: 'success',
				position: 'tr'
			});

			if ( this.props.id ) {
				session.log({
					id: this.props.id,
					type: 'MARKDOWN_EDITOR_SUBMIT',
					value: this.state.value
				});
			}
		});
	}

	handlePeerAssignment = ( assignment ) => {
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
		this.setState({
			peer: null
		}, () => {
			this.context.addNotification({
				title: 'Pairing ended',
				message: 'The peer review pairings were ended.',
				level: 'info',
				position: 'tr'
			});
		});
	}

	render() {
		const session = this.context;
		return (
			<Fragment>
				<div id={this.props.id} ref={( div ) => { this.wrapper = div; }} className="markdown-editor" style={this.props.style} >
					<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
				</div>
				{ this.props.peerReview ? <UserPairer
					id={this.props.id+'_pairer'}
					onAssignmentStudent={this.handlePeerAssignment}
					onClearStudent={this.handlePeerCleanup}
				/> : null }
				<SaveModal
					show={this.state.showSaveModal}
					onHide={this.toggleSaveModal}
					exportPDF={this.exportPDF}
					exportHTML={this.exportHTML}
					saveMarkdown={this.saveMarkdown}
					handleSave={() => {
						this.toggleSaveModal();
						session.addNotification({
							title: 'Report saved',
							message: 'The report has been saved in the local storage of the current browser.',
							level: 'success',
							position: 'tr'
						});
						this.handleAutosave();
					}}
				/>
				<SubmitModal
					show={this.state.showSubmitModal && !this.state.peer}
					onHide={this.toggleSubmitModal}
					onSubmit={this.submitReport}
				/>
				{ this.props.peerReview ? <PeerSubmitModal
					show={this.state.showSubmitModal && this.state.peer}
					onHide={this.toggleSubmitModal}
					onSubmitToReviewer={() => {
						const md = this.replacePlaceholders( this.simplemde.value() );
						session.log({
							id: this.props.id,
							type: 'MARKDOWN_EDITOR_PEER_REPORT',
							value: md,
							noSave: true
						}, this.state.peer.to.email );
						this.setState({
							submittedToPeer: true
						});
						this.submitReport();
					}}
					onSubmitComments={() => {
						const md = this.replacePlaceholders( this.simplemde.value() );
						session.log({
							id: this.props.id,
							type: 'MARKDOWN_EDITOR_PEER_COMMENTS',
							value: md,
							noSave: true
						}, this.state.peer.from.email );
						this.setState({
							submittedPeerComments: true
						});
						this.submitReport();
					}}
					submitButtonLabel={this.props.peerReview.submitButtonLabel}
					reviewButtonLabel={this.props.peerReview.reviewButtonLabel}
					disabledSubmitButton={this.state.submittedToPeer}
					disabledReviewButton={!this.state.submittedToPeer}
				/> : null }
				<ResetModal
					show={this.state.showResetModal}
					onHide={this.toggleResetModal}
					onSubmit={this.resetEditor}
				/>
				<TableSelect
					show={this.state.showTableSelect}
					onHide={()=>{
						this.setState({
							showTableSelect: false
						});
					}}
					onClick={( tblString )=>{
						// Insert into markdown editor
						var c = this.simplemde.codemirror.getCursor();
						this.simplemde.codemirror.replaceRange( tblString, c);
					}}
				/>
				<ColumnSelect
					show={this.state.showColumnSelect}
					onHide={()=>{
						this.setState({
							showColumnSelect: false
						});
					}}
					onClick={( tblString, lines )=>{
						var c = this.simplemde.codemirror.getCursor();
						this.simplemde.codemirror.replaceRange( tblString, c);
					}}
				/>
				<FigureInsert
					show={this.state.showFigureInsert && (!isUndefinedOrNull(this.props.plots))}
					onHide={()=>{
						this.setState({
							showFigureInsert: false
						});
					}}
					studentPlots={this.props.plots}
				/>
				<Guides
					show={this.state.showGuides}
					onHide={()=>{
						this.setState({
							showGuides: false
						});
					}}
				/>
				<TitleInsert
					show={this.state.showTitleInsert}
					onHide={this.toggleTitleInsert}
					onClick={( ids )=>{
						this.simplemde.codemirror.replaceRange( `<!--TitleText\nTitle: ${ids.title}\nName: ${ids.name}\nAdvisor: ${ids.advisor}\n-->`,
								{ line: 1, ch: 0 },
								{ line: 1, ch: 99999999999999 }
							);
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: DEFAULT_VALUE,
	options: {},
	toolbarConfig: [
		'bold', 'italic', 'underline', 'font_size', 'new_line', 'center', '|',
		'insert_table', 'heading', 'unordered_list', 'ordered_list', 'link', 'insert_columns', '|',
		'title_insert', 'preview', 'side_by_side', 'fullscreen', '|',
		'open_markdown', 'save', 'submit', '|',
		'guides'
	],
	autoSave: true,
	intervalTime: 60000,
	peerReview: null,
	plots: [],
	voiceControl: false,
	voiceTimeout: 5000,
	language: 'en-US',
	style: {},
	onChange() {}
};

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	toolbarConfig: PropTypes.array,
	options: PropTypes.object,
	autoSave: PropTypes.bool,
	intervalTime: PropTypes.number,
	voiceControl: PropTypes.bool,
	voiceTimeout: PropTypes.number,
	language: PropTypes.string,
	peerReview: PropTypes.shape({
		submitButtonLabel: PropTypes.string,
		reviewButtonLabel: PropTypes.string
	}),
	plots: PropTypes.array,
	style: PropTypes.object,
	onChange: PropTypes.func
};

MarkdownEditor.contextType = SessionContext;


// EXPORTS //

export default MarkdownEditor;
