// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import markdownIt from 'markdown-it';
import katex from 'markdown-it-katex';
import markdownSub from 'markdown-it-sub';
import markdownIns from 'markdown-it-ins';
import markdownContainer from 'markdown-it-container';
import FileSaver from 'file-saver';
import replace from '@stdlib/string/replace';
import hasOwnProp from '@stdlib/assert/has-own-property';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import removeLast from '@stdlib/string/remove-last';
import removeFirst from '@stdlib/string/remove-first';
import VoiceInput from 'components/input/voice';
import 'simplemde/dist/simplemde.min.css';
import './markdown-editor.css';
import { clearInterval } from 'timers';


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

const createHTML = ( title, body ) => `<!doctype html>
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
				font-size: 16px !important;
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
				font-size: 40px;
				font-weight: bold;
				letter-spacing: 1px;
			}
			h2 {
				font-size: 32px;
				color: #3c763d;
				font-weight: 600;
			}
			h3 {
				font-size: 24px;
				color: #2e4468;
				font-weight: 600;
			}
			h4 {
				font-size: 20px;
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


// MAIN //

class MarkdownEditor extends Component {
	constructor( props ) {
		super( props );

		var value = props.defaultValue;
		var hash = {};
		var out;
		if ( props.id ) {
			var previous = localStorage.getItem( props.id );
			if ( previous ) {
				out = this.reMakeText( previous );
				value = out.text;
				hash = out.hash;
			}
		}

		this.state = {
			value: value,
			hash: hash
		};
	}

	componentDidMount() {
		this.interval = setInterval( this.handleAutosave, this.props.intervalTime );
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.state.value,
			previewRender: this.previewRender,
			toolbar: this.createToolbar(),
			status: [ 'lines', 'words' ],
			...this.props.options
		});

		// Add event listeners:
		this.simplemde.codemirror.on( 'change', () => {
			this.setState({
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

	componentDidUpdate() {
		this.simplemde.codemirror.refresh();
	}

	componentDidUnmount() {
		clearInterval( this.interval );
	}

	handleAutosave = () => {
		if ( this.props.id ) {
			// Get the text
			var text = this.state.value;
			text = this.replacePlaceholders( text );
			localStorage.setItem( this.props.id, text );
		}
	}

	replacePlaceholders( plainText ) {
		var replacementHash;
		const { hash } = this.state;
		for ( let key in hash ) {
			if ( hasOwnProp( hash, key ) ) {
				let id = replace( key, '<!--', '' );
				id = replace( id, '-->', '' );
				replacementHash = `<!-- START:${id} -->
${hash[ key ]}
<!-- END -->`;
				var re = new RegExp('\\s*' + key, 'g');
				plainText = plainText.replace( re, replacementHash );
			}
		}
		return plainText;
	}

	reMakeText = ( text ) => {
		const hash = {};
		var startIndex;
		var startS;
		var endE;
		var bigE;
		var key;
		var data;
		var newText;
		var section;

		newText = text;
		startIndex = 0;
		while ( text.indexOf( '<!-- START:', startIndex ) !== -1 ) {
			// We start on the first match
			startS = text.indexOf( '<!-- START:', startIndex );
			endE = text.indexOf( '-->', startS );
			bigE = text.indexOf( '<!-- END -->', startS );

			key = text.substr( startS + 11, endE - startS - 12 );
			data = text.substr( endE + 3, bigE - 1 - endE - 3 );
			section = text.substr( startS, bigE + 12 - startS );

			hash[ `<!--${key}-->` ] = data;
			newText = newText.replace( section, `<!--${key}-->` );

			// Update startIndex
			startIndex = bigE + 3;
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
		const title = document.title || 'provisoric';
		const toolbar = [
			'bold', 'italic', {
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
			{
				name: 'newLine',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					// When we get the cursor we want to get the head
					// Add the newline to the left of the cursor
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					while (startPoint.line !== endPoint.line) {
						var currentLine = cm.getLine(startPoint.line);
						if ( endsWith(currentLine, '\\') ) {
							cm.replaceRange( removeLast(currentLine),
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						} else {
							cm.replaceRange(currentLine + '\\',
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						}
						startPoint.line += 1;
					}
					cm.focus();
				},
				className: 'fa fa-arrow-down',
				title: 'Add newLine Separators'
			},
			{
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
			}, '|', 'heading', 'quote', 'unordered-list', 'ordered-list', 'link', '|', 'preview', 'side-by-side', 'fullscreen', '|',
			{
				name: 'open_markdown',
				action: (editor) => {
					const input = document.createElement( 'input' );
					input.type = 'file';
					input.accept = '.md';
					input.addEventListener( 'change', this.handleFileSelect, false );
					input.click();
				},
				className: 'fa fa-folder-open',
				title: 'Open Markdown File'
			},
			{
				name: 'save_markdown',
				action: (editor) => {
					let text = this.simplemde.value();
					text = this.replacePlaceholders( text );
					const blob = new Blob([ text ], {
						type: 'text/html'
					});
					FileSaver.saveAs( blob, title+'.md' );
				},
				className: 'fa fa-file-text',
				title: 'Save Markdown File'
			},
			{
				name: 'html',
				action: (editor) => {
					const mdValue = this.simplemde.value();
					const body = this.previewRender( mdValue );
					const html = createHTML( title, body );
					const blob = new Blob([ html ], {
						type: 'text/html'
					});
					FileSaver.saveAs( blob, title+'.html' );
				},
				className: 'fa fa-save',
				title: 'Export to HTML File'
			}
		];
		if ( this.props.submitButton ) {
			toolbar.push({
				name: 'submit',
				action: (editor) => {
					const { session } = this.context;
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
				},
				className: 'fa fa-share-square',
				title: 'Submit'
			});
		}
		if ( this.props.voiceControl ) {
			toolbar.push({
				name: 'recorder',
				action: ( editor ) => {
					this.voiceRef.handleClick();
				},
				className: 'fa fa-microphone',
				title: 'Record Text'
			});
		}
		return toolbar;
	}

	recordedText = (text) => {
		var sel = this.simplemde.codemirror.somethingSelected();
		if ( sel ) {
			this.simplemde.codemirror.replaceSelection( text);
		}
		else {
			var c = this.simplemde.codemirror.getCursor();
			this.simplemde.codemirror.replaceRange( text, c);
		}
	}

	previewRender = ( plainText ) => {
		// Take the plaintext and insert the images via hash
		plainText = this.replacePlaceholders( plainText );

		// Now render the markdown
		return md.render( plainText );
	}

	allowDrop( event ) {
		event.preventDefault();
	}

	renderVoiceControl() {
		if ( !this.props.voiceControl ) return null;
		return (
			<VoiceInput mode="status"
				language={this.props.language}
				timeout={this.props.voiceTimeout}
				width='90%'
				onFinalText={this.recordedText} ref={( voice ) => { this.voiceRef = voice; }} />
		);
	}

	render() {
		return (
			<div className="markdown-editor">
				<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
				{ this.renderVoiceControl() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

MarkdownEditor.defaultProps = {
	autoSave: true,
	defaultValue: '',
	intervalTime: 3000,
	language: 'en-US',
	onChange() {},
	options: {},
	submitButton: false,
	voiceControl: false,
	voiceTimeout: 5000
};


// PROPERTY TYPES //

MarkdownEditor.propTypes = {
	autoSave: PropTypes.bool,
	defaultValue: PropTypes.string,
	intervalTime: PropTypes.number,
	language: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.object,
	submitButton: PropTypes.bool,
	voiceControl: PropTypes.bool,
	voiceTimeout: PropTypes.number
};

MarkdownEditor.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default MarkdownEditor;
