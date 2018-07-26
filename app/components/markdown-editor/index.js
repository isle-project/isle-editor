// MODULES //

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import markdownIt from 'markdown-it';
import pdfMake from 'pdfmake/build/pdfmake.min.js';
import katex from 'markdown-it-katex';
import markdownSub from 'markdown-it-sub';
import markdownIns from 'markdown-it-ins';
import markdownContainer from 'markdown-it-container';
import FileSaver from 'file-saver';
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
import indexOf from '@stdlib/utils/index-of';
import VoiceInput from 'components/input/voice';
import fonts from './fonts.js';
import generatePDF from './generate_pdf.js';
import SaveModal from './save_modal.js';
import SubmitModal from './submit_modal.js';
import TableSelect from './table_select.js';
import ColumnSelect from './column_select.js';
import base64toBlob from './base64_to_blob.js';
import FigureInsert from './figure_insert.js';
import TitleInsert from './title_insert.js';
import 'simplemde/dist/simplemde.min.css';
import './markdown_editor.css';


// VARIABLES //

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

pdfMake.vfs = fonts;

const createHTML = ( title, body, fontSize ) => `<!doctype html>
<html lang=en>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" integrity="sha384-B41nY7vEWuDrE9Mr+J2nBL0Liu+nl/rBXTdpQal730oTHdlrlXHzYMOhDU60cwde" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
		<style media="screen" type="text/css">
			body {
				font-family: 'Open Sans', sans-serif;
				font-size: ${fontSize}px !important;
				margin-left: auto;
				margin-right: auto;
				padding: 10px;
				width: 100%;
				max-width: 1200px;
				height: 100%;
				display: block;
			}
			h1 {
				color: #2e4468;
				font-size: ${fontSize + 24}px !important;
				font-weight: bold;
				letter-spacing: 1px;
			}
			h2 {
				font-size: ${fontSize + 16}px !important;
				color: #3c763d;
				font-weight: 600;
			}
			h3 {
				font-size: ${fontSize + 8}px !important;
				color: #2e4468;
				font-weight: 600;
			}
			h4 {
				font-size: ${fontSize + 4}px !important;
				color: #ca5800;
				font-weight: 600;
			}
			tr {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
			}
			th {
				color: #464a4c;
				background-color: #eceeef;
				padding: .3rem;
				border-top: 1px solid #eceeef;
				text-align: left;
				font-weight: bold;
			}
			th, td {
				display: table-cell;
			}
			td {
				padding: .3rem;
				vertical-align: top;
				border-top: 1px solid #eceeef;
			}
			thead {
				display: table-header-group;
				vertical-align: middle;
			}
			table {
				width: 100%;
				max-width: 100%;
				margin-bottom: 1rem;
				display: table;
				border-spacing: 2px;
				border-color: grey;
				text-align: left;
			}
			a {
				color: #2e4468;
			}
			pre {
				display: block;
				padding: 9.5px;
				margin: 0 0 10px;
				line-height: 1.42857143;
				color: #333;
				word-break: break-all;
				word-wrap: break-word;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
			code {
				white-space: pre-wrap;
			}
			.center {
				width: 50%;
				display: block;
				margin: 0 auto;
				text-align: center;
			}
		</style>
		<script src="https://use.fontawesome.com/1ef7eff9d5.js"></script>
	</head>
	<body>
	${body}
	</body>
</html>`;


// FUNCTIONS //

function createPreviewStyles(fontSize) {
	fontSize = Number( fontSize );
	return `.editor-preview-active {
				font-size: ${fontSize}px !important;
			}
			.editor-preview-active h1 {
				font-size: ${fontSize + 24}px !important;
			}
			.editor-preview-active h2 {
				font-size: ${fontSize + 16}px !important;
			}
			.editor-preview-active h3 {
				font-size: ${fontSize + 8}px !important;
			}
			.editor-preview-active h4 {
				font-size: ${fontSize + 4}px !important;
			}
			.title-tag {
				font-size: 72px !important;
			}
			.subtitle-tag {
				font-size: 48px !important;
				align
			}
		</style>`;
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
			defaultValue: props.defaultValue,
			showTableSelect: false,
			showColumnSelect: false,
			fontSize: 12,
			showFigureInsert: false,
			showTitleInsert: false
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
			}
		};
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
		if ( this.interval ) {
			clearInterval( this.interval );
		}
	}

	logChange() {
		const { change } = this.state;
		if ( change.origin && change.text.length > 0 ) {
			let origin = change.origin;
			if ( startsWith( origin, '+' ) ) {
				origin = removeFirst( origin );
			}
			if ( this.props.id ) {
				const { session } = this.context;
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

	replacePlaceholders( plainText, skipCommens ) {
		let replacementHash;
		const { hash } = this.state;
		for ( let key in hash ) {
			if ( hasOwnProp( hash, key ) ) {
				let id = replace( key, '<!--', '' );
				id = replace( id, '-->', '' );
				if ( !skipCommens ) {
					replacementHash = `<!-- START:${id} -->${hash[ key ]}<!-- END -->`;
				} else {
					replacementHash = `\n\n${hash[ key ]}\n\n`;
				}
				var re = new RegExp( '\\s*'+key+'\\s*', 'g' );
				plainText = plainText.replace( re, replacementHash );
			}
		}
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
			let text = reader.result;
			var out = this.reMakeText(text);
			this.setState({
				'hash': out.hash
			});
			this.simplemde.codemirror.execCommand( 'selectAll' );
			this.simplemde.codemirror.replaceSelection( out.text );
		};
		reader.readAsText( files[ 0 ] );
	}

	createToolbar() {
		const toolbarConfig = copy( this.props.toolbarConfig );
		const toolbar = [];
		let tbOpt; // Gives the name as a string of option
		let tbObj; // Gives the object that will be put in array
		// The negation is to make sure that voice is not added twice
		if ( this.props.voiceControl && !contains( toolbarConfig, 'voice' ) ) {
			toolbarConfig.push( 'voice' );
		}
		// Handle case of adding in figure insert
		if ( this.props.figureInsert && !contains( toolbarConfig, 'figure_insert' ) ) {
			toolbarConfig.push( '|' );
			toolbarConfig.push(' figure_insert' );
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
			this.simplemde.codemirror.replaceSelection( text);
		}
		else {
			var c = this.simplemde.codemirror.getCursor();
			this.simplemde.codemirror.replaceRange( text, c);
		}
	}

	columnTagConvert = ( plainText ) => {
		var firstIndex;
		var colCount = 1;
		const RANDOMSTR = '3hiueronenrklnwfkln';
		plainText = plainText.replace('<!--ColGroupStart-->', `<div><div style="width: ${RANDOMSTR}%; float: left;">`);
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

		function replacer( str, match, offset, s) {
			let title;
			let name;
			let advisor;

			const titleIndex = match.indexOf('Title: ');
			if ( titleIndex !== -1 ) {
				const titleStartsAt = titleIndex + 'Title: '.length;
				const secondNewLineIndex = match.indexOf( '\n', titleIndex + 1 );
				title = match.slice( titleStartsAt, secondNewLineIndex );
			}

			const nameIndex = match.indexOf('Name: ');
			if ( nameIndex !== -1 ) {
				const nameStartsAt = nameIndex + 'Name: '.length;
				const nameLineIndex = match.indexOf( '\n', nameStartsAt );
				name = match.slice( nameStartsAt, nameLineIndex );
			}

			const advisorIndex = match.indexOf('Advisor: ' );
			if ( advisorIndex !== -1 ) {
				const advisorStartsAt = advisorIndex + 'Advisor: '.length;
				const advisorLineIndex = match.indexOf( '\n', advisorStartsAt );
				advisor = match.slice( advisorStartsAt, advisorLineIndex );
			}

			// Do the replacement
			return `<h1 class='center' style="font-size: 48px; width: 100%">${title}</h1>
				<h2 class='center' style="font-size: 44px; width: 100%">${name}<br />${advisor !== null ? `Advisor(s): ${advisor}` : null}</h2>`;
		}

		// Using regexp
		const regTitle = /<!--TitleText([\s\S]*?)-->/;
		plainText = plainText.replace(regTitle, replacer);
		return plainText;
	}

	previewRender = ( plainText ) => {
		// Add columns:
		plainText = this.columnTagConvert( plainText );

		// Take the plaintext and insert the images via hash:
		plainText = this.replacePlaceholders( plainText );

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

	saveMarkdown = () => {
		const title = document.title || 'provisoric';
		let text = this.simplemde.value();
		text = this.replacePlaceholders( text );
		const blob = new Blob([ text ], {
			type: 'text/html'
		});
		this.toggleSaveModal( null, () => {
			FileSaver.saveAs( blob, title+'.md' );
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
			FileSaver.saveAs( blob, title+'.html' );
		});
	}

	exportPDF = ( config ) => {
		const title = document.title || 'provisoric';
		let text = this.simplemde.value();
		text = this.replacePlaceholders( text, true );
		const ast = md.parse( text );
		const doc = generatePDF( ast, config, this.state.fontSize );
		this.toggleSaveModal( null, () => {
			pdfMake.createPdf( doc ).download( title );
		});
	}

	submitReport = () => {
		const { session } = this.context;
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
		let html = this.previewRender( text );
		const title = document.title || 'provisoric';
		html = createHTML( title, html, Number( this.state.fontSize ) );
		const ast = md.parse( text );

		// Create the config so that the function can run:
		const config = { 'pageSize': 'LETTER', 'pageOrientation': 'portrait' };
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
						content: text,
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

	render() {
		return (
			<Fragment>
				<div id={this.props.id} ref={( div ) => { this.wrapper = div; }} className="markdown-editor" style={this.props.style} >
					<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
				</div>
				<SaveModal
					show={this.state.showSaveModal}
					onHide={this.toggleSaveModal}
					exportPDF={this.exportPDF}
					exportHTML={this.exportHTML}
					saveMarkdown={this.saveMarkdown}
					handleSave={() => {
						this.toggleSaveModal();
						this.context.session.addNotification({
							title: 'Report saved',
							message: 'The report has been saved in the local storage of the current browser.',
							level: 'success',
							position: 'tr'
						});
						this.handleAutosave();
					}}
				/>
				<SubmitModal
					show={this.state.showSubmitModal}
					onHide={this.toggleSubmitModal}
					onSubmit={this.submitReport}
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


// DEFAULT PROPERTIES //

MarkdownEditor.defaultProps = {
	defaultValue: repeat( '\n', 15 ),
	intervalTime: 60000,
	language: 'en-US',
	onChange() {},
	options: {},
	plots: [],
	style: {},
	toolbarConfig: [
		'bold', 'italic', 'underline', 'font_size',
		'new_line', 'center', '|',
		'insert_table', 'heading', 'unordered_list',
		'ordered_list', 'link', 'insert_columns', '|', 
		'figure_insert', '|', 'title_insert',
		'preview', 'side_by_side', 'fullscreen', '|',
		'open_markdown', 'save', 'submit', '|',
		'voice'
	],
	options: {},
	autoSave: true,
	intervalTime: 60000,
	voiceControl: false,
	voiceTimeout: 5000,
	language: 'en-US',
	style: {},
	onChange() {}
};


// PROPERTY TYPES //

MarkdownEditor.propDescriptions = {
	defaultValue: 'default text of the editor',
	toolbarConfig: 'array of toolbar element identifiers to be displayed',
	options: 'options passed to the SimpleMDE constructor, the package on which this component is based; see their documentation for available options',
	autoSave: 'controls whether the editor should save the current text to the local storage of the browser at a given time interval',
	intervalTime: 'time between auto saves',
	voiceControl: 'controls whether voice input is enabled',
	voiceTimeout: 'time in milliseconds after a chunk of recorded voice input is inserted',
	language: 'language identifier',
	style: 'CSS inline styles',
	onChange: 'callback invoked when editor text changes; receives the current text as its sole argument'
};

MarkdownEditor.propTypes = {
	defaultValue: PropTypes.string,
	figureInsert: PropTypes.array,
	toolbarConfig: PropTypes.array,
	options: PropTypes.object,
	autoSave: PropTypes.bool,
	intervalTime: PropTypes.number,
	voiceControl: PropTypes.bool,
	voiceTimeout: PropTypes.number,
	language: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.object,
	plots: PropTypes.array,
	style: PropTypes.object,
	onChange: PropTypes.func
};

MarkdownEditor.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MarkdownEditor;
